"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import Button from "@/components/ui/Button";
import SelvaNeonWordmark from "@/components/SelvaNeonWordmark";

export default function Hero() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yContent = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const yWordmark = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-svh flex-col justify-between overflow-hidden pt-36"
    >
      {/* Pantera em vídeo — a selva viva atrás de tudo */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/hero-panther.webp"
          className="h-full w-full object-cover object-[70%_center] opacity-60 motion-reduce:hidden lg:object-center"
        >
          <source src="/hero-panther-video.mp4" type="video/mp4" />
        </video>
        {/* Véus de legibilidade */}
        <div className="absolute inset-0 bg-gradient-to-r from-canopy via-canopy/75 to-canopy/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-canopy via-transparent to-canopy/70" />
      </div>

      <motion.div
        style={{ y: yContent, opacity }}
        className="relative mx-auto w-full max-w-[var(--shell)] px-6 lg:px-10"
      >
        {/* Meta editorial */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="mono-label mb-10 flex flex-wrap items-center justify-between gap-4 text-[10px] text-signal-dim"
        >
          <span>2026 — Itajaí — Santa Catarina</span>
          <span className="flex items-center gap-2.5">
            <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-lime" />
            <span className="text-signal">Aceitando projetos</span>
          </span>
        </motion.div>

        {/* Headline */}
        <h1 className="display-condensed max-w-[24ch] text-[10.4vw] uppercase sm:text-[9.4vw] lg:text-[5.9vw] xl:text-[5.5rem]">
          <AnimatedHeading
            as="span"
            text="Construímos habitats digitais"
            className="block"
            highlight={["habitats", "digitais"]}
          />
          <AnimatedHeading
            as="span"
            text="pra sua caçada profissional."
            className="block"
            delay={0.22}
          />
        </h1>

        {/* Sub + CTAs */}
        <div className="mt-10 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl text-lg leading-relaxed text-signal"
          >
            A SELVA cria sites premium para pequenos e médios negócios —
            layout <span className="text-mist">do seu jeito</span>, entrega
            rápida e preço que você pode pagar.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex shrink-0 flex-wrap items-center gap-4"
          >
            <Button href="/contact" variant="primary" arrow>
              Quero meu site
            </Button>
            <Button href="/work" variant="outline">
              Ver sites prontos
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Marca colossal ancorando a base — meio cortada, como algo saindo do mato */}
      <motion.div
        style={{ y: yWordmark }}
        aria-hidden
        className="pointer-events-none relative mt-14 select-none"
      >
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mx-auto mb-4 flex w-full max-w-[var(--shell)] items-center justify-between px-6 lg:px-10">
            {["Layout premium", "Entrega em 3 dias", "Mobile perfeito", "Preço justo"].map((t, i) => (
              <span
                key={t}
                className={`mono-label text-[10px] text-signal-dim ${i > 1 ? "hidden sm:inline" : ""}`}
              >
                {t}
              </span>
            ))}
          </div>
          <div className="rule-grow h-px w-full bg-forest-line" style={{ animationDelay: "0.9s" }} />
          <div className="mx-auto w-[94vw] max-w-[1500px] px-2 pb-10 pt-8 lg:pb-14 lg:pt-12">
            <SelvaNeonWordmark className="h-auto w-full" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
