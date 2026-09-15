import { useEffect } from "react";
import { createFileRoute, notFound, Outlet } from "@tanstack/react-router";
import { CartProvider } from "@/lib/pizzaria2/cart";
import { MenuProvider } from "@/lib/pizzaria2/menu-provider";
import { StoreProvider, tituloDaVitrine } from "@/lib/pizzaria2/store-provider";
import { useLojaComDadosDoFormulario } from "@/lib/pizzaria2/onboarding";
import { brandTheme } from "@/lib/pizzaria2/brand-theme";
import { Footer } from "@/components/site/pizzaria2/Footer";
import { Header } from "@/components/site/pizzaria2/Header";
import { getStorefront } from "@/lib/pizzaria2/mock/get-store";

export const Route = createFileRoute("/$storeSlug")({
  /*
   * Origem dos dados desta etapa: mocks estáticos.
   *
   * O contrato é o mesmo que o backend real devolve, então trocar por uma
   * server function depois é mudar só esta linha. Slug desconhecido vira 404,
   * como um estabelecimento inexistente no backend.
   */
  loader: ({ params }) => {
    const data = getStorefront(params.storeSlug);
    if (!data) throw notFound();
    return data;
  },
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
  component: VitrineLayout,
});

function VitrineLayout() {
  const data = Route.useLoaderData();

  /*
   * O mock com os dados do formulário de "Criar meu site" por cima.
   *
   * É aqui que as duas origens se encontram, e só aqui: o que sai é um
   * `StorePayload` normal, então Header, hero, rodapé e checkout continuam
   * lendo de `useStore()` sem saber que existe formulário. Quem abre a vitrine
   * direto, sem passar pelo formulário, recebe o mock intocado.
   */
  const store = useLojaComDadosDoFormulario(data.store);

  /*
   * O título vem do `head()` da rota, que roda no servidor e só conhece o nome
   * mockado. Quando o formulário trocou o nome, o título precisa acompanhar —
   * é o único lugar da vitrine que não passa pelo provider.
   */
  useEffect(() => {
    if (store.storeName !== data.store.storeName) {
      document.title = tituloDaVitrine(store.storeName);
    }
  }, [store.storeName, data.store.storeName]);

  return (
    <StoreProvider payload={store}>
      <MenuProvider payload={data}>
        <CartProvider>
          {/* A cor da marca do estabelecimento sobrescreve os tokens da paleta
              apenas nesta vitrine. Fica inline porque o valor é por loja, e as
              pontas do gradiente derivam dele — uma escolha só reestiliza a
              vitrine inteira de forma consistente. */}
          <div
            className="pizzaria2 flex min-h-screen flex-col bg-cream font-sans text-charcoal"
            style={brandTheme(store) as React.CSSProperties}
          >
            <Header />
            <div className="flex-1 pt-16.75">
              <Outlet />
            </div>
            <Footer />
          </div>
        </CartProvider>
      </MenuProvider>
    </StoreProvider>
  );
}
