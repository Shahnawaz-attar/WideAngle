// components/HeroLottieLazy.tsx
"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import React from "react"; // Explicitly import React

const LottiePlayer = dynamic(() => import("react-lottie-player"), { ssr: false });

export default function HeroLottieLazy({ src, className="" }) {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    const t = window.requestIdleCallback
      ? window.requestIdleCallback(() => setLoad(true), { timeout: 600 })
      : setTimeout(() => setLoad(true), 700);
    return () => {
      // Fix: Correctly call cancelIdleCallback or clearTimeout on the window object
      if (typeof t === 'number') { // This covers both setTimeout and requestIdleCallback IDs
        // Fix: Changed `IdleRequestID` to `number` to resolve TypeScript error as `requestIdleCallback` returns a number.
        if (typeof window.cancelIdleCallback === 'function') {
          window.cancelIdleCallback(t as number);
        } else {
          clearTimeout(t);
        }
      }
    };
  }, []);
  
  // Provide a prefers-reduced-motion fallback
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion) {
    // Static SVG placeholder for reduced motion
    return (
      <svg aria-hidden="true" width="100%" height="300" viewBox="0 0 100 300" className={className}>
        <rect x="0" y="0" width="100%" height="300" fill="#1F2937" />
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#0ea5a4" fontSize="16">
          Motion Reduced
        </text>
      </svg>
    );
  }

  if (!load) return <svg aria-hidden="true" width="100%" height="300" viewBox="0 0 100 300" className={className} />; // small SVG placeholder
  
  return <LottiePlayer loop animationData={src} play className={className} />;
}