import { useState } from "react";
import { motion } from "framer-motion";
import { profile } from "../data";
import { RevealWords } from "./Reveal";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";

const EASE = [0.16, 1, 0.3, 1];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry — ${form.name || "Hello"}`);
    const body = encodeURIComponent(
      `${form.message}\n\n—\n${form.name}\n${form.email}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const field =
    "w-full rounded-xl border border-line bg-paper px-4 py-3.5 text-[15px] text-ink placeholder:text-faint outline-none transition-all duration-300 focus:border-accent focus:ring-4 focus:ring-accent/10";

  return (
    <section id="contact" className="relative gutter pt-24 sm:pt-32 md:pt-36 pb-16 overflow-hidden">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-20 items-start">
        <div>
          <Reveal y={14}>
            <div className="inline-flex items-center gap-2.5 font-mono text-[10px] sm:text-[11px] tracking-[0.22em] uppercase text-accent">
              <span className="h-px w-7 bg-accent/50" />
              Contact
            </div>
          </Reveal>

          <h2 className="mt-5 font-display font-semibold tracking-tightest leading-[0.98] text-[clamp(2.1rem,6vw,4.25rem)]">
            <RevealWords text="Let's build something" />{" "}
            <span className="font-serif italic font-normal text-accent">
              <RevealWords text="secure" delay={0.18} />
            </span>
          </h2>

          <Reveal delay={0.14}>
            <p className="mt-6 max-w-[52ch] text-[15px] sm:text-base leading-[1.78] text-muted">
              Open to IT Manager and IAM / Data Security roles, and happy to talk about
              identity architecture, compliance readiness or automating security operations.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-9 space-y-5">
              <a
                href={`mailto:${profile.email}`}
                data-cursor
                className="group flex items-center gap-4"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line text-muted transition-colors duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-paper">
                  ✉
                </span>
                <span>
                  <span className="block font-mono text-[10px] tracking-[0.18em] uppercase text-faint">
                    Email
                  </span>
                  <span className="sweep text-[15px] sm:text-base text-ink break-all">
                    {profile.email}
                  </span>
                </span>
              </a>

              <div className="flex items-center gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line text-muted">
                  ◎
                </span>
                <span>
                  <span className="block font-mono text-[10px] tracking-[0.18em] uppercase text-faint">
                    Location
                  </span>
                  <span className="text-[15px] sm:text-base text-ink">{profile.location}</span>
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Form */}
        <Reveal delay={0.16} y={34}>
          <form
            onSubmit={onSubmit}
            className="rounded-3xl border border-line bg-paper2/50 p-6 sm:p-8"
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="c-name" className="mb-2 block font-mono text-[10px] tracking-[0.18em] uppercase text-muted">
                  Your name
                </label>
                <input
                  id="c-name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={field}
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label htmlFor="c-email" className="mb-2 block font-mono text-[10px] tracking-[0.18em] uppercase text-muted">
                  Email
                </label>
                <input
                  id="c-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={field}
                  placeholder="jane@company.com"
                />
              </div>
              <div>
                <label htmlFor="c-msg" className="mb-2 block font-mono text-[10px] tracking-[0.18em] uppercase text-muted">
                  Message
                </label>
                <textarea
                  id="c-msg"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${field} resize-none`}
                  placeholder="What are you working on?"
                />
              </div>
            </div>

            <Magnetic
              as="button"
              type="submit"
              strength={0.22}
              className="mt-6 w-full rounded-xl bg-ink px-6 py-4 text-[14px] font-medium text-paper transition-colors duration-300 hover:bg-accent"
            >
              Send message
            </Magnetic>

            <p className="mt-3 text-center font-mono text-[10px] tracking-[0.14em] uppercase text-faint">
              Opens in your mail app
            </p>
          </form>
        </Reveal>
      </div>

      {/* Giant name */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.1, ease: EASE }}
        className="mt-20 sm:mt-28 select-none"
        aria-hidden="true"
      >
        <div className="kinetic leading-[0.8] text-[clamp(3rem,17vw,15rem)] text-ink/[0.09]">
          {profile.first}
        </div>
        <div className="kinetic leading-[0.8] text-[clamp(3rem,17vw,15rem)] text-right stroke-ink opacity-25">
          {profile.last}
        </div>
      </motion.div>
    </section>
  );
}
