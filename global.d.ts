// global.d.ts — make React Three Fiber JSX valid globally
import '@react-three/fiber';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      primitive: any;
      points: any;
    }
  }
}
