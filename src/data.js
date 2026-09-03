export const profile = {
  name: "Deepak Dongare",
  first: "Deepak",
  last: "Dongare",
  role: "IT Manager — Identity & Access Management & Data Security",
  company: "RealThingks GmbH",
  location: "Pune, India",
  email: "msdeepakdon@gmail.com",
  github: "https://github.com/realthingks-54",
  linkedin: "https://www.linkedin.com/in/deepak-dongare",
  available: true,
  intro:
    "I run identity and data security for a global engineering company — Entra ID, MFA policy, access governance, firewall hardening and TISAX readiness. Nine years in, I still build most of my own tooling: AI-assisted automation that removes the manual grind from security operations.",
  short:
    "IT Manager focused on Identity & Access Management and Data Security, with 9+ years across IT infrastructure, cloud and cybersecurity.",
};

// Giant words that swap behind the portrait as you scroll the hero
export const kinetic = [
  { top: "IDENTITY", bottom: "& ACCESS" },
  { top: "CLOUD", bottom: "SECURITY" },
  { top: "AI", bottom: "AUTOMATION" },
];

export const roles = [
  "Identity & Access Management",
  "Cloud Security",
  "Automation Builder",
  "Vibe-Coder",
];

export const stackGroups = [
  {
    label: "Identity & Access",
    items: ["Microsoft Entra ID", "MFA / Conditional Access", "Access Governance", "Zero Trust", "Privileged Access", "SSO & Provisioning"],
  },
  {
    label: "Security & Compliance",
    items: ["Sophos Firewall Hardening", "TISAX Readiness", "Data Security", "Endpoint Protection", "Security Baselines", "Incident Response"],
  },
  {
    label: "Cloud & Infrastructure",
    items: ["Microsoft Azure", "AWS", "Microsoft 365", "Intune", "Windows Server", "Networking"],
  },
  {
    label: "Automation & Build",
    items: ["PowerShell", "Python", "React + Vite", "Supabase", "Chrome Extensions (MV3)", "AI-Assisted Development"],
  },
];

export const marquee = [
  "Entra ID", "MFA", "Conditional Access", "TISAX", "Sophos", "Azure", "AWS",
  "Microsoft 365", "PowerShell", "Python", "Zero Trust", "Access Governance",
];

export const experience = [
  {
    n: "01",
    role: "IT Manager — IAM & Data Security",
    org: "RealThingks GmbH",
    period: "Current",
    location: "Pune, India",
    desc: "Own identity governance and data security across the organisation — Entra ID architecture, MFA and conditional access policy, joiner-mover-leaver access reviews, Sophos firewall hardening, and TISAX compliance readiness.",
    tags: ["Entra ID", "MFA Policy", "TISAX", "Sophos", "Access Reviews"],
  },
  {
    n: "02",
    role: "Cloud Engineer",
    org: "FinIQ Consulting",
    period: "5 years",
    location: "Pune, India",
    desc: "Built and operated Azure and AWS environments for fintech and global banking clients — infrastructure delivery, security controls and reliability for regulated, high-availability workloads.",
    tags: ["Azure", "AWS", "BFSI", "Infrastructure", "Reliability"],
  },
];

export const projects = [
  {
    n: "01",
    category: "Autonomous Agent",
    title: "JobPilot",
    year: "2026",
    desc: "An autonomous job-application agent that opens job portals, applies on my behalf and tracks every result — I only read the summary. Runs a strict observe → fill → read-back → verify loop, and parks anything ambiguous as NEEDS_YOU rather than guessing.",
    stack: ["TanStack Start", "React 19", "Supabase", "Chrome MV3"],
    highlight: "A submit click is only ever SUBMITTING — never success.",
  },
  {
    n: "02",
    category: "DevOps Tooling",
    title: "J.A.R.V.I.S.",
    year: "2025",
    desc: "A Windows batch automation tool that keeps repositories in sync across the RealThingks-AI GitHub organisation. Rebuilt over several rounds until it reached minimal output, auto-proceeding defaults and robust handling of divergent git histories.",
    stack: ["Batch Scripting", "Git", "Org Sync"],
    highlight: "Minimal output, zero prompts, survives divergent histories.",
  },
  {
    n: "03",
    category: "AI Tooling",
    title: "Claude Skills Suite",
    year: "2026",
    desc: "A maintained suite of Claude skills powering an AI-assisted build workflow — a Lovable co-build skill, a CRM module scaffolder, a spec builder and a BFSI context pack. Rebuilt lovable-v2 from scratch and cut it from ~313 to ~126 lines without losing capability.",
    stack: ["Claude Skills", "Lovable", "Workflow Design"],
    highlight: "60% smaller, same capability — token efficiency as a design goal.",
  },
];

export const stats = [
  { value: 9, suffix: "+", label: "Years in IT & Security" },
  { value: 5, suffix: "", label: "Years Cloud Engineering" },
  { value: 3, suffix: "", label: "Tools Built Solo" },
  { value: 100, suffix: "%", label: "AI-Assisted Workflow" },
];

export const principles = [
  { k: "Least privilege by default", v: "Access is granted for a reason, reviewed on a schedule, and removed the day it stops being needed." },
  { k: "Verify, never assume", v: "Every change gets read back and confirmed. An action started is not an action completed." },
  { k: "Automate the grind", v: "If a task repeats, it becomes a script. Human attention belongs on judgement calls." },
];
