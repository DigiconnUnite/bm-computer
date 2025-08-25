'use client';

import { motion } from 'framer-motion';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowUp,
  MapPin,
  Phone,
  Mail,
} from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  const footerLinks = [
    {
      title: 'Services',
      links: [
        { name: 'Custom PC Builds', href: '/services/custom-pc-builds' },
        { name: 'Laptop Solutions', href: '/services/laptop-solutions' },
        { name: 'Hardware Upgrades', href: '/services/hardware-upgrades' },
        { name: 'Technical Support', href: '/services/technical-support' },
      ],
    },
    {
      title: 'Quick Links',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Products', href: '/product' },
        { name: 'Gaming Hub', href: '/gaming-hub' },
        { name: 'Contact', href: '/contact' },
      ],
    },
    // Address/Contact section instead of Resources
    {
      title: 'Information',
      links: [
        {
          name: (
            <span className="flex items-start gap-2">
              <MapPin className="w-8 h-8 text-emerald-600 mt-0.5" />
              <span>Computers Market, Sanjay Palace, Agra</span>
            </span>
          ),
          href: 'https://maps.google.com/?q=123+Tech+Street,+Silicon+Valley,+CA+94000',
        },
        {
          name: (
            <span className="flex items-start gap-2">
              <Phone className="w-4 h-4 text-emerald-600 mt-0.5" />
              <span>+91-90909090</span>
            </span>
          ),
          href: 'tel:+9190909090',
        },
        {
          name: (
            <span className="flex items-start gap-2">
              <Mail className="w-4 h-4 text-emerald-600 mt-0.5" />
              <span>support@bmcomputers.com</span>
            </span>
          ),
          href: 'mailto:support@bmcomputers.com',
        },
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-emerald-50 via-white to-emerald-100 border-t border-gray-200 overflow-hidden shadow-xl font-sans">
      {/* Animated Glow Background */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-emerald-300 via-green-200 to-transparent opacity-40 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-green-400 via-emerald-200 to-transparent opacity-30 blur-3xl animate-pulse" />

      {/* Green gradient strip */}
      <div className="h-1 w-full gradient-green" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-20 pb-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Brand & Social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex-1 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-block w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-green-400 flex items-center justify-center shadow-lg">
                  <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="16" r="16" fill="url(#paint0_linear)" />
                    <text x="50%" y="55%" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold" dy=".3em" fontFamily="Inter, sans-serif">BM</text>
                    <defs>
                      <linearGradient id="paint0_linear" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#10B981" />
                        <stop offset="1" stopColor="#34D399" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <h3 className="text-3xl md:text-4xl font-black text-emerald-500 tracking-tight font-display leading-tight">
                  BM computers
                </h3>
              </div>
              <p className="text-gray-700 mb-8 max-w-md leading-relaxed text-base md:text-lg font-normal">
                Powering the future of computing with{' '}
                <span className="font-semibold text-emerald-700">innovation</span>,{' '}
                <span className="font-semibold text-emerald-700">expertise</span>, and{' '}
                <span className="font-semibold text-emerald-700">unparalleled service</span>.
              </p>
            </div>
            {/* Social Links */}
            <div className="flex gap-3 mt-2">
              {socialLinks.map(({ icon: Icon, href, label }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ scale: 1.15, y: -3, boxShadow: '0 4px 24px 0 rgba(16,185,129,0.15)' }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 bg-white/80 hover:bg-gradient-to-br hover:from-emerald-500 hover:to-green-400 rounded-full flex items-center justify-center transition-all duration-300 hover:text-white group shadow-md"
                  aria-label={label}
                  style={{ boxShadow: '0 2px 8px 0 rgba(16,185,129,0.07)' }}
                >
                  <Icon className="w-5 h-5 group-hover:scale-125 group-hover:text-white text-emerald-700 transition-transform duration-300" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Sections */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {footerLinks.map((section, idx) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 + idx * 0.1 }}
                viewport={{ once: true }}
                className="min-w-[160px]"
              >
                <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-5 tracking-wide flex items-center gap-2 font-display border-b-2 border-emerald-400 pb-1 w-fit">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link, i) => (
                    <li key={typeof link.name === 'string' ? link.name : i}>
                      <motion.a
                        href={link.href}
                        whileHover={{ borderBottom: '3px', color: '#059669' }}
                        className="text-gray-700 font-semibold text-sm transition-all duration-300 flex items-center gap-2"
                        target={link.href?.startsWith('http') || link.href?.startsWith('mailto') || link.href?.startsWith('tel') ? '_blank' : undefined}
                        rel={link.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {link.name}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t  border-emerald-300" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-gray-600 text-center text-sm font-semibold"
          >
            <span className="block md:inline">
              © 2024 <span className="font-semibold text-emerald-700">BM computers</span>. All rights reserved.
            </span>
            <span className="hidden md:inline mx-2 text-emerald-300">|</span>
          </motion.div>

          {/* Developer Credit Section */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xs md:text-sm text-gray-600 font-semibold text-center "
          >
            Developed by{' '}
            <a
              href="https://digiconnunite.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 hover:underline font-bold"
            >
              Digiconn Unite Pvt Ltd
            </a>
          </motion.div>

          <div className="text-sm font-semibold text-gray-600">
            <a href="#" className="hover:underline hover:text-emerald-700 transition mx-1">Privacy Policy</a>
            <span className="mx-1 text-emerald-300">|</span>
            <a href="#" className="hover:underline hover:text-emerald-700 transition mx-1">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}