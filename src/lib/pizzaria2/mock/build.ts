/**
 * Expande o formato compacto de autoria (`LojaMock`) para o contrato que o
 * template consome (`StorefrontPayload`).
 *
 * Só existe para que os arquivos em `lojas/` descrevam a loja e nada mais: ids,
 * slugs e o cruzamento de adicionais com categorias são mecânicos, e escrevê-los
 * à mão sete vezes seria a maneira mais rápida de as lojas divergirem entre si.
 *
 * Quando os dados reais chegarem, este arquivo desaparece junto com `lojas/` —
 * o backend já devolve o contrato final. `get-store.ts` é o único ponto de troca.
 */
import type {
  HorarioMock,
  Weekday,
  CategoriaMock,
  GrupoDeOpcoesMock,
  LojaMock,
  StorefrontPayload,
} from "./types";

export function slugify(valor: string): string {
  return valor
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/**
 * Caminho da foto dentro de `public/`.
 *
 * Começou usando um banco de imagens por palavra-chave, e o resultado foi uma
 * parede branca no lugar do hero da hamburgueria: busca por palavra não garante
 * o assunto. As fotos agora são arquivos reais por segmento, e um produto sem
 * foto devolve `null` de propósito — o template já desenha o ladrilho com o
 * ícone da categoria, que é melhor que uma imagem que não é do prato.
 */
function foto(caminho: string | undefined): string | null {
  return caminho ?? null;
}

/** Data a N dias atrás, em ISO — mantém o mock sempre "recente". */
function diasAtras(dias: number): string {
  const d = new Date();
  d.setDate(d.getDate() - dias);
  return d.toISOString();
}

function montarGrupos(
  grupos: GrupoDeOpcoesMock[] | undefined,
  prefixo: string,
) {
  return (grupos ?? []).map((g, i) => {
    const gid = `${prefixo}-g${i + 1}`;
    return {
      id: gid,
      name: g.nome,
      minChoices: g.min ?? 0,
      maxChoices: g.max ?? 1,
      freeChoices: g.gratis ?? 0,
      options: g.opcoes.map((o, j) => ({
        id: `${gid}-o${j + 1}`,
        name: o.nome,
        price: o.preco ?? 0,
      })),
    };
  });
}

function montarCategoria(cat: CategoriaMock, slugLoja: string, idx: number) {
  const catId = `${slugLoja}-c${idx + 1}`;
  const catSlug = slugify(cat.nome);

  return {
    id: catId,
    name: cat.nome,
    slug: catSlug,
    badge: cat.badge ?? null,
    headline: cat.headline ?? null,
    subhead: cat.subhead ?? null,
    icon: cat.icone ?? null,
    imageUrl: foto(cat.foto),
    kind: (cat.tipo ?? "SIMPLE") as "PIZZA" | "SIMPLE",
    optionGroups: montarGrupos(cat.grupos, catId),
    products: cat.produtos.map((p, j) => {
      const prodId = `${catId}-p${j + 1}`;
      return {
        id: prodId,
        name: p.nome,
        slug: slugify(p.nome),
        description: p.desc,
        basePrice: p.preco,
        imageUrl: foto(p.foto),
        tag: p.tag ?? null,
        allowHalfAndHalf: p.meioAMeio ?? false,
        optionGroups: montarGrupos(p.grupos, prodId),
        sizes: (p.tamanhos ?? []).map((t, k) => ({
          categorySize: { id: `${catId}-t${k + 1}`, label: t.label },
          price: t.preco,
        })),
      };
    }),
  };
}

export function montarLoja(def: LojaMock): StorefrontPayload {
  const categories = def.categorias.map((c, i) =>
    montarCategoria(c, def.slug, i),
  );

  // Adicionais referenciam categorias pelo nome no mock; aqui viram ids.
  const idPorNomeDeCategoria = new Map(
    def.categorias.map((c, i) => [c.nome, `${def.slug}-c${i + 1}`]),
  );

  const extras = (def.extras ?? []).map((e, i) => ({
    id: `${def.slug}-e${i + 1}`,
    name: e.nome,
    price: e.preco,
    categoryIds: (e.categorias ?? [])
      .map((nome) => idPorNomeDeCategoria.get(nome))
      .filter((id): id is string => Boolean(id)),
    productIds: [],
  }));

  const promotions = (def.promocoes ?? []).map((p, i) => ({
    id: `${def.slug}-promo${i + 1}`,
    eyebrow: p.eyebrow,
    title: p.titulo,
    description: p.descricao,
    discount: p.desconto ?? null,
    price: p.preco ?? null,
    originalPrice: p.precoOriginal ?? null,
    imageUrl: foto(p.foto),
  }));

  const posts = (def.posts ?? []).map((p, i) => ({
    id: `${def.slug}-post${i + 1}`,
    title: p.titulo,
    body: p.corpo,
    imageUrl: foto(p.foto),
    publishedAt: diasAtras(p.diasAtras),
    likeCount: p.curtidas ?? 0,
  }));

  const store = {
    slug: def.slug,
    businessType: def.businessType,
    storeName: def.nome,
    tagline: def.tagline,
    heroSubtitle: def.heroSubtitle ?? null,
    aboutEyebrow: def.sobre.eyebrow,
    aboutTitle: def.sobre.titulo,
    aboutBody: def.sobre.corpo,
    aboutImageUrl: foto(def.sobre.foto),
    description: def.descricao,
    logoUrl: foto(def.logo),
    primaryColor: def.cores.primaria,
    colorMode: def.cores.modo,
    secondaryColor: def.cores.secundaria ?? null,
    tertiaryColor: def.cores.terciaria ?? null,
    whatsappNumber: def.contato.whatsapp,
    email: def.contato.email ?? null,
    instagramUrl: def.contato.instagram ?? null,
    facebookUrl: def.contato.facebook ?? null,
    tiktokUrl: def.contato.tiktok ?? null,
    addressStreet: def.endereco.rua,
    addressNumber: def.endereco.numero,
    addressComplement: def.endereco.complemento ?? null,
    addressNeighborhood: def.endereco.bairro,
    addressCity: def.endereco.cidade,
    addressState: def.endereco.estado,
    addressZipCode: def.endereco.cep,
    deliveryFee: def.entrega.taxa,
    freeDeliveryMinOrder: def.entrega.freteGratisAcimaDe ?? null,
    minOrderValue: def.entrega.pedidoMinimo,
    estimatedDeliveryMinMin: def.entrega.entregaMin,
    estimatedDeliveryMinMax: def.entrega.entregaMax,
    estimatedPickupMinMin: def.entrega.retiradaMin,
    estimatedPickupMinMax: def.entrega.retiradaMax,
    acceptsDelivery: def.entrega.aceitaEntrega,
    acceptsPickup: def.entrega.aceitaRetirada,
    acceptedPaymentMethods: def.entrega.pagamentos,
    openingHours: def.horarios.map((h) => ({
      weekday: h.dia,
      isOpen: h.aberto,
      opensAt: h.abre,
      closesAt: h.fecha,
    })),
    restaurantPhotos: (def.fotos ?? []).map((f, i) => ({
      id: `${def.slug}-foto${i + 1}`,
      url: f.foto,
      caption: f.legenda,
    })),
  };

  return { categories, extras, promotions, posts, store };
}

/** As avaliações não fazem parte do payload do cardápio — têm provider próprio. */
export function montarAvaliacoes(def: LojaMock) {
  return (def.avaliacoes ?? []).map((a, i) => ({
    id: `${def.slug}-av${i + 1}`,
    customerNameSnapshot: a.nome,
    rating: a.nota,
    comment: a.comentario,
    response: a.resposta ?? null,
    createdAt: diasAtras(a.diasAtras),
    likeCount: a.curtidas ?? 0,
    likedByMe: false,
  }));
}

const DIAS: Weekday[] = [
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
  "SUNDAY",
];

/**
 * Semana inteira com um horário padrão, e exceções por dia.
 * Evita repetir sete linhas quase idênticas em cada loja.
 */
export function semana(
  padrao: { abre: string; fecha: string },
  excecoes: Partial<Record<Weekday, { aberto?: boolean; abre?: string; fecha?: string }>> = {},
): HorarioMock[] {
  return DIAS.map((dia) => {
    const e = excecoes[dia];
    return {
      dia,
      aberto: e?.aberto ?? true,
      abre: e?.abre ?? padrao.abre,
      fecha: e?.fecha ?? padrao.fecha,
    };
  });
}
