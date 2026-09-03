import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "../data";

const EASE = [0.16, 1, 0.3, 1];

export default function Loader() {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let raf;
    const start = performance.now();
    const DUR = 1500;
    const tick = (t) => {
      const e = Math.min((t - start) / DUR, 1);
      const eased = 1 - Math.pow(1 - e, 3);
      setCount(Math.round(eased * 100));
      if (e < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 320);
    };
    raf = requestAnimationFrame(tick);
    document.body.style.overflow = "hidden";
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (done) document.body.style.overflow = "";
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ y: "-100%" }}
          transition={{ duration: 0.95, ease: EASE }}
          className="fixed inset-0 z-[100] bg-ink text-paper flex flex-col justify-between gutter py-10 safe-t safe-b"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-[10px] tracking-[0.24em] uppercase text-paper/45"
          >
            Portfolio — 2026
          </motion.div>

          <div className="flex-1 flex items-center">
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1, ease: EASE, delay: 0.15 }}
                className="kinetic text-paper text-[clamp(2.6rem,11vw,8rem)]"
              >
                {profile.first}
                <span className="text-accent">.</span>
                <br className="sm:hidden" />
                <span className="stroke-paper"> {profile.last}</span>
              </motion.h1>
            </div>
          </div>

          <div>
            <div className="flex items-end justify-between">
              <span className="font-mono text-[10px] tracking-[0.24em] uppercase text-paper/45">
                Loading experience
              </span>
              <span className="font-display font-semibold tabular-nums text-[clamp(2rem,7vw,4rem)] leading-none tracking-tightest">
                {count}
                <span className="text-accent">%</span>
              </span>
            </div>
            <div className="mt-4 h-px w-full bg-paper/15 overflow-hidden">
              <motion.div
                className="h-full bg-accent origin-left"
                style={{ scaleX: count / 100 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
