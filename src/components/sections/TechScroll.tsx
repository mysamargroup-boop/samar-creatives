"use client";

export function TechScroll() {
  const techs = ["React", "Next.js", "GSAP", "Three.js", "Tailwind", "Node.js", "MongoDB", "Framer Motion", "WebGL", "TypeScript"];

  return (
    <div className="py-8 border-y border-border bg-secondary/50 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex shrink-0">
            {techs.map((tech) => (
              <div key={tech} className="flex items-center gap-5 px-8">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground/20 shrink-0" />
                <span className="font-display text-[14px] font-semibold uppercase tracking-widest text-foreground/40">
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
