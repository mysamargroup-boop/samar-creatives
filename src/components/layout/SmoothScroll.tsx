
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
    // Lenis Initialization matching the original portfolio feel
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenis.on('scroll', ScrollTrigger.update);

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
          backgroundColor: "rgba(245, 240, 232, 0.1)",
        });
      };

      const handleUnhover = () => {
        gsap.to(follower, {
          width: 40,
          height: 40,
          duration: 0.3,
          backgroundColor: "transparent",
        });
      };

      // Detect dark sections to change cursor color
      const handleDarkSectionEnter = () => {
        gsap.to(cursor, {
          backgroundColor: "hsl(var(--background))", // Ivory color
          duration: 0.3
        });
        gsap.to(follower, {
          borderColor: "hsl(var(--background))",
          duration: 0.3
        });
      };

      const handleDarkSectionLeave = () => {
        gsap.to(cursor, {
          backgroundColor: "hsl(var(--foreground))", // Ink color
          duration: 0.3
        });
        gsap.to(follower, {
          borderColor: "rgba(10, 10, 9, 0.3)",
          duration: 0.3
        });
      };

      const interactiveElements = document.querySelectorAll("a, button, .group, .project-card");
      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", handleHover);
        el.addEventListener("mouseleave", handleUnhover);
      });

      const darkSections = document.querySelectorAll(".dark-section");
      darkSections.forEach((section) => {
        section.addEventListener("mouseenter", handleDarkSectionEnter);
        section.addEventListener("mouseleave", handleDarkSectionLeave);
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
        className="fixed top-0 left-0 w-2 h-2 bg-foreground rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block"
        style={{ mixBlendMode: 'normal' }}
      />
      <div 
        ref={cursorFollowerRef} 
        className="fixed top-0 left-0 w-10 h-10 border border-foreground/30 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 hidden md:block"
      />
      {children}
    </>
  );
}
