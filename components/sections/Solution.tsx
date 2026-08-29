import AnimatedHeading from "@/components/ui/AnimatedHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { pillars } from "@/lib/site";

/* O bloco lime — a página inteira é noite; aqui o predador ataca. */
export default function Solution() {
  return (
    <section id="solucao" className="relative bg-lime py-24 text-jungle lg:py-36">
      <div className="mx-auto w-full max-w-[var(--shell)] px-6 lg:px-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Reveal>
              <span className="mono-label text-xs text-jungle/60">A resposta</span>
            </Reveal>
            <AnimatedHeading
              as="h2"
              text="O jeito SELVA."
              className="display-condensed mt-4 text-6xl uppercase sm:text-7xl lg:text-8xl"
            />
          </div>
          <Reveal delay={0.2}>
            <p className="max-w-sm leading-relaxed text-jungle/75">
              Quatro promessas, cumpridas em todo projeto. A parte técnica é
              problema nosso — o seu é aprovar o site mais bonito da rua.
            </p>
          </Reveal>
        </div>

        <Stagger className="mt-16 grid gap-px overflow-hidden rounded-[4px] border border-jungle/25 bg-jungle/25 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <StaggerItem key={p.n}>
              <div className="group flex h-full flex-col bg-lime p-8 transition-colors duration-300 hover:bg-jungle">
                <span className="mono-label text-xs text-jungle/50 transition-colors duration-300 group-hover:text-lime/60">
                  /{p.n}
                </span>
                <h3 className="display-condensed mt-10 text-3xl uppercase transition-colors duration-300 group-hover:text-lime">
                  {p.pt}
                </h3>
                <span className="mono-label mt-1 text-[10px] text-jungle/45 transition-colors duration-300 group-hover:text-lime/50">
                  {p.title}
                </span>
                <p className="mt-5 text-sm leading-relaxed text-jungle/80 transition-colors duration-300 group-hover:text-mist/80">
                  {p.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
