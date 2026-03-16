"use client";

export function ContactForm() {
  return (
    <section id="contact" className="relative py-32 px-8 text-center overflow-hidden bg-background">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[22vw] text-foreground/[0.03] select-none pointer-events-none whitespace-nowrap">
        HELLO
      </div>
      
      <div className="relative z-10 flex flex-col items-center gap-6">
        <span className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold mb-4">Get In Touch</span>
        
        <h2 className="font-display text-7xl sm:text-[130px] leading-[0.9] tracking-tight uppercase">
          LET&apos;S<br />BUILD<br />TOGETHER.
        </h2>
        
        <p className="font-serif italic text-2xl text-foreground/40 mt-4 mb-12">
          Got a project? Let&apos;s talk.
        </p>

        <a 
          href="mailto:samar@example.com" 
          className="group relative inline-flex items-center px-12 py-6 bg-foreground text-background font-display text-xl tracking-[0.1em] overflow-hidden"
        >
          <span className="relative z-10">SEND ME AN EMAIL ↗</span>
          <div className="absolute inset-0 bg-accent translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
        </a>

        <div className="mt-12 flex flex-wrap justify-center gap-8">
          {["GitHub", "LinkedIn", "Twitter", "Instagram"].map((social) => (
            <Link key={social} href="#" className="text-[10px] uppercase tracking-[0.2em] font-medium text-foreground/40 border-b border-foreground/10 pb-1 hover:text-foreground hover:border-foreground transition-all">
              {social}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";