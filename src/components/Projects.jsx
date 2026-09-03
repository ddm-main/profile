import { projects } from "../data";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="projects" className="relative bg-ink text-paper py-24 sm:py-32 md:py-36 grain">
      <div className="gutter">
        <SectionHead
          dark
          eyebrow="Selected work"
          title="Things I built for myself"
          sub="Not client work — tools I built because the manual version was wasting my time. Each one runs in my own workflow today."
        />

        <div className="mt-14 space-y-px overflow-hidden rounded-2xl border border-paper/10">
          {projects.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.08}>
              <article className="group relative bg-paper/[0.035] hover:bg-paper/[0.075] transition-colors duration-500 p-6 sm:p-9 md:p-11">
                {/* hover accent bar */}
                <span className="absolute left-0 top-0 h-full w-[2px] origin-top scale-y-0 bg-accent transition-transform duration-500 group-hover:scale-y-100" />

                <div className="grid gap-6 md:grid-cols-[auto_minmax(0,1fr)_auto] md:gap-10 md:items-start">
                  <div className="font-display font-bold text-[clamp(2rem,6vw,3.4rem)] leading-none tracking-supertight text-paper/15 transition-colors duration-500 group-hover:text-accent">
                    {p.n}
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] tracking-[0.18em] uppercase text-paper/45">
                      <span className="rounded-full border border-paper/15 px-3 py-1">
                        {p.category}
                      </span>
                      <span>{p.year}</span>
                    </div>

                    <h3 className="mt-4 font-display font-semibold tracking-tight text-[clamp(1.5rem,4.2vw,2.4rem)] leading-tight">
                      {p.title}
                    </h3>

                    <p className="mt-4 max-w-[62ch] text-[14.5px] sm:text-[15.5px] leading-[1.78] text-paper/60">
                      {p.desc}
                    </p>

                    <p className="mt-4 border-l-2 border-accent/70 pl-4 font-serif italic text-[15px] sm:text-base text-accent-soft">
                      {p.highlight}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {p.stack.map((s) => (
                        <span
                          key={s}
                          className="rounded-full bg-paper/[0.07] px-3 py-1.5 font-mono text-[10.5px] tracking-wide text-paper/70"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="hidden md:block pt-2">
                    <span className="grid h-11 w-11 place-items-center rounded-full border border-paper/15 text-paper/40 transition-all duration-500 group-hover:border-accent group-hover:bg-accent group-hover:text-ink group-hover:rotate-45">
                      ↗
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
