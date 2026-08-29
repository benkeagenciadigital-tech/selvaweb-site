import Link from "next/link";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { cases } from "@/lib/site";

/* Grade assimétrica 7/5 — cases como manchetes, métrica como protagonista. */
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

        <Stagger className="mt-16 grid gap-6 lg:grid-cols-12">
          {cases.map((c, i) => (
            <StaggerItem
              key={c.slug}
              className={i % 2 === 0 ? "lg:col-span-7" : "lg:col-span-5"}
            >
              <Link
                href="/work"
                className="group flex h-full min-h-[320px] flex-col justify-between border border-forest-line bg-canopy-2/50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-lime/50 lg:min-h-[380px] lg:p-10"
              >
                <div>
                  <div className="mono-label flex items-center justify-between text-[10px] text-signal-dim">
                    <span>{c.sector}</span>
                    <span>{c.year}</span>
                  </div>
                  <h3 className="display-condensed mt-6 text-4xl uppercase text-mist transition-colors duration-300 group-hover:text-lime lg:text-5xl">
                    {c.title}
                  </h3>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-signal">
                    {c.summary}
                  </p>
                </div>
                <div className="mt-10 flex items-end justify-between gap-4 border-t border-forest-line pt-6">
                  <div>
                    <p className="display-condensed text-5xl text-lime transition-transform duration-300 group-hover:scale-105 lg:text-6xl" style={{ transformOrigin: "left bottom" }}>
                      {c.metric}
                    </p>
                    <p className="mono-label mt-2 text-[10px] text-signal-dim">
                      {c.metricLabel}
                    </p>
                  </div>
                  <span
                    aria-hidden
                    className="display text-2xl text-signal-dim transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-lime"
                  >
                    ↗
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
