"use client";

import { Fragment } from "react";
import { motion, useReducedMotion } from "motion/react";
import { useReveal } from "./useReveal";

type Props = {
  text: string;
  className?: string;
  /** highlight these words (case-insensitive, by token) in lime */
  highlight?: string[];
  delay?: number;
  as?: "h1" | "h2" | "h3" | "span" | "div";
};

/**
 * Word-by-word mask reveal for display headlines — the signature SELVA
 * entrance. Uses the fail-open reveal hook so words never stay hidden.
 */
export default function AnimatedHeading({
  text,
  className = "",
  highlight = [],
  delay = 0,
  as = "h2",
}: Props) {
  const reduce = useReducedMotion();
  const { ref, shown } = useReveal<HTMLHeadingElement>({ once: true, amount: 0.4 });
  const words = text.split(" ");
  const hl = highlight.map((w) => w.toLowerCase().replace(/[.,]/g, ""));
  const Tag = motion[as] as typeof motion.h2;

  const isHighlight = (w: string) =>
    hl.includes(w.toLowerCase().replace(/[.,]/g, ""));

  if (reduce) {
    const Plain = as as React.ElementType<{
      className?: string;
      children?: React.ReactNode;
    }>;
    return (
      <Plain className={className}>
        {words.map((w, i) => (
          <span key={i} style={isHighlight(w) ? { color: "var(--color-lime)" } : undefined}>
            {w}
            {i < words.length - 1 ? " " : ""}
          </span>
        ))}
      </Plain>
    );
  }

  return (
    <Tag ref={ref} className={className}>
      {words.map((word, i) => (
        <Fragment key={i}>
          <span
            style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top" }}
          >
            <motion.span
              style={{
                display: "inline-block",
                color: isHighlight(word) ? "var(--color-lime)" : undefined,
              }}
              initial={{ y: "110%" }}
              animate={shown ? { y: 0 } : { y: "110%" }}
              transition={{
                duration: 0.9,
                delay: delay + i * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {word}
            </motion.span>
          </span>
          {i < words.length - 1 ? " " : ""}
        </Fragment>
      ))}
    </Tag>
  );
}
