import { stackGroups } from "@/data/profile";
import { Reveal, RevealWords } from "@/components/ui/Reveal";
import TiltCard from "@/components/ui/TiltCard";
import styles from "./Stack.module.scss";

export default function Stack() {
  return (
    <section id="stack" className={styles.section}>
      <div className={styles.head}>
        <Reveal y={12}>
          <span className={styles.eyebrow}>Capabilities</span>
        </Reveal>
        <h2 className={styles.title}>
          <RevealWords text="Technologies I work with" />
        </h2>
        <Reveal delay={0.1}>
          <p className={styles.sub}>
            The tools I use day to day to secure identities, harden infrastructure and automate
            the parts that should never be manual.
          </p>
        </Reveal>
      </div>

      <div className={styles.grid}>
        {stackGroups.map((g, i) => (
          <Reveal key={g.label} delay={i * 0.08}>
            <TiltCard className={`${styles.card} ${styles[g.hue]}`} max={4}>
              <div className={styles.cardHead}>
                <span className={styles.num}>0{i + 1}</span>
                <h3 className={styles.cardTitle}>{g.label}</h3>
              </div>
              <div className={styles.pills}>
                {g.items.map((it) => (
                  <span key={it} className={styles.pill}>
                    {it}
                  </span>
                ))}
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
