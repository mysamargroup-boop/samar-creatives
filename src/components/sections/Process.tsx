"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionNumber } from "@/components/ui/SectionNumber";

gsap.registerPlugin(ScrollTrigger);

export function Process() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      id: "01",
      title: "Discovery & Strategy",
      desc: "Deep-dive into your goals, audience, and competitors. We architect the right solution."
    },
    {
      id: "02",
      title: "Design & Prototyping",
      desc: "High-fidelity wireframes and interactive prototypes. We validate UX flows before dev."
    },
    {
      id: "03",
      title: "Development & Animation",
      desc: "Pixel-perfect implementation with modern tools and attention to performance."
    },
    {
      id: "04",
      title: "Launch & Support",
      desc: "Rigorous QA, SEO optimization, and smooth handoff for long-term growth."
    }
  ];

  useEffect(() => {
    // Marquee-style watermark that moves with scroll
    if (marqueeRef.current) {
      gsap.to(marqueeRef.current, {
        xPercent: -50,
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
    <section id="process" className="relative py-12 md:py-16 px-6 md:px-12 bg-background border-t border-border overflow-hidden">
      <SectionNumber id="process" />

      {/* Diagonal Scroll-Linked Watermark */}
      <div className="absolute top-1/2 left-[-10%] w-[200%] -translate-y-1/2 -rotate-[8deg] z-0 pointer-events-none select-none overflow-hidden">
        <div 
          ref={marqueeRef}
          className="flex whitespace-nowrap font-display text-[8vw] font-extrabold text-foreground/[0.04] uppercase tracking-[0.15em]"
        >
          <span className="mx-8">Strategy</span>
          <span className="mx-8">•</span>
          <span className="mx-8">Design</span>
          <span className="mx-8">•</span>
          <span className="mx-8">Build</span>
          <span className="mx-8">•</span>
          <span className="mx-8">Launch</span>
          <span className="mx-8">•</span>
          <span className="mx-8">Strategy</span>
          <span className="mx-8">•</span>
          <span className="mx-8">Design</span>
          <span className="mx-8">•</span>
          <span className="mx-8">Build</span>
          <span className="mx-8">•</span>
          <span className="mx-8">Launch</span>
          <span className="mx-8">•</span>
          <span className="mx-8">Strategy</span>
          <span className="mx-8">•</span>
          <span className="mx-8">Design</span>
          <span className="mx-8">•</span>
          <span className="mx-8">Build</span>
          <span className="mx-8">•</span>
          <span className="mx-8">Launch</span>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-start text-left">
        <div className="lg:sticky lg:top-32 w-full lg:w-1/3 text-left">
          <span className="text-[10px] uppercase tracking-[0.4em] text-foreground/40 font-bold mb-4 block fade-up">How I Work</span>
          <h2 className="font-display text-[clamp(2rem,6vw,4rem)] font-extrabold leading-[1] tracking-tighter uppercase mb-6">
            My<br />Process
          </h2>
          <p className="text-foreground/50 text-sm leading-relaxed max-w-sm">
            I believe in transparent communication, iterative design, and engineering that scales.
          </p>
        </div>

        <div className="w-full lg:w-2/3 space-y-0">
          {steps.map((step, i) => (
            <div 
              key={i} 
              className="group py-10 md:py-16 border-b border-border last:border-0 fade-up flex flex-col md:flex-row gap-8 md:gap-12 items-start text-left"
            >
              <div className="font-display text-[12px] md:text-[14px] font-bold text-accent tracking-widest shrink-0 mt-1">
                {step.id}
              </div>
              <div className="space-y-3 w-full">
                <h3 className="font-display text-[clamp(1.5rem,3.5vw,2.2rem)] font-extrabold leading-[0.9] tracking-tight uppercase group-hover:text-accent transition-colors duration-500">
                  {step.title}
                </h3>
                <p className="text-foreground/40 text-sm md:text-base leading-relaxed max-w-xl group-hover:text-foreground/70 transition-colors duration-500">
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
