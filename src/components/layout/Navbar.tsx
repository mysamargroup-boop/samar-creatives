"use client";

import * as React from "react";
import Link from "next/link";

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
      <Link href="/" className="font-display text-xl font-extrabold tracking-tighter text-foreground uppercase">
        Samar.
      </Link>

      <ul className="hidden md:flex items-center gap-10">
        <li>
          <Link href="/works" className="text-[11px] uppercase tracking-[0.2em] font-bold text-foreground/40 hover:text-foreground transition-colors relative group">
            Works
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
          </Link>
        </li>
        <li>
          <Link href="/#about" className="text-[11px] uppercase tracking-[0.2em] font-bold text-foreground/40 hover:text-foreground transition-colors relative group">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
          </Link>
        </li>
        <li>
          <Link href="/#process" className="text-[11px] uppercase tracking-[0.2em] font-bold text-foreground/40 hover:text-foreground transition-colors relative group">
            Process
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
          </Link>
        </li>
      </ul>

      <a 
        href="https://instagram.com/shubham__nema" 
        target="_blank"
        rel="noopener noreferrer"
        className="text-[10px] uppercase tracking-[0.2em] font-bold bg-foreground text-background px-7 py-3 rounded-full hover:bg-accent hover:text-accent-foreground transition-all active:scale-95"
      >
        Let&apos;s Talk
      </a>
    </nav>
  );
}
