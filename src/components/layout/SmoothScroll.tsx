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
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Custom Cursor Logic
    const cursor = cursorRef.current;
    const follower = cursorFollowerRef.current;

    if (cursor && follower) {
      const moveCursor = (e: MouseEvent) => {
        gsap.to(cursor, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.1,
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
          scale: 2,
          backgroundColor: "rgba(232, 75, 44, 0.1)",
          borderColor: "rgba(232, 75, 44, 1)",
          duration: 0.3,
        });
      };

      const handleUnhover = () => {
        gsap.to(follower, {
          scale: 1,
          backgroundColor: "transparent",
          borderColor: "currentColor",
          duration: 0.3,
        });
      };

      const interactiveElements = document.querySelectorAll("a, button, .group");
      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", handleHover);
        el.addEventListener("mouseleave", handleUnhover);
      });

      return () => {
        window.removeEventListener("mousemove", moveCursor);
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
