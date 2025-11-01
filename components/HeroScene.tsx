'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

function SparkleCloud() {
  const pointsRef = useRef<THREE.Points>(null!);

  // positions for ~1500 particles in a sphere
  const { geom, mat, points } = useMemo(() => {
    const count = 1500;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 1 + Math.random() * 1.8;
      const phi = Math.random() * Math.PI * 2;
      const u = Math.random() * 2 - 1; // cos(theta)
      const theta = Math.acos(u);
      positions[i * 3 + 0] = r * Math.sin(theta) * Math.cos(phi);
      positions[i * 3 + 1] = r * Math.sin(theta) * Math.sin(phi);
      positions[i * 3 + 2] = r * Math.cos(theta);
    }

    const geom = new THREE.BufferGeometry();
    geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const mat = new THREE.PointsMaterial({
      size: 0.02,
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
      color: new THREE.Color('#7dd3fc'),
    });

    const points = new THREE.Points(geom, mat);
    return { geom, mat, points };
  }, []);

  // spin
  useFrame((_, d) => {
    if (points) points.rotation.y += d * 0.12;
  });

  // keep a ref to the THREE.Points for completeness
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <primitive object={points as any} ref={pointsRef as any} />;
}

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
      <ambientLight intensity={0.6} />
      <SparkleCloud />
    </Canvas>
  );
}
