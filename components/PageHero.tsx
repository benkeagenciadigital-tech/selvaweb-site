import JungleBackdrop from "@/components/JungleBackdrop";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import Eyebrow from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

type Props = {
  eyebrow: string;
  title: string;
  highlight?: string[];
  intro?: string;
};

/** Shared header band for internal pages. */
export default function PageHero({ eyebrow, title, highlight = [], intro }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-forest-line pb-20 pt-40 lg:pb-28 lg:pt-52">
      <div className="hud-grid pointer-events-none absolute inset-0 opacity-40" />
      <JungleBackdrop className="opacity-50" />
      <div className="spotlight pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-lime/10 blur-[130px]" />

      <div className="relative mx-auto max-w-[var(--shell)] px-6 lg:px-10">
        <Eyebrow>{eyebrow}</Eyebrow>
        <AnimatedHeading
          as="h1"
          text={title}
          highlight={highlight}
          className="display mt-6 max-w-[16ch] text-5xl sm:text-6xl lg:text-7xl"
        />
        {intro && (
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-signal">{intro}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
