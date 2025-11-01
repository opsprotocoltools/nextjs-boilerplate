'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

// Teach TS that <points> is a valid JSX tag from three.js
declare global {
  namespace JSX {
    interface IntrinsicElements {
      points: any;
    }
  }
}

function SparkleCloud() {
  const pointsRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const count = 1500;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 1 + Math.random() * 1.8;
      const phi = Math.random() * Math.PI * 2;
      const costheta = Math.random() * 2 - 1;
      const theta = Math.acos(costheta);
      arr[i * 3 + 0] = r * Math.sin(theta) * Math.cos(phi);
      arr[i * 3 + 1] = r * Math.sin(theta) * Math.sin(phi);
      arr[i * 3 + 2] = r * Math.cos(theta);
    }
    return arr;
  }, []);

  const geom = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return g;
  }, [positions]);

  const mat = useMemo(() => {
    const m = new THREE.PointsMaterial({
      size: 0.02,
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
    });
    m.color = new THREE.Color('#7dd3fc'); // cyan in your palette
    return m;
  }, []);

  useFrame((_, d) => {
    if (pointsRef.current) pointsRef.current.rotation.y += d * 0.12;
  });

  return <points ref={pointsRef} geometry={geom} material={mat} />;
}

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
      <ambientLight intensity={0.6} />
      <SparkleCloud />
    </Canvas>
  );
}
