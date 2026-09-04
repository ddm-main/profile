// src/components/ExperienceSection.tsx
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface RouteStop {
  id: string;
  year: string;
  title: string;
  organization: string;
  description: string;
}

const journey: RouteStop[] = [
  {
    id: '01',
    year: 'AUG 2023 – PRESENT',
    title: 'IT MANAGER',
    organization: 'REALTHINGKS GMBH • PUNE, INDIA',
    description:
      'Directing end-to-end enterprise IT operations across infrastructure, cloud (Azure & AWS), cybersecurity, identity, networking, virtualization, endpoints, M365, and business apps. Leading Microsoft Entra ID Zero Trust architecture, PIM, and automotive TISAX audit readiness.',
  },
  {
    id: '02',
    year: 'JUN 2018 – AUG 2023',
    title: 'SENIOR NETWORK ENGINEER',
    organization: 'FINIQ CONSULTING • PUNE, INDIA',
    description:
      'Managed high-availability enterprise network and infrastructure platforms supporting global fintech and banking clients. Designed LAN/WAN, routing, switching, VPN gateways, supported hybrid cloud (Azure/AWS), and automated repetitive administration with PowerShell.',
  },
  {
    id: '03',
    year: 'NOV 2016 – MAY 2018',
    title: 'NETWORK ENGINEER',
    organization: 'SWIPE MOBILE LIMITED • PUNE, INDIA',
    description:
      'Administered corporate LAN/WAN infrastructure, enterprise connectivity, troubleshooting, hardware deployment, Windows endpoints, and core IT asset lifecycle operations.',
  },
  {
    id: '04',
    year: '2012 – 2016',
    title: 'B.E. – ELECTRONICS & TELECOM',
    organization: 'SAMARTH COLLEGE OF ENGINEERING • SPPU',
    description:
      'Graduated First Class in Electronics & Telecommunication Engineering from Savitribai Phule Pune University, establishing a rigorous engineering foundation in computer networking and systems design.',
  },
];

export const ExperienceSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 70%', 'end 90%'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-4 pb-16 sm:pb-24 px-4 sm:px-12 lg:px-20 overflow-hidden"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-[#D4AF37]/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full relative z-10">
        
        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-5 sm:mb-7"
        >
          <span
            className="text-[10px] sm:text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            04 / CAREER MILESTONES
          </span>
          <div className="w-16 sm:w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 sm:mb-16"
        >
          <h2
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.9] sm:leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          aria-label="Progressive Leadership. 9+ Years Experience."
          >
            <span aria-hidden="true" className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#F4EFEA] to-[#D8CEC4] drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
              PROGRESSIVE LEADERSHIP.
            </span>
            <span aria-hidden="true" className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFF5DC] via-[#F5D59A] to-[#D4A95D] drop-shadow-[0_8px_25px_rgba(212,169,93,0.4)]">
              9+ YEARS EXPERIENCE.
            </span>
          </h2>
        </motion.div>

        {/* Minimalist Route Map */}
        <div className="relative w-full">
          
          {/* Background Track */}
          <div className="absolute left-[19px] md:left-[140px] top-4 bottom-8 w-[1px] bg-[#8C6D4F]/30" />
          
          {/* Animated Gold Track */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[19px] md:left-[140px] top-4 w-[2px] bg-gradient-to-b from-[#D4AF37] via-[#FFF5DC] to-[#D4AF37]/20 shadow-[0_0_12px_#D4AF37] origin-top"
          />

          <div className="space-y-12">
            {journey.map((stop, idx) => (
              <motion.div
                key={stop.id}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: idx * 0.08 }}
                className="relative flex flex-col md:flex-row items-start group"
              >
                {/* Desktop Year (Left side of track) */}
                <div className="hidden md:block w-[140px] shrink-0 pr-8 pt-0.5 text-right">
                  <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.16em] text-[#D4AF37] group-hover:text-[#FFF5DC] transition-colors">
                    {stop.year}
                  </span>
                </div>

                {/* Route Node */}
                <div className="absolute left-[19px] md:left-[140px] top-1.5 -translate-x-1/2 flex items-center justify-center">
                  <div className="absolute w-6 h-6 rounded-full border border-[#D4AF37]/0 group-hover:border-[#D4AF37]/50 group-hover:scale-150 transition-all duration-700 ease-out" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#120F0C] border border-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] group-hover:shadow-[0_0_12px_#D4AF37] transition-colors duration-300" />
                </div>

                {/* Content (Right side of track) */}
                <div className="ml-14 md:ml-12 pl-2">
                  {/* Mobile Year */}
                  <div className="md:hidden mb-1.5">
                    <span className="text-xs font-mono font-bold tracking-[0.16em] text-[#D4AF37]">
                      {stop.year}
                    </span>
                  </div>

                  <h3
                    className="text-3xl sm:text-[2.5rem] tracking-wide text-white group-hover:text-[#FFF5DC] transition-colors mb-1.5 leading-none"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {stop.title}
                  </h3>
                  
                  <span 
                    className="block text-xs sm:text-[13px] font-semibold tracking-[0.18em] uppercase text-[#EAD8C7] mb-2"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {stop.organization}
                  </span>
                  
                  <p 
                    className="text-sm sm:text-[15px] font-normal text-[#E2D6CA] leading-[1.75] max-w-xl group-hover:text-white transition-colors"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {stop.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;