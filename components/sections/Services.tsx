import Link from "next/link";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { services } from "@/lib/site";

/* Índice editorial: cada linha é um serviço; o hover inverte para lime. */
export default function Services() {
  return (
    <section id="servicos" className="relative py-28 lg:py-40">
      <div className="mx-auto w-full max-w-[var(--shell)] px-6 lg:px-10">
        <div className="flex items-end justify-between gap-6">
          <div>
            <Reveal>
              <span className="eyebrow">Serviços</span>
            </Reveal>
            <AnimatedHeading
              as="h2"
              text="O que a gente faz."
              className="display-condensed mt-4 text-6xl uppercase sm:text-7xl lg:text-8xl"
            />
          </div>
          <Reveal delay={0.15}>
            <span className="mono-label hidden text-xs text-signal-dim sm:block">
              ({String(services.length).padStart(2, "0")})
            </span>
          </Reveal>
        </div>

        <Stagger className="mt-16 border-b border-forest-line">
          {services.map((s) => (
            <StaggerItem key={s.n}>
              <Link
                href="/services"
                className="group relative flex flex-col gap-2 border-t border-forest-line px-3 py-7 transition-colors duration-300 hover:bg-lime sm:px-5 lg:flex-row lg:items-center lg:gap-10 lg:py-9"
              >
                <span className="mono-label text-xs text-signal-dim transition-colors duration-300 group-hover:text-jungle/60">
                  /{s.n}
                </span>
                <h3 className="display-condensed flex-1 text-3xl uppercase text-mist transition-colors duration-300 group-hover:text-jungle sm:text-4xl lg:text-5xl">
                  {s.pt}
                </h3>
                <p className="hidden max-w-sm text-sm leading-snug text-signal transition-colors duration-300 group-hover:text-jungle/80 md:block lg:text-right">
                  {s.body}
                </p>
                <span
                  aria-hidden
                  className="display absolute right-3 top-7 text-2xl text-lime transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-jungle sm:right-5 lg:static lg:text-3xl"
                >
                  ↗
                </span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
