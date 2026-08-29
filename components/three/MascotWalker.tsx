"use client";

import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, useAnimations, ContactShadows } from "@react-three/drei";
import { MeshSurfaceSampler } from "three-stdlib";
import * as THREE from "three";

/* ============================================================
   SELVA — Mascote 3D que se MONTA por partículas
   ------------------------------------------------------------
   Spawn: partículas lime espalhadas convergem para a superfície
   do modelo (point cloud holográfico) e, conforme se juntam, o
   macaco sólido surge (opacidade 0 → 100%) e as partículas
   somem — "vira real". Depois segue o cursor caminhando.
   ============================================================ */

const SRC = "/mascot.glb";
const SPAWN_DUR = 2.4;
const N = 1100; // partículas
const smootherstep = (x: number) => {
  const t = Math.min(1, Math.max(0, x));
  return t * t * t * (t * (t * 6 - 15) + 10);
};
useGLTF.preload(SRC, true);

function Monkey({
  mouseX,
  active,
}: {
  mouseX: React.MutableRefObject<number>;
  active: boolean;
}) {
  const group = useRef<THREE.Group>(null);
  const points = useRef<THREE.Points>(null);
  const { scene, animations } = useGLTF(SRC, true);
  const { actions } = useAnimations(animations, group);
  const currentClip = useRef<string | null>(null);
  const cur = useRef(0);
  const spawnStart = useRef(-1);
  const matsRef = useRef<THREE.Material[]>([]);
  const meshRef = useRef<THREE.Mesh | null>(null);
  const built = useRef(false);
  const { viewport } = useThree();

  // buffers de partículas (preenchidos no 1º frame, já no espaço do grupo)
  const positions = useMemo(() => new Float32Array(N * 3), []);
  const starts = useMemo(() => new Float32Array(N * 3), []);
  const targets = useMemo(() => new Float32Array(N * 3), []);
  const delays = useMemo(() => new Float32Array(N), []);

  useEffect(() => {
    const collected: THREE.Material[] = [];
    scene.traverse((o) => {
      const mesh = o as THREE.Mesh;
      if (mesh.isMesh && mesh.geometry) {
        if (!meshRef.current) meshRef.current = mesh;
        const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
        mats.forEach((m) => {
          m.transparent = true;
          m.opacity = 0;
          m.depthWrite = false;
          m.needsUpdate = true;
          collected.push(m);
        });
      }
    });
    matsRef.current = collected;
    built.current = false;
  }, [scene]);

  const buildTargets = () => {
    const mesh = meshRef.current;
    const g = group.current;
    if (!mesh || !g) return;
    g.updateWorldMatrix(true, true);
    mesh.updateWorldMatrix(true, true);
    const rel = new THREE.Matrix4().copy(g.matrixWorld).invert().multiply(mesh.matrixWorld);
    let sampler: MeshSurfaceSampler | null = null;
    try {
      sampler = new MeshSurfaceSampler(mesh).build();
    } catch {
      sampler = null;
    }
    const tmp = new THREE.Vector3();
    const box = new THREE.Box3().setFromObject(g);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    for (let i = 0; i < N; i++) {
      if (sampler) {
        sampler.sample(tmp);
        tmp.applyMatrix4(rel);
      } else {
        // fallback: pontos aleatórios na bbox
        tmp.set(
          center.x + (Math.random() - 0.5) * size.x,
          center.y + (Math.random() - 0.5) * size.y,
          center.z + (Math.random() - 0.5) * size.z
        );
      }
      targets[i * 3] = tmp.x;
      targets[i * 3 + 1] = tmp.y;
      targets[i * 3 + 2] = tmp.z;
      // start espalhado em volta
      const dir = new THREE.Vector3(
        Math.random() - 0.5,
        Math.random() - 0.5,
        Math.random() - 0.5
      ).normalize();
      const d = 0.8 + Math.random() * 1.4;
      starts[i * 3] = tmp.x + dir.x * d;
      starts[i * 3 + 1] = tmp.y + dir.y * d;
      starts[i * 3 + 2] = tmp.z + dir.z * d;
      delays[i] = Math.random() * 0.3;
      positions[i * 3] = starts[i * 3];
      positions[i * 3 + 1] = starts[i * 3 + 1];
      positions[i * 3 + 2] = starts[i * 3 + 2];
    }
    if (points.current) {
      const attr = points.current.geometry.attributes.position as THREE.BufferAttribute;
      attr.needsUpdate = true;
    }
    built.current = true;
  };

  useFrame((state, dt) => {
    const g = group.current;
    if (!g) return;
    const now = state.clock.elapsedTime;

    if (!built.current) buildTargets();

    // progresso do spawn
    if (active) {
      if (spawnStart.current < 0) spawnStart.current = now;
    } else {
      spawnStart.current = -1;
    }
    const p =
      spawnStart.current >= 0
        ? THREE.MathUtils.clamp((now - spawnStart.current) / SPAWN_DUR, 0, 1)
        : 0;

    // partículas convergindo (staggered) start → target
    if (points.current && built.current) {
      const arr = (points.current.geometry.attributes.position as THREE.BufferAttribute)
        .array as Float32Array;
      const span = 1 - 0.3;
      for (let i = 0; i < N; i++) {
        const e = smootherstep((p - delays[i]) / span);
        const ix = i * 3;
        arr[ix] = THREE.MathUtils.lerp(starts[ix], targets[ix], e);
        arr[ix + 1] = THREE.MathUtils.lerp(starts[ix + 1], targets[ix + 1], e);
        arr[ix + 2] = THREE.MathUtils.lerp(starts[ix + 2], targets[ix + 2], e);
      }
      (points.current.geometry.attributes.position as THREE.BufferAttribute).needsUpdate = true;
      // opacidade das partículas: forte enquanto monta, some no fim
      const fade = p < 0.78 ? Math.min(1, p / 0.12) : Math.max(0, 1 - (p - 0.78) / 0.22);
      (points.current.material as THREE.PointsMaterial).opacity = fade;
      points.current.visible = p > 0.001 && p < 0.999;
    }

    // macaco sólido surge (0→100%) na segunda metade
    const solid = smootherstep((p - 0.5) / 0.5);
    for (const m of matsRef.current) m.opacity = solid;

    // ---- caminhar seguindo o cursor (após materializar) ----
    const halfW = viewport.width / 2 - 0.7;
    const target = (mouseX.current * 2 - 1) * halfW;
    const prev = cur.current;
    cur.current = THREE.MathUtils.damp(cur.current, target, 4, dt);
    g.position.x = cur.current;

    const vel = cur.current - prev;
    const moving = Math.abs(vel) > 0.0025;
    const dir = vel > 0 ? 1 : -1;
    if (moving) g.rotation.y = THREE.MathUtils.damp(g.rotation.y, dir * 0.85, 6, dt);

    // toca animação real (Walk / Idle) após materializar
    if (p > 0.9) {
      const want = moving ? "Walk" : "Idle";
      if (currentClip.current !== want && actions[want]) {
        const prevAct = currentClip.current ? actions[currentClip.current] : null;
        actions[want]!.reset().fadeIn(0.25).play();
        if (prevAct) prevAct.fadeOut(0.25);
        currentClip.current = want;
      }
    }
  });

  return (
    <group ref={group}>
      {/* offset estático: pés perto da base do strip (sem Center, que erra em skinned mesh) */}
      <group position={[0, -0.85, 0]}>
        <primitive object={scene} scale={0.625} />
      </group>

      <points ref={points}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          color="#c4f24a"
          size={0.035}
          sizeAttenuation
          transparent
          opacity={0}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}

export default function MascotWalker() {
  const mouseX = useRef(0.5);
  const containerRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.current = e.clientX / window.innerWidth;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setShow(entry.isIntersecting), {
      threshold: 0,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden
      className={`pointer-events-none absolute inset-x-0 bottom-0 z-20 hidden h-[150px] transition-opacity duration-500 ease-out md:block ${
        show ? "opacity-100" : "opacity-0"
      }`}
    >
      <Canvas
        frameloop={show ? "always" : "never"}
        orthographic
        camera={{ zoom: 82, position: [0, 0, 10] }}
        gl={{ alpha: true }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[3, 6, 4]} intensity={1.6} />
        <pointLight position={[-4, 2, 2]} intensity={1.1} color="#a6ce39" />
        <Suspense fallback={null}>
          <Monkey mouseX={mouseX} active={show} />
          <ContactShadows
            position={[0, -0.85, 0]}
            opacity={0.45}
            scale={3}
            blur={2.6}
            far={2}
            color="#000000"
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
