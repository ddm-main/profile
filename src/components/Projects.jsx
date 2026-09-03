import { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data";
import Reveal from "./Reveal";

function ProjectCard({ p, i }) {
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const glow = useTransform(
    [mx, my],
    ([x, y]) => `radial-gradient(240px circle at ${x}px ${y}px, rgba(232,163,61,0.10), transparent 70%)`
  );

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    mx.set(e.clientX - rect.left);
    my.set(e.clientY - rect.top);
  };

  return (
    <Reveal delay={i * 0.12} y={30}>
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        data-cursor
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative border border-line bg-panel rounded-sm p-7 flex flex-col min-h-[340px] overflow-hidden group"
      >
        <motion.div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: glow }} />
        <div className="relative flex justify-between items-start mb-6">
          <span className="font-mono text-[12px] text-muted">// PROJECT {p.index}</span>
          <span className="font-mono text-[11px] text-accent border border-accent-dim px-2.5 py-1 rounded-sm">
            {p.category}
          </span>
        </div>
        <div className="relative flex items-center gap-2 mb-3">
          <h3 className="font-display font-semibold text-xl">{p.title}</h3>
          <ArrowUpRight
            size={16}
            className="text-accent opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-300"
          />
        </div>
        <p className="relative text-muted text-[14px] leading-[1.7] flex-1">{p.desc}</p>
        <div className="relative flex flex-wrap gap-1.5 mt-5">
          {p.stack.map((s) => (
            <span key={s} className="font-mono text-[11px] text-muted border border-line px-2.5 py-1 rounded-sm">
              {s}
            </span>
          ))}
        </div>
      </motion.div>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="px-[6vw] pb-28">
      <Reveal>
        <span className="text-accent font-mono text-xs tracking-widest block mb-2.5">// PORTFOLIO WORK</span>
        <h2 className="font-display font-semibold text-[clamp(1.6rem,3.4vw,2.4rem)] mb-12">
          Featured Engineering Projects
        </h2>
      </Reveal>
      <div className="grid md:grid-cols-3 gap-5">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} p={p} i={i} />
        ))}
      </div>
    </section>
  );
}
