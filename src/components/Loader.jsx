import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const duration = 1200;
    let raf;
    const tick = () => {
      const elapsed = Date.now() - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);
      if (pct < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setDone(true), 250);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] bg-bg flex flex-col items-center justify-center"
          exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
        >
          <div className="font-mono text-xs text-ok tracking-widest mb-4">
            AUTHENTICATING SESSION
          </div>
          <div className="w-56 h-[2px] bg-line overflow-hidden rounded-full">
            <motion.div
              className="h-full bg-accent"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="font-mono text-[11px] text-muted mt-3">{progress}%</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
