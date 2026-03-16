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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] px-8 py-7 md:px-12 flex items-center justify-between transition-all duration-500 ease-in-out ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } ${scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : ""}`}
    >
      <Link href="/" className="font-display text-lg font-extrabold tracking-tighter text-foreground">
        Samar.
      </Link>

      <ul className="hidden md:flex items-center gap-10">
        {["Works", "About", "Process"].map((item) => (
          <li key={item}>
            <Link
              href={`#${item.toLowerCase()}`}
              className="text-[11px] uppercase tracking-[0.2em] font-medium text-foreground/50 hover:text-foreground transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-foreground transition-all duration-300 group-hover:w-full" />
            </Link>
          </li>
        ))}
      </ul>

      <Link 
        href="#contact" 
        className="text-[11px] uppercase tracking-[0.2em] font-bold bg-foreground text-background px-6 py-2.5 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors"
      >
        Let&apos;s Talk
      </Link>
    </nav>
  );
}
