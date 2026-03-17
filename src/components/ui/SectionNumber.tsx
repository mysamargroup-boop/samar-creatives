"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sectionNumbers: Record<string, string> = {
  hero: "01",
  works: "02",
  skills: "03",
  about: "04",
  advantages: "05",
  process: "06",
  faq: "07",
  contact: "08",
};

export function SectionNumber({ id }: { id: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      gsap.fromTo(ref.current,
        { opacity: 0, yPercent: 30 },
        {
          opacity: 1,
          yPercent: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: `#${id}`,
            start: "top 80%",
            toggleActions: "play none none none",
          }
        }
      );
    }
  }, [id]);

  const num = sectionNumbers[id] || "00";

  return (
    <div
      ref={ref}
      className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 pointer-events-none select-none hidden md:flex flex-col items-center gap-2 opacity-0"
    >
      <div className="w-[1px] h-8 bg-accent/30" />
      <span
        className="font-display text-[11px] font-bold tracking-[0.3em] text-accent/40"
        style={{ writingMode: "vertical-rl" }}
      >
        {num}
      </span>
      <div className="w-[1px] h-8 bg-accent/30" />
    </div>
  );
}
