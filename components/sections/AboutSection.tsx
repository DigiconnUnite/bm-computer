'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Lightbulb, Shield, Heart } from 'lucide-react';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const cards = [
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We embrace cutting-edge technology and forward-thinking solutions to deliver exceptional computing experiences.',
    },
    {
      icon: Shield,
      title: 'Trusted Experts',
      description: 'Our certified professionals bring decades of experience and industry knowledge to every project.',
    },
    {
      icon: Heart,
      title: 'Customer Focus',
      description: 'Your success is our priority. We build lasting relationships through exceptional service and support.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FAFAF7] to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text mb-6">
            Who We Are
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At BM Computes, we're passionate about transforming the way people interact with technology.
            Our mission is to deliver computing solutions that not only meet today's needs but anticipate tomorrow's possibilities.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {cards.map(({ icon: Icon, title, description }, index) => (
            <motion.div
              key={title}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group p-8 glassmorphism rounded-3xl glow-effect hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-16 h-16 gradient-green rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 glow-effect">
                <Icon className="w-8 h-8 text-white" />
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