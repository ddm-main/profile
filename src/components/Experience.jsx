import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { experience } from "../data";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";

export default function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.75", "end 0.65"] });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="experience" className="gutter py-24 sm:py-32 md:py-36">
      <SectionHead
        eyebrow="Career"
        title="Execution road map"
        sub="Nine years moving from hands-on infrastructure to owning identity and data security for a global engineering organisation."
      />

      <div ref={ref} className="relative mt-16 pl-8 sm:pl-12">
        {/* rail */}
        <div className="absolute left-[3px] sm:left-[7px] top-2 bottom-2 w-px bg-line" />
        <motion.div
          style={{ scaleY: lineScale }}
          className="absolute left-[3px] sm:left-[7px] top-2 bottom-2 w-px origin-top bg-accent"
        />

        <div className="space-y-14 sm:space-y-16">
          {experience.map((e, i) => (
            <Reveal key={e.n} delay={i * 0.1}>
              <div className="relative">
                <span className="absolute -left-8 sm:-left-12 top-2 grid h-[9px] w-[9px] place-items-center rounded-full bg-accent ring-4 ring-paper" />

                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[10px] tracking-[0.18em] uppercase text-muted">
                  <span className="text-accent">{e.n}</span>
                  <span className="h-px w-5 bg-line" />
                  <span>{e.period}</span>
                  <span className="h-1 w-1 rounded-full bg-line" />
                  <span>{e.location}</span>
                </div>

                <h3 className="mt-3 font-display font-semibold tracking-tight text-[clamp(1.35rem,3.4vw,2rem)] leading-tight">
                  {e.role}
                </h3>
                <div className="mt-1.5 font-serif italic text-lg sm:text-xl text-accent">
                  {e.org}
                </div>

                <p className="mt-4 max-w-[60ch] text-[14.5px] sm:text-[15.5px] leading-[1.78] text-muted">
                  {e.desc}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {e.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-line px-3 py-1 font-mono text-[10.5px] tracking-wide text-ink2"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
