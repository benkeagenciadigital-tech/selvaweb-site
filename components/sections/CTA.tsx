import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

/* Fechamento: uma pergunta, em corpo de outdoor. */
export default function CTA() {
  return (
    <section className="relative overflow-hidden border-t border-forest-line py-28 text-center lg:py-40">
      {/* brilho subindo do chão da selva */}
      <div className="pointer-events-none absolute inset-x-0 -bottom-56 h-[28rem] bg-[radial-gradient(55%_100%_at_50%_100%,rgba(166,206,57,0.14),transparent_70%)]" />

      <div className="relative mx-auto w-full max-w-[var(--shell)] px-6 lg:px-10">
        <Reveal>
          <span className="eyebrow">Chega de adiar</span>
        </Reveal>

        <Reveal delay={0.1}>
          <Link href="/contact" className="group mt-8 block">
            <span className="display-condensed block text-[15vw] uppercase leading-[0.85] text-mist lg:text-[9.5rem]">
              Faça seu site
            </span>
            <span className="display-condensed block text-[15vw] uppercase leading-[0.85] text-lime transition-colors duration-500 group-hover:text-lime-bright lg:text-[9.5rem]">
              com a Selva!
            </span>
          </Link>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mx-auto mt-14 flex max-w-md flex-col items-center gap-5">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-[8px] bg-lime px-9 py-4 text-sm font-semibold tracking-wide text-jungle transition-all duration-300 hover:-translate-y-0.5 hover:bg-lime-bright hover:shadow-[0_0_50px_-10px_rgba(166,206,57,0.8)]"
            >
              Quero meu site em 3 dias
              <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
            <a
              href={`mailto:${site.email}`}
              className="mono-label text-xs text-signal-dim transition-colors hover:text-lime"
            >
              {site.email}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
