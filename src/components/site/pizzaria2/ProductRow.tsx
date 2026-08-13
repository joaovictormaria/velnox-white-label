import type { MouseEvent } from "react";
import { Link } from "@tanstack/react-router";
import { Flame, Plus } from "lucide-react";
import { PriceTag } from "./PriceTag";
import type { Product } from "@/lib/pizzaria2/menu";

const ctaClassName =
  "inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-full bg-tomato px-6 py-3 text-sm font-semibold text-mozzarella transition-colors hover:bg-tomato/90 sm:w-auto";

export function ProductRow({
  product,
  linkToCustomize,
  onQuickAdd,
}: {
  product: Product;
  linkToCustomize: boolean;
  onQuickAdd: () => void;
}) {
  const Icon = product.icon;

  const media = (
    <div className="relative h-48 w-full shrink-0 sm:h-44 sm:w-44 md:h-48 md:w-52">
      {product.image ? (
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="grid h-full w-full place-items-center bg-tomato/8">
          {Icon && <Icon className="h-10 w-10 text-tomato" />}
        </div>
      )}
      {product.tag && (
        <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-tomato px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-mozzarella shadow-[0_6px_16px_-6px_rgba(23,23,23,0.5)]">
          {product.tag === "Mais pedida" && <Flame className="h-3 w-3" />}
          {product.tag}
        </span>
      )}
    </div>
  );

  const info = (
    <div className="flex min-w-0 flex-1 flex-col justify-center p-4 sm:p-5">
      <h3 className="font-display text-lg font-bold text-charcoal sm:text-xl">{product.name}</h3>
      <p className="mt-1 line-clamp-2 text-sm text-charcoal/55">{product.desc}</p>
      <PriceTag value={product.price} className="mt-2 block text-xl sm:text-2xl" />
    </div>
  );

  function handleQuickAdd(e: MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    onQuickAdd();
  }

  const mediaAndInfoClassName = "flex flex-col text-left sm:flex-1 sm:flex-row sm:items-stretch";

  return (
    <div className="flex flex-col overflow-hidden rounded-[22px] border border-charcoal/8 bg-mozzarella shadow-[0_10px_30px_-22px_rgba(23,23,23,0.4)] transition-colors hover:border-tomato/25 sm:flex-row sm:items-stretch">
      {linkToCustomize ? (
        <Link
          to="/pizzaria-2/produto/$slug"
          params={{ slug: product.slug }}
          className={mediaAndInfoClassName}
        >
          {media}
          {info}
        </Link>
      ) : (
        <button type="button" onClick={handleQuickAdd} className={mediaAndInfoClassName}>
          {media}
          {info}
        </button>
      )}

      {/* Plain button today; swapping for a QuantityStepper (− 1 +) once the item is
          in the cart is a drop-in change since this is the only place the CTA renders. */}
      <div className="flex items-center p-4 pt-0 sm:shrink-0 sm:p-5 sm:pl-0">
        {linkToCustomize ? (
          <Link to="/pizzaria-2/produto/$slug" params={{ slug: product.slug }} className={ctaClassName}>
            <Plus className="h-4 w-4" /> Adicionar
          </Link>
        ) : (
          <button type="button" onClick={handleQuickAdd} className={ctaClassName}>
            <Plus className="h-4 w-4" /> Adicionar
          </button>
        )}
      </div>
    </div>
  );
}
