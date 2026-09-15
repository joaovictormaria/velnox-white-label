import { semana } from "../build";
import type { LojaMock } from "../types";

/** Dados fictícios. Nenhum contato, endereço ou cliente real. */
export const hamburgueria: LojaMock = {
  slug: "hamburgueria",
  businessType: "hamburgueria",
  nome: "Brasa & Osso",
  tagline: "Smash na chapa, pão brioche, fila na porta",
  descricao:
    "Hamburgueria de bairro especializada em smash burger. Carne moída na hora, chapa a 280°C e pão assado todo dia de manhã.",
  heroSubtitle: "Monte o seu lanche e peça agora.",
  cores: { modo: "GRADIENT", primaria: "#c2410c", secundaria: "#7c2d12" },
  sobre: {
    eyebrow: "Nossa casa",
    titulo: "Carne moída na hora, todos os dias",
    corpo:
      "Trabalhamos com blend de acém e peito moído no início de cada turno. A chapa fica a 280°C para formar crosta sem secar o hambúrguer, e o pão brioche sai do forno do outro lado da rua às seis da manhã. Nada fica pronto esperando pedido.",
    foto: "/catalogo-inicial/hamburgueria/hero-burger-2.jpg",
  },
  fotos: [
    { legenda: "A chapa em hora de pico", foto: "/catalogo-inicial/hamburgueria/hero-burger.jpg" },
    { legenda: "Salão no fim de tarde", foto: "/catalogo-inicial/hamburgueria/hero-burger-3.jpg" },
    { legenda: "Blend moído na casa", foto: "/catalogo-inicial/hamburgueria/smash-duplo.jpg" },
  ],
  contato: {
    whatsapp: "11987650001",
    email: "contato@brasaeosso.exemplo",
    instagram: "https://instagram.com/exemplo.brasaeosso",
    facebook: "https://facebook.com/exemplo.brasaeosso",
  },
  endereco: {
    rua: "Rua das Oliveiras",
    numero: "412",
    bairro: "Vila Madalena",
    cidade: "São Paulo",
    estado: "SP",
    cep: "05423-010",
  },
  entrega: {
    taxa: 7.9,
    freteGratisAcimaDe: 80,
    pedidoMinimo: 25,
    entregaMin: 35,
    entregaMax: 50,
    retiradaMin: 15,
    retiradaMax: 25,
    aceitaEntrega: true,
    aceitaRetirada: true,
    pagamentos: ["PIX", "CREDIT_CARD", "DEBIT_CARD", "CASH"],
  },
  horarios: semana(
    { abre: "18:00", fecha: "23:30" },
    {
      MONDAY: { aberto: false, abre: "18:00", fecha: "23:30" },
      FRIDAY: { fecha: "01:00" },
      SATURDAY: { fecha: "01:00" },
    },
  ),
  categorias: [
    {
      nome: "Hambúrgueres",
      tipo: "PIZZA",
      icone: "Sandwich",
      badge: "Os clássicos",
      headline: "Smash na chapa quente",
      subhead: "Todos com blend de acém e peito, moído na hora.",
      foto: "/catalogo-inicial/hamburgueria/hero-burger.jpg",
      grupos: [
        {
          nome: "Ponto da carne",
          min: 1,
          max: 1,
          opcoes: [{ nome: "Ao ponto" }, { nome: "Bem passado" }],
        },
      ],
      produtos: [
        {
          nome: "Smash Clássico",
          desc: "Dois discos de 90g, queijo prato, cebola na chapa e molho da casa no pão brioche.",
          preco: 28.9,
          tag: "Mais pedido",
          foto: "/catalogo-inicial/hamburgueria/smash-duplo.jpg",
          tamanhos: [
            { label: "Simples", preco: 28.9 },
            { label: "Duplo", preco: 36.9 },
            { label: "Triplo", preco: 44.9 },
          ],
        },
        {
          nome: "Cheddar Bacon",
          desc: "Dois discos, cheddar cremoso, bacon crocante e cebola caramelizada.",
          preco: 34.9,
          foto: "/catalogo-inicial/hamburgueria/x-bacon.jpg",
          tamanhos: [
            { label: "Simples", preco: 34.9 },
            { label: "Duplo", preco: 42.9 },
            { label: "Triplo", preco: 50.9 },
          ],
        },
        {
          nome: "Costela Defumada",
          desc: "Costela desfiada por 12 horas, queijo coalho grelhado e maionese de alho negro.",
          preco: 39.9,
          tag: "Chef",
          foto: "/catalogo-inicial/hamburgueria/x-tudo.jpg",
          tamanhos: [
            { label: "Simples", preco: 39.9 },
            { label: "Duplo", preco: 49.9 },
          ],
        },
        {
          nome: "Veggie de Grão-de-bico",
          desc: "Hambúrguer de grão-de-bico e beterraba, queijo vegetal e maionese de ervas.",
          preco: 31.9,
          foto: "/catalogo-inicial/hamburgueria/x-salada.jpg",
          tamanhos: [{ label: "Simples", preco: 31.9 }],
        },
      ],
    },
    {
      nome: "Combos",
      icone: "Utensils",
      badge: "Economize",
      headline: "Lanche, acompanhamento e bebida",
      produtos: [
        {
          nome: "Combo Clássico",
          desc: "Smash Clássico + fritas média + refrigerante lata.",
          preco: 42.9,
          tag: "Melhor custo",
          foto: "/catalogo-inicial/hamburgueria/hero-burger-2.jpg",
        },
        {
          nome: "Combo Cheddar",
          desc: "Cheddar Bacon + onion rings + limonada suíça.",
          preco: 51.9,
          foto: "/catalogo-inicial/hamburgueria/hero-burger-3.jpg",
        },
        {
          nome: "Combo Casal",
          desc: "Dois smash duplos + fritas grande + duas bebidas.",
          preco: 89.9,
        },
      ],
    },
    {
      nome: "Batatas e Porções",
      icone: "Flame",
      headline: "Para dividir na mesa",
      produtos: [
        {
          nome: "Fritas Rústicas",
          desc: "Batata com casca, alecrim e sal grosso.",
          preco: 18.9,
          foto: "/catalogo-inicial/hamburgueria/batata-frita.jpg",
          tamanhos: [
            { label: "Média", preco: 18.9 },
            { label: "Grande", preco: 26.9 },
          ],
        },
        {
          nome: "Fritas com Cheddar e Bacon",
          desc: "Fritas cobertas com cheddar cremoso e bacon em cubos.",
          preco: 27.9,
          tag: "Mais pedido",
          foto: "/catalogo-inicial/hamburgueria/batata-cheddar.jpg",
        },
        {
          nome: "Onion Rings",
          desc: "Oito anéis de cebola empanados na cerveja.",
          preco: 22.9,
        },
      ],
    },
    {
      nome: "Bebidas",
      icone: "CupSoda",
      headline: "Para acompanhar",
      produtos: [
        {
          nome: "Refrigerante Lata",
          desc: "Cola, guaraná, laranja ou limão — 350ml.",
          preco: 7.5,
          foto: "/catalogo-inicial/hamburgueria/refrigerante-lata.jpg",
        },
        {
          nome: "Limonada Suíça",
          desc: "Limão batido com casca e leite condensado — 500ml.",
          preco: 12.9,
        },
        {
          nome: "Cerveja Artesanal IPA",
          desc: "IPA local, 473ml, amargor médio e aroma cítrico.",
          preco: 19.9,
        },
        {
          nome: "Água com Gás",
          desc: "Garrafa 500ml.",
          preco: 6.5,
        },
      ],
    },
    {
      nome: "Sobremesas",
      icone: "CakeSlice",
      produtos: [
        {
          nome: "Milkshake de Ovomaltine",
          desc: "Sorvete de baunilha batido com Ovomaltine — 400ml.",
          preco: 21.9,
          tag: "Mais pedido",
          foto: "/catalogo-inicial/hamburgueria/milkshake.jpg",
        },
        {
          nome: "Petit Gâteau",
          desc: "Bolo quente de chocolate meio amargo com sorvete de creme.",
          preco: 24.9,
        },
      ],
    },
  ],
  extras: [
    { nome: "Bacon extra", preco: 6.5, categorias: ["Hambúrgueres"] },
    { nome: "Queijo extra", preco: 4.5, categorias: ["Hambúrgueres"] },
    { nome: "Ovo frito", preco: 4, categorias: ["Hambúrgueres"] },
    { nome: "Cebola caramelizada", preco: 4, categorias: ["Hambúrgueres"] },
    { nome: "Molho da casa extra", preco: 3, categorias: ["Hambúrgueres", "Batatas e Porções"] },
    { nome: "Cheddar cremoso", preco: 5.5, categorias: ["Batatas e Porções"] },
  ],
  promocoes: [
    {
      eyebrow: "Terça do smash",
      titulo: "Segundo smash pela metade",
      descricao: "Toda terça, o segundo Smash Clássico sai com 50% de desconto.",
      desconto: "50%",
      foto: "/catalogo-inicial/hamburgueria/smash-duplo.jpg",
    },
    {
      eyebrow: "Combo da semana",
      titulo: "Combo Clássico por R$ 36,90",
      descricao: "Lanche, fritas média e refrigerante de segunda a quinta.",
      preco: 36.9,
      precoOriginal: 42.9,
      foto: "/catalogo-inicial/hamburgueria/x-tudo.jpg",
    },
  ],
  posts: [
    {
      titulo: "Por que moemos a carne todo dia",
      corpo:
        "Carne moída perde sabor em poucas horas de geladeira. Moemos duas vezes por dia, no começo de cada turno, e o que sobra não volta para a chapa no dia seguinte.",
      diasAtras: 4,
      curtidas: 31,
    },
    {
      titulo: "Novo pão brioche",
      corpo:
        "Trocamos a receita do pão: mais manteiga, menos açúcar. Aguenta o suco da carne sem desmanchar até a última mordida.",
      diasAtras: 12,
      curtidas: 18,
    },
  ],
  avaliacoes: [
    {
      nome: "Rafael M.",
      nota: 5,
      comentario: "Melhor smash da região. A crosta da carne é outro nível e chegou quente.",
      resposta: "Valeu, Rafael! A chapa a 280°C faz esse trabalho.",
      diasAtras: 3,
      curtidas: 12,
    },
    {
      nome: "Carolina D.",
      nota: 5,
      comentario: "Peço toda semana. O cheddar bacon nunca decepciona.",
      diasAtras: 9,
      curtidas: 7,
    },
    {
      nome: "Thiago P.",
      nota: 4,
      comentario: "Lanche excelente, só demorou um pouco mais que o previsto num sábado.",
      resposta: "Obrigado pelo retorno! Sábado à noite é nosso pico, estamos ajustando a equipe.",
      diasAtras: 15,
      curtidas: 3,
    },
    {
      nome: "Juliana S.",
      nota: 5,
      comentario: "O veggie de grão-de-bico surpreendeu, tem textura de verdade.",
      diasAtras: 22,
      curtidas: 9,
    },
  ],
};
