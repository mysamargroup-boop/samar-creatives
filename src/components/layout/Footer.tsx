export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16 px-8 flex flex-col md:flex-row items-center justify-between gap-10 border-t border-primary-foreground/5">
      <div className="flex flex-col gap-4 items-center md:items-start">
        <div className="font-display text-3xl tracking-widest">SAMAR.</div>
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold">Currently Available for new projects</span>
        </div>
      </div>
      
      <div className="flex flex-col items-center gap-2">
        <div className="text-[10px] uppercase tracking-[0.3em] opacity-30">
          © {new Date().getFullYear()} Samar. All rights reserved.
        </div>
        <div className="text-[10px] uppercase tracking-[0.3em] opacity-20 italic">
          Built with precision and passion.
        </div>
      </div>
      
      <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest opacity-40">
        <span className="flex items-center gap-2">
          <span className="text-accent">📍</span> Sagar, Madhya Pradesh, India
        </span>
      </div>
    </footer>
  );
}
