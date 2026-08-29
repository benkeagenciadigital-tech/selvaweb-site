"use client";

import { useEffect, useState } from "react";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { useReveal } from "@/components/ui/useReveal";
import { stats } from "@/lib/site";

/** Conta a parte numérica de valores como "+147%", "0.9s", "98", "40+". */
function CountUp({ value, shown }: { value: string; shown: boolean }) {
  const match = value.match(/[\d.]+/);
  const target = match ? parseFloat(match[0]) : 0;
  const decimals = match && match[0].includes(".") ? 1 : 0;
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!shown) return;
    const t0 = performance.now();
    const dur = 1400;
    let raf: number;
    const tick = (t: number) => {
      const p = Math.min((t - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 4);
      setN(target * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [shown, target]);

  if (!match) return <>{value}</>;
  const [pre, post] = value.split(match[0]);
  return (
    <>
      {pre}
      {n.toFixed(decimals)}
      {post}
    </>
  );
}

/* Faixa de numerais gigantes — os resultados são o troféu da caçada. */
export default function Results() {
  const { ref, shown } = useReveal<HTMLDivElement>({ once: true, amount: 0.3 });

  return (
    <section ref={ref} className="relative border-y border-forest-line bg-canopy">
      <Stagger className="mx-auto grid w-full max-w-[var(--shell)] grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <StaggerItem
            key={s.label}
            className={`border-forest-line ${i % 2 === 1 ? "border-l" : ""} ${
              i > 1 ? "border-t lg:border-t-0" : ""
            } ${i > 0 ? "lg:border-l" : ""}`}
          >
            <div className="px-6 py-14 lg:px-10 lg:py-20">
              <p className="display-condensed text-5xl text-lime sm:text-6xl xl:text-7xl">
                <CountUp value={s.value} shown={shown} />
              </p>
              <p className="mt-4 font-semibold text-mist">{s.label}</p>
              <p className="mono-label mt-1 text-[10px] text-signal-dim">{s.note}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
