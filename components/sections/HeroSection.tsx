'use client';

// HeroSection component
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { SolarSystem } from './SolarSystem';

import Link from 'next/link';

// Main HeroSection export
export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Animation variants for the hero container
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

  // Animation variants for child elements
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
      
      {/* Modern Hero Section with Animations */}
      <section className="relative  min-h-[90vh] top-0 flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0]">  
        {/* Modern Background Glow Effects */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-green-400/30 via-green-500/30 to-green-600/30 rounded-full opacity-40 blur-[120px] animate-pulse" />
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-tr from-green-500/20 via-green-400/20 to-green-600/20 rounded-full opacity-30 blur-[100px] animate-pulse delay-1000" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-green-600/20 via-green-400/20 to-green-500/20 rounded-full opacity-30 blur-[100px] animate-pulse delay-500" />
        </div>
        {/* Top Left Glow */}
        <div className="absolute top-0 left-0  -translate-x-[54%] -translate-y-[70%] w-2/5 rounded-full aspect-square bg-green-600/50
  backdrop-filter blur-3xl opacity-50" />
        {/* Bottom Right Glow */}
        <div className="absolute bottom-0 right-0 translate-x-[54%] translate-y-[70%] w-2/5 rounded-full aspect-square bg-green-600/50
  backdrop-filter blur-3xl opacity-50" />

        {/* Centered Hero Content with full width */}
        <div className="relative flex w-full max-w-7xl mx-auto items-center justify-center z-10">
          {/* Left Solar System - Half Visible */}
          <div className="hidden lg:flex flex-1 justify-end items-center">
            <div className="absolute -left-1/2 scale-150">
              {/* SolarSystem component (left) */}
              <SolarSystem />
            </div>
          </div>

          <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
            <div className="text-center flex flex-col items-center space-y-10">
              {/* Tagline */}
              <span className="flex items-center border border-gray-500 px-3 py-0.5 rounded-full bg-gray-50 dark:bg-gray-950 bg-opacity-50 text-gray-700 dark:text-gray-300">
                <span className="relative flex h-3 w-3 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full dark:bg-cyan-400 bg-cyan-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 dark:bg-emerald-500 bg-emerald-500"></span>
                </span>
                <span>Your Trusted Computer Store</span>
              </span>
              {/* Main Heading */}
              <h1 className="text-6xl md:text-6xl lg:text-6xl/tight xl:text-6xl/tight text-gray-900 dark:text-white font-bold max-w-5xl capitalize">
                Everything Your Computer Needs, Under One Roof
              </h1>
              {/* Description */}
              <p className="text-l text-gray-700 dark:text-gray-300 text-center max-w-2xl">
                At BM Computes, we provide a complete range of computing solutions—from powerful PCs and monitors to graphic cards, storage, and accessories. Whether you’re a gamer, creator, or professional, our store brings you the latest technology in one place, built for performance and reliability.
              </p>
              {/* Call to Action Button */}
              <div className="flex justify-center">
                <Link href="#" className="px-8 h-12 rounded-full flex items-center gap-x-3 bg-emerald-700 text-white hover:bg-opacity-80">
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

          {/* Right Solar System - Half Visible */}
          <div className="hidden lg:flex flex-1 justify-end items-center">
            <div className="absolute -right-1/2 scale-150">
              {/* SolarSystem component (right) */}
              <SolarSystem />
            </div>
          </div>
        </div>

        {/* Modern Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-8 h-14 border-2 border-emerald-400 rounded-full flex justify-center items-start bg-white/80 shadow-md"
          >
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-4 bg-gradient-to-b from-emerald-500 to-emerald-700 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}