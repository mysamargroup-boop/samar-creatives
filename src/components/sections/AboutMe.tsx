
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import { User, Briefcase, GraduationCap, Target } from "lucide-react";

const skills = [
  { name: "Frontend Development", value: 95 },
  { name: "Backend Architecture", value: 85 },
  { name: "UI/UX Design", value: 80 },
  { name: "Cloud & Devops", value: 75 }
];

export function AboutMe() {
  const profileImg = PlaceHolderImages.find(img => img.id === 'profile-pic');

  return (
    <section id="about" className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-5 flex flex-col gap-8">
          <div className="relative aspect-square max-w-md w-full rounded-2xl overflow-hidden border-8 border-white shadow-xl rotate-3 hover:rotate-0 transition-transform duration-500">
            <Image
              src={profileImg?.imageUrl || "https://picsum.photos/seed/pc-profile/400/400"}
              alt="Profile headshot"
              fill
              className="object-cover"
              data-ai-hint="professional headshot"
            />
          </div>
          
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <User className="h-5 w-5 text-primary" /> Core Competencies
            </h3>
            <div className="space-y-6">
              {skills.map(skill => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between text-sm font-medium">
                    <span>{skill.name}</span>
                    <span className="text-muted-foreground">{skill.value}%</span>
                  </div>
                  <Progress value={skill.value} className="h-2 bg-primary/10" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col gap-10">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold">Hello, I'm Alex Pixel</h2>
            <p className="text-xl text-primary font-medium">Digital Architect & Design Strategist</p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With over 6 years of professional experience, I help companies turn complex 
              problems into elegant, user-centric solutions. My journey started in traditional 
              design, but I quickly fell in love with the infinite possibilities of code.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="p-3 bg-accent/10 rounded-xl h-fit">
                <Briefcase className="h-6 w-6 text-accent" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold">Experience</h4>
                <p className="text-sm text-muted-foreground">Senior Dev at TechNova Solutions (2020-Present)</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="p-3 bg-primary/10 rounded-xl h-fit">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold">Education</h4>
                <p className="text-sm text-muted-foreground">B.S. in Computer Science, State University</p>
              </div>
            </div>
          </div>

          <div className="p-8 bg-white rounded-2xl border shadow-sm space-y-4">
            <h4 className="text-lg font-bold flex items-center gap-2">
              <Target className="h-5 w-5 text-accent" /> Career Goal
            </h4>
            <p className="text-muted-foreground italic">
              "My mission is to build software that doesn't just work well, but feels magical. 
              I strive to mentor the next generation of developers and push the boundaries 
              of what's possible in the browser."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
