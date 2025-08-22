'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Store',
      details: '123 Tech Street, Silicon Valley, CA 94000',
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+1 (555) 123-TECH',
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: 'hello@bmcomputes.com',
    },
  ];

  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const contactVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
        staggerChildren: 0.1,
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
            Let's Build the Future Together
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your computing experience? Get in touch with our experts
            and let's create something extraordinary.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            variants={contactVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Get In Touch
            </h3>
            
            {contactInfo.map(({ icon: Icon, title, details }, index) => (
              <motion.div
                key={title}
                variants={contactVariants}
                whileHover={{ x: 10, transition: { duration: 0.3 } }}
                className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors duration-300"
              >
                <div className="w-12 h-12 gradient-green rounded-xl flex items-center justify-center glow-effect">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-1">
                    {title}
                  </h4>
                  <p className="text-gray-600">
                    {details}
                  </p>
                </div>
              </motion.div>
            ))}

            <div className="mt-12 p-8 glassmorphism rounded-3xl glow-effect">
              <h4 className="text-2xl font-bold gradient-text mb-4">
                Business Hours
              </h4>
              <div className="space-y-2 text-gray-600">
                <p><span className="font-semibold">Monday - Friday:</span> 9:00 AM - 8:00 PM</p>
                <p><span className="font-semibold">Saturday:</span> 10:00 AM - 6:00 PM</p>
                <p><span className="font-semibold">Sunday:</span> 12:00 PM - 5:00 PM</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={formVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Name
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-2xl focus:border-[#00FFB0] focus:ring-4 focus:ring-[#00FFB0]/20 transition-all duration-300 outline-none glow-effect"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Email
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-2xl focus:border-[#00FFB0] focus:ring-4 focus:ring-[#00FFB0]/20 transition-all duration-300 outline-none glow-effect"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-2xl focus:border-[#00FFB0] focus:ring-4 focus:ring-[#00FFB0]/20 transition-all duration-300 outline-none resize-none glow-effect"
                  placeholder="Tell us about your computing needs..."
                  required
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full gradient-green text-white px-8 py-4 rounded-2xl font-semibold text-lg inline-flex items-center justify-center gap-3 glow-effect hover:shadow-2xl transition-all duration-300"
              >
                Send Message
                <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}