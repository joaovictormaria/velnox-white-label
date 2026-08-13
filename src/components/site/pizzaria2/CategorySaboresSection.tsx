import { useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { CategoryTabs } from "./CategoryTabs";
import { ProductRow } from "./ProductRow";
import { useCart } from "@/lib/pizzaria2/cart";
import { categoryBySlug, productsByCategory, type CategorySlug } from "@/lib/pizzaria2/menu";

export const categoryDescriptions: Record<string, string> = {
  tradicionais: "Os clássicos que nunca saem de moda.",
  especiais: "Combinações autorais para quem quer sair do óbvio.",
  doces: "Pra fechar o pedido com um toque doce.",
  bebidas: "Pra acompanhar sua pizza geladinha.",
  acompanhamentos: "Aquele extra pra completar o pedido.",
};

/**
 * The full, interactive cardápio — category filters + product list — lives
 * entirely inside this component so it can be embedded once as a Home
 * section (#cardapio). Switching categories is local state, not routing.
 */
export function CategorySaboresSection({
  defaultCategorySlug = "tradicionais",
}: {
  defaultCategorySlug?: CategorySlug;
}) {
  const { addLine } = useCart();
  const [activeSlug, setActiveSlug] = useState<CategorySlug>(defaultCategorySlug);
  const category = categoryBySlug(activeSlug);
  const items = productsByCategory(activeSlug);

  if (!category) return null;

  return (
    <>
      <CategoryTabs activeSlug={category.slug} onSelect={setActiveSlug} />

      <Reveal variant="up" className="mt-8">
        <h2 className="font-display text-2xl font-extrabold text-charcoal sm:text-3xl">
          {category.name}
        </h2>
        <p className="mt-1.5 text-sm text-charcoal/55">{categoryDescriptions[category.slug]}</p>
      </Reveal>

      <div className="mt-6 flex flex-col gap-4 sm:gap-5">
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
    </>
  );
}
