
"use client";

import React, { useState, useEffect } from "react";
import { Instagram, X, ArrowRight } from "lucide-react";

export function ConnectPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if shown in this session
    const hasBeenShown = sessionStorage.getItem("connect_popup_shown");
    if (hasBeenShown) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Calculate scroll percentage accurately
      const scrolled = (scrollY / (documentHeight - windowHeight)) * 100;

      if (scrolled > 50) {
        setIsVisible(true);
        sessionStorage.setItem("connect_popup_shown", "true");
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-[200] w-[calc(100vw-64px)] sm:w-[320px]">
      <div 
        className="bg-foreground text-background p-8 rounded-[2rem] shadow-2xl relative overflow-hidden group animate-in slide-in-from-bottom-10 duration-700"
      >
        <button 
          onClick={handleDismiss}
          className="absolute top-4 right-4 p-2 hover:bg-background/10 rounded-full transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex flex-col items-start gap-4">
          <div className="p-3 bg-accent rounded-2xl text-accent-foreground">
            <Instagram className="w-6 h-6" />
          </div>
          
          <div className="space-y-2">
            <h4 className="font-display text-2xl font-extrabold uppercase tracking-tight leading-none text-left">
              Let&apos;s <br />Connect
            </h4>
            <p className="text-[11px] font-medium opacity-60 leading-relaxed text-left Montserrat">
              Love the craft? Follow my journey and daily updates on Instagram.
            </p>
          </div>

          <a 
            href="https://instagram.com/shubham__nema" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold bg-accent text-accent-foreground px-6 py-3 rounded-full hover:scale-105 active:scale-95 transition-all w-full justify-center"
          >
            Visit Profile <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
