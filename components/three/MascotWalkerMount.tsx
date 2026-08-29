"use client";

import dynamic from "next/dynamic";

/** Carrega o mascote 3D só no cliente (WebGL não roda no SSR). */
const MascotWalker = dynamic(() => import("./MascotWalker"), { ssr: false });

export default function MascotWalkerMount() {
  return <MascotWalker />;
}
