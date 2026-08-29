import Link from "next/link";
import Logo from "./Logo";
import PantherMark from "./PantherMark";
import { nav, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-forest-line bg-jungle">
      <div className="hud-grid pointer-events-none absolute inset-0 opacity-40" />

      {/* Big CTA strip */}
      <div className="relative mx-auto max-w-[var(--shell)] px-6 pt-20 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-8 border-b border-forest-line pb-16 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-5">Pronto para caçar o amanhã?</p>
            <h2 className="display text-4xl text-mist sm:text-5xl lg:text-6xl">
              Vamos construir seu
              <br />
              <span className="text-lime text-glow">habitat digital.</span>
            </h2>
          </div>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 rounded-[10px] bg-lime px-8 py-4 text-base font-semibold text-jungle transition-all duration-300 hover:bg-lime-bright hover:shadow-[0_0_50px_-8px_rgba(166,206,57,0.8)]"
          >
            Iniciar projeto
            <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
          </Link>
        </div>
      </div>

      {/* Columns */}
      <div className="relative mx-auto grid max-w-[var(--shell)] gap-12 px-6 py-16 md:grid-cols-[1.4fr_1fr_1fr] lg:px-10">
        <div>
          <Logo className="h-7 w-auto" />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-signal">
            {site.description}
          </p>
          <p className="mono-label mt-6 text-xs text-signal-dim">{site.location}</p>
        </div>

        <div>
          <p className="mono-label mb-5 text-xs text-signal-dim">Navegação</p>
          <ul className="space-y-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-signal transition-colors hover:text-lime"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mono-label mb-5 text-xs text-signal-dim">Contato</p>
          <ul className="space-y-3">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="text-sm text-signal transition-colors hover:text-lime"
              >
                {site.email}
              </a>
            </li>
            {site.socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-signal transition-colors hover:text-lime"
                >
                  {s.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Baseline */}
      <div className="relative border-t border-forest-line">
        <div className="mx-auto flex max-w-[var(--shell)] flex-col items-center justify-between gap-4 px-6 py-6 text-xs text-signal-dim sm:flex-row lg:px-10">
          <p className="mono-label">
            © {new Date().getFullYear()} {site.legal}
          </p>
          <p className="mono-label flex items-center gap-2 text-center">
            <PantherMark className="h-4 w-4" />
            We build digital habitats that hunt tomorrow.
          </p>
        </div>
      </div>
    </footer>
  );
}
