import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { CategoryTabs } from "./CategoryTabs";
import { ProductRow } from "./ProductRow";
import { useCart } from "@/lib/pizzaria2/cart";
import { categoryBySlug, productsByCategory } from "@/lib/pizzaria2/menu";

export const categoryDescriptions: Record<string, string> = {
  tradicionais: "Os clássicos que nunca saem de moda.",
  especiais: "Combinações autorais para quem quer sair do óbvio.",
  doces: "Pra fechar o pedido com um toque doce.",
  bebidas: "Pra acompanhar sua pizza geladinha.",
  acompanhamentos: "Aquele extra pra completar o pedido.",
};

export function CategorySaboresSection({
  categorySlug,
  headingTag: HeadingTag = "h2",
  cta,
}: {
  categorySlug: string;
  headingTag?: "h1" | "h2";
  cta?: { label: string; to: string };
}) {
  const { addLine } = useCart();
  const category = categoryBySlug(categorySlug);
  const items = productsByCategory(categorySlug);

  if (!category) return null;

  return (
    <>
      <CategoryTabs activeSlug={category.slug} />

      <Reveal variant="up" className="mt-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <HeadingTag className="font-display text-2xl font-extrabold text-charcoal sm:text-3xl">
            {category.name}
          </HeadingTag>
          <p className="mt-1.5 text-sm text-charcoal/55">{categoryDescriptions[category.slug]}</p>
        </div>
        {cta && (
          <Link to={cta.to} className="text-sm font-semibold text-tomato hover:underline">
            {cta.label}
          </Link>
        )}
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
