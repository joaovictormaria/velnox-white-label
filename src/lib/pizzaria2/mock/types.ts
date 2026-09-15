/**
 * Contratos dos dados da vitrine.
 *
 * Esta é a costura entre o template e a origem dos dados. Os tipos abaixo são
 * os MESMOS que o backend real devolve (`StorePayload` e `MenuPayload`, vindos
 * dos providers do template) — nenhum contrato novo é inventado aqui.
 *
 * Trocar mock por backend depois significa reescrever apenas `get-store.ts`.
 * Nenhum componente precisa mudar, porque todos leem de `useStore()`/`useMenu()`.
 */
import type { MenuPayload } from "../menu-provider";
import type { StorePayload, Weekday } from "../store-provider";

export type { MenuPayload, StorePayload, Weekday };

/** Exatamente o que o loader da rota entrega — igual ao retorno do backend real. */
export type StorefrontPayload = MenuPayload & { store: StorePayload };

/* -------------------------------------------------------------------------
 * Formato de autoria dos mocks.
 *
 * Os arquivos em `lojas/` são escritos neste formato compacto, e `build.ts` os
 * expande para o contrato completo acima. O motivo é legibilidade: ids, slugs e
 * o cruzamento de adicionais com categorias são mecânicos, e escrevê-los à mão
 * em sete lojas só cria oportunidade de divergência entre elas.
 * ------------------------------------------------------------------------- */

export type OpcaoMock = { nome: string; preco?: number };

export type GrupoDeOpcoesMock = {
  nome: string;
  /** Quantas escolhas o cliente precisa fazer. 0 = opcional. */
  min?: number;
  max?: number;
  /** Quantas escolhas não são cobradas (ex.: "3 complementos grátis"). */
  gratis?: number;
  opcoes: OpcaoMock[];
};

export type ProdutoMock = {
  nome: string;
  desc: string;
  preco: number;
  /** Selo do card, ex.: "Mais pedido". */
  tag?: string;
  /** Palavras em inglês para a foto de banco de imagens. */
  foto?: string;
  /** Preço por tamanho, quando a categoria tem tamanhos. */
  tamanhos?: { label: string; preco: number }[];
  grupos?: GrupoDeOpcoesMock[];
  meioAMeio?: boolean;
};

export type CategoriaMock = {
  nome: string;
  /** "pizza" usa a vitrine com foto grande e meio a meio; "simples" usa lista. */
  tipo?: "PIZZA" | "SIMPLE";
  badge?: string;
  headline?: string;
  subhead?: string;
  foto?: string;
  /** Nome do ícone lucide, entre as chaves de `ICONES_DE_CATEGORIA`. */
  icone?: string;
  /** Grupos herdados por todos os produtos da categoria. */
  grupos?: GrupoDeOpcoesMock[];
  produtos: ProdutoMock[];
};

export type ExtraMock = {
  nome: string;
  preco: number;
  /** Nomes das categorias em que este adicional aparece. Vazio = todas. */
  categorias?: string[];
};

export type PromocaoMock = {
  eyebrow: string;
  titulo: string;
  descricao: string;
  desconto?: string;
  preco?: number;
  precoOriginal?: number;
  foto?: string;
};

export type PostMock = {
  titulo: string;
  corpo: string;
  foto?: string;
  /** Dias atrás, para a data não envelhecer no mock. */
  diasAtras: number;
  curtidas?: number;
};

export type AvaliacaoMock = {
  nome: string;
  nota: number;
  comentario: string;
  resposta?: string;
  diasAtras: number;
  curtidas?: number;
};

export type HorarioMock = {
  dia: Weekday;
  aberto: boolean;
  abre: string;
  fecha: string;
};

/** Uma loja fictícia completa, no formato compacto de autoria. */
export type LojaMock = {
  slug: string;
  /** Chave de `hero-by-type.ts` — decide hero, copy e ícones do segmento. */
  businessType: string;
  nome: string;
  tagline: string;
  descricao: string;
  heroSubtitle?: string;
  logo?: string;
  /** Identidade visual: `brand-theme` deriva o resto e garante contraste. */
  cores: {
    modo: "SOLID" | "GRADIENT";
    primaria: string;
    secundaria?: string;
    terciaria?: string;
  };
  sobre: { eyebrow: string; titulo: string; corpo: string; foto?: string };
  /** Fotos do estabelecimento, usadas na seção "Nosso restaurante". */
  fotos?: { legenda: string; foto: string }[];
  contato: {
    whatsapp: string;
    email?: string;
    instagram?: string;
    facebook?: string;
    tiktok?: string;
  };
  endereco: {
    rua: string;
    numero: string;
    complemento?: string;
    bairro: string;
    cidade: string;
    estado: string;
    cep: string;
  };
  entrega: {
    taxa: number;
    freteGratisAcimaDe?: number;
    pedidoMinimo: number;
    entregaMin: number;
    entregaMax: number;
    retiradaMin: number;
    retiradaMax: number;
    aceitaEntrega: boolean;
    aceitaRetirada: boolean;
    pagamentos: string[];
  };
  horarios: HorarioMock[];
  categorias: CategoriaMock[];
  extras?: ExtraMock[];
  promocoes?: PromocaoMock[];
  posts?: PostMock[];
  avaliacoes?: AvaliacaoMock[];
};
