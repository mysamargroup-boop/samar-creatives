"use client";

import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const projects = [
  {
    id: "01",
    title: "ShopVista",
    description: "Full-stack e-commerce platform with real-time inventory, Stripe checkout, and an admin dashboard.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "project-1",
    color: "linear-gradient(135deg,#12200f,#1e3318)"
  },
  {
    id: "02",
    title: "Notion Studio",
    description: "Creative agency site with GSAP page transitions, horizontal scroll, and a custom cursor experience.",
    tags: ["Next.js", "GSAP", "Tailwind"],
    image: "project-2",
    color: "linear-gradient(135deg,#1a0f0f,#2e1a1a)"
  },
  {
    id: "03",
    title: "AnalyticsPro",
    description: "SaaS dashboard with D3.js charts, multi-tenant auth, and real-time WebSocket data feeds.",
    tags: ["React", "TypeScript", "D3.js"],
    image: "project-3",
    color: "linear-gradient(135deg,#0c1825,#112236)"
  },
  {
    id: "04",
    title: "Zaika Delights",
    description: "Restaurant brand website with menu animations, table booking system, and SEO optimization.",
    tags: ["HTML/CSS", "GSAP", "WordPress"],
    image: "project-4",
    color: "linear-gradient(135deg,#1a1600,#2e2800)"
  }
];

export function ProjectsGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!trackRef.current || !sectionRef.current) return;

    const track = trackRef.current;
    const section = sectionRef.current;

    const getScrollAmount = () => {
      const trackWidth = track.scrollWidth;
      const windowWidth = window.innerWidth;
      return -(trackWidth - windowWidth + 64);
    };

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const scrollTween = gsap.to(track, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${track.scrollWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      return () => {
        scrollTween.kill();
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <section id="works" ref={sectionRef} className="dark-section bg-primary text-primary-foreground overflow-hidden md:h-screen flex flex-col">
      <div className="px-8 pt-24 pb-12 flex items-end justify-between shrink-0">
        <h2 className="font-display text-6xl sm:text-8xl leading-none">
          SELECTED<br />WORKS
        </h2>
        <span className="text-[11px] uppercase tracking-widest opacity-40">{projects.length} projects</span>
      </div>

      <div className="flex-grow flex items-center px-8 overflow-x-auto md:overflow-hidden no-scrollbar">
        <div ref={trackRef} className="flex gap-8 will-change-transform py-10 md:py-0">
          {projects.map((project) => {
            const projectImg = PlaceHolderImages.find(img => img.id === project.image);
            return (
              <div key={project.id} className="min-w-[300px] sm:min-w-[480px] group border border-primary-foreground/10 p-1 flex flex-col bg-primary-foreground/[0.03] hover:border-primary-foreground/30 transition-all duration-500">
                <div className="relative aspect-[16/10] overflow-hidden flex items-center justify-center" style={{ background: project.color }}>
                  <div className="absolute inset-4 sm:inset-6 bg-[#1a1a18] rounded-t-lg shadow-2xl overflow-hidden group-hover:scale-[1.02] transition-transform duration-700">
                    <div className="h-6 bg-[#252523] flex items-center px-3 gap-1 border-b border-white/5">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                      <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    </div>
                    <div className="p-4 flex flex-col items-center justify-center h-full relative">
                       <Image 
                        src={projectImg?.imageUrl || `https://picsum.photos/seed/${project.id}/800/600`}
                        alt={project.title}
                        fill
                        className="object-cover opacity-50 group-hover:opacity-80 transition-opacity"
                      />
                      <span className="font-display text-lg opacity-40 relative z-10 uppercase tracking-widest">{project.title}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 flex flex-col gap-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-display text-3xl mb-2">{project.title}</h3>
                      <p className="text-xs text-primary-foreground/40 leading-relaxed mb-4 max-w-xs">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-[9px] uppercase tracking-widest px-2 py-1 border border-primary-foreground/10 rounded-full opacity-60">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <span className="font-display text-xs opacity-20">{project.id}</span>
                  </div>
                  <Link href="#" className="text-[10px] uppercase tracking-widest text-accent hover:translate-x-2 transition-transform inline-flex items-center gap-2 mt-2">
                    View Project <span className="text-sm">→</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
