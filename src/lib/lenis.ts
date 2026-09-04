// Shared Lenis singleton.
//
// Desktop pointer users get one smooth-scroll engine for the whole page:
// ScrollStack drives its pinned-card math off it, and in-page nav links
// (Header, footer "back to top", etc.) route their scrollTo through it too,
// so wheel scrolling and anchor-link jumps feel like the same engine
// instead of fighting each other. Mobile/touch and prefers-reduced-motion
// never get an instance — those scroll natively.
import Lenis from 'lenis';

let instance: Lenis | null = null;
let rafId: number | null = null;

function shouldUseLenis(): boolean {
  if (typeof window === 'undefined') return false;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
  const isTouch = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
  if (isTouch || window.innerWidth < 1024) return false;
  return true;
}

/** Returns the shared Lenis instance, creating it on first use. Returns
 * null on touch devices, narrow viewports, or reduced-motion — callers
 * should fall back to native scrolling in that case. */
export function getLenis(): Lenis | null {
  if (!shouldUseLenis()) return null;
  if (instance) return instance;

  instance = new Lenis({
    duration: 1.1,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 0,
    infinite: false,
  });

  const raf = (time: number) => {
    instance?.raf(time);
    rafId = requestAnimationFrame(raf);
  };
  rafId = requestAnimationFrame(raf);

  return instance;
}

/** Tears down the shared instance. Safe to call even if none exists. */
export function destroyLenis(): void {
  if (rafId !== null) {
    cancelAnimationFrame(rafId);
    rafId = null;
  }
  instance?.destroy();
  instance = null;
}

/** Smooth-scrolls to an element (by id, without the leading #) or to the
 * very top when id is falsy/"top". Uses the shared Lenis engine when
 * available, otherwise falls back to native smooth scrolling. */
export function scrollToTarget(id: string | null | undefined, offset = 0): void {
  const lenis = getLenis();

  if (!id || id === 'top') {
    if (lenis) lenis.scrollTo(0, { offset, duration: 1.2 });
    else window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  const target = document.getElementById(id);
  if (!target) return;

  if (lenis) {
    lenis.scrollTo(target, { offset, duration: 1.2 });
  } else {
    const top = target.getBoundingClientRect().top + window.scrollY + offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}
