
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactForm } from "@/components/sections/ContactForm";
import { CheckCircle2, Globe, Layout, ShoppingCart, Search, Facebook, ShoppingBag } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Services | SAMAR.',
  description: 'Professional web design, development, and e-commerce solutions tailored for modern businesses.',
};

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
    color: "bg-[#2c3e50]",
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
    color: "bg-[#2980b9]",
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
    color: "bg-[#34495e]",
    illustrationHint: "online shopping system"
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col relative overflow-hidden">
      {/* Background Watermark Icons */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] flex flex-col justify-around items-center">
        <div className="w-full flex justify-around">
          <Search className="w-64 h-64 rotate-12" />
          <Facebook className="w-48 h-48 -rotate-12" />
        </div>
        <div className="w-full flex justify-center">
          <ShoppingBag className="w-80 h-80 rotate-45" />
        </div>
        <div className="w-full flex justify-around">
          <Globe className="w-56 h-56 -rotate-45" />
          <Layout className="w-72 h-72 rotate-12" />
        </div>
      </div>

      <Navbar />
      
      <main className="flex-grow pt-48 pb-24 px-6 md:px-12 relative z-10">
        <div className="max-w-7xl mx-auto mb-20 text-left">
          <span className="text-[10px] uppercase tracking-[0.4em] text-foreground/40 font-bold mb-6 block">Our Expertise</span>
          <h1 className="font-display text-[clamp(3rem,10vw,8rem)] font-extrabold leading-[0.85] tracking-tighter uppercase mb-12">
            Scalable<br /><span className="text-accent">Solutions.</span>
          </h1>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div 
              key={i} 
              className={`relative overflow-hidden ${service.color} rounded-[2rem] p-10 flex flex-col transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl group`}
            >
              {/* Illustration Placeholder area */}
              <div className="aspect-[16/10] w-full bg-white/10 rounded-2xl mb-10 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                {service.icon}
              </div>

              <h2 className="font-display text-3xl font-extrabold text-white uppercase tracking-tight mb-8">
                {service.title}
              </h2>

              <ul className="space-y-4">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-white/80 group-hover:text-white transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-sm font-medium Montserrat">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-12 pt-8 border-t border-white/10">
                <a href="/#contact" className="text-accent font-display text-xs uppercase tracking-widest font-bold hover:gap-3 flex items-center gap-2 transition-all">
                  Inquire Now ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>

      <ContactForm />
      <Footer />
    </div>
  );
}
