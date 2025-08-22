import './globals.css';
import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import Navbar from '@/components/sections/navbar';
import Footer from '@/components/sections/Footer';

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk'
});

export const metadata: Metadata = {
  title: 'BM Computes - Powering the Future of Computing',
  description: 'Experience modern computing like never before. Explore futuristic systems, tailored setups, and next-gen solutions.',
  keywords: 'computers, technology, custom PC, hardware, computing solutions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="font-sans antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}