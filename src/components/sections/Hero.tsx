"use client";

import React from "react";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-end px-8 md:px-12 pb-20 overflow-hidden bg-[#080808]">
      <div className="bg-noise" />
      <div className="hero-glow" />

      <div className="hero-eyebrow flex items-center gap-3 text-[#c8fa64] mb-6 overflow-hidden">
        <span className="w-10 h-[1px] bg-[#c8fa64] block" />
        <span className="text-[10px] sm:text-[12px] uppercase tracking-[0.3em] font-bold block">Creative Developer — Sagar, Madhya Pradesh</span>
      </div>

      <h1 className="font-display text-[16vw] sm:text-[10vw] font-extrabold leading-[0.92] tracking-tighter uppercase mb-12">
        <div className="hero-title-line reveal-line">
          <span>Crafting</span>
        </div>
        <div className="hero-title-line reveal-line">
          <span>Digital <em className="italic text-[#c8fa64] not-italic">Worlds</em></span>
        </div>
        <div className="hero-title-line reveal-line">
          <span>That Move.</span>
        </div>
      </h1>

      <div className="flex flex-col md:flex-row items-end justify-between gap-8">
        <p className="hero-desc text-[#f0ede8]/45 text-sm sm:text-base max-w-sm leading-relaxed translate-y-10 opacity-0">
          <strong className="text-white font-medium">Full-stack developer & designer</strong> building beautiful, high-performance websites and web experiences that push boundaries.
        </p>
        
        <div className="hero-scroll-hint opacity-0 flex flex-col items-center gap-3">
          <div className="w-[1px] h-16 bg-gradient-to-b from-[#c8fa64] to-transparent animate-scroll-fill origin-top" />
          <span className="text-[9px] uppercase tracking-[0.3em] text-[#f0ede8]/40 [writing-mode:vertical-rl]">Scroll</span>
        </div>
      </div>
    </section>
  );
}