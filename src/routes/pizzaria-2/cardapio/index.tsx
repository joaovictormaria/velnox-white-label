import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Pizza } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { CategoryCard } from "@/components/site/pizzaria2/CategoryCard";
import { categories } from "@/lib/pizzaria2/menu";

export const Route = createFileRoute("/pizzaria-2/cardapio/")({
  component: PizzariaCategorias,
});

const rowOne = categories.slice(0, 3);
const rowTwo = categories.slice(3);

function PizzariaCategorias() {
  const [dismissedUpsell, setDismissedUpsell] = useState(false);

  return (
    <main className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6 sm:py-16">
      <Reveal variant="up" className="text-center">
        <h1 className="font-display text-3xl font-extrabold text-charcoal sm:text-4xl">
          Nosso Cardápio
        </h1>
        <p className="mt-2 text-sm text-charcoal/55 sm:text-base">
          Escolha uma categoria para ver nossos sabores
        </p>
      </Reveal>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-6 sm:gap-5">
        {rowOne.map((category, i) => (
          <Reveal key={category.slug} variant="up" delay={i * 80} className="sm:col-span-2">
            <CategoryCard category={category} />
          </Reveal>
        ))}
        {rowTwo.map((category, i) => (
          <Reveal
            key={category.slug}
            variant="up"
            delay={(rowOne.length + i) * 80}
            className="sm:col-span-3"
          >
            <CategoryCard category={category} />
          </Reveal>
        ))}
      </div>

      {!dismissedUpsell && (
        <Reveal
          variant="scale"
          delay={200}
          className="mt-12 flex flex-col items-center justify-between gap-4 rounded-3xl border border-tomato/20 bg-tomato/8 p-6 text-center sm:flex-row sm:text-left"
        >
          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-tomato text-mozzarella">
              <Pizza className="h-5 w-5" />
            </span>
            <p className="font-display text-base font-bold text-charcoal">
              Que tal uma pizza doce para fechar o pedido?
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <Button
              className="rounded-full bg-tomato text-mozzarella shadow-none hover:bg-tomato/90"
              asChild
            >
              <Link to="/pizzaria-2/cardapio/$categoria" params={{ categoria: "doces" }}>
                Ver opções
              </Link>
            </Button>
            <Button
              variant="ghost"
              className="rounded-full text-charcoal/60 hover:bg-charcoal/5 hover:text-charcoal"
              onClick={() => setDismissedUpsell(true)}
            >
              Agora não
            </Button>
          </div>
        </Reveal>
      )}
    </main>
  );
}
