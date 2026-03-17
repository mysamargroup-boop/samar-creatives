"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Magnetic } from "@/components/ui/Magnetic";
import { SectionNumber } from "@/components/ui/SectionNumber";
import { Palette, Code2, Layers } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/**
 * ──── HOW TO ADD A NEW PROJECT ────
 * 1. Take a screenshot of the project website (recommended: 1600x1000px)
 * 2. Save the image to: public/projects/<project-name>.png
 * 3. Add a new entry to this array:
 *    {
 *      id: "06",                              // Next incremental ID
 *      title: "Project Name",                 // Display title
 *      category: "E-Commerce",                // Short category label
 *      description: "Brief project desc...",   // 1-2 sentence description
 *      tags: ["React", "Next.js"],            // 2-3 tech tags
 *      image: "/projects/<project-name>.webp", // Path relative to public/
 *      link: "https://example.com"            // Live project URL
 *    }
 * 4. IMPORTANT: Also update the same project list in src/app/works/page.tsx
 */
const projects = [
  {
    id: "01",
    title: "Uttar Mitra",
    category: "AI Platform",
    description: "An intelligent AI chat assistant providing reliable answers and support for regional users.",
    tags: ["React", "GenAI", "Tailwind"],
    image: "/uttarmitra.webp",
    link: "https://chat.uttarmitra.in"
  },
  {
    id: "02",
    title: "Woody",
    category: "E-Commerce",
    description: "A premium furniture store offering modern and sustainable interior designs.",
    tags: ["Next.js", "Design", "Commerce"],
    image: "/woody.webp",
    link: "https://woody.co.in"
  },
  {
    id: "03",
    title: "Business Woody",
    category: "B2B Solution",
    description: "A specialized business portal for corporate furniture procurement and management.",
    tags: ["React", "B2B", "Dashboard"],
    image: "/business-woody.webp",
    link: "https://business.woody.co.in"
  },
  {
    id: "04",
    title: "Photography",
    category: "Studio Portfolio",
    description: "Visual storytelling showcase for a professional photography studio capturing moments.",
    tags: ["Next.js", "Motion", "Gallery"],
    image: "/photography.webp",
    link: "https://ashok-studio-photography.vercel.app/"
  },
  {
    id: "05",
    title: "Nemaone",
    category: "E-Commerce",
    description: "A premium e-commerce platform built for scale and conversion.",
    tags: ["Next.js", "Commerce"],
    image: "/nemaone.webp",
    link: "https://nemaone.com"
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
        onUpdate: (self) => {
          const velocity = Math.min(Math.max(self.getVelocity() / 150, -15), 15);
          gsap.to(".project-card-wrap", {
            skewX: -velocity,
            duration: 0.5,
            ease: "power2.out",
            overwrite: "auto"
          });
        }
      }
    });

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section id="works" className="overflow-hidden bg-background relative">
      <SectionNumber id="works" />

      {/* Scattered Icon Watermarks */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none opacity-[0.03] overflow-hidden">
        <Palette className="absolute top-[15%] left-[10%] w-20 h-20 rotate-12" />
        <Code2 className="absolute top-[60%] left-[30%] w-16 h-16 -rotate-12" />
        <Layers className="absolute top-[30%] right-[15%] w-24 h-24 rotate-45" />
        <Palette className="absolute bottom-[20%] right-[25%] w-14 h-14 -rotate-45" />
      </div>

      <div ref={triggerRef} className="min-h-screen flex flex-col justify-center py-12 md:py-16">
        <div className="px-8 md:px-12 mb-10 flex items-end justify-between relative z-20 w-full">
          <div className="text-left">
            <span className="text-[10px] uppercase tracking-[0.4em] text-foreground/40 block mb-4 font-bold">Selected Works</span>
            <h2 className="font-display text-[clamp(2rem,6vw,3.5rem)] font-extrabold leading-none tracking-tighter uppercase">Projects</h2>
          </div>
          <div className="font-display text-[6vw] font-extrabold text-foreground/[0.03] leading-none tracking-tighter hidden md:block select-none pointer-events-none">
            {projects.length.toString().padStart(2, '0')}
          </div>
        </div>

        <div ref={sectionRef} className="flex gap-8 md:gap-12 px-8 md:px-12 w-fit relative z-10 items-start">
          {projects.map((project) => (
            <Magnetic key={project.id} intensity={0.2}>
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card-wrap group relative w-[80vw] md:w-[450px] shrink-0 block"
              >
                <div className="aspect-[16/10] bg-foreground/5 rounded-2xl overflow-hidden mb-6 relative border border-border">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-background/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm pointer-events-none">
                     <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500 shadow-xl pointer-events-none">
                        <span className="text-accent-foreground font-bold text-xl">↗</span>
                     </div>
                  </div>
                </div>
                
                <div className="space-y-3 text-left">
                  <div className="flex items-center gap-3">
                    <span className="text-[9px] uppercase tracking-[0.3em] text-accent font-bold">
                      {project.category}
                    </span>
                    <div className="h-[1px] flex-grow bg-border" />
                  </div>
                  <h3 className="font-display text-base md:text-xl font-extrabold tracking-tight uppercase group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-foreground/40 text-[10px] md:text-xs leading-relaxed max-w-full font-medium pr-4">
                    {project.description}
                  </p>
                </div>
              </a>
            </Magnetic>
          ))}
          <div className="w-[10vw] md:w-32 shrink-0" />
        </div>
      </div>
    </section>
  );
}
