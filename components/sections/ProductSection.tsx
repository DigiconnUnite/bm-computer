'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const productSections = [
  {
    title: "PCs & Laptops",
    products: [
      {
        image: '/products/desktop-pc.webp',
        name: "Desktop PCs",
        description: "Desktops for home and office use.",
      },
      {
        image: '/products/gaming-pc.webp',
        name: "Gaming PCs",
        description: "High-performance PCs for gaming.",
      },
      {
        image: '/products/laptop.webp',
        name: "Laptops",  
        description: "Portable laptops for work or play.",
      },
      {
        image: '/products/mini-pc.webp',
        name: "Mini PCs",
        description: "Compact PCs for small spaces.",
      },
      {
        image: '/products/workstation-pc.webp',
        name: "Workstations",
        description: "Powerful PCs for professionals.",
      },
      {
        image: '/products/all-in-one.webp',
        name: "All-in-One PCs",
        description: "All-in-one computers for any desk.",
      },
      {
        image: '/products/thin-pc.webp',
        name: "Thin Clients",
        description: "Efficient clients for business.",
      },
      {
        image: '/products/berbone.webp',
        name: "Barebone PCs",
        description: "DIY kits for custom builds.",
      },
    ],
  },
  {
    title: "Peripherals",
    products: [
      {
        image: '/products/mouse.webp',
        name: "Mice",
        description: "Wired and wireless mice.",
      },
      {
        image: '/products/keyboard.webp',
        name: "Keyboards",
        description: "Mechanical and standard keyboards.",
      },
      {
        image: '/products/headphone.webp',
        name: "Headphones & Headsets",
        description: "Audio for gaming and calls.",
      },
      {
        image: '/products/speakers.webp',
        name: "Speakers",
        description: "Speakers for music and movies.",
      },
      {
        image: '/products/webcam.webp',
        name: "Webcams",
        description: "HD webcams for video calls.",
      },
      {
        image: '/products/microphone.webp',
        name: "Microphones",
        description: "Mics for streaming and meetings.",
      },
      {
        image: '/products/ups.webp',
        name: "UPS & Power Backup",
        description: "Power backup for your devices.",
      },
      {
        image: '/products/mousepad.webp',
        name: "Mousepads",
        description: "Smooth mousepads for any desk.",
      },
    ],
  },
  {
    title: "Components",
    products: [
      {
        image: '/products/processor.webp',
        name: "Processors (CPU)",
        description: "Intel & AMD CPUs for all needs.",
      },
      {
        image: '/products/graphic-card.webp',
        name: "Graphic Cards",
        description: "GPUs for gaming and design.",
      },
      {
        image: '/products/ram.webp',
        name: "RAM (Memory)",
        description: "DDR4 & DDR5 memory modules.",
      },
      {
        image: '/products/motherboard.webp',
        name: "Motherboards",
        description: "Boards for Intel & AMD CPUs.",
      },
      {
        image: '/products/psu.webp',
        name: "Power Supplies (PSU)",
        description: "Reliable power for your PC.",
      },
      {
        image: '/products/cpu-fan.webp',
        name: "CPU Coolers",
        description: "Air and liquid CPU coolers.",
      },
      {
        image: '/products/cabinate.webp',
        name: "Cabinets & Cases",
        description: "PC cases in all sizes.",
      },
      {
        image: '/products/case-fan.webp',
        name: "Case Fans",
        description: "Fans for cooling and airflow.",
      },
    ],
  },
  {
    title: "Storage & Drives",
    products: [
      {
        image: '/products/storage.webp',
        name: "Storage (SSD/HDD)",
        description: "SSDs and HDDs for storage.",
      },
      {
        image: '/products/nvme.webp',
        name: "NVMe Drives",
        description: "Fast NVMe SSDs.",
      },
      {
        image: '/products/external-drive.webp',
        name: "External Hard Drives",
        description: "Portable drives for backup.",
      },
      {
        image: '/products/pendrive.webp',
        name: "Pen Drives",
        description: "USB flash drives.",
      },
      {
        image: '/products/memory-card.webp',
        name: "Memory Cards",
        description: "SD and microSD cards.",
      },
      {
        image: '/products/optical-drive.webp',
        name: "Optical Drives",
        description: "DVD and Blu-ray drives.",
      },
      {
        image: '/products/raid-controller.webp',
        name: "RAID Controllers",
        description: "Cards for RAID storage.",
      },
      {
        image: '/products/docking-station.webp',
        name: "Docking Stations",
        description: "Docks for drives and devices.",
      },
    ],
  },
  {
    title: "Displays & Graphics",
    products: [
      {
        image: '/products/monitor.webp',
        name: "Monitors",
        description: "HD and 4K monitors.",
      },
      {
        image: '/products/projector.webp',
        name: "Projectors",
        description: "Projectors for home or office.",
      },
      {
        image: '/products/graphic-tablet.webp',
        name: "Graphics Tablets",
        description: "Tablets for drawing and design.",
      },
      {
        image: '/products/vr-headset.webp',
        name: "VR Headsets",
        description: "Virtual reality headsets.",
      },
      {
        image: '/products/display-adaptor.webp',
        name: "Display Adapters",
        description: "HDMI, DP, VGA adapters.",
      },
      {
        image: '/products/screen-splitter.webp',
        name: "Screen Splitters",
        description: "Splitters for multi-displays.",
      },
      {
        image: '/products/monitor-mount.webp',
        name: "Monitor Mounts",
        description: "Arms and wall mounts.",
      },
      {
        image: '/products/monitor-hoods.webp',
        name: "Monitor Hoods",
        description: "Reduce glare on screens.",
      },
    ],
  },
  {
    title: "Networking",
    products: [
      {
        image: '/products/router.webp',
        name: "Routers",
        description: "Wi-Fi and wired routers.",
      },
      {
        image: '/products/network-switch.webp',
        name: "Network Switches",
        description: "Switches for network expansion.",
      },
      {
        image: '/products/lan-card.webp',
        name: "LAN Cards",
        description: "Ethernet cards for PCs.",
      },
      {
        image: '/products/wifi-adaptor.webp',
        name: "Wi-Fi Adapters",
        description: "USB and PCIe Wi-Fi adapters.",
      },
      {
        image: '/products/range-extender.webp',
        name: "Range Extenders",
        description: "Boost Wi-Fi coverage.",
      },
      {
        image: '/products/wifi-cable.webp',
        name: "Network Cables",
        description: "CAT5e, CAT6, CAT7 cables.",
      },
      {
        image: '/products/network-storage.webp',
        name: "Network Storage (NAS)",
        description: "NAS for shared storage.",
      },
      {
        image: '/products/firewall-device.webp',
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
        image: '/products/connectors.webp',
        name: "Cables & Connectors",
        description: "Cables and adapters.",
      },
      {
        image: '/products/cleaning-kit.webp',
        name: "Cleaning Kits",
        description: "Kits for device cleaning.",
      },
      {
        image: '/products/laptop-bag.webp',
        name: "Laptop Bags",
        description: "Bags for laptops and tablets.",
      },
      {
        image: '/products/laptop-stand.webp',
        name: "Stands & Holders",
        description: "Stands for laptops and phones.",
      },
      {
        image: '/products/surge-protector.webp',
        name: "Surge Protectors",
        description: "Protect from power surges.",
      },
      {
        image: '/products/thermal-paste.webp',
        name: "Thermal Paste",
        description: "Paste for CPU cooling.",
      },
      {
        image: '/products/label-printer.webp',
        name: "Label Printers",
        description: "Printers for easy labeling.",
      },
    ],
  },
  {
    title: "Software & Services",
    products: [
      {
        image: '/products/os.webp',
        name: "Operating Systems",
        description: "Windows, Linux, and more.",
      },
      {
        image: '/products/antivirus.webp',
        name: "Antivirus & Security",
        description: "Security software for devices.",
      },
      {
        image: '/products/office-suite.webp',
        name: "Office Suites",
        description: "Productivity software.",
      },
      {
        image: '/products/backup-software.webp',
        name: "Backup Solutions",
        description: "Backup and recovery tools.",
      },
      {
        image: '/products/graphic-software.webp',
        name: "Graphics & Design",
        description: "Software for design work.",
      },
      {
        image: '/products/accounting-software.webp',
        name: "Accounting Software",
        description: "Software for business finance.",
      },
      {
        image: '/products/remote-tool.webp',
        name: "Remote Access Tools",
        description: "Remote access software.",
      },
      {
        image: '/products/license-key.webp',
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
      className="relative py-20  overflow-hidden"
    >
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-emerald-100 rounded-full opacity-30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-emerald-200 rounded-full opacity-20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black text-emerald-600 mb-4 text-center font-display"
        >
          Our <span className="text-emerald-700">Products</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-gray-700 mb-12 text-center"
        >
          Explore the latest and greatest in computer hardware, peripherals, networking, software, and more. Everything you need for work, play, and performance—under one roof.
        </motion.p>

        {/* Tabs for section pagination */}
        <div className="flex justify-center mb-8 gap-2">
          {Array.from({ length: totalSectionPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleTab(idx)}
              className={`w-3 h-3 rounded-full border-2 border-emerald-400 transition-all duration-200 ${
                sectionPage === idx
                  ? 'bg-emerald-600 border-emerald-600 scale-125 shadow'
                  : 'bg-white hover:bg-emerald-100'
              }`}
              aria-label={`Go to section page ${idx + 1}`}
            />
          ))}
        </div>

        {/* Slider Controls */}
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={handlePrev}
            className="px-4 py-2 rounded-lg bg-emerald-100 text-emerald-700 font-bold shadow hover:bg-emerald-200 transition"
            aria-label="Previous"
          >
            &#8592; Prev
          </button>
          <span className="text-gray-500 text-sm">
            Page {sectionPage + 1} of {totalSectionPages}
          </span>
          <button
            onClick={handleNext}
            className="px-4 py-2 rounded-lg bg-emerald-100 text-emerald-700 font-bold shadow hover:bg-emerald-200 transition"
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
                    className="text-2xl md:text-3xl font-bold text-emerald-700 mb-6 font-display text-center"
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
                        className="group relative rounded-2xl shadow-xl p-7 flex flex-col items-center text-center border border-emerald-800 bg-gradient-to-br from-emerald-900 via-teal-950 to-emerald-950 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden"
                      >
                        {/* Subtle background accent */}
                        <div
                          className="pointer-events-none absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br from-emerald-700 via-emerald-500/30 to-transparent opacity-20 blur-2xl"
                          aria-hidden="true"
                        />
                        <div
                          className="pointer-events-none absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-400/20 to-transparent opacity-10 blur-2xl"
                          aria-hidden="true"
                        />
                        {/* Glowing Aura Behind Image */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 md:w-56 md:h-56 z-0 pointer-events-none" aria-hidden="true">
                          <div className="w-full h-full rounded-full bg-emerald-400 opacity-30 blur-3xl" />
                          <div className="w-full h-full rounded-full bg-emerald-300 opacity-20 blur-2xl absolute top-0 left-0" />
                          <div className="w-full h-full rounded-full bg-green-200 opacity-10 blur-xl absolute top-0 left-0" />
                        </div>
                        {/* Product image with glowing aura */}
                        <div className="mb-4 flex items-center justify-center w-40 h-40 md:w-48 md:h-48 rounded-xl transition overflow-hidden relative z-10 bg-black/10">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="object-contain w-full h-full relative z-10"
                            loading="lazy"
                          />
                        </div>
                        {/* Separator between image and text */}
                        <div className="w-12 h-1 rounded-full bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-500 opacity-70 mb-3" />
                        <h4 className="text-lg font-bold text-white mb-1 group-hover:text-emerald-200 transition relative z-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]">
                          {product.name}
                        </h4>
                        <p className="text-white/80 text-sm relative z-10">{product.description}</p>
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
