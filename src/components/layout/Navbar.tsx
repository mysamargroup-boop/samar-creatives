
"use client";

import * as React from "react";
import Link from "next/link";
import { Magnetic } from "@/components/ui/Magnetic";

export function Navbar() {
  const [hidden, setHidden] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const lastScrollY = React.useRef(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);
      if (y > lastScrollY.current && y > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] px-6 py-7 md:px-12 flex items-center justify-between transition-all duration-500 ease-in-out ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } ${scrolled ? "bg-background/80 backdrop-blur-md border-b border-border py-5" : ""}`}
    >
      <Magnetic intensity={0.2}>
        <Link href="/" className="font-display text-xl font-extrabold tracking-tighter text-foreground uppercase inline-block font-sans">
          Samar.
        </Link>
      </Magnetic>

      <ul className="hidden md:flex items-center gap-10">
        <li>
          <Magnetic intensity={0.2}>
            <Link href="/works" className="text-[11px] uppercase tracking-[0.2em] font-bold text-foreground/40 hover:text-foreground transition-colors relative group py-2">
              Works
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
            </Link>
          </Magnetic>
        </li>
        <li>
          <Magnetic intensity={0.2}>
            <Link href="/services" className="text-[11px] uppercase tracking-[0.2em] font-bold text-foreground/40 hover:text-foreground transition-colors relative group py-2">
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
            </Link>
          </Magnetic>
        </li>
        <li>
          <Magnetic intensity={0.2}>
            <Link href="/about" className="text-[11px] uppercase tracking-[0.2em] font-bold text-foreground/40 hover:text-foreground transition-colors relative group py-2">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
            </Link>
          </Magnetic>
        </li>
      </ul>

      <Magnetic intensity={0.4}>
        <a 
          href="https://www.instagram.com/samar_creative_studio/" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] uppercase tracking-[0.2em] font-bold bg-foreground text-background px-7 py-3 rounded-full hover:bg-accent hover:text-accent-foreground transition-all active:scale-95 inline-block"
        >
          Let&apos;s Talk
        </a>
      </Magnetic>
    </nav>
  );
}
