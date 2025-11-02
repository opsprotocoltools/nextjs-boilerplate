// /types/r3f.d.ts
import type { ThreeElements } from "@react-three/fiber";

declare global {
  namespace JSX {
    // Add all @react-three/fiber JSX tags (points, mesh, etc.)
    interface IntrinsicElements extends ThreeElements {
      // Allow `<primitive />` when you pass raw THREE objects
      primitive: any;
    }
  }
}

export {};
