import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import Link from "next/link";

export function AboutMe() {
  const profileImg = PlaceHolderImages.find(img => img.id === 'profile-pic');

  return (
    <section id="about" className="py-24 px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      <div className="relative group">
        <div className="aspect-[4/5] bg-secondary flex items-center justify-center overflow-hidden">
           <Image
              src={profileImg?.imageUrl || "https://picsum.photos/seed/pc-profile/400/400"}
              alt="Profile"
              fill
              className="object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-700"
            />
          <div className="font-display text-[15vw] text-background/10 select-none">S.</div>
        </div>
        <div className="absolute -bottom-4 -right-4 bg-accent text-white font-display px-6 py-3 text-lg">
          Developer
        </div>
        <div className="hidden sm:block absolute top-6 -left-6 bg-background border p-4 max-w-[160px] shadow-2xl">
           <strong className="block text-xs uppercase tracking-widest mb-1">Sagar, M.P.</strong>
           <p className="text-[10px] text-foreground/50 leading-relaxed">Full-stack developer crafting web experiences since 2021.</p>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-3 text-accent">
          <div className="w-6 h-[1px] bg-accent" />
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold">About Me</span>
        </div>
        
        <h2 className="font-display text-6xl sm:text-8xl leading-[0.9]">
          The <span className="font-serif italic text-foreground/40 lowercase">person</span><br />
          behind the code.
        </h2>

        <div className="flex flex-col gap-6 text-foreground/60 leading-relaxed">
          <p>
            I&apos;m <strong className="text-foreground font-medium uppercase tracking-widest text-xs">Samar</strong>, a self-taught developer from <strong>Sagar, Madhya Pradesh</strong>. I started coding out of curiosity, fell in love with the intersection of design and engineering, and never looked back.
          </p>
          <p>
            My work spans e-commerce platforms, creative agency sites, SaaS dashboards, and everything in between. I believe great websites should feel as good as they look.
          </p>
        </div>

        <div className="flex gap-4 mt-4">
          <Link href="#contact" className="px-8 py-3 bg-foreground text-background font-display tracking-widest uppercase hover:bg-accent transition-colors">
            Hire Me →
          </Link>
          <Link href="#works" className="px-8 py-3 border font-display tracking-widest uppercase hover:bg-foreground hover:text-background transition-colors">
            See Work
          </Link>
        </div>
      </div>
    </section>
  );
}