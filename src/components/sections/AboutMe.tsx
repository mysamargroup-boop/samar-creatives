"use client";

import React from "react";

export function AboutMe() {
  const stats = [
    { num: 12, label: "Projects Shipped" },
    { num: 3, label: "Years Experience" },
    { num: 8, label: "Happy Clients" },
    { num: "∞", label: "Cups of Chai" }
  ];

  return (
    <section id="about" className="py-24 md:py-40 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        <div>
          <span className="text-[11px] uppercase tracking-[0.3em] text-foreground/40 block mb-10 fade-up">About Me</span>
          <h2 className="font-display text-[clamp(2.5rem,8vw,5.5rem)] font-extrabold leading-[1.0] tracking-tighter uppercase text-left">
            <div className="reveal-line"><span>Developer</span></div>
            <div className="reveal-line"><span>based in</span></div>
            <div className="reveal-line"><span>Sagar, MP.</span></div>
          </h2>
        </div>

        <div className="space-y-8">
          <p className="fade-up text-[17px] md:text-[21px] leading-relaxed text-foreground/60 text-left">
            Hi, I&apos;m <strong className="text-foreground font-medium">Samar</strong> — a self-driven creative developer from <strong className="text-foreground font-medium">Sagar, Madhya Pradesh</strong>, crafting immersive web experiences that blend technical precision with artistic vision.
          </p>
          <p className="fade-up text-[17px] md:text-[21px] leading-relaxed text-foreground/60 text-left">
            I specialize in building fast, accessible, and visually striking websites — from slick marketing pages to complex full-stack applications. My work lives at the intersection of <strong className="text-foreground font-medium">design and engineering</strong>.
          </p>

          <div className="grid grid-cols-2 gap-8 pt-12 border-t border-border">
            {stats.map((stat, i) => (
              <div key={i} className="fade-up">
                <div className="font-display text-[38px] md:text-[68px] font-extrabold leading-none tracking-tighter flex items-start">
                  {stat.num}
                  {stat.num !== "∞" && <span className="text-[0.5em] text-accent ml-1">+</span>}
                </div>
                <div className="text-[10px] md:text-[12px] uppercase tracking-[0.2em] text-foreground/30 mt-3 font-bold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
