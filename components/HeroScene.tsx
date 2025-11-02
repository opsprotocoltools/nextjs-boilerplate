"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { PointMaterial, OrbitControls } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function Stars() {
  const pointsRef = useRef<THREE.Points>(null!);

  const positions = useMemo(() => {
    const n = 1500;
    const arr = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      const r = 1.8 + Math.random() * 2.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      arr[i * 3 + 0] = x;
      arr[i * 3 + 1] = y;
      arr[i * 3 + 2] = z;
    }
    return arr;
  }, []);

  const geom = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return g;
  }, [positions]);

  useFrame((_, delta) => {
    if (pointsRef.current) pointsRef.current.rotation.y += delta * 0.1;
  });

  return (
    <points ref={pointsRef} geometry={geom}>
      <PointMaterial transparent size={0.01} color="#9AEAF9" />
    </points>
  );
}

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <color attach="background" args={["#0b1220"]} />
      <Stars />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
