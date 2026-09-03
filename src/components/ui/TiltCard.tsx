"use client";

import { useRef, type ReactNode } from "react";
import styles from "./TiltCard.module.scss";

/**
 * Pointer-reactive 3D tilt with a sheen that tracks the cursor.
 * Writes CSS custom properties directly rather than through React state, so
 * pointermove never triggers a re-render.
 */
export default function TiltCard({
  children,
  className,
  max = 6,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  max?: number;
  as?: "div" | "article" | "li";
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el || window.matchMedia("(hover: none)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;

    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
    el.style.transform = `perspective(900px) rotateX(${(0.5 - py) * max}deg) rotateY(${(px - 0.5) * max}deg) translateZ(0)`;
  };

  const reset = () => {
    const el = ref.current;
    if (el) el.style.transform = "";
  };

  return (
    <Tag
      // @ts-expect-error -- ref type varies with the polymorphic tag
      ref={ref}
      className={`${styles.tilt} ${className ?? ""}`}
      onPointerMove={onMove}
      onPointerLeave={reset}
    >
      {children}
      <span className={styles.sheen} aria-hidden="true" />
    </Tag>
  );
}
