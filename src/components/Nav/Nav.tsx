"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks, profile } from "@/data/profile";
import styles from "./Nav.module.scss";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Nav() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => Boolean(el));
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      {/* Sits above the sheet so the close button stays reachable. */}
      <header className={styles.header}>
        <div className={`${styles.bar} ${scrolled && !open ? styles.scrolled : ""}`}>
          <a
            href="#top"
            onClick={() => setOpen(false)}
            className={`${styles.brand} ${open ? styles.brandOpen : ""}`}
          >
            {profile.first}
            <em>.</em>
            <span>{profile.last.slice(0, 1)}</span>
          </a>

          <nav className={styles.links} aria-label="Sections">
            {navLinks.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className={`${styles.link} ${active === l.id ? styles.active : ""}`}
              >
                {l.label}
                {active === l.id && (
                  <motion.span layoutId="nav-dot" className={styles.dot} transition={{ duration: 0.35, ease: EASE }} />
                )}
              </a>
            ))}
          </nav>

          <div className={styles.right}>
            {!open && (
              <a href="#contact" className={styles.cta}>
                <span className={styles.pulse} />
                Available
              </a>
            )}

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className={styles.burger}
            >
              <span className={`${styles.burgerInner} ${open ? styles.burgerOpen : ""}`}>
                <span />
                <span />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.sheet}
            initial={{ clipPath: "circle(0% at 92% 4%)" }}
            animate={{ clipPath: "circle(150% at 92% 4%)" }}
            exit={{ clipPath: "circle(0% at 92% 4%)" }}
            transition={{ duration: 0.65, ease: EASE }}
          >
            <nav className={styles.sheetNav} aria-label="Sections">
              {navLinks.map((l, i) => (
                <span key={l.id} style={{ overflow: "hidden" }}>
                  <motion.a
                    href={`#${l.id}`}
                    onClick={() => setOpen(false)}
                    className={styles.sheetItem}
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 0.65, delay: 0.1 + i * 0.06, ease: EASE }}
                  >
                    <i>0{i + 1}</i>
                    {l.label}
                  </motion.a>
                </span>
              ))}
            </nav>

            <motion.div
              className={styles.sheetFoot}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42, duration: 0.5 }}
            >
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <hr />
              <div className={styles.sheetMeta}>
                <span>{profile.location}</span>
                <b>Available for work</b>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
