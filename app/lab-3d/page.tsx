import type { Metadata } from "next";
import Mascot3DClient from "./Mascot3DClient";

export const metadata: Metadata = {
  title: "Lab · Mascote 3D",
  robots: { index: false, follow: false },
};

export default function Lab3DPage() {
  return (
    <main className="relative min-h-screen overflow-hidden pt-32 pb-16">
      <div className="hud-grid pointer-events-none absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-[var(--shell)] px-6 text-center lg:px-10">
        <p className="eyebrow">Lab · Pipeline 3D</p>
        <h1 className="display mt-5 text-4xl text-mist sm:text-5xl">
          Mascote em <span className="text-lime">3D</span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-signal">
          Estrutura pronta (React Three Fiber). Mexa o mouse — o objeto reage e segue o
          cursor. Este é só um placeholder; ao subir o{" "}
          <span className="text-mist">mascot.glb</span> riggado, ele entra no lugar com as
          animações reais.
        </p>
      </div>

      <Mascot3DClient className="relative mx-auto mt-6 h-[62vh] w-full max-w-4xl" />
    </main>
  );
}
