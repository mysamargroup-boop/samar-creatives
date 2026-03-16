import { Hero } from "@/components/sections/Hero";
import { HorizontalWorks } from "@/components/sections/HorizontalWorks";
import { AboutMe } from "@/components/sections/AboutMe";
import { ContactForm } from "@/components/sections/ContactForm";
import { StatsRow } from "@/components/sections/StatsRow";
import { TechScroll } from "@/components/sections/TechScroll";
import { Process } from "@/components/sections/Process";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <HorizontalWorks />
      <StatsRow />
      <AboutMe />
      <Process />
      <TechScroll />
      <ContactForm />
    </div>
  );
}
