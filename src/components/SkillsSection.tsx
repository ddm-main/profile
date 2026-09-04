import React from 'react';
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
  return (
    <section
      id="skills"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-6 sm:pt-8 pb-16 sm:pb-24 px-4 sm:px-12 lg:px-20 overflow-hidden flex flex-col justify-center"
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
          className="flex items-center space-x-4 mb-5 sm:mb-7"
        >
          <span
            className="text-xs sm:text-[13px] font-semibold tracking-[0.3em] uppercase text-[#D4AF37]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            03 / TECH MATRIX
          </span>
          <div className="w-16 sm:w-20 h-[1.5px] bg-gradient-to-r from-[#D4AF37] via-[#D4AF37]/50 to-transparent" />
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 sm:mb-10"
        >
          <h2
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.9] sm:leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          aria-label="5 Core Pillars. Technical Mastery."
          >
            <span aria-hidden="true" className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#F4EFEA] to-[#D8CEC4] drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
              5 CORE PILLARS.
            </span>
            <span aria-hidden="true" className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFF5DC] via-[#F5D59A] to-[#D4A95D] drop-shadow-[0_8px_25px_rgba(212,169,93,0.4)]">
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
          className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6"
        >
          {bentoCategories.map((block) => (
            <motion.div
              key={block.title}
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.25 } }}
              className={`${block.colSpan} relative p-5 sm:p-7 lg:p-9 rounded-sm border border-[#8C6D4F]/40 bg-[#100D0B]/90 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-[#D4AF37] hover:shadow-[0_16px_45px_rgba(212,175,55,0.18)] cursor-pointer group`}
            >
              {/* Top Subtle Border Highlight */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Corner Minimal Pins */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#D4AF37]/50 group-hover:border-[#D4AF37] transition-colors duration-300" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#D4AF37]/50 group-hover:border-[#D4AF37] transition-colors duration-300" />

              {/* Card Meta Header */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs sm:text-[12.5px] font-mono font-bold tracking-[0.2em] uppercase text-[#D4AF37] group-hover:text-[#FFF5DC] transition-colors">
                  {block.badge}
                </span>
                <span className="text-xs sm:text-[12.5px] font-mono font-semibold px-3 py-1 border border-[#8C6D4F]/50 text-[#FFFFFF] bg-[#1C1712] group-hover:border-[#D4AF37] transition-all">
                  {block.stat}
                </span>
              </div>

              {/* Title */}
              <h3
                className="text-3xl sm:text-[2.5rem] font-medium tracking-wide text-white mb-3 group-hover:text-[#FFF5DC] transition-colors leading-none"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {block.title}
              </h3>

              {/* Description */}
              <p
                className="text-sm sm:text-[15px] text-[#E0D4C8] font-normal leading-relaxed mb-6 max-w-xl group-hover:text-[#FFFFFF] transition-colors"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {block.description}
              </p>

              {/* Interactive Tag Chips */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#8C6D4F]/30">
                {block.items.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs sm:text-[13px] font-medium tracking-[0.12em] uppercase rounded-sm border border-[#8C6D4F]/50 bg-[#1A1511] text-[#F5EDE4] group-hover:border-[#D4AF37] group-hover:bg-[#251D16] group-hover:text-white transition-all duration-300"
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