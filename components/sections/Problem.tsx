import AnimatedHeading from "@/components/ui/AnimatedHeading";
import { Reveal } from "@/components/ui/Reveal";
import { problems } from "@/lib/site";

export default function Problem() {
  return (
    <section id="problema" className="relative py-28 lg:py-40">
      <div className="mx-auto grid w-full max-w-[var(--shell)] gap-16 px-6 lg:grid-cols-12 lg:px-10">
        {/* Coluna editorial */}
        <div className="lg:col-span-5">
          <Reveal>
            <span className="eyebrow">O problema</span>
          </Reveal>
          <AnimatedHeading
            as="h2"
            text="Site bonito não precisa custar caro."
            highlight={["custar", "caro."]}
            className="display-condensed mt-6 text-5xl uppercase sm:text-6xl lg:text-7xl"
          />
          <Reveal delay={0.25}>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-signal">
              Orçamento de agência grande, meses de espera e, no fim, um
              template. Quem tem um negócio pra tocar não tem tempo nem verba
              pra isso — e não precisa ter.
            </p>
          </Reveal>
        </div>

        {/* Lista numerada com numerais fantasma */}
        <div className="lg:col-span-6 lg:col-start-7">
          {problems.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.08}>
              <div className="group relative border-t border-forest-line py-9 pl-20 last:border-b sm:pl-28">
                <span
                  aria-hidden
                  className="display-condensed absolute left-0 top-1/2 -translate-y-1/2 text-6xl text-mist/10 transition-colors duration-300 group-hover:text-lime/35 sm:text-7xl"
                >
                  {p.n}
                </span>
                <h3 className="display text-2xl font-bold text-mist transition-colors duration-300 group-hover:text-lime">
                  {p.title}
                </h3>
                <p className="mt-2 max-w-md leading-relaxed text-signal">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
