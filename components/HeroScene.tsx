'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
import * as THREE from 'three'

function Network() {
  const mesh = useRef<THREE.Points>(null)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  // make 400 glowing dots
  const particles = new Float32Array(400 * 3)
  for (let i = 0; i < particles.length; i++) {
    particles[i] = (Math.random() - 0.5) * 8
  }

  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute('position', new THREE.BufferAttribute(particles, 3))

  const material = new THREE.PointsMaterial({
    color: 0x22d3ee,
    size: 0.05,
    transparent: true,
    opacity: 0.8,
  })

  // update world a little every frame
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += (mouse.x * 0.001 - mesh.current.rotation.y) * 0.05
      mesh.current.rotation.x += (-mouse.y * 0.001 - mesh.current.rotation.x) * 0.05
    }
  })

  return (
    <points
      ref={mesh}
      geometry={geometry}
      material={material}
      onPointerMove={(e) => setMouse({ x: e.clientX, y: e.clientY })}
    />
  )
}

export default function HeroScene() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
      <Canvas camera={{ position: [0, 0, 6], fov: 75 }}>
        <ambientLight intensity={1} />
        <Network />
      </Canvas>

      {/* text and logo on top */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          color: 'white',
          zIndex: 2,
        }}
      >
        <img src="/logo.png" alt="Ops Protocol Tools" width="240" height="240" />
        <h1 style={{ fontSize: '2.5rem', marginTop: '20px' }}>Automate clarity. Monetize discipline.</h1>
        <p style={{ marginTop: '10px', opacity: 0.8 }}>
          Systems that print revenue while you sleep.
        </p>
        <div style={{ marginTop: '20px' }}>
          <button style={{ marginRight: '12px', padding: '10px 24px', borderRadius: '8px', background: '#22d3ee', border: 'none', cursor: 'pointer' }}>
            Explore the Suite
          </button>
          <button style={{ padding: '10px 24px', borderRadius: '8px', background: 'transparent', border: '1px solid #22d3ee', color: '#22d3ee', cursor: 'pointer' }}>
            See Automations
          </button>
        </div>
      </div>
    </div>
  )
}
