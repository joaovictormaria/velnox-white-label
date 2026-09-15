import { semana } from "../build";
import type { LojaMock } from "../types";

/** Dados fictícios. Nenhum contato, endereço ou cliente real. */
export const pizzaria: LojaMock = {
  slug: "pizzaria",
  businessType: "pizzaria",
  nome: "Forno di Pietra",
  tagline: "Massa de fermentação natural, forno a lenha",
  descricao:
    "Pizzaria de forno a lenha com massa de fermentação natural de 48 horas. Meio a meio em todos os sabores.",
  heroSubtitle: "Escolha seus sabores favoritos e peça agora.",
  cores: { modo: "GRADIENT", primaria: "#b91c1c", secundaria: "#15803d", terciaria: "#7f1d1d" },
  sobre: {
    eyebrow: "Nossa massa",
    titulo: "48 horas de fermentação natural",
    corpo:
      "Usamos levain próprio, alimentado há seis anos. A massa descansa 48 horas em câmara fria antes de ir ao forno a lenha a 380°C, onde assa em noventa segundos. É o que deixa a borda leve e a digestão fácil.",
    foto: "/catalogo-inicial/pizzaria/hero-pizza-2.jpg",
  },
  fotos: [
    { legenda: "Forno a lenha a 380°C", foto: "/catalogo-inicial/pizzaria/hero-pizza.jpg" },
    { legenda: "Massa em descanso", foto: "/catalogo-inicial/pizzaria/hero-pizza-3.jpg" },
    { legenda: "Salão da casa", foto: "/catalogo-inicial/pizzaria/frango-catupiry.jpg" },
  ],
  contato: {
    whatsapp: "11987650003",
    email: "contato@fornodipietra.exemplo",
    instagram: "https://instagram.com/exemplo.fornodipietra",
    facebook: "https://facebook.com/exemplo.fornodipietra",
  },
  endereco: {
    rua: "Rua Itacolomi",
    numero: "76",
    bairro: "Higienópolis",
    cidade: "São Paulo",
    estado: "SP",
    cep: "01239-020",
  },
  entrega: {
    taxa: 9.9,
    freteGratisAcimaDe: 120,
    pedidoMinimo: 40,
    entregaMin: 40,
    entregaMax: 60,
    retiradaMin: 20,
    retiradaMax: 30,
    aceitaEntrega: true,
    aceitaRetirada: true,
    pagamentos: ["PIX", "CREDIT_CARD", "DEBIT_CARD", "CASH"],
  },
  horarios: semana(
    { abre: "18:00", fecha: "23:30" },
    {
      MONDAY: { aberto: false, abre: "18:00", fecha: "23:30" },
      FRIDAY: { fecha: "00:30" },
      SATURDAY: { fecha: "00:30" },
    },
  ),
  categorias: [
    {
      nome: "Pizzas Tradicionais",
      tipo: "PIZZA",
      icone: "Pizza",
      badge: "Clássicas",
      headline: "As que nunca saem do cardápio",
      subhead: "Todas em massa de fermentação natural, com opção meio a meio.",
      foto: "/catalogo-inicial/pizzaria/hero-pizza.jpg",
      produtos: [
        {
          nome: "Margherita",
          desc: "Molho de tomate San Marzano, muçarela de búfala, manjericão fresco e azeite.",
          preco: 49.9,
          tag: "Mais pedida",
          meioAMeio: true,
          foto: "/catalogo-inicial/pizzaria/mussarela.jpg",
          tamanhos: [
            { label: "Média", preco: 49.9 },
            { label: "Grande", preco: 62.9 },
            { label: "Família", preco: 78.9 },
          ],
        },
        {
          nome: "Calabresa Artesanal",
          desc: "Calabresa curada na casa, cebola roxa e azeitona preta.",
          preco: 52.9,
          meioAMeio: true,
          foto: "/catalogo-inicial/pizzaria/calabresa.jpg",
          tamanhos: [
            { label: "Média", preco: 52.9 },
            { label: "Grande", preco: 65.9 },
            { label: "Família", preco: 82.9 },
          ],
        },
        {
          nome: "Quatro Queijos",
          desc: "Muçarela, gorgonzola, parmesão e provolone.",
          preco: 56.9,
          meioAMeio: true,
          foto: "/catalogo-inicial/pizzaria/quatro-queijos.jpg",
          tamanhos: [
            { label: "Média", preco: 56.9 },
            { label: "Grande", preco: 69.9 },
            { label: "Família", preco: 86.9 },
          ],
        },
        {
          nome: "Portuguesa",
          desc: "Presunto, ovo, cebola, azeitona, ervilha e muçarela.",
          preco: 54.9,
          meioAMeio: true,
          foto: "/catalogo-inicial/pizzaria/portuguesa.jpg",
          tamanhos: [
            { label: "Média", preco: 54.9 },
            { label: "Grande", preco: 67.9 },
            { label: "Família", preco: 84.9 },
          ],
        },
      ],
    },
    {
      nome: "Pizzas Especiais",
      tipo: "PIZZA",
      icone: "Flame",
      badge: "Da casa",
      headline: "Combinações autorais",
      foto: "/catalogo-inicial/pizzaria/frango-catupiry.jpg",
      produtos: [
        {
          nome: "Burrata e Pesto",
          desc: "Burrata inteira no centro, pesto de manjericão e tomate confitado.",
          preco: 74.9,
          tag: "Chef",
          meioAMeio: true,
          foto: "/catalogo-inicial/pizzaria/hero-pizza-2.jpg",
          tamanhos: [
            { label: "Média", preco: 74.9 },
            { label: "Grande", preco: 89.9 },
          ],
        },
        {
          nome: "Cogumelos e Trufa",
          desc: "Mix de shimeji, shiitake e paris com azeite trufado.",
          preco: 72.9,
          meioAMeio: true,
          foto: "/catalogo-inicial/pizzaria/hero-pizza-3.jpg",
          tamanhos: [
            { label: "Média", preco: 72.9 },
            { label: "Grande", preco: 87.9 },
          ],
        },
        {
          nome: "Nduja Picante",
          desc: "Nduja calabresa, muçarela e mel de laranjeira.",
          preco: 69.9,
          meioAMeio: true,
          foto: "/catalogo-inicial/pizzaria/pepperoni.jpg",
          tamanhos: [
            { label: "Média", preco: 69.9 },
            { label: "Grande", preco: 84.9 },
          ],
        },
      ],
    },
    {
      nome: "Bordas",
      icone: "Wheat",
      headline: "Para fechar a pizza",
      produtos: [
        { nome: "Borda de Catupiry", desc: "Requeijão cremoso na borda.", preco: 12.9 },
        { nome: "Borda de Cheddar", desc: "Cheddar cremoso na borda.", preco: 12.9 },
        { nome: "Borda de Chocolate", desc: "Para as pizzas doces.", preco: 14.9 },
      ],
    },
    {
      nome: "Pizzas Doces",
      tipo: "PIZZA",
      icone: "CakeSlice",
      headline: "Para terminar",
      foto: "/catalogo-inicial/pizzaria/chocolate-morango.jpg",
      produtos: [
        {
          nome: "Chocolate com Morango",
          desc: "Chocolate meio amargo derretido e morangos frescos.",
          preco: 52.9,
          meioAMeio: true,
          foto: "/catalogo-inicial/pizzaria/chocolate-morango.jpg",
          tamanhos: [
            { label: "Média", preco: 52.9 },
            { label: "Grande", preco: 64.9 },
          ],
        },
        {
          nome: "Banana com Canela",
          desc: "Banana caramelizada, canela e leite condensado.",
          preco: 48.9,
          meioAMeio: true,
          tamanhos: [{ label: "Média", preco: 48.9 }],
        },
      ],
    },
    {
      nome: "Bebidas",
      icone: "GlassWater",
      produtos: [
        { nome: "Refrigerante 2L", desc: "Cola, guaraná ou laranja.", preco: 14.9 },
        { nome: "Vinho Tinto da Casa", desc: "Sangiovese, taça 150ml.", preco: 26.9 },
        { nome: "Cerveja Long Neck", desc: "Pilsen gelada, 330ml.", preco: 12.9 },
        { nome: "Água Mineral", desc: "Com ou sem gás, 500ml.", preco: 6.5 },
      ],
    },
  ],
  extras: [
    { nome: "Muçarela extra", preco: 8.9, categorias: ["Pizzas Tradicionais", "Pizzas Especiais"] },
    { nome: "Bacon", preco: 9.9, categorias: ["Pizzas Tradicionais", "Pizzas Especiais"] },
    { nome: "Catupiry", preco: 9.9, categorias: ["Pizzas Tradicionais", "Pizzas Especiais"] },
    { nome: "Azeitona preta", preco: 5.9, categorias: ["Pizzas Tradicionais"] },
    { nome: "Parmesão ralado", preco: 7.9, categorias: ["Pizzas Tradicionais", "Pizzas Especiais"] },
  ],
  promocoes: [
    {
      eyebrow: "Quarta da margherita",
      titulo: "Margherita grande por R$ 45",
      descricao: "Toda quarta, a clássica da casa em tamanho grande com preço de média.",
      preco: 45,
      precoOriginal: 62.9,
      foto: "/catalogo-inicial/pizzaria/mussarela.jpg",
    },
    {
      eyebrow: "Combo família",
      titulo: "Duas famílias + refrigerante 2L",
      descricao: "Dois sabores à escolha, meio a meio liberado.",
      preco: 149.9,
      precoOriginal: 172.7,
      foto: "/catalogo-inicial/pizzaria/quatro-queijos.jpg",
    },
  ],
  posts: [
    {
      titulo: "O levain tem seis anos",
      corpo:
        "Nosso fermento natural foi iniciado em 2019 e é alimentado duas vezes por dia desde então. É o que dá o leve azedinho da borda e a digestão fácil que o fermento biológico não entrega.",
      diasAtras: 5,
      curtidas: 27,
    },
    {
      titulo: "Por que assamos em 90 segundos",
      corpo:
        "A 380°C a massa incha antes de secar. Abaixo disso ela desidrata e vira biscoito. O forno a lenha é o único jeito acessível de manter essa temperatura a noite inteira.",
      diasAtras: 14,
      curtidas: 22,
    },
  ],
  avaliacoes: [
    {
      nome: "Fernanda C.",
      nota: 5,
      comentario: "A borda é outra coisa. Dá para sentir a fermentação longa, não pesa.",
      resposta: "Obrigado, Fernanda! São 48 horas de descanso.",
      diasAtras: 4,
      curtidas: 15,
    },
    {
      nome: "Gustavo A.",
      nota: 5,
      comentario: "Burrata e pesto vale cada centavo. Chegou quente e inteira.",
      diasAtras: 11,
      curtidas: 8,
    },
    {
      nome: "Letícia R.",
      nota: 4,
      comentario: "Pizza ótima, entrega um pouco lenta na sexta.",
      diasAtras: 19,
      curtidas: 2,
    },
  ],
};
