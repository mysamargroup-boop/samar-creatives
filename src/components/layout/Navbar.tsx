"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-8 py-6 flex items-center justify-between",
        scrolled ? "bg-background/80 backdrop-blur-xl border-b py-4" : "bg-transparent"
      )}
    >
      <Link href="/" className="font-display text-2xl tracking-widest hover:text-accent transition-colors">
        SAMAR.
      </Link>

      <div className="flex items-center gap-8">
        <div className="hidden md:flex items-center gap-8">
          {["Works", "About", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[11px] uppercase tracking-[0.2em] font-medium opacity-60 hover:opacity-100 transition-opacity"
            >
              {item}
            </Link>
          ))}
        </div>
        
        <div className="flex items-center gap-2 group">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-[10px] uppercase tracking-widest text-accent font-bold">Available</span>
        </div>
      </div>
    </nav>
  );
}