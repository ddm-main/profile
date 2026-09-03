import { stack } from "../data";
import Reveal from "./Reveal";

export default function Stack() {
  const looped = [...stack, ...stack];
  return (
    <section id="stack" className="pb-24 overflow-hidden">
      <div className="px-[6vw]">
        <Reveal>
          <span className="text-accent font-mono text-xs tracking-widest block mb-2.5">// TECHNICAL STACK</span>
          <h2 className="font-display font-semibold text-[clamp(1.6rem,3.4vw,2.4rem)] mb-10">
            Tools I secure and build with.
          </h2>
        </Reveal>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-bg to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-bg to-transparent z-10" />
        <div className="flex gap-3 w-max animate-marquee hover:[animation-play-state:paused]">
          {looped.map((s, i) => (
            <div
              key={i}
              className="border border-line bg-panel px-5 py-3 rounded-sm text-[13px] text-muted whitespace-nowrap hover:text-text hover:border-accent-dim transition-colors font-mono"
            >
              {s}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
