'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  PcCase, 
  Laptop, 
  Wrench, 
  Network, 
  Cloud,
  Headphones 
} from 'lucide-react';

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      icon: PcCase,
      title: 'Custom PC Builds',
      description: 'Tailored desktop solutions built to your exact specifications and performance requirements.',
    },
    {
      icon: Laptop,
      title: 'Laptop Solutions',
      description: 'Expert advice and customization for mobile computing needs across all brands and budgets.',
    },
    {
      icon: Wrench,
      title: 'Hardware Upgrades',
      description: 'Breathe new life into your existing systems with professional upgrade and optimization services.',
    },
    {
      icon: Network,
      title: 'Networking',
      description: 'Complete network setup and optimization for homes, offices, and enterprise environments.',
    },
    {
      icon: Cloud,
      title: 'Cloud Setup',
      description: 'Seamless cloud integration and migration services for modern, scalable computing solutions.',
    },
    {
      icon: Headphones,
      title: 'Technical Support',
      description: '24/7 expert support and maintenance to keep your systems running at peak performance.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#F8F8F5]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From custom builds to cloud solutions, we offer comprehensive computing services
            designed to elevate your digital experience.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map(({ icon: Icon, title, description }, index) => (
            <motion.div
              key={title}
              variants={cardVariants}
              whileHover={{ 
                y: -5,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="group p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#00FFB0]/30"
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 gradient-green rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 glow-effect">
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#00FFB0] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:gradient-text transition-all duration-300">
                {title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}