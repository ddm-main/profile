import { motion } from "framer-motion";
import { experience } from "../data";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="px-[6vw] pb-24">
      <Reveal>
        <span className="text-accent font-mono text-xs tracking-widest block mb-2.5">// EXPERIENCE</span>
        <h2 className="font-display font-semibold text-[clamp(1.6rem,3.4vw,2.4rem)] mb-12">
          Where I've worked.
        </h2>
      </Reveal>

      <div className="relative max-w-[820px]">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-line" />
        <div className="flex flex-col gap-12">
          {experience.map((e, i) => (
            <Reveal key={e.org} delay={i * 0.12} className="relative pl-9">
              <span className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full bg-bg border-2 border-accent flex items-center justify-center">
                <motion.span
                  className="w-1.5 h-1.5 rounded-full bg-accent"
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{ repeat: Infinity, duration: 2, delay: i * 0.3 }}
                />
              </span>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                <h3 className="font-display font-semibold text-lg text-text">{e.role}</h3>
                <span className="font-mono text-[11px] text-accent border border-accent-dim px-2 py-0.5 rounded-sm">
                  {e.period}
                </span>
              </div>
              <div className="font-mono text-[12px] text-muted mb-2.5">{e.org}</div>
              <p className="text-muted text-[14.5px] leading-[1.75] max-w-[62ch]">{e.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
