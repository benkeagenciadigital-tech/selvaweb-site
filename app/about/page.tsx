import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CTA from "@/components/sections/CTA";
import Eyebrow from "@/components/ui/Eyebrow";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { values } from "@/lib/site";

export const metadata: Metadata = {
  title: "Estúdio",
  description:
    "A SELVA cria sites com cara de premium para pequenos e médios negócios — bonitos, rápidos de entregar e com preço justo.",
};

const archetypes = [
  {
    n: "01",
    name: "Predador",
    traits: "Precisão · Movimento · Velocidade · Instinto",
    body: "Cada decisão é cirúrgica. Não há gordura, não há ruído — só o caminho mais curto entre o visitante e a ação.",
  },
  {
    n: "02",
    name: "Sábio",
    traits: "Estratégia · Inteligência · Clareza",
    body: "Antes de construir, entendemos. Posicionamento, público e objetivo definem cada linha de código.",
  },
  {
    n: "03",
    name: "Criador",
    traits: "Construção · Design · Inovação aplicada",
    body: "Transformamos estratégia em estrutura real — interfaces que performam, não apenas impressionam.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="O Estúdio"
        title="Web design premium, sem o preço premium."
        highlight={["habitats", "digitais."]}
        intro="A SELVA nasceu de uma implicância: site bonito virou artigo de luxo. Viemos provar o contrário — design de alto padrão, entregue em dias, a um preço que negócio de verdade consegue pagar."
      />

      {/* Brand essence — split with panther eye */}
      <section className="relative overflow-hidden border-b border-forest-line bg-jungle py-24 lg:py-32">
        <div className="mx-auto grid max-w-[var(--shell)] items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
          <Reveal>
            <div className="hud-frame relative aspect-square overflow-hidden rounded-[16px] border border-forest-line">
              <Image
                src="/panther-eye.webp"
                alt="Olho de pantera em dissolução de pixels — essência da marca SELVA"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div>
            <Eyebrow index="*">Brand essence</Eyebrow>
            <AnimatedHeading
              as="h2"
              text="We build digital habitats that hunt tomorrow."
              highlight={["hunt", "tomorrow."]}
              className="display mt-6 text-4xl sm:text-5xl"
            />
            <Reveal delay={0.1}>
              <p className="mt-7 text-lg leading-relaxed text-signal">
                Não é uma frase de efeito. É um método. Um habitat digital é vivo:
                evolui, se adapta e caça resultados continuamente.
              </p>
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
                {["Strategy", "Design", "Development", "Evolution"].map((w) => (
                  <span key={w} className="mono-label text-sm text-lime">
                    {w}.
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Archetypes */}
      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-[var(--shell)] px-6 lg:px-10">
          <div className="max-w-2xl">
            <Eyebrow index="01">Arquétipos</Eyebrow>
            <AnimatedHeading
              as="h2"
              text="Três instintos. Um só método."
              highlight={["método."]}
              className="display mt-6 text-4xl sm:text-5xl"
            />
          </div>
          <Stagger className="mt-14 grid gap-px overflow-hidden rounded-[16px] border border-forest-line bg-forest-line md:grid-cols-3">
            {archetypes.map((a) => (
              <StaggerItem key={a.n}>
                <article className="h-full bg-canopy p-8">
                  <div className="flex items-center justify-between">
                    <span className="mono-label text-xs text-signal-dim">{a.n}</span>
                    <span className="h-2 w-2 rounded-full bg-lime" />
                  </div>
                  <h3 className="display mt-10 text-3xl text-mist">{a.name}</h3>
                  <p className="mono-label mt-3 text-[10px] text-lime">{a.traits}</p>
                  <p className="mt-5 text-sm leading-relaxed text-signal">{a.body}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Values + palette artifact */}
      <section className="relative overflow-hidden border-y border-forest-line bg-jungle py-24 lg:py-32">
        <div className="hud-grid pointer-events-none absolute inset-0 opacity-25" />
        <div className="relative mx-auto grid max-w-[var(--shell)] gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-10">
          <div>
            <Eyebrow index="02">Princípios</Eyebrow>
            <AnimatedHeading
              as="h2"
              text="O que sustenta cada projeto."
              highlight={["projeto."]}
              className="display mt-6 text-4xl sm:text-5xl"
            />
            <Stagger className="mt-12 grid gap-px overflow-hidden rounded-[16px] border border-forest-line bg-forest-line sm:grid-cols-2">
              {values.map((v) => (
                <StaggerItem key={v.title}>
                  <div className="h-full bg-canopy p-7">
                    <h3 className="display text-2xl text-lime">{v.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-signal">{v.body}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
          <Reveal delay={0.1}>
            <figure className="overflow-hidden rounded-[16px] border border-forest-line bg-mist/95">
              <Image
                src="/palette.webp"
                alt="Sistema de cores SELVA: Selva Lime, Canopy Black, Deep Forest, Mist White, Signal Grey"
                width={1000}
                height={1000}
                className="h-auto w-full"
              />
            </figure>
            <figcaption className="mono-label mt-4 text-[10px] text-signal-dim">
              Color system / brand artifact
            </figcaption>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
