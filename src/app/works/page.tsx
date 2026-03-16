import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactForm } from "@/components/sections/ContactForm";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Works | SAMAR. Portfolio',
  description: 'An archive of selected digital projects ranging from AI platforms to premium E-commerce experiences.',
};

const projects = [
  {
    id: "01",
    title: "Uttar Mitra",
    category: "AI Platform",
    description: "An intelligent AI chat assistant providing reliable answers and support for regional users.",
    tags: ["React", "GenAI", "Tailwind"],
    image: "https://picsum.photos/seed/pc-p1/800/600",
    link: "https://chat.uttarmitra.in"
  },
  {
    id: "02",
    title: "Woody",
    category: "E-Commerce",
    description: "A premium furniture store offering modern and sustainable interior designs.",
    tags: ["Next.js", "Design", "Commerce"],
    image: "https://picsum.photos/seed/pc-p2/800/600",
    link: "https://woody.co.in"
  },
  {
    id: "03",
    title: "Business Woody",
    category: "B2B Solution",
    description: "A specialized business portal for corporate furniture procurement and management.",
    tags: ["React", "B2B", "Dashboard"],
    image: "https://picsum.photos/seed/pc-p3/800/600",
    link: "https://business.woody.co.in"
  },
  {
    id: "04",
    title: "Photography",
    category: "Studio Portfolio",
    description: "Visual storytelling showcase for a professional photography studio capturing moments.",
    tags: ["Next.js", "Motion", "Gallery"],
    image: "https://picsum.photos/seed/pc-p4/800/600",
    link: "https://ashok-studio-photography.vercel.app/"
  },
  {
    id: "05",
    title: "Merchant Web",
    category: "Web App",
    description: "Custom digital solutions and web development for modern businesses and merchants.",
    tags: ["TypeScript", "Next.js", "Vercel"],
    image: "https://picsum.photos/seed/pc-p5/800/600",
    link: "https://merchant-web-sigma.vercel.app/"
  },
  {
    id: "06",
    title: "Samar Makeup",
    category: "Beauty Services",
    description: "Professional makeup artist portfolio and streamlined booking platform.",
    tags: ["React", "Styling", "Booking"],
    image: "https://picsum.photos/seed/pc-p6/800/600",
    link: "https://samar-makeup.vercel.app/"
  }
];

export default function WorksArchivePage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <main className="flex-grow pt-48 pb-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto mb-24 text-left">
          <span className="text-[10px] uppercase tracking-[0.4em] text-foreground/40 font-bold mb-6 block">Archive</span>
          <h1 className="font-display text-[clamp(3rem,10vw,8rem)] font-extrabold leading-[0.85] tracking-tighter uppercase">
            All<br />Works.
          </h1>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {projects.map((project) => (
            <a 
              key={project.id} 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col items-start"
            >
              <div className="aspect-[4/3] w-full bg-foreground/5 rounded-2xl overflow-hidden mb-6 relative">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
                   <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500 shadow-xl">
                      <span className="text-accent-foreground font-bold text-xl">↗</span>
                   </div>
                </div>
              </div>
              
              <div className="space-y-4 text-left">
                <div className="flex items-center gap-3">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-accent font-bold">
                    {project.category}
                  </span>
                  <div className="h-[1px] w-12 bg-border" />
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight uppercase group-hover:text-accent transition-colors">
                  {project.title}
                </h2>
                <p className="text-foreground/50 text-[11px] md:text-xs leading-relaxed max-w-xs">
                  {project.description}
                </p>
                <div className="flex gap-2 flex-wrap pt-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[8px] uppercase tracking-widest px-3 py-1 bg-foreground/5 rounded-full text-foreground/40 font-bold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </main>
      <ContactForm />
      <Footer />
    </div>
  );
}
