"use client";

import React, { useEffect } from "react";
import { ContactForm } from "@/components/sections/ContactForm";
import { CheckCircle2, Globe, Layout, ShoppingCart, Search, Facebook, ShoppingBag } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Magnetic } from "@/components/ui/Magnetic";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Website Designing",
    icon: <Layout className="w-12 h-12 text-accent mb-6" />,
    features: [
      "Custom Website Design",
      "Responsive Web Design",
      "UI/UX Design",
      "Landing Page Design"
    ],
    illustrationHint: "modern web design"
  },
  {
    title: "Website Development",
    icon: <Globe className="w-12 h-12 text-accent mb-6" />,
    features: [
      "PHP Development",
      "WordPress Development",
      "Laravel Development",
      "React JS Development"
    ],
    illustrationHint: "software engineering"
  },
  {
    title: "E-Commerce Web Solution",
    icon: <ShoppingCart className="w-12 h-12 text-accent mb-6" />,
    features: [
      "Woocommerce Development",
      "Shopify Development",
      "PHP Development",
      "Laravel Development"
    ],
    illustrationHint: "online shopping system"
  }
];

export function ServicesClient() {
  useEffect(() => {
    // 3D Staggered entrance for the Services Title
    gsap.from('.services-title-line span', { 
      yPercent: 120, 
      rotationX: -90,
      transformOrigin: "50% 50% -50px",
      duration: 1.2, 
      stagger: 0.1,
      opacity: 0,
      ease: "expo.out",
      delay: 0.2
    });

    // Parallax background icons
    gsap.to('.service-bg-icon', {
      yPercent: 30,
      rotation: "+=15",
      ease: "none",
      scrollTrigger: {
        trigger: ".services-hero",
        start: "top top",
        end: "bottom top",
        scrub: 1
      }
    });

    // Reveal Service cards
    gsap.from('.service-card', {
      y: 80,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".services-grid",
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col relative overflow-hidden services-hero">
      {/* Background Watermark Icons (Smaller & Scattered) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] flex flex-wrap justify-between items-center p-12 overflow-hidden gap-16">
        <Search className="w-24 h-24 rotate-12 service-bg-icon" />
        <Facebook className="w-16 h-16 -rotate-12 service-bg-icon" />
        <Layout className="w-32 h-32 rotate-45 service-bg-icon" />
        <Globe className="w-20 h-20 -rotate-45 service-bg-icon" />
        <ShoppingCart className="w-28 h-28 rotate-12 service-bg-icon" />
        <ShoppingBag className="w-36 h-36 -rotate-12 service-bg-icon" />
        <CheckCircle2 className="w-16 h-16 rotate-45 service-bg-icon" />
        <Layout className="w-24 h-24 -rotate-45 service-bg-icon" />
      </div>
      
      <main className="flex-grow pt-48 pb-24 px-6 md:px-12 relative z-10">
        <div className="max-w-7xl mx-auto mb-20 text-left">
          <span className="text-[10px] uppercase tracking-[0.4em] text-foreground/40 font-bold mb-6 block">Our Expertise</span>
          <h1 className="font-display text-[clamp(3rem,10vw,8rem)] font-extrabold leading-[0.85] tracking-tighter uppercase mb-12">
            <div className="services-title-line" style={{ perspective: '1000px' }}>
              <span className="inline-block">Scalable</span>
            </div>
            <div className="services-title-line" style={{ perspective: '1000px' }}>
              <span className="inline-block text-accent">Solutions.</span>
            </div>
          </h1>
        </div>

        <div className="services-grid max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center">
          {services.map((service, i) => (
            <div 
              key={i} 
              className={`service-card relative overflow-hidden bg-foreground/[0.02] border border-border backdrop-blur-sm rounded-[2rem] p-6 lg:p-10 flex flex-col transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-accent/5 hover:border-accent/20 hover:bg-foreground/[0.04] group w-full`}
            >
              <div className="aspect-[16/10] w-full bg-foreground/[0.03] rounded-2xl mb-8 lg:mb-10 flex items-center justify-center relative overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="transform transition-transform duration-500 group-hover:scale-110 group-hover:text-accent">
                  {service.icon}
                </div>
              </div>

              <h2 className="font-display text-2xl lg:text-3xl font-extrabold text-foreground uppercase tracking-tight mb-6 lg:mb-8 break-words leading-none">
                {service.title}
              </h2>

              <ul className="space-y-4 flex-grow w-full">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-foreground/60 group-hover:text-foreground transition-colors duration-300">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-xs lg:text-sm font-medium Montserrat break-words">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-12 pt-8 border-t border-border flex justify-start">
                <Magnetic intensity={0.3}>
                  <a href="/#contact" className="text-accent font-display text-xs uppercase tracking-widest font-bold hover:gap-3 flex items-center gap-2 transition-all p-2 -ml-2">
                    Inquire Now ↗
                  </a>
                </Magnetic>
              </div>
            </div>
          ))}
        </div>
      </main>

      <ContactForm />
    </div>
  );
}
