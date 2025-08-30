'use client';

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
        { name: 'Products', href: '/products' }, // Fixed: '/product' -> '/products'
        { name: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Information',
      links: [
        {
          name: (
            <span className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-lime-400 mt-0.5 flex-shrink-0" />
              <span>Computer Market, Sanjay Place, Agra</span>
            </span>
          ),
          href: 'https://maps.google.com/?q=Computer+Market,+Sanjay+Place,+Agra', // Fixed: correct address
        },
        {
          name: (
            <span className="flex items-start gap-2">
              <Phone className="w-4 h-4 text-lime-400 mt-0.5 flex-shrink-0" />
              <span>+91-90909090</span>
            </span>
          ),
          href: 'tel:+9190909090',
        },
        {
          name: (
            <span className="flex items-start gap-2">
              <Mail className="w-4 h-4 text-lime-400 mt-0.5 flex-shrink-0" />
              <span>support@bmcomputers.com</span>
            </span>
          ),
          href: 'mailto:support@bmcomputers.com',
        },
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/bmcomputersagra', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/bmcomputersagra', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com/bmcomputersagra', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com/company/bmcomputersagra', label: 'LinkedIn' },
    { icon: Youtube, href: 'https://youtube.com/@bmcomputersagra', label: 'YouTube' },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-lime-950 via-neutral-900 to-lime-950 border-t border-zinc-700 overflow-hidden shadow-2xl font-sans">
      {/* Enhanced Animated Glow Background */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-lime-500/15 via-lime-400/10 to-transparent opacity-70 blur-3xl animate-float-slow" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-lime-500/15 via-lime-400/10 to-transparent opacity-60 blur-3xl animate-float-reverse" />

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBvcGFjaXR5PSIwLjA1Ij4KICAgIDxjaXJjbGUgZmlsbD0iI0ZGRiIgY3g9IjMwIiBjeT0iMzAiIHI9IjEiLz4KICA8L2c+Cjwvc3ZnPg==')] opacity-20"></div>

      {/* lime gradient strip */}
      <div className="h-1 w-full bg-gradient-to-r from-lime-500 to-lime-400" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-20 pb-10 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Brand & Social */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-block w-10 h-10 rounded-full bg-gradient-to-br from-lime-500 to-lime-400 flex items-center justify-center shadow-lg shadow-lime-500/30">
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
                <h3 className="text-3xl md:text-4xl font-black text-lime-400 tracking-tight font-display leading-tight">
                  BM computers
                </h3>
              </div>
              <p className="text-zinc-300 mb-8 max-w-md leading-relaxed text-base md:text-lg font-normal">
                Powering the future of computing with{' '}
                <span className="font-semibold text-lime-400">innovation</span>,{' '}
                <span className="font-semibold text-lime-400">expertise</span>, and{' '}
                <span className="font-semibold text-lime-400">unparalleled service</span>.
              </p>
            </div>
            {/* Social Links */}
            <div className="flex gap-3 mt-2">
              {socialLinks.map(({ icon: Icon, href, label }, i) => (
                <a
                  key={label}
                  href={href}
                  className="w-11 h-11 bg-zinc-800/80 backdrop-blur-sm hover:bg-gradient-to-br hover:from-lime-500 hover:to-lime-400 rounded-full flex items-center justify-center transition-all duration-300 hover:text-black group shadow-lg border border-zinc-700/50"
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="w-5 h-5 group-hover:scale-125 group-hover:text-black text-lime-400 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {footerLinks.map((section, idx) => (
              <div
                key={section.title}
                className="min-w-[160px]"
              >
                <h4 className="text-lg md:text-xl font-bold text-lime-400 mb-5 tracking-wide flex items-center gap-2 font-display border-b-2 border-lime-500 pb-1 w-fit">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link, i) => (
                    <li key={typeof link.name === 'string' ? link.name : i}>
                      <a
                        href={link.href}
                        className="text-zinc-300 font-semibold text-sm transition-all duration-300 flex items-center gap-2 hover:text-lime-400 group"
                        target={link.href?.startsWith('http') || link.href?.startsWith('mailto') || link.href?.startsWith('tel') ? '_blank' : undefined}
                        rel={link.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        <span className="w-1 h-1 bg-lime-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-zinc-700/60" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-zinc-400 text-center text-sm font-semibold">
            <span className="block md:inline">
              © {new Date().getFullYear()} <span className="font-semibold text-lime-400">BM COMPUTERS AGRA</span>. All rights reserved.
            </span>
            <span className="hidden md:inline mx-2 text-lime-700">|</span>
          </div>

          {/* Developer Credit Section */}
          <div className="text-xs md:text-sm text-zinc-400 font-semibold text-center">
            Developed by{' '}
            <a
              href="https://digiconnunite.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lime-400 hover:underline font-bold hover:text-lime-300 transition-colors duration-300"
            >
              Digiconn Unite Pvt Ltd
            </a>
          </div>

          <div className="text-sm font-semibold text-zinc-400">
            <a href="/privacy-policy" className="hover:underline hover:text-lime-400 transition-colors duration-300 mx-1">Privacy Policy</a>
            <span className="mx-1 text-lime-700">|</span>
            <a href="/terms-of-service" className="hover:underline hover:text-lime-400 transition-colors duration-300 mx-1">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-gradient-to-br from-lime-500 to-lime-400 flex items-center justify-center shadow-lg shadow-lime-500/30 border border-lime-400/30 backdrop-blur-sm transition-transform duration-200 hover:scale-110 hover:-translate-y-1"
        aria-label="Scroll to top"
        type="button"
      >
        <ArrowUp className="w-6 h-6 text-black" />
      </button>
    </footer>
  );
}