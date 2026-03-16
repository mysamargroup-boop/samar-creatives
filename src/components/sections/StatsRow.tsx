"use client";

export function StatsRow() {
  const skills = [
    { name: "React / Next", pct: 92 },
    { name: "GSAP / Motion", pct: 88 },
    { name: "Node / Express", pct: 80 },
    { name: "Three.js / WebGL", pct: 75 },
    { name: "UI / UX Design", pct: 90 }
  ];

  return (
    <section className="px-8 md:px-12 bg-background pb-32">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-2">
          {skills.map((skill, i) => (
            <div key={i} className="group py-8 md:py-10 border-b border-border hover:bg-foreground/[0.02] transition-all duration-500 fade-up flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12">
              <div className="font-display text-[14px] md:text-[16px] font-bold uppercase tracking-[0.2em] w-48 shrink-0 group-hover:text-accent transition-colors">
                {skill.name}
              </div>
              <div className="flex-grow w-full md:w-auto h-[1px] bg-foreground/10 relative overflow-hidden">
                <div 
                  className="h-full bg-accent transition-all duration-[1.5s] ease-out absolute left-0" 
                  style={{ width: `${skill.pct}%` }} 
                />
              </div>
              <div className="text-[12px] md:text-[14px] font-bold tracking-widest text-foreground/40 w-16 text-right font-display group-hover:text-foreground transition-colors">
                {skill.pct}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}