import { Hero } from "@/components/sections/Hero";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { AboutMe } from "@/components/sections/AboutMe";
import { ContactForm } from "@/components/sections/ContactForm";
import { StatsRow } from "@/components/sections/StatsRow";
import { TechScroll } from "@/components/sections/TechScroll";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ProjectsGrid />
      <StatsRow />
      <AboutMe />
      <TechScroll />
      <ContactForm />
    </div>
  );
}