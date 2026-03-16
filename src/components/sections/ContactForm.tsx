"use client";

import Link from "next/link";

export function ContactForm() {
  return (
    <section id="contact" className="relative py-32 md:py-48 px-8 text-center overflow-hidden bg-[#0e0e0e] border-t border-white/10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[22vw] font-extrabold text-white/[0.02] select-none pointer-events-none whitespace-nowrap uppercase tracking-tighter">
        Let&apos;s Talk
      </div>
      
      <div className="relative z-10 flex flex-col items-center">
        <span className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] text-[#c8fa64] font-bold mb-8 fade-up">Available for Freelance</span>
        
        <h2 className="font-display text-[14vw] sm:text-[9vw] font-extrabold leading-[0.95] tracking-tighter uppercase mb-16 fade-up">
          Have an<br />
          <em className="italic text-[#c8fa64] not-italic">idea?</em>
        </h2>
        
        <div className="flex flex-col items-center gap-6">
          <a 
            href="mailto:samar@example.com" 
            className="group relative inline-flex items-center gap-3 px-12 py-6 bg-[#c8fa64] text-black font-display text-lg font-extrabold tracking-tight rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_20px_40px_rgba(200,250,100,0.2)]"
          >
            <span className="relative z-10">SEND ME A MESSAGE ↗</span>
          </a>

          <div className="flex flex-wrap justify-center gap-6 md:gap-8 mt-6">
            {["GitHub", "LinkedIn", "Twitter"].map((social) => (
              <Link 
                key={social} 
                href="#" 
                className="text-[12px] md:text-[14px] uppercase tracking-[0.2em] font-medium text-white/40 border border-white/10 rounded-full px-8 py-3.5 hover:bg-[#c8fa64] hover:text-black hover:border-[#c8fa64] transition-all"
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