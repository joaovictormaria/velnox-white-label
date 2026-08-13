import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, Flame, Leaf, MapPin, Truck, Wheat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import heroPizzaPhoto from "@/assets/fotos de pizza/pngtree-taking-slice-picture-of-prepared-delicious-pizza-with-sausage-rings-and-image_15902897.jpg";

const title = "Bella Pizza — A pizza que você estava procurando";
const description =
  "Cardápio completo, entrega rápida e pedido online. Pizzas tradicionais, especiais e doces feitas com carinho.";

export const Route = createFileRoute("/pizzaria-2/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: PizzariaInicio,
});

const whatsappHref = "https://wa.me/5511999999999";

const infoBlocks: {
  icon: typeof Truck | null;
  dot?: boolean;
  title: string;
  detail: string;
}[] = [
  {
    icon: null,
    dot: true,
    title: "Aberto agora",
    detail: "Fecha às 23:30",
  },
  {
    icon: Truck,
    title: "Entrega em até 40 min",
    detail: "Taxa a partir de R$ 6,00",
  },
  {
    icon: MapPin,
    title: "Endereço",
    detail: "Av. das Palmeiras, 812 — Jardim das Flores",
  },
];

const careItems = [
  { icon: Leaf, label: "Ingredientes selecionados" },
  { icon: Wheat, label: "Massa artesanal (fermentação natural)" },
  { icon: Flame, label: "Forno à lenha (sabor único)" },
  { icon: Truck, label: "Entrega rápida e segura" },
];

function PizzariaInicio() {
  return (
    <main>
      <section className="mx-auto max-w-[1200px] px-4 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-16">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal variant="up">
            <h1 className="font-display text-4xl font-extrabold leading-[1.1] sm:text-5xl">
              <span className="text-charcoal">A pizza que você estava</span>{" "}
              <span className="text-tomato">procurando.</span>
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-charcoal/60">
              Massa fermentada por 48h, ingredientes selecionados todo dia e entrega rápida direto
              na sua casa.
            </p>
            <div className="mt-8">
              <Button
                size="lg"
                className="rounded-full bg-tomato px-8 text-base font-semibold text-mozzarella shadow-none hover:bg-tomato/90"
                asChild
              >
                <Link to="/pizzaria-2/cardapio">Ver cardápio →</Link>
              </Button>
            </div>
          </Reveal>

          <Reveal variant="scale" delay={100}>
            <div className="overflow-hidden rounded-[28px] border border-charcoal/8 shadow-[0_30px_70px_-40px_rgba(23,23,23,0.45)]">
              <img
                src={heroPizzaPhoto}
                alt="Pizza saindo do forno"
                className="aspect-4/5 w-full object-cover sm:aspect-square lg:aspect-4/5"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <Reveal
          variant="up"
          className="grid grid-cols-1 divide-y divide-charcoal/8 overflow-hidden rounded-[28px] border border-charcoal/8 bg-mozzarella shadow-[0_20px_50px_-35px_rgba(23,23,23,0.4)] sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4"
        >
          {infoBlocks.map((block) => (
            <div key={block.title} className="flex flex-col gap-1.5 p-6">
              <div className="flex items-center gap-2">
                {block.dot ? (
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-olive/60" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-olive" />
                  </span>
                ) : (
                  block.icon && <block.icon className="h-4 w-4 text-tomato" />
                )}
                <span className="text-sm font-bold text-charcoal">{block.title}</span>
              </div>
              <p className="text-xs leading-relaxed text-charcoal/55">{block.detail}</p>
            </div>
          ))}

          <div className="flex flex-col gap-1.5 p-6">
            <div className="flex items-center gap-2">
              <WhatsAppIcon className="h-4 w-4 text-tomato" />
              <span className="text-sm font-bold text-charcoal">Dúvidas ou pedidos?</span>
            </div>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-1.5 text-xs font-semibold text-tomato hover:underline"
            >
              <WhatsAppIcon className="h-3.5 w-3.5" /> Chamar no WhatsApp
            </a>
          </div>
        </Reveal>
      </section>

      <section className="relative overflow-hidden py-16 sm:py-24">
        <div className="pointer-events-none absolute -left-16 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-tomato/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 top-1/3 h-56 w-56 rounded-full bg-olive/10 blur-3xl" />
        <Leaf className="pointer-events-none absolute left-6 top-10 h-10 w-10 -rotate-12 text-olive/15 sm:left-16" />
        <Wheat className="pointer-events-none absolute bottom-10 left-10 h-12 w-12 rotate-12 text-tomato/10 sm:left-24" />
        <Flame className="pointer-events-none absolute right-8 top-16 h-9 w-9 rotate-6 text-tomato/15 sm:right-20" />
        <Leaf className="pointer-events-none absolute bottom-16 right-6 h-11 w-11 rotate-45 text-olive/10 sm:right-16" />

        <div className="relative mx-auto max-w-[1200px] px-4 text-center sm:px-6">
          <Reveal variant="up">
            <h2 className="font-display text-2xl font-extrabold sm:text-3xl">
              Feita com amor, entregue com carinho ❤️
            </h2>
          </Reveal>

          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {careItems.map((item, i) => (
              <Reveal
                key={item.label}
                variant="up"
                delay={i * 80}
                className="flex flex-col items-center gap-3 text-center"
              >
                <span className="grid h-12 w-12 place-items-center rounded-full bg-tomato/10 text-tomato">
                  <item.icon className="h-5 w-5" />
                </span>
                <span className="text-xs font-medium text-charcoal/70 sm:text-sm">
                  {item.label}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
