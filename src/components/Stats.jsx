import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { stats } from "../data";

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf;
    const start = performance.now();
    const DUR = 1400;
    const tick = (t) => {
      const e = Math.min((t - start) / DUR, 1);
      setN(Math.round((1 - Math.pow(1 - e, 3)) * value));
      if (e < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {n}
      <span className="text-accent">{suffix}</span>
    </span>
  );
}

export default function Stats() {
  return (
    <section className="gutter py-14 sm:py-20">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-paper p-6 sm:p-8">
            <div className="font-display font-bold tracking-supertight leading-none text-[clamp(2.4rem,7vw,4rem)]">
              <Counter value={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-3 font-mono text-[10px] sm:text-[10.5px] tracking-[0.16em] uppercase text-muted leading-relaxed">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
