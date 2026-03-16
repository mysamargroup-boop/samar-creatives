
"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function AboutMe() {
  const bgTextRef = useRef<HTMLDivElement>(null);
  
  const stats = [
    { num: 12, label: "Projects Shipped" },
    { num: 3, label: "Years Experience" },
    { num: 8, label: "Happy Clients" },
    { num: "∞", label: "Cups of Chai" }
  ];

  useEffect(() => {
    if (bgTextRef.current) {
      gsap.fromTo(bgTextRef.current,
        { y: "10%" },
        {
          y: "-10%",
          ease: "none",
          scrollTrigger: {
            trigger: "#about",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          }
        }
      );
    }
  }, []);

  return (
    <section id="about" className="relative py-24 md:py-40 px-6 md:px-12 bg-background overflow-hidden">
      {/* Parallax Background Element */}
      <div 
        ref={bgTextRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[30vw] font-extrabold text-foreground/[0.02] select-none pointer-events-none whitespace-nowrap uppercase tracking-tighter leading-none z-0"
      >
        SAMAR
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start text-left">
        <div className="w-full">
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] text-foreground/40 block mb-8 fade-up font-bold">
            About Me
          </span>
          <h2 className="font-display text-[clamp(2rem,5vw,4rem)] font-extrabold leading-[0.95] tracking-tighter uppercase w-full">
            <div className="reveal-line"><span>Developer</span></div>
            <div className="reveal-line"><span>based in</span></div>
            <div className="reveal-line"><span>Sagar, MP.</span></div>
          </h2>
        </div>

        <div className="space-y-8 w-full lg:pt-16">
          <p className="fade-up text-base md:text-lg leading-relaxed text-foreground/60">
            Hi, I&apos;m <strong className="text-foreground font-medium">Samar</strong> — a self-driven creative developer from <strong className="text-foreground font-medium">Sagar, Madhya Pradesh</strong>, crafting immersive web experiences that blend technical precision with artistic vision.
          </p>
          <p className="fade-up text-base md:text-lg leading-relaxed text-foreground/60">
            I specialize in building fast, accessible, and visually striking websites — from slick marketing pages to complex full-stack applications. My work lives at the intersection of <strong className="text-foreground font-medium">design and engineering</strong>.
          </p>

          <div className="grid grid-cols-2 gap-8 md:gap-12 pt-12 border-t border-border">
            {stats.map((stat, i) => (
              <div key={i} className="fade-up">
                <div className="font-display text-[clamp(2rem,4vw,3rem)] font-extrabold leading-none tracking-tighter flex items-start">
                  {stat.num}
                  {stat.num !== "∞" && <span className="text-[0.5em] text-accent ml-1">+</span>}
                </div>
                <div className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-foreground/30 mt-3 font-bold">
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
