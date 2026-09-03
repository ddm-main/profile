import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Link2, Briefcase, FileText, Check } from "lucide-react";
import Reveal from "./Reveal";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "hello@example.com";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable — no-op */
    }
  };

  return (
    <section id="contact" className="pt-24 pb-16 px-[6vw] border-t border-line">
      <div className="flex flex-col items-start">
        <Reveal>
          <span className="text-accent font-mono text-xs tracking-widest block mb-4">// CONTACT</span>
          <h2 className="font-display font-semibold text-[clamp(1.8rem,4vw,2.8rem)] max-w-[16ch] leading-tight">
            Let's get you access to the right conversation.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-muted max-w-[48ch] leading-[1.8] mt-6 mb-8 text-[15px]">
            Open to IAM, cloud security, and data protection roles — and always glad to talk
            about AI-assisted engineering workflows.
          </p>
        </Reveal>

        <Reveal delay={0.2} className="flex flex-wrap items-center gap-4">
          <button
            onClick={copyEmail}
            data-cursor
            className="group flex items-center gap-2.5 font-mono text-[14px] border-b border-accent-dim pb-1 hover:border-accent transition-colors"
          >
            <Mail size={16} className="text-accent" />
            {email}
            <span className="text-muted text-[11px] ml-1">
              {copied ? <span className="text-ok flex items-center gap-1"><Check size={12}/> copied</span> : "click to copy"}
            </span>
          </button>
        </Reveal>

        <Reveal delay={0.3} className="flex gap-3 mt-8">
          {[
            { icon: Briefcase, label: "LinkedIn" },
            { icon: Link2, label: "GitHub" },
            { icon: FileText, label: "Resume" },
          ].map(({ icon: Icon, label }) => (
            <a
              key={label}
              href="#"
              data-cursor
              className="flex items-center gap-2 border border-line px-4 py-2.5 rounded-sm text-[13px] text-muted hover:text-text hover:border-accent-dim transition-colors"
            >
              <Icon size={14} /> {label}
            </a>
          ))}
        </Reveal>
      </div>

      <Reveal delay={0.15}>
        <div className="font-display font-bold text-[clamp(3rem,14vw,10rem)] leading-[0.85] text-stroke mt-16 select-none">
          DEEPAK
        </div>
      </Reveal>

      <div className="flex justify-between items-center flex-wrap gap-3 pt-6 border-t border-line font-mono text-[12px] text-muted">
        <span>© 2026 DEEPAK DONGARE</span>
        <span>BUILT WITH REACT + FRAMER MOTION</span>
      </div>
    </section>
  );
}
