import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import Eyebrow from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { site, faqs } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Chama no WhatsApp ou manda o formulário: orçamento na hora, sem compromisso — e, se topar, seu site pode estar no ar em 3 dias.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contato"
        title="Bora fazer seu site?"
        highlight={["habitat."]}
        intro="Conte sobre seu projeto. Respondemos com um diagnóstico inicial e os próximos passos — sem fricção, direto ao ponto."
      />

      <section className="relative py-20 lg:py-28">
        <div className="mx-auto grid max-w-[var(--shell)] gap-14 px-6 lg:grid-cols-[1fr_0.8fr] lg:gap-20 lg:px-10">
          {/* Form */}
          <div className="rounded-[20px] border border-forest-line bg-jungle/60 p-8 lg:p-10">
            <Eyebrow index="01">Briefing</Eyebrow>
            <h2 className="display mt-5 text-3xl text-mist">Inicie um projeto</h2>
            <p className="mt-3 text-sm text-signal">Campos com * são obrigatórios.</p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          {/* Side info */}
          <div className="space-y-10">
            <div>
              <Eyebrow index="02">Direto</Eyebrow>
              <ul className="mt-6 space-y-5">
                <li>
                  <p className="mono-label text-[10px] text-signal-dim">E-mail</p>
                  <a
                    href={`mailto:${site.email}`}
                    className="display text-2xl text-mist transition-colors hover:text-lime"
                  >
                    {site.email}
                  </a>
                </li>
                <li>
                  <p className="mono-label text-[10px] text-signal-dim">Localização</p>
                  <p className="text-lg text-mist">{site.location}</p>
                </li>
                <li>
                  <p className="mono-label text-[10px] text-signal-dim">Social</p>
                  <div className="mt-2 flex gap-4">
                    {site.socials.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-signal transition-colors hover:text-lime"
                      >
                        {s.label} ↗
                      </a>
                    ))}
                  </div>
                </li>
              </ul>
            </div>

            <Reveal>
              <div className="hud-frame rounded-[16px] border border-forest-line bg-canopy p-7">
                <p className="eyebrow">Resposta</p>
                <p className="mt-3 text-lg leading-relaxed text-mist">
                  Retornamos em até <span className="text-lime">24h úteis</span> com um
                  diagnóstico inicial e a proposta de próximos passos.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative border-t border-forest-line py-20 lg:py-28">
        <div className="mx-auto max-w-[var(--shell)] px-6 lg:px-10">
          <Eyebrow index="03">FAQ</Eyebrow>
          <h2 className="display mt-5 max-w-2xl text-4xl text-mist sm:text-5xl">
            Perguntas frequentes
          </h2>
          <div className="mt-12 divide-y divide-forest-line border-y border-forest-line">
            {faqs.map((f) => (
              <details key={f.q} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                  <span className="text-lg font-semibold text-mist transition-colors group-hover:text-lime">
                    {f.q}
                  </span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-forest-line text-signal transition-transform duration-300 group-open:rotate-45 group-hover:border-lime group-hover:text-lime">
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-signal">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
