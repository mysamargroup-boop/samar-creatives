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
    category: "E-Commerce",
    description: "A high-performance full-stack platform with real-time inventory and Stripe integration.",
    tags: ["React", "Node.js", "MongoDB"],
    image: "https://picsum.photos/seed/pc-p1/800/600",
  },
  {
    id: "02",
    title: "Notion Studio",
    category: "Creative Agency",
    description: "Immersive brand experience with complex GSAP transitions and editorial design.",
    tags: ["Next.js", "GSAP", "Tailwind"],
    image: "https://picsum.photos/seed/pc-p2/800/600",
  },
  {
    id: "03",
    title: "AnalyticsPro",
    category: "SaaS Dashboard",
    description: "Enterprise data visualization tool with multi-tenant authentication and charts.",
    tags: ["React", "TypeScript", "D3.js"],
    image: "https://picsum.photos/seed/pc-p3/800/600",
  },
  {
    id: "04",
    title: "Zaika Delights",
    category: "Restaurant Brand",
    description: "A minimalist digital menu and booking system for a premium fine-dining establishment.",
    tags: ["Next.js", "Prisma", "PostgreSQL"],
    image: "https://picsum.photos/seed/pc-p4/800/600",
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
        <div className="px-8 md:px-12 mb-12 flex items-end justify-between">
          <div>
            <span className="text-[11px] uppercase tracking-[0.4em] text-foreground/40 block mb-4 font-bold">Selected Works</span>
            <h2 className="font-display text-[clamp(3rem,9vw,7rem)] font-extrabold leading-none tracking-tighter uppercase">Projects</h2>
          </div>
          <div className="font-display text-[8vw] font-extrabold text-foreground/[0.03] leading-none tracking-tighter hidden md:block">
            {projects.length.toString().padStart(2, '0')}
          </div>
        </div>

        <div ref={sectionRef} className="flex gap-12 px-8 md:px-12 w-fit">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group relative w-[85vw] md:w-[650px] shrink-0"
            >
              <div className="aspect-[16/10] bg-foreground/5 rounded-2xl overflow-hidden mb-8 relative">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  data-ai-hint="project showcase"
                />
                <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
                   <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500 shadow-xl">
                      <span className="text-accent-foreground font-bold text-xl">↗</span>
                   </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 md:gap-12 text-left">
                <div className="space-y-4">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-accent block font-bold">
                    {project.category}
                  </span>
                  <h3 className="font-display text-2xl md:text-4xl font-extrabold tracking-tight uppercase">
                    {project.title}
                  </h3>
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[9px] uppercase tracking-widest px-3 py-1 bg-foreground/5 rounded-full text-foreground/60 font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col justify-start py-1">
                  <p className="text-foreground/50 text-base md:text-lg leading-relaxed max-w-md">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
          <div className="w-[10vw] md:w-40 shrink-0" />
        </div>
      </div>
    </section>
  );
}