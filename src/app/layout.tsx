import type {Metadata} from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SmoothScroll } from '@/components/layout/SmoothScroll';
import { Toaster } from '@/components/ui/toaster';
import { ConnectPopup } from '@/components/ui/ConnectPopup';

export const metadata: Metadata = {
  title: 'SAMAR. | Creative Full-Stack Developer & Designer',
  description: 'Creative Developer from Sagar, MP building high-performance, immersive digital experiences and modern web applications.',
  keywords: ['Samar', 'Creative Developer', 'Full-Stack Developer', 'Sagar Madhya Pradesh', 'Next.js Developer', 'GSAP Animation', 'Portfolio'],
  authors: [{ name: 'Samar' }],
  openGraph: {
    title: 'SAMAR. | Creative Developer',
    description: 'Building immersive digital worlds that move.',
    url: 'https://samar-portfolio.vercel.app',
    siteName: 'Samar Portfolio',
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
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased bg-background text-foreground flex flex-col min-h-screen">
        <SmoothScroll>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <ConnectPopup />
          <Toaster />
        </SmoothScroll>
      </body>
    </html>
  );
}