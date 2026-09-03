import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "framer-motion";
import { kinetic, profile } from "../data";
import cutout from "../assets/deepak-cut.webp";

const EASE = [0.16, 1, 0.3, 1];

/* Archivo 900 uppercase runs ~0.66em per character. Pick a vw size that keeps the
   longest word inside the gutters instead of letting it bleed off the right edge. */
const fitClamp = (word) => {
  const n = Math.max(word.replace(/\s/g, "").length, 1);
  const vw = Math.min(15, 126 / n);
  return `clamp(2.5rem, ${vw.toFixed(2)}vw, 12.5rem)`;
};

/* One giant word-pair layer; fades and slides across its slice of the scroll */
function KineticLayer({ progress, index, total, reduced }) {
  const slice = 1 / total;
  const start = index * slice;
  const end = start + slice;
  const pad = slice * 0.3;

  /* First layer is already on screen at rest; last layer must hold to the end
     so the hero doesn't fade to an empty screen before the next section. */
  const first = index === 0;
  const last = index === total - 1;
  const inA = first ? -0.001 : start - pad;
  const inB = first ? 0 : start + pad * 0.5;
  const outA = last ? 1.0 : end - pad * 0.5;
  const outB = last ? 1.001 : end + pad;

  const opacity = useTransform(progress, [inA, inB, outA, outB], [0, 1, 1, last ? 1 : 0]);
  const y = useTransform(progress, [inA, outB], reduced ? [0, 0] : [56, last ? -20 : -56]);
  const blur = useTransform(
    progress,
    [inA, inB, outA, outB],
    ["blur(10px)", "blur(0px)", "blur(0px)", last ? "blur(0px)" : "blur(10px)"]
  );

  const word = kinetic[index];

  return (
    <motion.div
      style={{ opacity, y, filter: reduced ? "none" : blur }}
      className="absolute inset-0 flex flex-col justify-center gutter pointer-events-none select-none pb-[34svh] sm:pb-[20svh] md:pb-0"
      aria-hidden="true"
    >
      <span
        className="kinetic block whitespace-nowrap text-left text-ink"
        style={{ fontSize: fitClamp(word.top) }}
      >
        {word.top}
      </span>
      <span
        className="kinetic block whitespace-nowrap text-right stroke-ink"
        style={{ fontSize: fitClamp(word.bottom) }}
      >
        {word.bottom}
      </span>
    </motion.div>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const p = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.35,
    restDelta: 0.0005,
  });

  /* Portrait choreography — the part that "moves like the video" */
  const imgScale = useTransform(p, [0, 0.45, 1], reduced ? [1, 1, 1] : [0.88, 1.05, 1.16]);
  const imgY = useTransform(p, [0, 1], reduced ? ["0%", "0%"] : ["5%", "-7%"]);
  const imgX = useTransform(p, [0, 0.5, 1], reduced ? ["0%", "0%", "0%"] : ["-2.5%", "1.5%", "-1%"]);
  const imgRotate = useTransform(p, [0, 0.5, 1], reduced ? [0, 0, 0] : [-1.8, 0.5, 1.6]);
  const imgGray = useTransform(p, [0, 0.2, 0.8, 1], [0.32, 0, 0, 0.2]);
  const imgFilter = useTransform(imgGray, (g) => `grayscale(${g}) contrast(${1 + g * 0.1}) saturate(${1.04 - g * 0.1})`);
  const shadowOpacity = useTransform(p, [0, 0.5, 1], [0.12, 0.2, 0.1]);

  /* Hand-off: the pinned stage just scrolls away, no fade to an empty screen */
  const uiOpacity = useTransform(p, [0, 0.1], [1, 0]);
  const washY = useTransform(p, [0, 1], ["0%", "-16%"]);

  return (
    <section id="top" ref={ref} className="relative h-[230vh] md:h-[280vh]">
      <div className="sticky top-0 h-[100svh] overflow-hidden grain">
        {/* Ambient wash */}
        <motion.div style={{ y: washY }} className="absolute inset-[-20%] pointer-events-none">
          <div className="absolute left-[4%] top-[10%] h-[52vw] w-[52vw] rounded-full bg-accent/[0.14] blur-[90px] animate-drift" />
          <div className="absolute right-[2%] top-[32%] h-[44vw] w-[44vw] rounded-full bg-navy/[0.10] blur-[100px] animate-drift [animation-delay:-8s]" />
          <div className="absolute left-[34%] bottom-[4%] h-[36vw] w-[36vw] rounded-full bg-sage/[0.11] blur-[90px] animate-drift [animation-delay:-15s]" />
        </motion.div>

        <div className="absolute inset-0 hairline-grid opacity-[0.10] sm:opacity-[0.22] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_45%,#000_0%,transparent_70%)]" />

        <div className="absolute inset-0">
          {/* Giant kinetic type, behind the portrait */}
          <div className="absolute inset-0 z-10">
            {kinetic.map((_, i) => (
              <KineticLayer key={i} progress={p} index={i} total={kinetic.length} reduced={reduced} />
            ))}
          </div>

          {/* Portrait */}
          <div className="absolute inset-x-0 bottom-0 z-20 flex justify-center">
            <motion.div
              style={{ scale: imgScale, y: imgY, x: imgX, rotate: imgRotate }}
              className="relative h-[58svh] sm:h-[70svh] md:h-[84svh] origin-bottom will-change-transform"
              initial={{ opacity: 0, y: 56 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.3, delay: 1.55, ease: EASE }}
            >
              <motion.div
                style={{ opacity: shadowOpacity }}
                className="absolute bottom-0 left-1/2 h-[22px] w-[58%] -translate-x-1/2 rounded-[50%] bg-ink blur-xl"
              />
              <motion.img
                src={cutout}
                alt={`${profile.name} — ${profile.role}`}
                style={{ filter: reduced ? "none" : imgFilter }}
                className="h-full w-auto object-contain drop-shadow-[0_26px_44px_rgba(23,21,15,0.18)] [mask-image:linear-gradient(to_bottom,#000_72%,rgba(0,0,0,0.55)_88%,transparent_100%)]"
                fetchPriority="high"
                decoding="async"
              />
            </motion.div>
          </div>

          {/* Scrim: keeps the bottom labels readable where the portrait sits behind them */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[25] h-[22svh] bg-gradient-to-t from-paper via-paper/85 to-transparent sm:h-[16svh] sm:via-paper/60" />

          {/* Foreground UI */}
          <motion.div style={{ opacity: uiOpacity }} className="absolute inset-0 z-30 pointer-events-none">
            <div className="gutter flex h-full flex-col justify-between py-[max(6rem,13svh)] pb-[max(1.75rem,6svh)]">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.85, ease: EASE }}
                className="max-w-[19rem]"
              >
                <p className="font-mono text-[10px] sm:text-[11px] tracking-[0.24em] uppercase text-muted">
                  Hi, I&apos;m <span className="font-medium text-ink">{profile.first}</span>
                </p>
                <p className="mt-3 max-w-[30ch] text-[12.5px] sm:text-[13.5px] leading-[1.65] text-muted">
                  IT Manager securing identities and data — and building the automation that
                  keeps it honest.
                </p>
              </motion.div>

              <div className="flex items-end justify-between gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 2.0, ease: EASE }}
                  className="flex items-center gap-3 font-mono text-[10px] sm:text-[11px] tracking-[0.22em] uppercase text-muted"
                >
                  <motion.span
                    animate={{ y: [0, 7, 0] }}
                    transition={{ repeat: Infinity, duration: 1.9, ease: "easeInOut" }}
                    className="text-sm text-accent"
                  >
                    ↓
                  </motion.span>
                  Scroll to begin
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 2.1, ease: EASE }}
                  className="hidden text-right font-mono text-[10px] uppercase leading-relaxed tracking-[0.2em] text-faint sm:block"
                >
                  <div>{profile.location}</div>
                  <div className="mt-1 text-muted">9+ Years · IAM &amp; Security</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-40 h-20 bg-gradient-to-t from-paper to-transparent" />
      </div>
    </section>
  );
}
