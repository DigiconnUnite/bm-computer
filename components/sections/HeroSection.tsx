'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { SolarSystem } from './SolarSystem';
import Link from 'next/link';

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <>
      <section className="relative min-h-[90vh] flex items-center justify-center bg-transparent overflow-x-clip">
        {/* Modern Background Glow Effects */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-lime-400/30 via-lime-500/30 to-lime-600/30 rounded-full opacity-40 blur-[120px] animate-pulse" />
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-tr from-lime-500/20 via-lime-400/20 to-lime-600/20 rounded-full opacity-30 blur-[100px] animate-pulse delay-1000" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-lime-600/20 via-lime-400/20 to-lime-500/20 rounded-full opacity-30 blur-[100px] animate-pulse delay-500" />
        </div>

        {/* Left Solar System - Responsive Positioning */}
        <div className="hidden border lg:block absolute  top-0 -translate-y-1/2 left-0 w-1/2 max-w-[600px] pointer-events-none z-0">
          <div className="relative w-full h-full">
            <div className="absolute -left-1/2 top-0 w-full h-full scale-125 ">
              <SolarSystem />
            </div>
          </div>
        </div>

        {/* Right Solar System - Responsive Positioning */}
        <div className="hidden border lg:block absolute top-0 -translate-y-1/2 right-0 w-1/2 max-w-[600px] pointer-events-none z-0">
          <div className="relative w-full h-full">
            <div className="absolute -right-1/2 top-0 w-full h-full scale-125">
              <SolarSystem />
            </div>
          </div>
        </div>

        {/* Centered Hero Content */}
        <div className="relative flex w-full max-w-7xl mx-auto items-center justify-center z-10 px-4 sm:px-6">
          <div className="mx-auto w-full max-w-3xl z-50">
            <div
              className="text-center flex flex-col items-center space-y-8 md:space-y-10"

            >
              {/* Tagline */}
              <span className="flex items-center border border-lime-500 px-3 py-0.5 rounded-full bg-lime-900/60 backdrop-blur-sm text-lime-400 dark:text-lime-100 font-semibold shadow-sm">
                <span className="relative flex h-3 w-3 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-lime-500"></span>
                </span>
                <span>Your Trusted Computer Store</span>
              </span>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl/tight xl:text-6xl/tight text-white font-extrabold capitalize drop-shadow-lg">
                <span className="font-extrabold bg-gradient-to-r from-white via-lime-300 to-lime-400 bg-clip-text text-transparent drop-shadow-lg">
                  Everything Your Computer Needs, Under One Roof
                </span>
              </h1>

              {/* Description */}
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-lime-100/90 dark:text-lime-100 text-center max-w-2xl font-medium">
                At <span className="font-bold text-lime-300">BM COMPUTERS</span>, we provide a complete range of computing solutions—from powerful PCs and monitors to graphic cards, storage, and accessories. Whether you're a gamer, creator, or professional, our store brings you the latest technology in one place, built for performance and reliability.
              </p>

              {/* Call to Action Button */}
              <div className="flex justify-center pt-2">
                <Link
                  href="/contact"
                  className="px-6 py-3 sm:px-8 sm:h-12 rounded-full flex items-center gap-x-3 bg-lime-600/90 text-white font-bold hover:bg-lime-500/90 hover:text-lime-50 shadow-lg transition"
                  style={{ backdropFilter: 'blur(2px)' }}
                >
                  Let's talk
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Modern Scroll Indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30"
        >
          <div
            className="w-6 h-12 sm:w-8 sm:h-14 border-2 border-lime-400 rounded-full flex justify-center items-start bg-lime-50/80 dark:bg-lime-900/80 shadow-md"
          >
            <div
              className="w-1.5 h-3 sm:h-4 bg-gradient-to-b from-lime-400 to-lime-600 rounded-full mt-2"
            />
          </div>
        </div>
      </section>
    </>
  );
}