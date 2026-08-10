import { Link } from "@tanstack/react-router";
import { ArrowRight, Flame, MessageCircle, Rocket, Search, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Pill } from "@/components/site/Badge";
import { BurgerSiteDesktop } from "@/components/site/BurgerSite";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { TypingText } from "@/components/site/TypingText";

const features = [
  { icon: Rocket, title: "Entrega rápida", desc: "do seu site" },
  { icon: Smartphone, title: "Design 100%", desc: "responsivo" },
  { icon: Search, title: "Otimizado para", desc: "Google" },
  { icon: WhatsAppIcon, title: "Integração com", desc: "WhatsApp" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative mt-22 flex min-h-[calc(100vh-5.5rem)] items-center overflow-hidden pb-16 lg:pb-20"
    >
      <div className="pointer-events-none absolute inset-0 [background:var(--gradient-ember)]" />
      <div className="pointer-events-none absolute -right-40 top-10 h-[520px] w-[520px] rounded-full bg-primary/12 blur-[140px]" />

      <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 items-start gap-16 px-6 lg:grid-cols-12 lg:gap-10 lg:scale-110 lg:px-10">
        <div className="lg:col-span-5">
          <Pill>
            <Flame className="h-3.5 w-3.5 text-primary" /> Mais pedidos. Mais clientes. Mais resultados.
          </Pill>

          <h1 className="mt-7 font-display text-[38px] font-extrabold leading-[1.05] sm:text-[48px] lg:text-[44px] xl:text-[48px]">
            Seu restaurante
            <br />
            <span className="whitespace-nowrap">
              merece{" "}
              <TypingText
                texts={["mais pedidos.", "mais clientes.", "mais resultados."]}
                className="text-gradient-accent"
              />
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground lg:text-lg">
            Criamos sites modernos e otimizados que transformam visitantes em clientes fiéis. Tudo
            simples, rápido e feito para vender.
          </p>

          <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {features.map((f) => (
              <li key={f.title} className="flex flex-col items-center text-center">
                <span className="shadow-glow grid h-10 w-10 place-items-center rounded-xl border border-primary/40 bg-primary/10 text-primary">
                  <f.icon className="h-4.5 w-4.5" />
                </span>
                <span className="mt-2.5 block text-xs text-muted-foreground">{f.title}</span>
                <span className="mt-0.5 block text-[11px] text-muted-foreground">{f.desc}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button variant="hero" size="lg" className="rounded-sm" asChild>
              <Link to="/criar-site" viewTransition={{ types: ["slide"] }}>
                Quero meu site <ArrowRight />
              </Link>
            </Button>
            <Button variant="glass" size="lg" className="rounded-sm" asChild>
              <a href="#contato">
                <MessageCircle /> Falar no WhatsApp
              </a>
            </Button>
          </div>
        </div>

        <div className="relative isolate lg:col-span-7 lg:-mr-24">
          <div className="pointer-events-none absolute inset-x-6 inset-y-4 -z-10 rounded-[24px] bg-primary/60 opacity-80 blur-[90px]" />
          <svg
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth={0.05}
            strokeLinecap="round"
            className="pointer-events-none absolute -left-56 top-8 -z-10 hidden h-110 w-110 -scale-x-100 lg:block"
          >
            <defs>
              <linearGradient id="hero-wave-fade" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="var(--primary)" stopOpacity="0" />
                <stop offset="25%" stopColor="var(--primary)" stopOpacity="0" />
                <stop offset="50%" stopColor="var(--primary)" stopOpacity="0.4" />
                <stop offset="75%" stopColor="var(--primary)" stopOpacity="0" />
                <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path stroke="url(#hero-wave-fade)" d="M2 6c2.5-1 5-1 7.5 0s5 1 7.5 0 5-1 7.5 0">
              <animate
                attributeName="d"
                dur="3.2s"
                begin="0s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1"
                values="M2 6c2.5-1 5-1 7.5 0s5 1 7.5 0 5-1 7.5 0;
                        M2 6c2.5-1.8 5-0.3 7.5 0s5 1.8 7.5 0 5-1.8 7.5 0;
                        M2 6c2.5-0.3 5-1.8 7.5 0s5 0.3 7.5 0 5-0.3 7.5 0;
                        M2 6c2.5-1 5-1 7.5 0s5 1 7.5 0 5-1 7.5 0"
              />
            </path>
            <path stroke="url(#hero-wave-fade)" d="M2 12c2.5-1 5-1 7.5 0s5 1 7.5 0 5-1 7.5 0">
              <animate
                attributeName="d"
                dur="3.8s"
                begin="-1.1s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1"
                values="M2 12c2.5-1 5-1 7.5 0s5 1 7.5 0 5-1 7.5 0;
                        M2 12c2.5-0.3 5-1.8 7.5 0s5 0.3 7.5 0 5-0.3 7.5 0;
                        M2 12c2.5-1.8 5-0.3 7.5 0s5 1.8 7.5 0 5-1.8 7.5 0;
                        M2 12c2.5-1 5-1 7.5 0s5 1 7.5 0 5-1 7.5 0"
              />
            </path>
            <path stroke="url(#hero-wave-fade)" d="M2 18c2.5-1 5-1 7.5 0s5 1 7.5 0 5-1 7.5 0">
              <animate
                attributeName="d"
                dur="3.5s"
                begin="-2.2s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1"
                values="M2 18c2.5-1 5-1 7.5 0s5 1 7.5 0 5-1 7.5 0;
                        M2 18c2.5-1.8 5-0.3 7.5 0s5 1.8 7.5 0 5-1.8 7.5 0;
                        M2 18c2.5-0.3 5-1.8 7.5 0s5 0.3 7.5 0 5-0.3 7.5 0;
                        M2 18c2.5-1 5-1 7.5 0s5 1 7.5 0 5-1 7.5 0"
              />
            </path>
          </svg>
          <BurgerSiteDesktop />
        </div>
      </div>
    </section>
  );
}