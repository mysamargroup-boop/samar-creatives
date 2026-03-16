export function Footer() {
  return (
    <footer className="py-12 px-8 md:px-12 border-t border-border flex flex-col md:flex-row items-center justify-between gap-10 bg-background">
      <div className="font-display text-lg font-extrabold tracking-tighter text-foreground">
        Samar.
      </div>
      
      <div className="flex flex-col items-center gap-2">
        <div className="text-[11px] md:text-[12px] uppercase tracking-[0.3em] text-foreground/30">
          © {new Date().getFullYear()} <span className="text-foreground">Samar</span>. All rights reserved.
        </div>
      </div>
      
      <div className="flex items-center gap-4 text-[11px] md:text-[12px] uppercase tracking-widest text-foreground/30">
        <span className="flex items-center gap-2">
          📍 Sagar, Madhya Pradesh, IN
        </span>
      </div>
    </footer>
  );
}
