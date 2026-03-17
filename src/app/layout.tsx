import type {Metadata} from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SmoothScroll } from '@/components/layout/SmoothScroll';
import { Toaster } from '@/components/ui/toaster';
import { ConnectPopup } from '@/components/ui/ConnectPopup';
import { MobileSidebar } from '@/components/layout/MobileSidebar';

export const metadata: Metadata = {
  title: {
    default: 'SAMAR. | Creative Full-Stack Developer & Designer',
    template: '%s | SAMAR. Creative Developer'
  },
  description: 'Creative Developer from Sagar, Madhya Pradesh building high-performance, immersive digital experiences, modern web applications, and premium e-commerce solutions.',
  keywords: ['Samar', 'Creative Developer', 'Full-Stack Developer', 'Sagar Madhya Pradesh', 'Next.js Developer', 'React Developer', 'GSAP Animation', 'Web Designing in Sagar', 'E-Commerce Solutions', 'Portfolio'],
  authors: [{ name: 'Samar' }],
  creator: 'Samar',
  publisher: 'Samar Creative Studio',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: { 
    index: true, 
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'SAMAR. | Creative Full-Stack Developer & Designer',
    description: 'Building immersive digital worlds that move. Expert in Next.js, React, and GSAP animations based in Sagar, MP.',
    url: 'https://samar-creative.pages.dev',
    siteName: 'Samar Creative',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SAMAR. | Creative Developer',
    description: 'Creative Developer from Sagar building immersive digital experiences.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Montserrat:wght@300;400;500;600;700;800&family=Instrument+Serif:ital@0;1&family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Dancing+Script:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased bg-background text-foreground flex flex-col min-h-screen">
        <SmoothScroll>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <MobileSidebar />
          <ConnectPopup />
          <Toaster />
        </SmoothScroll>
      </body>
    </html>
  );
}
