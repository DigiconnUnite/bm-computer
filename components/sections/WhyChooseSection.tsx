'use client';

import { CheckCircle, Award, ShieldCheck, Users, Zap, Headset } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <CheckCircle className="w-8 h-8 text-emerald-600" />,
    title: "Expertise & Experience",
    description:
      "With decades of experience, our team delivers reliable solutions for all your computing needs, from custom PC builds to advanced repairs.",
  },
  {
    icon: <Award className="w-8 h-8 text-emerald-600" />,
    title: "Genuine Products",
    description:
      "We offer only authentic, high-quality components and systems from trusted brands, ensuring performance and peace of mind.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-emerald-600" />,
    title: "Transparent Warranty",
    description:
      "Enjoy clear, hassle-free warranty and after-sales support on every product and service. Your satisfaction and security are our priority.",
  },
  {
    icon: <Users className="w-8 h-8 text-emerald-600" />,
    title: "Personalized Service",
    description:
      "We listen, understand, and tailor solutions to your unique requirements—whether for gaming, business, or home use.",
  },
  {
    icon: <Zap className="w-8 h-8 text-emerald-600" />,
    title: "Fast Turnaround",
    description:
      "Get your systems up and running quickly with our efficient diagnostics, repairs, and upgrades—minimizing your downtime.",
  },
  {
    icon: <Headset className="w-8 h-8 text-emerald-600" />,
    title: "Dedicated Support",
    description:
      "Our friendly experts are always ready to help—before, during, and after your purchase. Reach us online, by phone, or in-store.",
  },
];

export function WhyChooseSection() {
  return (
    <section className="relative py-20  overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black text-emerald-600 mb-4 text-center font-display"
        >
          Why Choose <span className="text-emerald-700">BM Computers</span>?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-gray-700 mb-12 text-center"
        >
          Powering Agra’s future with <span className="font-semibold text-emerald-700">innovation</span>, <span className="font-semibold text-emerald-700">trust</span>, and <span className="font-semibold text-emerald-700">unmatched service</span>. Discover what sets us apart for all your computer solutions.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + idx * 0.08 }}
              viewport={{ once: true }}
              className="bg-white/80 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border border-emerald-100 hover:shadow-2xl transition-all duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-emerald-700 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-base">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
