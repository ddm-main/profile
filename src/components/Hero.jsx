import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { roles } from "../data";

function MagneticButton({ children, className, href }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    x.set(relX * 0.35);
    y.set(relY * 0.35);
  };
  const reset = () => { x.set(0); y.set(0); };

  return (
    <motion.a
      ref={ref}
      href={href}
      data-cursor
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x, y }}
      className={className}
    >
      {children}
    </motion.a>
  );
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const spotlightX = useMotionValue(-400);
  const spotlightY = useMotionValue(-400);
  const bg = useTransform(
    [spotlightX, spotlightY],
    ([sx, sy]) => `radial-gradient(600px circle at ${sx}px ${sy}px, rgba(232,163,61,0.08), transparent 70%)`
  );

  useEffect(() => {
    const id = setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 2400);
    return () => clearInterval(id);
  }, []);

  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    spotlightX.set(e.clientX - rect.left);
    spotlightY.set(e.clientY - rect.top);
  };

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 1.4 } },
  };
  const item = {
    hidden: { opacity: 0, y: 22 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section
      id="top"
      onMouseMove={onMove}
      className="relative min-h-screen flex flex-col justify-center px-[6vw] pt-24 pb-16 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid opacity-20 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_10%,transparent_70%)]" />
      <motion.div className="absolute inset-0 pointer-events-none" style={{ background: bg }} />

      <motion.div variants={container} initial="hidden" animate="show" className="relative z-10">
        <motion.div variants={item} className="inline-flex items-center gap-2 text-ok font-mono text-xs tracking-widest mb-7">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ok opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-ok" />
          </span>
          SYSTEM STATUS: OPEN TO OPPORTUNITIES
        </motion.div>

        <motion.h1 variants={item} className="font-display font-semibold text-[clamp(2.4rem,7vw,5.2rem)] leading-[1.02] tracking-tight max-w-[16ch]">
          Hi, I'm Deepak.
        </motion.h1>

        <motion.div variants={item} className="font-body text-muted text-[clamp(1.05rem,2.2vw,1.5rem)] mt-5 h-[1.6em] flex items-center gap-2 flex-wrap">
          <span>I secure identities and automate the boring parts —</span>
          <span className="relative inline-block font-mono font-medium text-accent min-w-[13ch]">
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="inline-block"
              >
                {roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
            <span className="border-r-2 border-accent ml-0.5 animate-blink" />
          </span>
        </motion.div>

        <motion.p variants={item} className="max-w-[52ch] text-muted text-[15px] leading-[1.7] mt-6">
          IT Manager focused on Identity & Access Management and data security, with 9+ years
          across infrastructure, cloud, and cybersecurity. Off the clock, I build AI-assisted
          automation tools that remove the manual grind from my own workflow.
        </motion.p>

        <motion.div variants={item} className="flex gap-4 mt-9 flex-wrap">
          <MagneticButton
            href="#projects"
            className="inline-block font-mono text-[13px] font-semibold bg-accent text-bg px-7 py-3.5 rounded-sm"
          >
            View My Work
          </MagneticButton>
          <MagneticButton
            href="#contact"
            className="inline-block font-mono text-[13px] border border-line text-text px-7 py-3.5 rounded-sm"
          >
            Contact Me
          </MagneticButton>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute bottom-10 left-[6vw] flex items-center gap-2 text-muted font-mono text-[11px] tracking-widest"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          ↓
        </motion.span>
        SCROLL
      </motion.div>
    </section>
  );
}
