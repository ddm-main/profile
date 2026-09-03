import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const bentoCategories = [
  {
    title: 'IAM & IDENTITY SECURITY',
    badge: 'ZERO TRUST ARCHITECTURE',
    items: [
      'Microsoft Entra ID',
      'IAM Architecture',
      'Identity Governance',
      'PIM & Privileged Access',
      'MFA & Conditional Access',
      'Access Reviews & RBAC',
      'JML Lifecycle',
      'SSO & Federation',
      'OAuth 2.0 & SAML',
      'SCIM Provisioning',
    ],
    description:
      'Robust enterprise identity governance and Zero Trust architecture built on Microsoft Entra ID. Specialized in least-privilege access, PIM just-in-time elevation, Conditional Access, and automated JML provisioning.',
    stat: 'ENTRA ID & PIM',
    colSpan: 'lg:col-span-7',
  },
  {
    title: 'IT LEADERSHIP & OPERATIONS',
    badge: 'EXECUTIVE MANAGEMENT',
    items: [
      'IT Management',
      'IT Strategy & Governance',
      'Technology Roadmap',
      'Team Leadership',
      'Vendor Management',
      'Procurement & Licensing',
      'IT Budget Planning',
    ],
    description:
      'Strategic IT leadership aligning infrastructure roadmaps with enterprise business priorities. Comprehensive oversight of budgets, contracts, cross-functional teams, and service delivery.',
    stat: '9+ YEARS',
    colSpan: 'lg:col-span-5',
  },
  {
    title: 'CYBERSECURITY & COMPLIANCE',
    badge: 'DEFENSE IN DEPTH',
    items: [
      'TISAX Readiness',
      'Microsoft Defender',
      'Microsoft Intune',
      'Sophos Firewall',
      'Sophos Endpoint',
      'VPN / NAT',
      'Network Segmentation',
      'Firewall Hardening',
      'SSL/TLS',
    ],
    description:
      'Multi-layered defense across identity, endpoint, and perimeter security. Spearheading TISAX audit readiness, firewall hardening, micro-segmentation, and cloud endpoint management.',
    stat: 'TISAX READY',
    colSpan: 'lg:col-span-5',
  },
  {
    title: 'CLOUD & INFRASTRUCTURE',
    badge: 'HYBRID CLOUD',
    items: [
      'Microsoft Azure',
      'Amazon Web Services (AWS)',
      'Microsoft 365 (Exchange, Teams)',
      'Windows Server',
      'Active Directory',
      'Hyper-V & VMware',
      'Backup & Disaster Recovery',
      'Business Continuity Planning',
    ],
    description:
      'Designing and operating scalable hybrid cloud architectures across Microsoft Azure and AWS. Administration of M365 enterprise tenants, virtualization, Active Directory, and business continuity systems.',
    stat: 'AZURE & AWS',
    colSpan: 'lg:col-span-7',
  },
  {
    title: 'NETWORKING, AUTOMATION & AI',
    badge: 'NEXT-GEN VELOCITY',
    items: [
      'Enterprise LAN/WAN',
      'TCP/IP Routing & Switching',
      'DNS & Secure Remote Access',
      'PowerShell Scripting',
      'Python Automation',
      'Generative AI & LLMs',
      'Agentic Workflows',
      'Git & GitHub',
    ],
    description:
      'Enterprise network engineering coupled with modern automation pipelines. Hands-on configuration of LAN/WAN, routing, and remote gateways, accelerated with PowerShell, Python, and agentic AI workflows.',
    stat: 'POWERSHELL & AI',
    colSpan: 'lg:col-span-12',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const SkillsSection: React.FC = () => {
  const [, setHoveredIdx] = useState<number | null>(null);

  return (
    <section
      id="skills"
      className="relative w-screen bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-8 pb-24 px-6 sm:px-12 lg:px-20 overflow-hidden flex flex-col justify-center"
    >
      {/* Ambient Glows */}
      <div className="absolute top-1/3 left-1/4 w-[34rem] h-[34rem] bg-[#D4AF37]/5 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[28rem] h-[28rem] bg-[#8C6D4F]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-7"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            03 / TECH MATRIX
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              5 CORE PILLARS.
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              TECHNICAL MASTERY.
            </span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6"
        >
          {bentoCategories.map((block, idx) => (
            <motion.div
              key={block.title}
              variants={cardVariants}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              whileHover={{ y: -5, transition: { duration: 0.25 } }}
              className={`${block.colSpan} relative p-8 sm:p-9 rounded-sm border border-[#8C6D4F]/35 bg-[#100D0B]/85 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-[#D4AF37]/80 hover:shadow-[0_16px_45px_rgba(212,175,55,0.14)] cursor-pointer group`}
            >
              {/* Top Subtle Border Highlight */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Corner Minimal Pins */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#D4AF37]/40 group-hover:border-[#D4AF37] transition-colors duration-300" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#D4AF37]/40 group-hover:border-[#D4AF37] transition-colors duration-300" />

              {/* Card Meta Header */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#D4AF37] group-hover:text-[#F3DBB3] transition-colors">
                  {block.badge}
                </span>
                <span className="text-[10px] font-mono px-2.5 py-0.5 border border-[#8C6D4F]/40 text-[#C4B5A5] bg-[#17130F] group-hover:border-[#D4AF37]/50 group-hover:text-white transition-all">
                  {block.stat}
                </span>
              </div>

              {/* Title */}
              <h3
                className="text-3xl sm:text-4xl font-normal tracking-wide text-white mb-3 group-hover:text-[#F7E7C4] transition-colors"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {block.title}
              </h3>

              {/* Description */}
              <p
                className="text-xs sm:text-sm text-[#A8988B] font-light leading-relaxed mb-7 max-w-xl group-hover:text-[#D5CBC0] transition-colors"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {block.description}
              </p>

              {/* Interactive Tag Chips */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#8C6D4F]/20">
                {block.items.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 text-[10.5px] font-medium tracking-[0.16em] uppercase rounded-sm border border-[#8C6D4F]/35 bg-[#171310] text-[#E8D7C5] group-hover:border-[#D4AF37]/50 group-hover:bg-[#1F1914] group-hover:text-white transition-all duration-300"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default SkillsSection;