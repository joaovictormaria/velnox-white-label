/**
 * O ÚNICO ponto de troca entre dados mockados e backend real.
 *
 * A rota `/$storeSlug` chama `getStorefront(slug)` no loader e recebe o mesmo
 * contrato que `getStorefrontMenuFn` devolve no velnoxia-APP. Quando os dados
 * reais entrarem, este arquivo passa a chamar a server function e o restante do
 * template continua igual — nenhum componente conhece a origem dos dados.
 *
 * Nada aqui toca banco, rede ou `process.env`: são módulos estáticos, o que
 * mantém o loader síncrono e o SSR trivial.
 */
import { montarAvaliacoes, montarLoja } from "./build";
import type { LojaMock, StorefrontPayload } from "./types";

import { acaiteria } from "./lojas/acaiteria";
import { cafeteria } from "./lojas/cafeteria";
import { doceria } from "./lojas/doceria";
import { hamburgueria } from "./lojas/hamburgueria";
import { pizzaria } from "./lojas/pizzaria";
import { restaurante } from "./lojas/restaurante";
import { saudavel } from "./lojas/saudavel";

/** Ordem em que as lojas aparecem em vitrines e listagens de demonstração. */
const LOJAS: LojaMock[] = [
  hamburgueria,
  pizzaria,
  acaiteria,
  restaurante,
  saudavel,
  cafeteria,
  doceria,
];

const POR_SLUG = new Map(LOJAS.map((l) => [l.slug, l]));

/** Slug usado quando alguém abre a vitrine sem escolher estabelecimento. */
export const LOJA_PADRAO = hamburgueria.slug;

export function listarLojas() {
  return LOJAS.map((l) => ({
    slug: l.slug,
    nome: l.nome,
    businessType: l.businessType,
    tagline: l.tagline,
  }));
}

export function lojaExiste(slug: string): boolean {
  return POR_SLUG.has(slug);
}

/**
 * Carrega a vitrine de um estabelecimento.
 *
 * Devolve `null` para slug desconhecido em vez de cair num padrão silencioso:
 * a rota transforma isso num 404, que é o que o backend real também faz para
 * loja inexistente, suspensa ou expirada.
 */
export function getStorefront(slug: string): StorefrontPayload | null {
  const def = POR_SLUG.get(slug);
  if (!def) return null;
  return montarLoja(def);
}

/**
 * Só o que o `<head>` precisa, sem montar o cardápio inteiro.
 *
 * O título da aba saía do slug ("Hamburgueria"), e não do nome do
 * estabelecimento ("Brasa & Osso"): no projeto modelo o slug ERA o nome da loja
 * com um sufixo, então derivar dele funcionava. Aqui os slugs são o segmento, e
 * a derivação passou a mostrar a categoria no lugar da marca.
 */
export function getResumoDaLoja(slug: string) {
  const def = POR_SLUG.get(slug);
  return def ? { nome: def.nome, descricao: def.descricao } : null;
}

/** As avaliações têm provider próprio, separado do payload do cardápio. */
export function getAvaliacoes(slug: string) {
  const def = POR_SLUG.get(slug);
  return def ? montarAvaliacoes(def) : [];
}
