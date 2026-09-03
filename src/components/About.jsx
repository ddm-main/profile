import { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Reveal from "./Reveal";

function TiltCard() {
  const ref = useRef(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const rotateX = useTransform(y, [0, 1], [10, -10]);
  const rotateY = useTransform(x, [0, 1], [-10, 10]);

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  };
  const reset = () => { x.set(0.5); y.set(0.5); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", transformPerspective: 800 }}
      className="border border-line bg-panel rounded-sm overflow-hidden max-w-[240px]"
      data-cursor
    >
      <div className="aspect-[4/5] bg-gradient-to-br from-panel2 to-[#0d0f13] flex items-center justify-center font-mono text-xs text-line border-b border-line">
        PHOTO
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 text-[12px] text-ok mb-1.5 font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-ok" />
          ACCESS: VERIFIED
        </div>
        <div className="text-muted text-[12px] font-mono">PUNE, INDIA</div>
      </div>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="pt-28 pb-24 px-[6vw]">
      <div className="grid md:grid-cols-[280px_1fr] gap-16 items-start">
        <Reveal>
          <TiltCard />
        </Reveal>
        <div>
          <Reveal>
            <span className="text-accent font-mono text-xs tracking-widest block mb-2.5">// ABOUT</span>
            <h2 className="font-display font-semibold text-[clamp(1.6rem,3.4vw,2.4rem)] max-w-[20ch] mb-6">
              A gatekeeper by trade, a builder by habit.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-muted text-[15.5px] leading-[1.85] max-w-[62ch] mb-4">
              I manage <strong className="text-text font-medium">Identity and Access Management and Data Security</strong> at
              RealThingks GmbH — governing who gets into what, hardening the perimeter, and
              keeping compliance frameworks like TISAX satisfied. Before that, five years as a
              Cloud Engineer building Azure and AWS environments for fintech and global banking clients.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-muted text-[15.5px] leading-[1.85] max-w-[62ch] mb-4">
              I also describe myself as a <strong className="text-text font-medium">vibe-coder</strong> — I ship and maintain real
              applications by directing AI tools rather than writing every line by hand, and I
              treat that workflow itself as something worth engineering well.
            </p>
          </Reveal>
          <Reveal delay={0.3} className="flex flex-wrap gap-2.5 mt-6">
            {["IAM & Governance", "Cloud Security", "AI-Assisted Automation"].map((t) => (
              <span key={t} className="border border-line px-4 py-2 rounded-sm text-[12px] text-muted">
                {t}
              </span>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
