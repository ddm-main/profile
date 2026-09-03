import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { profile, principles } from "../data";
import Reveal, { RevealWords } from "./Reveal";
import portrait from "../assets/deepak-portrait.webp";

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const badgeRotate = useTransform(scrollYProgress, [0, 1], [0, 180]);

  return (
    <section id="about" ref={ref} className="relative gutter py-24 sm:py-32 md:py-40">
      <div className="grid gap-12 md:gap-16 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20 items-start">
        {/* Portrait card */}
        <Reveal y={40} className="relative mx-auto w-full max-w-sm lg:max-w-none lg:sticky lg:top-28">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-line bg-paper2">
            <motion.img
              src={portrait}
              alt={`${profile.name}, ${profile.role}`}
              style={{ y: imgY }}
              className="h-full w-full scale-110 object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <div className="flex items-center gap-2.5 rounded-full bg-paper/90 backdrop-blur px-4 py-2.5 w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-ink">
                  Open to opportunities
                </span>
              </div>
            </div>
          </div>

          {/* rotating stamp */}
          <motion.div
            style={{ rotate: badgeRotate }}
            className="absolute -top-6 -right-4 hidden sm:grid h-24 w-24 place-items-center rounded-full bg-ink text-paper"
          >
            <div className="text-center leading-tight">
              <div className="font-display font-bold text-xl">9+</div>
              <div className="font-mono text-[8px] tracking-[0.16em] uppercase text-paper/60">
                Years
              </div>
            </div>
          </motion.div>
        </Reveal>

        {/* Copy */}
        <div>
          <Reveal y={14}>
            <div className="inline-flex items-center gap-2.5 font-mono text-[10px] sm:text-[11px] tracking-[0.22em] uppercase text-accent">
              <span className="h-px w-7 bg-accent/50" />
              About
            </div>
          </Reveal>

          <h2 className="mt-5 font-display font-semibold tracking-tightest leading-[0.98] text-[clamp(2.1rem,6vw,4.25rem)]">
            <RevealWords text="Hello, I'm" />
            <br />
            <span className="font-serif italic font-normal tracking-tight text-accent">
              <RevealWords text={profile.name} delay={0.1} />
            </span>
          </h2>

          <Reveal delay={0.15}>
            <p className="mt-7 text-[15px] sm:text-[17px] leading-[1.75] text-ink2 max-w-[62ch]">
              {profile.intro}
            </p>
          </Reveal>

          <Reveal delay={0.22}>
            <p className="mt-5 text-[14.5px] sm:text-base leading-[1.8] text-muted max-w-[62ch]">
              Before {profile.company} I spent five years as a Cloud Engineer at FinIQ
              Consulting, running Azure and AWS environments for fintech and global banking
              clients — the kind of regulated work where an access mistake is not a small
              mistake. That background is why I approach security as an operating discipline
              rather than a checklist.
            </p>
          </Reveal>

          {/* Principles */}
          <div className="mt-10 space-y-px overflow-hidden rounded-2xl border border-line">
            {principles.map((p, i) => (
              <Reveal key={p.k} delay={0.28 + i * 0.08}>
                <div className="group bg-paper2/50 hover:bg-paper2 transition-colors duration-400 px-5 sm:px-6 py-5">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-[10px] text-accent shrink-0">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="font-display font-semibold text-[15px] sm:text-base tracking-tight text-ink">
                        {p.k}
                      </h3>
                      <p className="mt-1.5 text-[13.5px] leading-[1.7] text-muted">{p.v}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4}>
            <div className="mt-9 flex flex-wrap gap-x-8 gap-y-4 font-mono text-[10.5px] tracking-[0.16em] uppercase">
              <div>
                <div className="text-faint">Based in</div>
                <div className="mt-1 text-ink normal-case tracking-normal font-body text-sm">
                  {profile.location}
                </div>
              </div>
              <div>
                <div className="text-faint">Currently</div>
                <div className="mt-1 text-ink normal-case tracking-normal font-body text-sm">
                  {profile.company}
                </div>
              </div>
              <div>
                <div className="text-faint">Focus</div>
                <div className="mt-1 text-ink normal-case tracking-normal font-body text-sm">
                  IAM · Data Security
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
