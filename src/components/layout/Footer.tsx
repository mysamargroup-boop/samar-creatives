export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-10 px-8 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-primary-foreground/5">
      <div className="font-display text-2xl tracking-widest">SAMAR.</div>
      
      <div className="text-[10px] uppercase tracking-[0.2em] opacity-30">
        © {new Date().getFullYear()} Samar. All rights reserved.
      </div>
      
      <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest opacity-40">
        <span>📍 Sagar, India</span>
      </div>
    </footer>
  );
}