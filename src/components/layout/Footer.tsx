import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-20 px-8 md:px-12 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 text-left">
          <div className="space-y-6 flex flex-col items-start w-full md:w-auto">
            <Link href="/" className="font-display text-[clamp(3.5rem,10vw,5.5rem)] font-extrabold tracking-tighter leading-[0.9] block uppercase text-left hover:text-accent transition-colors">
              Samar.
            </Link>
            <p className="text-foreground/40 max-w-xs text-[11px] md:text-sm text-left">
              Crafting immersive digital experiences from Sagar, MP. Available for selective freelance opportunities.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-x-12 gap-y-8 items-start w-full md:w-auto">
            <div className="space-y-4 text-left">
              <span className="text-[10px] uppercase tracking-[0.2em] text-foreground/30 font-bold block">Social</span>
              <ul className="space-y-2">
                <li><a href="https://instagram.com/shubham__nema" target="_blank" rel="noopener noreferrer" className="text-[11px] uppercase tracking-widest hover:text-accent transition-colors font-bold">Instagram</a></li>
                <li><a href="#" className="text-[11px] uppercase tracking-widest hover:text-accent transition-colors font-bold">GitHub</a></li>
                <li><a href="#" className="text-[11px] uppercase tracking-widest hover:text-accent transition-colors font-bold">Twitter</a></li>
              </ul>
            </div>
            <div className="space-y-4 text-left">
              <span className="text-[10px] uppercase tracking-[0.2em] text-foreground/30 font-bold block">Explore</span>
              <ul className="space-y-2">
                <li><Link href="/works" className="text-[11px] uppercase tracking-widest hover:text-accent transition-colors font-bold">Works</Link></li>
                <li><Link href="/#about" className="text-[11px] uppercase tracking-widest hover:text-accent transition-colors font-bold">About</Link></li>
                <li><Link href="/#process" className="text-[11px] uppercase tracking-widest hover:text-accent transition-colors font-bold">Process</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-left">
          <div className="flex flex-col items-start gap-1">
            <div className="text-[10px] uppercase tracking-[0.3em] text-foreground/30 font-bold">
              © {new Date().getFullYear()} <span className="text-foreground">Samar</span> — All rights reserved.
            </div>
            <div className="text-[11px] uppercase tracking-widest font-extrabold bg-gradient-to-r from-accent to-[#ff5f3f] bg-clip-text text-transparent">
              Designed by Samar
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 text-[10px] uppercase tracking-widest text-foreground/30 font-bold items-start">
            <span className="flex items-center gap-2">
              📍 Sagar, Madhya Pradesh, IN
            </span>
            <div className="flex items-center gap-2 text-accent">
              <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Available
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
