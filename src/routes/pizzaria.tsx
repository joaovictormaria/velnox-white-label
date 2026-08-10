import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Clock,
  Flame,
  MapPin,
  Menu as MenuIcon,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
  X,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { stockImageUrl } from "@/lib/stock-image";

const title = "Bella Napoli Pizzaria — Forno a lenha, sabor de verdade";
const description =
  "Pizzas artesanais no forno a lenha, ingredientes frescos e entrega rápida. Peça pelo WhatsApp.";

export const Route = createFileRoute("/pizzaria")({
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
  component: PizzariaPage,
});

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Cardápio", href: "#cardapio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

const benefits = [
  { icon: Truck, title: "Entrega rápida", desc: "Em até 40 min na sua casa" },
  { icon: Flame, title: "Forno a lenha", desc: "Massa fermentada 48h" },
  { icon: ShieldCheck, title: "Pagamento seguro", desc: "Pix, cartão ou dinheiro" },
];

const menu = [
  {
    name: "Margherita",
    desc: "Molho de tomate, mussarela de búfala, manjericão fresco e azeite.",
    price: "R$ 49,90",
    keyword: "margherita pizza",
  },
  {
    name: "Calabresa",
    desc: "Calabresa artesanal fatiada, cebola roxa e orégano.",
    price: "R$ 46,90",
    keyword: "calabresa pizza",
  },
  {
    name: "Quatro Queijos",
    desc: "Mussarela, provolone, parmesão e gorgonzola.",
    price: "R$ 54,90",
    keyword: "cheese pizza",
  },
  {
    name: "Pepperoni",
    desc: "Pepperoni importado, mussarela e molho especial da casa.",
    price: "R$ 52,90",
    keyword: "pepperoni pizza",
  },
  {
    name: "Portuguesa",
    desc: "Presunto, ovos, cebola, azeitona e ervilha.",
    price: "R$ 48,90",
    keyword: "portuguese pizza",
  },
  {
    name: "Frango com Catupiry",
    desc: "Frango desfiado, catupiry original e milho.",
    price: "R$ 50,90",
    keyword: "chicken pizza",
  },
];

const testimonials = [
  {
    name: "Marina Alves",
    text: "Melhor pizza da região, massa leve e crocante. Chegou quentinha em 30 minutos.",
  },
  {
    name: "Rafael Souza",
    text: "Peço toda sexta pelo WhatsApp, atendimento rápido e a Calabresa é imbatível.",
  },
  {
    name: "Camila Nunes",
    text: "Ingredientes de qualidade, dá pra sentir a diferença do forno a lenha.",
  },
];

function PizzariaPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-[1200px] 2xl:max-w-340 items-center justify-between gap-4 px-6 py-4">
          <a href="#inicio" className="flex min-w-0 items-center gap-2.5">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-accent text-primary-foreground">
              <Flame className="h-4.5 w-4.5" />
            </span>
            <span className="truncate font-display text-base font-bold">Bella Napoli</span>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="hero" size="sm" className="hidden rounded-sm sm:inline-flex" asChild>
              <a href="#contato">
                <WhatsAppIcon className="h-3.5 w-3.5" /> Pedir agora
              </a>
            </Button>
            <Button
              variant="glass"
              size="icon"
              className="rounded-lg md:hidden"
              aria-label="Abrir menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {open && (
          <nav className="border-t border-border bg-background px-6 pb-5 pt-2 md:hidden">
            <ul className="flex flex-col">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-border/60 py-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <Button variant="hero" size="pill" className="mt-4 w-full rounded-sm" asChild>
              <a href="#contato">
                <WhatsAppIcon className="h-4 w-4" /> Pedir pelo WhatsApp
              </a>
            </Button>
          </nav>
        )}
      </header>

      <main>
        <section id="inicio" className="relative overflow-hidden py-20 sm:py-28">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(160deg,rgba(255,50,50,0.14),transparent_55%)]" />
          <div className="relative mx-auto max-w-[1200px] 2xl:max-w-340 px-6 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs text-primary">
              <Sparkles className="h-3.5 w-3.5" /> Forno a lenha desde 2010
            </span>
            <h1 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl 2xl:text-6xl">
              Pizza artesanal, do jeito que a Itália ensinou
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Massa de fermentação lenta, ingredientes frescos e forno a lenha. Peça pelo
              WhatsApp e receba quentinha em casa.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button variant="hero" size="xl" className="rounded-sm" asChild>
                <a href="#contato">
                  <WhatsAppIcon className="h-4.5 w-4.5" /> Pedir pelo WhatsApp
                </a>
              </Button>
              <Button variant="glass" size="xl" className="rounded-sm" asChild>
                <a href="#cardapio">Ver cardápio</a>
              </Button>
            </div>
            <div className="mx-auto mt-12 aspect-video max-w-3xl overflow-hidden rounded-[28px] border-2 border-primary shadow-glow">
              <img
                src={stockImageUrl("wood fired pizza", 1200, 675)}
                alt="Pizza artesanal saindo do forno a lenha"
                loading="eager"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="border-t border-border py-12">
          <div className="mx-auto grid max-w-[1200px] 2xl:max-w-340 grid-cols-1 gap-6 px-6 sm:grid-cols-3">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="flex items-center gap-3 rounded-2xl border border-border bg-card/60 p-5"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <b.icon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm font-semibold">{b.title}</span>
                  <span className="block text-xs text-muted-foreground">{b.desc}</span>
                </span>
              </div>
            ))}
          </div>
        </section>

        <section id="cardapio" className="border-t border-border py-16 sm:py-20">
          <div className="mx-auto max-w-[1200px] 2xl:max-w-340 px-6">
            <div className="text-center">
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
                Cardápio
              </span>
              <h2 className="mt-3 font-display text-2xl font-extrabold sm:text-3xl">
                Nossas pizzas mais pedidas
              </h2>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {menu.map((item) => (
                <Card
                  key={item.name}
                  className="overflow-hidden rounded-2xl border-border bg-card/60 py-0"
                >
                  <div className="aspect-4/3 overflow-hidden">
                    <img
                      src={stockImageUrl(item.keyword, 600, 450)}
                      alt={item.name}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-base font-bold">{item.name}</h3>
                      <span className="shrink-0 text-sm font-semibold text-primary">
                        {item.price}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.desc}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="sobre" className="border-t border-border py-16 sm:py-20">
          <div className="mx-auto max-w-[1200px] 2xl:max-w-340 px-6">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
              <div>
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
                  Nossa história
                </span>
                <h2 className="mt-3 font-display text-2xl font-extrabold leading-tight sm:text-3xl">
                  Tradição familiar há mais de 15 anos
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  A Bella Napoli nasceu de uma receita de família trazida da Itália. Usamos
                  farinha selecionada, molho de tomate fresco e queijos de primeira qualidade,
                  tudo assado no forno a lenha para garantir aquele sabor autêntico.
                </p>
                <Button variant="hero" size="lg" className="mt-6 rounded-sm" asChild>
                  <a href="#contato">
                    Fazer pedido <ArrowRight />
                  </a>
                </Button>
              </div>
              <div className="aspect-4/3 overflow-hidden rounded-[24px] border border-border shadow-soft">
                <img
                  src={stockImageUrl("pizzeria interior", 900, 675)}
                  alt="Interior da pizzaria Bella Napoli"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="depoimentos" className="border-t border-border py-16 sm:py-20">
          <div className="mx-auto max-w-[1200px] 2xl:max-w-340 px-6">
            <div className="text-center">
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
                Depoimentos
              </span>
              <h2 className="mt-3 font-display text-2xl font-extrabold sm:text-3xl">
                Quem prova, vira cliente
              </h2>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {testimonials.map((t) => (
                <Card key={t.name} className="rounded-2xl border-border bg-card/60">
                  <CardContent className="p-6">
                    <div className="flex gap-1 text-primary">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      "{t.text}"
                    </p>
                    <p className="mt-4 text-sm font-semibold">{t.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="border-t border-border bg-primary/8 py-16 sm:py-20">
          <div className="mx-auto max-w-[1200px] 2xl:max-w-340 px-6">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
              <div className="text-center lg:text-left">
                <h2 className="font-display text-2xl font-extrabold sm:text-3xl">
                  Bora pedir a sua pizza?
                </h2>
                <p className="mt-3 text-sm text-muted-foreground sm:text-base">
                  Chama no WhatsApp e receba quentinha em casa.
                </p>
                <Button variant="hero" size="xl" className="mt-6 rounded-sm" asChild>
                  <a
                    href="https://wa.me/5511999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsAppIcon className="h-4.5 w-4.5" /> Chamar no WhatsApp
                  </a>
                </Button>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex items-center gap-3 rounded-2xl border border-border bg-card/60 p-5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                    <MapPin className="h-4.5 w-4.5" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold">Endereço</span>
                    <span className="block text-xs text-muted-foreground">
                      Rua das Oliveiras, 245 — Centro
                    </span>
                  </span>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-border bg-card/60 p-5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                    <Clock className="h-4.5 w-4.5" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold">Horário</span>
                    <span className="block text-xs text-muted-foreground">
                      Ter a Dom, 18h às 23h30
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-8">
        <div className="mx-auto flex max-w-[1200px] 2xl:max-w-340 flex-col items-center justify-between gap-3 px-6 text-center sm:flex-row sm:text-left">
          <span className="flex items-center gap-2 text-sm font-semibold">
            <Flame className="h-4 w-4 text-primary" /> Bella Napoli Pizzaria
          </span>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Bella Napoli. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
