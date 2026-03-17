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
      {/* Background Watermark Icons */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] flex flex-col justify-around items-center">
        <div className="w-full flex justify-around service-bg-icon">
          <Search className="w-64 h-64 rotate-12" />
          <Facebook className="w-48 h-48 -rotate-12" />
        </div>
        <div className="w-full flex justify-center service-bg-icon">
          <ShoppingBag className="w-80 h-80 rotate-45" />
        </div>
        <div className="w-full flex justify-around service-bg-icon">
          <Globe className="w-56 h-56 -rotate-45" />
          <Layout className="w-72 h-72 rotate-12" />
        </div>
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

        <div className="services-grid max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div 
              key={i} 
              className="service-card relative overflow-hidden bg-foreground/[0.02] border border-border backdrop-blur-sm rounded-[2rem] p-10 flex flex-col transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-accent/5 hover:border-accent/20 hover:bg-foreground/[0.04] group"
            >
              <div className="aspect-[16/10] w-full bg-foreground/5 rounded-2xl mb-10 flex items-center justify-center relative overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="transform transition-transform duration-500 group-hover:scale-110 group-hover:text-accent">
                  {service.icon}
                </div>
              </div>

              <h2 className="font-display text-3xl font-extrabold text-foreground uppercase tracking-tight mb-8">
                {service.title}
              </h2>

              <ul className="space-y-4 flex-grow">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-foreground/60 group-hover:text-foreground transition-colors duration-300">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-sm font-medium Montserrat">{feature}</span>
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
