export function TechScroll() {
  const row1 = ["React", "Next.js", "GSAP", "Three.js", "Tailwind", "Node.js", "MongoDB", "Firebase", "Vercel", "Figma"];
  const row2 = ["TypeScript", "PostgreSQL", "Mapbox", "Stripe", "Framer Motion", "GitHub", "React Native", "Lenis", "Vite", "Docker"];

  return (
    <section className="bg-secondary py-20 overflow-hidden flex flex-col gap-4">
      <div className="flex whitespace-nowrap">
        <div className="flex animate-scroll-left gap-4">
          {[...row1, ...row1].map((tech, i) => (
            <span key={i} className="px-6 py-3 border border-white/10 rounded-full text-white/50 text-xs tracking-widest uppercase hover:text-white hover:border-white/30 transition-colors cursor-default">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="flex whitespace-nowrap">
        <div className="flex animate-scroll-right gap-4">
          {[...row2, ...row2].map((tech, i) => (
            <span key={i} className="px-6 py-3 border border-white/10 rounded-full text-white/50 text-xs tracking-widest uppercase hover:text-white hover:border-white/30 transition-colors cursor-default">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}