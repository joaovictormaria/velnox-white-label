import { useEffect, useMemo, useState } from "react";
import type { StorePayload } from "./store-provider";

const STORAGE_KEY = "velnox:onboarding";

/**
 * O que a pessoa preencheu no formulário de "Criar meu site".
 *
 * Todos os campos são opcionais de propósito: quem abre uma vitrine direto,
 * sem passar pelo formulário, não tem nada aqui — e nesse caso os dados da
 * loja mockada é que devem valer. Uma versão anterior deste módulo devolvia
 * defaults de demonstração ("Bella Pizza", "(11) 99999-9999"); reaproveitá-los
 * agora apagaria o nome de toda loja mockada.
 */
export type DadosDoFormulario = {
  businessType?: string;
  businessName?: string;
  businessPhone?: string;
  businessEmail?: string;
};

function limpar(valor: unknown): string | undefined {
  return typeof valor === "string" && valor.trim() ? valor.trim() : undefined;
}

/**
 * Lê o formulário do `sessionStorage`.
 *
 * Num efeito, e não durante a renderização: `sessionStorage` não existe no
 * servidor, e semear o estado com ele faria o HTML do cliente discordar do
 * servidor e quebrar a hidratação.
 */
export function useDadosDoFormulario(): DadosDoFormulario | null {
  const [dados, setDados] = useState<DadosDoFormulario | null>(null);

  useEffect(() => {
    let bruto: string | null = null;
    try {
      bruto = sessionStorage.getItem(STORAGE_KEY);
    } catch {
      // Armazenamento bloqueado (aba anônima, cookies desligados): segue no mock.
      return;
    }
    if (!bruto) return;
    try {
      const lido = JSON.parse(bruto) as Record<string, unknown>;
      const dados: DadosDoFormulario = {
        businessType: limpar(lido.businessType),
        businessName: limpar(lido.businessName),
        businessPhone: limpar(lido.businessPhone),
        businessEmail: limpar(lido.businessEmail),
      };
      // Objeto sem nenhum campo útil não deve disparar sobrescrita nenhuma.
      if (Object.values(dados).some(Boolean)) setDados(dados);
    } catch {
      // JSON corrompido — mantém o mock.
    }
  }, []);

  return dados;
}

/**
 * A loja que a vitrine deve mostrar: o mock, com os dados do formulário por cima.
 *
 * Este é o ÚNICO ponto de junção entre formulário e vitrine. O resultado é um
 * `StorePayload` comum — o mesmo contrato que o backend devolverá um dia —, então
 * nenhum componente precisa saber que existe formulário: todos seguem lendo de
 * `useStore()`. Sem dados preenchidos, devolve o mock intocado.
 *
 * `businessType` NÃO é sobrescrito: ele escolhe as fotos e a copy do hero, que
 * precisam continuar combinando com os produtos da loja mockada. Trocá-lo poria
 * um hero de açaí em cima de um cardápio de hambúrguer.
 */
export function useLojaComDadosDoFormulario(mock: StorePayload): StorePayload {
  const dados = useDadosDoFormulario();

  return useMemo(() => {
    if (!dados) return mock;
    return {
      ...mock,
      storeName: dados.businessName ?? mock.storeName,
      whatsappNumber: dados.businessPhone ?? mock.whatsappNumber,
      email: dados.businessEmail ?? mock.email,
    };
  }, [mock, dados]);
}

export function whatsappLink(phone: string, message?: string) {
  const digits = phone.replace(/\D/g, "");
  const withCountryCode = digits.startsWith("55") ? digits : `55${digits}`;
  const query = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${withCountryCode}${query}`;
}
