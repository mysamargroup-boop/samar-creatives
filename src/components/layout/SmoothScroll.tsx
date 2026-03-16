"use client";

import React, { useEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorFollowerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Exact Lenis Initialization from HTML file
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    // Link Lenis to ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // Sync GSAP ticker with Lenis
    const tickerUpdate = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerUpdate);
    gsap.ticker.lagSmoothing(0);

    // Custom Cursor Logic
    const cursor = cursorRef.current;
    const follower = cursorFollowerRef.current;

    if (cursor && follower) {
      const moveCursor = (e: MouseEvent) => {
        gsap.to(cursor, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.08,
          ease: "none"
        });
        
        // The "f" follower is slower
        gsap.to(follower, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.3,
        });
      };

      window.addEventListener("mousemove", moveCursor);

      const handleHover = () => {
        gsap.to(follower, {
          width: 60,
          height: 60,
          duration: 0.3,
        });
      };

      const handleUnhover = () => {
        gsap.to(follower, {
          width: 40,
          height: 40,
          duration: 0.3,
        });
      };

      const interactiveElements = document.querySelectorAll("a, button, .group, .project-card");
      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", handleHover);
        el.addEventListener("mouseleave", handleUnhover);
      });

      return () => {
        window.removeEventListener("mousemove", moveCursor);
        gsap.ticker.remove(tickerUpdate);
        lenis.destroy();
      };
    }
  }, []);

  return (
    <>
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-2 h-2 bg-foreground rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block mix-blend-difference"
      />
      <div 
        ref={cursorFollowerRef} 
        className="fixed top-0 left-0 w-10 h-10 border border-foreground/30 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 hidden md:block"
      />
      {children}
    </>
  );
}
