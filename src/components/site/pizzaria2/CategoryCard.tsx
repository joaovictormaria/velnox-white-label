import { Link } from "@tanstack/react-router";
import type { Category } from "@/lib/pizzaria2/menu";

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      to="/pizzaria-2/cardapio/$categoria"
      params={{ categoria: category.slug }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-charcoal/8 bg-mozzarella shadow-[0_8px_24px_-16px_rgba(23,23,23,0.35)] transition-transform duration-300 hover:-translate-y-1"
    >
      {category.image ? (
        <div className="h-40 w-full overflow-hidden sm:h-48">
          <img
            src={category.image}
            alt={category.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      ) : (
        <div className="grid h-40 w-full place-items-center bg-tomato/8 sm:h-48">
          {category.icon && <category.icon className="h-11 w-11 text-tomato" />}
        </div>
      )}
      <div className="flex flex-1 items-center justify-center px-3 py-4 text-center">
        <span className="font-display text-base font-bold text-charcoal">{category.name}</span>
      </div>
    </Link>
  );
}
