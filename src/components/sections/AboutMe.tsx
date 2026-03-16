"use client";

import React from "react";

export function AboutMe() {
  const stats = [
    { num: 12, label: "Projects Shipped" },
    { num: 3, label: "Years Experience" },
    { num: 8, label: "Happy Clients" },
    { num: "∞", label: "Cups of Chai ☕" }
  ];

  return (
    <section id="about" className="py-24 md:py-40 px-8 md:px-12 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 md:gap-20 max-w-7xl mx-auto">
      <div>
        <span className="text-[11px] uppercase tracking-[0.3em] text-[#c8fa64] block mb-10 fade-up">About Me</span>
        <h2 className="font-display text-[10vw] sm:text-[4.5vw] font-extrabold leading-[1.05] tracking-tighter uppercase">
          <div className="reveal-line"><span>Developer</span></div>
          <div className="reveal-line"><span>based in</span></div>
          <div className="reveal-line"><span>Sagar, MP.</span></div>
        </h2>
      </div>

      <div className="lg:pt-16 space-y-8">
        <p className="fade-up text-[17px] md:text-[19px] leading-relaxed text-white/45">
          Hi, I&apos;m <strong className="text-white font-medium">Samar</strong> — a self-driven creative developer from <strong className="text-white font-medium">Sagar, Madhya Pradesh</strong>, crafting immersive web experiences that blend technical precision with artistic vision.
        </p>
        <p className="fade-up text-[17px] md:text-[19px] leading-relaxed text-white/45">
          I specialize in building fast, accessible, and visually striking websites — from slick marketing pages to complex full-stack applications. My work lives at the intersection of <strong className="text-white font-medium">design and engineering</strong>.
        </p>

        <div className="grid grid-cols-2 gap-8 pt-12 border-t border-white/10">
          {stats.map((stat, i) => (
            <div key={i} className="fade-up">
              <div className="font-display text-[40px] md:text-[64px] font-extrabold leading-none tracking-tighter flex items-start">
                {stat.num}
                {stat.num !== "∞" && <span className="text-[0.5em] text-[#c8fa64] ml-1">+</span>}
              </div>
              <div className="text-[12px] md:text-[13px] uppercase tracking-widest text-white/30 mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}