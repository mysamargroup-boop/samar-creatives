import { Hero } from "@/components/sections/Hero";
import { HorizontalWorks } from "@/components/sections/HorizontalWorks";
import { AboutMe } from "@/components/sections/AboutMe";
import { Comparison } from "@/components/sections/Comparison";
import { ContactForm } from "@/components/sections/ContactForm";
import { StatsRow } from "@/components/sections/StatsRow";
import { TechScroll } from "@/components/sections/TechScroll";
import { Process } from "@/components/sections/Process";
import { FAQ } from "@/components/sections/FAQ";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'SAMAR. | Creative Full-Stack Developer & Designer',
  description: 'Creative Developer from Sagar, Madhya Pradesh building high-performance, immersive digital experiences, modern web applications, and premium e-commerce solutions.',
  alternates: {
    canonical: 'https://samar-creative.pages.dev'
  }
};

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <HorizontalWorks />
      <StatsRow />
      <AboutMe />
      <Comparison />
      <Process />
      <FAQ />
      <TechScroll />
      <ContactForm />
    </div>
  );
}
