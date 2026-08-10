import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";

const title = "velnox.ia — Sites com IA para restaurantes venderem mais";
const description =
  "A velnox.ia cria sites profissionais para restaurantes com Inteligência Artificial: mais pedidos no WhatsApp, delivery integrado e destaque no Google.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
}
