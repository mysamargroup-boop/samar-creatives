
"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Process() {
  const diagonalRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      id: "01",
      title: "Discovery & Strategy",
      desc: "Deep-dive into your goals, audience, and competitors. We define scope, set KPIs, and architect the right solution."
    },
    {
      id: "02",
      title: "Design & Prototyping",
      desc: "High-fidelity wireframes and interactive prototypes. We validate UX flows and brand expression before dev begins."
    },
    {
      id: "03",
      title: "Development & Animation",
      desc: "Pixel-perfect implementation with modern tools. Attention to performance, accessibility, and smooth motion."
    },
    {
      id: "04",
      title: "Launch & Support",
      desc: "Rigorous QA, SEO optimization, and smooth handoff. Post-launch monitoring to iterate based on real data."
    }
  ];

  useEffect(() => {
    if (diagonalRef.current) {
      gsap.to(diagonalRef.current, {
        x: "-10%",
        ease: "none",
        scrollTrigger: {
          trigger: "#process",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        }
      });
    }
  }, []);

  return (
    <section id="process" className="relative py-24 md:py-48 px-6 md:px-12 bg-background border-t border-border overflow-hidden">
      {/* Diagonal Background Text - Increased opacity for visibility */}
      <div 
        ref={diagonalRef}
        className="absolute top-1/2 left-[-25%] w-[150%] font-display text-[10vw] font-extrabold text-foreground/[0.03] select-none pointer-events-none whitespace-nowrap uppercase tracking-[0.2em] z-0 -rotate-[12deg] origin-left"
      >
        STRATEGY • DESIGN • BUILD • LAUNCH • STRATEGY • DESIGN • BUILD • LAUNCH
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-32 items-start">
        <div className="lg:sticky lg:top-32 w-full lg:w-1/3 text-left">
          <span className="text-[10px] uppercase tracking-[0.4em] text-foreground/40 font-bold mb-6 block fade-up">How I Work</span>
          <h2 className="font-display text-[clamp(2rem,6vw,4rem)] font-extrabold leading-[1] tracking-tighter uppercase mb-8">
            My<br />Process
          </h2>
          <p className="text-foreground/50 text-sm md:text-base leading-relaxed max-w-sm">
            Every project is a collaboration. I believe in transparent communication, iterative design, and engineering that scales.
          </p>
        </div>

        <div className="w-full lg:w-2/3 space-y-0 pr-0 md:pr-12">
          {steps.map((step, i) => (
            <div 
              key={i} 
              className="group py-12 md:py-20 border-b border-border last:border-0 fade-up flex flex-col md:flex-row gap-8 md:gap-16 items-start text-left"
            >
              <div className="font-display text-[13px] md:text-[15px] font-bold text-accent tracking-widest shrink-0 mt-1">
                {step.id}
              </div>
              <div className="space-y-4 w-full overflow-hidden">
                <h3 className="font-display text-[clamp(1.5rem,3.5vw,2.2rem)] font-extrabold leading-[0.9] tracking-tight uppercase group-hover:text-accent transition-colors duration-500">
                  {step.title}
                </h3>
                <p className="text-foreground/40 text-sm md:text-lg leading-relaxed max-w-xl group-hover:text-foreground/70 transition-colors duration-500">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
