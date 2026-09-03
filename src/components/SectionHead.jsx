import { RevealWords } from "./Reveal";
import Reveal from "./Reveal";

export default function SectionHead({ eyebrow, title, sub, align = "left", dark = false }) {
  const center = align === "center";
  return (
    <div className={`${center ? "text-center mx-auto" : ""} max-w-3xl`}>
      <Reveal y={14}>
        <div
          className={`inline-flex items-center gap-2.5 font-mono text-[10px] sm:text-[11px] tracking-[0.22em] uppercase ${
            dark ? "text-accent-soft" : "text-accent"
          }`}
        >
          <span className={`h-px w-7 ${dark ? "bg-accent-soft/60" : "bg-accent/50"}`} />
          {eyebrow}
        </div>
      </Reveal>

      <h2
        className={`mt-4 font-display font-semibold tracking-tightest leading-[0.98] text-[clamp(2rem,5.6vw,4rem)] ${
          dark ? "text-paper" : "text-ink"
        }`}
      >
        <RevealWords text={title} />
      </h2>

      {sub && (
        <Reveal delay={0.12}>
          <p
            className={`mt-5 text-[15px] sm:text-base leading-[1.75] max-w-[58ch] ${
              dark ? "text-paper/60" : "text-muted"
            } ${center ? "mx-auto" : ""}`}
          >
            {sub}
          </p>
        </Reveal>
      )}
    </div>
  );
}
