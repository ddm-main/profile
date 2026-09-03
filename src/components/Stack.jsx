import { stackGroups } from "../data";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";

export default function Stack() {
  return (
    <section id="stack" className="relative gutter py-20 sm:py-28 md:py-32 bg-paper2/45 border-y border-line">
      <SectionHead
        eyebrow="Capabilities"
        title="Technologies I work with"
        sub="The tools I use day to day to secure identities, harden infrastructure and automate the parts that should never be manual."
      />

      <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
        {stackGroups.map((g, gi) => (
          <Reveal key={g.label} delay={gi * 0.09} className="bg-paper">
            <div className="h-full p-6 sm:p-8">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-[10px] text-accent">0{gi + 1}</span>
                <h3 className="font-display font-semibold text-[17px] sm:text-lg tracking-tight">
                  {g.label}
                </h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span
                    key={it}
                    data-cursor
                    className="rounded-full border border-line bg-paper2/70 px-3.5 py-1.5 text-[12.5px] text-ink2 transition-all duration-300 hover:border-accent/45 hover:bg-accent/10 hover:text-accent hover:-translate-y-0.5"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
