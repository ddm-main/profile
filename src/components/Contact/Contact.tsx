"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { Reveal, RevealWords } from "@/components/ui/Reveal";
import styles from "./Contact.module.scss";

type Errors = Partial<Record<"name" | "email" | "message", string>>;
type Status = { tone: "idle" | "ok" | "bad"; text: string };

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "", company: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>({ tone: "idle", text: "Replies usually within a day" });
  const [sending, setSending] = useState(false);

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    setErrors((v) => ({ ...v, [k]: undefined }));
  };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    setErrors({});
    setStatus({ tone: "idle", text: "Sending…" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (res.ok && data.ok) {
        setStatus({ tone: "ok", text: "Message received — I'll be in touch." });
        setForm({ name: "", email: "", message: "", company: "" });
      } else if (res.status === 422 && data.errors) {
        setErrors(data.errors as Errors);
        setStatus({ tone: "bad", text: "Please check the highlighted fields." });
      } else {
        setStatus({ tone: "bad", text: data.error ?? "Something went wrong. Try email instead." });
      }
    } catch {
      // The API isn't reachable (offline, or a static export) — fall back to mail.
      const subject = encodeURIComponent(`Portfolio enquiry — ${form.name || "Hello"}`);
      const body = encodeURIComponent(`${form.message}\n\n—\n${form.name}\n${form.email}`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setStatus({ tone: "idle", text: "Opening your mail app…" });
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.grid}>
        <div>
          <Reveal y={12}>
            <span className={styles.eyebrow}>Contact</span>
          </Reveal>
          <h2 className={styles.title}>
            <RevealWords text="Let's build something" /> <em><RevealWords text="secure" delay={0.16} /></em>
          </h2>
          <Reveal delay={0.12}>
            <p className={styles.sub}>
              Open to IT Manager and IAM / Data Security roles, and happy to talk about identity
              architecture, compliance readiness or automating security operations.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className={styles.links}>
              <a href={`mailto:${profile.email}`} className={styles.link}>
                <span className={styles.icon}>✉</span>
                <span>
                  <small>Email</small>
                  <strong>{profile.email}</strong>
                </span>
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className={styles.link}>
                <span className={styles.icon}>in</span>
                <span>
                  <small>LinkedIn</small>
                  <strong>Deepak Dongare</strong>
                </span>
              </a>
              <div className={styles.link}>
                <span className={styles.icon}>◎</span>
                <span>
                  <small>Location</small>
                  <strong>{profile.location}</strong>
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.14} y={32}>
          <form className={styles.form} onSubmit={onSubmit} noValidate>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="c-name">Your name</label>
              <input
                id="c-name" name="name" autoComplete="name" required
                value={form.name} onChange={set("name")}
                className={`${styles.input} ${errors.name ? styles.invalid : ""}`}
                placeholder="Jane Doe"
                aria-invalid={Boolean(errors.name)}
              />
              {errors.name && <span className={styles.error}>{errors.name}</span>}
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="c-email">Email</label>
              <input
                id="c-email" name="email" type="email" autoComplete="email" required
                value={form.email} onChange={set("email")}
                className={`${styles.input} ${errors.email ? styles.invalid : ""}`}
                placeholder="jane@company.com"
                aria-invalid={Boolean(errors.email)}
              />
              {errors.email && <span className={styles.error}>{errors.email}</span>}
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="c-msg">Message</label>
              <textarea
                id="c-msg" name="message" rows={4} required
                value={form.message} onChange={set("message")}
                className={`${styles.textarea} ${errors.message ? styles.invalid : ""}`}
                placeholder="What are you working on?"
                aria-invalid={Boolean(errors.message)}
              />
              {errors.message && <span className={styles.error}>{errors.message}</span>}
            </div>

            {/* Honeypot — hidden from people, tempting to bots. */}
            <input
              className={styles.honey} tabIndex={-1} autoComplete="off" aria-hidden="true"
              name="company" value={form.company} onChange={set("company")}
            />

            <button type="submit" className={styles.submit} disabled={sending}>
              {sending ? "Sending…" : "Send message"}
            </button>

            <p className={styles.status} data-tone={status.tone} role="status" aria-live="polite">
              {status.text}
            </p>
          </form>
        </Reveal>
      </div>

      <motion.div
        className={styles.bigName}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 1, ease: EASE }}
        aria-hidden="true"
      >
        <span className={`${styles.bigLine} ${styles.bigFill}`}>{profile.first}</span>
        <span className={`${styles.bigLine} ${styles.bigStroke}`}>{profile.last}</span>
      </motion.div>
    </section>
  );
}
