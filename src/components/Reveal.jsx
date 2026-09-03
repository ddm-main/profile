import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];

export default function Reveal({ children, delay = 0, y = 26, className = "", once = true, amount = 0.3 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.85, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/*
 * Word-by-word mask reveal.
 * The viewport trigger lives on the OUTER span: the inner spans start translated
 * 110% down and are fully clipped by their overflow-hidden parent, so an
 * IntersectionObserver placed on them would report ratio 0 forever and never fire.
 */
export function RevealWords({ text, className = "", delay = 0, once = true }) {
  const words = String(text).split(" ");
  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.15 }}
      transition={{ staggerChildren: 0.055, delayChildren: delay }}
    >
      {words.map((w, i) => (
        <span
          key={`${w}-${i}`}
          className={`inline-block overflow-hidden align-bottom pb-[0.09em] ${
            i < words.length - 1 ? "mr-[0.19em]" : ""
          }`}
        >
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: "112%" },
              show: { y: "0%", transition: { duration: 0.9, ease: EASE } },
            }}
          >
            {w}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
