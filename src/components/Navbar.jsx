import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "../data";

const EASE = [0.16, 1, 0.3, 1];

const links = [
  { id: "about", label: "About" },
  { id: "stack", label: "Stack" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
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
    const sections = links.map((l) => document.getElementById(l.id)).filter(Boolean);
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75, ease: EASE, delay: 1.35 }}
        className="fixed top-0 inset-x-0 z-[85] safe-t"
      >
        <div
          className={`gutter flex items-center justify-between transition-all duration-500 ${
            open
              ? "py-5 border-b border-transparent"
              : scrolled
                ? "py-3 bg-paper/80 backdrop-blur-xl border-b border-line/70"
                : "py-5 border-b border-transparent"
          }`}
        >
          <a
            href="#top"
            data-cursor
            onClick={() => setOpen(false)}
            className={`-my-2 py-2 font-display font-bold tracking-tightest text-[15px] sm:text-base transition-colors duration-300 ${
              open ? "text-paper" : "text-ink"
            }`}
          >
            {profile.first}
            <span className="text-accent">.</span>
            <span className={open ? "font-medium text-paper/50" : "font-medium text-muted"}>
              {profile.last.slice(0, 1)}
            </span>
          </a>

          <nav className={`hidden md:flex items-center gap-9 ${open ? "invisible" : ""}`}>
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                data-cursor
                className={`relative text-[13px] tracking-tight transition-colors duration-300 ${
                  active === l.id ? "text-ink" : "text-muted hover:text-ink"
                }`}
              >
                {l.label}
                {active === l.id && (
                  <motion.span
                    layoutId="nav-dot"
                    className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-accent"
                    transition={{ duration: 0.4, ease: EASE }}
                  />
                )}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              data-cursor
              className={`${open ? "hidden" : "hidden sm:inline-flex"} items-center gap-2 rounded-full border border-ink/15 bg-ink text-paper px-5 py-2.5 text-[12.5px] font-medium hover:bg-accent transition-colors duration-300`}
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-paper/70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-paper" />
              </span>
              Available
            </a>

            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="md:hidden relative h-11 w-11 -mr-2 grid place-items-center"
            >
              <span className="relative block h-3 w-6">
                <motion.span
                  animate={open ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.35, ease: EASE }}
                  className={`absolute left-0 top-0 h-[1.5px] w-6 ${open ? "bg-paper" : "bg-ink"}`}
                />
                <motion.span
                  animate={open ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.35, ease: EASE }}
                  className={`absolute left-0 bottom-0 h-[1.5px] w-6 ${open ? "bg-paper" : "bg-ink"}`}
                />
              </span>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "circle(0% at 92% 4%)" }}
            animate={{ clipPath: "circle(145% at 92% 4%)" }}
            exit={{ clipPath: "circle(0% at 92% 4%)" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="fixed inset-0 z-[80] bg-ink text-paper md:hidden flex flex-col justify-between gutter pt-28 pb-12 safe-b"
          >
            <nav className="flex flex-col gap-1">
              {links.map((l, i) => (
                <div key={l.id} className="overflow-hidden">
                  <motion.a
                    href={`#${l.id}`}
                    onClick={() => setOpen(false)}
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 0.7, delay: 0.12 + i * 0.06, ease: EASE }}
                    className="block font-display font-semibold tracking-tightest text-[clamp(2.2rem,12vw,3.4rem)] leading-[1.12] py-1"
                  >
                    <span className="font-mono text-[11px] align-super text-accent mr-3">
                      0{i + 1}
                    </span>
                    {l.label}
                  </motion.a>
                </div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="space-y-4"
            >
              <a href={`mailto:${profile.email}`} className="block text-paper/70 text-sm break-all">
                {profile.email}
              </a>
              <div className="h-px bg-paper/15" />
              <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.2em] uppercase text-paper/45">
                <span>{profile.location}</span>
                <span className="text-accent">Available for work</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
