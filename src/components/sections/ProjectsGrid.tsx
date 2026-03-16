
"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";

const projects = [
  { id: "01", name: "Uttar Mitra", cat: "AI Platform", tags: ["React", "GenAI", "Tailwind"], link: "https://chat.uttarmitra.in" },
  { id: "02", name: "Woody", cat: "E-Commerce", tags: ["Next.js", "Design", "Commerce"], link: "https://woody.co.in" },
  { id: "03", name: "Business Woody", cat: "B2B Solution", tags: ["React", "B2B", "Dashboard"], link: "https://business.woody.co.in" },
  { id: "04", name: "Photography", cat: "Studio Portfolio", tags: ["Next.js", "Motion", "Gallery"], link: "https://ashok-studio-photography.vercel.app/" },
  { id: "05", name: "Merchant Web", cat: "Web App", tags: ["TypeScript", "Next.js", "Vercel"], link: "https://merchant-web-sigma.vercel.app/" },
  { id: "06", name: "Samar Makeup", cat: "Beauty Services", tags: ["React", "Styling", "Booking"], link: "https://samar-makeup.vercel.app/" }
];

export function ProjectsGrid() {
  const [hoveredProject, setHoveredProject] = useState<typeof projects[0] | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (previewRef.current) {
        gsap.to(previewRef.current, {
          left: e.clientX + 24,
          top: e.clientY - 60,
          duration: 0.4,
          ease: 'power3.out'
        });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="works-list" className="py-24 md:py-40 bg-background">
      <div className="px-6 md:px-12 flex flex-col md:flex-row items-start md:items-end justify-between mb-20 gap-8">
        <div>
          <span className="text-[11px] uppercase tracking-[0.3em] text-foreground/40 block mb-4 fade-up">Project Archive</span>
          <h2 className="font-display text-[clamp(2.5rem,10vw,5rem)] font-extrabold leading-none tracking-tighter uppercase fade-up text-left">Works</h2>
        </div>
        <div className="font-display text-[64px] md:text-[8vw] font-extrabold text-foreground/[0.03] leading-none tracking-tighter fade-up hidden sm:block">
          {projects.length.toString().padStart(2, '0')}
        </div>
      </div>

      <div className="px-6 md:px-12 max-w-7xl mx-auto space-y-0">
        {projects.map((project) => (
          <a 
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-item group relative grid grid-cols-[40px_1fr_auto] md:grid-cols-[80px_1fr_auto] items-center gap-4 md:gap-10 py-8 md:py-10 border-b border-border hover:text-foreground transition-colors overflow-hidden"
            onMouseEnter={() => setHoveredProject(project)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="absolute inset-0 bg-foreground/[0.02] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]" />

            <span className="font-display text-[11px] md:text-[13px] font-bold text-foreground/30 tracking-widest relative z-10">
              {project.id}
            </span>

            <div className="relative z-10 text-left">
              <h3 className="font-display text-[20px] md:text-[32px] font-bold leading-none tracking-tight group-hover:translate-x-4 transition-transform duration-500 mb-2">
                {project.name}
              </h3>
              <div className="flex gap-2 flex-wrap">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[8px] md:text-[10px] uppercase tracking-widest text-foreground/40 border border-border px-2 py-1 rounded-full group-hover:border-foreground/30 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="project-arrow w-8 h-8 md:w-12 md:h-12 border border-border rounded-full flex items-center justify-center group-hover:bg-foreground group-hover:border-foreground group-hover:rotate-45 transition-all duration-500 relative z-10">
              <svg className="w-3 h-3 md:w-4 md:h-4 text-foreground/40 group-hover:text-background transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </a>
        ))}
      </div>

      <div 
        ref={previewRef}
        className={`fixed w-[240px] h-[150px] md:w-[280px] md:h-[180px] z-[200] pointer-events-none rounded-xl overflow-hidden shadow-2xl transition-all duration-300 transform hidden md:block ${hoveredProject ? 'opacity-100 scale-100 rotate-[-2deg]' : 'opacity-0 scale-90 rotate-[-4deg]'}`}
        style={{ 
          background: 'white',
          border: `1px solid rgba(0,0,0,0.1)`
        }}
      >
        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
          <span className="font-display text-[11px] uppercase tracking-[0.2em] text-black/40 mb-2">
            {hoveredProject?.cat}
          </span>
          <span className="font-display text-[18px] font-bold tracking-tight text-black">
            {hoveredProject?.name}
          </span>
        </div>
      </div>
    </section>
  );
}
