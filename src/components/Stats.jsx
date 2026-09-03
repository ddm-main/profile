import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { stats } from "../data";

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { duration: 1.4, bounce: 0 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) motionVal.set(value);
  }, [inView, value]);

  useEffect(() => {
    const unsub = spring.on("change", (v) => setDisplay(Math.round(v)));
    return unsub;
  }, [spring]);

  return (
    <span ref={ref} className="font-display font-semibold text-[clamp(2rem,4vw,3rem)] text-text">
      {display}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="px-[6vw] pb-24">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border border-line rounded-sm p-8 bg-panel/40">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex flex-col gap-1.5"
          >
            <Counter value={s.value} suffix={s.suffix} />
            <span className="text-muted text-[12px] font-mono leading-snug">{s.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
