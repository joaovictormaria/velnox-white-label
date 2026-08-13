import { createFileRoute, Outlet } from "@tanstack/react-router";
import { CartProvider } from "@/lib/pizzaria2/cart";
import { Header } from "@/components/site/pizzaria2/Header";

export const Route = createFileRoute("/pizzaria-2")({
  head: () => ({
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800;900&display=swap",
      },
    ],
  }),
  component: PizzariaLayout,
});

function PizzariaLayout() {
  return (
    <CartProvider>
      <div className="pizzaria2 min-h-screen bg-cream font-sans text-charcoal">
        <Header />
        <Outlet />
      </div>
    </CartProvider>
  );
}
