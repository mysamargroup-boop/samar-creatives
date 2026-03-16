import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: "01",
    title: "ShopVista",
    description: "Full-stack e-commerce platform with real-time inventory, Stripe checkout, and an admin dashboard.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "project-1",
    color: "linear-gradient(135deg,#12200f,#1e3318)"
  },
  {
    id: "02",
    title: "Notion Studio",
    description: "Creative agency site with GSAP page transitions, horizontal scroll, and a custom cursor experience.",
    tags: ["Next.js", "GSAP", "Tailwind"],
    image: "project-2",
    color: "linear-gradient(135deg,#1a0f0f,#2e1a1a)"
  },
  {
    id: "03",
    title: "AnalyticsPro",
    description: "SaaS dashboard with D3.js charts, multi-tenant auth, and real-time WebSocket data feeds.",
    tags: ["React", "TypeScript", "D3.js"],
    image: "project-3",
    color: "linear-gradient(135deg,#0c1825,#112236)"
  }
];

export function ProjectsGrid() {
  return (
    <section id="works" className="py-24 bg-primary text-primary-foreground overflow-hidden">
      <div className="px-8 mb-16 flex items-end justify-between">
        <h2 className="font-display text-6xl sm:text-8xl leading-none">
          SELECTED<br />WORKS
        </h2>
        <span className="text-[11px] uppercase tracking-widest opacity-40">03 projects</span>
      </div>

      <div className="flex gap-8 px-8 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar">
        {projects.map((project) => {
          const projectImg = PlaceHolderImages.find(img => img.id === project.image);
          return (
            <div key={project.id} className="min-w-[300px] sm:min-w-[480px] snap-start group border border-primary-foreground/10 p-1 flex flex-col bg-primary-foreground/[0.03] hover:border-primary-foreground/30 transition-all duration-500">
              <div className="relative aspect-[16/10] overflow-hidden flex items-center justify-center" style={{ background: project.color }}>
                <div className="absolute inset-4 sm:inset-6 bg-[#1a1a18] rounded-t-lg shadow-2xl overflow-hidden group-hover:scale-[1.02] transition-transform duration-700">
                  <div className="h-6 bg-[#252523] flex items-center px-3 gap-1 border-b border-white/5">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  </div>
                  <div className="p-4 flex flex-col items-center justify-center h-full">
                     <Image 
                      src={projectImg?.imageUrl || `https://picsum.photos/seed/${project.id}/800/600`}
                      alt={project.title}
                      fill
                      className="object-cover opacity-50 group-hover:opacity-80 transition-opacity"
                    />
                    <span className="font-display text-lg opacity-40 relative z-10">{project.title}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-display text-3xl mb-2">{project.title}</h3>
                    <p className="text-xs text-primary-foreground/40 leading-relaxed mb-4 max-w-xs">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[9px] uppercase tracking-widest px-2 py-1 border border-primary-foreground/10 rounded-full opacity-60">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="font-display text-xs opacity-20">{project.id}</span>
                </div>
                <Link href="#" className="text-[10px] uppercase tracking-widest text-accent hover:translate-x-2 transition-transform inline-flex items-center gap-2 mt-2">
                  View Project <span className="text-sm">→</span>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}