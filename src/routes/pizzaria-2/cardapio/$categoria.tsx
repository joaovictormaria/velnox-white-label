import { createFileRoute, Link } from "@tanstack/react-router";
import { CategorySaboresSection } from "@/components/site/pizzaria2/CategorySaboresSection";
import { categoryBySlug } from "@/lib/pizzaria2/menu";

export const Route = createFileRoute("/pizzaria-2/cardapio/$categoria")({
  component: PizzariaSabores,
});

function PizzariaSabores() {
  const { categoria } = Route.useParams();
  const category = categoryBySlug(categoria);

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
      <CategorySaboresSection categorySlug={categoria} headingTag="h1" />
    </main>
  );
}
