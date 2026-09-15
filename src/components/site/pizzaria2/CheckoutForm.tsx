import { useEffect, useMemo, useState } from "react";
import { CheckCircle2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/pizzaria2/cart";
import { formatCurrency } from "@/lib/pizzaria2/menu";
import { useStore } from "@/lib/pizzaria2/store-provider";
import { useMenu } from "@/lib/pizzaria2/menu-provider";
import { montarMensagemDoPedido } from "@/lib/pizzaria2/mensagem-do-pedido";
import { lerContextoDeMesa } from "@/lib/contexto-de-mesa";
import { loadCustomerDetails, saveCustomerDetails } from "@/lib/pizzaria2/customer-details";
import { formatCep, isCompleteCep, lookupCep, normalizeCep } from "@/lib/pizzaria2/cep-lookup";

const PAYMENT_LABEL: Record<string, string> = {
  PIX: "Pix",
  CREDIT_CARD: "Cartão de crédito",
  DEBIT_CARD: "Cartão de débito",
  CASH: "Dinheiro",
};

export function CheckoutForm({ onClose }: { onClose: () => void }) {
  const storeInfo = useStore();
  const { lines, subtotal, deliveryFee, clearCart } = useCart();
  const { categories, products } = useMenu();

  /*
   * A linha do carrinho guarda só os ids das opções escolhidas. A mensagem do
   * WhatsApp precisa dos nomes, então o catálogo em memória é indexado aqui —
   * sem isso a loja receberia "opção c1-g1-o2" em vez de "Bem passado".
   */
  const nomeDaOpcao = useMemo(() => {
    const mapa = new Map<string, string>();
    for (const grupos of [
      ...categories.map((c) => c.optionGroups),
      ...products.map((p) => p.optionGroups),
    ]) {
      for (const g of grupos ?? []) {
        for (const o of g.options) mapa.set(o.id, o.name);
      }
    }
    return (id: string) => mapa.get(id);
  }, [categories, products]);
  const [type, setType] = useState<"DELIVERY" | "PICKUP">(
    storeInfo.acceptsDelivery === false ? "PICKUP" : "DELIVERY",
  );
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [complement, setComplement] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [cep, setCep] = useState("");
  const [cepStatus, setCepStatus] = useState<"idle" | "loading" | "notfound">("idle");
  const [paymentMethod, setPaymentMethod] = useState("PIX");
  const [tableId, setTableId] = useState<string | null>(null);
  const [tableNumber, setTableNumber] = useState<number | null>(null);
  const [deviceToken, setDeviceToken] = useState<string | null>(null);
  const isTableOrder = tableId !== null;
  /*
   * ESTE PEDIDO É DE MESA OU É PÚBLICO?
   *
   * A resposta vem inteira do contexto desta loja. Antes vinha de três chaves
   * globais e perpétuas do `localStorage`, e quem tivesse escaneado uma mesa
   * qualquer, um dia, em qualquer loja, caía aqui como pedido de mesa: sem
   * opção de entrega, com o nome trocado por "Mesa N", e recusado no servidor
   * por um PIN que aquele pedido nunca deveria ter envolvido.
   *
   * `null` é vitrine pública — e é o que o módulo devolve para contexto de
   * outra loja, vencido, ou apenas legado.
   */
  useEffect(() => {
    const contexto = lerContextoDeMesa(storeInfo.slug);
    if (!contexto) return;

    setTableId(contexto.tableId);
    setTableNumber(contexto.tableNumber);
    setDeviceToken(contexto.deviceToken);
    // Pedido de mesa é sempre retirada: o cliente já está sentado nela.
    setType("PICKUP");
  }, [storeInfo.slug]);


  const [note, setNote] = useState("");
  const [error, setError] = useState<string | null>(null);
  /** Retirada não paga entrega, por mais que o carrinho já tenha somado a taxa. */
  const taxaAplicada = type === "DELIVERY" ? deliveryFee : 0;
  const totalDoPedido = subtotal + taxaAplicada;

  /** Pedido montado e já aberto no WhatsApp. Nada foi gravado em lugar nenhum. */
  const [placed, setPlaced] = useState<{
    total: number;
    whatsappHref: string;
  } | null>(null);

  const payments = storeInfo.acceptedPaymentMethods;

  // Filled after mount, not in a state initialiser: localStorage does not
  // exist on the server, so seeding it during the first render would make the
  // client markup disagree with the server's and break hydration.
  useEffect(() => {
    const saved = loadCustomerDetails(storeInfo.slug);
    if (!saved.phone && !saved.name) return;
    setName(saved.name);
    setPhone(saved.phone);
    setStreet(saved.street);
    setNumber(saved.number);
    setComplement(saved.complement);
    setNeighborhood(saved.neighborhood);
    setCity(saved.city);
    setState(saved.state);
    setCep(saved.cep);
    if (storeInfo.acceptedPaymentMethods.includes(saved.paymentMethod)) {
      setPaymentMethod(saved.paymentMethod);
    }
    if (saved.type === "PICKUP" ? storeInfo.acceptsPickup : storeInfo.acceptsDelivery) {
      setType(saved.type);
    }
  }, [storeInfo.slug]);

  // Mirrors the server rule. Without it a short phone makes the server-side
  // validator throw, and the mutation's onError shows a generic 'tente
  // novamente' — hiding the one thing the person needs to know.
  function localValidation(): string | null {
    if (phone.replace(/\D/g, "").length < 10) {
      return 'Informe um WhatsApp válido, com DDD.';
    }
    if (type === 'DELIVERY' && !street.trim()) {
      return 'Informe o endereço de entrega.';
    }
    return null;
  }

  // Fires when the CEP is complete. Aborts the previous request so a fast
  // typist does not have an earlier answer overwrite a later one.
  useEffect(() => {
    if (!isCompleteCep(cep)) {
      setCepStatus("idle");
      return;
    }
    const controller = new AbortController();
    setCepStatus("loading");
    lookupCep(cep, controller.signal).then((address) => {
      if (controller.signal.aborted) return;
      if (!address) {
        setCepStatus("notfound");
        return;
      }
      setCepStatus("idle");
      // Only fills what the lookup actually returned: some CEPs cover a whole
      // city and come back without a street, and blanking a line the person
      // already typed would be worse than leaving it alone.
      if (address.street) setStreet(address.street);
      if (address.neighborhood) setNeighborhood(address.neighborhood);
      if (address.city) setCity(address.city);
      if (address.state) setState(address.state);
    });
    return () => controller.abort();
  }, [cep]);

  /*
   * Cupom e desconto em folha ficaram fora desta etapa: os dois são validados
   * contra o banco, e um campo que só sabe responder "inválido" demonstra pior
   * que a ausência dele. Os componentes seguem no projeto modelo, prontos para
   * voltar junto com o backend.
   */

  /**
   * Fecha o pedido montando a mensagem e abrindo o WhatsApp da loja.
   *
   * NÃO existe gravação: nem banco, nem endpoint, nem número de pedido. O
   * pedido passa a existir quando a pessoa envia a mensagem — antes disso ele
   * só existe nesta aba. Por isso a tela seguinte fala em "revisar e enviar",
   * e não em "pedido recebido": prometer recebimento sem ninguém do outro lado
   * seria mentir para quem estiver demonstrando o template.
   */
  function enviarParaWhatsApp() {
    const problema = localValidation();
    if (problema) {
      setError(problema);
      return;
    }
    setError(null);

    const nomeDoCliente =
      tableId && tableNumber ? `Mesa ${tableNumber}` : name.trim();

    const mensagem = montarMensagemDoPedido({
      nomeDaLoja: storeInfo.storeName,
      linhas: lines,
      nomeDaOpcao,
      tipo: type,
      cliente: { nome: nomeDoCliente, telefone: phone },
      endereco:
        type === "DELIVERY"
          ? {
              rua: street,
              numero: number,
              complemento: complement,
              bairro: neighborhood,
              cidade: city,
              estado: state,
              cep: normalizeCep(cep),
            }
          : undefined,
      formaDePagamento: paymentMethod,
      observacao: note.trim() || undefined,
      subtotal,
      taxaDeEntrega: taxaAplicada,
      total: totalDoPedido,
    });

    const href = storeInfo.whatsappHref(mensagem);

    // Guardado só depois de a validação passar, para um preenchimento pela
    // metade não virar o endereço sugerido da próxima vez.
    saveCustomerDetails(storeInfo.slug, {
      name, phone, street, number, complement, neighborhood, city, state, cep, type, paymentMethod,
    });

    // Abre antes de limpar o carrinho: se o navegador bloquear o popup, o
    // botão da tela seguinte continua sendo o caminho.
    window.open(href, "_blank", "noopener,noreferrer");
    setPlaced({ total: totalDoPedido, whatsappHref: href });
    clearCart();
  }


  if (placed) {
    return (
      <Overlay onClose={onClose}>
        <div className="text-center">
          <CheckCircle2 className="mx-auto size-14 text-emerald-500" />
          <h2 className="mt-4 font-display text-2xl font-bold text-charcoal">
            Pedido pronto para enviar
          </h2>
          {/*
            O TEXTO NÃO DIZ "PEDIDO RECEBIDO" DE PROPÓSITO.

            Nesta etapa nada é gravado: o pedido só passa a existir quando a
            mensagem chega na loja pelo WhatsApp. Dizer "recebido" aqui criaria
            a impressão de que alguém já está preparando, quando a conversa
            talvez nem tenha sido enviada.
          */}
          <p className="mt-1 text-charcoal/60">
            Abrimos o WhatsApp de {storeInfo.storeName} com o resumo do seu
            pedido. Envie a mensagem para a loja confirmar.
          </p>
          <p className="mt-1 text-lg font-bold text-charcoal">
            {formatCurrency(placed.total)}
          </p>

          {/*
            O botão repete a abertura porque o `window.open` pode ter sido
            bloqueado pelo navegador — e aí esta é a única saída da tela.
            `--on-primary`, e não `text-white`: a cor primária é escolhida por
            loja, e um branco fixo some em cima de uma cor clara.
          */}
          <a
            href={placed.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 flex items-center justify-center gap-2 rounded-full bg-tomato px-6 py-3 font-semibold text-[color:var(--on-primary)] transition-colors hover:bg-tomato/90"
          >
            Abrir o WhatsApp →
          </a>
          <button
            type="button"
            onClick={onClose}
            className="mt-3 text-sm text-charcoal/50 hover:text-charcoal"
          >
            Fechar
          </button>
        </div>
      </Overlay>
    );
  }


  return (
    <Overlay onClose={onClose}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          enviarParaWhatsApp();
        }}
        className="space-y-4"
      >
        <h2 className="font-display text-2xl font-bold text-charcoal">Finalizar pedido</h2>

        <div className="flex gap-2">
          {storeInfo.acceptsDelivery && !isTableOrder && (
            <TypeButton active={type === "DELIVERY"} onClick={() => setType("DELIVERY")}>
              Entrega
            </TypeButton>
          )}
          {storeInfo.acceptsPickup && (
            <TypeButton active={type === "PICKUP"} onClick={() => setType("PICKUP")}>
              Retirada
            </TypeButton>
          )}
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Field label="Seu nome">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              minLength={2}
              className="w-full rounded-xl border border-charcoal/15 px-3 py-2.5 text-base md:text-sm text-charcoal"
            />
          </Field>
          <Field label="WhatsApp">
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              placeholder="(11) 98765-4321"
              className="w-full rounded-xl border border-charcoal/15 px-3 py-2.5 text-base md:text-sm text-charcoal"
            />
          </Field>
        </div>

        {type === "DELIVERY" && (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <Field label="CEP">
                <input
                  value={formatCep(cep)}
                  onChange={(e) => setCep(normalizeCep(e.target.value))}
                  inputMode="numeric"
                  placeholder="00000-000"
                  className="w-full rounded-xl border border-charcoal/15 px-3 py-2.5 text-base md:text-sm text-charcoal"
                />
                {cepStatus === "loading" && (
                  <span className="mt-1 block text-xs text-charcoal/50">Buscando endereço...</span>
                )}
                {cepStatus === "notfound" && (
                  <span className="mt-1 block text-xs text-tomato">
                    CEP não encontrado. Preencha o endereço manualmente.
                  </span>
                )}
              </Field>
            </div>
            <div className="sm:col-span-3" />
            <div className="sm:col-span-4">
              <Field label="Rua">
                <input
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                  required
                  className="w-full rounded-xl border border-charcoal/15 px-3 py-2.5 text-base md:text-sm text-charcoal"
                />
              </Field>
            </div>
            <div className="sm:col-span-2">
              <Field label="Número">
                <input
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  required
                  className="w-full rounded-xl border border-charcoal/15 px-3 py-2.5 text-base md:text-sm text-charcoal"
                />
              </Field>
            </div>
            <div className="sm:col-span-3">
              <Field label="Complemento">
                <input
                  value={complement}
                  onChange={(e) => setComplement(e.target.value)}
                  className="w-full rounded-xl border border-charcoal/15 px-3 py-2.5 text-base md:text-sm text-charcoal"
                />
              </Field>
            </div>
            <div className="sm:col-span-3">
              <Field label="Bairro">
                <input
                  value={neighborhood}
                  onChange={(e) => setNeighborhood(e.target.value)}
                  className="w-full rounded-xl border border-charcoal/15 px-3 py-2.5 text-base md:text-sm text-charcoal"
                />
              </Field>
            </div>
            <div className="sm:col-span-5">
              <Field label="Cidade">
                <input
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full rounded-xl border border-charcoal/15 px-3 py-2.5 text-base md:text-sm text-charcoal"
                />
              </Field>
            </div>
            <div className="sm:col-span-1">
              <Field label="UF">
                <input
                  value={state}
                  onChange={(e) => setState(e.target.value.toUpperCase().slice(0, 2))}
                  maxLength={2}
                  className="w-full rounded-xl border border-charcoal/15 px-3 py-2.5 text-base md:text-sm uppercase text-charcoal"
                />
              </Field>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Field label="Forma de pagamento">
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-full rounded-xl border border-charcoal/15 bg-white px-3 py-2.5 text-base md:text-sm text-charcoal"
            >
              {payments.map((p) => (
                <option key={p} value={p}>
                  {PAYMENT_LABEL[p] ?? p}
                </option>
              ))}
            </select>
          </Field>
        </div>

        <Field label="Observação (opcional)">
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            rows={2}
            placeholder="Ex: tocar o interfone 45 ao chegar."
            className="w-full rounded-xl border border-charcoal/15 px-3 py-2.5 text-base md:text-sm text-charcoal placeholder:text-charcoal/30"
          />
        </Field>

        {error && (
          <p className="rounded-xl border border-tomato/30 bg-tomato/5 px-4 py-3 text-sm text-tomato">
            {error}
          </p>
        )}

        <div className="flex flex-col gap-4 border-t border-charcoal/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs text-charcoal/50">
              {type === "DELIVERY" && taxaAplicada > 0
                ? `Itens + entrega de ${formatCurrency(taxaAplicada)}`
                : "Total do pedido"}
            </p>
            <p className="font-display text-xl font-bold text-charcoal">
              {formatCurrency(totalDoPedido)}
            </p>
          </div>
          <Button
            type="submit"
            className="h-auto w-full rounded-full bg-tomato px-8 py-4 text-base font-semibold text-[color:var(--on-primary)] hover:bg-tomato/90 sm:w-auto"
          >
            Revisar no WhatsApp
          </Button>
        </div>
        <p className="text-center text-xs text-charcoal/45">
          A taxa de entrega e os descontos são calculados pela loja ao confirmar.
        </p>
      </form>
    </Overlay>
  );
}

function Overlay({ children, onClose }: { children: React.ReactNode; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="relative max-h-[92dvh] w-full max-w-xl overflow-y-auto overscroll-contain rounded-3xl bg-mozzarella p-6">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 text-charcoal/40 hover:text-charcoal"
          aria-label="Fechar"
        >
          <X className="size-5" />
        </button>
        {children}
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block space-y-1.5">
      <span className="text-sm font-medium text-charcoal">{label}</span>
      {children}
    </label>
  );
}

function TypeButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex-1 rounded-full border px-4 py-2.5 text-sm font-semibold transition-colors ${
        active
          ? "border-tomato bg-tomato text-[color:var(--on-primary)]"
          : "border-charcoal/15 text-charcoal hover:border-tomato/40"
      }`}
    >
      {children}
    </button>
  );
}
