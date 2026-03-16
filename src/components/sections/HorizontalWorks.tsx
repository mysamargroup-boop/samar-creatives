"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: "01",
    title: "ShopVista",
    category: "E-Commerce Platform",
    image: "https://picsum.photos/seed/pc-p1/800/600",
    color: "#0a0a09"
  },
  {
    id: "02",
    title: "Notion Studio",
    category: "Creative Agency Site",
    image: "https://picsum.photos/seed/pc-p2/800/600",
    color: "#0a0a09"
  },
  {
    id: "03",
    title: "AnalyticsPro",
    category: "SaaS Dashboard",
    image: "https://picsum.photos/seed/pc-p3/800/600",
    color: "#0a0a09"
  },
  {
    id: "04",
    title: "Zaika Delights",
    category: "Restaurant Brand",
    image: "https://picsum.photos/seed/pc-p4/800/600",
    color: "#0a0a09"
  }
];

export function HorizontalWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const trigger = triggerRef.current;
    
    if (!section || !trigger) return;

    const totalWidth = section.scrollWidth - window.innerWidth;

    const pin = gsap.to(section, {
      x: -totalWidth,
      ease: "none",
      scrollTrigger: {
        trigger: trigger,
        pin: true,
        scrub: 1,
        start: "top top",
        end: () => `+=${totalWidth}`,
        invalidateOnRefresh: true,
      }
    });

    return () => {
      pin.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section id="works" className="overflow-hidden bg-background">
      <div ref={triggerRef} className="h-screen flex flex-col justify-center">
        <div className="px-8 md:px-12 mb-10 flex items-end justify-between">
          <div>
            <span className="text-[11px] uppercase tracking-[0.4em] text-foreground/40 block mb-4">Selected Works</span>
            <h2 className="font-display text-[clamp(2.5rem,8vw,6rem)] font-extrabold leading-none tracking-tighter uppercase">Projects</h2>
          </div>
          <div className="font-display text-[8vw] font-extrabold text-foreground/[0.03] leading-none tracking-tighter hidden md:block">
            {projects.length.toString().padStart(2, '0')}
          </div>
        </div>

        <div ref={sectionRef} className="flex gap-10 px-8 md:px-12 w-fit">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group relative w-[300px] md:w-[600px] shrink-0"
            >
              <div className="aspect-[16/10] bg-foreground/5 rounded-2xl overflow-hidden mb-6 relative">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  data-ai-hint="project showcase"
                />
                <div className="absolute inset-0 bg-foreground/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-foreground/40 mb-2 block font-bold">
                    {project.category}
                  </span>
                  <h3 className="font-display text-2xl md:text-4xl font-extrabold tracking-tight uppercase">
                    {project.title}
                  </h3>
                </div>
                <div className="w-10 h-10 border border-foreground/10 rounded-full flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-300">
                  <span className="text-xs font-bold leading-none translate-y-px">↗</span>
                </div>
              </div>
            </div>
          ))}
          {/* Spacer for padding-right */}
          <div className="w-10 md:w-20 shrink-0" />
        </div>
      </div>
    </section>
  );
}
