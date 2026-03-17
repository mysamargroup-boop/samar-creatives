"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Instagram, Globe, Zap, Search, Layout, Database } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  {
    icon: <Search className="w-5 h-5" />,
    title: "SEO Visibility",
    insta: "Invisible to Google searches.",
    web: "Rank on page one for your niche.",
    color: "accent"
  },
  {
    icon: <Database className="w-5 h-5" />,
    title: "Data Ownership",
    insta: "You rent space; they own your audience.",
    web: "You own your data, domain, and destiny.",
    color: "white"
  },
  {
    icon: <Layout className="w-5 h-5" />,
    title: "Design Freedom",
    insta: "Standardized, restricted grid layout.",
    web: "Unlimited creative and motion potential.",
    color: "accent"
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Conversion",
    insta: "Limited to 'Link in Bio'.",
    web: "Integrated bookings, sales, and funnels.",
    color: "white"
  }
];

export function Comparison() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".benefit-card", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 md:py-40 px-6 md:px-12 bg-background border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-left">
          <span className="text-[10px] uppercase tracking-[0.4em] text-foreground/40 font-bold mb-6 block fade-up">Strategy</span>
          <h2 className="font-display text-[clamp(2rem,6vw,4rem)] font-extrabold leading-[0.9] tracking-tighter uppercase mb-6">
            The Website <br /><span className="text-accent">Advantage</span>
          </h2>
          <p className="text-foreground/50 text-sm md:text-base max-w-xl leading-relaxed">
            Stop building on rented land. While social media is for discovery, your website is where your brand lives, converts, and scales without algorithms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((benefit, i) => (
            <div 
              key={i} 
              className="benefit-card group p-8 bg-foreground/[0.03] border border-border rounded-3xl hover:bg-foreground/[0.05] transition-all duration-500"
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-10 transition-transform group-hover:scale-110 ${benefit.color === 'accent' ? 'bg-accent text-accent-foreground' : 'bg-foreground/10 text-foreground'}`}>
                {benefit.icon}
              </div>
              
              <h3 className="font-display text-2xl font-extrabold uppercase tracking-tight mb-8 text-left">
                {benefit.title}
              </h3>

              <div className="space-y-6 text-left">
                <div className="space-y-2">
                  <span className="text-[9px] uppercase tracking-widest text-foreground/30 font-bold flex items-center gap-2">
                    <Instagram className="w-3 h-3" /> Instagram
                  </span>
                  <p className="text-[11px] text-foreground/40 leading-relaxed font-medium">
                    {benefit.insta}
                  </p>
                </div>
                
                <div className="h-[1px] w-full bg-border" />

                <div className="space-y-2">
                  <span className="text-[9px] uppercase tracking-widest text-accent font-bold flex items-center gap-2">
                    <Globe className="w-3 h-3" /> Website
                  </span>
                  <p className="text-[11px] text-foreground/70 leading-relaxed font-medium">
                    {benefit.web}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
