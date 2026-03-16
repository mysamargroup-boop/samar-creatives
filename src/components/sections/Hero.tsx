"use client";

import React from "react";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-end px-6 md:px-12 pb-20 pt-48 md:pt-64 overflow-hidden bg-background">
      <div className="bg-noise" />
      <div className="hero-glow" />

      <div className="hero-eyebrow flex items-center gap-3 text-foreground/40 mb-8 overflow-hidden">
        <span className="w-10 h-[1px] bg-foreground/10 block" />
        <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] font-bold block">Creative Developer — Sagar, Madhya Pradesh</span>
      </div>

      <h1 className="font-display text-[clamp(2.5rem,8.5vw,9rem)] font-extrabold leading-[0.88] tracking-tighter uppercase mb-12 text-left">
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

      <div className="flex flex-col md:flex-row items-end justify-between gap-8">
        <p className="hero-desc text-foreground/55 text-sm md:text-base max-w-sm leading-relaxed translate-y-10 opacity-0 text-left">
          <strong className="text-foreground font-medium">Full-stack developer & designer</strong> building beautiful, high-performance websites and web experiences that push boundaries.
        </p>
        
        <div className="hero-scroll-hint opacity-0 flex flex-col items-center gap-3">
          <div className="w-[1px] h-16 bg-gradient-to-b from-accent to-transparent animate-scroll-fill origin-top" />
          <span className="text-[9px] uppercase tracking-[0.3em] text-foreground/40 [writing-mode:vertical-rl] font-bold">Scroll</span>
        </div>
      </div>
    </section>
  );
}