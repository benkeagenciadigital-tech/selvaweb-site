import { Reveal } from "@/components/ui/Reveal";
import { testimonials } from "@/lib/site";

/* Citações empilhadas em zigue-zague — sem carrossel: ninguém clica em seta. */
export default function Testimonials() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-40">
      {/* Pantera ao fundo, bem discreta — as citações são as protagonistas */}
      <div className="pointer-events-none absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/panther-testimonials-poster.jpg"
          className="h-full w-full object-cover opacity-30 motion-reduce:hidden"
        >
          <source src="/panther-testimonials.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-canopy/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-canopy via-transparent to-canopy" />
      </div>

      <div className="relative mx-auto w-full max-w-[var(--shell)] px-6 lg:px-10">
        <Reveal>
          <span className="eyebrow">Depoimentos</span>
        </Reveal>

        <div className="mt-14 flex flex-col gap-20 lg:gap-24">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <blockquote
                className={`relative max-w-3xl ${i % 2 === 1 ? "lg:ml-auto lg:text-right" : ""}`}
              >
                <span
                  aria-hidden
                  className={`display-condensed absolute -top-10 text-8xl leading-none text-lime/25 ${
                    i % 2 === 1 ? "right-0" : "left-0"
                  }`}
                >
                  “
                </span>
                <p className="display relative text-2xl font-semibold leading-snug text-mist lg:text-[2rem]">
                  {t.quote}
                </p>
                <footer
                  className={`mono-label mt-6 flex items-center gap-3 text-[11px] text-signal ${
                    i % 2 === 1 ? "lg:justify-end" : ""
                  }`}
                >
                  <span className="inline-block h-px w-8 bg-lime" />
                  {t.name}{t.role ? ` · ${t.role}` : ""}
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
