'use client';

import { CheckCircle, Award, ShieldCheck, Users, Zap, Headset } from 'lucide-react';
import { motion } from 'framer-motion';

// Abstract background images for each card (can be replaced with your own creative assets)
const cardBgImages = [
  "/products/abfull-1.png",
  "/products/abfull-2.png",
  "/products/abfull-3.png",
  "/products/abfull-4.png",
  "/products/abfull-5.png",
  "/products/abfull-6.png",

];

const features = [
  {
    icon: <CheckCircle className="w-8 h-8 text-lime-500 drop-shadow" />,
    title: "Expertise & Experience",
    description:
      "With decades of experience, our team delivers reliable solutions for all your computing needs, from custom PC builds to advanced repairs.",
  },
  {
    icon: <Award className="w-8 h-8 text-lime-500 drop-shadow" />,
    title: "Genuine Products",
    description:
      "We offer only authentic, high-quality components and systems from trusted brands, ensuring performance and peace of mind.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-lime-500 drop-shadow" />,
    title: "Transparent Warranty",
    description:
      "Enjoy clear, hassle-free warranty and after-sales support on every product and service. Your satisfaction and security are our priority.",
  },
  {
    icon: <Users className="w-8 h-8 text-lime-500 drop-shadow" />,
    title: "Personalized Service",
    description:
      "We listen, understand, and tailor solutions to your unique requirements—whether for gaming, business, or home use.",
  },
  {
    icon: <Zap className="w-8 h-8 text-lime-500 drop-shadow" />,
    title: "Fast Turnaround",
    description:
      "Get your systems up and running quickly with our efficient diagnostics, repairs, and upgrades—minimizing your downtime.",
  },
  {
    icon: <Headset className="w-8 h-8 text-lime-500 drop-shadow" />,
    title: "Dedicated Support",
    description:
      "Our friendly experts are always ready to help—before, during, and after your purchase. Reach us online, by phone, or in-store.",
  },
];

export function WhyChooseSection() {
  // For creative effect, define a set of rotation angles for the backgrounds
  const rotations = [8, -10, 12, -7, 10, -12];

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <h2
          className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-white via-lime-300 to-lime-400 bg-clip-text text-transparent drop-shadow-lg mb-4 text-center font-display"
        >
          Why Choose <span className="from-lime-400 to-lime-600 bg-gradient-to-r bg-clip-text text-transparent">BM Computers</span>?
        </h2>
        <p
          className="max-w-2xl mx-auto text-lg md:text-xl text-lime-100/90 mb-12 text-center"
        >
          Powering Agra’s future with <span className="font-semibold text-lime-300">innovation</span>, <span className="font-semibold text-lime-300">trust</span>, and <span className="font-semibold text-lime-300">unmatched service</span>. Discover what sets us apart for all your computer solutions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + idx * 0.08 }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-br from-zinc-900/80 via-zinc-800/80 to-zinc-950/80 rounded-3xl border border-lime-400 shadow-lg backdrop-blur-sm p-8 flex flex-col items-center text-center hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 z-10 overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(15,20,8,0.70) 0%, rgba(40,60,15,0.65) 60%, rgba(15,15,15,0.70) 100%)",
                boxShadow:
                  "0 8px 32px 0 rgba(50, 255, 100, 0.10), 0 1.5px 8px 0 rgba(163, 230, 53, 0.10)",
                border: "1.5px solid #a3e635",
              }}
            >
              {/* Abstract absolute background image */}
              <img
                src={cardBgImages[idx % cardBgImages.length]}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2 w-[70%] max-w-none opacity-30 blur-lg z-0"
                style={{
                  filter: "brightness(1.2) saturate(1.2)",
                  objectFit: "cover",
                }}
              />
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-4 flex justify-center items-center w-full">{feature.icon}</div>
                <h3 className="text-xl font-bold text-lime-300 mb-2">{feature.title}</h3>
                <p className="text-lime-100/90 text-base">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}