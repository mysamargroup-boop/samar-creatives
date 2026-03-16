import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-20 px-8 md:px-12 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
          <div className="space-y-6">
            <Link href="/" className="font-display text-[60px] md:text-[80px] font-extrabold tracking-tighter leading-none block uppercase">
              Samar.
            </Link>
            <p className="text-foreground/40 max-w-xs text-sm md:text-base">
              Crafting immersive digital experiences from Sagar, MP. Available for selective freelance opportunities.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-x-12 gap-y-6">
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.2em] text-foreground/30 font-bold block">Social</span>
              <ul className="space-y-2">
                {["GitHub", "LinkedIn", "Twitter"].map((social) => (
                  <li key={social}>
                    <Link href="#" className="text-sm uppercase tracking-widest hover:text-accent transition-colors">
                      {social}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.2em] text-foreground/30 font-bold block">Explore</span>
              <ul className="space-y-2">
                {["Works", "About", "Process"].map((item) => (
                  <li key={item}>
                    <Link href={`#${item.toLowerCase()}`} className="text-sm uppercase tracking-widest hover:text-accent transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] uppercase tracking-[0.3em] text-foreground/30 font-medium">
            © {new Date().getFullYear()} <span className="text-foreground">Samar</span> — All rights reserved.
          </div>
          
          <div className="flex items-center gap-6 text-[10px] uppercase tracking-widest text-foreground/30 font-medium">
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