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
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start text-left">
        <div className="w-full">
          <span className="text-[11px] uppercase tracking-[0.3em] text-foreground/40 block mb-10 fade-up font-bold">About Me</span>
          <h2 className="font-display text-[clamp(2.5rem,7.5vw,6rem)] font-extrabold leading-[1.0] tracking-tighter uppercase w-full">
            <div className="reveal-line"><span>Developer</span></div>
            <div className="reveal-line"><span>based in</span></div>
            <div className="reveal-line"><span>Sagar, MP.</span></div>
          </h2>
        </div>

        <div className="space-y-8 w-full">
          <p className="fade-up text-base md:text-lg leading-relaxed text-foreground/60">
            Hi, I&apos;m <strong className="text-foreground font-medium">Samar</strong> — a self-driven creative developer from <strong className="text-foreground font-medium">Sagar, Madhya Pradesh</strong>, crafting immersive web experiences that blend technical precision with artistic vision.
          </p>
          <p className="fade-up text-base md:text-lg leading-relaxed text-foreground/60">
            I specialize in building fast, accessible, and visually striking websites — from slick marketing pages to complex full-stack applications. My work lives at the intersection of <strong className="text-foreground font-medium">design and engineering</strong>.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-12 border-t border-border">
            {stats.map((stat, i) => (
              <div key={i} className="fade-up">
                <div className="font-display text-[clamp(2.5rem,5vw,4rem)] font-extrabold leading-none tracking-tighter flex items-start">
                  {stat.num}
                  {stat.num !== "∞" && <span className="text-[0.5em] text-accent ml-1">+</span>}
                </div>
                <div className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-foreground/30 mt-4 font-bold">
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