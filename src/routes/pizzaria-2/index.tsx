import type { ComponentType } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Circle, Flame, Leaf, MapPin, Truck, Wheat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { CategorySaboresSection } from "@/components/site/pizzaria2/CategorySaboresSection";
import { useGoToCardapio } from "@/lib/pizzaria2/go-to-cardapio";
import { cn } from "@/lib/utils";
import heroPizzaPhoto from "@/assets/fotos de pizza/pizza-hero.jpg";

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
const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  "Av. das Palmeiras, 812 - Jardim das Flores",
)}`;

const infoBlocks: {
  icon: ComponentType<{ className?: string }>;
  tone: "olive" | "tomato";
  title: string;
  detail: string[];
  badge?: string;
  action?: { label: string; href: string };
}[] = [
  {
    icon: Circle,
    tone: "olive",
    title: "Aberto agora",
    detail: ["Fecha às 23:30"],
    badge: "Aberto",
  },
  {
    icon: Truck,
    tone: "tomato",
    title: "Entrega em até 40 min",
    detail: ["Taxa a partir de R$ 6,00"],
  },
  {
    icon: MapPin,
    tone: "tomato",
    title: "Endereço",
    detail: ["Av. das Palmeiras, 812 —", "Jardim das Flores"],
    action: { label: "Ver no mapa →", href: mapsHref },
  },
  {
    icon: WhatsAppIcon,
    tone: "tomato",
    title: "Dúvidas ou pedidos?",
    detail: ["Fale com a gente"],
    action: { label: "Chamar no WhatsApp →", href: whatsappHref },
  },
];

const careItems = [
  { icon: Leaf, label: "Ingredientes selecionados" },
  { icon: Wheat, label: "Massa artesanal (fermentação natural)" },
  { icon: Flame, label: "Forno à lenha (sabor único)" },
  { icon: Truck, label: "Entrega rápida e segura" },
];

function PizzariaInicio() {
  const goToCardapio = useGoToCardapio();

  return (
    <main>
      <section className="relative flex flex-col overflow-hidden min-h-[calc(100vh-61px)] min-h-[calc(100dvh-61px)]">
        {/* Text + photo row — grows to fill the hero, but never shrinks below its own content,
            so the info card below can never climb up and overlap it. */}
        <div className="flex flex-1 flex-col md:grid md:grid-cols-2 md:grid-rows-[1fr]">
          {/* Text panel — off-white background, own column, never overlapped by the photo. */}
          {/* Left padding mirrors the header's max-w-[1200px] container so the
              headline/button align with the logo at any viewport width, not
              just at the breakpoints a fixed px-* scale would hit. */}
          <div className="relative z-10 order-2 flex items-start bg-mozzarella px-4 pt-10 pb-8 sm:px-[max(1.5rem,calc((100vw-1200px)/2+1.5rem))] sm:pt-12 md:order-1 md:pt-20 lg:pt-24">
            <Reveal variant="up" className="max-w-xl">
              <h1 className="font-display text-4xl font-extrabold leading-[1.1] sm:text-5xl">
                <span className="text-charcoal">A pizza que você estava</span>{" "}
                <span className="text-tomato">procurando.</span>
              </h1>
              <p className="mt-5 max-w-md text-base leading-relaxed text-charcoal/60">
                Massa fermentada por 48h, ingredientes selecionados todo dia e entrega rápida
                direto na sua casa.
              </p>
              <div className="relative mt-8 inline-flex w-fit">
                <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-tomato/50" />
                <Button
                  size="xl"
                  onClick={goToCardapio}
                  className="rounded-full bg-tomato px-10 text-lg font-semibold text-mozzarella shadow-none hover:bg-tomato/90"
                >
                  Ver cardápio →
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Photo — always on the right from md up, full-width above the text on small screens. */}
          <div className="relative order-1 h-72 sm:h-96 md:order-2 md:h-auto">
            <Reveal variant="scale" className="h-full w-full">
              <img
                src={heroPizzaPhoto}
                alt="Pizza de pepperoni com manjericão fresco"
                className="h-full w-full object-cover"
              />
            </Reveal>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-mozzarella to-transparent sm:w-16 md:w-20 lg:w-24" />
          </div>
        </div>

        {/* Info card — always follows the row above in normal flow, so it can never overlap
            the headline or the button, no matter the viewport height or text length. */}
        <div className="relative z-20 bg-mozzarella px-4 pb-10 pt-6 sm:px-6 sm:pb-12 sm:pt-8">
          <Reveal
            variant="up"
            className="mx-auto grid max-w-[1200px] grid-cols-1 divide-y divide-charcoal/8 overflow-hidden rounded-[28px] border border-charcoal/8 bg-mozzarella shadow-[0_20px_50px_-35px_rgba(23,23,23,0.4)] sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4"
          >
            {infoBlocks.map((block) => (
              <div key={block.title} className="flex flex-col gap-3 p-6 sm:p-7">
                <div className="flex items-center gap-3">
                  <span
                    className={cn(
                      "grid h-11 w-11 shrink-0 place-items-center rounded-full",
                      block.tone === "olive" ? "bg-olive/10 text-olive" : "bg-tomato/10 text-tomato",
                    )}
                  >
                    <block.icon className="h-5 w-5" />
                  </span>
                  <span className="font-display text-sm font-bold text-charcoal">
                    {block.title}
                  </span>
                </div>

                <div className="flex-1">
                  {block.detail.map((line) => (
                    <p key={line} className="text-xs leading-relaxed text-charcoal/55">
                      {line}
                    </p>
                  ))}
                </div>

                {block.badge && (
                  <span className="inline-flex w-fit items-center rounded-full bg-olive/10 px-2.5 py-1 text-[11px] font-semibold text-olive">
                    {block.badge}
                  </span>
                )}

                {block.action && (
                  <a
                    href={block.action.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-fit items-center text-xs font-semibold text-tomato hover:underline"
                  >
                    {block.action.label}
                  </a>
                )}
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section id="cardapio" className="scroll-mt-20 mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20">
        <CategorySaboresSection defaultCategorySlug="tradicionais" />
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
