import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { categories } from "@/lib/pizzaria2/menu";

export function CategoryTabs({ activeSlug }: { activeSlug: string }) {
  return (
    <div className="scrollbar-hide -mx-4 flex gap-3 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0 md:grid md:grid-cols-5 md:gap-4 md:overflow-visible md:pb-0">
      {categories.map((cat) => {
        const Icon = cat.icon;
        const active = cat.slug === activeSlug;
        return (
          <Link
            key={cat.slug}
            to="/pizzaria-2/cardapio/$categoria"
            params={{ categoria: cat.slug }}
            className={cn(
              "flex shrink-0 items-center justify-center gap-2.5 whitespace-nowrap rounded-2xl border px-6 py-3.5 text-sm font-semibold transition-colors md:px-4",
              active
                ? "border-tomato bg-tomato text-mozzarella shadow-[0_12px_30px_-16px_rgba(233,75,44,0.65)]"
                : "border-charcoal/10 bg-mozzarella text-charcoal hover:border-tomato/30",
            )}
          >
            {Icon && (
              <Icon className={cn("h-5 w-5 shrink-0", active ? "text-mozzarella" : "text-tomato")} />
            )}
            {cat.shortName}
          </Link>
        );
      })}
    </div>
  );
}
