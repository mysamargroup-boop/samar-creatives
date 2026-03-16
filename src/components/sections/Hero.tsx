export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-end px-8 pb-20 overflow-hidden bg-background">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[40vw] text-foreground/[0.03] select-none pointer-events-none whitespace-nowrap leading-none">
        01
      </div>
      <div className="absolute top-24 right-8 font-display text-[100px] text-foreground/[0.05] leading-none select-none">
        S.
      </div>

      <div className="relative z-10 flex flex-col gap-4">
        <div className="flex items-center gap-3 text-accent mb-4 animate-in fade-in slide-in-from-left-8 duration-700">
          <div className="w-8 h-[1px] bg-accent" />
          <span className="text-[11px] uppercase tracking-[0.3em] font-bold">Creative Developer</span>
        </div>

        <h1 className="flex flex-col font-display text-[14vw] sm:text-[12vw] leading-[0.88] tracking-tight">
          <span className="overflow-hidden">
            <span className="block animate-in slide-in-from-bottom-full duration-1000">SAMAR</span>
          </span>
          <span className="overflow-hidden">
            <span className="block animate-in slide-in-from-bottom-full duration-1000 delay-100">BUILDS</span>
          </span>
        </h1>

        <div className="mt-4 overflow-hidden">
          <p className="font-serif italic text-2xl sm:text-4xl text-foreground/50 animate-in slide-in-from-bottom-full duration-1000 delay-200">
            Websites that <span className="text-foreground/80">actually feel good.</span>
          </p>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-end justify-between gap-8">
          <p className="max-w-sm text-sm leading-relaxed text-foreground/60 animate-in fade-in duration-1000 delay-300">
            Full-stack developer from <strong className="text-foreground font-medium">Sagar, Madhya Pradesh</strong> — building immersive digital experiences with clean code, sharp design, and obsessive attention to craft.
          </p>
          
          <div className="flex flex-col items-center gap-3 animate-bounce">
            <div className="w-[1px] h-20 bg-foreground/10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-accent animate-scroll-fill" />
            </div>
            <span className="text-[9px] uppercase tracking-[0.3em] text-foreground/40 [writing-mode:vertical-rl]">Scroll</span>
          </div>
        </div>
      </div>
    </section>
  );
}