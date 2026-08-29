"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Scroll-reveal trigger — robust across every environment.
 *
 * Three layers, so content is never permanently hidden:
 *  1. Synchronous mount check  → above-the-fold reveals instantly.
 *  2. IntersectionObserver     → efficient scroll-in reveal in real browsers
 *                                (works under smooth-scroll libs like Lenis).
 *  3. Low-frequency interval   → timer-based safety net that still fires when
 *                                rAF is paused or scroll events are suppressed
 *                                (e.g. headless renderers); clears on reveal.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options: { once?: boolean; amount?: number } = {}
) {
  const { once = true, amount = 0.01 } = options;
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let io: IntersectionObserver | null = null;
    let interval = 0;
    let finished = false;

    const isInView = () => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      if (r.width === 0 && r.height === 0) return false;
      return r.top <= vh * 0.9 && r.bottom >= 0;
    };

    const reveal = () => {
      setShown(true);
      if (once) {
        finished = true;
        cleanup();
      }
    };

    function cleanup() {
      io?.disconnect();
      io = null;
      if (interval) window.clearInterval(interval);
      interval = 0;
    }

    // 1. Immediate check.
    if (isInView()) {
      reveal();
      if (finished) return;
    }

    // 2. IntersectionObserver.
    if (typeof IntersectionObserver !== "undefined") {
      io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) reveal();
          else if (!once) setShown(false);
        },
        { rootMargin: "0px 0px -10% 0px", threshold: amount }
      );
      io.observe(el);
    }

    // 3. Timer fallback (fires even when rAF/scroll events don't).
    interval = window.setInterval(() => {
      if (finished) return;
      if (isInView()) reveal();
      else if (!once) setShown(false);
    }, 250);

    return cleanup;
  }, [once, amount]);

  return { ref, shown };
}
