import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Magnetic({ children, className = "", href, as = "a", strength = 0.3, ...rest }) {
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 260, damping: 22, mass: 0.4 });
  const y = useSpring(my, { stiffness: 260, damping: 22, mass: 0.4 });

  const onMove = (e) => {
    const el = ref.current;
    if (!el || window.matchMedia("(hover: none)").matches) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - r.left - r.width / 2) * strength);
    my.set((e.clientY - r.top - r.height / 2) * strength);
  };
  const reset = () => { mx.set(0); my.set(0); };

  const Cmp = as === "button" ? motion.button : motion.a;

  return (
    <Cmp
      ref={ref}
      href={href}
      data-cursor="lg"
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ x, y }}
      className={className}
      {...rest}
    >
      {children}
    </Cmp>
  );
}
