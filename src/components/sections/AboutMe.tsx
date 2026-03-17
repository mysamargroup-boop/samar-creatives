
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
        { y: "15%", opacity: 0 },
        {
          y: "-15%",
          opacity: 0.15,
          ease: "none",
          scrollTrigger: {
            trigger: "#about",
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          }
        }
      );
    }
  }, []);

  return (
    <section id="about" className="relative py-16 md:py-24 px-6 md:px-12 bg-background overflow-hidden">
      {/* SAMAR Orange Gradient Watermark */}
      <div 
        ref={bgTextRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[15vw] font-extrabold select-none pointer-events-none whitespace-nowrap uppercase tracking-tighter leading-none z-0 bg-gradient-to-br from-[#ff5f3f] to-transparent bg-clip-text text-transparent"
      >
        SAMAR
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start text-left">
        <div className="w-full lg:pr-12">
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] text-foreground/40 block mb-6 fade-up font-bold">
            About Me
          </span>
          <h2 className="font-display text-[clamp(2.2rem,5vw,4.2rem)] font-extrabold leading-[1] tracking-tighter uppercase w-full">
            <div className="reveal-line w-full"><span>Architecting</span></div>
            <div className="reveal-line w-full"><span>Digital</span></div>
            <div className="reveal-line w-full text-accent"><span>Legacies.</span></div>
          </h2>
        </div>

        <div className="space-y-6 w-full lg:pt-12 Montserrat">
          <p className="fade-up text-base leading-relaxed text-foreground/60">
            Hi, I'm <strong className="text-foreground font-semibold">Samar</strong> — a creative developer from <strong className="text-foreground font-semibold">Sagar, MP</strong>, crafting immersive web experiences.
          </p>
          <p className="fade-up text-base leading-relaxed text-foreground/60">
            I specialize in building fast, accessible, and visually striking websites at the intersection of <strong className="text-foreground font-semibold">design and engineering</strong>.
          </p>

          <div className="grid grid-cols-2 gap-6 md:gap-10 pt-10 border-t border-border">
            {stats.map((stat, i) => (
              <div key={i} className="fade-up">
                <div className="font-display text-[clamp(1.8rem,4vw,2.5rem)] font-extrabold leading-none tracking-tighter flex items-start">
                  {stat.num}
                  {stat.num !== "∞" && <span className="text-[0.5em] text-accent ml-1">+</span>}
                </div>
                <div className="text-[9px] uppercase tracking-[0.2em] text-foreground/30 mt-2 font-bold font-body">
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
