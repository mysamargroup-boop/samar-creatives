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
    <div className="px-8 md:px-12 max-w-7xl mx-auto pb-32 bg-background">
      <div className="space-y-4">
        {skills.map((skill, i) => (
          <div key={i} className="group py-6 md:py-8 border-b border-border hover:bg-foreground/[0.01] transition-colors fade-up flex items-center gap-6">
            <div className="font-display text-[12px] md:text-[14px] font-bold uppercase tracking-widest w-40 shrink-0">
              {skill.name}
            </div>
            <div className="flex-grow h-[3px] bg-foreground/10 rounded-full overflow-hidden">
              <div 
                className="h-full bg-foreground transition-all duration-[1.5s] ease-out" 
                style={{ width: `${skill.pct}%` }} 
              />
            </div>
            <div className="text-[12px] md:text-[13px] font-medium text-foreground/40 w-12 text-right">
              {skill.pct}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
