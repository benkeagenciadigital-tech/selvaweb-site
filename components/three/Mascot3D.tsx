"use client";

import { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  useAnimations,
  Environment,
  ContactShadows,
  Float,
  Center,
} from "@react-three/drei";
import * as THREE from "three";

/* ============================================================
   SELVA — Mascote 3D (estrutura pronta)
   ------------------------------------------------------------
   PLUG-AND-PLAY:
   1. Coloque o modelo rigado+animado em  public/mascot.glb
   2. Troque HAS_MODEL para true.
   A animação "Idle"/"Breath" (ou a primeira do arquivo) toca
   sozinha; cabeça/corpo seguem o cursor. Sem o .glb, mostra um
   placeholder reagindo ao mouse só pra validar o pipeline.
   ============================================================ */

const MODEL_SRC = "/mascot.glb";
const HAS_MODEL = true; // ← vire true quando o mascot.glb estiver em /public

if (HAS_MODEL) useGLTF.preload(MODEL_SRC, true);

/** Faz o grupo seguir suavemente a posição do cursor. */
function useCursorFollow(ref: React.RefObject<THREE.Group | null>) {
  useFrame((state) => {
    const g = ref.current;
    if (!g) return;
    g.rotation.y = THREE.MathUtils.lerp(g.rotation.y, state.pointer.x * 0.6, 0.06);
    g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, -state.pointer.y * 0.25, 0.06);
  });
}

/** Modelo real do mascote. Suporta GLB animado (rig) ou estático (turntable). */
function MascotModel() {
  const group = useRef<THREE.Group>(null);
  const spin = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF(MODEL_SRC, true);
  const { actions, names } = useAnimations(animations, group);
  const hasClips = names.length > 0;

  useEffect(() => {
    if (!hasClips) return;
    const idle = names.find((n) => /idle|breath|stand/i.test(n)) ?? names[0];
    const action = idle ? actions[idle] : undefined;
    action?.reset().fadeIn(0.5).play();
    return () => void action?.fadeOut(0.3);
  }, [actions, names, hasClips]);

  // outer group leans toward the cursor
  useCursorFollow(group);
  // static model: gentle turntable so the body is seen in motion
  useFrame((_, dt) => {
    if (!hasClips && spin.current) spin.current.rotation.y += dt * 0.5;
  });

  return (
    <group ref={group} dispose={null}>
      <group ref={spin}>
        <Center>
          <primitive object={scene} scale={1.5} />
        </Center>
      </group>
    </group>
  );
}

/** Placeholder até o modelo real chegar. */
function Placeholder() {
  const group = useRef<THREE.Group>(null);
  const core = useRef<THREE.Mesh>(null);
  useCursorFollow(group);
  useFrame((_, dt) => {
    if (core.current) core.current.rotation.x += dt * 0.3;
  });
  return (
    <group ref={group}>
      <mesh ref={core} castShadow>
        <icosahedronGeometry args={[1.1, 1]} />
        <meshStandardMaterial
          color="#a6ce39"
          metalness={0.55}
          roughness={0.25}
          emissive="#1a2a1f"
          emissiveIntensity={0.4}
        />
      </mesh>
      <mesh rotation={[Math.PI / 2.5, 0.3, 0]}>
        <torusGeometry args={[1.75, 0.035, 16, 120]} />
        <meshStandardMaterial color="#c4f24a" emissive="#a6ce39" emissiveIntensity={0.9} />
      </mesh>
    </group>
  );
}

export default function Mascot3D({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 0.4, 6], fov: 32 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <spotLight
          position={[5, 8, 5]}
          angle={0.3}
          penumbra={1}
          intensity={2.2}
          castShadow
        />
        <pointLight position={[-5, 2, -3]} intensity={1.4} color="#a6ce39" />

        <Suspense fallback={null}>
          <Float speed={2} rotationIntensity={0.25} floatIntensity={0.6}>
            {HAS_MODEL ? <MascotModel /> : <Placeholder />}
          </Float>
        </Suspense>
        {/* Ambiente em Suspense próprio: reflexos PBR sem bloquear o mascote */}
        <Suspense fallback={null}>
          <Environment preset="city" />
        </Suspense>

        <ContactShadows
          position={[0, -1.7, 0]}
          opacity={0.45}
          scale={9}
          blur={2.6}
          far={3.5}
          color="#000000"
        />
      </Canvas>
    </div>
  );
}
