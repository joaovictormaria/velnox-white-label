import { semana } from "../build";
import type { LojaMock } from "../types";

/** Dados fictícios. Nenhum contato, endereço ou cliente real. */
export const doceria: LojaMock = {
  slug: "doceria",
  businessType: "confeitaria",
  nome: "Dona Amêndoa",
  tagline: "Confeitaria clássica, chocolate belga",
  descricao:
    "Doceria artesanal com bolos por fatia, docinhos de festa e sobremesas na taça. Encomendas com 48 horas de antecedência.",
  heroSubtitle: "Escolha seu doce e peça agora.",
  cores: { modo: "GRADIENT", primaria: "#be185d", secundaria: "#9d174d", terciaria: "#f472b6" },
  sobre: {
    eyebrow: "Nossa confeitaria",
    titulo: "Chocolate belga e manteiga de verdade",
    corpo:
      "Não trabalhamos com cobertura hidrogenada nem gordura vegetal. Chocolate é belga, manteiga é manteiga e o creme é feito com ovos frescos no mesmo dia. Sai mais caro e derrete mais rápido no calor — e é o que faz diferença no sabor.",
    foto: "/catalogo-inicial/cafeteria/bolo-de-chocolate.jpg",
  },
  fotos: [
    { legenda: "Vitrine de bolos", foto: "/catalogo-inicial/cafeteria/cheesecake.jpg" },
    { legenda: "Bancada de confeitaria", foto: "/catalogo-inicial/cafeteria/bolo-de-cenoura.jpg" },
  ],
  contato: {
    whatsapp: "11987650007",
    email: "contato@donaamendoa.exemplo",
    instagram: "https://instagram.com/exemplo.donaamendoa",
    tiktok: "https://tiktok.com/@exemplo.donaamendoa",
  },
  endereco: {
    rua: "Rua das Acácias",
    numero: "157",
    complemento: "Loja 2",
    bairro: "Santana",
    cidade: "São Paulo",
    estado: "SP",
    cep: "02403-030",
  },
  entrega: {
    taxa: 8.9,
    freteGratisAcimaDe: 100,
    pedidoMinimo: 25,
    entregaMin: 30,
    entregaMax: 50,
    retiradaMin: 10,
    retiradaMax: 20,
    aceitaEntrega: true,
    aceitaRetirada: true,
    pagamentos: ["PIX", "CREDIT_CARD", "DEBIT_CARD"],
  },
  horarios: semana(
    { abre: "09:00", fecha: "19:00" },
    { SUNDAY: { abre: "09:00", fecha: "14:00" }, MONDAY: { aberto: false, abre: "09:00", fecha: "19:00" } },
  ),
  categorias: [
    {
      nome: "Bolos",
      tipo: "PIZZA",
      icone: "Cake",
      badge: "Por fatia ou inteiro",
      headline: "Bolos da vitrine",
      subhead: "Fatia generosa ou bolo inteiro sob encomenda.",
      foto: "/catalogo-inicial/cafeteria/bolo-de-chocolate.jpg",
      produtos: [
        {
          nome: "Bolo de Chocolate Belga",
          desc: "Quatro camadas de massa de cacau com ganache 70% e raspas.",
          preco: 19.9,
          tag: "Mais pedido",
          foto: "/catalogo-inicial/cafeteria/bolo-de-chocolate.jpg",
          tamanhos: [
            { label: "Fatia", preco: 19.9 },
            { label: "Inteiro (12 fatias)", preco: 189.9 },
          ],
        },
        {
          nome: "Red Velvet",
          desc: "Massa aveludada com cream cheese batido na hora.",
          preco: 21.9,
          foto: "/catalogo-inicial/cafeteria/bolo-de-cenoura.jpg",
          tamanhos: [
            { label: "Fatia", preco: 21.9 },
            { label: "Inteiro (12 fatias)", preco: 209.9 },
          ],
        },
        {
          nome: "Naked Cake de Morango",
          desc: "Massa branca, chantilly e morangos frescos entre as camadas.",
          preco: 22.9,
          tamanhos: [
            { label: "Fatia", preco: 22.9 },
            { label: "Inteiro (12 fatias)", preco: 219.9 },
          ],
        },
        {
          nome: "Bolo de Limão Siciliano",
          desc: "Massa cítrica com curd de limão e merengue maçaricado.",
          preco: 20.9,
          tamanhos: [
            { label: "Fatia", preco: 20.9 },
            { label: "Inteiro (12 fatias)", preco: 199.9 },
          ],
        },
      ],
    },
    {
      nome: "Docinhos",
      icone: "Candy",
      badge: "Cento fechado",
      headline: "Para festa ou para levar",
      subhead: "Vendidos por cento, com 48 horas de antecedência.",
      produtos: [
        { nome: "Brigadeiro Gourmet", desc: "Chocolate belga e granulado fino — cento.", preco: 189.9, tag: "Mais pedido" },
        { nome: "Beijinho de Coco", desc: "Coco fresco queimado — cento.", preco: 179.9 },
        { nome: "Casadinho", desc: "Metade brigadeiro, metade beijinho — cento.", preco: 199.9 },
        { nome: "Trufa de Maracujá", desc: "Casca de chocolate ao leite com recheio azedinho — cento.", preco: 219.9 },
      ],
    },
    {
      nome: "Sobremesas na Taça",
      icone: "IceCreamBowl",
      headline: "Individuais, prontas para levar",
      produtos: [
        { nome: "Pavê de Chocolate", desc: "Camadas de biscoito, creme e ganache — 250g.", preco: 24.9, foto: "/catalogo-inicial/cafeteria/parfait.jpg" },
        { nome: "Tiramisù", desc: "Mascarpone, café da casa e cacau — 250g.", preco: 27.9 },
        { nome: "Mousse de Maracujá", desc: "Mousse aerada com calda da fruta — 250g.", preco: 22.9, foto: "/catalogo-inicial/cafeteria/salada-de-frutas.jpg" },
      ],
    },
    {
      nome: "Tortas",
      icone: "Cookie",
      headline: "Inteiras, sob encomenda",
      produtos: [
        { nome: "Torta de Morango", desc: "Massa sablée, creme de confeiteiro e morangos — 20cm.", preco: 149.9 },
        { nome: "Torta Holandesa", desc: "Biscoito, creme branco e cobertura de chocolate — 20cm.", preco: 159.9 },
        { nome: "Cheesecake de Frutas Vermelhas", desc: "Cream cheese assado com calda artesanal — 20cm.", preco: 169.9, foto: "/catalogo-inicial/cafeteria/cheesecake.jpg" },
      ],
    },
    {
      nome: "Bebidas",
      icone: "Coffee",
      produtos: [
        { nome: "Café Coado", desc: "Torra média da casa — 200ml.", preco: 8.9, foto: "/catalogo-inicial/cafeteria/espresso.jpg" },
        { nome: "Chocolate Quente", desc: "Chocolate belga com leite integral — 300ml.", preco: 18.9, tag: "Inverno", foto: "/catalogo-inicial/cafeteria/chocolate-quente.jpg" },
        { nome: "Suco de Laranja", desc: "Espremido na hora — 400ml.", preco: 13.9, foto: "/catalogo-inicial/comum/suco-natural.jpg" },
      ],
    },
  ],
  extras: [
    { nome: "Vela de aniversário", preco: 3.5, categorias: ["Bolos", "Tortas"] },
    { nome: "Embalagem para presente", preco: 12.9, categorias: ["Bolos", "Tortas", "Docinhos"] },
    { nome: "Morangos extras", preco: 14.9, categorias: ["Bolos", "Tortas"] },
    { nome: "Ganache extra", preco: 9.9, categorias: ["Bolos"] },
    { nome: "Cartão com mensagem", preco: 5, categorias: ["Bolos", "Tortas", "Docinhos"] },
  ],
  promocoes: [
    {
      eyebrow: "Terça do bolo",
      titulo: "Segunda fatia com 50%",
      descricao: "Toda terça, leve duas fatias e pague uma e meia.",
      desconto: "50%",
      foto: "/catalogo-inicial/cafeteria/cheesecake.jpg",
    },
    {
      eyebrow: "Kit festa",
      titulo: "300 docinhos por R$ 499",
      descricao: "Três sabores à escolha, com 48 horas de antecedência.",
      preco: 499,
      precoOriginal: 569.7,
    },
  ],
  posts: [
    {
      titulo: "Por que nosso bolo derrete mais rápido",
      corpo:
        "Cobertura de gordura vegetal aguenta horas no balcão a 30°C. Ganache de chocolate belga com creme de leite, não. Escolhemos o segundo e pedimos que você guarde na geladeira — o sabor compensa o incômodo.",
      foto: "/catalogo-inicial/cafeteria/bolo-de-chocolate.jpg",
      diasAtras: 8,
      curtidas: 35,
    },
    {
      titulo: "Encomendas: por que pedimos 48 horas",
      corpo:
        "Massa, recheio e montagem acontecem em dias diferentes. Bolo montado com pressa desmonta no transporte e o recheio não firma. As 48 horas não são burocracia, são o tempo do processo.",
      diasAtras: 19,
      curtidas: 21,
    },
  ],
  avaliacoes: [
    {
      nome: "Vanessa M.",
      nota: 5,
      comentario: "Encomendei o bolo de aniversário e foi o assunto da festa. Chocolate de verdade.",
      resposta: "Que alegria, Vanessa! Obrigado pela confiança.",
      diasAtras: 5,
      curtidas: 26,
    },
    {
      nome: "Otávio S.",
      nota: 5,
      comentario: "Tiramisù na taça melhor que de restaurante italiano.",
      diasAtras: 13,
      curtidas: 9,
    },
    {
      nome: "Renata Q.",
      nota: 4,
      comentario: "Docinhos maravilhosos, só achei o prazo de 48h apertado para quem esquece.",
      resposta: "Entendemos! Para urgências, chame no WhatsApp que tentamos encaixar.",
      diasAtras: 24,
      curtidas: 6,
    },
  ],
};
