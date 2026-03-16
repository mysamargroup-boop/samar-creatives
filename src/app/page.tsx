
import { Hero } from "@/components/sections/Hero";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { AboutMe } from "@/components/sections/AboutMe";
import { ContactForm } from "@/components/sections/ContactForm";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ProjectsGrid />
      <AboutMe />
      <ContactForm />
    </div>
  );
}
