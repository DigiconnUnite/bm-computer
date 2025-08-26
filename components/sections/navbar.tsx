'use client'
import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

// Add your contact info here
const CONTACT_PHONE = "+91-90909090";
const CONTACT_EMAIL = "support@bmcomputers.com";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Gamming Hub", href: "/gamming-hub" },
];

function getCurrentPath() {
  if (typeof window !== "undefined") {
    return window.location.pathname;
  }
  return "/";
}

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [currentPath, setCurrentPath] = useState("/");

  useEffect(() => {
    setCurrentPath(getCurrentPath());
    const handleScroll = () => {
      setAtTop(window.scrollY === 0);
    };
    const handlePathChange = () => {
      setCurrentPath(getCurrentPath());
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("popstate", handlePathChange);
    setAtTop(window.scrollY === 0);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("popstate", handlePathChange);
    };
  }, []);

  // Helper for active class
  const isActive = (href: string) => {
    if (href === "/") {
      return currentPath === "/";
    }
    return currentPath.startsWith(href);
  };

  return (
    <>
      {/* Top Ribbon for contact info */}
      <div className="w-full  fixed top-0 left-0 z-[60] bg-emerald-600 text-white text-sm mb-6 py-1 px-8 flex items-center justify-between gap-4">

        {/* Address Section - Left Side */}
        <div className="flex items-center gap-2">
          {/* Address Icon (using a simple SVG for location) */}
          <span className="inline-block mr-1" aria-label="Address">
            <MapPin className="w-4 h-4 text-white" />
          </span>
          <span>
            Computer Market, Sanjay Place, Agra
          </span>
        </div>
        {/* Contact Info - Right Side */}
        <div className="flex items-center gap-4">
          <span className="flex items-end gap-1">
            {/* Mail Icon */}
            <span className="inline-block mr-1">
              <Mail className="w-4 h-4" />
            </span>
            <a href={`mailto:${CONTACT_EMAIL}`} className="hover:underline">{CONTACT_EMAIL}</a>
          </span>
          <span className="hidden sm:inline-block">|</span>
          <span className="flex items-center gap-1">
            {/* Phone Icon */}
            <span className="inline-block mr-1">
              <Phone className="w-4 h-4" />
            </span>
            <a href={`tel:${CONTACT_PHONE.replace(/[^+\d]/g, "")}`} className="hover:underline">{CONTACT_PHONE}</a>
          </span>
        </div>
      </div>
          
      <nav
        className={`w-full fixed top-6 left-0 z-50 shadow-md transition-colors duration-300 bg-gradient-to-r  from-emerald-50 via-white to-emerald-50`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex  items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-emerald-500">BM COMPUTER</span>
            </div>
            {/* Desktop Nav - Centered */}
            <div className="hidden md:flex flex-1 justify-center">
              <div className="flex items-center  space-x-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`text-gray-700 hover:text-emerald-600 px-3   py-1 rounded transition font-medium ${
                      isActive(link.href)
                        ? "bg-emerald-50 rounded-full  border border-emerald-600 text-emerald-700 font-bold"
                        : ""
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
            {/* Contact Button at end */}
            <div className="hidden md:flex items-center ml-4">
              <a
                href="/contact"
                className={`px-5 py-2 rounded-full bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition shadow ${
                  isActive("/contact") ? "ring-2 ring-emerald-400" : ""
                }`}
              >
                Contact
              </a>
            </div>
            {/* Mobile Hamburger */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setSidebarOpen(true)}
                className="text-gray-700 hover:text-emerald-600 focus:outline-none"
                aria-label="Open sidebar"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-40 z-40 transition-opacity duration-200 ${
          sidebarOpen ? "block" : "hidden"
        }`}
        onClick={() => setSidebarOpen(false)}
      ></div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-200 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Ribbon in sidebar for contact info */}
        <div className="w-full bg-emerald-600 text-white text-xs py-2 px-4 flex flex-col gap-1">
          <a href={`tel:${CONTACT_PHONE.replace(/[^+\d]/g, "")}`} className="flex items-center gap-1 hover:underline">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2 5.5A2.5 2.5 0 014.5 3h15A2.5 2.5 0 0122 5.5v13A2.5 2.5 0 0119.5 21h-15A2.5 2.5 0 012 18.5v-13z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 7h.01M6 11h.01M6 15h.01M10 7h4M10 11h4M10 15h4" />
            </svg>
            {CONTACT_PHONE}
          </a>
          <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-1 hover:underline">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5.75A2.75 2.75 0 015.75 3h12.5A2.75 2.75 0 0121 5.75v12.5A2.75 2.75 0 0118.25 21H5.75A2.75 2.75 0 013 18.25V5.75z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 6.5l-9 7-9-7" />
            </svg>
            {CONTACT_EMAIL}
          </a>
        </div>
        <div className="flex items-center justify-between px-6 h-16 border-b">
          <span className="text-xl font-bold text-emerald-600">BM COMPUTER</span>
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-gray-700 hover:text-emerald-600 focus:outline-none"
            aria-label="Close sidebar"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col mt-4 space-y-2 px-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-gray-700 hover:text-emerald-600 px-3 py-2 rounded transition font-medium ${
                isActive(link.href)
                  ? "bg-emerald-100 text-emerald-700 font-semibold"
                  : ""
              }`}
              onClick={() => setSidebarOpen(false)}
            >
              {link.name}
            </a>
          ))}
          {/* Contact Button in Sidebar */}
          <a
            href="/contact"
            className={`mt-2 px-5 py-2 rounded-full bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition shadow text-center ${
              isActive("/contact") ? "ring-2 ring-emerald-400" : ""
            }`}
            onClick={() => setSidebarOpen(false)}
          >
            Contact
          </a>
        </nav>
      </aside>
      {/* Spacer for fixed navbar and ribbon */}
      <div className="h-[4.5rem] md:h-20"></div>
    </>
  );
}
