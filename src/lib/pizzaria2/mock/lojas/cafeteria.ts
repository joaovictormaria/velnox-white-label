import { semana } from "../build";
import type { LojaMock } from "../types";

/** Dados fictícios. Nenhum contato, endereço ou cliente real. */
export const cafeteria: LojaMock = {
  slug: "cafeteria",
  businessType: "cafeteria",
  nome: "Café Bruma",
  tagline: "Grão torrado na casa, extração na medida",
  descricao:
    "Cafeteria de especialidade com torra própria. Métodos filtrados, espresso e panificação feita na casa todos os dias.",
  heroSubtitle: "Escolha seu café e peça agora.",
  cores: { modo: "GRADIENT", primaria: "#78350f", secundaria: "#b45309" },
  sobre: {
    eyebrow: "Nosso café",
    titulo: "Torramos toda terça e sexta",
    corpo:
      "Compramos grão verde de produtores da Mantiqueira e torramos duas vezes por semana, em lotes pequenos. Café perde aroma rápido depois da torra, então nada aqui tem mais de doze dias. O que passa disso vira café da equipe.",
    foto: "/catalogo-inicial/cafeteria/cappuccino.jpg",
  },
  fotos: [
    { legenda: "Torrador da casa", foto: "/catalogo-inicial/cafeteria/latte.jpg" },
    { legenda: "Balcão pela manhã", foto: "/catalogo-inicial/cafeteria/espresso.jpg" },
    { legenda: "Padaria do dia", foto: "/catalogo-inicial/cafeteria/croissant.jpg" },
  ],
  contato: {
    whatsapp: "11987650006",
    email: "contato@cafebruma.exemplo",
    instagram: "https://instagram.com/exemplo.cafebruma",
    facebook: "https://facebook.com/exemplo.cafebruma",
  },
  endereco: {
    rua: "Rua Harmonia",
    numero: "504",
    bairro: "Vila Madalena",
    cidade: "São Paulo",
    estado: "SP",
    cep: "05435-000",
  },
  entrega: {
    taxa: 6.5,
    freteGratisAcimaDe: 55,
    pedidoMinimo: 20,
    entregaMin: 20,
    entregaMax: 35,
    retiradaMin: 8,
    retiradaMax: 15,
    aceitaEntrega: true,
    aceitaRetirada: true,
    pagamentos: ["PIX", "CREDIT_CARD", "DEBIT_CARD", "CASH"],
  },
  horarios: semana(
    { abre: "07:00", fecha: "19:00" },
    { SATURDAY: { abre: "08:00", fecha: "18:00" }, SUNDAY: { abre: "08:00", fecha: "14:00" } },
  ),
  categorias: [
    {
      nome: "Cafés",
      tipo: "PIZZA",
      icone: "Coffee",
      badge: "Torra da casa",
      headline: "Espresso e filtrados",
      subhead: "Grãos torrados há no máximo doze dias.",
      foto: "/catalogo-inicial/cafeteria/espresso.jpg",
      grupos: [
        {
          nome: "Leite",
          min: 1,
          max: 1,
          opcoes: [
            { nome: "Integral" },
            { nome: "Desnatado" },
            { nome: "Sem lactose", preco: 3 },
            { nome: "Vegetal de aveia", preco: 5 },
          ],
        },
      ],
      produtos: [
        {
          nome: "Cappuccino",
          desc: "Espresso duplo, leite vaporizado e microespuma fina.",
          preco: 14.9,
          tag: "Mais pedido",
          foto: "/catalogo-inicial/cafeteria/cappuccino.jpg",
          tamanhos: [
            { label: "Pequeno", preco: 14.9 },
            { label: "Médio", preco: 17.9 },
            { label: "Grande", preco: 20.9 },
          ],
        },
        {
          nome: "Espresso",
          desc: "Extração de 25 segundos, blend da casa, notas de cacau e castanha.",
          preco: 8.9,
          foto: "/catalogo-inicial/cafeteria/espresso.jpg",
          tamanhos: [
            { label: "Simples", preco: 8.9 },
            { label: "Duplo", preco: 12.9 },
          ],
        },
        {
          nome: "Coado V60",
          desc: "Grão único, moagem média, 250ml. Pergunte o lote do dia.",
          preco: 16.9,
          tag: "Especialidade",
          foto: "/catalogo-inicial/cafeteria/latte.jpg",
          tamanhos: [{ label: "250ml", preco: 16.9 }],
        },
        {
          nome: "Latte Gelado",
          desc: "Espresso duplo, leite gelado e gelo — 400ml.",
          preco: 18.9,
          foto: "/catalogo-inicial/cafeteria/latte-gelado.jpg",
          tamanhos: [
            { label: "400ml", preco: 18.9 },
            { label: "500ml", preco: 22.9 },
          ],
        },
      ],
    },
    {
      nome: "Padaria",
      icone: "Croissant",
      headline: "Assado toda manhã",
      subhead: "Massa folhada laminada na casa.",
      produtos: [
        { nome: "Croissant de Manteiga", desc: "Massa folhada com manteiga francesa, 72 horas de processo.", preco: 13.9, tag: "Mais pedido", foto: "/catalogo-inicial/cafeteria/croissant.jpg" },
        { nome: "Pão de Queijo", desc: "Polvilho azedo e queijo canastra, três unidades.", preco: 12.9, foto: "/catalogo-inicial/cafeteria/pao-de-queijo.jpg" },
        { nome: "Cinnamon Roll", desc: "Rolo de canela com glacê de cream cheese.", preco: 17.9, foto: "/catalogo-inicial/cafeteria/brownie.jpg" },
        { nome: "Pão na Chapa", desc: "Pão francês na chapa com manteiga da terra.", preco: 9.9, foto: "/catalogo-inicial/cafeteria/misto-quente.jpg" },
      ],
    },
    {
      nome: "Doces",
      icone: "CakeSlice",
      headline: "Confeitaria da casa",
      produtos: [
        { nome: "Cheesecake de Frutas Vermelhas", desc: "Base de biscoito amanteigado e calda de frutas.", preco: 22.9, foto: "/catalogo-inicial/cafeteria/cheesecake.jpg" },
        { nome: "Bolo de Cenoura", desc: "Fatia generosa com ganache de chocolate meio amargo.", preco: 18.9, foto: "/catalogo-inicial/cafeteria/bolo-de-cenoura.jpg" },
        { nome: "Cookie de Chocolate", desc: "Crocante fora, macio dentro, gotas 70% cacau.", preco: 14.9, foto: "/catalogo-inicial/cafeteria/brownie.jpg" },
      ],
    },
    {
      nome: "Salgados",
      icone: "Sandwich",
      headline: "Para o almoço leve",
      produtos: [
        { nome: "Sanduíche de Frango", desc: "Pão de fermentação natural, frango desfiado e rúcula.", preco: 28.9 },
        { nome: "Tostex de Queijo e Tomate", desc: "Pão de forma artesanal prensado.", preco: 22.9, foto: "/catalogo-inicial/cafeteria/misto-quente.jpg" },
        { nome: "Quiche de Alho-poró", desc: "Massa amanteigada, fatia individual.", preco: 24.9 },
      ],
    },
    {
      nome: "Grãos para Levar",
      icone: "Bean",
      headline: "Torra da semana",
      produtos: [
        { nome: "Pacote 250g — Mantiqueira", desc: "Notas de chocolate e caramelo, torra média.", preco: 42.9 },
        { nome: "Pacote 250g — Cerrado", desc: "Notas cítricas, torra clara.", preco: 46.9 },
      ],
    },
  ],
  extras: [
    { nome: "Dose extra de espresso", preco: 5, categorias: ["Cafés"] },
    { nome: "Leite vegetal", preco: 5, categorias: ["Cafés"] },
    { nome: "Calda de caramelo", preco: 4, categorias: ["Cafés"] },
    { nome: "Chantilly", preco: 4.5, categorias: ["Cafés", "Doces"] },
    { nome: "Manteiga extra", preco: 3.5, categorias: ["Padaria"] },
  ],
  promocoes: [
    {
      eyebrow: "Café da manhã",
      titulo: "Cappuccino + croissant por R$ 24",
      descricao: "De segunda a sexta, das 7h às 10h.",
      preco: 24,
      precoOriginal: 28.8,
      foto: "/catalogo-inicial/cafeteria/croissant.jpg",
    },
    {
      eyebrow: "Clube do grão",
      titulo: "Assine e receba 250g por mês",
      descricao: "Torra da semana entregue na sua casa, com 15% de desconto.",
      desconto: "15%",
    },
  ],
  posts: [
    {
      titulo: "Doze dias é o nosso limite",
      corpo:
        "Café não estraga, mas perde. Depois de doze dias da torra os aromáticos já foram embora e o que resta é amargor. Por isso torramos pouco e com frequência, em vez de encher a prateleira.",
      foto: "/catalogo-inicial/cafeteria/espresso.jpg",
      diasAtras: 5,
      curtidas: 29,
    },
  ],
  avaliacoes: [
    {
      nome: "Helena V.",
      nota: 5,
      comentario: "O coado V60 é o melhor do bairro. Atendimento explica o lote sem ser chato.",
      resposta: "Obrigado, Helena! Adoramos falar de café.",
      diasAtras: 4,
      curtidas: 17,
    },
    {
      nome: "André L.",
      nota: 5,
      comentario: "Croissant à altura de padaria francesa. Chego cedo só por ele.",
      diasAtras: 12,
      curtidas: 11,
    },
    {
      nome: "Bianca R.",
      nota: 4,
      comentario: "Café excelente, mas o salão lota muito no fim de semana.",
      diasAtras: 18,
      curtidas: 4,
    },
  ],
};
