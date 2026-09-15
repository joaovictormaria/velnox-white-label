import { semana } from "../build";
import type { LojaMock } from "../types";

/** Dados fictícios. Nenhum contato, endereço ou cliente real. */
export const restaurante: LojaMock = {
  slug: "restaurante",
  businessType: "restaurante",
  nome: "Casa Beira-Rio",
  tagline: "Comida de panela, feita todo dia",
  descricao:
    "Restaurante de comida brasileira com pratos executivos no almoço e à la carte à noite. Tudo feito no dia, sem congelados.",
  heroSubtitle: "Escolha seu prato e peça agora.",
  cores: { modo: "GRADIENT", primaria: "#0f766e", secundaria: "#b45309" },
  sobre: {
    eyebrow: "Nossa cozinha",
    titulo: "Panela no fogo desde as seis da manhã",
    corpo:
      "Feijão, arroz e os cozidos começam às seis. O que não sai no almoço não volta no jantar — vira o funcionário do dia seguinte ou é descartado. É mais caro assim, e é a única forma de servir comida de panela que presta.",
    foto: "/catalogo-inicial/restaurante/feijoada-2.jpg",
  },
  fotos: [
    { legenda: "Salão no horário do almoço", foto: "/catalogo-inicial/restaurante/prato-feito.jpg" },
    { legenda: "Panelas da casa", foto: "/catalogo-inicial/restaurante/estrogonofe.jpg" },
  ],
  contato: {
    whatsapp: "11987650004",
    email: "contato@casabeirario.exemplo",
    instagram: "https://instagram.com/exemplo.casabeirario",
    facebook: "https://facebook.com/exemplo.casabeirario",
  },
  endereco: {
    rua: "Rua do Comércio",
    numero: "233",
    bairro: "Centro",
    cidade: "Campinas",
    estado: "SP",
    cep: "13010-200",
  },
  entrega: {
    taxa: 8.5,
    freteGratisAcimaDe: 90,
    pedidoMinimo: 30,
    entregaMin: 30,
    entregaMax: 50,
    retiradaMin: 15,
    retiradaMax: 25,
    aceitaEntrega: true,
    aceitaRetirada: true,
    pagamentos: ["PIX", "CREDIT_CARD", "DEBIT_CARD", "CASH"],
  },
  horarios: semana(
    { abre: "11:00", fecha: "22:00" },
    { SUNDAY: { abre: "11:00", fecha: "16:00" } },
  ),
  categorias: [
    {
      nome: "Pratos Principais",
      tipo: "PIZZA",
      icone: "Utensils",
      badge: "Do dia",
      headline: "Comida de panela, servida quente",
      subhead: "Todos acompanham arroz, feijão e farofa.",
      foto: "/catalogo-inicial/restaurante/prato-feito.jpg",
      grupos: [
        {
          nome: "Acompanhamento",
          min: 1,
          max: 1,
          opcoes: [
            { nome: "Arroz e feijão" },
            { nome: "Arroz integral e feijão" },
            { nome: "Purê de batata", preco: 4 },
          ],
        },
      ],
      produtos: [
        {
          nome: "Feijoada Completa",
          desc: "Feijão preto com carnes selecionadas, couve, laranja e torresmo.",
          preco: 58.9,
          tag: "Sábado",
          foto: "/catalogo-inicial/restaurante/feijoada.jpg",
          tamanhos: [
            { label: "Individual", preco: 58.9 },
            { label: "Para dois", preco: 104.9 },
          ],
        },
        {
          nome: "Picanha na Chapa",
          desc: "Picanha fatiada na chapa com alho, vinagrete e farofa de ovo.",
          preco: 78.9,
          tag: "Mais pedido",
          foto: "/catalogo-inicial/restaurante/executivo-de-carne.jpg",
          tamanhos: [
            { label: "Individual", preco: 78.9 },
            { label: "Para dois", preco: 139.9 },
          ],
        },
        {
          nome: "Frango com Quiabo",
          desc: "Frango caipira ensopado com quiabo e angu de milho.",
          preco: 46.9,
          foto: "/catalogo-inicial/restaurante/frango-grelhado.jpg",
          tamanhos: [{ label: "Individual", preco: 46.9 }],
        },
        {
          nome: "Moqueca de Peixe",
          desc: "Robalo, leite de coco, dendê e pimentões, com arroz e pirão.",
          preco: 72.9,
          foto: "/catalogo-inicial/restaurante/estrogonofe.jpg",
          tamanhos: [
            { label: "Individual", preco: 72.9 },
            { label: "Para dois", preco: 129.9 },
          ],
        },
      ],
    },
    {
      nome: "Executivos",
      icone: "Clock",
      badge: "Almoço",
      headline: "Servidos até as 15h",
      subhead: "Prato, acompanhamento e suco do dia.",
      produtos: [
        {
          nome: "Executivo de Frango Grelhado",
          desc: "Filé grelhado, arroz, feijão, salada e suco do dia.",
          preco: 32.9,
          tag: "Mais pedido",
          foto: "/catalogo-inicial/restaurante/frango-grelhado.jpg",
        },
        {
          nome: "Executivo de Carne de Panela",
          desc: "Carne desfiada no molho, arroz, feijão, farofa e suco.",
          preco: 34.9,
          foto: "/catalogo-inicial/restaurante/executivo-de-carne.jpg",
        },
        {
          nome: "Executivo Vegetariano",
          desc: "Legumes assados, grão-de-bico, arroz integral e suco.",
          preco: 29.9,
          foto: "/catalogo-inicial/restaurante/prato-feito.jpg",
        },
      ],
    },
    {
      nome: "Entradas",
      icone: "Salad",
      headline: "Para começar",
      produtos: [
        { nome: "Bolinho de Feijoada", desc: "Seis unidades com geleia de pimenta.", preco: 28.9 },
        { nome: "Pastel de Queijo Coalho", desc: "Quatro unidades com melaço.", preco: 24.9 },
        { nome: "Salada da Casa", desc: "Folhas, tomate seco, castanha e parmesão.", preco: 26.9 },
      ],
    },
    {
      nome: "Sobremesas",
      icone: "CakeSlice",
      produtos: [
        { nome: "Pudim de Leite", desc: "Receita da casa, calda de caramelo escuro.", preco: 16.9, tag: "Mais pedido" },
        { nome: "Bolo de Rolo", desc: "Fatia com goiabada cascão.", preco: 18.9 },
        { nome: "Doce de Leite com Queijo", desc: "Clássico mineiro.", preco: 17.9 },
      ],
    },
    {
      nome: "Bebidas",
      icone: "GlassWater",
      produtos: [
        { nome: "Suco Natural", desc: "Laranja, abacaxi, maracujá ou limão — 500ml.", preco: 12.9, foto: "/catalogo-inicial/comum/suco-natural.jpg" },
        { nome: "Refrigerante Lata", desc: "350ml.", preco: 7.5 },
        { nome: "Caipirinha", desc: "Cachaça artesanal, limão e açúcar.", preco: 24.9 },
        { nome: "Água Mineral", desc: "Com ou sem gás, 500ml.", preco: 6 },
      ],
    },
  ],
  extras: [
    { nome: "Farofa extra", preco: 6.9, categorias: ["Pratos Principais", "Executivos"] },
    { nome: "Vinagrete", preco: 5.9, categorias: ["Pratos Principais"] },
    { nome: "Couve refogada", preco: 8.9, categorias: ["Pratos Principais"] },
    { nome: "Ovo frito", preco: 4.5, categorias: ["Executivos"] },
    { nome: "Porção extra de arroz", preco: 7.9, categorias: ["Pratos Principais", "Executivos"] },
  ],
  promocoes: [
    {
      eyebrow: "Sábado de feijoada",
      titulo: "Feijoada para dois por R$ 89",
      descricao: "Todo sábado, com caipirinha de cortesia.",
      preco: 89,
      precoOriginal: 104.9,
      foto: "/catalogo-inicial/restaurante/feijoada-2.jpg",
    },
    {
      eyebrow: "Almoço executivo",
      titulo: "Executivo + sobremesa por R$ 38",
      descricao: "De segunda a sexta, até as 15h.",
      preco: 38,
      precoOriginal: 49.8,
      foto: "/catalogo-inicial/restaurante/executivo-de-carne.jpg",
    },
  ],
  posts: [
    {
      titulo: "O que fazemos com a comida que sobra",
      corpo:
        "Nada volta para o balcão no dia seguinte. O que sobra do almoço vira a refeição da equipe no jantar, e o excedente vai para um projeto do bairro. Cozinhar a quantidade certa é parte do trabalho.",
      diasAtras: 7,
      curtidas: 38,
    },
  ],
  avaliacoes: [
    {
      nome: "Roberto N.",
      nota: 5,
      comentario: "Comida de casa de verdade. A feijoada de sábado é parada obrigatória.",
      resposta: "Obrigado, Roberto! Te esperamos no próximo sábado.",
      diasAtras: 3,
      curtidas: 14,
    },
    {
      nome: "Simone T.",
      nota: 5,
      comentario: "Executivo com ótimo custo-benefício e porção generosa.",
      diasAtras: 10,
      curtidas: 5,
    },
    {
      nome: "Marcos V.",
      nota: 4,
      comentario: "Moqueca muito boa, senti falta de mais pirão.",
      resposta: "Anotado! Vamos aumentar a porção.",
      diasAtras: 21,
      curtidas: 3,
    },
  ],
};
