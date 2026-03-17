import Link from "next/link";
import { Magnetic } from "@/components/ui/Magnetic";

export function Footer() {
  return (
    <footer className="py-16 px-8 md:px-12 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 text-left">
          <div className="space-y-6 flex flex-col items-start w-full md:w-auto">
            <Link href="/" className="font-display text-[clamp(3.5rem,10vw,5.5rem)] font-extrabold tracking-tighter leading-[0.9] block uppercase text-left hover:text-accent transition-colors">
              Samar.
            </Link>
            <p className="text-foreground/40 max-w-xs text-[11px] md:text-sm text-left Montserrat">
              Crafting immersive digital experiences from Sagar, MP. Available for selective freelance opportunities.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-x-12 gap-y-8 items-start w-full md:w-auto">
            <div className="space-y-4 text-left">
              <span className="text-[10px] uppercase tracking-[0.2em] text-foreground/30 font-bold block">Social</span>
              <ul className="space-y-2 Montserrat">
                <li>
                  <Magnetic intensity={0.2}>
                    <a href="https://www.instagram.com/samar_creative_studio/" target="_blank" rel="noopener noreferrer" className="text-[11px] uppercase tracking-widest hover:text-accent transition-colors font-bold inline-block py-1">Instagram</a>
                  </Magnetic>
                </li>
                <li>
                  <Magnetic intensity={0.2}>
                    <a href="#" className="text-[11px] uppercase tracking-widest hover:text-accent transition-colors font-bold inline-block py-1">GitHub</a>
                  </Magnetic>
                </li>
                <li>
                  <Magnetic intensity={0.2}>
                    <a href="#" className="text-[11px] uppercase tracking-widest hover:text-accent transition-colors font-bold inline-block py-1">Twitter</a>
                  </Magnetic>
                </li>
              </ul>
            </div>
            <div className="space-y-4 text-left">
              <span className="text-[10px] uppercase tracking-[0.2em] text-foreground/30 font-bold block">Explore</span>
              <ul className="space-y-2 Montserrat">
                <li>
                  <Magnetic intensity={0.2}>
                    <Link href="/works" className="text-[11px] uppercase tracking-widest hover:text-accent transition-colors font-bold inline-block py-1">Works</Link>
                  </Magnetic>
                </li>
                <li>
                  <Magnetic intensity={0.2}>
                    <Link href="/about" className="text-[11px] uppercase tracking-widest hover:text-accent transition-colors font-bold inline-block py-1">About</Link>
                  </Magnetic>
                </li>
                <li>
                  <Magnetic intensity={0.2}>
                    <Link href="/#process" className="text-[11px] uppercase tracking-widest hover:text-accent transition-colors font-bold inline-block py-1">Process</Link>
                  </Magnetic>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Row: single flex line on desktop, stacked on mobile */}
        <div className="pt-12 border-t border-border relative">
          {/* Mobile: stacked vertically */}
          <div className="flex flex-col items-center gap-4 md:hidden text-center">
            <div className="text-[14px] tracking-widest font-bold bg-gradient-to-r from-[#ff5f3f] to-accent bg-clip-text text-transparent" style={{ fontFamily: "'Dancing Script', cursive" }}>
              Designed by Samar
            </div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-foreground/30 font-bold Montserrat">
              © {new Date().getFullYear()} <span className="text-foreground">Samar</span> — All rights reserved.
            </div>
            <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-foreground/30 font-bold Montserrat">
              <span className="flex items-center gap-2">📍 Sagar, MP</span>
              <div className="flex items-center gap-2 text-accent">
                <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Available
              </div>
            </div>
          </div>

          {/* Desktop: single horizontal row */}
          <div className="hidden md:flex items-center justify-between">
            <div className="text-[10px] uppercase tracking-[0.3em] text-foreground/30 font-bold Montserrat">
              © {new Date().getFullYear()} <span className="text-foreground">Samar</span> — All rights reserved.
            </div>

            <div className="absolute left-1/2 -translate-x-1/2 text-[14px] tracking-widest font-bold bg-gradient-to-r from-[#ff5f3f] to-accent bg-clip-text text-transparent" style={{ fontFamily: "'Dancing Script', cursive" }}>
              Designed by Samar
            </div>

            <div className="flex items-center gap-6 text-[10px] uppercase tracking-widest text-foreground/30 font-bold Montserrat">
              <span className="flex items-center gap-2">📍 Sagar, Madhya Pradesh, IN</span>
              <div className="flex items-center gap-2 text-accent">
                <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Available
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
