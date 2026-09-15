/**
 * Monta a mensagem de WhatsApp com o pedido inteiro.
 *
 * Nesta etapa o WhatsApp é o destino final do checkout: não há banco, não há
 * número de pedido e nada é gravado. A mensagem precisa, por isso, carregar
 * tudo que a loja precisa para atender — item, quantidade, tamanho, adicionais,
 * observação, forma de entrega, taxa, total e os dados do cliente. Se faltar
 * algo aqui, some de vez.
 */
import type { CartLine } from "./cart";
import { formatCurrency } from "./menu";

export type DadosDoPedido = {
  nomeDaLoja: string;
  linhas: CartLine[];
  /** Resolve o id de uma opção escolhida para o nome legível. */
  nomeDaOpcao: (id: string) => string | undefined;
  tipo: "DELIVERY" | "PICKUP";
  cliente: { nome: string; telefone: string };
  endereco?: {
    rua: string;
    numero: string;
    complemento?: string;
    bairro: string;
    cidade: string;
    estado: string;
    cep: string;
  };
  formaDePagamento: string;
  observacao?: string;
  subtotal: number;
  taxaDeEntrega: number;
  total: number;
};

const ROTULO_DE_PAGAMENTO: Record<string, string> = {
  PIX: "Pix",
  CREDIT_CARD: "Cartão de crédito",
  DEBIT_CARD: "Cartão de débito",
  CASH: "Dinheiro",
};

function descreverLinha(linha: CartLine, nomeDaOpcao: DadosDoPedido["nomeDaOpcao"]): string {
  const partes: string[] = [];
  const titulo = linha.sizeLabel
    ? `${linha.qty}x ${linha.name} (${linha.sizeLabel})`
    : `${linha.qty}x ${linha.name}`;
  /*
   * O valor da linha inclui os adicionais, igual à conta do carrinho.
   *
   * Mostrando só `unitPrice * qty`, os adicionais apareciam listados abaixo com
   * o preço unitário e a soma das linhas não batia com o subtotal — a diferença
   * crescia com a quantidade, porque o adicional também é cobrado por unidade.
   * Quem recebe o pedido confere somando as linhas; elas precisam fechar.
   */
  const extrasPorUnidade = linha.extras.reduce((s, e) => s + e.price, 0);
  const totalDaLinha = (linha.unitPrice + extrasPorUnidade) * linha.qty;
  partes.push(`• ${titulo} — ${formatCurrency(totalDaLinha)}`);

  const opcoes = (linha.optionIds ?? [])
    .map(nomeDaOpcao)
    .filter((nome): nome is string => Boolean(nome));
  if (opcoes.length) partes.push(`   Opções: ${opcoes.join(", ")}`);

  if (linha.extras.length) {
    const extras = linha.extras
      .map((e) => (e.price > 0 ? `${e.label} (+${formatCurrency(e.price)})` : e.label))
      .join(", ");
    partes.push(`   Adicionais: ${extras}`);
  }

  if (linha.note) partes.push(`   Obs.: ${linha.note}`);

  return partes.join("\n");
}

export function montarMensagemDoPedido(d: DadosDoPedido): string {
  const l: string[] = [];

  l.push(`*Novo pedido — ${d.nomeDaLoja}*`);
  l.push("");
  l.push("*Itens*");
  l.push(d.linhas.map((linha) => descreverLinha(linha, d.nomeDaOpcao)).join("\n"));
  l.push("");

  l.push(`Subtotal: ${formatCurrency(d.subtotal)}`);
  if (d.tipo === "DELIVERY" && d.taxaDeEntrega > 0) {
    l.push(`Taxa de entrega: ${formatCurrency(d.taxaDeEntrega)}`);
  }
  l.push(`*Total: ${formatCurrency(d.total)}*`);
  l.push("");

  l.push(`*Forma de pagamento:* ${ROTULO_DE_PAGAMENTO[d.formaDePagamento] ?? d.formaDePagamento}`);
  l.push(`*Entrega:* ${d.tipo === "DELIVERY" ? "Entrega no endereço" : "Retirada no balcão"}`);
  l.push("");

  l.push("*Cliente*");
  l.push(d.cliente.nome);
  l.push(d.cliente.telefone);

  if (d.tipo === "DELIVERY" && d.endereco) {
    const e = d.endereco;
    l.push("");
    l.push("*Endereço de entrega*");
    l.push(`${e.rua}, ${e.numero}${e.complemento ? ` — ${e.complemento}` : ""}`);
    l.push(`${e.bairro} — ${e.cidade}/${e.estado}`);
    if (e.cep) l.push(`CEP ${e.cep}`);
  }

  if (d.observacao) {
    l.push("");
    l.push("*Observações*");
    l.push(d.observacao);
  }

  return l.join("\n");
}
