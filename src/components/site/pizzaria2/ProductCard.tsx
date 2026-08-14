import type { MouseEvent } from "react";
import { Link } from "@tanstack/react-router";
import { Flame, Plus } from "lucide-react";
import { PriceTag } from "./PriceTag";
import type { Product } from "@/lib/pizzaria2/menu";

const ctaClassName =
  "inline-flex shrink-0 items-center justify-center gap-1.5 rounded-full bg-tomato px-4 py-2.5 text-sm font-semibold text-mozzarella transition-colors hover:bg-tomato/90";

export function ProductCard({
  product,
  linkToCustomize,
  onQuickAdd,
}: {
  product: Product;
  linkToCustomize: boolean;
  onQuickAdd: () => void;
}) {
  const Icon = product.icon;

  function handleQuickAdd(e: MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    onQuickAdd();
  }

  const media = (
    <div className="relative aspect-square w-full shrink-0 overflow-hidden">
      {product.image ? (
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      ) : (
        <div className="grid h-full w-full place-items-center bg-tomato/8">
          {Icon && <Icon className="h-12 w-12 text-tomato" />}
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
    <div className="flex flex-1 flex-col p-4 sm:p-5">
      <h3 className="font-display text-lg font-bold text-charcoal">{product.name}</h3>
      <p className="mt-1 line-clamp-2 text-sm text-charcoal/55">{product.desc}</p>
    </div>
  );

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-[22px] border border-charcoal/8 bg-mozzarella shadow-[0_10px_30px_-22px_rgba(23,23,23,0.4)] transition-colors hover:border-tomato/25">
      {linkToCustomize ? (
        <Link
          to="/pizzaria-2/produto/$slug"
          params={{ slug: product.slug }}
          className="flex flex-1 flex-col text-left"
        >
          {media}
          {info}
        </Link>
      ) : (
        <button type="button" onClick={handleQuickAdd} className="flex flex-1 flex-col text-left">
          {media}
          {info}
        </button>
      )}

      <div className="flex items-center justify-between gap-3 p-4 pt-0 sm:p-5 sm:pt-0">
        <PriceTag value={product.price} className="text-xl sm:text-2xl" />
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
