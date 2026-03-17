import React from 'react';
import { Metadata } from 'next';
import { AboutMe } from '@/components/sections/AboutMe';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about Samar, a passionate Creative Developer based in Sagar, MP, blending strategic thinking with digital innovation.',
  alternates: {
    canonical: 'https://samar-creative.pages.dev/about'
  }
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* ABOUT Watermark */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[20vw] font-extrabold text-foreground/[0.03] select-none pointer-events-none leading-none z-0 whitespace-nowrap uppercase tracking-tighter">
        ABOUT
      </div>

      <div className="pt-32 md:pt-40 pb-12 relative z-10">
        <AboutMe />
      </div>
    </main>
  );
}
