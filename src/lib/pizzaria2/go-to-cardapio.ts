import { useNavigate, useLocation } from "@tanstack/react-router";
import type { MouseEvent } from "react";

const HOME_PATH = "/pizzaria-2";
const CARDAPIO_SECTION_ID = "cardapio";

function scrollToCardapio() {
  document.getElementById(CARDAPIO_SECTION_ID)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

/**
 * The cardápio lives entirely on the Home page (section #cardapio), not on its
 * own route. Every "Cardápio" trigger — header nav, hero CTA, cart's "continuar
 * comprando" — needs the same behavior: scroll there directly if already on
 * Home, or navigate Home first and scroll once it has mounted.
 */
export function useGoToCardapio() {
  const navigate = useNavigate();
  const pathname = useLocation({ select: (location) => location.pathname });
  const isHome = pathname === HOME_PATH || pathname === `${HOME_PATH}/`;

  return function goToCardapio(e?: Pick<MouseEvent, "preventDefault">) {
    e?.preventDefault?.();
    if (isHome) {
      scrollToCardapio();
      return;
    }
    navigate({ to: HOME_PATH }).then(() => {
      // Wait for the Home route to mount and paint before measuring its layout.
      requestAnimationFrame(() => requestAnimationFrame(scrollToCardapio));
    });
  };
}
