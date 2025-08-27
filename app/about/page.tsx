"use client";
import Background from "@/components/ui/Backround";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaUsers,
  FaAward,
  FaHandshake,
  FaStore,
  FaLightbulb,
  FaShieldAlt,
  FaHandHoldingHeart,
} from "react-icons/fa";
import Image from "next/image";

const values = [
  {
    icon: <FaLightbulb className="text-lime-400 text-4xl" />,
    title: "Innovation",
    desc: "We bring the latest technology trends to our customers.",
  },
  {
    icon: <FaShieldAlt className="text-lime-400 text-4xl" />,
    title: "Trust",
    desc: "Transparent service with a customer-first approach.",
  },
  {
    icon: <FaLaptopCode className="text-lime-400 text-4xl" />,
    title: "Expertise",
    desc: "Trained professionals to guide your computing needs.",
  },
  {
    icon: <FaHandHoldingHeart className="text-lime-400 text-4xl" />,
    title: "Community",
    desc: "Serving tech enthusiasts and businesses in our region.",
  },
];

const team = [
  {
    name: "Mr. Bharat Mehta",
    role: "Founder & CEO",
    img: "/team/founder.jpg",
  },
  {
    name: "Ms. Priya Sharma",
    role: "Sales Manager",
    img: "/team/manager.jpg",
  },
  {
    name: "Mr. Ankit Verma",
    role: "Lead Technician",
    img: "/team/tech.jpg",
  },
];

export default function AboutPage() {
  return (
    <>
      <Background />
      <main className="relative min-h-screen font-sans text-lime-50  overflow-x-clip">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-t z-10"></div>
            <Image
              src="/store-interior.jpg"
              alt="BM Computers Store Interior"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-block rounded-full border border-lime-400 bg-gradient-to-r from-lime-600 via-lime-500 to-lime-400 px-6 py-2 text-sm font-semibold text-zinc-950 tracking-widest shadow-lg backdrop-blur mb-6"
            >
              WELCOME TO BM COMPUTERS
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="text-5xl md:text-7xl font-extrabold mb-6"
            >
              <span className="bg-gradient-to-r from-lime-300 via-lime-400 to-lime-500 bg-clip-text text-transparent drop-shadow-lg">
                About BM Computers
              </span>
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-2xl md:text-3xl font-bold text-lime-400 mb-6"
            >
              Everything Your Computer Needs, Under One Roof
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-xl text-lime-100/90 max-w-2xl mx-auto"
            >
              BM Computers is not just a store — it's a hub for innovation, quality, and trust. With years of experience, we bring the latest computing technology closer to you.
            </motion.p>
          </div>
        </section>

        {/* Our Story - Left Image, Right Content */}
        <section className="relative py-24 px-4">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-3xl overflow-hidden border-2 border-lime-400/40 shadow-2xl"
            >
              <Image
                src="/about-story.jpg"
                alt="BM Computers Story"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent"></div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="space-y-7"
            >
              <h2 className="text-4xl font-extrabold bg-gradient-to-r from-lime-300 via-lime-400 to-lime-500 bg-clip-text text-transparent">
                Our Story
              </h2>
              <p className="text-lg text-lime-100/90">
                Founded with a passion for technology, BM Computers has grown into a trusted name for modern computing solutions. We focus on creating a customer-first experience, ensuring that every visit to our store is worthwhile.
              </p>
              <p className="text-lg text-lime-100/90">
                What started as a small computer repair shop has now transformed into Agra's premier destination for all computing needs. Our journey is a testament to our commitment to quality, innovation, and customer satisfaction.
              </p>
              <p className="text-lg text-lime-100/90">
                Today, we stand proud as a one-stop solution for individuals, businesses, and educational institutions seeking reliable technology partners.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Values - Right Image, Left Content */}
        <section className="relative py-24 px-4 ">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="space-y-7"
            >
              <h2 className="text-4xl font-extrabold bg-gradient-to-r from-lime-300 via-lime-400 to-lime-500 bg-clip-text text-transparent">
                Our Mission & Values
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.7 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-zinc-800/80 to-zinc-900/90 border border-lime-400/20 rounded-2xl p-6 text-center hover:shadow-lime-400/20 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex justify-center mb-3">{value.icon}</div>
                    <h3 className="text-lg font-bold text-lime-300 mb-2">{value.title}</h3>
                    <p className="text-lime-100/80 text-sm">{value.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-3xl overflow-hidden border-2 border-lime-400/40 shadow-2xl"
            >
              <Image
                src="/about-values.jpg"
                alt="BM Computers Values"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent"></div>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us - Left Content, Right Image Grid */}
        <section className="relative py-24 px-4">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="space-y-7"
            >
              <h2 className="text-4xl font-extrabold bg-gradient-to-r from-lime-300 via-lime-400 to-lime-500 bg-clip-text text-transparent">
                Why Choose BM Computers?
              </h2>
              <ul className="space-y-5 mt-6">
                <li className="flex items-start">
                  <span className="bg-lime-500/20 p-2 rounded-lg mr-4 mt-1">
                    <span className="w-2 h-2 rounded-full bg-lime-400 block"></span>
                  </span>
                  <div>
                    <h4 className="text-lg font-semibold text-lime-300">Wide range of modern computer solutions</h4>
                    <p className="text-lime-100/80">From gaming rigs to professional workstations</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-lime-500/20 p-2 rounded-lg mr-4 mt-1">
                    <span className="w-2 h-2 rounded-full bg-lime-400 block"></span>
                  </span>
                  <div>
                    <h4 className="text-lg font-semibold text-lime-300">Expert advice from professionals</h4>
                    <p className="text-lime-100/80">Our team stays updated with the latest tech trends</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-lime-500/20 p-2 rounded-lg mr-4 mt-1">
                    <span className="w-2 h-2 rounded-full bg-lime-400 block"></span>
                  </span>
                  <div>
                    <h4 className="text-lg font-semibold text-lime-300">Customer-first support & guidance</h4>
                    <p className="text-lime-100/80">We prioritize your needs and budget</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-lime-500/20 p-2 rounded-lg mr-4 mt-1">
                    <span className="w-2 h-2 rounded-full bg-lime-400 block"></span>
                  </span>
                  <div>
                    <h4 className="text-lg font-semibold text-lime-300">Trusted by hundreds of happy clients</h4>
                    <p className="text-lime-100/80">Join our growing community of satisfied customers</p>
                  </div>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-5"
            >
              <div className="relative h-56 rounded-2xl overflow-hidden border border-lime-400/30">
                <Image
                  src="/products/gaming-pc.webp"
                  alt="Gaming PC"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-56 rounded-2xl overflow-hidden border border-lime-400/30">
                <Image
                  src="/products/laptop.webp"
                  alt="Laptop"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-56 rounded-2xl overflow-hidden border border-lime-400/30">
                <Image
                  src="/products/keyboard.webp"
                  alt="Keyboard"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-56 rounded-2xl overflow-hidden border border-lime-400/30">
                <Image
                  src="/products/monitor.webp"
                  alt="Monitor"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Store Experience - Full Width Image with Overlay */}
        <section className="relative py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden border-2 border-lime-400/30 h-96"
            >
              <Image
                src="/store-experience.jpg"
                alt="BM Computers Store Experience"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/80 to-transparent flex items-end justify-center pb-12">
                <div className="text-center px-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-lime-300 mb-4">
                    Step into BM Computers and experience technology like never before.
                  </h2>
                  <p className="text-xl text-lime-100/90 max-w-2xl mx-auto">
                    Our store is designed to give you hands-on experience with the latest technology in a comfortable, welcoming environment.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* New Section: Our Services - Right Image, Left Content */}
        <section className="relative py-24 px-4 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="space-y-7"
            >
              <h2 className="text-4xl font-extrabold bg-gradient-to-r from-lime-300 via-lime-400 to-lime-500 bg-clip-text text-transparent">
                What We Offer
              </h2>
              <ul className="space-y-5 mt-6">
                <li className="flex items-start">
                  <FaStore className="text-lime-400 text-2xl mr-4 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-lime-300">Retail & Custom Builds</h4>
                    <p className="text-lime-100/80">Latest laptops, desktops, and custom gaming PCs tailored to your needs.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaAward className="text-lime-400 text-2xl mr-4 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-lime-300">Certified Repairs</h4>
                    <p className="text-lime-100/80">Expert repair services for all major brands and devices.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaHandshake className="text-lime-400 text-2xl mr-4 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-lime-300">Business Solutions</h4>
                    <p className="text-lime-100/80">IT consulting, networking, and managed services for organizations.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaUsers className="text-lime-400 text-2xl mr-4 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-lime-300">Workshops & Training</h4>
                    <p className="text-lime-100/80">Empowering the community with the latest tech knowledge.</p>
                  </div>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-3xl overflow-hidden border-2 border-lime-400/40 shadow-2xl"
            >
              <Image
                src="/about-services.jpg"
                alt="BM Computers Services"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent"></div>
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section className="relative py-24 px-4 bg-gradient-to-b from-zinc-900 via-zinc-950 to-zinc-950">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-4xl font-extrabold text-center mb-16"
            >
              <span className="bg-gradient-to-r from-lime-300 via-lime-400 to-lime-500 bg-clip-text text-transparent">
                Meet Our Experts
              </span>
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-10">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.7 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-zinc-800/80 to-zinc-900/90 border border-lime-400/20 rounded-2xl p-8 text-center hover:shadow-lime-400/20 hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-lime-400/40">
                    <Image
                      src={member.img}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-lime-300 mb-2">{member.name}</h3>
                  <p className="text-lime-400/80 mb-4">{member.role}</p>
                  <p className="text-lime-100/80 text-sm">
                    {member.role === "Founder & CEO"
                      ? "With over 20 years in the industry, Bharat leads our vision for innovation and customer satisfaction."
                      : member.role === "Sales Manager"
                        ? "Priya ensures our customers find the perfect solutions for their computing needs."
                        : "Ankit brings technical expertise and passion for solving complex computing challenges."}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="relative py-24 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center bg-gradient-to-br from-zinc-800/90 to-zinc-900/90 border border-lime-400/30 rounded-3xl p-12 md:p-16 backdrop-blur-sm"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-lime-300 mb-6">
              Visit BM Computers Today
            </h2>
            <p className="text-xl text-lime-100/90 mb-8 max-w-2xl mx-auto">
              Discover modern computing, guided by experts who care about your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-lime-400 via-lime-500 to-lime-600 text-zinc-900 font-bold shadow-lg hover:from-lime-500 hover:to-lime-400 transition-all duration-200 text-lg"
              >
                Contact Us
              </a>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full bg-transparent border-2 border-lime-400 text-lime-300 font-bold shadow-lg hover:bg-lime-400/10 transition-all duration-200 text-lg"
              >
                Get Directions
              </a>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
}