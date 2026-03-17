"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionNumber } from "@/components/ui/SectionNumber";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: "What services do you provide?",
    answer: "I offer full-cycle digital solutions including custom UX/UI design, high-performance website development (React, Next.js), and premium E-commerce systems tailored for modern business growth."
  },
  {
    question: "What is your typical project timeline?",
    answer: "A standard website typically takes 2-4 weeks from discovery to launch, while complex full-stack applications or E-commerce portals range from 6-10 weeks depending on complexity."
  },
  {
    question: "How do you handle project payments?",
    answer: "I typically follow a milestone-based payment structure (e.g., 40% deposit, 30% after design approval, 30% at launch). This ensures transparency and shared commitment throughout the journey."
  },
  {
    question: "Can you work with clients globally?",
    answer: "Absolutely. I have collaborated with clients across various time zones, utilizing asynchronous communication and structured project management to ensure a seamless experience regardless of location."
  },
  {
    question: "Will my website be mobile-friendly and SEO optimized?",
    answer: "Yes, every digital product I build is 'responsive by design' and follows SEO best practices (semantic HTML, fast load times, meta tags) to ensure high visibility and a flawless mobile experience."
  }
];

export function FAQ() {
  const containerRef = useRef<HTMLDivElement>(null);
  const watermarkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (watermarkRef.current) {
      gsap.fromTo(watermarkRef.current,
        { xPercent: 15, opacity: 0 },
        {
          xPercent: -15,
          opacity: 0.25,
          ease: "none",
          scrollTrigger: {
            trigger: "#faq",
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          }
        }
      );
    }
  }, []);

  return (
    <section id="faq" ref={containerRef} className="relative py-14 md:py-20 px-6 md:px-12 bg-background border-t border-border overflow-hidden">
      <SectionNumber id="faq" />
      {/* ASK Watermark */}
      <div 
        ref={watermarkRef}
        className="absolute top-1/2 left-0 w-full text-center -translate-y-1/2 font-display text-[22vw] font-extrabold select-none pointer-events-none uppercase tracking-tighter leading-none z-0 opacity-[0.15] bg-gradient-to-b from-foreground to-transparent bg-clip-text text-transparent"
      >
        ASK
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="text-left">
          <span className="text-[10px] uppercase tracking-[0.4em] text-foreground/40 font-bold mb-4 block fade-up">Assistance</span>
          <h2 className="font-display text-[clamp(2.5rem,7vw,4.5rem)] font-extrabold leading-[0.95] tracking-tighter uppercase mb-8">
            Common <br /><span className="text-accent">Queries</span>
          </h2>
          <p className="text-foreground/50 text-sm max-w-md leading-relaxed Montserrat">
            Transparent answers to the most frequent questions. If your query isn't listed, feel free to reach out directly via the contact section.
          </p>
        </div>

        <div className="fade-up">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem 
                key={i} 
                value={`item-${i}`}
                className="border-b border-border hover:bg-foreground/[0.02] transition-colors px-4 rounded-xl"
              >
                <AccordionTrigger className="font-display text-lg md:text-xl font-bold uppercase tracking-tight py-6 hover:no-underline text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="Montserrat text-sm text-foreground/50 leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
