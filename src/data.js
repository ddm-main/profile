export const roles = [
  "IAM Engineer",
  "Cloud Security Specialist",
  "Automation Builder",
  "Vibe-Coder",
];

export const stack = [
  "Microsoft Entra ID", "MFA / Conditional Access", "Sophos Firewall",
  "TISAX Compliance", "Microsoft 365", "Azure", "AWS", "PowerShell",
  "Python", "Access Governance", "Zero Trust", "SIEM Basics",
];

export const experience = [
  {
    role: "IT Manager — IAM & Data Security",
    org: "RealThingks GmbH",
    period: "Current",
    desc: "Own identity governance and data security across the org — Entra ID, MFA policy, Sophos firewall hardening, and TISAX compliance readiness.",
  },
  {
    role: "Cloud Engineer",
    org: "FinIQ Consulting",
    period: "5 years",
    desc: "Built and ran Azure and AWS environments for fintech and global banking clients — infrastructure, security, and reliability at scale.",
  },
];

export const projects = [
  {
    index: "01",
    category: "Automation Agent",
    title: "JobPilot",
    desc: "An autonomous job-application agent that opens job portals, applies on my behalf, and tracks results — I just read the summary. Strict observe → fill → verify checks run before any submission ever goes through.",
    stack: ["React 19", "Vite", "Supabase", "Chrome MV3"],
  },
  {
    index: "02",
    category: "DevOps Tooling",
    title: "J.A.R.V.I.S.",
    desc: "A Windows batch automation script that keeps repositories in sync across the RealThingks-AI GitHub organization — rebuilt over several rounds to reach minimal output and reliable handling of divergent git histories.",
    stack: ["Batch Scripting", "Git", "Org Sync"],
  },
  {
    index: "03",
    category: "AI Tooling",
    title: "Claude Skills Suite",
    desc: "A maintained suite of Claude skills powering an AI-assisted build workflow — a Lovable co-build skill, a CRM module scaffolder, and a BFSI context pack, rebuilt for token efficiency without losing capability.",
    stack: ["Claude Skills", "Lovable", "Workflow Design"],
  },
];

export const stats = [
  { value: 9, suffix: "+", label: "Years in IT & Security" },
  { value: 5, suffix: "", label: "Years in Cloud Engineering" },
  { value: 3, suffix: "", label: "Self-built Automation Tools" },
  { value: 100, suffix: "%", label: "AI-Assisted Build Workflow" },
];
