import type { MouseEvent } from "react";
import { Link } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { MenuThumb } from "./MenuThumb";
import { PriceTag } from "./PriceTag";
import type { Product } from "@/lib/pizzaria2/menu";

export function ProductRow({
  product,
  linkToCustomize,
  onQuickAdd,
}: {
  product: Product;
  linkToCustomize: boolean;
  onQuickAdd: () => void;
}) {
  const content = (
    <>
      <MenuThumb
        image={product.image}
        icon={product.icon}
        alt={product.name}
        className="h-14 w-14 shrink-0 border border-charcoal/8"
        iconClassName="h-6 w-6"
      />
      <span className="min-w-0 flex-1">
        <span className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
          <span className="font-display text-sm font-bold text-charcoal">{product.name}</span>
          {product.tag && (
            <Badge className="rounded-full border-none bg-olive/15 px-2 py-0 text-[10px] font-bold text-olive">
              {product.tag}
            </Badge>
          )}
        </span>
        <span className="mt-0.5 line-clamp-2 block text-xs text-charcoal/50">{product.desc}</span>
        <PriceTag value={product.price} className="mt-1 block text-sm" />
      </span>
    </>
  );

  function handleQuickAdd(e: MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    onQuickAdd();
  }

  return (
    <div className="flex items-center gap-3 rounded-2xl border border-charcoal/8 bg-mozzarella p-3 transition-colors hover:border-tomato/30">
      {linkToCustomize ? (
        <Link
          to="/pizzaria-2/produto/$slug"
          params={{ slug: product.slug }}
          className="flex min-w-0 flex-1 items-center gap-3 text-left"
        >
          {content}
        </Link>
      ) : (
        <button
          type="button"
          onClick={handleQuickAdd}
          className="flex min-w-0 flex-1 items-center gap-3 text-left"
        >
          {content}
        </button>
      )}

      <button
        type="button"
        onClick={handleQuickAdd}
        aria-label={`Adicionar ${product.name}`}
        className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-tomato text-tomato transition-colors hover:bg-tomato hover:text-mozzarella"
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  );
}
