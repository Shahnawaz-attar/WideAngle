// frontend/app/components/Hero.tsx
"use client";

import React, { useRef, useEffect, useState } from 'react';
import HeroLottieLazy from './HeroLottieLazy'; // Assuming this path
import Reveal from './Reveal'; // Assuming this path
import { motion, useScroll, useTransform } from "framer-motion";

// Placeholder Lottie asset - replace with your actual JSON file
import heroAnimationData from '@/public/lottie/hero-animation.json'; // Adjust path as needed

const Hero: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Parallax for background layer
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  // Parallax for mid-layer (Lottie)
  const yLottie = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  // Parallax for foreground elements (text, CTAs)
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section id="home" ref={ref} className="relative h-screen flex items-center justify-center text-center px-6 overflow-hidden bg-[#1F2937]">
      {/* Background layer with parallax and subtle gradient */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: prefersReducedMotion ? "0%" : yBg }}
      >
        <img
          src="/images/hero-bg-layer1.webp" // Optimized background image
          alt="Abstract airport background"
          className="w-full h-full object-cover opacity-30" // Subtle opacity for particle drift effect
          loading="eager" // Eager load for LCP
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1F2937] via-[#1F2937]/70 to-transparent"></div>
      </motion.div>

      {/* Mid-layer: Lottie animation */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center z-10"
        style={{ y: prefersReducedMotion ? "0%" : yLottie }}
        aria-hidden="true" // Decorative Lottie
      >
        <HeroLottieLazy
          src={heroAnimationData}
          className="w-full h-full object-cover scale-110 md:scale-100" // Adjust scale to fit
        />
      </motion.div>

      {/* Foreground content with parallax */}
      <motion.div
        className="relative z-20 max-w-5xl px-4 py-8 rounded-lg"
        style={{ y: prefersReducedMotion ? "0%" : yText }}
      >
        <Reveal delay={0.2}>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight uppercase mb-4 text-[#FBFBFA] font-poppins relative overflow-hidden">
            WIDE<span className="text-[#0ea5a4]">ANGLE</span>
            {/* Subtle gold light sweep across headline */}
            {!prefersReducedMotion && (
              <span className="absolute inset-0 block bg-gradient-to-r from-transparent via-[#F5C26B]/50 to-transparent animate-light-sweep"
                    aria-hidden="true">
              </span>
            )}
          </h1>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="text-xl md:text-2xl font-light text-[#FBFBFA] mb-8 font-inter">
            Precision, Innovation, and Efficiency in Airport Project Management
          </p>
        </Reveal>
        <div className="flex justify-center space-x-4">
          <Reveal delay={0.4}>
            <a href="#about" className="inline-block bg-transparent hover:bg-[#0ea5a4]/10 text-[#0ea5a4] font-bold py-3 px-8 rounded-md border-2 border-[#0ea5a4] transition-all duration-[var(--dur-med)] ease-[var(--easing)] transform hover:scale-105 shadow-lg">
              Discover More
            </a>
          </Reveal>
          <Reveal delay={0.5}>
            <a href="#contact" className="inline-block bg-[#0ea5a4] hover:bg-[#0ea5a4]/80 text-[#1F2937] font-bold py-3 px-8 rounded-md transition-all duration-[var(--dur-med)] ease-[var(--easing)] transform hover:scale-105 shadow-lg">
              Book a Consultation
            </a>
          </Reveal>
        </div>
      </motion.div>
      {/* Add global CSS for light sweep animation */}
      {/* Fix: Removed 'jsx' and 'global' attributes to resolve TypeScript error. */}
      <style>{`
        @keyframes light-sweep {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-light-sweep {
          animation: light-sweep 8s infinite cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        /* prefers-reduced-motion fallback */
        @media (prefers-reduced-motion: reduce) {
          .animate-light-sweep {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;