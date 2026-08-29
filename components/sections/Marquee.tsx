const items = [
  "Layout premium",
  "Site em 3 dias",
  "Do seu jeito",
  "Preço justo",
  "Mobile perfeito",
  "Sem tecniquês",
  "Suporte de verdade",
];

/* Faixa lime inclinada — a única coisa torta num layout reto, de propósito. */
export default function Marquee() {
  return (
    <section aria-hidden className="relative z-10 -my-5 overflow-hidden py-8">
      <div className="tilt-band border-y-2 border-jungle bg-lime py-3 shadow-[0_0_60px_-10px_rgba(166,206,57,0.4)]">
        <div className="marquee-track flex w-max items-center whitespace-nowrap">
          {[0, 1].map((half) => (
            <div key={half} className="flex items-center">
              {items.map((t) => (
                <span key={`${half}-${t}`} className="flex items-center">
                  <span className="display-condensed px-7 text-2xl uppercase text-jungle md:text-3xl">
                    {t}
                  </span>
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-jungle/70">
                    {/* pegada de pantera */}
                    <ellipse cx="12" cy="16" rx="5.5" ry="4.5" />
                    <ellipse cx="5" cy="9" rx="2.4" ry="3" />
                    <ellipse cx="10" cy="6.5" rx="2.4" ry="3" />
                    <ellipse cx="15.5" cy="7" rx="2.4" ry="3" />
                    <ellipse cx="20" cy="10.5" rx="2.2" ry="2.8" />
                  </svg>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
