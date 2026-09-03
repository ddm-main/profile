import { projects } from "@/data/profile";
import { Reveal, RevealWords } from "@/components/ui/Reveal";
import styles from "./Work.module.scss";

export default function Work() {
  return (
    <section id="work" className={styles.section}>
      <div className={styles.head}>
        <Reveal y={12}>
          <span className={styles.eyebrow}>Selected work</span>
        </Reveal>
        <h2 className={styles.title}>
          <RevealWords text="Things I built for myself" />
        </h2>
        <Reveal delay={0.1}>
          <p className={styles.sub}>
            Not client work — tools I built because the manual version was wasting my time. Each
            one runs in my own workflow today.
          </p>
        </Reveal>
      </div>

      <div className={styles.list}>
        {projects.map((p, i) => (
          <Reveal key={p.n} delay={i * 0.08}>
            <article className={`${styles.card} ${styles[p.hue]}`}>
              <span className={styles.num}>{p.n}</span>

              <div className={styles.body}>
                <div className={styles.tagRow}>
                  <span className={styles.cat}>{p.category}</span>
                  <span>{p.year}</span>
                </div>
                <h3 className={styles.name}>{p.title}</h3>
                <p className={styles.desc}>{p.desc}</p>
                <p className={styles.quote}>{p.highlight}</p>
                <div className={styles.stack}>
                  {p.stack.map((s) => (
                    <span key={s} className={styles.chip}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <span className={styles.arrow} aria-hidden="true">
                ↗
              </span>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
