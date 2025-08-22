'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Zap, 
  Award, 
  Clock, 
  Users 
} from 'lucide-react';

export default function WhyChooseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const highlights = [
    {
      icon: Zap,
      title: 'Cutting-Edge Technology',
      description: 'We stay ahead of the curve with the latest hardware and software innovations.',
      metric: '99.9%',
      metricLabel: 'Performance Rating',
    },
    {
      icon: Award,
      title: 'Industry Recognition',
      description: 'Award-winning team with certifications from leading technology partners.',
      metric: '15+',
      metricLabel: 'Industry Awards',
    },
    {
      icon: Clock,
      title: 'Rapid Delivery',
      description: 'Fast turnaround times without compromising on quality or attention to detail.',
      metric: '48hr',
      metricLabel: 'Average Build Time',
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: 'Personal account managers and 24/7 technical support for peace of mind.',
      metric: '24/7',
      metricLabel: 'Support Available',
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#FAFAF7] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text mb-6">
            Why Choose BM Computes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the difference that expertise, innovation, and dedication make
            in delivering exceptional computing solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {highlights.map(({ icon: Icon, title, description, metric, metricLabel }, index) => (
            <motion.div
              key={title}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                x: 10,
                transition: { duration: 0.3 }
              }}
              className="group relative p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#00FFB0]/30 overflow-hidden"
            >
              {/* Background pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 gradient-green opacity-5 rounded-full blur-3xl -translate-y-8 translate-x-8 group-hover:opacity-10 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 gradient-green rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 glow-effect">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="text-right">
                    <div className="text-3xl font-bold gradient-text group-hover:scale-110 transition-transform duration-300">
                      {metric}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      {metricLabel}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:gradient-text transition-all duration-300">
                  {title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {description}
                </p>
              </div>

              {/* Hover line effect */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#00FFB0] to-[#009966] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}