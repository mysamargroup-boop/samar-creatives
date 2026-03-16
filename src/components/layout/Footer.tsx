
import { Github, Twitter, Linkedin, Mail, Heart } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white border-t py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-2 items-center md:items-start">
          <div className="font-headline font-bold text-lg">PixelCanvas</div>
          <p className="text-sm text-muted-foreground text-center md:text-left">
            Crafting digital experiences with purpose and precision.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="h-5 w-5" />
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Twitter className="h-5 w-5" />
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link href="mailto:hello@pixelcanvas.com" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail className="h-5 w-5" />
          </Link>
        </div>

        <div className="text-xs text-muted-foreground flex items-center gap-1">
          Made with <Heart className="h-3 w-3 text-destructive fill-destructive" /> © {new Date().getFullYear()} PixelCanvas
        </div>
      </div>
    </footer>
  );
}
