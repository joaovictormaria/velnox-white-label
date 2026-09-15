import { semana } from "../build";
import type { LojaMock } from "../types";

/** Dados fictícios. Nenhum contato, endereço ou cliente real. */
export const saudavel: LojaMock = {
  slug: "saudavel",
  businessType: "saudavel",
  nome: "Verde Lima",
  tagline: "Comida de verdade, macros na etiqueta",
  descricao:
    "Cozinha saudável com bowls, saladas e pratos quentes. Todos os itens com calorias e macronutrientes informados.",
  heroSubtitle: "Monte seu prato e peça agora.",
  cores: { modo: "GRADIENT", primaria: "#15803d", secundaria: "#65a30d" },
  sobre: {
    eyebrow: "Nosso jeito",
    titulo: "Macros na etiqueta, sem discurso",
    corpo:
      "Todo prato sai com calorias, proteína, carboidrato e gordura impressos. Não vendemos detox nem promessa de emagrecimento — vendemos comida boa com a informação que você precisa para decidir. Zero ultraprocessado na cozinha.",
    foto: "/catalogo-inicial/saudavel/salada-bowl.jpg",
  },
  fotos: [
    { legenda: "Bowls montados na hora", foto: "/catalogo-inicial/saudavel/bowl-salmao.jpg" },
    { legenda: "Horta de temperos da casa", foto: "/catalogo-inicial/saudavel/salada-frango-abacate.jpg" },
  ],
  contato: {
    whatsapp: "11987650005",
    email: "contato@verdelima.exemplo",
    instagram: "https://instagram.com/exemplo.verdelima",
  },
  endereco: {
    rua: "Alameda dos Ipês",
    numero: "89",
    bairro: "Itaim Bibi",
    cidade: "São Paulo",
    estado: "SP",
    cep: "04532-050",
  },
  entrega: {
    taxa: 7.5,
    freteGratisAcimaDe: 70,
    pedidoMinimo: 28,
    entregaMin: 25,
    entregaMax: 45,
    retiradaMin: 10,
    retiradaMax: 20,
    aceitaEntrega: true,
    aceitaRetirada: true,
    pagamentos: ["PIX", "CREDIT_CARD", "DEBIT_CARD"],
  },
  horarios: semana(
    { abre: "10:00", fecha: "21:00" },
    { SATURDAY: { abre: "11:00", fecha: "17:00" }, SUNDAY: { aberto: false, abre: "11:00", fecha: "17:00" } },
  ),
  categorias: [
    {
      nome: "Bowls",
      tipo: "PIZZA",
      icone: "Salad",
      badge: "Monte o seu",
      headline: "Base, proteína e finalização",
      subhead: "Todos com macros informados na descrição.",
      foto: "/catalogo-inicial/saudavel/salada-bowl.jpg",
      grupos: [
        {
          nome: "Base",
          min: 1,
          max: 1,
          opcoes: [
            { nome: "Arroz integral" },
            { nome: "Quinoa", preco: 5 },
            { nome: "Mix de folhas" },
            { nome: "Batata-doce", preco: 3 },
          ],
        },
        {
          nome: "Finalização",
          min: 0,
          max: 2,
          gratis: 1,
          opcoes: [
            { nome: "Molho de tahine" },
            { nome: "Castanha-de-caju", preco: 6 },
            { nome: "Semente de abóbora", preco: 4 },
            { nome: "Azeite e limão" },
          ],
        },
      ],
      produtos: [
        {
          nome: "Bowl de Frango Grelhado",
          desc: "180g de frango, base à escolha, brócolis e grão-de-bico. 520 kcal · 42g proteína.",
          preco: 38.9,
          tag: "Mais pedido",
          foto: "/catalogo-inicial/saudavel/salada-frango-abacate.jpg",
          tamanhos: [
            { label: "Padrão", preco: 38.9 },
            { label: "Reforçado", preco: 46.9 },
          ],
        },
        {
          nome: "Bowl de Salmão",
          desc: "Salmão selado, edamame, pepino e gergelim. 610 kcal · 38g proteína.",
          preco: 52.9,
          foto: "/catalogo-inicial/saudavel/bowl-salmao.jpg",
          tamanhos: [
            { label: "Padrão", preco: 52.9 },
            { label: "Reforçado", preco: 62.9 },
          ],
        },
        {
          nome: "Bowl Vegano de Tofu",
          desc: "Tofu marinado, abóbora assada e couve crispy. 480 kcal · 26g proteína.",
          preco: 36.9,
          foto: "/catalogo-inicial/saudavel/salada-bowl.jpg",
          tamanhos: [{ label: "Padrão", preco: 36.9 }],
        },
        {
          nome: "Bowl de Carne Magra",
          desc: "Patinho em cubos, arroz integral e legumes no vapor. 560 kcal · 44g proteína.",
          preco: 44.9,
          foto: "/catalogo-inicial/saudavel/salada-frango-abacate.jpg",
          tamanhos: [
            { label: "Padrão", preco: 44.9 },
            { label: "Reforçado", preco: 53.9 },
          ],
        },
      ],
    },
    {
      nome: "Saladas",
      icone: "Leaf",
      headline: "Frescas, montadas na hora",
      produtos: [
        { nome: "Caesar de Frango", desc: "Alface romana, frango grelhado, parmesão e croutons integrais. 420 kcal.", preco: 34.9, foto: "/catalogo-inicial/saudavel/salada-frango-abacate.jpg" },
        { nome: "Caprese de Búfala", desc: "Tomate, muçarela de búfala, manjericão e azeite. 380 kcal.", preco: 32.9, foto: "/catalogo-inicial/saudavel/salada-bowl.jpg" },
        { nome: "Salada de Quinoa", desc: "Quinoa, grão-de-bico, pepino, hortelã e limão. 340 kcal.", preco: 31.9, tag: "Vegana", foto: "/catalogo-inicial/saudavel/bowl-salmao.jpg" },
      ],
    },
    {
      nome: "Pratos Quentes",
      icone: "ChefHat",
      headline: "Para quem quer comida de panela leve",
      produtos: [
        { nome: "Escondidinho de Batata-doce", desc: "Carne desfiada magra e purê de batata-doce. 540 kcal.", preco: 39.9 },
        { nome: "Panqueca de Aveia", desc: "Recheio de frango e ricota, molho de tomate fresco. 460 kcal.", preco: 36.9 },
        { nome: "Omelete de Claras", desc: "Quatro claras, espinafre, tomate e queijo cottage. 280 kcal.", preco: 28.9 },
      ],
    },
    {
      nome: "Sucos e Bebidas",
      icone: "GlassWater",
      headline: "Sem açúcar adicionado",
      produtos: [
        { nome: "Suco Verde", desc: "Couve, maçã, gengibre e limão — 400ml.", preco: 16.9, tag: "Mais pedido", foto: "/catalogo-inicial/comum/suco-natural.jpg" },
        { nome: "Suco de Beterraba", desc: "Beterraba, cenoura e laranja — 400ml.", preco: 16.9 },
        { nome: "Smoothie de Frutas Vermelhas", desc: "Morango, framboesa, banana e iogurte natural — 400ml.", preco: 19.9 },
        { nome: "Água de Coco", desc: "Natural, 300ml.", preco: 8.9 },
      ],
    },
    {
      nome: "Snacks",
      icone: "Nut",
      produtos: [
        { nome: "Mix de Castanhas", desc: "Castanha-do-pará, caju e amêndoa — 50g.", preco: 14.9 },
        { nome: "Bolinho de Banana e Aveia", desc: "Sem açúcar refinado, duas unidades.", preco: 12.9 },
      ],
    },
  ],
  extras: [
    { nome: "Proteína extra (100g)", preco: 12.9, categorias: ["Bowls", "Saladas", "Pratos Quentes"] },
    { nome: "Abacate", preco: 8.9, categorias: ["Bowls", "Saladas"] },
    { nome: "Ovo cozido", preco: 4.5, categorias: ["Bowls", "Saladas"] },
    { nome: "Queijo cottage", preco: 6.9, categorias: ["Bowls", "Saladas"] },
    { nome: "Castanhas", preco: 6.9, categorias: ["Bowls", "Saladas"] },
  ],
  promocoes: [
    {
      eyebrow: "Plano da semana",
      titulo: "5 bowls por R$ 169",
      descricao: "Um bowl por dia útil, retirada ou entrega agendada.",
      preco: 169,
      precoOriginal: 194.5,
      foto: "/catalogo-inicial/saudavel/salada-bowl.jpg",
    },
    {
      eyebrow: "Combo leve",
      titulo: "Bowl + suco verde por R$ 49",
      descricao: "Válido de segunda a sexta, no almoço.",
      preco: 49,
      precoOriginal: 55.8,
      foto: "/catalogo-inicial/saudavel/bowl-salmao.jpg",
    },
  ],
  posts: [
    {
      titulo: "Por que informamos os macros",
      corpo:
        "Quem treina, quem controla glicemia e quem só quer comer melhor precisa do mesmo dado: o que tem no prato. Pesamos cada componente e a etiqueta sai com o valor real, não com estimativa de tabela.",
      diasAtras: 6,
      curtidas: 44,
    },
    {
      titulo: "Não vendemos detox",
      corpo:
        "Suco não desintoxica ninguém — o fígado faz isso sozinho. Nossos sucos estão aqui porque são gostosos e nutritivos, e é assim que vamos continuar descrevendo eles.",
      diasAtras: 16,
      curtidas: 61,
    },
  ],
  avaliacoes: [
    {
      nome: "Camila B.",
      nota: 5,
      comentario: "Finalmente comida saudável que tem gosto de comida. Os macros ajudam demais.",
      resposta: "Obrigado, Camila! É exatamente a ideia.",
      diasAtras: 2,
      curtidas: 23,
    },
    {
      nome: "Diego F.",
      nota: 5,
      comentario: "Bowl de salmão reforçado sustenta a tarde inteira.",
      diasAtras: 9,
      curtidas: 8,
    },
    {
      nome: "Patrícia G.",
      nota: 4,
      comentario: "Tudo ótimo, só acho a porção de castanhas pequena pelo preço.",
      diasAtras: 20,
      curtidas: 5,
    },
  ],
};
