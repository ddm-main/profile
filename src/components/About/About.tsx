"use client";

import Image from "next/image";
import { profile, principles, stats } from "@/data/profile";
import { Reveal, RevealWords } from "@/components/ui/Reveal";
import TiltCard from "@/components/ui/TiltCard";
import Counter from "@/components/ui/Counter";
import styles from "./About.module.scss";

export default function About() {
  const [years, cloud, tools, ai] = stats;

  return (
    <section id="about" className={styles.section}>
      <div className={styles.head}>
        <Reveal y={12}>
          <span className={styles.eyebrow}>About</span>
        </Reveal>
        <h2 className={styles.title}>
          <RevealWords text="Hello, I'm" />
          <br />
          <em>
            <RevealWords text={profile.name} delay={0.1} />
          </em>
        </h2>
      </div>

      <div className={styles.bento}>
        <Reveal className={styles.aIntro}>
          <TiltCard className={styles.cell} max={4}>
            <div className={styles.introBody}>
              <p>{profile.intro}</p>
              <p>{profile.before}</p>
              <div className={styles.chips}>
                {["Entra ID", "Zero Trust", "TISAX", "Azure", "AWS", "PowerShell"].map((c) => (
                  <span key={c} className={styles.chip}>
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </TiltCard>
        </Reveal>

        <Reveal className={styles.aPort} delay={0.08}>
          <div className={`${styles.cell} ${styles.flush} ${styles.portraitFrame}`}>
            <Image
              src="/deepak-portrait.webp"
              alt={`${profile.name}, ${profile.role}`}
              width={800}
              height={1000}
              className={styles.portraitImg}
            />
            <span className={styles.portraitGlow} />
            <span className={styles.badge}>
              <i className={styles.dot} />
              Open to opportunities
            </span>
          </div>
        </Reveal>

        <Reveal className={styles.aS1} delay={0.12}>
          <TiltCard className={`${styles.cell} ${styles.stat}`}>
            <span className={styles.statValue}>
              <Counter value={years.value} suffix={years.suffix} />
            </span>
            <span className={styles.statLabel}>{years.label}</span>
          </TiltCard>
        </Reveal>

        <Reveal className={styles.aS2} delay={0.16}>
          <TiltCard className={`${styles.cell} ${styles.stat}`}>
            <span className={styles.statValue}>
              <Counter value={cloud.value} suffix={cloud.suffix} />
            </span>
            <span className={styles.statLabel}>{cloud.label}</span>
          </TiltCard>
        </Reveal>

        <Reveal className={styles.aS3} delay={0.2}>
          <TiltCard className={`${styles.cell} ${styles.stat}`}>
            <span className={styles.statValue}>
              <Counter value={tools.value} suffix={tools.suffix} />
            </span>
            <span className={styles.statLabel}>{tools.label}</span>
          </TiltCard>
        </Reveal>

        <Reveal className={styles.aS4} delay={0.24}>
          <TiltCard className={`${styles.cell} ${styles.stat}`}>
            <span className={styles.statValue}>
              <Counter value={ai.value} suffix={ai.suffix} />
            </span>
            <span className={styles.statLabel}>{ai.label}</span>
          </TiltCard>
        </Reveal>

        <Reveal className={styles.aPrinc} delay={0.1}>
          <TiltCard className={styles.cell} max={3}>
            <p className={styles.pTitle}>How I work</p>
            <div className={styles.pList}>
              {principles.map((p, i) => (
                <div key={p.k} className={styles.pItem}>
                  <i>0{i + 1}</i>
                  <div>
                    <h3>{p.k}</h3>
                    <p>{p.v}</p>
                  </div>
                </div>
              ))}
            </div>
          </TiltCard>
        </Reveal>

        <Reveal className={styles.aMeta} delay={0.14}>
          <TiltCard className={styles.cell}>
            <dl className={styles.metaList}>
              <div className={styles.metaRow}>
                <dt>Based in</dt>
                <dd>{profile.location}</dd>
              </div>
              <div className={styles.metaRow}>
                <dt>Currently</dt>
                <dd>{profile.company}</dd>
              </div>
              <div className={styles.metaRow}>
                <dt>Focus</dt>
                <dd>IAM · Data Security</dd>
              </div>
            </dl>
          </TiltCard>
        </Reveal>
      </div>
    </section>
  );
}
