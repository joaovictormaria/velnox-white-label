import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu as MenuIcon, Pizza, ShoppingCart, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCart } from "@/lib/pizzaria2/cart";
import { useGoToCardapio } from "@/lib/pizzaria2/go-to-cardapio";

export function Header() {
  const [open, setOpen] = useState(false);
  const { itemCount } = useCart();
  const goToCardapio = useGoToCardapio();

  return (
    <header className="sticky top-0 z-50 border-b border-charcoal/8 bg-mozzarella/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link to="/pizzaria-2" className="flex items-center gap-2">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-tomato text-mozzarella">
            <Pizza className="h-4.5 w-4.5" />
          </span>
          <span className="font-display text-lg font-bold text-charcoal">Bella Pizza</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link
            to="/pizzaria-2"
            activeOptions={{ exact: true }}
            className="text-sm font-medium text-charcoal/70 transition-colors hover:text-charcoal"
            activeProps={{ className: "!text-tomato" }}
          >
            Início
          </Link>
          <a
            href="/pizzaria-2#cardapio"
            onClick={goToCardapio}
            className="text-sm font-medium text-charcoal/70 transition-colors hover:text-charcoal"
          >
            Cardápio
          </a>
          <span className="cursor-default text-sm font-medium text-charcoal/40">
            Acompanhar pedido
          </span>
          <span className="cursor-default text-sm font-medium text-charcoal/40">Contato</span>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            className="hidden rounded-full border border-charcoal/15 px-4 py-1.5 text-sm font-semibold text-charcoal transition-colors hover:border-charcoal/30 sm:inline-flex"
          >
            Entrar
          </button>

          <Link
            to="/pizzaria-2/carrinho"
            aria-label="Ver carrinho"
            className="relative grid h-9 w-9 place-items-center rounded-full text-charcoal transition-colors hover:bg-charcoal/5"
          >
            <ShoppingCart className="h-5 w-5" />
            {itemCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 grid h-4.5 min-w-4.5 place-items-center rounded-full bg-tomato px-1 text-[10px] font-bold text-mozzarella">
                {itemCount}
              </span>
            )}
          </Link>

          <button
            type="button"
            aria-label="Abrir menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-full text-charcoal transition-colors hover:bg-charcoal/5 md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-charcoal/8 bg-mozzarella px-4 pb-4 pt-2 sm:px-6 md:hidden">
          <ul className="flex flex-col">
            <li>
              <Link
                to="/pizzaria-2"
                activeOptions={{ exact: true }}
                onClick={() => setOpen(false)}
                className={cn("block border-b border-charcoal/8 py-3 text-sm font-medium text-charcoal/70")}
                activeProps={{ className: "!text-tomato" }}
              >
                Início
              </Link>
            </li>
            <li>
              <a
                href="/pizzaria-2#cardapio"
                onClick={(e) => {
                  setOpen(false);
                  goToCardapio(e);
                }}
                className="block border-b border-charcoal/8 py-3 text-sm font-medium text-charcoal/70"
              >
                Cardápio
              </a>
            </li>
            <li className="border-b border-charcoal/8 py-3 text-sm font-medium text-charcoal/40">
              Acompanhar pedido
            </li>
            <li className="py-3 text-sm font-medium text-charcoal/40">Contato</li>
          </ul>
        </nav>
      )}
    </header>
  );
}
