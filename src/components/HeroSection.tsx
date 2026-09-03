import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import watermarkImg from '../assets/dd-insignia.svg';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.2,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 18, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const navItems = [
  { name: 'ABOUT', href: '#about' },
  { name: 'PROJECTS', href: '#work' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'EXPERIENCE', href: '#experience' },
  { name: 'CONTACT', href: '#contact' },
];

export const HeroSection: React.FC = () => {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative w-screen h-screen overflow-hidden bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black cursor-none">
      {/* ================= 1. MINIMAL CUSTOM CURSOR ================= */}
      {cursorPos.x >= 0 && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-50 rounded-full border border-[#D4AF37]/40 flex items-center justify-center backdrop-blur-[1px]"
          animate={{
            x: cursorPos.x - (isHovered ? 24 : 5),
            y: cursorPos.y - (isHovered ? 24 : 5),
            width: isHovered ? 48 : 10,
            height: isHovered ? 48 : 10,
            backgroundColor: isHovered ? 'rgba(212, 175, 55, 0.1)' : 'rgba(235, 215, 195, 0.95)',
          }}
          transition={{ type: 'spring', damping: 30, stiffness: 350, mass: 0.5 }}
        />
      )}

      {/* ================= 2. FIXED CINEMATIC WALKING VISUAL LAYER ================= */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-black flex items-center justify-end">
        <motion.div
          animate={{
            scale: [1, 1.015, 1],
            y: [-3, 2, -3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="relative h-screen w-full sm:w-[80vw] md:w-[60vw] lg:w-[48vw] xl:w-[42vw] 2xl:w-[38vw] flex items-center justify-end overflow-hidden"
        >
          <img
            src="/deepak-executive.jpg"
            alt="Deepak Dongare - IT Manager"
            className="h-full w-full object-cover object-[center_10%] sm:object-[center_12%] lg:object-[center_10%] brightness-[1.02] contrast-[1.03] saturate-[1.02]"
          />

          {/* Seamless Soft Left Edge Blend */}
          <div className="absolute inset-y-0 left-0 w-2/5 sm:w-1/2 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none" />

          {/* Top Edge Soft Fade */}
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/80 via-black/30 to-transparent pointer-events-none" />

          {/* Bottom Edge Fade */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />

          {/* Subtle Golden Ambient Light Flare */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/5 via-transparent to-[#D4AF37]/10 mix-blend-screen pointer-events-none" />
        </motion.div>

        {/* ================= 3. ANIMATED WATERMARK EMBLEM ================= */}
        <div className="absolute bottom-6 right-6 lg:bottom-10 lg:right-12 pointer-events-none flex items-center justify-center z-10">
          <div className="relative flex items-center justify-center">
            <div className="absolute w-36 h-36 bg-black/85 rounded-full blur-xl" />

            <motion.div
              animate={{
                y: [-3, 3, -3],
                scale: [1, 1.03, 1],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative flex items-center justify-center"
            >
              <img
                src={watermarkImg}
                alt="Insignia"
                className="w-28 h-28 lg:w-32 lg:h-32 object-contain drop-shadow-[0_0_15px_rgba(212,175,55,0.25)]"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* ================= 4. CONTENT LAYER ================= */}
      <div className="relative z-10 flex flex-col justify-between h-full w-full px-6 sm:px-12 lg:px-16 pt-6 pb-8 pointer-events-none">
        
        {/* Navigation Bar */}
        <header className="relative flex items-center justify-between w-full pointer-events-auto">
          <a
            href="#"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="text-xs sm:text-sm font-semibold tracking-[0.35em] uppercase text-[#EAD8C7] hover:opacity-75 transition-opacity"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            DEEPAK.
          </a>

          {/* Navigation Links */}
          <nav
            className="hidden md:flex items-center space-x-8 lg:space-x-10 text-[11px] tracking-[0.28em] font-light uppercase text-[#C4B5A5] absolute left-1/2 -translate-x-1/2"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="relative group py-1 transition-colors duration-300 hover:text-[#FFF5EB]"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#D4AF37]/50 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action */}
          <a
            href="#contact"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group flex items-center space-x-2 text-[11px] tracking-[0.24em] font-light uppercase py-2 px-4 border border-[#8C6D4F]/50 hover:border-[#D4AF37] text-[#EAD8C7] transition-all duration-300 backdrop-blur-sm ml-auto md:ml-0"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <span>LET&apos;S TALK</span>
            <span className="transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-xs">
              ↗
            </span>
          </a>
        </header>

        {/* Main Hero Row */}
        <div className="relative flex flex-col md:flex-row items-center justify-between w-full pt-4 pb-2 my-auto">
          
          {/* LEFT: Balanced Headline & Actions */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-[37rem] xl:max-w-[40rem] pointer-events-auto z-20"
          >
            {/* Massive Condensed Headline */}
            <motion.div variants={fadeUpVariants} className="relative mb-3.5 select-none">
              <h1
                className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.2rem] xl:text-[7.8rem] tracking-tight uppercase leading-[0.83]"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {/* Line 1: ENTERPRISE */}
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)]">
                  ENTERPRISE
                </span>

                {/* Line 2: CLOUD & IAM */}
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
                  CLOUD &amp; IAM
                </span>

                {/* Line 3: ARCHITECT */}
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#DFBE8A] via-[#9B7640] to-[#342410] drop-shadow-[0_10px_30px_rgba(155,118,64,0.4)]">
                  ARCHITECT
                </span>
              </h1>
            </motion.div>

            {/* Subtitle Technologies */}
            <motion.div variants={fadeUpVariants} className="mb-4">
              <p
                className="text-[10px] sm:text-[11px] md:text-xs font-normal tracking-[0.28em] uppercase text-[#C4B29E]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                IT MANAGER <span className="text-[#8C6D4F] mx-1">•</span> ZERO TRUST &amp; IAM <span className="text-[#8C6D4F] mx-1">•</span> CYBERSECURITY
              </p>
            </motion.div>

            {/* 3-Line Description */}
            <motion.div
              variants={fadeUpVariants}
              className="text-xs sm:text-sm md:text-[13.5px] font-light text-[#A8988B] leading-[1.8] tracking-wide max-w-lg mb-6 space-y-1"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <p>
                9+ years orchestrating resilient cloud operations, Zero Trust identity architectures, and cybersecurity governance.
                <br />
                Transforming complex infrastructure into secure, high-velocity enterprise platforms.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUpVariants}
              className="flex flex-row items-center gap-4 sm:gap-6"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {/* Explore Initiatives CTA */}
              <motion.a
                href="#work"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.02 }}
                className="relative inline-flex items-center space-x-3 px-6 sm:px-7 py-3.5 border border-[#8C6D4F] bg-[#120F0C]/80 hover:border-[#D4AF37] text-[#EAD8C7] hover:text-[#FFF5EB] text-[11px] font-medium tracking-[0.24em] uppercase transition-all duration-300 shadow-[0_0_25px_rgba(212,175,55,0.18)]"
              >
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#E8D7C5]/40 to-transparent pointer-events-none" />
                <span>EXPLORE INITIATIVES</span>
                <span className="transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-xs">
                  ↗
                </span>
              </motion.a>

              {/* Download Resume Button */}
              <motion.a
                href="/resume.pdf"
                download="Deepak_Dongare_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.02 }}
                className="relative inline-flex items-center space-x-2 px-6 sm:px-7 py-3.5 border border-[#8C6D4F]/40 hover:border-[#8C6D4F] text-[#BFA895] hover:text-[#EAD8C7] text-[11px] font-medium tracking-[0.24em] uppercase transition-all duration-300"
              >
                <span>DOWNLOAD RESUME</span>
                <span className="transform transition-transform duration-300 group-hover:translate-y-0.5 text-xs">
                  ↓
                </span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* RIGHT: Floating Quote & Signature Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden xl:flex flex-col items-start pointer-events-auto z-20 select-none mr-2 pr-4"
          >
            {/* 1. Quote Mark */}
            <span className="text-xl text-[#C99E5D] leading-none font-serif mb-2">
              “
            </span>

            {/* 2. Compact Two-Line Statement */}
            <div 
              className="text-[9.5px] font-medium tracking-[0.24em] uppercase text-[#E0D3C5] space-y-1 mb-3"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <p>ZERO TRUST BY DESIGN.</p>
              <p>RESILIENCE AT SCALE.</p>
            </div>

            {/* 3. Gold Accent Line */}
            <div className="w-28 h-[1px] bg-gradient-to-r from-[#D4AF37] via-[#E8D7C5]/70 to-transparent shadow-[0_0_8px_rgba(212,175,55,0.4)] mb-2" />

            {/* 4. Fine Monoline Calligraphy Signature */}
            <div 
              className="text-[2.2rem] text-[#D8AB64] font-normal leading-none -ml-0.5"
              style={{ 
                fontFamily: "'Herr Von Muellerhoff', 'Allura', cursive",
                letterSpacing: '0.04em',
              }}
            >
              Deepak Dongare
            </div>
          </motion.div>
        </div>

        {/* Bottom Spacer */}
        <div className="h-2" />
      </div>
    </section>
  );
};

export default HeroSection;