"use client";

import Link from "next/link";

export function ContactForm() {
  return (
    <section id="contact" className="relative py-24 md:py-48 px-6 text-center overflow-hidden bg-background border-t border-border">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[25vw] font-extrabold text-foreground/[0.02] select-none pointer-events-none whitespace-nowrap uppercase tracking-tighter">
        Hello
      </div>
      
      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto">
        <span className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] text-foreground/40 font-bold mb-8 fade-up">Available for Freelance</span>
        
        <h2 className="font-display text-[clamp(2.5rem,10vw,8rem)] font-extrabold leading-[0.95] tracking-tighter uppercase mb-16 fade-up">
          Have an<br />
          <em className="font-serif italic text-accent lowercase font-normal opacity-80">idea?</em>
        </h2>
        
        <div className="flex flex-col items-center gap-6 w-full px-4 md:px-0">
          <a 
            href="https://instagram.com/shubham__nema" 
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full md:w-auto inline-flex items-center justify-center gap-3 px-8 md:px-16 py-5 md:py-7 bg-foreground text-background font-display text-sm md:text-xl font-extrabold tracking-tight rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl"
          >
            <span className="relative z-10 uppercase">Send me a message ↗</span>
          </a>

          <div className="flex flex-wrap justify-center gap-3 md:gap-6 mt-10">
            {["GitHub", "LinkedIn", "Twitter"].map((social) => (
              <Link 
                key={social} 
                href="#" 
                className="text-[9px] md:text-[12px] uppercase tracking-[0.2em] font-bold text-foreground/30 border border-border rounded-full px-5 md:px-8 py-2.5 md:py-4 hover:bg-foreground hover:text-background hover:border-foreground transition-all"
              >
                {social}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
