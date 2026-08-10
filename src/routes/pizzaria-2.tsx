import { createFileRoute } from "@tanstack/react-router";
import {
  Award,
  BookOpen,
  Clock,
  Flame,
  Leaf,
  MapPin,
  Menu as MenuIcon,
  MessageCircle,
  Minus,
  Phone,
  Pizza,
  Plus,
  Quote,
  ShieldCheck,
  ShoppingCart,
  Star,
  Trash2,
  Truck,
  Users,
  X,
} from "lucide-react";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { stockImageUrl } from "@/lib/stock-image";
import { cn } from "@/lib/utils";
import pizzaHeroVideo from "@/assets/fotos de pizza/3752508-hd_1920_1080_24fps.mp4";
import mussarelaPhoto from "@/assets/fotos de pizza/-y3e4Lvqgh4UfQ0vaiTswFyofSoaWTBHlslrcGJNafMd4lf-JcPA0blDdDiTqUV4NDKNFSGHkGknskPAvix5eA-PJ8mEZcWQhHXCumGB6WlqKqLWXxVQpgo5928ZFhM5wA2FDMK6HJwUI5m5Jcg9LBO71G9D1uXviuiY663AjmTpjqRQpz7gPWLTuHNwUKH4.jpg";
import frangoPhoto from "@/assets/fotos de pizza/1F6QlDfR9Sj4OpZh3DUkHH4ZnrhEZsbp5feodht1TWhFHxv2UixIMmcL_7cSgb3Kh_E2gVRHLFaP8mCcoN8csayC6HoIW2oBM7B3WxWDdS7FxPsEP1pQjrtDnzQ_1DicdXd6TZdi98NydR5WuCRy8WtQnBxNxQkv0w_Mt6WYv5bjD1A-rKAbAZIvA8JIPzVc.jpg";
import pepperoniPhoto from "@/assets/fotos de pizza/1Tu0uqD8wbRCprxkvU5xupqfvgbLPS8Yycuqnh5r2kwNa5ldER9yAnzwfl7QXbCmb4zdMJ1V3p_FsH0-LpzleWIQL7IYLHcSJnELa063LtQXZrxWlWDyMD86mwi9kIK6HWKyOrdfs4E6ZbuoSCSBU9khs8An4zcdCi8f-p33h3BLE5Uk0-AdJFFvanbuSAsI.jpg";
import quatroQueijosPhoto from "@/assets/fotos de pizza/DXbIkZUlFnaEqBuMvdyvFtveXPvfgGB6My8wFvID47DnWVgcpTb6gxCOZa3xIXACFMa5G252zRbrmAX4mf6EnCXMq5GMEjovjY6JO_Dj2MkIv8w-fRcbGC-144-x3ElJlrUWA48D5Iu-s8l-qqNvY16IqgqGFXuZsgV4VmkywXVm01AODjkjJc1d-6qoOtln.jpg";

const title = "Forno & Fogo Pizzaria — Peça pelo WhatsApp";
const description =
  "Pizzas na brasa, entrega rápida e promoções da casa. Cardápio completo e pedido direto pelo WhatsApp.";

export const Route = createFileRoute("/pizzaria-2")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PizzariaPageV2,
});

const navItems = [
  { label: "Cardápio", href: "#cardapio" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Delivery", href: "#delivery" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Localização", href: "#local" },
];

type MenuItem = {
  name: string;
  desc: string;
  price: string;
  keyword: string;
  tag?: string;
  image?: string;
};

const menuByCategory: Record<string, MenuItem[]> = {
  Tradicionais: [
    {
      name: "Mussarela",
      desc: "Molho de tomate, mussarela e orégano.",
      price: "R$ 42,90",
      keyword: "mozzarella pizza",
      image: mussarelaPhoto,
    },
    {
      name: "Calabresa",
      desc: "Calabresa, cebola roxa e azeitona.",
      price: "R$ 45,90",
      keyword: "calabresa pizza",
      tag: "Mais pedida",
    },
    {
      name: "Frango c/ Catupiry",
      desc: "Frango desfiado, catupiry e milho.",
      price: "R$ 47,90",
      keyword: "chicken pizza",
      image: frangoPhoto,
    },
    {
      name: "Portuguesa",
      desc: "Presunto, ovos, cebola e ervilha.",
      price: "R$ 46,90",
      keyword: "portuguese pizza",
    },
    {
      name: "Napolitana",
      desc: "Molho de tomate, mussarela, tomate fatiado e manjericão.",
      price: "R$ 44,90",
      keyword: "margherita pizza",
    },
    {
      name: "Milho com Bacon",
      desc: "Milho verde, bacon crocante, mussarela e orégano.",
      price: "R$ 45,90",
      keyword: "bacon corn pizza",
    },
    {
      name: "Alho e Óleo",
      desc: "Alho frito, azeite trufado, orégano e mussarela.",
      price: "R$ 40,90",
      keyword: "garlic pizza",
    },
    {
      name: "Escarola com Bacon",
      desc: "Escarola refogada, bacon crocante e mussarela.",
      price: "R$ 43,90",
      keyword: "greens bacon pizza",
    },
    {
      name: "Presunto e Queijo",
      desc: "Presunto fatiado, mussarela e orégano.",
      price: "R$ 41,90",
      keyword: "ham cheese pizza",
    },
    {
      name: "Toscana",
      desc: "Calabresa moída, cebola, pimentão e azeitona preta.",
      price: "R$ 46,90",
      keyword: "sausage pepper pizza",
    },
    {
      name: "Napoli com Anchovas",
      desc: "Molho de tomate, mussarela, anchovas e alcaparras.",
      price: "R$ 48,90",
      keyword: "anchovy pizza",
    },
    {
      name: "Brócolis com Bacon",
      desc: "Brócolis, bacon crocante e mussarela.",
      price: "R$ 44,90",
      keyword: "broccoli bacon pizza",
    },
    {
      name: "Milho Verde",
      desc: "Milho verde, mussarela e orégano.",
      price: "R$ 39,90",
      keyword: "corn cheese pizza",
    },
    {
      name: "Palmito",
      desc: "Palmito, mussarela, tomate e orégano.",
      price: "R$ 47,90",
      keyword: "hearts of palm pizza",
    },
  ],
  Especiais: [
    {
      name: "Bacon Cheddar",
      desc: "Bacon crocante, cheddar cremoso e cebola caramelizada.",
      price: "R$ 54,90",
      keyword: "bacon cheddar pizza",
      tag: "Novidade",
    },
    {
      name: "Pepperoni Duplo",
      desc: "Dose dupla de pepperoni importado e mussarela.",
      price: "R$ 56,90",
      keyword: "pepperoni pizza",
      image: pepperoniPhoto,
    },
    {
      name: "Quatro Queijos",
      desc: "Mussarela, provolone, parmesão e gorgonzola.",
      price: "R$ 55,90",
      keyword: "cheese pizza",
      image: quatroQueijosPhoto,
    },
    {
      name: "Rúcula com Tomate Seco",
      desc: "Mussarela de búfala, rúcula fresca e tomate seco.",
      price: "R$ 53,90",
      keyword: "arugula pizza",
    },
    {
      name: "Carne Seca com Catupiry",
      desc: "Carne seca desfiada, catupiry cremoso e cebola roxa.",
      price: "R$ 58,90",
      keyword: "shredded beef pizza",
    },
    {
      name: "Camarão Especial",
      desc: "Camarão ao alho, catupiry e mussarela.",
      price: "R$ 64,90",
      keyword: "shrimp pizza",
      tag: "Chef",
    },
    {
      name: "Vegetariana Premium",
      desc: "Berinjela grelhada, pimentão, cebola roxa e mussarela de búfala.",
      price: "R$ 52,90",
      keyword: "grilled vegetable pizza",
    },
    {
      name: "Filé Mignon com Catupiry",
      desc: "Filé mignon fatiado, catupiry e cebola caramelizada.",
      price: "R$ 62,90",
      keyword: "steak pizza",
    },
    {
      name: "Salmão Grelhado",
      desc: "Salmão grelhado, cream cheese e cebolinha.",
      price: "R$ 66,90",
      keyword: "salmon pizza",
      tag: "Chef",
    },
    {
      name: "Trufa Negra",
      desc: "Cogumelos frescos, trufa negra e mussarela de búfala.",
      price: "R$ 68,90",
      keyword: "truffle mushroom pizza",
    },
    {
      name: "Costela Desfiada",
      desc: "Costela bovina desfiada, barbecue e cebola roxa.",
      price: "R$ 59,90",
      keyword: "bbq beef pizza",
    },
    {
      name: "Burrata",
      desc: "Burrata fresca, tomate cereja e manjericão.",
      price: "R$ 57,90",
      keyword: "burrata pizza",
    },
    {
      name: "Frango com Cheddar e Bacon",
      desc: "Frango desfiado, cheddar cremoso e bacon crocante.",
      price: "R$ 54,90",
      keyword: "chicken bacon pizza",
    },
    {
      name: "Lombo Canadense",
      desc: "Lombo canadense, abacaxi e mussarela.",
      price: "R$ 53,90",
      keyword: "canadian bacon pineapple pizza",
    },
  ],
  Doces: [
    {
      name: "Chocolate com Morango",
      desc: "Chocolate ao leite derretido e morangos frescos.",
      price: "R$ 44,90",
      keyword: "chocolate pizza",
    },
    {
      name: "Banana com Canela",
      desc: "Banana caramelizada, canela e leite condensado.",
      price: "R$ 41,90",
      keyword: "banana dessert",
    },
    {
      name: "Ninho com Nutella",
      desc: "Leite ninho, Nutella e morango.",
      price: "R$ 47,90",
      keyword: "nutella pizza",
      tag: "Mais pedida",
    },
    {
      name: "Romeu e Julieta",
      desc: "Goiabada cremosa e queijo minas.",
      price: "R$ 42,90",
      keyword: "guava cheese dessert",
    },
    {
      name: "Doce de Leite com Coco",
      desc: "Doce de leite, coco ralado e leite condensado.",
      price: "R$ 43,90",
      keyword: "dulce de leche coconut dessert",
    },
    {
      name: "Brigadeiro",
      desc: "Chocolate, granulado e leite condensado.",
      price: "R$ 45,90",
      keyword: "brigadeiro chocolate dessert",
    },
    {
      name: "Morango com Chocolate Branco",
      desc: "Morango fresco e chocolate branco derretido.",
      price: "R$ 46,90",
      keyword: "strawberry white chocolate dessert",
    },
    {
      name: "Banoffee",
      desc: "Banana, doce de leite e raspas de chocolate.",
      price: "R$ 44,90",
      keyword: "banoffee dessert",
    },
    {
      name: "Kinder Bueno",
      desc: "Chocolate ao leite e pedaços de Kinder Bueno.",
      price: "R$ 48,90",
      keyword: "chocolate wafer dessert",
      tag: "Novidade",
    },
    {
      name: "Paçoca",
      desc: "Paçoca triturada, leite condensado e amendoim.",
      price: "R$ 42,90",
      keyword: "peanut candy dessert",
    },
    {
      name: "Maracujá com Chocolate",
      desc: "Creme de maracujá e chocolate meio amargo.",
      price: "R$ 45,90",
      keyword: "passion fruit chocolate dessert",
    },
    {
      name: "Red Velvet",
      desc: "Chocolate, cream cheese e corante natural.",
      price: "R$ 49,90",
      keyword: "red velvet dessert",
    },
  ],
  Bebidas: [
    {
      name: "Coca-Cola Lata",
      desc: "350ml, geladinha.",
      price: "R$ 6,50",
      keyword: "coca cola can",
    },
    {
      name: "Guaraná Antarctica 2L",
      desc: "Garrafa 2 litros.",
      price: "R$ 12,90",
      keyword: "soda bottle",
      tag: "Mais pedida",
    },
    {
      name: "Suco de Laranja Natural",
      desc: "500ml, feito na hora.",
      price: "R$ 9,90",
      keyword: "orange juice glass",
    },
    {
      name: "Água Mineral",
      desc: "500ml, com ou sem gás.",
      price: "R$ 4,50",
      keyword: "mineral water bottle",
    },
    {
      name: "Heineken Long Neck",
      desc: "330ml.",
      price: "R$ 11,90",
      keyword: "beer bottle",
      tag: "Novidade",
    },
    {
      name: "Sprite Lata",
      desc: "350ml, geladinha.",
      price: "R$ 6,50",
      keyword: "lemon soda can",
    },
    {
      name: "Fanta Laranja Lata",
      desc: "350ml, geladinha.",
      price: "R$ 6,50",
      keyword: "orange soda can",
    },
    {
      name: "Suco de Uva",
      desc: "500ml, integral.",
      price: "R$ 9,90",
      keyword: "grape juice glass",
    },
    {
      name: "Suco de Maracujá",
      desc: "500ml, feito na hora.",
      price: "R$ 9,90",
      keyword: "passion fruit juice glass",
    },
    {
      name: "Budweiser Long Neck",
      desc: "330ml.",
      price: "R$ 10,90",
      keyword: "beer bottle",
    },
    {
      name: "Corona Long Neck",
      desc: "330ml, com limão.",
      price: "R$ 12,90",
      keyword: "mexican beer bottle",
    },
    {
      name: "Energético Red Bull",
      desc: "250ml.",
      price: "R$ 13,90",
      keyword: "energy drink can",
    },
    {
      name: "Água com Gás",
      desc: "500ml.",
      price: "R$ 5,50",
      keyword: "sparkling water bottle",
    },
    {
      name: "Chá Gelado de Limão",
      desc: "450ml.",
      price: "R$ 8,50",
      keyword: "iced tea bottle",
    },
    {
      name: "Espresso",
      desc: "Café expresso curto.",
      price: "R$ 6,90",
      keyword: "espresso coffee cup",
    },
  ],
};

const categories = Object.keys(menuByCategory);

function parseCurrency(value: string): number {
  return Number(value.replace(/[^\d,]/g, "").replace(",", "."));
}

function formatCurrency(value: number): string {
  return `R$ ${value.toFixed(2).replace(".", ",")}`;
}

function deriveSizePrice(basePrice: string, multiplier: number): string {
  return formatCurrency(parseCurrency(basePrice) * multiplier);
}

const SIZE_BLOCKS = [
  { key: "grande", label: "Pizzas Grandes", desc: "35cm · serve até 4 pessoas", multiplier: 1 },
  { key: "media", label: "Pizzas Médias", desc: "25cm · serve até 2 pessoas", multiplier: 0.78 },
  { key: "broto", label: "Pizzas Broto", desc: "20cm · serve 1 pessoa", multiplier: 0.55 },
  { key: "fatia", label: "Fatias", desc: "individual, pronta na hora", multiplier: 0.32 },
] as const;

const steps = [
  {
    icon: Pizza,
    title: "Escolha no cardápio",
    desc: "Veja os sabores, promoções e monte seu pedido.",
  },
  {
    icon: MessageCircle,
    title: "Chama no WhatsApp",
    desc: "Manda o pedido pronto, sem cadastro nem app.",
  },
  {
    icon: Flame,
    title: "Receba quentinha",
    desc: "Saída do forno a lenha direto pra sua porta.",
  },
];

const differentiators = [
  {
    icon: Flame,
    title: "Forno a lenha",
    desc: "700°C, massa fermentada 48h e crosta perfeita.",
  },
  {
    icon: Leaf,
    title: "Ingredientes frescos",
    desc: "Selecionados todos os dias, sem atalhos.",
  },
  {
    icon: Truck,
    title: "Entrega rápida",
    desc: "Até 40 minutos direto na sua porta.",
  },
  {
    icon: ShieldCheck,
    title: "Pagamento fácil",
    desc: "Pix, cartão ou dinheiro, você escolhe.",
  },
];

function buildWavePath(width: number, period: number, amplitude: number, baseline: number, step = 2) {
  let d = `M0,${baseline}`;
  for (let x = step; x <= width; x += step) {
    const y = baseline + amplitude * Math.sin((x / period) * Math.PI * 2);
    d += ` L${x.toFixed(2)},${y.toFixed(2)}`;
  }
  return d;
}

const WAVE_HEIGHT = 32;
const WAVE_BASELINE = WAVE_HEIGHT / 2;
const WAVE_TILE = 120;
const WAVE_WIDTH = WAVE_TILE * 2;
const wavePath = buildWavePath(WAVE_WIDTH, 40, 11, WAVE_BASELINE);

const stats = [
  { icon: Award, value: "15 anos", label: "de tradição" },
  { icon: Users, value: "12 mil+", label: "clientes atendidos" },
  { icon: Star, value: "4.9/5", label: "avaliação média" },
  { icon: Clock, value: "35 min", label: "tempo médio de entrega" },
];

const testimonials = [
  {
    name: "Bruna Costa",
    text: "Peço toda semana. A massa é levinha e o atendimento no WhatsApp é super rápido.",
  },
  {
    name: "Diego Martins",
    text: "A promoção de terça vale muito a pena, e a pizza chega quente mesmo morando longe.",
  },
  {
    name: "Larissa Prado",
    text: "Melhor bacon cheddar que já comi. Virou tradição de sexta aqui em casa.",
  },
];

const faq = [
  {
    q: "Qual a área de entrega?",
    a: "Entregamos em um raio de 6 km a partir da loja. Fora dessa área, consulte disponibilidade pelo WhatsApp.",
  },
  {
    q: "Quais formas de pagamento vocês aceitam?",
    a: "Pix, cartão de crédito/débito na entrega e dinheiro. O pagamento é combinado direto no WhatsApp.",
  },
  {
    q: "Tem opção sem glúten ou vegetariana?",
    a: "Sim, temos massa sem glúten e opções vegetarianas no cardápio. É só perguntar ao fazer o pedido.",
  },
  {
    q: "Qual o pedido mínimo para delivery?",
    a: "Pedido mínimo de R$ 35,00 para entrega. Retirada no balcão não tem valor mínimo.",
  },
];

type SizeKey = (typeof SIZE_BLOCKS)[number]["key"];
type CartLine = { item: MenuItem; qty: number; sizeLabel: string; unitPrice: string };
type Cart = Record<string, CartLine>;

function cartKey(itemName: string, sizeKey: string) {
  return `${itemName}__${sizeKey}`;
}

function FullMenuRow({
  item,
  price,
  qty,
  onAdd,
  onRemove,
}: {
  item: MenuItem;
  price: string;
  qty: number;
  onAdd: () => void;
  onRemove: () => void;
}) {
  return (
    <Dialog>
      <div className="flex items-center gap-2.5 rounded-xl border border-white/8 bg-white/3 p-2 transition-colors hover:bg-white/6">
        <DialogTrigger asChild>
          <button type="button" className="flex min-w-0 flex-1 cursor-pointer items-center gap-2.5 text-left">
            <span className="h-10 w-10 shrink-0 overflow-hidden rounded-lg">
              <img
                src={item.image ?? stockImageUrl(item.keyword, 120, 120)}
                alt={item.name}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </span>
            <span className="min-w-0 flex-1">
              <span className="flex flex-wrap items-center gap-x-1.5 gap-y-0.5">
                <span className="truncate font-display text-xs font-bold text-white">{item.name}</span>
                {item.tag && (
                  <Badge className="rounded-full border-none bg-[#F5B400] px-1.5 py-0 text-[8px] font-bold text-black">
                    {item.tag}
                  </Badge>
                )}
              </span>
              <span className="line-clamp-1 block text-[11px] text-white/45">{item.desc}</span>
              <span className="block font-display text-xs font-extrabold text-[#F5B400]">
                {price}
              </span>
            </span>
          </button>
        </DialogTrigger>

        {qty === 0 ? (
          <button
            type="button"
            onClick={onAdd}
            aria-label={`Adicionar ${item.name}`}
            className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#F5B400] text-black transition-transform hover:scale-105"
          >
            <Plus className="h-3.5 w-3.5" />
          </button>
        ) : (
          <div className="flex shrink-0 items-center gap-1.5 rounded-full border border-white/10 bg-black/30 px-1 py-0.5">
            <button
              type="button"
              onClick={onRemove}
              aria-label={`Remover ${item.name}`}
              className="grid h-5 w-5 place-items-center rounded-full text-white/70 transition-colors hover:bg-white/10"
            >
              <Minus className="h-3 w-3" />
            </button>
            <span className="w-3 text-center text-xs font-bold text-white">{qty}</span>
            <button
              type="button"
              onClick={onAdd}
              aria-label={`Adicionar ${item.name}`}
              className="grid h-5 w-5 place-items-center rounded-full bg-[#F5B400] text-black transition-transform hover:scale-105"
            >
              <Plus className="h-3 w-3" />
            </button>
          </div>
        )}
      </div>

      <DialogContent className="max-w-sm overflow-hidden border-white/10 bg-[#171008] p-0 text-white sm:rounded-3xl">
        <div className="relative aspect-square w-full">
          <img
            src={item.image ?? stockImageUrl(item.keyword, 500, 500)}
            alt={item.name}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_60%,rgba(0,0,0,0.85)_100%)]" />
          {item.tag && (
            <Badge className="absolute left-4 top-4 rounded-full border-none bg-[#F5B400] px-2.5 py-1 text-[10px] font-bold text-black">
              {item.tag}
            </Badge>
          )}
        </div>

        <div className="p-6">
          <DialogHeader>
            <DialogTitle className="font-display text-xl font-extrabold text-white">
              {item.name}
            </DialogTitle>
            <DialogDescription className="text-sm text-white/60">{item.desc}</DialogDescription>
          </DialogHeader>

          <div className="mt-4 flex items-center justify-between">
            <span className="font-display text-2xl font-extrabold text-[#F5B400]">{price}</span>
            <DialogClose asChild>
              <Button
                variant="hero"
                onClick={onAdd}
                className="rounded-full bg-[#F5B400] text-black hover:brightness-105"
              >
                <Plus className="h-4 w-4" /> Adicionar
              </Button>
            </DialogClose>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function FullMenuDialog({
  open,
  onOpenChange,
}: {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}) {
  const [cart, setCart] = useState<Cart>({});
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [activeSize, setActiveSize] = useState<SizeKey>("grande");
  const isDrinks = activeCategory === "Bebidas";
  const activeBlock = SIZE_BLOCKS.find((b) => b.key === activeSize) ?? SIZE_BLOCKS[0];
  const effectiveMultiplier = isDrinks ? 1 : activeBlock.multiplier;
  const effectiveSizeKey = isDrinks ? "unico" : activeSize;
  const effectiveSizeLabel = isDrinks ? "" : activeBlock.label;

  function addItem(item: MenuItem) {
    const key = cartKey(item.name, effectiveSizeKey);
    const unitPrice = deriveSizePrice(item.price, effectiveMultiplier);
    setCart((prev) => {
      const qty = (prev[key]?.qty ?? 0) + 1;
      return { ...prev, [key]: { item, qty, sizeLabel: effectiveSizeLabel, unitPrice } };
    });
  }

  function removeItem(key: string) {
    setCart((prev) => {
      const line = prev[key];
      if (!line) return prev;
      if (line.qty <= 1) {
        const next = { ...prev };
        delete next[key];
        return next;
      }
      return { ...prev, [key]: { ...line, qty: line.qty - 1 } };
    });
  }

  function dropItem(key: string) {
    setCart((prev) => {
      const next = { ...prev };
      delete next[key];
      return next;
    });
  }

  const cartLines = Object.entries(cart);
  const total = cartLines.reduce((sum, [, l]) => sum + parseCurrency(l.unitPrice) * l.qty, 0);
  const cartCount = cartLines.reduce((sum, [, l]) => sum + l.qty, 0);

  const whatsappHref = `https://wa.me/5511999999999?text=${encodeURIComponent(
    `Oi! Quero pedir:\n${cartLines
      .map(([, l]) => `${l.qty}x ${l.item.name} (${l.sizeLabel}) — ${l.unitPrice}`)
      .join("\n")}\n\nTotal: ${formatCurrency(total)}`,
  )}`;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button
          variant="hero"
          size="lg"
          className="mx-auto flex rounded-full bg-[#F5B400] text-black hover:brightness-105"
        >
          <BookOpen className="h-4 w-4" /> Ver cardápio
        </Button>
      </DialogTrigger>
      <DialogContent className="h-[85vh] max-w-4xl overflow-hidden border-white/10 bg-[#171008] p-0 text-white sm:rounded-3xl">
        <div className="flex h-[85vh] flex-col p-6 sm:p-8">
          <DialogHeader>
            <DialogTitle className="font-display text-xl font-extrabold text-white">
              Cardápio completo
            </DialogTitle>
            <DialogDescription className="text-white/50">
              Escolha o tipo e o tamanho, e toque num item pra adicionar ao carrinho.
            </DialogDescription>
          </DialogHeader>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-1.5 rounded-full border border-white/10 bg-white/5 p-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors",
                    activeCategory === cat
                      ? "bg-[#F5B400] text-black"
                      : "text-white/60 hover:text-white",
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>

            {!isDrinks && (
              <div className="flex flex-wrap gap-1.5">
                {SIZE_BLOCKS.map((block) => (
                  <button
                    key={block.key}
                    type="button"
                    onClick={() => setActiveSize(block.key)}
                    className={cn(
                      "rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors",
                      activeSize === block.key
                        ? "border-[#F5B400] bg-[#F5B400] text-black"
                        : "border-white/10 bg-white/5 text-white/60 hover:bg-white/10",
                    )}
                  >
                    {block.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="mt-6 grid flex-1 grid-cols-1 gap-6 overflow-hidden lg:grid-cols-[1fr_300px]">
            <div className="scrollbar-hide grid grid-cols-1 gap-2 overflow-y-auto pr-1 sm:grid-cols-2">
              {menuByCategory[activeCategory].map((item) => {
                const key = cartKey(item.name, activeSize);
                return (
                  <FullMenuRow
                    key={key}
                    item={item}
                    price={deriveSizePrice(item.price, activeBlock.multiplier)}
                    qty={cart[key]?.qty ?? 0}
                    onAdd={() => addItem(item)}
                    onRemove={() => removeItem(key)}
                  />
                );
              })}
            </div>

            <div className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/3 p-4">
              <div className="flex items-center gap-2 text-white">
                <ShoppingCart className="h-4 w-4 text-[#F5B400]" />
                <h3 className="font-display text-sm font-bold uppercase tracking-wide">
                  Seu pedido
                </h3>
                {cartCount > 0 && (
                  <span className="ml-auto grid h-5 w-5 place-items-center rounded-full bg-[#F5B400] text-[10px] font-bold text-black">
                    {cartCount}
                  </span>
                )}
              </div>

              {cartLines.length === 0 ? (
                <p className="mt-6 flex-1 text-center text-xs text-white/40">
                  Seu carrinho está vazio.
                  <br />
                  Toque numa pizza pra começar.
                </p>
              ) : (
                <div className="scrollbar-hide mt-4 flex-1 space-y-3 overflow-y-auto pr-1">
                  {cartLines.map(([key, line]) => (
                    <div key={key} className="flex items-start gap-2">
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-xs font-semibold text-white">
                          {line.qty}x {line.item.name}
                        </p>
                        <p className="text-[11px] text-white/40">
                          {line.sizeLabel} · {formatCurrency(parseCurrency(line.unitPrice) * line.qty)}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => dropItem(key)}
                        aria-label={`Remover ${line.item.name} do carrinho`}
                        className="shrink-0 text-white/30 transition-colors hover:text-primary"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-4 border-t border-white/10 pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-white/60">Total</span>
                  <span className="font-display text-lg font-extrabold text-[#F5B400]">
                    {formatCurrency(total)}
                  </span>
                </div>
                <Button
                  variant="hero"
                  size="sm"
                  disabled={cartLines.length === 0}
                  className="mt-3 w-full rounded-full bg-[#F5B400] text-black hover:brightness-105 disabled:pointer-events-none disabled:opacity-40"
                  asChild={cartLines.length > 0}
                >
                  {cartLines.length > 0 ? (
                    <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                      <WhatsAppIcon className="h-3.5 w-3.5" /> Finalizar no WhatsApp
                    </a>
                  ) : (
                    <span>Finalizar no WhatsApp</span>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function PizzariaPageV2() {
  const [open, setOpen] = useState(false);
  const [menuDialogOpen, setMenuDialogOpen] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const [heroOffset, setHeroOffset] = useState(0);
  const [businessName, setBusinessName] = useState("");

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem("velnox:onboarding");
      if (!raw) return;
      const data = JSON.parse(raw) as { businessName?: string };
      if (data.businessName?.trim()) setBusinessName(data.businessName.trim());
    } catch {
      // sem dados salvos, segue com a prévia genérica
    }
  }, []);

  function openMenuFromHero(e: MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    document.getElementById("cardapio")?.scrollIntoView({ behavior: "smooth" });
    setMenuDialogOpen(true);
  }

  useEffect(() => {
    let ticking = false;

    function updateOffset() {
      ticking = false;
      const el = heroRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      setHeroOffset(rect.top * -0.25);
    }

    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(updateOffset);
    }

    updateOffset();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <header className="absolute inset-x-0 top-0 z-50 bg-transparent">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-6 py-4">
          <a href="#topo" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-accent text-primary-foreground">
              <Flame className="h-4.5 w-4.5" />
            </span>
            <span className="font-display text-base font-bold">Sua Logo Aqui!</span>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="hero" size="sm" className="hidden rounded-full sm:inline-flex" asChild>
              <a href="tel:+5511999999999">
                <Phone className="h-3.5 w-3.5" /> (11) 99999-9999
              </a>
            </Button>
            <Button
              variant="glass"
              size="icon"
              className="rounded-lg md:hidden"
              aria-label="Abrir menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {open && (
          <nav className="border-t border-border bg-background px-6 pb-5 pt-2 md:hidden">
            <ul className="flex flex-col">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-border/60 py-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      <main>
        <section
          id="topo"
          ref={heroRef}
          className="relative isolate flex h-screen min-h-160 flex-col justify-end overflow-hidden"
        >
          <video
            src={pizzaHeroVideo}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 -z-10 h-full w-full object-cover will-change-transform"
            style={{ transform: `translate3d(0, ${heroOffset}px, 0) scale(1.15)` }}
          />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0.45)_0%,rgba(0,0,0,0.25)_45%,rgba(0,0,0,0.6)_100%)]" />

          <div className="animate-in fade-in slide-in-from-bottom-4 absolute right-6 top-24 hidden items-center gap-3 rounded-2xl border border-white/10 bg-[#0b0b0b]/85 px-4 py-3 shadow-glow backdrop-blur duration-700 sm:flex lg:top-28">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary">
              <Flame className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-sm font-bold text-white">700°C</span>
              <span className="block text-[11px] text-white/60">forno a lenha</span>
            </span>
          </div>

          <div className="mx-auto w-full max-w-[1200px] px-6 pt-16 pb-10 lg:pt-24">
            <div className="animate-in fade-in slide-in-from-bottom-4 max-w-xl duration-700">
              <Badge className="w-fit rounded-full bg-primary/15 text-primary" variant="outline">
                Aberto agora · fecha às 23h30
              </Badge>
              <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] text-white sm:text-6xl">
                {businessName || "Forno & Fogo"}
                <span className="mt-2 block text-2xl font-bold text-white/85 sm:text-3xl">
                  Pizza na brasa, direto pro seu WhatsApp
                </span>
              </h1>
              <p className="mt-5 max-w-sm text-base leading-relaxed text-white/70">
                Sem app, sem cadastro. Escolhe a pizza, manda mensagem e a gente cuida do resto.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <div className="relative">
                  <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-primary/50" />
                  <Button
                    variant="hero"
                    size="xl"
                    className="rounded-full px-10 text-lg shadow-[0_0_60px_-10px_var(--primary)]"
                    asChild
                  >
                    <a href="#cardapio" onClick={openMenuFromHero}>
                      <BookOpen className="h-5 w-5" /> Ver cardápio
                    </a>
                  </Button>
                </div>
              </div>
              <div className="mt-10 flex items-center gap-4 border-t border-white/15 pt-6">
                <div className="flex -space-x-3">
                  {["JS", "MA", "RC"].map((initials) => (
                    <span
                      key={initials}
                      className="grid h-9 w-9 place-items-center rounded-full border-2 border-black/40 bg-accent text-[10px] font-semibold"
                    >
                      {initials}
                    </span>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 text-primary">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs text-white/60">4.9 de 5 · +12 mil pedidos entregues</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 w-full py-10">
            <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-6 px-6 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col items-center text-center">
                  <span
                    tabIndex={0}
                    className="grid h-10 w-10 cursor-default place-items-center rounded-full bg-primary/15 text-primary transition-colors duration-300 hover:bg-primary hover:text-primary-foreground focus-visible:bg-primary focus-visible:text-primary-foreground focus-visible:outline-none"
                  >
                    <s.icon className="h-4.5 w-4.5" />
                  </span>
                  <span className="mt-3 font-display text-lg font-extrabold text-white sm:text-xl">
                    {s.value}
                  </span>
                  <span className="text-xs text-white/60">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#F4F8FA] py-16 sm:py-24">
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative mx-auto max-w-[1200px] px-6">
            <div className="text-center">
              <Badge className="w-fit rounded-full bg-primary/10 text-primary" variant="outline">
                Como funciona
              </Badge>
              <h2 className="mt-4 font-display text-2xl font-extrabold text-neutral-900 sm:text-4xl">
                Do pedido à porta em 3 passos
              </h2>
              <p className="mx-auto mt-3 max-w-sm text-sm text-neutral-500">
                Um fluxo direto, sem fricção: cada passo já prepara o próximo.
              </p>
            </div>

            <div className="mt-12 rounded-[32px] border border-neutral-200/80 bg-white/70 p-8 shadow-[0_30px_70px_-40px_rgba(0,0,0,0.25)] backdrop-blur-sm sm:p-12">
              <div className="relative grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-6">
                <div className="pointer-events-none absolute inset-x-0 top-7 hidden sm:block">
                  <div className="mx-[16.5%] h-8 -translate-y-1/2 overflow-hidden">
                    <svg
                      className="h-8 w-[200%] animate-[wave-move_9s_linear_infinite] [animation-direction:reverse]"
                      viewBox={`0 0 ${WAVE_WIDTH} ${WAVE_HEIGHT}`}
                      preserveAspectRatio="none"
                      fill="none"
                    >
                      <path
                        d={wavePath}
                        stroke="var(--primary)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                {steps.map((s, i) => (
                  <div
                    key={s.title}
                    className={cn(
                      "relative flex flex-col items-center text-center",
                      i < steps.length - 1 &&
                        "after:mx-auto after:mt-6 after:h-8 after:w-px after:bg-neutral-200 after:content-[''] sm:after:hidden",
                    )}
                  >
                    <div className="relative">
                      <span
                        className="absolute inset-0 -z-10 rounded-full bg-primary/30 animate-ping"
                        style={{ animationDelay: `${i * 0.5}s`, animationDuration: "2.4s" }}
                      />
                      <span className="relative z-10 grid h-14 w-14 place-items-center rounded-full bg-gradient-accent text-primary-foreground shadow-glow">
                        <s.icon className="h-6 w-6" />
                      </span>
                      <span className="absolute -right-1 -top-1 z-20 grid h-5 w-5 place-items-center rounded-full border-2 border-white bg-primary text-[10px] font-bold text-primary-foreground">
                        {i + 1}
                      </span>
                    </div>
                    <span className="mt-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary/70">
                      Passo {i + 1}
                    </span>
                    <h3 className="mt-1 font-display text-lg font-bold text-neutral-900">{s.title}</h3>
                    <p className="mt-1.5 max-w-[220px] text-sm text-neutral-500">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="cardapio" className="scroll-mt-24 relative overflow-hidden bg-[#4b4e53] py-16 sm:py-20">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_20%_20%,rgba(0,0,0,0.25),transparent_50%),radial-gradient(ellipse_at_80%_70%,rgba(0,0,0,0.2),transparent_55%),radial-gradient(ellipse_at_50%_100%,rgba(255,255,255,0.04),transparent_60%)]" />
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.3)_100%)]" />

          <Pizza className="pointer-events-none absolute -left-4 top-8 h-16 w-16 -rotate-12 text-white/10 sm:left-8" />
          <BookOpen className="pointer-events-none absolute right-6 top-16 h-10 w-10 rotate-12 text-white/10 sm:right-16" />
          <Pizza className="pointer-events-none absolute bottom-10 left-[12%] h-9 w-9 rotate-45 text-white/10" />
          <Pizza className="pointer-events-none absolute -right-3 bottom-6 h-20 w-20 rotate-6 text-white/10 sm:right-10" />
          <BookOpen className="pointer-events-none absolute left-[38%] top-4 hidden h-8 w-8 -rotate-6 text-white/10 lg:block" />
          <Pizza className="pointer-events-none absolute right-[30%] bottom-2 hidden h-7 w-7 rotate-20 text-white/10 lg:block" />
          <BookOpen className="pointer-events-none absolute -left-2 bottom-16 h-8 w-8 rotate-8 text-white/10 sm:left-24" />
          <Pizza className="pointer-events-none absolute left-1/2 top-2 hidden h-6 w-6 -rotate-12 text-white/10 md:block" />
          <Pizza className="pointer-events-none absolute right-2 top-1/2 h-8 w-8 rotate-15 text-white/10 sm:right-4" />
          <BookOpen className="pointer-events-none absolute bottom-4 left-2 hidden h-7 w-7 rotate-12 text-white/10 sm:block" />
          <Pizza className="pointer-events-none absolute -right-6 top-4 hidden h-12 w-12 rotate-25 text-white/10 lg:block" />
          <BookOpen className="pointer-events-none absolute right-[45%] bottom-14 hidden h-6 w-6 -rotate-10 text-white/10 lg:block" />

          <div className="relative mx-auto max-w-[1200px] px-6">
            <div className="rounded-[28px] border border-white/10 bg-black/20 p-6 shadow-[0_30px_70px_-40px_rgba(0,0,0,0.6)] backdrop-blur-sm sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/20 bg-black/25 text-white shadow-glow">
                    <Flame className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-display text-base font-extrabold leading-none text-white">
                      FORNO&FOGO
                    </span>
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
                      Pizzaria
                    </span>
                  </span>
                </div>

                <div className="hidden flex-col items-end gap-1 text-right sm:flex">
                  <a
                    href="tel:+5511999999999"
                    className="flex items-center gap-1.5 text-xs font-semibold text-white/90 transition-colors hover:text-[#F5B400]"
                  >
                    <Phone className="h-3.5 w-3.5 text-white" /> Delivery (11) 99999-9999
                  </a>
                  <span className="flex items-center gap-1.5 text-[11px] text-white/65">
                    <MapPin className="h-3 w-3 text-white" /> Av. das Palmeiras, 812
                  </span>
                </div>
              </div>

              <div className="mt-8 border-t border-white/10 pt-8 text-center">
                <h2 className="font-display text-2xl font-extrabold uppercase tracking-tight text-white sm:text-4xl">
                  Combos mais pedidos
                </h2>
                <p className="mx-auto mt-3 max-w-sm text-sm text-white/60">
                  Escolha o tipo, monte o tamanho e faça seu pedido em segundos.
                </p>

                <div className="mt-4 flex items-center justify-center gap-1.5 text-[11px] text-white/50 sm:hidden">
                  <MapPin className="h-3 w-3" /> Av. das Palmeiras, 812 ·
                  <a href="tel:+5511999999999" className="text-white/70 hover:text-[#F5B400]">
                    (11) 99999-9999
                  </a>
                </div>

                <div className="mt-8 flex justify-center">
                  <FullMenuDialog open={menuDialogOpen} onOpenChange={setMenuDialogOpen} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="diferenciais" className="scroll-mt-24 border-t border-border py-16 sm:py-20">
          <div className="mx-auto max-w-[1200px] px-6">
            <div className="text-center">
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
                Por que a gente
              </span>
              <h2 className="mt-3 font-display text-2xl font-extrabold sm:text-3xl">
                Diferenciais da casa
              </h2>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {differentiators.map((item) => (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-[24px] border border-border bg-card/60 p-6 text-center transition-transform duration-300 hover:-translate-y-1"
                >
                  <span className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold">{item.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="delivery" className="scroll-mt-24 relative overflow-hidden border-t border-border py-16 sm:py-20">
          <div className="pointer-events-none absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative mx-auto max-w-[1200px] px-6">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <Badge className="w-fit rounded-full bg-primary/10 text-primary" variant="outline">
                  Delivery
                </Badge>
                <h2 className="mt-4 font-display text-2xl font-extrabold sm:text-4xl">
                  Sua pizza, na sua porta
                </h2>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                  Sem letra miúda: entrega rápida, rastreio pelo WhatsApp e frete grátis a partir
                  de R$ 80.
                </p>

                <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {[
                    {
                      icon: Clock,
                      title: "Até 40 minutos",
                      desc: "Tempo médio na sua região.",
                    },
                    {
                      icon: Truck,
                      title: "Raio de 8 km",
                      desc: "Centro e bairros vizinhos.",
                    },
                    {
                      icon: ShieldCheck,
                      title: "Pedido mín. R$ 35",
                      desc: "Frete grátis acima de R$ 80.",
                    },
                    {
                      icon: MessageCircle,
                      title: "Rastreio no WhatsApp",
                      desc: "Atualizações em tempo real.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="group rounded-2xl border border-border bg-card/60 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30"
                    >
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <item.icon className="h-4 w-4" />
                      </span>
                      <h3 className="mt-3 font-display text-sm font-bold">{item.title}</h3>
                      <p className="mt-0.5 text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Button variant="hero" size="lg" className="rounded-full" asChild>
                    <a
                      href="https://wa.me/5511999999999"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <WhatsAppIcon className="h-4 w-4" /> Peça agora pelo WhatsApp
                    </a>
                  </Button>
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1 text-primary">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-current" />
                      ))}
                    </span>
                    4.9 · +12 mil entregas
                  </span>
                </div>
              </div>

              <div className="relative">
                <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[36px] bg-primary/15 blur-2xl" />
                <div className="relative overflow-hidden rounded-[28px] border border-border shadow-soft">
                  <img
                    src={stockImageUrl("pizza delivery box", 700, 800)}
                    alt="Entrega de pizza"
                    loading="lazy"
                    className="aspect-4/5 w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(0,0,0,0.65)_100%)]" />
                </div>

                <div className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-2xl border border-white/10 bg-[#0b0b0b]/85 px-4 py-3 shadow-glow backdrop-blur">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary">
                    <Truck className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-white">Até 40 min</span>
                    <span className="block text-[11px] text-white/60">direto na sua porta</span>
                  </span>
                </div>

                <div className="absolute -top-5 right-6 flex items-center gap-2 rounded-2xl border border-white/10 bg-[#0b0b0b]/85 px-3.5 py-2.5 shadow-glow backdrop-blur">
                  <ShieldCheck className="h-4 w-4 text-primary" />
                  <span className="text-xs font-bold text-white">Frete grátis R$ 80+</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="depoimentos" className="scroll-mt-24 border-t border-border py-16 sm:py-20">
          <div className="mx-auto max-w-[1200px] px-6">
            <div className="text-center">
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
                Depoimentos
              </span>
              <h2 className="mt-3 font-display text-2xl font-extrabold sm:text-3xl">
                Quem pediu, volta a pedir
              </h2>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="relative rounded-2xl border border-border bg-card/60 p-6"
                >
                  <Quote className="h-5 w-5 text-primary/40" />
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
                  <div className="mt-5 flex items-center gap-1 text-primary">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="mt-2 text-sm font-semibold">{t.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-border py-16 sm:py-20">
          <div className="mx-auto max-w-[700px] px-6">
            <div className="text-center">
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
                Dúvidas
              </span>
              <h2 className="mt-3 font-display text-2xl font-extrabold sm:text-3xl">
                Perguntas frequentes
              </h2>
            </div>
            <Accordion type="single" collapsible className="mt-8">
              {faq.map((item, i) => (
                <AccordionItem key={item.q} value={`item-${i}`}>
                  <AccordionTrigger className="text-left text-sm sm:text-base">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>

      <footer id="local" className="scroll-mt-24 border-t border-border bg-[#0b0b0b] py-14 text-white">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 px-6 sm:grid-cols-2">
          <div>
            <span className="flex items-center gap-2 font-display text-base font-bold">
              <Flame className="h-4 w-4 text-primary" /> Sua Logo Aqui!
            </span>
            <p className="mt-4 flex items-start gap-2 text-sm text-white/60">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              Av. das Palmeiras, 812 — Jardim das Flores
            </p>
            <p className="mt-2 text-sm text-white/60">Ter a Dom, 18h às 23h30</p>
          </div>
          <div className="sm:text-right">
            <Button variant="hero" size="lg" className="rounded-full" asChild>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon className="h-4 w-4" /> Chamar no WhatsApp
              </a>
            </Button>
            <p className="mt-4 text-xs text-white/40">
              © {new Date().getFullYear()} {businessName || "Forno&Fogo Pizzaria"}. Todos os
              direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/5511999999999"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Pedir pelo WhatsApp"
        className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-gradient-accent text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
      >
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-primary/50" />
        <WhatsAppIcon className="h-6 w-6" />
      </a>
    </div>
  );
}
