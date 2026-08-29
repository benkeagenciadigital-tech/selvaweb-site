import AnimatedHeading from "@/components/ui/AnimatedHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { processSteps } from "@/lib/site";

export default function Process() {
  return (
    <section
      id="processo"
      className="relative overflow-hidden border-y border-forest-line bg-jungle py-28 lg:py-40"
    >
      {/* sombra de copa no fundo */}
      <div className="pointer-events-none absolute -right-40 top-0 h-[34rem] w-[34rem] rounded-[52%_48%_45%_55%/48%_55%_45%_52%] bg-forest/35 blur-[130px]" />

      <div className="relative mx-auto w-full max-w-[var(--shell)] px-6 lg:px-10">
        <div className="max-w-2xl">
          <Reveal>
            <span className="eyebrow">Processo</span>
          </Reveal>
          <AnimatedHeading
            as="h2"
            text="Do briefing ao ar."
            highlight={["ar."]}
            className="display-condensed mt-4 text-6xl uppercase sm:text-7xl lg:text-8xl"
          />
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-md leading-relaxed text-signal">
              Processo curto e transparente — você acompanha tudo de perto,
              em dias, não em meses.
            </p>
          </Reveal>
        </div>

        <Stagger className="mt-20 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((s) => (
            <StaggerItem key={s.n}>
              <div className="group relative pt-12">
                <span
                  aria-hidden
                  className="display-condensed absolute left-0 top-0 text-8xl text-mist/[0.09] transition-colors duration-300 group-hover:text-lime/30"
                >
                  {s.n}
                </span>
                <div className="relative border-t border-forest-line pt-5">
                  <h3 className="display text-xl font-bold text-mist">{s.pt}</h3>
                  <span className="mono-label text-[10px] text-lime-dim">{s.title}</span>
                  <p className="mt-3 text-sm leading-relaxed text-signal">{s.body}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
