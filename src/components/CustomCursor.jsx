import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isFine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setEnabled(isFine && !reduced);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    let ringX = 0, ringY = 0, mouseX = 0, mouseY = 0;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }
    };
    const onOver = (e) => {
      const interactive = e.target.closest("a, button, [data-cursor]");
      if (ringRef.current) {
        ringRef.current.style.width = interactive ? "44px" : "28px";
        ringRef.current.style.height = interactive ? "44px" : "28px";
        ringRef.current.style.borderColor = interactive ? "#e8a33d" : "#232733";
      }
    };

    let raf;
    const loop = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 w-1.5 h-1.5 bg-accent rounded-full z-[90] -translate-x-1/2 -translate-y-1/2"
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 w-7 h-7 border border-line rounded-full z-[90] -translate-x-1/2 -translate-y-1/2 transition-[width,height,border-color] duration-200"
      />
    </>
  );
}
