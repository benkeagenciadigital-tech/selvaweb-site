import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTA from "@/components/sections/CTA";
import { Reveal } from "@/components/ui/Reveal";
import { processSteps } from "@/lib/site";

export const metadata: Metadata = {
  title: "Processo",
  description:
    "Conversa, direção, layout, ajustes, publicação e acompanhamento: seis passos curtos do briefing ao site no ar.",
};

const detail: Record<string, string[]> = {
  Briefing: ["Papo por WhatsApp ou call", "Suas referências", "O que não pode faltar", "Prazo combinado"],
  Direction: ["Clima e estilo", "Cores e tipografia", "Exemplos reais", "Aprovação antes de construir"],
  Layout: ["Site de verdade, não esboço", "Mobile desde o início", "Textos ajustados", "Fotos tratadas"],
  Review: ["Você aponta, a gente refina", "Revisões incluídas", "Sem taxa surpresa", "Até ficar com a sua cara"],
  Launch: ["Domínio e hospedagem", "Publicação inclusa", "Google e WhatsApp ligados", "Você só compartilha o link"],
  Care: ["Suporte de verdade", "Pequenos ajustes", "Hub SELVA opcional", "Site sempre no ar"],
};

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Processo"
        title="Do briefing ao ar."
        highlight={["ar."]}
        intro="Seis passos curtos, do papo inicial ao site publicado. Você sempre sabe em que etapa a gente está — sem sumiço, sem surpresa."
      />

      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-[var(--shell)] px-6 lg:px-10">
          <div className="relative">
            {/* vertical line */}
            <div className="absolute left-[7px] top-2 h-full w-px bg-forest-line md:left-1/2" />

            <div className="space-y-16 md:space-y-24">
              {processSteps.map((step, i) => (
                <Reveal key={step.n} delay={0.05}>
                  <div
                    className={`relative grid gap-6 md:grid-cols-2 md:gap-16 ${
                      i % 2 === 1 ? "md:[direction:rtl]" : ""
                    }`}
                  >
                    {/* node */}
                    <span className="absolute left-0 top-2 h-4 w-4 -translate-x-[4px] rounded-full border-2 border-lime bg-canopy md:left-1/2 md:-translate-x-1/2" />

                    <div className="pl-8 md:pl-0 md:[direction:ltr]">
                      <div className="flex items-baseline gap-4">
                        <span className="display text-5xl text-forest-line">{step.n}</span>
                        <div>
                          <p className="mono-label text-[10px] text-lime">{step.title}</p>
                          <h2 className="display text-3xl text-mist">{step.pt}</h2>
                        </div>
                      </div>
                      <p className="mt-4 max-w-md text-base leading-relaxed text-signal">
                        {step.body}
                      </p>
                    </div>

                    <ul className="flex flex-wrap content-start gap-2 pl-8 md:items-center md:pl-0 md:[direction:ltr]">
                      {(detail[step.title] ?? []).map((d) => (
                        <li
                          key={d}
                          className="rounded-full border border-forest-line px-4 py-1.5 text-xs text-signal"
                        >
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
