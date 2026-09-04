import React from 'react';
import { motion } from 'framer-motion';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

interface Project {
  number: string;
  title: string;
  category: string;
  description: string;
  githubUrl: string;
  tech: string[];
  metrics: { label: string; value: string }[];
}

const projects: Project[] = [
  {
    number: '01',
    title: 'Enterprise IAM & Zero Trust Architecture',
    category: 'IDENTITY SECURITY & GOVERNANCE',
    description:
      'Architected end-to-end enterprise identity governance and Zero Trust security using Microsoft Entra ID. Implemented MFA enforcement, granular Conditional Access policies, Privileged Identity Management (PIM) with just-in-time elevation, automated SCIM lifecycle provisioning, and secure SAML/OIDC SSO.',
    githubUrl: 'https://linkedin.com/in/deepak-dongare',
    tech: [
      'Microsoft Entra ID',
      'Zero Trust',
      'PIM & PAM',
      'Conditional Access',
      'MFA',
      'SCIM Provisioning',
      'SAML 2.0',
      'OAuth 2.0',
      'Access Reviews',
    ],
    metrics: [
      { label: 'FRAMEWORK', value: 'Zero Trust (NIST)' },
      { label: 'IDENTITY PROVIDER', value: 'Microsoft Entra ID' },
      { label: 'ACCESS CONTROL', value: 'PIM Just-In-Time' },
    ],
  },
  {
    number: '02',
    title: 'TISAX Readiness & Security Hardening',
    category: 'CYBERSECURITY & COMPLIANCE',
    description:
      'Led comprehensive security gap assessments, control implementation, and evidence preparation for TISAX (Trusted Information Security Assessment Exchange) readiness. Enforced Sophos Firewall hardening, strict network micro-segmentation, endpoint security via Microsoft Intune & Defender, and continuous audit controls.',
    githubUrl: 'https://linkedin.com/in/deepak-dongare',
    tech: [
      'TISAX Readiness',
      'Sophos Firewall',
      'Microsoft Defender',
      'Microsoft Intune',
      'Network Segmentation',
      'Firewall Hardening',
      'VPN / NAT',
      'SSL/TLS',
    ],
    metrics: [
      { label: 'AUDIT STANDARD', value: 'TISAX AL3 Readiness' },
      { label: 'PERIMETER', value: 'Sophos Hardened' },
      { label: 'ENDPOINTS', value: 'Intune & Defender' },
    ],
  },
  {
    number: '03',
    title: 'Internal Enterprise Platforms & ITAM Ecosystem',
    category: 'INTERNAL PLATFORMS & ASSET GOVERNANCE',
    description:
      'Architected and deployed internal enterprise web platforms including a centralized CRM, IT Asset Management (ITAM), and Employee Skill Matrix platform. Eliminated spreadsheet dependencies, unified hardware/software asset lifecycles, and provided real-time operational telemetry for leadership.',
    githubUrl: 'https://linkedin.com/in/deepak-dongare',
    tech: [
      'Custom CRM',
      'ITAM Platform',
      'Skill Matrix',
      'Process Automation',
      'Asset Lifecycle',
      'PowerShell',
      'Active Directory',
    ],
    metrics: [
      { label: 'CENTRALIZATION', value: 'Zero Spreadsheets' },
      { label: 'SCOPE', value: 'Enterprise Assets' },
      { label: 'WORKFLOW', value: 'Automated Lifecycle' },
    ],
  },
  {
    number: '04',
    title: 'AI-Enabled IT Operations & Agentic Workflows',
    category: 'AUTOMATION & NEXT-GEN IT OPERATIONS',
    description:
      'Pioneered automation pipelines and AI-assisted operational workflows combining PowerShell, Python, Generative AI, LLMs, and agentic workflows. Streamlined complex incident research, automated user onboarding/offboarding routines, log anomaly detection, and internal knowledge synthesis.',
    githubUrl: 'https://linkedin.com/in/deepak-dongare',
    tech: [
      'PowerShell',
      'Python',
      'Generative AI',
      'Agentic Workflows',
      'LLMs',
      'Git / GitHub',
      'Log Telemetry',
    ],
    metrics: [
      { label: 'AUTOMATION', value: 'PowerShell & Python' },
      { label: 'AI INTEGRATION', value: 'LLMs & Agentic' },
      { label: 'EFFICIENCY', value: 'Rapid Resolution' },
    ],
  },
];

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="work"
      className="relative w-full overflow-x-clip bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-14 sm:pt-16 pb-10 sm:pb-16 px-4 sm:px-12 lg:px-20"
    >
      {/* Studio Ambient Glows */}
      <div className="absolute top-1/4 left-1/3 w-[36rem] h-[36rem] bg-[#D4AF37]/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-[#8C6D4F]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-4 sm:mb-5"
        >
          <span
            className="text-[10px] sm:text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            02 / STRATEGIC INITIATIVES
          </span>
          <div className="w-16 sm:w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10"
        >
          <h2
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.88] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#F4EFEA] to-[#D8CEC4] drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
              ENTERPRISE SYSTEMS.
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFF5DC] via-[#F5D59A] to-[#D4A95D] drop-shadow-[0_8px_25px_rgba(212,169,93,0.4)]">
              RESILIENT ARCHITECTURES.
            </span>
          </h2>

          <p
            className="text-sm sm:text-base font-normal text-[#E2D6CA] max-w-md mt-3 md:mt-0 leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Scroll down to explore core architectural initiatives, Zero Trust identity rollouts, and compliance operations.
          </p>
        </motion.div>

        {/* Stacking Deck (Adaptive Mobile/Desktop) */}
        <ScrollStack
          itemDistance={20}
          itemScale={0.035}
          itemStackDistance={28}
          stackPosition="15%"
          scaleEndPosition="6%"
          baseScale={0.88}
          useWindowScroll={true}
        >
          {projects.map((project) => (
            <ScrollStackItem key={project.title}>
              <div className="relative w-full rounded-xl sm:rounded-2xl border border-[#8C6D4F]/50 bg-[#0E0C0A] p-5 sm:p-8 lg:p-12 shadow-[0_25px_70px_rgba(0,0,0,0.98)] group overflow-hidden transition-colors duration-500 hover:border-[#D4AF37]">
                
                {/* Top Gold Border Light Flare */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/80 to-transparent" />

                {/* Corner Minimal L-Brackets */}
                <div className="absolute top-0 left-0 w-3 sm:w-4 h-3 sm:h-4 border-t-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute top-0 right-0 w-3 sm:w-4 h-3 sm:h-4 border-t-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute bottom-0 left-0 w-3 sm:w-4 h-3 sm:h-4 border-b-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute bottom-0 right-0 w-3 sm:w-4 h-3 sm:h-4 border-b-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />

                {/* Big Background Watermark Number */}
                <span
                  className="absolute -bottom-4 sm:-bottom-6 -right-2 sm:-right-3 text-7xl sm:text-9xl font-bold text-[#EAD8C7]/5 select-none pointer-events-none leading-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {project.number}
                </span>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start relative z-10">
                  
                  {/* Left Column (7 Cols) */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                        <span className="text-xs sm:text-sm font-mono font-bold text-[#D4AF37]">
                          {project.number} //
                        </span>
                        <span className="text-xs sm:text-[13px] font-mono font-semibold tracking-[0.2em] uppercase text-[#F3D193]">
                          {project.category}
                        </span>
                      </div>

                      <h3
                        className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-3 sm:mb-4 group-hover:text-[#FFF5DC] transition-colors uppercase leading-[0.92]"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                      >
                        {project.title}
                      </h3>

                      <p
                        className="text-sm sm:text-[15px] md:text-[16px] font-normal text-[#E8DCD0] leading-[1.8] sm:leading-[1.85] tracking-wide mb-6 sm:mb-8 max-w-2xl"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 pt-4 sm:pt-6 border-t border-[#8C6D4F]/40">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1.5 text-xs sm:text-[13px] font-medium tracking-[0.12em] uppercase rounded-sm border border-[#8C6D4F]/50 bg-[#1C1712] text-[#F5EDE4] group-hover:border-[#D4AF37] group-hover:text-white transition-all duration-300"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column (5 Cols) */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-4 sm:space-y-6 lg:pl-6 lg:border-l lg:border-[#8C6D4F]/30">
                    <div className="space-y-2.5 sm:space-y-3">
                      <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.2em] uppercase text-[#D4AF37] block mb-1 sm:mb-2">
                        // ARCHITECTURE METRICS
                      </span>
                      {project.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="p-3.5 sm:p-4 rounded-sm border border-[#8C6D4F]/35 bg-[#090705] flex items-center justify-between"
                        >
                          <span className="text-xs sm:text-[13px] font-mono font-medium text-[#E0D4C8]">
                            {m.label}
                          </span>
                          <span className="text-xs sm:text-sm font-mono font-bold text-[#FFF5DC]">
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center space-x-3 px-6 py-4 sm:py-3.5 border-2 border-[#D4AF37] bg-[#1A1510] hover:bg-[#D4AF37] text-white hover:text-black text-xs sm:text-[13px] font-bold tracking-[0.22em] uppercase transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.2)]"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      <span>VIEW INITIATIVE</span>
                      <span className="text-sm font-bold">↗</span>
                    </a>
                  </div>

                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>

      </div>
    </section>
  );
};

export default ProjectsSection;