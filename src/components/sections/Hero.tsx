
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Palette, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <section className="relative overflow-hidden py-20 px-6 lg:py-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-8 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold w-fit">
            <Zap className="h-3 w-3 fill-primary" />
            <span>Available for new projects</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] text-foreground tracking-tight">
            Building the next generation of <span className="text-primary italic">digital experiences.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
            I'm a full-stack developer and designer specialized in building high-performance, 
            interactive websites that bridge the gap between imagination and reality.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="#projects">
              <Button size="lg" className="h-14 px-8 text-base gap-2 rounded-xl">
                View My Work <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="#contact">
              <Button size="lg" variant="outline" className="h-14 px-8 text-base rounded-xl">
                Get in Touch
              </Button>
            </Link>
          </div>
          <div className="flex items-center gap-8 pt-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="p-2 bg-accent/10 rounded-lg">
                <Code className="h-4 w-4 text-accent" />
              </div>
              Development
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Palette className="h-4 w-4 text-primary" />
              </div>
              UI/UX Design
            </div>
          </div>
        </div>
        
        <div className="relative aspect-[4/3] lg:aspect-square">
          <div className="absolute -inset-4 bg-accent/20 rounded-full blur-3xl opacity-50 animate-pulse" />
          <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl border border-white/20 hover-lift">
            <Image
              src={heroImg?.imageUrl || "https://picsum.photos/seed/pc-hero/1200/800"}
              alt="Creative workspace"
              fill
              className="object-cover"
              data-ai-hint="creative digital canvas"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
          
          {/* Floating Card UI */}
          <div className="absolute -bottom-6 -left-6 glass-card p-6 rounded-2xl max-w-xs animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
            <p className="text-sm font-medium mb-1">Recent Achievement</p>
            <p className="text-2xl font-bold text-primary">45+ Projects Delivered</p>
            <p className="text-xs text-muted-foreground mt-1">Across 12 different industries worldwide.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
