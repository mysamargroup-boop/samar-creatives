
"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ContactForm() {
  const watermarkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (watermarkRef.current) {
      gsap.fromTo(watermarkRef.current,
        { y: "15%", opacity: 0 },
        {
          y: "-15%",
          opacity: 0.15,
          ease: "none",
          scrollTrigger: {
            trigger: "#contact",
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          }
        }
      );
    }
  }, []);

  return (
    <section id="contact" className="relative py-20 md:py-28 px-6 text-center overflow-hidden bg-background border-t border-border">
      {/* HELLO Green Gradient Watermark */}
      <div 
        ref={watermarkRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[18vw] font-extrabold select-none pointer-events-none whitespace-nowrap uppercase tracking-tighter bg-gradient-to-b from-emerald-500 to-teal-500/10 bg-clip-text text-transparent z-0"
      >
        HELLO
      </div>
      
      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto">
        <span className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] text-foreground/40 font-bold mb-6 fade-up">Available for Freelance</span>
        
        <h2 className="font-display text-[clamp(2.5rem,9vw,6.5rem)] font-extrabold leading-[0.9] tracking-tighter uppercase mb-12 fade-up text-left md:text-center">
          Have an<br />
          <em className="font-serif italic text-accent lowercase font-normal opacity-80 block -mt-2">idea?</em>
        </h2>
        
        <div className="flex flex-col items-center gap-6 w-full px-4 md:px-0 Montserrat">
          <a 
            href="https://instagram.com/shubham__nema" 
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full md:w-auto inline-flex items-center justify-center gap-3 px-8 md:px-14 py-4 md:py-6 bg-foreground text-background font-display text-sm md:text-lg font-extrabold tracking-tight rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl"
          >
            <span className="relative z-10 uppercase">Send me a message ↗</span>
          </a>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-8">
            {["GitHub", "LinkedIn", "Twitter"].map((social) => (
              <Link 
                key={social} 
                href="#" 
                className="text-[9px] md:text-[11px] uppercase tracking-[0.2em] font-bold text-foreground/30 border border-border rounded-full px-5 md:px-7 py-2.5 md:py-3.5 hover:bg-foreground hover:text-background transition-all"
              >
                {social}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
