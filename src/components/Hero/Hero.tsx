"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";
import { kinetic, profile } from "@/data/profile";
import styles from "./Hero.module.scss";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Bricolage Grotesque at weight 800 runs roughly 0.62em per uppercase glyph.
 * Sizing each word to its own length keeps the longest one ("AUTOMATION")
 * inside the gutters instead of bleeding off the right edge.
 */
function fitFontSize(word: string) {
  const n = Math.max(word.replace(/\s/g, "").length, 1);
  const vw = Math.min(15, 128 / n);
  return `clamp(2.5rem, ${vw.toFixed(2)}vw, 12rem)`;
}

function KineticLayer({
  progress,
  index,
  total,
  reduced,
}: {
  progress: MotionValue<number>;
  index: number;
  total: number;
  reduced: boolean | null;
}) {
  const slice = 1 / total;
  const start = index * slice;
  const end = start + slice;
  const pad = slice * 0.3;

  // The first layer is already on screen at rest so it must not fade in, and the
  // last must hold to the end so the hero never fades to an empty screen.
  const first = index === 0;
  const last = index === total - 1;
  const inA = first ? -0.001 : start - pad;
  const inB = first ? 0 : start + pad * 0.5;
  const outA = last ? 1 : end - pad * 0.5;
  const outB = last ? 1.001 : end + pad;

  const opacity = useTransform(progress, [inA, inB, outA, outB], [0, 1, 1, last ? 1 : 0]);
  const y = useTransform(progress, [inA, outB], reduced ? [0, 0] : [56, last ? -18 : -56]);
  const blur = useTransform(
    progress,
    [inA, inB, outA, outB],
    ["blur(12px)", "blur(0px)", "blur(0px)", last ? "blur(0px)" : "blur(12px)"],
  );

  const word = kinetic[index];

  return (
    <motion.div
      className={styles.kinetic}
      style={{ opacity, y, filter: reduced ? "none" : blur }}
      aria-hidden="true"
    >
      <span className={`${styles.word} ${styles.wordTop}`} style={{ fontSize: fitFontSize(word.top) }}>
        {word.top}
      </span>
      <span
        className={`${styles.word} ${styles.wordBottom}`}
        style={{ fontSize: fitFontSize(word.bottom) }}
      >
        {word.bottom}
      </span>
    </motion.div>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const p = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.35,
    restDelta: 0.0005,
  });

  const scale = useTransform(p, [0, 0.45, 1], reduced ? [1, 1, 1] : [0.88, 1.05, 1.16]);
  const y = useTransform(p, [0, 1], reduced ? ["0%", "0%"] : ["5%", "-7%"]);
  const x = useTransform(p, [0, 0.5, 1], reduced ? ["0%", "0%", "0%"] : ["-2.5%", "1.5%", "-1%"]);
  const rotate = useTransform(p, [0, 0.5, 1], reduced ? [0, 0, 0] : [-1.8, 0.5, 1.6]);
  const gray = useTransform(p, [0, 0.2, 0.8, 1], [0.3, 0, 0, 0.18]);
  const filter = useTransform(gray, (g) => `grayscale(${g}) saturate(${1.05 - g * 0.1})`);
  const shadowOpacity = useTransform(p, [0, 0.5, 1], [0.16, 0.24, 0.12]);
  const uiOpacity = useTransform(p, [0, 0.1], [1, 0]);

  return (
    <section id="top" ref={ref} className={styles.hero}>
      <div className={styles.stage}>
        <div className={styles.layer}>
          {kinetic.map((_, i) => (
            <KineticLayer key={i} progress={p} index={i} total={kinetic.length} reduced={reduced} />
          ))}

          <div className={styles.portraitWrap}>
            <motion.div
              className={styles.portrait}
              style={{ scale, y, x, rotate }}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.35, ease: EASE }}
            >
              <motion.div className={styles.shadow} style={{ opacity: shadowOpacity }} />
              <motion.div style={{ filter: reduced ? "none" : filter, height: "100%" }}>
                <Image
                  src="/deepak-cut.webp"
                  alt={`${profile.name}, ${profile.role}`}
                  width={900}
                  height={1378}
                  priority
                  className={styles.portraitImg}
                />
              </motion.div>
            </motion.div>
          </div>

          <motion.div className={styles.ui} style={{ opacity: uiOpacity }}>
            <motion.div
              className={styles.intro}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
            >
              <p className={styles.hi}>
                Hi, I&apos;m <strong>{profile.first}</strong>
              </p>
              <p>
                IT Manager securing identities and data — and building the automation that
                keeps it honest.
              </p>
            </motion.div>

            <div className={styles.footRow}>
              <motion.div
                className={styles.scrollCue}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.65, ease: EASE }}
              >
                <span data-arrow>↓</span>
                Scroll to begin
              </motion.div>

              <motion.div
                className={styles.meta}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.75, ease: EASE }}
              >
                <div>{profile.location}</div>
                <strong>9+ Years · IAM &amp; Security</strong>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
