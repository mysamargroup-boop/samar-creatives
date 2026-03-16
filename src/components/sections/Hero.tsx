
"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const watermarkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (watermarkRef.current) {
      gsap.fromTo(watermarkRef.current, 
        { x: "5%" },
        {
          x: "-25%",
          ease: "none",
          scrollTrigger: {
            trigger: "#hero",
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          },
        }
      );
    }
  }, []);

  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col justify-end px-6 md:px-12 pb-20 pt-32 md:pt-40 overflow-hidden bg-background items-start">
      <div className="bg-noise" />
      <div className="hero-glow" />

      {/* Sliding Watermark - Refined Font Size and Position for Full Visibility */}
      <div 
        ref={watermarkRef}
        className="absolute top-[20%] left-0 font-display text-[22vw] font-extrabold text-foreground/[0.04] select-none pointer-events-none whitespace-nowrap uppercase tracking-tighter leading-none z-0"
      >
        RAGHAV
      </div>

      <div className="hero-eyebrow relative z-10 flex items-center justify-start gap-3 text-foreground/40 mb-6 overflow-hidden w-full">
        <span className="w-10 h-[1px] bg-foreground/10 block shrink-0" />
        <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] font-bold block text-left">Creative Developer — Sagar, Madhya Pradesh</span>
      </div>

      <h1 className="relative z-10 font-display text-[clamp(2.5rem,8vw,5.5rem)] font-extrabold leading-[0.85] tracking-tighter uppercase mb-10 text-left max-w-5xl">
        <div className="hero-title-line reveal-line">
          <span>Crafting</span>
        </div>
        <div className="hero-title-line reveal-line">
          <span className="font-serif italic lowercase font-normal opacity-40 -mt-2">digital</span>
        </div>
        <div className="hero-title-line reveal-line">
          <span className="text-accent">Worlds</span>
        </div>
        <div className="hero-title-line reveal-line">
          <span>That</span>
        </div>
        <div className="hero-title-line reveal-line">
          <span className="font-serif italic lowercase font-normal opacity-40">move.</span>
        </div>
      </h1>

      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-8 w-full">
        <p className="hero-desc text-foreground/55 text-[10px] md:text-xs max-w-[260px] leading-relaxed translate-y-10 opacity-0 text-left uppercase font-bold tracking-wider">
          <strong className="text-foreground font-extrabold">Full-stack developer & designer</strong> building beautiful, high-performance websites and web experiences that push boundaries.
        </p>
        
        <div className="hero-scroll-hint opacity-0 flex flex-col items-center gap-3 self-center md:self-auto">
          <div className="w-[1px] h-16 bg-gradient-to-b from-accent to-transparent animate-scroll-fill origin-top" />
          <span className="text-[9px] uppercase tracking-[0.3em] text-foreground/40 [writing-mode:vertical-rl] font-bold">Scroll</span>
        </div>
      </div>
    </section>
  );
}
