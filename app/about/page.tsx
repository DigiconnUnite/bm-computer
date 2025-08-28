"use client";
import Background from "@/components/ui/Backround";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-transparent text-white">
      <Background />
      {/* Hero Section */}
      <section className="relative px-4 py-24 overflow-hidden">


        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-5xl lg:text-5xl/tight xl:text-5xl/tight font-extrabold mb-6"
          >
            <span className="bg-gradient-to-r from-white via-lime-200 to-lime-400 bg-clip-text text-transparent">
              About BM Computers
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-lime-100/90 max-w-3xl mx-auto"
          >
            Your trusted partner in technology since 2010, delivering cutting-edge computing solutions with expertise and passion.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Our Story */}
          <div
            className={`
              relative overflow-hidden rounded-3xl border bg-gradient-to-br from-zinc-950/80 via-zinc-800/80 to-zinc-950/80 border-lime-400
              shadow-lg
              backdrop-blur-sm
              p-8
              transition-all duration-300
              z-10
            `}
            style={{
              background:
                "linear-gradient(135deg, rgba(15,20,8,0.70) 0%, rgba(40,60,15,0.65) 60%, rgba(15,15,15,0.70) 100%)",
              boxShadow:
                "0 8px 32px 0 rgba(50, 255, 100, 0.10), 0 1.5px 8px 0 rgba(163, 230, 53, 0.10)",
              border: "1.5px solid #a3e635",
            }}
          >
            <p className="text-lime-300 text-xs font-semibold mb-2 tracking-wider uppercase drop-shadow">
              OUR JOURNEY
            </p>
            <h2 className="text-3xl font-extrabold leading-snug mb-4 bg-gradient-to-r from-white via-lime-200 to-lime-400 bg-clip-text text-transparent drop-shadow-lg">
              Our Story
            </h2>
            <p className="text-base mb-4 leading-relaxed font-medium text-lime-100/90">
              Founded in 2010, BM Computers began as a small local shop with a big vision: to make cutting-edge technology accessible to everyone. What started as a passion project between friends has grown into a trusted technology partner for thousands of customers.
            </p>
            <p className="text-base mb-4 leading-relaxed font-medium text-lime-100/90">
              Over the years, we've stayed true to our core values of quality, expertise, and customer service. We've adapted to the rapidly changing tech landscape while maintaining our commitment to providing personalized solutions that meet our customers' unique needs.
            </p>
            <p className="text-base leading-relaxed font-medium text-lime-100/90">
              Today, we're proud to serve both individual enthusiasts and business clients, offering everything from custom-built gaming rigs to enterprise-level computing solutions.
            </p>
          </div>

          {/* Mission & Values */}
          <div
            className={`
              relative overflow-hidden rounded-3xl border bg-gradient-to-br from-zinc-950/80 via-zinc-800/80 to-zinc-950/80 border-lime-400
              shadow-lg
              backdrop-blur-sm
              p-8
              transition-all duration-300
              z-10
            `}
            style={{
              background:
                "linear-gradient(135deg, rgba(15,20,8,0.70) 0%, rgba(40,60,15,0.65) 60%, rgba(15,15,15,0.70) 100%)",
              boxShadow:
                "0 8px 32px 0 rgba(50, 255, 100, 0.10), 0 1.5px 8px 0 rgba(163, 230, 53, 0.10)",
              border: "1.5px solid #a3e635",
            }}
          >
            <p className="text-lime-300 text-xs font-semibold mb-2 tracking-wider uppercase drop-shadow">
              OUR CORE
            </p>
            <h2 className="text-3xl font-extrabold leading-snug mb-4 bg-gradient-to-r from-white via-lime-200 to-lime-400 bg-clip-text text-transparent drop-shadow-lg">
              Mission & Values
            </h2>
            <div className="mb-6">
              <h3 className="text-lime-300 font-bold text-lg mb-2">Our Mission</h3>
              <p className="text-base leading-relaxed font-medium text-lime-100/90">
                To empower individuals and businesses with reliable, high-performance computing solutions that enhance productivity, creativity, and entertainment.
              </p>
            </div>
            <div>
              <h3 className="text-lime-300 font-bold text-lg mb-2">Our Values</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="inline-block w-3 h-3 rounded-full bg-gradient-to-br from-lime-400 to-lime-500 shadow mt-1.5 flex-shrink-0" />
                  <span className="font-medium text-lime-100/90"><span className="font-semibold text-lime-300">Expertise:</span> Continuous learning to provide informed recommendations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block w-3 h-3 rounded-full bg-gradient-to-br from-lime-400 to-lime-500 shadow mt-1.5 flex-shrink-0" />
                  <span className="font-medium text-lime-100/90"><span className="font-semibold text-lime-300">Quality:</span> Only genuine products with verified performance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block w-3 h-3 rounded-full bg-gradient-to-br from-lime-400 to-lime-500 shadow mt-1.5 flex-shrink-0" />
                  <span className="font-medium text-lime-100/90"><span className="font-semibold text-lime-300">Service:</span> Personalized support before, during, and after purchase</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block w-3 h-3 rounded-full bg-gradient-to-br from-lime-400 to-lime-500 shadow mt-1.5 flex-shrink-0" />
                  <span className="font-medium text-lime-100/90"><span className="font-semibold text-lime-300">Innovation:</span> Staying ahead of technology trends to offer cutting-edge solutions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div
          className={`
            relative overflow-hidden rounded-3xl border bg-gradient-to-br from-zinc-950/80 via-zinc-800/80 to-zinc-950/80 border-lime-400
            shadow-lg
            backdrop-blur-sm
            p-8 mb-16
            transition-all duration-300
            z-10
          `}
          style={{
            background:
              "linear-gradient(135deg, rgba(15,20,8,0.70) 0%, rgba(40,60,15,0.65) 60%, rgba(15,15,15,0.70) 100%)",
            boxShadow:
              "0 8px 32px 0 rgba(50, 255, 100, 0.10), 0 1.5px 8px 0 rgba(163, 230, 53, 0.10)",
            border: "1.5px solid #a3e635",
          }}
        >
          <p className="text-lime-300 text-xs font-semibold mb-2 tracking-wider uppercase drop-shadow">
            WHY WE STAND OUT
          </p>
          <h2 className="text-3xl font-extrabold leading-snug mb-8 bg-gradient-to-r from-white via-lime-200 to-lime-400 bg-clip-text text-transparent drop-shadow-lg">
            Why Choose BM Computers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="bg-lime-500/10 p-3 rounded-lg flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lime-300 font-bold text-lg mb-2">Expert Custom Builds</h3>
                <p className="text-lime-100/90">Our technicians hand-assemble each system with precision, ensuring optimal performance and compatibility for your specific needs.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-lime-500/10 p-3 rounded-lg flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <div>
                <h3 className="text-lime-300 font-bold text-lg mb-2">Quality Assurance</h3>
                <p className="text-lime-100/90">Every product undergoes rigorous testing to ensure reliability and performance, backed by comprehensive warranties.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-lime-500/10 p-3 rounded-lg flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lime-300 font-bold text-lg mb-2">Personalized Service</h3>
                <p className="text-lime-100/90">We take time to understand your requirements and provide tailored recommendations, not just sales pitches.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-lime-500/10 p-3 rounded-lg flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lime-300 font-bold text-lg mb-2">After-Sales Support</h3>
                <p className="text-lime-100/90">Our relationship doesn't end at purchase. We provide ongoing support, maintenance, and upgrade services.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bulk Dealing & Multi-Branded Store Section */}
        <div
          className={`
            relative overflow-hidden rounded-3xl border bg-gradient-to-br from-zinc-950/80 via-zinc-800/80 to-zinc-950/80 border-lime-400
            shadow-lg
            backdrop-blur-sm
            p-8
            transition-all duration-300
            z-10
          `}
          style={{
            background:
              "linear-gradient(135deg, rgba(15,20,8,0.70) 0%, rgba(40,60,15,0.65) 60%, rgba(15,15,15,0.70) 100%)",
            boxShadow:
              "0 8px 32px 0 rgba(50, 255, 100, 0.10), 0 1.5px 8px 0 rgba(163, 230, 53, 0.10)",
            border: "1.5px solid #a3e635",
          }}
        >
          <p className="text-lime-300 text-xs font-semibold mb-2 tracking-wider uppercase drop-shadow">
            MULTI-BRANDED STORE & BULK DEALING
          </p>
          <h2 className="text-3xl font-extrabold leading-snug mb-8 bg-gradient-to-r from-white via-lime-200 to-lime-400 bg-clip-text text-transparent drop-shadow-lg">
            Your One-Stop Tech Destination
          </h2>

          <p className="text-base mb-8 leading-relaxed font-medium text-lime-100/90 max-w-3xl">
            BM Computers is a leading multi-branded technology store, offering the latest and widest range of computers, laptops, accessories, and tech products from all major brands. Whether you are an individual, a business, or a reseller, we provide bulk deals and customized solutions to meet every requirement. Our store is your trusted source for genuine products, competitive pricing, and the newest innovations in the tech world.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Bulk Deals */}
            <div className="bg-zinc-800/50 rounded-xl p-4 border border-lime-400/20 flex flex-col items-center text-center">
              <div className="w-20 h-20 mb-4 rounded-full bg-gradient-to-br from-lime-400 to-lime-600 flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M3 12h18M3 17h18" />
                </svg>
              </div>
              <h3 className="text-lime-300 font-bold mb-1">Bulk Dealing</h3>
              <p className="text-lime-100/70 text-sm mb-3">Special pricing and support for bulk orders, resellers, and corporate clients.</p>
              <p className="text-lime-100/90 text-xs">Get the best deals for large quantity purchases and business needs.</p>
            </div>

            {/* Multi-Branded Selection */}
            <div className="bg-zinc-800/50 rounded-xl p-4 border border-lime-400/20 flex flex-col items-center text-center">
              <div className="w-20 h-20 mb-4 rounded-full bg-gradient-to-br from-lime-400 to-lime-600 flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
              </div>
              <h3 className="text-lime-300 font-bold mb-1">Multi-Branded Store</h3>
              <p className="text-lime-100/70 text-sm mb-3">All top brands under one roof: laptops, desktops, peripherals, and more.</p>
              <p className="text-lime-100/90 text-xs">Choose from a wide range of genuine products from trusted manufacturers.</p>
            </div>

            {/* Latest Tech & New Products */}
            <div className="bg-zinc-800/50 rounded-xl p-4 border border-lime-400/20 flex flex-col items-center text-center">
              <div className="w-20 h-20 mb-4 rounded-full bg-gradient-to-br from-lime-400 to-lime-600 flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <h3 className="text-lime-300 font-bold mb-1">Latest Products</h3>
              <p className="text-lime-100/70 text-sm mb-3">Stay ahead with the newest launches and cutting-edge technology.</p>
              <p className="text-lime-100/90 text-xs">We update our inventory regularly with the latest in tech.</p>
            </div>

            {/* Complete Tech Solutions */}
            <div className="bg-zinc-800/50 rounded-xl p-4 border border-lime-400/20 flex flex-col items-center text-center">
              <div className="w-20 h-20 mb-4 rounded-full bg-gradient-to-br from-lime-400 to-lime-600 flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a4 4 0 018 0v2M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lime-300 font-bold mb-1">All Things Tech</h3>
              <p className="text-lime-100/70 text-sm mb-3">From computers to accessories, networking, and more—find everything you need.</p>
              <p className="text-lime-100/90 text-xs">Your one-stop shop for all technology products and solutions.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}