import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [big, setBig] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const rx = useSpring(x, { stiffness: 320, damping: 32, mass: 0.35 });
  const ry = useSpring(y, { stiffness: 320, damping: 32, mass: 0.35 });

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    setEnabled(true);

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target.closest?.("a, button, [data-cursor], input, textarea");
      setBig(Boolean(t));
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        style={{ x, y }}
        className="cursor-dot pointer-events-none fixed left-0 top-0 z-[95] -ml-[3px] -mt-[3px] h-1.5 w-1.5 rounded-full bg-accent mix-blend-multiply"
      />
      <motion.div
        style={{ x: rx, y: ry }}
        animate={{ scale: big ? 1.9 : 1, opacity: big ? 0.5 : 0.85 }}
        transition={{ duration: 0.25 }}
        className="cursor-ring pointer-events-none fixed left-0 top-0 z-[95] -ml-4 -mt-4 h-8 w-8 rounded-full border border-ink/35"
      />
    </>
  );
}
