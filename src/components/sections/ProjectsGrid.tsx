
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: "project-1",
    title: "EcoSphere Dashboard",
    description: "A comprehensive sustainability tracking platform for modern enterprises with real-time analytics.",
    tags: ["React", "Next.js", "D3.js", "Tailwind"],
    image: "project-1",
    links: { live: "#", github: "#" }
  },
  {
    id: "project-2",
    title: "Nova Mobile Wallet",
    description: "Secure, decentralized finance mobile application with intuitive transaction flows and wallet management.",
    tags: ["React Native", "Firebase", "Web3", "TypeScript"],
    image: "project-2",
    links: { live: "#", github: "#" }
  },
  {
    id: "project-3",
    title: "Lumina Storefront",
    description: "High-performance headless e-commerce experience with sub-second page loads and seamless checkout.",
    tags: ["Shopify", "Remix", "Stripe", "PostgreSQL"],
    image: "project-3",
    links: { live: "#", github: "#" }
  },
  {
    id: "project-4",
    title: "Nexus Community",
    description: "Scalable social platform for creators to build exclusive communities and monetize content.",
    tags: ["Next.js", "Clerk", "Supabase", "Radix UI"],
    image: "project-4",
    links: { live: "#", github: "#" }
  }
];

export function ProjectsGrid() {
  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl lg:text-5xl font-bold">Selected Projects</h2>
            <p className="text-muted-foreground max-w-xl">
              A collection of digital products I've built, ranging from data-heavy dashboards 
              to sleek mobile applications.
            </p>
          </div>
          <Link href="#" className="text-primary font-medium hover:underline flex items-center gap-1">
            View all work <ExternalLink className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => {
            const projectImg = PlaceHolderImages.find(img => img.id === project.image);
            return (
              <div key={project.id} className="group flex flex-col gap-6">
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-muted shadow-sm hover-lift border">
                  <Image
                    src={projectImg?.imageUrl || `https://picsum.photos/seed/${project.id}/800/600`}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint={projectImg?.imageHint || "web interface"}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 gap-4">
                    <Link href={project.links.live} className="p-3 bg-white rounded-full text-black hover:bg-primary hover:text-white transition-colors">
                      <ExternalLink className="h-5 w-5" />
                    </Link>
                    <Link href={project.links.github} className="p-3 bg-white rounded-full text-black hover:bg-primary hover:text-white transition-colors">
                      <Github className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col gap-3 px-1">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="bg-primary/5 text-primary border-none font-medium">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
