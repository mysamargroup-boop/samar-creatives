"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";

const projects = [
  { id: "01", name: "ShopVista", cat: "E-Commerce", tags: ["React", "Node.js", "MongoDB", "Stripe"], color: "#000" },
  { id: "02", name: "Notion Studio", cat: "Creative Agency", tags: ["Next.js", "GSAP", "Tailwind"], color: "#000" },
  { id: "03", name: "AnalyticsPro", cat: "SaaS Dashboard", tags: ["React", "TypeScript", "D3.js"], color: "#000" },
  { id: "04", name: "Zaika Delights", cat: "Restaurant Site", tags: ["HTML/CSS", "GSAP", "WordPress"], color: "#000" },
  { id: "05", name: "PropNest", cat: "Real Estate", tags: ["Next.js", "Mapbox", "PostgreSQL"], color: "#000" }
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
    <section id="works" className="py-24 md:py-40 bg-background">
      <div className="px-6 md:px-12 flex flex-col md:flex-row items-start md:items-end justify-between mb-20 gap-8">
        <div>
          <span className="text-[11px] uppercase tracking-[0.3em] text-foreground/40 block mb-4 fade-up">Selected Works</span>
          <h2 className="font-display text-[clamp(2.5rem,10vw,7rem)] font-extrabold leading-none tracking-tighter uppercase fade-up text-left">Projects</h2>
        </div>
        <div className="font-display text-[64px] md:text-[10vw] font-extrabold text-foreground/[0.03] leading-none tracking-tighter fade-up hidden sm:block">
          05
        </div>
      </div>

      <div className="px-6 md:px-12 max-w-7xl mx-auto space-y-0">
        {projects.map((project) => (
          <Link 
            key={project.id}
            href="#"
            className="project-item group relative grid grid-cols-[40px_1fr_auto] md:grid-cols-[80px_1fr_auto] items-center gap-4 md:gap-10 py-8 md:py-12 border-b border-border hover:text-foreground transition-colors overflow-hidden"
            onMouseEnter={() => setHoveredProject(project)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            {/* Background Hover Slide */}
            <div className="absolute inset-0 bg-foreground/[0.02] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]" />

            <span className="font-display text-[11px] md:text-[13px] font-bold text-foreground/30 tracking-widest relative z-10">
              {project.id}
            </span>

            <div className="relative z-10 text-left">
              <h3 className="font-display text-[20px] md:text-[40px] font-bold leading-none tracking-tight group-hover:translate-x-4 transition-transform duration-500 mb-2">
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

            <div className="project-arrow w-8 h-8 md:w-14 md:h-14 border border-border rounded-full flex items-center justify-center group-hover:bg-foreground group-hover:border-foreground group-hover:rotate-45 transition-all duration-500 relative z-10">
              <svg className="w-3 h-3 md:w-5 md:h-5 text-foreground/40 group-hover:text-background transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </Link>
        ))}
      </div>

      {/* Floating Preview */}
      <div 
        ref={previewRef}
        className={`fixed w-[240px] h-[150px] md:w-[320px] md:h-[220px] z-[200] pointer-events-none rounded-xl overflow-hidden shadow-2xl transition-all duration-300 transform hidden md:block ${hoveredProject ? 'opacity-100 scale-100 rotate-[-2deg]' : 'opacity-0 scale-90 rotate-[-4deg]'}`}
        style={{ 
          background: 'white',
          border: `1px solid rgba(0,0,0,0.1)`
        }}
      >
        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
          <span className="font-display text-[11px] uppercase tracking-[0.2em] text-black/40 mb-2">
            {hoveredProject?.cat}
          </span>
          <span className="font-display text-[20px] font-bold tracking-tight text-black">
            {hoveredProject?.name}
          </span>
        </div>
      </div>
    </section>
  );
}
