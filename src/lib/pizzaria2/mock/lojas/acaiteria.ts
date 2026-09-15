import { semana } from "../build";
import type { LojaMock } from "../types";

/** Dados fictícios. Nenhum contato, endereço ou cliente real. */
export const acaiteria: LojaMock = {
  slug: "acaiteria",
  businessType: "acai",
  nome: "Roxo do Norte",
  tagline: "Açaí de Tomé-Açu, tigela montada na hora",
  descricao:
    "Açaiteria com polpa vinda direta do Pará, sem xarope de guaraná e sem água. Monte a tigela do seu jeito com mais de trinta complementos.",
  heroSubtitle: "Escolha o tamanho, os complementos e peça agora.",
  cores: { modo: "GRADIENT", primaria: "#6d28d9", secundaria: "#a21caf", terciaria: "#4c1d95" },
  sobre: {
    eyebrow: "De onde vem",
    titulo: "Polpa do Pará, batida na hora",
    corpo:
      "Nosso açaí vem de cooperativas de Tomé-Açu e chega congelado a -18°C. Batemos com um toque de banana para dar cremosidade — nunca com xarope de guaraná ou água, que é o atalho que deixa a tigela rala e doce demais.",
    foto: "/catalogo-inicial/acai/hero-acai.jpg",
  },
  fotos: [
    { legenda: "Tigelas montadas na hora", foto: "/catalogo-inicial/acai/acai-barca.jpg" },
    { legenda: "Balcão de complementos", foto: "/catalogo-inicial/acai/acai-combo-casal.jpg" },
  ],
  contato: {
    whatsapp: "11987650002",
    email: "contato@roxodonorte.exemplo",
    instagram: "https://instagram.com/exemplo.roxodonorte",
    tiktok: "https://tiktok.com/@exemplo.roxodonorte",
  },
  endereco: {
    rua: "Avenida das Palmeiras",
    numero: "1180",
    complemento: "Loja 3",
    bairro: "Pinheiros",
    cidade: "São Paulo",
    estado: "SP",
    cep: "05422-001",
  },
  entrega: {
    taxa: 6.9,
    freteGratisAcimaDe: 60,
    pedidoMinimo: 18,
    entregaMin: 25,
    entregaMax: 40,
    retiradaMin: 10,
    retiradaMax: 20,
    aceitaEntrega: true,
    aceitaRetirada: true,
    pagamentos: ["PIX", "CREDIT_CARD", "DEBIT_CARD"],
  },
  horarios: semana(
    { abre: "11:00", fecha: "22:00" },
    { FRIDAY: { fecha: "23:30" }, SATURDAY: { fecha: "23:30" }, SUNDAY: { abre: "13:00" } },
  ),
  categorias: [
    {
      nome: "Açaí",
      tipo: "PIZZA",
      icone: "IceCreamBowl",
      badge: "Monte o seu",
      headline: "Tigela montada na hora",
      subhead: "Escolha o tamanho e até três complementos sem custo.",
      foto: "/catalogo-inicial/acai/hero-acai.jpg",
      grupos: [
        {
          nome: "Complementos grátis",
          min: 0,
          max: 3,
          gratis: 3,
          opcoes: [
            { nome: "Granola" },
            { nome: "Banana" },
            { nome: "Leite em pó" },
            { nome: "Paçoca" },
            { nome: "Mel" },
            { nome: "Aveia" },
          ],
        },
      ],
      produtos: [
        {
          nome: "Açaí Tradicional",
          desc: "Polpa pura batida com banana. A base para montar do seu jeito.",
          preco: 18.9,
          tag: "Mais pedido",
          foto: "/catalogo-inicial/acai/acai-300-copo.jpg",
          tamanhos: [
            { label: "300ml", preco: 18.9 },
            { label: "500ml", preco: 26.9 },
            { label: "700ml", preco: 33.9 },
            { label: "1L", preco: 46.9 },
          ],
        },
        {
          nome: "Açaí com Cupuaçu",
          desc: "Metade açaí, metade creme de cupuaçu. Azedinho e cremoso.",
          preco: 22.9,
          foto: "/catalogo-inicial/acai/acai-barca.jpg",
          tamanhos: [
            { label: "300ml", preco: 22.9 },
            { label: "500ml", preco: 30.9 },
            { label: "700ml", preco: 38.9 },
          ],
        },
        {
          nome: "Açaí Zero Açúcar",
          desc: "Batido só com banana, sem adição de açúcar ou adoçante.",
          preco: 21.9,
          foto: "/catalogo-inicial/acai/acai-500-tigela.png",
          tamanhos: [
            { label: "300ml", preco: 21.9 },
            { label: "500ml", preco: 29.9 },
          ],
        },
        {
          nome: "Açaí Proteico",
          desc: "Tigela com 20g de whey de baunilha, pasta de amendoim e banana.",
          preco: 29.9,
          tag: "Pós-treino",
          foto: "/catalogo-inicial/acai/acai-combo-casal.jpg",
          tamanhos: [
            { label: "300ml", preco: 29.9 },
            { label: "500ml", preco: 37.9 },
          ],
        },
      ],
    },
    {
      nome: "Cremes",
      icone: "Milk",
      headline: "Cremes da casa",
      subhead: "Batidos diariamente, sem polpa industrializada.",
      produtos: [
        {
          nome: "Creme de Cupuaçu",
          desc: "Fruta amazônica batida com leite condensado — 300ml.",
          preco: 19.9,
        },
        {
          nome: "Creme de Ninho",
          desc: "Leite em pó batido com creme de leite gelado — 300ml.",
          preco: 18.9,
          tag: "Mais pedido",
        },
        {
          nome: "Creme de Morango",
          desc: "Morango fresco batido na hora — 300ml.",
          preco: 19.9,
        },
      ],
    },
    {
      nome: "Complementos",
      icone: "Cherry",
      headline: "Para completar a tigela",
      produtos: [
        {
          nome: "Porção de Granola",
          desc: "Granola artesanal com castanhas e mel — 60g.",
          preco: 5.9,
        },
        {
          nome: "Morango Fresco",
          desc: "Morangos fatiados na hora — 80g.",
          preco: 8.9,
        },
        {
          nome: "Pasta de Amendoim",
          desc: "Integral, sem açúcar — 40g.",
          preco: 7.9,
        },
        {
          nome: "Nutella",
          desc: "Porção generosa — 40g.",
          preco: 9.9,
          tag: "Mais pedido",
        },
      ],
    },
    {
      nome: "Bebidas",
      icone: "GlassWater",
      produtos: [
        {
          nome: "Suco de Açaí",
          desc: "Açaí batido com água gelada, sem açúcar — 500ml.",
          preco: 16.9,
        },
        {
          nome: "Vitamina de Banana",
          desc: "Banana, leite e aveia — 500ml.",
          preco: 14.9,
        },
        {
          nome: "Água de Coco",
          desc: "Natural, gelada — 300ml.",
          preco: 8.9,
        },
      ],
    },
  ],
  extras: [
    { nome: "Leite condensado", preco: 4, categorias: ["Açaí", "Cremes"] },
    { nome: "Granola extra", preco: 5, categorias: ["Açaí", "Cremes"] },
    { nome: "Nutella", preco: 9.9, categorias: ["Açaí", "Cremes"] },
    { nome: "Morango", preco: 8.9, categorias: ["Açaí", "Cremes"] },
    { nome: "Leite em pó", preco: 4.5, categorias: ["Açaí", "Cremes"] },
    { nome: "Paçoca", preco: 3.5, categorias: ["Açaí"] },
    { nome: "Whey de baunilha", preco: 11.9, categorias: ["Açaí"] },
  ],
  promocoes: [
    {
      eyebrow: "Segunda roxa",
      titulo: "500ml pelo preço do 300ml",
      descricao: "Toda segunda-feira, a tigela de 500ml sai no valor da de 300ml.",
      desconto: "30%",
      foto: "/catalogo-inicial/acai/acai-500-tigela.png",
    },
    {
      eyebrow: "Combo treino",
      titulo: "Açaí Proteico + água de coco",
      descricao: "Tigela de 300ml com whey e água de coco gelada.",
      preco: 34.9,
      precoOriginal: 38.8,
      foto: "/catalogo-inicial/acai/acai-300-copo.jpg",
    },
  ],
  posts: [
    {
      titulo: "Por que não usamos xarope de guaraná",
      corpo:
        "É o atalho mais comum do setor: rende mais e adoça sem custo. Também transforma açaí em refresco gelado. Batemos só com banana, e é por isso que a nossa tigela é mais escura e menos doce.",
      foto: "/catalogo-inicial/acai/hero-acai.jpg",
      diasAtras: 6,
      curtidas: 42,
    },
  ],
  avaliacoes: [
    {
      nome: "Marina L.",
      nota: 5,
      comentario: "Açaí de verdade, grosso e sem aquele doce artificial. Virou meu ponto fixo.",
      resposta: "Obrigado, Marina! É exatamente o que buscamos.",
      diasAtras: 2,
      curtidas: 19,
    },
    {
      nome: "Pedro H.",
      nota: 5,
      comentario: "O proteico salva o pós-treino. Complementos frescos.",
      diasAtras: 8,
      curtidas: 6,
    },
    {
      nome: "Ana Beatriz F.",
      nota: 4,
      comentario: "Muito bom, só queria mais opções sem lactose nos cremes.",
      resposta: "Anotado! Estamos testando um creme de castanha.",
      diasAtras: 17,
      curtidas: 4,
    },
  ],
};
