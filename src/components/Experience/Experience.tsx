"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { experience } from "@/data/profile";
import { Reveal, RevealWords } from "@/components/ui/Reveal";
import styles from "./Experience.module.scss";

export default function Experience() {
  const railRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ["start 0.75", "end 0.6"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="experience" className={styles.section}>
      <div className={styles.head}>
        <Reveal y={12}>
          <span className={styles.eyebrow}>Career</span>
        </Reveal>
        <h2 className={styles.title}>
          <RevealWords text="Execution road map" />
        </h2>
        <Reveal delay={0.1}>
          <p className={styles.sub}>
            Nine years moving from hands-on infrastructure to owning identity and data security
            for a global engineering organisation.
          </p>
        </Reveal>
      </div>

      <div ref={railRef} className={styles.rail}>
        <span className={styles.line} />
        <motion.span className={styles.lineFill} style={{ scaleY }} />

        <div className={styles.items}>
          {experience.map((e, i) => (
            <Reveal key={e.n} delay={i * 0.1}>
              <article className={styles.card}>
                <span className={styles.node} />
                <div className={styles.metaRow}>
                  <b>{e.n}</b>
                  <hr />
                  <span>{e.period}</span>
                  <i />
                  <span>{e.location}</span>
                </div>
                <h3 className={styles.role}>{e.role}</h3>
                <p className={styles.org}>{e.org}</p>
                <p className={styles.desc}>{e.desc}</p>
                <div className={styles.tags}>
                  {e.tags.map((t) => (
                    <span key={t} className={styles.tag}>
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
