import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links.map((l) => document.getElementById(l.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 1.2 }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[6vw] py-5 transition-colors duration-300 ${
        scrolled ? "bg-bg/70 backdrop-blur-md border-b border-line" : "bg-transparent border-b border-transparent"
      }`}
    >
      <a href="#top" className="font-mono text-sm tracking-wide" data-cursor>
        DEEPAK<span className="text-accent">.</span>D
      </a>
      <ul className="hidden md:flex gap-8">
        {links.map((l) => (
          <li key={l.id}>
            <a
              href={`#${l.id}`}
              data-cursor
              className={`relative text-[13px] tracking-wide transition-colors ${
                active === l.id ? "text-text" : "text-muted hover:text-text"
              }`}
            >
              {l.label}
              {active === l.id && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1.5 left-0 right-0 h-[1.5px] bg-accent"
                />
              )}
            </a>
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        data-cursor
        className="font-mono text-xs border border-accent-dim text-accent px-4 py-2 rounded-sm hover:bg-accent hover:text-bg transition-colors"
      >
        Hire Me
      </a>
    </motion.nav>
  );
}
