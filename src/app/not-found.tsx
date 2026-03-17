"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { Magnetic } from "@/components/ui/Magnetic";

export default function NotFound() {
  useEffect(() => {
    gsap.from(".not-found-text span", {
      yPercent: 100,
      opacity: 0,
      rotationX: -90,
      transformOrigin: "50% 50% -50px",
      stagger: 0.1,
      duration: 1,
      ease: "expo.out",
    });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center relative overflow-hidden">
      <div className="bg-noise" />
      
      {/* Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[30vw] font-extrabold text-foreground/[0.03] select-none pointer-events-none leading-none z-0">
        404
      </div>

      <div className="relative z-10 text-center px-6">
        <h1 className="font-display text-[clamp(4rem,10vw,8rem)] font-extrabold uppercase tracking-tighter leading-none mb-6">
          <div className="not-found-text overflow-hidden" style={{ perspective: '1000px' }}>
            <span className="inline-block">Page</span>
          </div>
          <div className="not-found-text overflow-hidden" style={{ perspective: '1000px' }}>
            <span className="inline-block text-accent">Not Found.</span>
          </div>
        </h1>
        
        <p className="text-foreground/50 text-sm md:text-base max-w-md mx-auto mb-12">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        <Magnetic intensity={0.3}>
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-full font-display text-sm font-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-transform"
          >
            Return Home ↗
          </Link>
        </Magnetic>
      </div>
    </div>
  );
}
