import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { ProductRow } from "@/components/site/pizzaria2/ProductRow";
import { useCart } from "@/lib/pizzaria2/cart";
import { categories, categoryBySlug, productsByCategory } from "@/lib/pizzaria2/menu";

export const Route = createFileRoute("/pizzaria-2/cardapio/$categoria")({
  component: PizzariaSabores,
});

const categoryDescriptions: Record<string, string> = {
  tradicionais: "Os clássicos que nunca saem de moda.",
  especiais: "Combinações autorais para quem quer sair do óbvio.",
  doces: "Pra fechar o pedido com um toque doce.",
  bebidas: "Pra acompanhar sua pizza geladinha.",
  acompanhamentos: "Aquele extra pra completar o pedido.",
};

function PizzariaSabores() {
  const { categoria } = Route.useParams();
  const { addLine } = useCart();
  const category = categoryBySlug(categoria);
  const items = productsByCategory(categoria);

  if (!category) {
    return (
      <main className="mx-auto max-w-[1200px] px-4 py-16 text-center sm:px-6">
        <p className="text-charcoal/60">Categoria não encontrada.</p>
        <Link to="/pizzaria-2/cardapio" className="mt-3 inline-block font-semibold text-tomato">
          ← Voltar para o cardápio
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6 sm:py-16">
      <div className="scrollbar-hide -mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:px-0">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            to="/pizzaria-2/cardapio/$categoria"
            params={{ categoria: cat.slug }}
            className={
              cat.slug === category.slug
                ? "shrink-0 whitespace-nowrap rounded-full bg-tomato px-4 py-2 text-sm font-semibold text-mozzarella"
                : "shrink-0 whitespace-nowrap rounded-full border border-charcoal/15 px-4 py-2 text-sm font-medium text-charcoal/60 transition-colors hover:border-charcoal/30"
            }
          >
            {cat.shortName}
          </Link>
        ))}
      </div>

      <Reveal variant="up" className="mt-8">
        <h1 className="font-display text-2xl font-extrabold text-charcoal sm:text-3xl">
          {category.name}
        </h1>
        <p className="mt-1.5 text-sm text-charcoal/55">{categoryDescriptions[category.slug]}</p>
      </Reveal>

      <div className="mt-6 flex flex-col gap-3">
        {items.map((product, i) => (
          <Reveal key={product.slug} variant="up" delay={Math.min(i * 40, 320)}>
            <ProductRow
              product={product}
              linkToCustomize={category.kind === "pizza"}
              onQuickAdd={() =>
                addLine({
                  name: product.name,
                  sizeLabel: category.kind === "pizza" ? "Média" : undefined,
                  image: product.image,
                  icon: product.icon,
                  unitPrice: product.price,
                  extras: [],
                  qty: 1,
                })
              }
            />
          </Reveal>
        ))}
      </div>
    </main>
  );
}
