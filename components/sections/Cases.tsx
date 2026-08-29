import Image from "next/image";
import Link from "next/link";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { cases } from "@/lib/site";

/* Grade responsiva de 3 colunas — projetos reais com a imagem como protagonista. */
export default function Cases() {
  return (
    <section id="cases" className="relative py-28 lg:py-40">
      <div className="mx-auto w-full max-w-[var(--shell)] px-6 lg:px-10">
        <div className="flex items-end justify-between gap-6">
          <div>
            <Reveal>
              <span className="eyebrow">Sites entregues</span>
            </Reveal>
            <AnimatedHeading
              as="h2"
              text="Feitos na SELVA."
              className="display-condensed mt-4 text-6xl uppercase sm:text-7xl lg:text-8xl"
            />
          </div>
          <Reveal delay={0.15}>
            <Link
              href="/work"
              className="mono-label hidden shrink-0 text-xs text-signal transition-colors hover:text-lime sm:block"
            >
              Ver todos ↗
            </Link>
          </Reveal>
        </div>

        <Stagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((c) => (
            <StaggerItem key={c.slug}>
              <Link
                href="/work"
                className="group flex h-full flex-col overflow-hidden border border-forest-line bg-canopy-2/50 transition-all duration-300 hover:-translate-y-1 hover:border-lime/50"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={c.image}
                    alt={`Site ${c.title} — projeto entregue pela SELVA`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-canopy-2 via-canopy-2/10 to-transparent"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 lg:p-7">
                  <div className="mono-label flex items-center justify-between text-[10px] text-signal-dim">
                    <span>{c.sector}</span>
                    <span>{c.year}</span>
                  </div>
                  <h3 className="display-condensed mt-4 text-3xl uppercase text-mist transition-colors duration-300 group-hover:text-lime lg:text-4xl">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-signal">
                    {c.summary}
                  </p>
                  <div className="mt-auto flex items-center justify-between gap-4 border-t border-forest-line pt-5">
                    <span className="mono-label text-[10px] text-signal-dim">
                      {c.tag}
                    </span>
                    <span
                      aria-hidden
                      className="display text-xl text-signal-dim transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-lime"
                    >
                      ↗
                    </span>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
