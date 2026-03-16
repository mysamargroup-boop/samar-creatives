"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: "01",
    title: "Uttar Mitra",
    category: "AI Platform",
    description: "An intelligent AI chat assistant providing reliable answers and support for regional users.",
    tags: ["React", "GenAI", "Tailwind"],
    image: "https://picsum.photos/seed/pc-p1/800/600",
    link: "https://chat.uttarmitra.in"
  },
  {
    id: "02",
    title: "Woody",
    category: "E-Commerce",
    description: "A premium furniture store offering modern and sustainable interior designs.",
    tags: ["Next.js", "Design", "Commerce"],
    image: "https://picsum.photos/seed/pc-p2/800/600",
    link: "https://woody.co.in"
  },
  {
    id: "03",
    title: "Business Woody",
    category: "B2B Solution",
    description: "A specialized business portal for corporate furniture procurement and management.",
    tags: ["React", "B2B", "Dashboard"],
    image: "https://picsum.photos/seed/pc-p3/800/600",
    link: "https://business.woody.co.in"
  },
  {
    id: "04",
    title: "Photography",
    category: "Studio Portfolio",
    description: "Visual storytelling showcase for a professional photography studio capturing moments.",
    tags: ["Next.js", "Motion", "Gallery"],
    image: "https://picsum.photos/seed/pc-p4/800/600",
    link: "https://ashok-studio-photography.vercel.app/"
  },
  {
    id: "05",
    title: "Merchant Web",
    category: "Web App",
    description: "Custom digital solutions and web development for modern businesses and merchants.",
    tags: ["TypeScript", "Next.js", "Vercel"],
    image: "https://picsum.photos/seed/pc-p5/800/600",
    link: "https://merchant-web-sigma.vercel.app/"
  },
  {
    id: "06",
    title: "Samar Makeup",
    category: "Beauty Services",
    description: "Professional makeup artist portfolio and streamlined booking platform.",
    tags: ["React", "Styling", "Booking"],
    image: "https://picsum.photos/seed/pc-p6/800/600",
    link: "https://samar-makeup.vercel.app/"
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
    <section id="works" className="overflow-hidden bg-background dark-section">
      <div ref={triggerRef} className="min-h-screen flex flex-col justify-center py-20 md:py-32">
        <div className="px-8 md:px-12 mb-10 flex items-end justify-between relative z-20 w-full">
          <div className="text-left">
            <span className="text-[10px] uppercase tracking-[0.4em] text-foreground/40 block mb-4 font-bold">Selected Works</span>
            <h2 className="font-display text-[clamp(2rem,6vw,3.5rem)] font-extrabold leading-none tracking-tighter uppercase">Projects</h2>
          </div>
          <div className="font-display text-[6vw] font-extrabold text-foreground/[0.03] leading-none tracking-tighter hidden md:block select-none pointer-events-none">
            {projects.length.toString().padStart(2, '0')}
          </div>
        </div>

        <div ref={sectionRef} className="flex gap-8 md:gap-16 px-8 md:px-12 w-fit relative z-10 items-start">
          {projects.map((project) => (
            <a 
              key={project.id} 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-[80vw] md:w-[480px] shrink-0 block"
            >
              <div className="aspect-[16/10] bg-foreground/5 rounded-2xl overflow-hidden mb-6 relative">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  data-ai-hint="project showcase"
                />
                <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
                   <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500 shadow-xl">
                      <span className="text-accent-foreground font-bold text-xl">↗</span>
                   </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-4 text-left">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-[9px] uppercase tracking-[0.3em] text-accent block font-bold">
                      {project.category}
                    </span>
                    <div className="h-[1px] flex-grow bg-border" />
                  </div>
                  <h3 className="font-display text-base md:text-xl font-extrabold tracking-tight uppercase group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-1.5 flex-wrap">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[7px] md:text-[8px] uppercase tracking-widest px-2.5 py-1 bg-foreground/5 rounded-full text-foreground/60 font-bold">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-foreground/40 text-[9px] md:text-xs leading-relaxed max-w-sm font-medium">
                    {project.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
          <div className="w-[10vw] md:w-32 shrink-0" />
        </div>
      </div>
    </section>
  );
}
