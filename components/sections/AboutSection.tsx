"use client";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 py-12 max-w-7xl mx-auto relative">
      {/* Decorative blurred lime orbs */}
      <div
        className="pointer-events-none absolute -top-20 -left-20 w-60 h-60 rounded-full bg-gradient-to-br from-lime-400/40 via-lime-500/30 to-transparent opacity-40 blur-3xl animate-float-slow z-0"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-gradient-to-tr from-lime-500/30 via-lime-400/20 to-transparent opacity-30 blur-2xl animate-float-reverse z-0"
        aria-hidden="true"
      />

      {/* About Card - Column 1 */}
      <div
        className={`
          relative overflow-hidden rounded-3xl border bg-gradient-to-br from-zinc-950/80 via-zinc-800/80 to-zinc-950/80 border-lime-400
          shadow-lg
          backdrop-blur-sm
          p-8 flex flex-col justify-between min-h-[380px]
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
          WHO WE ARE
        </p>
        <h1 className="text-3xl sm:text-4xl font-extrabold leading-snug mb-4 bg-gradient-to-r from-white via-lime-200 to-lime-400 bg-clip-text text-transparent drop-shadow-lg">
          About <span className="from-lime-400 to-lime-600 bg-gradient-to-r bg-clip-text text-transparent">BM Computers</span>
        </h1>
        <p className="text-base mb-6 leading-relaxed font-medium text-lime-100/90">
          <span className="font-semibold text-lime-300">BM Computers</span> is your trusted partner for high-quality technology solutions in the heart of the city. We specialize in <strong className="text-lime-300">custom-built PCs</strong>, <strong className="text-lime-300">laptops</strong>, and the latest <strong className="text-lime-300">computer accessories</strong> to meet the needs of gamers, professionals, and everyday users. Our experienced team is passionate about delivering exceptional customer service and expert advice, ensuring you get the perfect tech for your requirements.
        </p>
        <ul className="mb-2 space-y-3">
          <li className="flex items-center gap-3">
            <span className="inline-block w-3 h-3 rounded-full bg-gradient-to-br from-lime-400 to-lime-500 shadow" />
            <span className="font-semibold text-lime-200">Personalized Recommendations & Friendly Support</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="inline-block w-3 h-3 rounded-full bg-gradient-to-br from-lime-400 to-lime-500 shadow" />
            <span className="font-semibold text-lime-200">Wide Range of Trusted Brands & Products</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="inline-block w-3 h-3 rounded-full bg-gradient-to-br from-lime-400 to-lime-500 shadow" />
            <span className="font-semibold text-lime-200">Reliable After-Sales Service & Ongoing Assistance</span>
          </li>
        </ul>
      </div>

      {/* About Card - Column 2 (SEO-optimized, unique content) */}
      <div
        className={`
          relative overflow-hidden rounded-3xl border bg-gradient-to-br from-zinc-950/80 via-zinc-800/80 to-zinc-950/80 border-lime-400
          shadow-lg
          backdrop-blur-sm
          p-8 flex flex-col justify-between min-h-[380px]
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
          WHY CHOOSE US
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold leading-snug mb-4 bg-gradient-to-r from-white via-lime-200 to-lime-400 bg-clip-text text-transparent drop-shadow-lg">
          Your Local Technology Experts
        </h2>
        <p className="text-base mb-6 leading-relaxed font-medium text-lime-100/90">
          At <span className="font-semibold text-lime-300">BM Computers</span>, we go beyond just selling computers. We offer <strong className="text-lime-300">expert computer repair services</strong>, <strong className="text-lime-300">IT support</strong>, and <strong className="text-lime-300">network setup</strong> for homes and businesses. Our commitment to quality and customer satisfaction has made us a leading computer shop in the region. Whether you need a fast gaming PC, a reliable business laptop, or help with your technology, our certified technicians are here to assist you every step of the way.
        </p>
        <ul className="mb-2 space-y-3">
          <li className="flex items-center gap-3">
            <span className="inline-block w-3 h-3 rounded-full bg-gradient-to-br from-lime-400 to-lime-500 shadow" />
            <span className="font-semibold text-lime-200">Certified Computer Repair & Maintenance</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="inline-block w-3 h-3 rounded-full bg-gradient-to-br from-lime-400 to-lime-500 shadow" />
            <span className="font-semibold text-lime-200">Business IT Solutions & Network Setup</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="inline-block w-3 h-3 rounded-full bg-gradient-to-br from-lime-400 to-lime-500 shadow" />
            <span className="font-semibold text-lime-200">Fast Turnaround & Transparent Pricing</span>
          </li>
        </ul>
      </div>

      {/* About Image Card */}
      <div
        className={`
          relative overflow-hidden rounded-3xl border bg-gradient-to-br from-zinc-950/80 via-zinc-800/80 to-zinc-950/80 border-lime-400
          shadow-lg
          backdrop-blur-sm
          p-0 flex flex-col justify-between min-h-[380px]
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
        <div className="relative w-full h-full min-h-[220px] flex items-center justify-center">
          <img
            src="/STORE-FRONT.webp"
            alt="About BM computers"
            className="object-cover w-full h-full rounded-3xl"
            draggable={false}
            style={{
              filter: "brightness(0.97) contrast(1.08)",
              position: "absolute",
              left: "50%",
              top: "50%",
              width: "100%",
              height: "100%",
              transform: "translate(-50%, -50%)",
              objectFit: "cover",
              pointerEvents: "none",
            }}
          />
          {/* Decorative lime gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-lime-900/40 via-transparent to-transparent pointer-events-none rounded-3xl" />
          {/* Floating badge or logo */}
          <div className="absolute top-4 left-4 bg-white/90 px-4 py-1 rounded-full shadow text-lime-700 font-bold text-sm tracking-wide border border-lime-200 backdrop-blur">
            Since 2010
          </div>
          {/* Optional: Add a floating logo */}
          <div className="absolute bottom-4 right-4">
            <span className="inline-block w-10 h-10 rounded-full bg-gradient-to-br from-lime-500 to-lime-400 flex items-center justify-center shadow-lg">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="16" fill="url(#paint0_linear)" />
                <text x="50%" y="55%" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold" dy=".3em" fontFamily="Inter, sans-serif">BM</text>
                <defs>
                  <linearGradient id="paint0_linear" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#65a30d" />
                    <stop offset="1" stopColor="#84cc16" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div
        className={`
          relative overflow-hidden rounded-3xl border bg-gradient-to-br from-zinc-950/80 via-zinc-800/80 to-zinc-950/80 border-lime-400
          shadow-lg
          backdrop-blur-sm
          p-0 flex flex-col justify-between min-h-[380px]
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
        <div className="relative w-full h-full min-h-[220px] flex items-center justify-center">
          <img
            src="/STORE-INSIDE.webp"
            alt="About BM computers"
            className="object-cover w-full h-full rounded-3xl"
            draggable={false}
            style={{
              filter: "brightness(0.97) contrast(1.08)",
              position: "absolute",
              left: "50%",
              top: "50%",
              width: "100%",
              height: "100%",
              transform: "translate(-50%, -50%)",
              objectFit: "cover",
              pointerEvents: "none",
            }}
          />
          {/* Decorative lime gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-lime-900/40 via-transparent to-transparent pointer-events-none rounded-3xl" />
          {/* Floating badge or logo */}
          <div className="absolute top-4 left-4 bg-white/90 px-4 py-1 rounded-full shadow text-lime-700 font-bold text-sm tracking-wide border border-lime-200 backdrop-blur">
            Since 2010
          </div>
          {/* Optional: Add a floating logo */}
          <div className="absolute bottom-4 right-4">
            <span className="inline-block w-10 h-10 rounded-full bg-gradient-to-br from-lime-500 to-lime-400 flex items-center justify-center shadow-lg">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="16" fill="url(#paint0_linear)" />
                <text x="50%" y="55%" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold" dy=".3em" fontFamily="Inter, sans-serif">BM</text>
                <defs>
                  <linearGradient id="paint0_linear" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#65a30d" />
                    <stop offset="1" stopColor="#84cc16" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
