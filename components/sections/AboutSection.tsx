"use client";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="relative py-24 px-4 sm:px-8 lg:px-16 bg-gradient-to-br from-emerald-50 via-white to-emerald-50 overflow-hidden">

      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6  leading-tight font-display">
            About <span className="text-emerald-500">BM computers</span>
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            <span className="font-semibold text-emerald-700">BM computers</span> is your trusted partner in the world of technology, offering a curated selection of <span className="font-semibold">custom PCs</span>, <span className="font-semibold">laptops</span>, and <span className="font-semibold">cutting-edge accessories</span>. With a passion for innovation and a commitment to excellence, we empower individuals and businesses to achieve more with reliable, high-performance computing solutions.
          </p>
          <ul className="mb-8 space-y-3">
            <li className="flex items-center gap-3">
              <span className="inline-block w-3 h-3 rounded-full bg-gradient-to-br from-emerald-400 to-green-500" />
              <span className="text-gray-800 font-medium">Expert Guidance & Personalized Service</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="inline-block w-3 h-3 rounded-full bg-gradient-to-br from-emerald-400 to-green-500" />
              <span className="text-gray-800 font-medium">Latest Technology & Genuine Products</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="inline-block w-3 h-3 rounded-full bg-gradient-to-br from-emerald-400 to-green-500" />
              <span className="text-gray-800 font-medium">After-Sales Support & Hassle-Free Experience</span>
            </li>
          </ul>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <div className="relative w-full max-w-md aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-emerald-100 bg-white">
            <img
              src="/about-section-main.jpg"
              alt="About BM computers"
              className="object-cover w-full h-full"
              draggable={false}
            />
            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-100/60 via-transparent to-transparent pointer-events-none" />
            {/* Optional: Add a floating badge or logo */}
            <div className="absolute top-4 left-4 bg-white/80 px-4 py-1 rounded-full shadow text-emerald-600 font-bold text-sm tracking-wide">
              Since 2010
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

