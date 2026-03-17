"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Works", href: "/#works" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/#contact" },
];

export function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      gsap.to(overlayRef.current, { opacity: 1, duration: 0.3, ease: "power2.out" });
      gsap.fromTo(panelRef.current, { x: "-100%" }, { x: "0%", duration: 0.5, ease: "expo.out" });
      gsap.fromTo(
        linksRef.current?.children || [],
        { x: -40, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.06, duration: 0.5, ease: "power3.out", delay: 0.2 }
      );
    } else {
      document.body.style.overflow = "";
      gsap.to(overlayRef.current, { opacity: 0, duration: 0.3, ease: "power2.in" });
      gsap.to(panelRef.current, { x: "-100%", duration: 0.4, ease: "power3.in" });
    }
  }, [isOpen]);

  return (
    <>
      {/* Sticky FAB — top-left corner, always visible, water-drop shape, above everything */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-[600] md:hidden w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center shadow-2xl shadow-accent/30 hover:scale-110 active:scale-95 transition-all duration-300"
        style={{ borderRadius: "50% 50% 50% 20%" }}
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Backdrop overlay */}
      <div
        ref={overlayRef}
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-background/80 backdrop-blur-md z-[400] md:hidden ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        style={{ opacity: 0 }}
      />

      {/* Sidebar Panel */}
      <div
        ref={panelRef}
        className="fixed top-0 left-0 h-full w-[75vw] max-w-[320px] bg-background border-r border-border z-[500] md:hidden flex flex-col"
        style={{ transform: "translateX(-100%)" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-8 pb-6 border-b border-border">
          <Link href="/" onClick={() => setIsOpen(false)} className="font-display text-2xl font-extrabold uppercase tracking-tighter">
            Samar.
          </Link>
        </div>

        {/* Navigation Links */}
        <nav ref={linksRef} className="flex flex-col gap-1 px-4 py-8 flex-grow">
          {navLinks.map((link, i) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="group flex items-center gap-4 px-4 py-4 rounded-2xl hover:bg-foreground/[0.04] transition-colors"
            >
              <span className="text-[10px] font-display font-bold text-accent tracking-widest">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-lg font-extrabold uppercase tracking-tight group-hover:text-accent transition-colors">
                {link.label}
              </span>
            </Link>
          ))}
        </nav>

        {/* Footer */}
        <div className="px-6 pb-8 pt-4 border-t border-border">
          <a
            href="https://www.instagram.com/samar_creative_studio/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-accent text-accent-foreground rounded-full font-display text-xs font-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-transform"
          >
            Let&apos;s Talk ↗
          </a>
        </div>
      </div>
    </>
  );
}
