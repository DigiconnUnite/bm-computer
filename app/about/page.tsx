"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Background from "@/components/ui/Backround";



export default function AboutPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-12-01T09:00:00").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <Background />
    <main
      className={`min-h-screen font-sans  text-emerald-50`}
     
    >
      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight font-display"
        >
          <span >BM COMPUTERS</span>
        </motion.h1>
        <p className="text-emerald-200 mt-4 max-w-2xl mx-auto">
          Your trusted partner for custom PCs, laptops, and the latest tech. Empowering you with innovation, reliability, and performance since 2010.
        </p>
        <Button
          className={`mt-6  rounded-full px-6 py-3 text-lg font-semibold shadow-lg shadow-emerald-900/30`}
        >
          Get My Quote
        </Button>
      </section>

      {/* Sponsors */}
      <section className="flex justify-center gap-10 py-10 opacity-90">
        {["Intel", "AMD", "NVIDIA", "ASUS", "Corsair"].map((logo) => (
          <span
            key={logo}
            className="text-emerald-300 text-lg font-semibold tracking-wide"
          >
            {logo}
          </span>
        ))}
      </section>

      {/* Highlights */}
      <section className="grid md:grid-cols-3 gap-6 px-6 py-16 max-w-6xl mx-auto">
        <div
          className={` p-6 rounded-2xl  shadow-lg border border-emerald-800/40`}
        >
          <h3 className="text-xl font-bold mb-2 text-emerald-200">
            Expert Guidance
          </h3>
          <p className="text-emerald-300 text-sm">
            Personalized advice for your unique computing needs.
          </p>
        </div>
        <div
          className="bg-gradient-to-br from-emerald-700 via-emerald-600 to-emerald-800 p-6 rounded-2xl shadow-lg border border-emerald-700/40"
        >
          <h3 className="text-xl font-bold mb-2 text-white">
            Latest Technology
          </h3>
          <p className="text-emerald-100 text-sm">
            Genuine products and the newest hardware releases.
          </p>
        </div>
        <div
          className={` p-6 rounded-2xl shadow-lg border border-emerald-800/40`}
        >
          <h3 className="text-xl font-bold mb-2 text-emerald-200">
            Hassle-Free Support
          </h3>
          <p className="text-emerald-300 text-sm">
            After-sales service and a seamless experience.
          </p>
        </div>
      </section>

      {/* Agenda */}
      <section className="px-6 py-16 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-emerald-200">OUR SERVICES</h2>
        <div className="space-y-6">
          <div
            className={` p-6 rounded-xl shadow-lg border border-emerald-800/40`}
          >
            <h3 className="text-lg font-semibold text-emerald-100">
              Custom PC Builds
            </h3>
            <p className="text-emerald-300 text-sm">
              Tailored desktops for gaming, workstations, and creators.
            </p>
          </div>
          <div
            className={` p-6 rounded-xl shadow-lg border border-emerald-800/40`}
          >
            <h3 className="text-lg font-semibold text-emerald-100">
              Laptops & Accessories
            </h3>
            <p className="text-emerald-300 text-sm">
              Top brands, latest models, and essential peripherals.
            </p>
          </div>
          <div
            className={` p-6 rounded-xl shadow-lg border border-emerald-800/40`}
          >
            <h3 className="text-lg font-semibold text-emerald-100">
              Business Solutions
            </h3>
            <p className="text-emerald-300 text-sm">
              Reliable IT for offices, startups, and enterprises.
            </p>
          </div>
        </div>
      </section>

      {/* Key Team */}
      <section className="px-6 py-16 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-emerald-200">OUR TEAM</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            "Bharat Mehta",
            "Priya Sharma",
            "Rohit Patel",
            "Anjali Desai",
          ].map((name) => (
            <div
              key={name}
              className={` p-6 rounded-xl shadow-lg border border-emerald-800/40`}
            >
              <div className="w-24 h-24 mx-auto bg-emerald-700 rounded-full mb-4 border-4 border-emerald-400/30"></div>
              <h3 className="text-lg font-semibold text-emerald-100">{name}</h3>
              <p className="text-emerald-400 text-sm">Team Member</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-6 py-16 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-emerald-200">WHY CHOOSE US?</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            "Trusted Since 2010",
            "Expert Support",
            "Genuine Products",
            "Fast Delivery",
          ].map((reason, i) => (
            <div
              key={reason}
              className={` p-6 rounded-xl shadow-lg border border-emerald-800/40`}
            >
              <h3 className="text-xl font-bold mb-2 text-emerald-300">
                0{i + 1}
              </h3>
              <p className="text-emerald-200 text-sm">{reason}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Countdown */}
      <section className="text-center py-16">
        <h2 className="text-3xl font-bold mb-6 text-emerald-200">
          SPECIAL OFFER ENDS IN
        </h2>
        <div className="text-4xl font-mono text-emerald-300 drop-shadow-lg">
          {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m : {timeLeft.seconds}s
        </div>
      </section>

      {/* Ticket Options */}
      <section className="grid md:grid-cols-3 gap-6 px-6 py-16 max-w-6xl mx-auto text-center">
        {[
          { title: "BASIC BUILD", price: "₹29,999" },
          { title: "PRO GAMER", price: "₹59,999" },
          { title: "ULTIMATE WORKSTATION", price: "₹1,09,999" },
        ].map((ticket) => (
          <div
            key={ticket.title}
            className={` p-8 rounded-2xl shadow-lg border border-emerald-800/40 flex flex-col items-center`}
          >
            <h3 className="text-lg font-bold mb-2 text-emerald-100">
              {ticket.title}
            </h3>
            <p className="text-3xl font-semibold mb-4 text-emerald-300">
              {ticket.price}
            </p>
            <Button
              className={` px-6 py-2 rounded-full font-semibold shadow`}
            >
              Get Quote
            </Button>
          </div>
        ))}
      </section>

      {/* Contact */}
      <section className="grid md:grid-cols-2 gap-10 px-6 py-20 max-w-6xl mx-auto items-center">
        <div>
          <h3 className="text-2xl font-bold mb-4 text-emerald-200">
            We’re Here To Connect And Assist You
          </h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-emerald-950/80 text-emerald-100 border border-emerald-800 focus:outline-emerald-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-emerald-950/80 text-emerald-100 border border-emerald-800 focus:outline-emerald-500"
            />
            <textarea
              placeholder="Message"
              className="w-full p-3 rounded-lg bg-emerald-950/80 text-emerald-100 border border-emerald-800 focus:outline-emerald-500"
            ></textarea>
            <Button
              className={` px-6 py-2 rounded-full font-semibold shadow`}
            >
              Send Message
            </Button>
          </form>
        </div>
        <div
          className={`h-64 rounded-xl flex items-center justify-center shadow-lg border border-emerald-800/40`}
        >
          <span className="text-emerald-400">[Map Placeholder]</span>
        </div>
      </section>

      </main>
    </>
  );
}
