"use client";

import { useEffect, useRef } from "react";

/**
 * Ambient "digital jungle" canvas: vertical data streams + a slow
 * constellation of nodes/links. Lightweight, pauses off-screen,
 * disabled under prefers-reduced-motion.
 */
export default function JungleBackdrop({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    type Drop = { x: number; y: number; len: number; speed: number; a: number };
    type Node = { x: number; y: number; vx: number; vy: number };
    let drops: Drop[] = [];
    let nodes: Node[] = [];

    const init = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const dropCount = Math.round((w * h) / 34000);
      drops = Array.from({ length: dropCount }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        len: 50 + Math.random() * 140,
        speed: 0.7 + Math.random() * 2.1,
        a: 0.05 + Math.random() * 0.15,
      }));

      const nodeCount = Math.round((w * h) / 75000);
      nodes = Array.from({ length: nodeCount }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
      }));
    };

    let visible = true;
    const io = new IntersectionObserver(
      ([e]) => (visible = e.isIntersecting),
      { threshold: 0 }
    );
    io.observe(canvas);

    let raf = 0;
    const render = () => {
      raf = requestAnimationFrame(render);
      if (!visible) return;
      ctx.clearRect(0, 0, w, h);

      // data streams
      for (const d of drops) {
        const grad = ctx.createLinearGradient(d.x, d.y, d.x, d.y + d.len);
        grad.addColorStop(0, "rgba(166,206,57,0)");
        grad.addColorStop(1, `rgba(166,206,57,${d.a})`);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.3;
        ctx.beginPath();
        ctx.moveTo(d.x, d.y);
        ctx.lineTo(d.x, d.y + d.len);
        ctx.stroke();
        // bright head at the leading edge of the stream
        ctx.fillStyle = `rgba(196,242,74,${Math.min(1, d.a + 0.18)})`;
        ctx.beginPath();
        ctx.arc(d.x, d.y + d.len, 0.9, 0, Math.PI * 2);
        ctx.fill();
        d.y += d.speed;
        if (d.y > h) {
          d.y = -d.len;
          d.x = Math.random() * w;
        }
      }

      // node constellation
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
      }
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 170) {
            ctx.strokeStyle = `rgba(166,206,57,${0.19 * (1 - dist / 170)})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      for (const n of nodes) {
        // soft glow
        ctx.fillStyle = "rgba(166,206,57,0.14)";
        ctx.beginPath();
        ctx.arc(n.x, n.y, 3.5, 0, Math.PI * 2);
        ctx.fill();
        // core dot
        ctx.fillStyle = "rgba(196,242,74,0.72)";
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.6, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    init();
    if (!reduce) render();
    else {
      // draw one static frame
      render();
      cancelAnimationFrame(raf);
    }

    const onResize = () => init();
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  );
}
