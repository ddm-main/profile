import React, { useState, useEffect, useRef } from 'react';
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
  const sectionRef = useRef<HTMLElement>(null);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasLeftHeroRef = useRef(false);
  const [isInHero, setIsInHero] = useState(true);
  const [videoFailed, setVideoFailed] = useState(false);

  // Play video on mount (initial page load / refresh)
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => setVideoFailed(true));
    }
  }, []);

  // Stop strictly at 9 seconds and hold
  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.currentTime >= 9) {
      videoRef.current.pause();
      videoRef.current.currentTime = 9;
    }
  };

  const handleEnded = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  // Restart video ONLY when user leaves the hero section and returns to it
  useEffect(() => {
    const heroEl = sectionRef.current;
    if (!heroEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInHero(entry.isIntersecting);
          if (!entry.isIntersecting) {
            // User scrolled away / left the hero section
            hasLeftHeroRef.current = true;
          } else if (entry.isIntersecting && hasLeftHeroRef.current) {
            // User came back to the hero section after leaving
            hasLeftHeroRef.current = false;
            if (videoRef.current) {
              videoRef.current.currentTime = 0;
              videoRef.current.play().catch(() => {});
            }
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(heroEl);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative w-full min-h-[100svh] overflow-hidden bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black cursor-default lg:cursor-none"
    >
      {/* ================= 1. MINIMAL CUSTOM CURSOR (DESKTOP ONLY) ================= */}
      {cursorPos.x >= 0 && isInHero && (
        <motion.div
          className="hidden lg:flex fixed top-0 left-0 pointer-events-none z-50 rounded-full border border-[#D4AF37]/40 items-center justify-center backdrop-blur-[1px]"
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

      {/* ================= 2. CINEMATIC VIDEO HERO VISUAL LAYER ================= */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-black flex items-center justify-end">
        <motion.div
          animate={{
            scale: [1, 1.015, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="relative h-[100svh] w-full sm:w-[90vw] md:w-[75vw] lg:w-[62vw] xl:w-[58vw] 2xl:w-[54vw] flex items-center justify-end overflow-hidden"
        >
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            preload="auto"
            poster="/deepak-cut.webp"
            onTimeUpdate={handleTimeUpdate}
            onEnded={handleEnded}
            onError={() => setVideoFailed(true)}
            className="h-full w-full object-cover object-center lg:object-[center_18%] brightness-[0.85] sm:brightness-[0.92] lg:brightness-[1] contrast-[1.04]"
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>

          {/* Static fallback when the video cannot load or autoplay */}
          {videoFailed && (
            <img
              src="/deepak-cut.webp"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover object-center lg:object-[center_18%]"
            />
          )}

          {/* Seamless Soft Left Edge Blend */}
          <div className="absolute inset-y-0 left-0 w-2/5 sm:w-1/2 bg-gradient-to-r from-black via-black/85 to-transparent pointer-events-none" />

          {/* Mobile Contrast Scrim (ensures text readability on phones) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60 lg:hidden pointer-events-none" />

          {/* Top Edge Soft Fade */}
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/80 via-black/30 to-transparent pointer-events-none" />

          {/* Bottom Edge Fade */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />

          {/* Subtle Golden Ambient Light Flare */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/5 via-transparent to-[#D4AF37]/10 mix-blend-screen pointer-events-none" />
        </motion.div>

        {/* ================= 3. ANIMATED WATERMARK EMBLEM (DESKTOP / TABLET) ================= */}
        <div className="hidden sm:flex absolute bottom-6 right-6 lg:bottom-10 lg:right-12 pointer-events-none items-center justify-center z-10">
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
                alt=""
                aria-hidden="true"
                className="w-24 h-24 lg:w-32 lg:h-32 object-contain drop-shadow-[0_0_15px_rgba(212,175,55,0.25)]"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* ================= 4. CONTENT LAYER ================= */}
      <div className="relative z-10 flex flex-col justify-between h-full min-h-screen w-full px-4 sm:px-12 lg:px-16 pt-5 sm:pt-6 pb-8 pointer-events-none">
        
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

          {/* Navigation Links (Desktop) */}
          <nav
            className="hidden md:flex items-center space-x-8 lg:space-x-10 text-xs sm:text-[13px] tracking-[0.22em] font-medium uppercase text-[#EAE0D5] absolute left-1/2 -translate-x-1/2"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="relative group py-1 transition-colors duration-300 hover:text-[#FFFFFF]"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action & Mobile Toggle */}
          <div className="flex items-center space-x-2.5 sm:space-x-3 ml-auto md:ml-0">
            <a
              href="#contact"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="group hidden sm:flex items-center space-x-2 text-xs sm:text-[12.5px] tracking-[0.22em] font-semibold uppercase py-2.5 px-4 border border-[#D4AF37]/60 hover:border-[#D4AF37] bg-[#16120E]/90 hover:bg-[#D4AF37] text-white hover:text-black transition-all duration-300 backdrop-blur-sm shadow-[0_0_15px_rgba(212,175,55,0.15)]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <span>LET&apos;S TALK</span>
              <span className="transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-xs font-bold">
                ↗
              </span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#EAD8C7] hover:text-[#D4AF37] focus-visible:outline-2 focus-visible:outline-[#D4AF37] z-50 pointer-events-auto"
              aria-label="Toggle navigation"
            >
              <div className="w-6 h-4 flex flex-col justify-between items-end">
                <span className={`h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'w-6 rotate-45 translate-y-1.5 bg-[#D4AF37]' : 'w-6'}`} />
                <span className={`h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'w-4'}`} />
                <span className={`h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'w-6 -rotate-45 -translate-y-1.5 bg-[#D4AF37]' : 'w-5'}`} />
              </div>
            </button>
          </div>
        </header>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#0A0806]/98 backdrop-blur-3xl flex flex-col justify-between p-6 pt-24 pointer-events-auto md:hidden"
          >
            <nav className="flex flex-col space-y-4">
              {navItems.map((item, idx) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-3xl font-normal tracking-[0.2em] text-[#EAD8C7] hover:text-[#D4AF37] transition-colors py-2 border-b border-[#8C6D4F]/20 flex items-center justify-between"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  <span>{item.name}</span>
                  <span className="text-[11px] font-mono text-[#8C6D4F]">0{idx + 1}</span>
                </a>
              ))}
            </nav>

            <div className="space-y-3 pt-6 border-t border-[#8C6D4F]/30 pb-4">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 border border-[#D4AF37] bg-[#D4AF37]/10 text-[#F7E7C4] text-xs font-medium tracking-[0.25em] uppercase text-center block"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                LET&apos;S TALK ↗
              </a>
              <a
                href="/resume.pdf"
                download="Deepak_Dongare_Resume.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 border border-[#8C6D4F]/40 text-[#A8988B] text-xs font-medium tracking-[0.2em] uppercase text-center block"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                DOWNLOAD RESUME ↓
              </a>
            </div>
          </motion.div>
        )}

        {/* Main Hero Row */}
        <div className="relative flex flex-col md:flex-row items-center justify-between w-full pt-4 pb-2 my-auto">
          
          {/* LEFT: Balanced Headline & Actions */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-[39rem] xl:max-w-[42rem] pointer-events-auto z-20"
          >
            {/* Massive Condensed Headline with Crisp High-Contrast Gradients */}
            <motion.div variants={fadeUpVariants} className="relative mb-3 sm:mb-4 select-none">
              <h1
                className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.2rem] xl:text-[7.8rem] tracking-tight uppercase leading-[0.88] sm:leading-[0.83]"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {/* Line 1: ENTERPRISE */}
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#F4EFEA] to-[#D8CEC4] drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
                  ENTERPRISE
                </span>

                {/* Line 2: CLOUD & IAM */}
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFF5DC] via-[#F5D59A] to-[#D4A95D] drop-shadow-[0_8px_25px_rgba(212,169,93,0.4)]">
                  CLOUD &amp; IAM
                </span>

                {/* Line 3: ARCHITECT */}
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E2BF] via-[#E2BE80] to-[#BE9656] drop-shadow-[0_10px_30px_rgba(190,150,86,0.45)]">
                  ARCHITECT
                </span>
              </h1>
            </motion.div>

            {/* Subtitle Technologies */}
            <motion.div variants={fadeUpVariants} className="mb-3.5 sm:mb-4">
              <p
                className="text-xs sm:text-[13px] md:text-sm font-semibold tracking-[0.2em] sm:tracking-[0.24em] uppercase text-[#F3E6D8] leading-relaxed"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                IT MANAGER <span className="text-[#D4AF37] mx-1.5">•</span> ZERO TRUST &amp; IAM <span className="text-[#D4AF37] mx-1.5">•</span> CYBERSECURITY
              </p>
            </motion.div>

            {/* 3-Line Description */}
            <motion.div
              variants={fadeUpVariants}
              className="text-sm sm:text-[15px] md:text-[16px] font-normal text-[#E8DCD0] leading-[1.8] tracking-wide max-w-xl mb-6 space-y-1"
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
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-5 w-full sm:w-auto"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {/* Explore Initiatives CTA */}
              <motion.a
                href="#work"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.02 }}
                className="relative inline-flex items-center justify-center space-x-3 px-6 sm:px-7 py-3.5 border-2 border-[#D4AF37] bg-[#14100D] hover:bg-[#D4AF37] text-white hover:text-black text-xs sm:text-[13px] font-semibold tracking-[0.22em] uppercase transition-all duration-300 shadow-[0_0_25px_rgba(212,175,55,0.25)] text-center"
              >
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FFF]/50 to-transparent pointer-events-none" />
                <span>EXPLORE INITIATIVES</span>
                <span className="transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-sm font-bold">
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
                className="relative inline-flex items-center justify-center space-x-2 px-6 sm:px-7 py-3.5 border border-[#C99E5D] bg-[#100D0B] hover:border-[#D4AF37] hover:bg-[#1A1510] text-[#F5EDE4] hover:text-white text-xs sm:text-[13px] font-semibold tracking-[0.22em] uppercase transition-all duration-300 text-center shadow-[0_0_15px_rgba(0,0,0,0.5)]"
              >
                <span>DOWNLOAD RESUME</span>
                <span className="transform transition-transform duration-300 group-hover:translate-y-0.5 text-sm font-bold">
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
            <span className="text-2xl text-[#E5C378] leading-none font-serif mb-2 font-bold">
              “
            </span>

            {/* 2. Compact Two-Line Statement */}
            <div 
              className="text-xs font-semibold tracking-[0.22em] uppercase text-[#FFFFFF] space-y-1 mb-3"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <p>ZERO TRUST BY DESIGN.</p>
              <p>RESILIENCE AT SCALE.</p>
            </div>

            {/* 3. Gold Accent Line */}
            <div className="w-32 h-[1.5px] bg-gradient-to-r from-[#D4AF37] via-[#FFF5EB] to-transparent shadow-[0_0_10px_rgba(212,175,55,0.6)] mb-2.5" />

            {/* 4. Fine Monoline Calligraphy Signature */}
            <div 
              className="text-[2.6rem] text-[#F5D59A] font-normal leading-none -ml-0.5"
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