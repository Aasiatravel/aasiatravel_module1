import Lenis from 'lenis';

declare global {
  interface Window {
    // We bypass the conflicting 'lenis' property declared by the library
    // using type assertions on (window as any).lenis instead.
  }
}
