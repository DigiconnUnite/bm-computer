"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Eye, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Background from "@/components/ui/Backround";
import MarqueeSlider from "@/components/sections/marqueeSlider";

// Updated product sections with the provided data
const productSections = [
  {
    title: "PCs & Laptops",
    products: [
      {
        src: '/products/desktop-pc.webp',
        alt: "Desktop PCs",
        title: "Desktop PCs",
        category: "Computers",
      },
      {
        src: '/products/gaming-pc.webp',
        alt: "Gaming PCs",
        title: "Gaming PCs",
        category: "Gaming",
      },
      {
        src: '/products/laptop.webp',
        alt: "Laptops",
        title: "Laptops",
        category: "Portable",
      },
      {
        src: '/products/mini-pc.webp',
        alt: "Mini PCs",
        title: "Mini PCs",
        category: "Compact",
      },
      {
        src: '/products/workstation-pc.webp',
        alt: "Workstations",
        title: "Workstations",
        category: "Professional",
      },
      {
        src: '/products/all-in-one.webp',
        alt: "All-in-One PCs",
        title: "All-in-One PCs",
        category: "All-in-One",
      },
      {
        src: '/products/thin-pc.webp',
        alt: "Thin Clients",
        title: "Thin Clients",
        category: "Business",
      },
      {
        src: '/products/berbone.webp',
        alt: "Barebone PCs",
        title: "Barebone PCs",
        category: "DIY",
      },
    ],
  },
  {
    title: "Peripherals",
    products: [
      {
        src: '/products/mouse.webp',
        alt: "Mice",
        title: "Mice",
        category: "Input",
      },
      {
        src: '/products/keyboard.webp',
        alt: "Keyboards",
        title: "Keyboards",
        category: "Input",
      },
      {
        src: '/products/headphone.webp',
        alt: "Headphones & Headsets",
        title: "Headphones & Headsets",
        category: "Audio",
      },
      {
        src: '/products/speakers.webp',
        alt: "Speakers",
        title: "Speakers",
        category: "Audio",
      },
      {
        src: '/products/webcam.webp',
        alt: "Webcams",
        title: "Webcams",
        category: "Video",
      },
      {
        src: '/products/microphone.webp',
        alt: "Microphones",
        title: "Microphones",
        category: "Audio",
      },
      {
        src: '/products/ups.webp',
        alt: "UPS & Power Backup",
        title: "UPS & Power Backup",
        category: "Power",
      },
      {
        src: '/products/mousepad.webp',
        alt: "Mousepads",
        title: "Mousepads",
        category: "Accessory",
      },
    ],
  },
  {
    title: "Components",
    products: [
      {
        src: '/products/processor.webp',
        alt: "Processors (CPU)",
        title: "Processors (CPU)",
        category: "CPU",
      },
      {
        src: '/products/graphic-card.webp',
        alt: "Graphic Cards",
        title: "Graphic Cards",
        category: "GPU",
      },
      {
        src: '/products/ram.webp',
        alt: "RAM (Memory)",
        title: "RAM (Memory)",
        category: "Memory",
      },
      {
        src: '/products/motherboard.webp',
        alt: "Motherboards",
        title: "Motherboards",
        category: "Motherboard",
      },
      {
        src: '/products/psu.webp',
        alt: "Power Supplies (PSU)",
        title: "Power Supplies (PSU)",
        category: "Power",
      },
      {
        src: '/products/cpu-fan.webp',
        alt: "CPU Coolers",
        title: "CPU Coolers",
        category: "Cooling",
      },
      {
        src: '/products/cabinate.webp',
        alt: "Cabinets & Cases",
        title: "Cabinets & Cases",
        category: "Case",
      },
      {
        src: '/products/case-fan.webp',
        alt: "Case Fans",
        title: "Case Fans",
        category: "Cooling",
      },
    ],
  },
  {
    title: "Storage & Drives",
    products: [
      {
        src: '/products/storage.webp',
        alt: "Storage (SSD/HDD)",
        title: "Storage (SSD/HDD)",
        category: "Storage",
      },
      {
        src: '/products/nvme.webp',
        alt: "NVMe Drives",
        title: "NVMe Drives",
        category: "Storage",
      },
      {
        src: '/products/external-drive.webp',
        alt: "External Hard Drives",
        title: "External Hard Drives",
        category: "Storage",
      },
      {
        src: '/products/pendrive.webp',
        alt: "Pen Drives",
        title: "Pen Drives",
        category: "Storage",
      },
      {
        src: '/products/memory-card.webp',
        alt: "Memory Cards",
        title: "Memory Cards",
        category: "Storage",
      },
      {
        src: '/products/optical-drive.webp',
        alt: "Optical Drives",
        title: "Optical Drives",
        category: "Storage",
      },
      {
        src: '/products/raid-controller.webp',
        alt: "RAID Controllers",
        title: "RAID Controllers",
        category: "Storage",
      },
      {
        src: '/products/docking-station.webp',
        alt: "Docking Stations",
        title: "Docking Stations",
        category: "Accessory",
      },
    ],
  },
  {
    title: "Displays & Graphics",
    products: [
      {
        src: '/products/monitor.webp',
        alt: "Monitors",
        title: "Monitors",
        category: "Display",
      },
      {
        src: '/products/projector.webp',
        alt: "Projectors",
        title: "Projectors",
        category: "Display",
      },
      {
        src: '/products/graphic-tablet.webp',
        alt: "Graphics Tablets",
        title: "Graphics Tablets",
        category: "Input",
      },
      {
        src: '/products/vr-headset.webp',
        alt: "VR Headsets",
        title: "VR Headsets",
        category: "VR",
      },
      {
        src: '/products/display-adaptor.webp',
        alt: "Display Adapters",
        title: "Display Adapters",
        category: "Accessory",
      },
      {
        src: '/products/screen-splitter.webp',
        alt: "Screen Splitters",
        title: "Screen Splitters",
        category: "Accessory",
      },
      {
        src: '/products/monitor-mount.webp',
        alt: "Monitor Mounts",
        title: "Monitor Mounts",
        category: "Accessory",
      },
      {
        src: '/products/monitor-hoods.webp',
        alt: "Monitor Hoods",
        title: "Monitor Hoods",
        category: "Accessory",
      },
    ],
  },
  {
    title: "Networking",
    products: [
      {
        src: '/products/router.webp',
        alt: "Routers",
        title: "Routers",
        category: "Networking",
      },
      {
        src: '/products/network-switch.webp',
        alt: "Network Switches",
        title: "Network Switches",
        category: "Networking",
      },
      {
        src: '/products/lan-card.webp',
        alt: "LAN Cards",
        title: "LAN Cards",
        category: "Networking",
      },
      {
        src: '/products/wifi-adaptor.webp',
        alt: "Wi-Fi Adapters",
        title: "Wi-Fi Adapters",
        category: "Networking",
      },
      {
        src: '/products/range-extender.webp',
        alt: "Range Extenders",
        title: "Range Extenders",
        category: "Networking",
      },
      {
        src: '/products/wifi-cable.webp',
        alt: "Network Cables",
        title: "Network Cables",
        category: "Networking",
      },
      {
        src: '/products/network-storage.webp',
        alt: "Network Storage (NAS)",
        title: "Network Storage (NAS)",
        category: "Storage",
      },
      {
        src: '/products/firewall-device.webp',
        alt: "Firewalls",
        title: "Firewalls",
        category: "Security",
      },
    ],
  },
  {
    title: "Accessories & Essentials",
    products: [
      {
        src: '/products/accessories.webp',
        alt: "Accessories",
        title: "Accessories",
        category: "Accessory",
      },
      {
        src: '/products/connectors.webp',
        alt: "Cables & Connectors",
        title: "Cables & Connectors",
        category: "Accessory",
      },
      {
        src: '/products/cleaning-kit.webp',
        alt: "Cleaning Kits",
        title: "Cleaning Kits",
        category: "Maintenance",
      },
      {
        src: '/products/laptop-bag.webp',
        alt: "Laptop Bags",
        title: "Laptop Bags",
        category: "Carry",
      },
      {
        src: '/products/laptop-stand.webp',
        alt: "Stands & Holders",
        title: "Stands & Holders",
        category: "Accessory",
      },
      {
        src: '/products/surge-protector.webp',
        alt: "Surge Protectors",
        title: "Surge Protectors",
        category: "Power",
      },
      {
        src: '/products/thermal-paste.webp',
        alt: "Thermal Paste",
        title: "Thermal Paste",
        category: "Maintenance",
      },
      {
        src: '/products/label-printer.webp',
        alt: "Label Printers",
        title: "Label Printers",
        category: "Office",
      },
    ],
  },
  {
    title: "Software & Services",
    products: [
      {
        src: '/products/os.webp',
        alt: "Operating Systems",
        title: "Operating Systems",
        category: "Software",
      },
      {
        src: '/products/antivirus.webp',
        alt: "Antivirus & Security",
        title: "Antivirus & Security",
        category: "Software",
      },
      {
        src: '/products/office-suite.webp',
        alt: "Office Suites",
        title: "Office Suites",
        category: "Software",
      },
      {
        src: '/products/backup-software.webp',
        alt: "Backup Solutions",
        title: "Backup Solutions",
        category: "Software",
      },
      {
        src: '/products/graphic-software.webp',
        alt: "Graphics & Design",
        title: "Graphics & Design",
        category: "Software",
      },
      {
        src: '/products/accounting-software.webp',
        alt: "Accounting Software",
        title: "Accounting Software",
        category: "Software",
      },
      {
        src: '/products/remote-tool.webp',
        alt: "Remote Access Tools",
        title: "Remote Access Tools",
        category: "Software",
      },
      {
        src: '/products/license-key.webp',
        alt: "Software Licenses",
        title: "Software Licenses",
        category: "Software",
      },
    ],
  },
];

// Create a flat array of all products for the hero carousel
const allProductImages = productSections.flatMap(section =>
  section.products.map(product => ({
    ...product,
    section: section.title
  }))
);

const brands = [
  { name: "Acer", image: "/brands/acer.svg" },
  { name: "AMD", image: "/brands/amd.svg" },
  { name: "Asus", image: "/brands/asus.svg" },
  { name: "Bunq", image: "/brands/bunq.svg" },
  { name: "Cooler Master", image: "/brands/coolermaster.svg" },
  { name: "Corsair", image: "/brands/corsair.svg" },
  { name: "Deepcool", image: "/brands/deepcool.svg" },
  { name: "Dell", image: "/brands/dell.svg" },
  { name: "Epson", image: "/brands/epson.svg" },
  { name: "HP", image: "/brands/hp.svg" },
  { name: "Intel", image: "/brands/intel.svg" },
  { name: "Kingston Technology", image: "/brands/kingstontechnology.svg" },
  { name: "MSI", image: "/brands/msi.svg" },
  { name: "MSI Business", image: "/brands/msibusiness.svg" },
  { name: "Nvidia", image: "/brands/nvidia.svg" },
  { name: "Republic of Gamers", image: "/brands/republicofgamers.svg" },
  { name: "Seagate", image: "/brands/seagate.svg" },
  { name: "TP-Link", image: "/brands/tplink.svg" },
  { name: "Western Digital", image: "/brands/westerndigital.svg" },
];

const categories = [
  "Computers & Laptops",
  "Smartphones & Tablets",
  "Cameras & Lenses",
  "Appliances",
  "TVs & Audio",
  "Headphones",
];

function ProductCard({ product }: { product: any }) {
  return (
    <AnimatePresence>
      <div
        className="group relative overflow-hidden rounded-2xl border border-emerald-500 p-5 shadow-md transition hover:shadow-2xl"
        style={{
          backgroundImage: `url(card-bg.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          // Overlay a subtle gradient for readability
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(4, 47, 46, 0.85)'
        }}
      >
        <div className="absolute right-3 top-3 z-10 flex gap-2">
          {/* Reserved for future actions/buttons */}
        </div>
        <div className="relative mx-auto aspect-square w-full overflow-hidden rounded-xl bg-white/10">
          <div className="absolute inset-0 bg-white/10 z-0 rounded-xl" />
          <Image
            src={product.src}
            alt={product.title}
            fill
            className="object-contain p-6 transition-transform duration-300 group-hover:scale-110 relative z-10"
            sizes="(max-width: 768px) 100vw, 300px"
            priority={false}
          />
        </div>
        <div className="mt-4 space-y-1">
          <h4 className="text-base font-semibold text-white drop-shadow">{product.title}</h4>
          <p className="text-white/90 font-bold text-lg">{product.description}</p>
          <span className="block text-xs text-white/70 mt-1 font-medium">{product.category}</span>
        </div>
      </div>
    </AnimatePresence>
  );
}

// Multi-carousel section: one carousel per product section
function MultiProductCarousels({ sections }: { sections: any[] }) {
  return (
    <div className="space-y-12">
      {sections.map((section, idx) => (
        <section key={section.title || idx} className="mx-auto w-full max-w-7xl px-4 py-8">
          <div className="mb-2 flex items-center justify-between">
            <div className="relative pb-5">
              <h2 className="text-xl z-50 font-bold text-white">
                {section?.title && typeof section.title === "string" && section.title.trim().length > 0
                  ? section.title
                  : "Untitled Section"}
              </h2>
              <span className="block text-xs text-emerald-100 mt-1 font-medium">
                Explore our collection of {section?.title && typeof section.title === "string" && section.title.trim().length > 0
                  ? section.title.toLowerCase()
                  : "products"}
              </span>
            </div>
            <Link href="#" className="text-sm text-emerald-100 hover:underline flex items-center">
              View all
              <ChevronRight className="ml-1 inline h-4 w-4 text-white" />
            </Link>
          </div>
          <Carousel opts={{ align: "start" }} className="relative">
            <CarouselContent>
              {section.products && section.products.map((p: any, idx: number) => (
                <CarouselItem key={p.src + idx} className="basis-2/3 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <ProductCard product={p} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-emerald-100 bg-white/10 text-emerald-100 hover:bg-emerald-900" />
            <CarouselNext className="border-emerald-100 bg-white/10 text-emerald-100 hover:bg-emerald-900" />
          </Carousel>
        </section>
      ))}
    </div>
  );
}

export default function ProductsPage() {
  // For hero, show all images in a single carousel (with category overlays)
  const [heroIndex, setHeroIndex] = useState(0);

  // For auto-slide
  useEffect(() => {
    const timeout = setTimeout(() => {
      setHeroIndex((prev) => (prev + 1) % allProductImages.length);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [heroIndex]);

  return (

    <>
      <Background />
      <main className="min-h-screen font-sans text-gray-900 ">

        {/* Hero Section with Carousel */}
      <section className="relative mx-auto w-full max-w-7xl px-4 pb-10 pt-12 md:pt-16">
        <div className="relative grid items-center gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <AnimatePresence>
              <motion.span
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.6 }}
                  className="inline-flex items-center rounded-full border border-emerald-300 bg-emerald-900/60 px-3 py-1 text-xs font-medium text-white"
              >
                BM COMPUTES
              </motion.span>
            </AnimatePresence>
            <AnimatePresence>
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                  className="text-4xl font-extrabold leading-tight md:text-5xl text-white drop-shadow-lg"
              >
                Everything Your Computer Needs, Under One Roof
              </motion.h1>
            </AnimatePresence>
              <p className="max-w-lg text-emerald-100">
              Explore premium peripherals, GPUs, and pro‑grade gear in a clean, modern light UI with emerald accents.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {categories.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-emerald-300 bg-emerald-900/60 px-3 py-1 text-xs text-white"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
            {/* Hero carousel using all product images */}
            <div className="relative mx-auto aspect-[4/3] w-full overflow-hidden rounded-3xl border border-emerald-100 bg-emerald-900/40">
              <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20">
                <span className="bg-emerald-900/80 text-white px-4 py-1 rounded-full text-xs font-semibold shadow">
                  Images of products and their categories
                </span>
              </div>
              {allProductImages.map((img, i) => (
                <motion.div
                  key={img.src + i}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{
                    opacity: i === heroIndex ? 1 : 0,
                    scale: i === heroIndex ? 1 : 0.98,
                    zIndex: i === heroIndex ? 2 : 1,
                  }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  className="absolute inset-0"
                  style={{ pointerEvents: i === heroIndex ? "auto" : "none" }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    priority={i === 0}
                    className="object-contain p-10"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-emerald-800/90 text-white px-4 py-1 rounded-full text-xs font-medium shadow">
                    {img.category}
                  </div>
                </motion.div>
              ))}
              {/* Dots navigation */}
              <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
                {allProductImages.map((_, i) => (
                  <button
                    key={i}
                    className={`h-2 w-2 rounded-full transition-colors duration-200 ${i === heroIndex ? "bg-white" : "bg-emerald-700/60"
                      }`}
                    aria-label={`Show slide ${i + 1}`}
                    onClick={() => setHeroIndex(i)}
                  />
                ))}
              </div>
            </div>
        </div>
      </section>


        <MultiProductCarousels sections={productSections} />

      {/* Promo Banners */}
      <section className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 px-4 py-4 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-3xl border border-emerald-400 filter backdrop-blur-md  shadow-lg bg-gradient-to-tr from-emerald-900 via-emerald-800/80 to-green-700/80 p-6 ">
          <h3 className="text-2xl font-semibold text-gray-900">EZ-77 PC Worldwide</h3>
          <p className="mt-2 text-emerald-700">MP-13 Ultra 13&quot;</p>
          <p className="mt-6 text-3xl font-bold text-emerald-600">$1750</p>
          <Button className="mt-6 rounded-2xl bg-emerald-600 text-white hover:bg-emerald-500">Buy Now</Button>
          <Image
            src="/pc-2.png"
            alt="EZ-77"
            width={460}
            height={300}
            className="pointer-events-none absolute -right-6 bottom-0 opacity-80"
            priority={false}
          />
        </div>
          <div className="relative overflow-hidden rounded-3xl border border-emerald-400 filter backdrop-blur-md  shadow-lg bg-gradient-to-tr from-emerald-900 via-emerald-800/80 to-green-700/80 p-6 ">
          <h3 className="text-2xl font-semibold text-gray-900">Limited Weekly Discount</h3>
          <p className="mt-2 text-emerald-700">Gaming Camera / Action</p>
          <p className="mt-6 text-3xl font-bold text-emerald-600">$349</p>
          <Button className="mt-6 rounded-2xl bg-emerald-600 text-white hover:bg-emerald-500">Shop Deals</Button>
          <Image
            src="/rog-nuc-2025.png"
            alt="GoPro"
            width={400}
            height={240}
            className="pointer-events-none absolute -right-8 bottom-0 opacity-80"
            priority={false}
          />
        </div>
      </section>

      {/* Gaming Console Highlight */}
        <section className="mx-auto w-full max-w-7xl px-4 py-12">
          <div
            className="relative overflow-hidden rounded-3xl border border-emerald-400 filter backdrop-blur-md shadow-lg bg-gradient-to-tr from-emerald-900 via-emerald-800/80 to-green-700/80 p-0"
            style={{
              backgroundImage: `url('/products/promo-8.jpg'), linear-gradient(to top right, #064e3b 0%, #065f46 100%)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {/* Decorative blurred gradient orb */}
            <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-gradient-to-br from-cyan-400/40 via-emerald-300/30 to-transparent blur-3xl opacity-60 animate-float-slow z-0" />
            {/* Decorative bottom right orb */}
            <div className="pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-gradient-to-tr from-emerald-400/40 via-cyan-200/30 to-transparent blur-2xl opacity-40 animate-float-reverse z-0" />

            <div className="relative z-10 grid items-center gap-8 md:grid-cols-2 px-8 py-10">
              <div>
                <h3 className="text-3xl font-extrabold bg-gradient-to-r from-white via-emerald-200 to-cyan-200 bg-clip-text text-transparent drop-shadow-lg">
                  Latest Gaming Console
                </h3>
                <p className="mt-2 text-lg font-medium text-emerald-100/90 drop-shadow">
                  ASUS 620-QF / 825H 512FFL 1.2&quot;
                </p>
                <Button className="mt-8 rounded-2xl bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-400 text-white shadow-lg hover:from-emerald-400 hover:to-cyan-400 transition-all duration-200">
                  Shop Now
                </Button>
              </div>
              {/* Optionally, you can keep a subtle overlay or gradient on the right for text readability */}
              <div className="relative h-64 w-full flex items-center justify-center">
                <div className="absolute -z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full bg-gradient-radial from-cyan-300/30 via-emerald-200/20 to-transparent blur-2xl opacity-60 animate-float-mid" />
                {/* Remove the foreground Image, as the background now covers the section */}
              </div>
            </div>
          </div>
        </section>

      {/* Brand logos */}
      <section className="mx-auto w-full max-w-7xl px-4 py-8">
          <div className="mb-4">
            <span className="block text-center text-xs text-emerald-700 font-medium">
              Images of products and their categories
            </span>
          </div>
          <MarqueeSlider
            images={brands.map((b) => ({ src: b.image, name: b.name }))}
            direction="left"
            speed={50}
            className=""
            imageSize={100}
          />
      </section>

      {/* Additional Promo Banners */}
      <section className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 px-4 py-10 md:grid-cols-3">
          {/* Keyboard Promo */}
          <div
            className="relative overflow-hidden px-4 py-12 h-60 rounded-3xl border border-emerald-400 filter backdrop-blur-md shadow-lg bg-gradient-to-tr from-emerald-900 via-emerald-800/80 to-green-700/80 p-0 flex flex-col items-start justify-center"
            style={{
              backgroundImage: `url('/products/promo-9.jpg'), linear-gradient(to top right, #064e3b 0%, #065f46 100%)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <h3 className="text-lg font-semibold text-white">Keyboards</h3>
            <p className="text-emerald-100">Latest RGB mechanical models.</p>
          </div>
          {/* Mouse Promo */}
          <div
            className="relative overflow-hidden px-4 py-12 h-60 rounded-3xl border border-emerald-400 filter backdrop-blur-md shadow-lg bg-gradient-to-tr from-emerald-900 via-emerald-800/80 to-green-700/80 p-0 flex flex-col items-start justify-center"
            style={{
              backgroundImage: `url('/products/promo-5.jpg'), linear-gradient(to top right, #064e3b 0%, #065f46 100%)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <h3 className="text-lg font-semibold text-white">Mice</h3>
            <p className="text-emerald-100">Pro gaming &amp; work mice.</p>
        </div>
          {/* Graphics Card Promo */}
          <div
            className="relative overflow-hidden px-4 py-12 h-60 rounded-3xl border border-emerald-400 filter backdrop-blur-md shadow-lg bg-gradient-to-tr from-emerald-900 via-emerald-800/80 to-green-700/80 p-0 flex flex-col items-start justify-center"
            style={{
              backgroundImage: `url('/products/promo-7.jpg'), linear-gradient(to top right, #064e3b 0%, #065f46 100%)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <h3 className="text-lg font-semibold text-white">Graphics Cards</h3>
            <p className="text-emerald-100">Latest NVIDIA &amp; AMD GPUs.</p>
        </div>
      </section>
      </main>
    </>
  );
}