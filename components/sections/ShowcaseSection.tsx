'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ShowcaseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const showcaseItems = [
    {
      title: 'Gaming Powerhouse',
      description: 'High-end gaming rig with RTX 4090 and AMD Ryzen 9',
      image: 'https://images.pexels.com/photos/7148025/pexels-photo-7148025.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Gaming',
    },
    {
      title: 'Workstation Pro',
      description: 'Professional workstation for content creation',
      image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Professional',
    },
    {
      title: 'Compact Efficiency',
      description: 'Mini-ITX build perfect for small spaces',
      image: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Compact',
    },
    {
      title: 'Server Solutions',
      description: 'Enterprise-grade server infrastructure',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Enterprise',
    },
    {
      title: 'Custom Cooling',
      description: 'Advanced liquid cooling systems',
      image: 'https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Cooling',
    },
    {
      title: 'Mobile Workstations',
      description: 'High-performance laptops for professionals',
      image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
      category: 'Mobile',
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

  const itemVariants = {
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
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F8F8F5] to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text mb-6">
            Our Showcase
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of custom builds and solutions that demonstrate
            our commitment to excellence and innovation.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {showcaseItems.map((item, index) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                rotateY: 2,
                transition: { duration: 0.3 }
              }}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="aspect-video overflow-hidden">
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  whileHover={{ scale: 1.1 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-gradient-to-r from-[#00FFB0] to-[#009966] text-white text-sm font-semibold rounded-full mb-3 glow-effect">
                  {item.category}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:gradient-text transition-all duration-300">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {item.description}
                </p>
              </div>

              {/* Shimmer effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}