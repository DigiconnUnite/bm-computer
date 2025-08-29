'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
const productSections = [

  {
    title: "PCs & Laptops",
    products: [
      {
        image: '/products/p-normal-pc.webp',
        name: "Desktop PCs",
        description: "Desktops for home and office use.",
      },
      {
        image: '/products/p-gaming-pc.webp',
        name: "Gaming PCs",
        description: "High-performance PCs for gaming.",
      },
      {
        image: '/products/p-laptop.webp',
        name: "Laptops",
        description: "Portable laptops for work or play.",
      },
      {
        image: '/products/p-mini-pc.webp',
        name: "Mini PCs",
        description: "Compact PCs for small spaces.",
      },
      {
        image: '/products/p-workstation-pc.webp',
        name: "Workstations",
        description: "Powerful PCs for professionals.",
      },
      {
        image: '/products/p-all-in-one.webp',
        name: "All-in-One PCs",
        description: "All-in-one computers for any desk.",
      },
      {
        image: '/products/p-thin-pc.webp',
        name: "Thin Clients",
        description: "Efficient clients for business.",
      },
      {
        image: '/products/p-borebone.webp',
        name: "Barebone PCs",
        description: "DIY kits for custom builds.",
      },
    ],
  },
  // ... rest of productSections unchanged
  {
    title: "Peripherals",
    products: [
      {
        image: '/products/p-mice.webp',
        name: "Mice",
        description: "Wired and wireless mice.",
      },
      {
        image: '/products/p-keyboard.webp',
        name: "Keyboards",
        description: "Mechanical and standard keyboards.",
      },
      {
        image: '/products/p-headphone.webp',
        name: "Headphones & Headsets",
        description: "Audio for gaming and calls.",
      },
      {
        image: '/products/p-speaker.webp',
        name: "Speakers",
        description: "Speakers for music and movies.",
      },
      {
        image: '/products/p-webcam.webp',
        name: "Webcams",
        description: "HD webcams for video calls.",
      },
      {
        image: '/products/p-mic.webp',
        name: "Microphones",
        description: "Mics for streaming and meetings.",
      },
      {
        image: '/products/p-ups.webp',
        name: "UPS & Power Backup",
        description: "Power backup for your devices.",
      },
      {
        image: '/products/p-pad.webp',
        name: "Mousepads",
        description: "Smooth mousepads for any desk.",
      },
    ],
  },
  {
    title: "Components",
    products: [
      {
        image: '/products/p-processor.webp',
        name: "Processors (CPU)",
        description: "Intel & AMD CPUs for all needs.",
      },
      {
        image: '/products/p-graphic.webp',
        name: "Graphic Cards",
        description: "GPUs for gaming and design.",
      },
      {
        image: '/products/p-ram.webp',
        name: "RAM (Memory)",
        description: "DDR4 & DDR5 memory modules.",
      },
      {
        image: '/products/p-motherboard.webp',
        name: "Motherboards",
        description: "Boards for Intel & AMD CPUs.",
      },
      {
        image: '/products/p-psu.webp',
        name: "Power Supplies (PSU)",
        description: "Reliable power for your PC.",
      },
      {
        image: '/products/p-cpu-fan.webp',
        name: "CPU Coolers",
        description: "Air and liquid CPU coolers.",
      },
      {
        image: '/products/p-cabinate.webp',
        name: "Cabinets & Cases",
        description: "PC cases in all sizes.",
      },
      {
        image: '/products/p-case-fan.webp',
        name: "Case Fans",
        description: "Fans for cooling and airflow.",
      },
    ],
  },
  {
    title: "Storage & Drives",
    products: [
      {
        image: '/products/p-hdd.webp',
        name: "Storage (SSD/HDD)",
        description: "SSDs and HDDs for storage.",
      },
      {
        image: '/products/p-nvme.webp',
        name: "NVMe Drives",
        description: "Fast NVMe SSDs.",
      },
      {
        image: '/products/p-ex-drive.webp',
        name: "External Hard Drives",
        description: "Portable drives for backup.",
      },
      {
        image: '/products/p-pendrive.webp',
        name: "Pen Drives",
        description: "USB flash drives.",
      },
      {
        image: '/products/p-memory.webp',
        name: "Memory Cards",
        description: "SD and microSD cards.",
      },
      {
        image: '/products/p-optical-drive.webp',
        name: "Optical Drives",
        description: "DVD and Blu-ray drives.",
      },
      {
        image: '/products/p-raid.webp',
        name: "RAID Controllers",
        description: "Cards for RAID storage.",
      },
      {
        image: '/products/p-docking-station.webp',
        name: "Docking Stations",
        description: "Docks for drives and devices.",
      },
    ],
  },
  {
    title: "Displays & Graphics",
    products: [
      {
        image: '/products/p-monitor.webp',
        name: "Monitors",
        description: "HD and 4K monitors.",
      },
      {
        image: '/products/p-projector.webp',
        name: "Projectors",
        description: "Projectors for home or office.",
      },
      {
        image: '/products/p-graphic-tablet.webp',
        name: "Graphics Tablets",
        description: "Tablets for drawing and design.",
      },
      {
        image: '/products/p-vr-headset.webp',
        name: "VR Headsets",
        description: "Virtual reality headsets.",
      },
      {
        image: '/products/p-display-adaptor.webp',
        name: "Display Adapters",
        description: "HDMI, DP, VGA adapters.",
      },
      {
        image: '/products/p-splitter.webp',
        name: "Screen Splitters",
        description: "Splitters for multi-displays.",
      },
      {
        image: '/products/p-mount.webp',
        name: "Monitor Mounts",
        description: "Arms and wall mounts.",
      },
      {
        image: '/products/p-monitor-hoods.webp',
        name: "Monitor Hoods",
        description: "Reduce glare on screens.",
      },
    ],
  },
  {
    title: "Networking",
    products: [
      {
        image: '/products/p-router.webp',
        name: "Routers",
        description: "Wi-Fi and wired routers.",
      },
      {
        image: '/products/p-switch.webp',
        name: "Network Switches",
        description: "Switches for network expansion.",
      },
      {
        image: '/products/p-lan-card.webp',
        name: "LAN Cards",
        description: "Ethernet cards for PCs.",
      },
      {
        image: '/products/p-wifi.webp',
        name: "Wi-Fi Adapters",
        description: "USB and PCIe Wi-Fi adapters.",
      },
      {
        image: '/products/p-range.webp',
        name: "Range Extenders",
        description: "Boost Wi-Fi coverage.",
      },
      {
        image: '/products/p-cable.webp',
        name: "Network Cables",
        description: "CAT5e, CAT6, CAT7 cables.",
      },
      {
        image: '/products/network-storage.webp',
        name: "Network Storage (NAS)",
        description: "NAS for shared storage.",
      },
      {
        image: '/products/p-firewall.webp',
        name: "Firewalls",
        description: "Hardware for network security.",
      },
    ],
  },
  {
    title: "Accessories & Essentials",
    products: [
      {
        image: '/products/accessories.webp',
        name: "Accessories",
        description: "Hubs, readers, and more.",
      },
      {
        image: '/products/p-connector.webp',
        name: "Cables & Connectors",
        description: "Cables and adapters.",
      },
      {
        image: '/products/cleaning-kit.webp',
        name: "Cleaning Kits",
        description: "Kits for device cleaning.",
      },
      {
        image: '/products/p-bag.webp',
        name: "Laptop Bags",
        description: "Bags for laptops and tablets.",
      },
      {
        image: '/products/p-stand.webp',
        name: "Stands & Holders",
        description: "Stands for laptops and phones.",
      },
      {
        image: '/products/p-surge-protector.webp',
        name: "Surge Protectors",
        description: "Protect from power surges.",
      },
      {
        image: '/products/p-paste.webp',
        name: "Thermal Paste",
        description: "Paste for CPU cooling.",
      },
      {
        image: '/products/p-label-printer.webp',
        name: "Label Printers",
        description: "Printers for easy labeling.",
      },
    ],
  },
  {
    title: "Software & Services",
    products: [
      {
        image: '/products/p-soft-os.webp',
        name: "Operating Systems",
        description: "Windows, Linux, and more.",
      },
      {
        image: '/products/p-soft-av.webp',
        name: "Antivirus & Security",
        description: "Security software for devices.",
      },
      {
        image: '/products/p-soft-office.webp',
        name: "Office Suites",
        description: "Productivity software.",
      },
      {
        image: '/products/p-soft-back.webp',
        name: "Backup Solutions",
        description: "Backup and recovery tools.",
      },
      {
        image: '/products/p-soft-graphic.webp',
        name: "Graphics & Design",
        description: "Software for design work.",
      },
      {
        image: '/products/p-soft-tally.webp',
        name: "Accounting Software",
        description: "Software for business finance.",
      },
      {
        image: '/products/p-remote.webp',
        name: "Remote Access Tools",
        description: "Remote access software.",
      },
      {
        image: '/products/p-soft-key.webp',
        name: "Software Licenses",
        description: "Genuine software licenses.",
      },
    ],
  },
];

const SECTIONS_PER_PAGE = 1;

export default function ProductSection() {
  const [sectionPage, setSectionPage] = useState(0);

  const totalSectionPages = Math.ceil(productSections.length / SECTIONS_PER_PAGE);

  const handlePrev = () =>
    setSectionPage((p) => (p > 0 ? p - 1 : totalSectionPages - 1));
  const handleNext = () =>
    setSectionPage((p) => (p < totalSectionPages - 1 ? p + 1 : 0));
  const handleTab = (idx: number) => setSectionPage(idx);

  // Get sections for current page
  const pageSections = productSections.slice(
    sectionPage * SECTIONS_PER_PAGE,
    sectionPage * SECTIONS_PER_PAGE + SECTIONS_PER_PAGE
  );

  return (
    <section
      id="products"
      className="relative py-20 overflow-hidden  to-lime-900"
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <h2
          className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-white via-lime-300 to-lime-400 bg-clip-text text-transparent drop-shadow-lg mb-4 text-center "
        >
          Our <span className="text-lime-300">Products</span>
        </h2>
        <p
          className="max-w-2xl mx-auto text-lg md:text-xl text-neutral-200 mb-12 text-center"
        >
          Explore the latest and greatest in computer hardware, peripherals, networking, software, and more. Everything you need for work, play, and performance—under one roof.
        </p>

        {/* Tabs for section pagination */}
        <div className="flex justify-center mb-8 gap-2">
          {Array.from({ length: totalSectionPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleTab(idx)}
              className={`w-3 h-3 rounded-full border-2 border-lime-400 transition-all duration-200 ${sectionPage === idx
                ? 'bg-lime-400 border-lime-400 scale-125 shadow'
                : 'bg-white hover:bg-lime-100'
                }`}
              aria-label={`Go to section page ${idx + 1}`}
            />
          ))}
        </div>

        {/* Slider Controls */}
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={handlePrev}
            className="px-4 py-2 rounded-lg bg-lime-100 text-lime-800 font-bold shadow hover:bg-lime-200 transition"
            aria-label="Previous"
          >
            &#8592; Prev
          </button>
          <span className="text-neutral-400 text-sm">
            Page {sectionPage + 1} of {totalSectionPages}
          </span>
          <button
            onClick={handleNext}
            className="px-4 py-2 rounded-lg bg-lime-100 text-lime-800 font-bold shadow hover:bg-lime-200 transition"
            aria-label="Next"
          >
            Next &#8594;
          </button>
        </div>

        {/* Product Sections Slider */}
        <div className="relative min-h-[700px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={sectionPage}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-16"
            >
              {pageSections.map((section, sIdx) => (
                <div key={section.title}>
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 + sIdx * 0.1 }}
                    viewport={{ once: true }}
                    className="text-2xl md:text-3xl font-bold text-lime-300 mb-6 font-display text-center drop-shadow-[0_2px_8px_rgba(163,230,53,0.10)]"
                  >
                    {section.title}
                  </motion.h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {section.products.map((product, idx) => (
                      <motion.div
                        key={product.name}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 + idx * 0.07 }}
                        className="group relative rounded-2xl shadow-xl p-7 flex flex-col items-center text-center border border-lime-700 bg-gradient-to-br from-lime-950 via-neutral-900 to-lime-950 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden"
                      >
                        {/* Subtle background accent */}
                        <div
                          className="pointer-events-none absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br from-lime-500 via-lime-400/30 to-transparent opacity-20 blur-2xl"
                          aria-hidden="true"
                        />
                        <div
                          className="pointer-events-none absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-gradient-to-tr from-lime-400 via-lime-300/20 to-transparent opacity-10 blur-2xl"
                          aria-hidden="true"
                        />

                        {/* Product image with glowing aura */}
                        <div className="mb-4 flex items-center justify-center border border-lime-400/30 w-40 h-40 md:w-48 md:h-48 rounded-xl transition overflow-hidden relative z-10 bg-black/10">
                          <Image
                            src={product.image}
                            alt={product.name}
                            width={800}
                            height={800}
                            className="object-contain drop-shadow-2xl transition-transform duration-300 group-hover:scale-110"
                            style={{
                              filter: "brightness(1.2) drop-shadow(0 4px 32px #bef26488)",
                              objectFit: "contain",
                              pointerEvents: "none",
                            }}
                            draggable={false}
                            priority={idx === 0}
                          />

                        </div>
                        {/* Separator between image and text */}
                        <div className="w-12 h-1 rounded-full bg-gradient-to-r from-lime-400 via-lime-300 to-lime-500 opacity-70 mb-3" />
                        <h4 className="text-lg font-bold text-white mb-1 group-hover:text-lime-200 transition relative z-10 drop-shadow-[0_2px_8px_rgba(163,230,53,0.15)]">
                          {product.name}
                        </h4>
                        <p className="text-neutral-200 text-sm relative z-10">{product.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}