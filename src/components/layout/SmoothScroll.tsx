"use client";

import React, { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [percent, setPercent] = useState(0);
  
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const preloaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Preloader Simulation
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(preloaderRef.current, {
          yPercent: -100,
          duration: 1,
          ease: "power4.inOut",
          onComplete: () => {
            setLoading(false);
            initEntrance();
          }
        });
      }
    });

    tl.to({ val: 0 }, {
      val: 100,
      duration: 2.2,
      ease: "power2.inOut",
      onUpdate: function() {
        setPercent(Math.round(this.targets()[0].val));
      }
    });

    // 2. Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenis.on('scroll', ScrollTrigger.update);

    const tickerUpdate = (time: number) => {
      lenis.raf(time * 1000);
    };
    
    gsap.ticker.add(tickerUpdate);
    gsap.ticker.lagSmoothing(0);

    // 3. Custom Cursor Logic
    let mx = 0, my = 0, rx = 0, ry = 0;
    const moveCursor = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      gsap.to(cursorRef.current, { x: mx, y: my, duration: 0.1, ease: 'none' });
    };

    const animateRing = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      if (ringRef.current) {
        gsap.set(ringRef.current, { x: rx, y: ry });
      }
      requestAnimationFrame(animateRing);
    };

    window.addEventListener("mousemove", moveCursor);
    animateRing();

    // Hover Scaling
    const handleMouseEnter = () => {
      gsap.to(cursorRef.current, { width: 50, height: 50, backgroundColor: "rgba(200,250,100,0.15)", duration: 0.3 });
    };
    const handleMouseLeave = () => {
      gsap.to(cursorRef.current, { width: 12, height: 12, backgroundColor: "#c8fa64", duration: 0.3 });
    };

    const interactives = document.querySelectorAll("a, button, .project-item");
    interactives.forEach(el => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    // 4. Entrance Animations
    function initEntrance() {
      const etl = gsap.timeline({ defaults: { ease: 'power4.out' } });
      etl.from('nav', { y: -40, opacity: 0, duration: 0.8 }, 0);
      etl.from('.hero-eyebrow span', { y: 30, opacity: 0, duration: 0.7, stagger: 0.1 }, 0.3);
      etl.to('.hero-title-line span', { y: 0, duration: 1, ease: 'power4.out', stagger: 0.12 }, 0.4);
      etl.to('.hero-desc', { y: 0, opacity: 1, duration: 0.8 }, 0.9);
      etl.to('.hero-scroll-hint', { opacity: 1, duration: 0.8 }, 1.1);

      // Scroll Progress Bar
      gsap.to('#scroll-progress', {
        width: '100%',
        ease: 'none',
        scrollTrigger: { scrub: 0.3, start: 'top top', end: 'bottom bottom' }
      });

      // Reveal Lines (About/Works headings)
      document.querySelectorAll('.reveal-line span').forEach(span => {
        gsap.to(span, {
          y: 0, duration: 1.1, ease: 'power4.out',
          scrollTrigger: { 
            trigger: span.parentElement, 
            start: 'top 90%', // Earlier start for mobile visibility
            toggleActions: 'play none none none' 
          }
        });
      });

      // Fade Up Elements
      gsap.utils.toArray('.fade-up').forEach((el: any) => {
        gsap.to(el, {
          y: 0, 
          opacity: 1, 
          duration: 0.9, 
          ease: 'power3.out',
          scrollTrigger: { 
            trigger: el, 
            start: 'top 92%', // Earlier start for mobile visibility
            toggleActions: 'play none none none' 
          }
        });
      });
    }

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      gsap.ticker.remove(tickerUpdate);
      lenis.destroy();
      interactives.forEach(el => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Preloader */}
      <div 
        ref={preloaderRef}
        className="fixed inset-0 bg-[#080808] z-[9000] flex flex-col items-center justify-center overflow-hidden"
      >
        <div className="absolute top-0 w-[1px] h-0 bg-[#c8fa64]" />
        <div className="font-display text-[12vw] font-extrabold text-[#f0ede8] leading-none tracking-tighter">
          {percent.toString().padStart(2, '0')}
        </div>
        <div className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mt-3 font-medium">
          Loading Portfolio
        </div>
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[min(400px,80vw)]">
          <div className="w-full h-[1px] bg-white/10">
            <div className="h-full bg-[#c8fa64] transition-all" style={{ width: `${percent}%` }} />
          </div>
        </div>
      </div>

      {/* Scroll Progress */}
      <div id="scroll-progress" />

      {/* Custom Cursor */}
      <div id="cursor" ref={cursorRef} className="hidden md:block" />
      <div id="cursor-ring" ref={ringRef} className="hidden md:block" />

      {children}
    </>
  );
}
