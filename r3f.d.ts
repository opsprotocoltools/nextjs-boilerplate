// r3f.d.ts — global JSX helpers for React Three Fiber
export {}; // keep this a module but with global augment below

declare global {
  namespace JSX {
    interface IntrinsicElements {
      primitive: any;
      points: any;
    }
  }
}
