"use client";

import dynamic from "next/dynamic";

/** Canvas WebGL não pode renderizar no servidor → carrega só no cliente. */
const Mascot3D = dynamic(() => import("@/components/three/Mascot3D"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <span className="mono-label text-xs text-signal-dim">carregando 3D…</span>
    </div>
  ),
});

export default function Mascot3DClient({ className }: { className?: string }) {
  return <Mascot3D className={className} />;
}
