"use client";

export function TechScroll() {
  const techs = ["React", "Next.js", "GSAP", "Three.js", "Tailwind", "Node.js", "MongoDB", "Framer Motion", "WebGL", "TypeScript"];

  return (
    <div className="relative py-6 border-y border-border bg-secondary/50 overflow-hidden">
      {/* STACK Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[8vw] font-extrabold select-none pointer-events-none uppercase tracking-tighter leading-none z-0 opacity-[0.03] text-foreground whitespace-nowrap">
        STACK
      </div>

      <div className="relative z-10 flex whitespace-nowrap animate-marquee">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex shrink-0">
            {techs.map((tech) => (
              <div key={tech} className="flex items-center gap-5 px-8">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground/20 shrink-0" />
                <span className="font-display text-[13px] font-semibold uppercase tracking-widest text-foreground/30">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
