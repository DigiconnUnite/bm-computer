"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Eye, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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

const productSections = [

  {
    title: "PCs & Laptops",
    products: [
      {
        src: '/products/p-normal-pc.webp',
        alt: "Desktop PCs",
        title: "Desktop PCs",
        category: "Computers",
      },
      {
        src: '/products/p-gaming-pc.webp',
        alt: "Gaming PCs",
        title: "Gaming PCs",
        category: "Gaming",
      },
      {
        src: '/products/p-laptop.webp',
        alt: "Laptops",
        title: "Laptops",
        category: "Portable",
      },
      {
        src: '/products/p-mini-pc.webp',
        alt: "Mini PCs",
        title: "Mini PCs",
        category: "Compact",
      },
      {
        src: '/products/p-workstation-pc.webp',
        alt: "Workstations",
        title: "Workstations",
        category: "Professional",
      },
      {
        src: '/products/p-all-in-one.webp',
        alt: "All-in-One PCs",
        title: "All-in-One PCs",
        category: "All-in-One",
      },
      {
        src: '/products/p-thin-pc.webp',
        alt: "Thin Clients",
        title: "Thin Clients",
        category: "Business",
      },
      {
        src: '/products/p-borebone.webp',
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
        src: '/products/p-mice.webp',
        alt: "Mice",
        title: "Mice",
        category: "Input",
      },
      {
        src: '/products/p-keyboard.webp',
        alt: "Keyboards",
        title: "Keyboards",
        category: "Input",
      },
      {
        src: '/products/p-headphone.webp',
        alt: "Headphones & Headsets",
        title: "Headphones & Headsets",
        category: "Audio",
      },
      {
        src: '/products/p-speaker.webp',
        alt: "Speakers",
        title: "Speakers",
        category: "Audio",
      },
      {
        src: '/products/p-webcam.webp',
        alt: "Webcams",
        title: "Webcams",
        category: "Video",
      },
      {
        src: '/products/p-mic.webp',
        alt: "Microphones",
        title: "Microphones",
        category: "Audio",
      },
      {
        src: '/products/p-ups.webp',
        alt: "UPS & Power Backup",
        title: "UPS & Power Backup",
        category: "Power",
      },
      {
        src: '/products/p-pad.webp',
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
        src: '/products/p-processor.webp',
        alt: "Processors (CPU)",
        title: "Processors (CPU)",
        category: "CPU",
      },
      {
        src: '/products/p-graphic.webp',
        alt: "Graphic Cards",
        title: "Graphic Cards",
        category: "GPU",
      },
      {
        src: '/products/p-ram.webp',
        alt: "RAM (Memory)",
        title: "RAM (Memory)",
        category: "Memory",
      },
      {
        src: '/products/p-motherboard.webp',
        alt: "Motherboards",
        title: "Motherboards",
        category: "Motherboard",
      },
      {
        src: '/products/p-psu.webp',
        alt: "Power Supplies (PSU)",
        title: "Power Supplies (PSU)",
        category: "Power",
      },
      {
        src: '/products/p-cpu-fan.webp',
        alt: "CPU Coolers",
        title: "CPU Coolers",
        category: "Cooling",
      },
      {
        src: '/products/p-cabinate.webp',
        alt: "Cabinets & Cases",
        title: "Cabinets & Cases",
        category: "Case",
      },
      {
        src: '/products/p-case-fan.webp',
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
        src: '/products/p-hdd.webp',
        alt: "Storage (SSD/HDD)",
        title: "Storage (SSD/HDD)",
        category: "Storage",
      },
      {
        src: '/products/p-nvme.webp',
        alt: "NVMe Drives",
        title: "NVMe Drives",
        category: "Storage",
      },
      {
        src: '/products/p-ex-drive.webp',
        alt: "External Hard Drives",
        title: "External Hard Drives",
        category: "Storage",
      },
      {
        src: '/products/p-pendrive.webp',
        alt: "Pen Drives",
        title: "Pen Drives",
        category: "Storage",
      },
      {
        src: '/products/p-memory.webp',
        alt: "Memory Cards",
        title: "Memory Cards",
        category: "Storage",
      },
      {
        src: '/products/p-optical-drive.webp',
        alt: "Optical Drives",
        title: "Optical Drives",
        category: "Storage",
      },
      {
        src: '/products/p-raid.webp',
        alt: "RAID Controllers",
        title: "RAID Controllers",
        category: "Storage",
      },
      {
        src: '/products/p-docking-station.webp',
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
        src: '/products/p-monitor.webp',
        alt: "Monitors",
        title: "Monitors",
        category: "Display",
      },
      {
        src: '/products/p-projector.webp',
        alt: "Projectors",
        title: "Projectors",
        category: "Display",
      },
      {
        src: '/products/p-graphic-tablet.webp',
        alt: "Graphics Tablets",
        title: "Graphics Tablets",
        category: "Input",
      },
      {
        src: '/products/p-vr-headset.webp',
        alt: "VR Headsets",
        title: "VR Headsets",
        category: "VR",
      },
      {
        src: '/products/p-display-adaptor.webp',
        alt: "Display Adapters",
        title: "Display Adapters",
        category: "Accessory",
      },
      {
        src: '/products/p-splitter.webp',
        alt: "Screen Splitters",
        title: "Screen Splitters",
        category: "Accessory",
      },
      {
        src: '/products/p-mount.webp',
        alt: "Monitor Mounts",
        title: "Monitor Mounts",
        category: "Accessory",
      },
      {
        src: '/products/p-monitor-hoods.webp',
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
        src: '/products/p-router.webp',
        alt: "Routers",
        title: "Routers",
        category: "Networking",
      },
      {
        src: '/products/p-switch.webp',
        alt: "Network Switches",
        title: "Network Switches",
        category: "Networking",
      },
      {
        src: '/products/p-lan-card.webp',
        alt: "LAN Cards",
        title: "LAN Cards",
        category: "Networking",
      },
      {
        src: '/products/p-wifi.webp',
        alt: "Wi-Fi Adapters",
        title: "Wi-Fi Adapters",
        category: "Networking",
      },
      {
        src: '/products/p-range.webp',
        alt: "Range Extenders",
        title: "Range Extenders",
        category: "Networking",
      },
      {
        src: '/products/p-cable.webp',
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
        src: '/products/p-firewall.webp',
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
        src: '/products/p-connector.webp',
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
        src: '/products/p-bag.webp',
        alt: "Laptop Bags",
        title: "Laptop Bags",
        category: "Carry",
      },
      {
        src: '/products/p-stand.webp',
        alt: "Stands & Holders",
        title: "Stands & Holders",
        category: "Accessory",
      },
      {
        src: '/products/p-surge-protector.webp',
        alt: "Surge Protectors",
        title: "Surge Protectors",
        category: "Power",
      },
      {
        src: '/products/p-paste.webp',
        alt: "Thermal Paste",
        title: "Thermal Paste",
        category: "Maintenance",
      },
      {
        src: '/products/p-label-printer.webp',
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
        src: '/products/p-soft-os.webp',
        alt: "Operating Systems",
        title: "Operating Systems",
        category: "Software",
      },
      {
        src: '/products/p-soft-av.webp',
        alt: "Antivirus & Security",
        title: "Antivirus & Security",
        category: "Software",
      },
      {
        src: '/products/p-soft-office.webp',
        alt: "Office Suites",
        title: "Office Suites",
        category: "Software",
      },
      {
        src: '/products/p-soft-back.webp',
        alt: "Backup Solutions",
        title: "Backup Solutions",
        category: "Software",
      },
      {
        src: '/products/p-soft-graphic.webp',
        alt: "Graphics & Design",
        title: "Graphics & Design",
        category: "Software",
      },
      {
        src: '/products/p-soft-tally.webp',
        alt: "Accounting Software",
        title: "Accounting Software",
        category: "Software",
      },
      {
        src: '/products/p-remote.webp',
        alt: "Remote Access Tools",
        title: "Remote Access Tools",
        category: "Software",
      },
      {
        src: '/products/p-soft-key.webp',
        alt: "Software Licenses",
        title: "Software Licenses",
        category: "Software",
      },
    ],
  },
];

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
  "PCs & Laptops",
  "Peripherals",
  "Components",
  "Storage & Drives",
  "Displays & Graphics",
  "Networking",
  "Accessories & Essentials",
  "Software & Services",
];

function ProductCard({ product }: { product: any }) {
  return (
    <AnimatePresence>
      <div
        className="group relative  rounded-2xl border border-lime-700 bg-gradient-to-br from-lime-950 via-neutral-900 to-lime-950 shadow-xl p-7 flex flex-col items-center text-center hover:shadow-2xl  transition-all duration-300 cursor-pointer overflow-hidden"
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
            src={product.src}
            alt={product.title}
            fill
            className="object-contain drop-shadow-2xl transition-transform duration-300 group-hover:scale-110"
            style={{
              filter: "brightness(1.2) drop-shadow(0 4px 32px #bef26488)",
              objectFit: "contain",
              pointerEvents: "none",
            }}
            sizes="(max-width: 768px) 100vw, 300px"
            priority={false}
          />
        </div>
        {/* Separator between image and text */}
        <div className="w-12 h-1 rounded-full bg-gradient-to-r from-lime-400 via-lime-300 to-lime-500 opacity-70 mb-3" />
        <h4 className="text-lg font-bold text-white mb-1 group-hover:text-lime-200 transition relative z-10 drop-shadow-[0_2px_8px_rgba(163,230,53,0.15)]">
          {product.title}
        </h4>
        <p className="text-neutral-200 text-sm relative z-10">{product.description}</p>
        <span className="block text-xs text-lime-300 mt-1 font-medium">{product.category}</span>
      </div>
    </AnimatePresence>
  );
}


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
              <span className="block text-xs text-lime-300 mt-1 font-medium">
                Explore our collection of {section?.title && typeof section.title === "string" && section.title.trim().length > 0
                  ? section.title.toLowerCase()
                  : "products"}
              </span>
            </div>
            <Link href="#" className="text-sm text-lime-300 hover:underline flex items-center">
              View all
              <ChevronRight className="ml-1 inline h-4 w-4 text-lime-300" />
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
            <CarouselPrevious className="border-lime-400 bg-white/10 text-lime-400 hover:bg-lime-900" />
            <CarouselNext className="border-lime-400 bg-white/10 text-lime-400 hover:bg-lime-900" />
          </Carousel>
        </section>
      ))}
    </div>
  );
}

export default function ProductsPage() {

  const heroImages = [
    {
      src: '/products/p-normal-pc.webp',
      alt: "Desktop PCs",
      title: "Desktop PCs",
      category: "Computers",
    },
    {
      src: '/products/p-gaming-pc.webp',
      alt: "Gaming PCs",
      title: "Gaming PCs",
      category: "Gaming",
    },
    {
      src: '/products/p-laptop.webp',
      alt: "Laptops",
      title: "Laptops",
      category: "Portable",
    },
    {
      src: '/products/p-mini-pc.webp',
      alt: "Mini PCs",
      title: "Mini PCs",
      category: "Compact",
    },
    {
      src: '/products/p-workstation-pc.webp',
      alt: "Workstations",
      title: "Workstations",
      category: "Professional",
    },
    {
      src: '/products/p-all-in-one.webp',
      alt: "All-in-One PCs",
      title: "All-in-One PCs",
      category: "All-in-One",
    },
    {
      src: '/products/p-thin-pc.webp',
      alt: "Thin Clients",
      title: "Thin Clients",
      category: "Business",
    },
    {
      src: '/products/p-borebone.webp',
      alt: "Barebone PCs",
      title: "Barebone PCs",
      category: "DIY",
    },
  ];

  const [heroIndex, setHeroIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);


  useEffect(() => {
    setIsAnimating(true);
    timeoutRef.current = setTimeout(() => {
      setIsAnimating(false);
      setTimeout(() => {
        setHeroIndex((prev) => (prev + 1) % heroImages.length);
      }, 100); 
    }, 3000);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };

  }, [heroIndex]);


  const handleDotClick = (i: number) => {
    setIsAnimating(false);
    setHeroIndex(i);
  };

  return (
    <>
      <Background />
      <main className="min-h-screen font-sans text-gray-900 ">

        {/* Hero Section with Carousel */}
        <section className="relative mx-auto w-full max-w-7xl px-4 pb-10 pt-12 md:pt-16">
          <div className="relative grid items-center gap-10 md:grid-cols-2">
            <div className="space-y-6">
              <AnimatePresence>
                <span
                  className="inline-flex items-center rounded-full border border-lime-400 bg-gradient-to-r from-lime-700 to-lime-800 px-3 py-1 text-xs font-medium text-white"
                >
                  BM COMPUTES
                </span>
              </AnimatePresence>
              <AnimatePresence>
                <h1
                  className="text-5xl font-extrabold bg-gradient-to-r from-white via-lime-300 to-lime-400 bg-clip-text text-transparent drop-shadow-lg"
                >
                  All the Computer Gear You Want, All in One Place - BM Computers
                </h1>
              </AnimatePresence>
              <p className="max-w-lg text-lime-200">
                Explore premium peripherals, GPUs, and pro‑grade gear in a clean, modern light UI with vibrant lime accents.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {categories.map((c) => (
                  <span
                    key={c}
                    className="rounded-full bg-gradient-to-br from-lime-950 via-neutral-900 to-lime-950 border border-lime-500/30 px-3 py-1 text-xs text-white"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
            {/* Hero carousel using all product images */}
            <div className="relative mx-auto aspect-[4/3] w-full overflow-hidden rounded-3xl border border-lime-400 bg-gradient-to-br from-zinc-900 via-zinc-700 to-zinc-950">
              <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20">
                <span className="bg-gradient-to-r from-lime-700 to-lime-800 text-white px-4 py-1 rounded-full text-xs font-semibold shadow">
                  Images of products and their categories
                </span>
              </div>
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={heroIndex}
                  initial={{ opacity: 0, scale: 0.98, x: 40 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.98, x: -40 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  className="absolute inset-0"
                  style={{ pointerEvents: "auto" }}
                >
                  <Image
                    src={heroImages[heroIndex].src}
                    alt={heroImages[heroIndex].alt}
                    fill
                    priority={true}
                    className="object-contain p-10"
                    sizes="(max-width: 768px) 100vw, 400px"
                    style={{
                      filter: "brightness(1.2) drop-shadow(0 4px 65px #bef26488)",
                      objectFit: "contain",
                      pointerEvents: "none",
                    }}
                  />
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-gradient-to-r from-lime-700 to-lime-800 text-white px-4 py-1 rounded-full text-xs font-medium shadow">
                    {heroImages[heroIndex].category}
                  </div>
                </motion.div>
              </AnimatePresence>
              {/* Dots navigation */}
              <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
                {heroImages.map((_, i) => (
                  <button
                    key={i}
                    className={`h-2 w-2 rounded-full transition-colors duration-200 ${i === heroIndex ? "bg-lime-400" : "bg-lime-700/60"
                      }`}
                    aria-label={`Show slide ${i + 1}`}
                    onClick={() => handleDotClick(i)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <MultiProductCarousels sections={productSections} />

        {/* Promo Banners */}
        <section className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 px-4 py-4 md:grid-cols-2">
          <div
            className="relative overflow-hidden rounded-3xl border border-lime-400 filter backdrop-blur-md shadow-lg bg-gradient-to-tr from-lime-900 via-lime-800/80 to-lime-700/80 p-0"
            style={{
              backgroundImage: `url('/products/promo-8.jpg'), linear-gradient(to top right, #3f6212 0%, #65a30d 100%)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {/* Decorative blurred gradient orb */}
            <div className="pointer-events-none absolute -top-20 -left-20 h-1/2  w-1/2 rounded-full bg-gradient-to-br from-lime-400/50 via-lime-600/50 to-transparent blur-3xl opacity-60 animate-float-slow z-0" />
            {/* Decorative bottom right orb */}
            <div className="pointer-events-none absolute -bottom-16 -right-16 h-1/2 w-1/2 rounded-full bg-gradient-to-tr from-lime-500/40 via-lime-900/30 to-transparent blur-2xl opacity-40 animate-float-reverse z-0" />

            <div className="relative z-10 grid items-center gap-8 md:grid-cols-2 px-8 py-10">
              <div>
                <h3 className="text-3xl font-extrabold bg-gradient-to-r from-white via-lime-200 to-lime-300 bg-clip-text text-transparent drop-shadow-lg">
                  Latest Gaming Console
                </h3>
                <p className="mt-2 text-lg font-medium text-lime-100/90 drop-shadow">
                  Top Gaming Console at <br /> BM Computers.
                </p>

                <Button className="mt-8 rounded-2xl bg-gradient-to-r from-lime-500 via-lime-400 to-lime-300 text-black shadow-lg hover:from-lime-400 hover:to-lime-200 transition-all duration-200">
                  Contact Now
                </Button>
              </div>

            </div>
          </div>
          <div
            className="relative overflow-hidden rounded-3xl border border-lime-400 filter backdrop-blur-md shadow-lg bg-gradient-to-tr from-lime-900 via-lime-800/80 to-lime-700/80 p-0"
            style={{
              backgroundImage: `url('/products/promo-4.jpg'), linear-gradient(to top right, #3f6212 0%, #65a30d 100%)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {/* Decorative blurred gradient orb */}
            <div className="pointer-events-none absolute -top-20 -left-20 h-1/2  w-1/2 rounded-full bg-gradient-to-br from-lime-400/50 via-lime-600/50 to-transparent blur-3xl opacity-60 animate-float-slow z-0" />
            {/* Decorative bottom right orb */}
            <div className="pointer-events-none absolute -bottom-16 -right-16 h-1/2 w-1/2 rounded-full bg-gradient-to-tr from-lime-500/40 via-lime-900/30 to-transparent blur-2xl opacity-40 animate-float-reverse z-0" />

            <div className="relative z-10 grid items-center gap-8 md:grid-cols-2 px-8 py-10">
              <div>
                <h3 className="text-3xl font-extrabold bg-gradient-to-r from-white via-lime-200 to-lime-300 bg-clip-text text-transparent drop-shadow-lg">
                  Drones &amp; Cameras
                </h3>
                <p className="mt-2 text-lg font-medium text-lime-100/90 drop-shadow">
                  Shop the latest drones and cameras at BM Computers.
                </p>
                <Button className="mt-8 rounded-2xl bg-gradient-to-r from-lime-500 via-lime-400 to-lime-300 text-black shadow-lg hover:from-lime-400 hover:to-lime-200 transition-all duration-200">
                  Explore Now
                </Button>
              </div>

            </div>
          </div>
        </section>

        {/* Gaming Console Highlight */}
        <section className="mx-auto w-full max-w-7xl px-4 py-12">
          <div
            className="relative overflow-hidden rounded-3xl h-[35rem] border border-lime-400 filter backdrop-blur-md shadow-lg bg-gradient-to-tr from-lime-900 via-lime-800/80 to-lime-700/80 p-0"
            style={{
              backgroundImage: `url('/products/promo-12.png'), linear-gradient(to top right, #3f6212 0%, #65a30d 100%)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {/* Decorative blurred gradient orb */}
            <div className="pointer-events-none absolute -top-20 -left-20  h-1/2 w-1/2 rounded-full bg-gradient-to-br from-lime-400/50 via-lime-600/50 to-transparent blur-3xl opacity-60 animate-float-slow z-0" />
            {/* Decorative bottom right orb */}
            <div className="pointer-events-none absolute -bottom-16 -right-16 h-1/2 w-1/2 rounded-full bg-gradient-to-tr from-lime-500/40 via-lime-900/30 to-transparent blur-2xl opacity-40 animate-float-reverse z-0" />

            <div className="relative z-10 grid items-center gap-8 md:grid-cols-2 px-8 py-10">
              <div>
                <h3 className="text-3xl font-extrabold bg-gradient-to-r from-white via-lime-200 to-lime-300 bg-clip-text text-transparent drop-shadow-lg">
                  Buy Your Dream PC
                </h3>
                <p className="mt-2 text-lg font-medium text-lime-100/90 drop-shadow">
                  Custom-built desktops for gaming, work, and creativity. Choose your specs or get expert advice for the perfect PC.
                </p>
                <ul className="mt-4 list-disc list-inside text-lime-100/90 text-base space-y-1">
                  <li>Tailored to your performance needs</li>
                  <li>Expert consultation available</li>
                  <li>Premium components &amp; brands</li>
                  <li>Fast build &amp; delivery</li>
                </ul>
                <Button className="mt-8 rounded-2xl bg-gradient-to-r from-lime-500 via-lime-400 to-lime-300 text-black shadow-lg hover:from-lime-400 hover:to-lime-200 transition-all duration-200">
                  Contact Now
                </Button>
              </div>
              <div className="relative h-64 w-full flex items-center justify-center">
                <div className="absolute -z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full bg-gradient-radial from-lime-300/30 via-lime-200/20 to-transparent blur-2xl opacity-60 animate-float-mid" />

              </div>
            </div>
          </div>
        </section>

        {/* Brand logos */}
        <section className="mx-auto w-full max-w-7xl px-4 py-8">
          <div className="mb-4">
            <span className="block text-center text-xs text-lime-700 font-medium">
              Images of products and their categories
            </span>
          </div>
          <MarqueeSlider
            images={brands.map((b) => ({ src: b.image, name: b.name }))}
            direction="left"
            speed={50}
            className=" border border-lime-500/50 text-white bg-gradient-to-br from-zinc-950 via-zinc-700 to-zinc-950"
            imageSize={100}
          />
        </section>

        {/* Additional Promo Banners */}
        <section className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 px-4 py-10 md:grid-cols-3">
          {/* Keyboard Promo */}
          <div
            className="relative overflow-hidden rounded-3xl border border-lime-400 filter backdrop-blur-md shadow-lg bg-gradient-to-tr from-lime-900 via-lime-800/80 to-lime-700/80 p-0"
            style={{
              backgroundImage: `url('/products/promo-9.jpg'), linear-gradient(to top right, #3f6212 0%, #65a30d 100%)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {/* Decorative blurred gradient orb */}
            <div className="pointer-events-none absolute -top-20 -left-20 h-1/2  w-1/2 rounded-full bg-gradient-to-br from-lime-400/50 via-lime-600/50 to-transparent blur-3xl opacity-60 animate-float-slow z-0" />
            {/* Decorative bottom right orb */}
            <div className="pointer-events-none absolute -bottom-16 -right-16 h-1/2 w-1/2 rounded-full bg-gradient-to-tr from-lime-500/40 via-lime-900/30 to-transparent blur-2xl opacity-40 animate-float-reverse z-0" />

            <div className="relative z-10 grid items-center gap-8 md:grid-cols-2 px-8 py-10">
              <div>
                <h3 className="text-xl font-extrabold bg-gradient-to-r from-white via-lime-200 to-lime-300 bg-clip-text text-transparent drop-shadow-lg">
                  Mechanical Keyboards
                </h3>
                <p className="mt-2 text-md font-medium text-lime-100/90 drop-shadow">
                  Precision and speed in every keystroke.
                </p>
                <Button className="mt-8 rounded-2xl bg-gradient-to-r from-lime-500 via-lime-400 to-lime-300 text-black shadow-lg hover:from-lime-400 hover:to-lime-200 transition-all duration-200">
                  Contact Now
                </Button>
              </div>

            </div>
          </div>

          {/* Mouse Promo */}
          <div
            className="relative overflow-hidden rounded-3xl border border-lime-400 filter backdrop-blur-md shadow-lg bg-gradient-to-tr from-lime-900 via-lime-800/80 to-lime-700/80 p-0"
            style={{
              backgroundImage: `url('/products/promo-5.jpg'), linear-gradient(to top right, #3f6212 0%, #65a30d 100%)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {/* Decorative blurred gradient orb */}
            <div className="pointer-events-none absolute -top-20 -left-20 h-1/2  w-1/2 rounded-full bg-gradient-to-br from-lime-400/50 via-lime-600/50 to-transparent blur-3xl opacity-60 animate-float-slow z-0" />
            {/* Decorative bottom right orb */}
            <div className="pointer-events-none absolute -bottom-16 -right-16 h-1/2 w-1/2 rounded-full bg-gradient-to-tr from-lime-500/40 via-lime-900/30 to-transparent blur-2xl opacity-40 animate-float-reverse z-0" />

            <div className="relative z-10 grid items-center gap-8 md:grid-cols-2 px-8 py-10">
              <div>
                <h3 className="text-xl font-extrabold bg-gradient-to-r from-white via-lime-200 to-lime-300 bg-clip-text text-transparent drop-shadow-lg">
                  Premium Gaming Mice
                </h3>
                <p className="mt-2 text-md font-medium text-lime-100/90 drop-shadow">
                  Precision and comfort for gamers.
                </p>
                <Button className="mt-8 rounded-2xl bg-gradient-to-r from-lime-500 via-lime-400 to-lime-300 text-black shadow-lg hover:from-lime-400 hover:to-lime-200 transition-all duration-200">
                  Contact Now
                </Button>
              </div>

            </div>
          </div>

          {/* Graphics Card Promo */}
          <div
            className="relative overflow-hidden rounded-3xl border border-lime-400 filter backdrop-blur-md shadow-lg bg-gradient-to-tr from-lime-900 via-lime-800/80 to-lime-700/80 p-0"
            style={{
              backgroundImage: `url('/products/promo-7.jpg'), linear-gradient(to top right, #3f6212 0%, #65a30d 100%)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {/* Decorative blurred gradient orb */}
            <div className="pointer-events-none absolute -top-20 -left-20 h-1/2  w-1/2 rounded-full bg-gradient-to-br from-lime-400/50 via-lime-600/50 to-transparent blur-3xl opacity-60 animate-float-slow z-0" />
            {/* Decorative bottom right orb */}
            <div className="pointer-events-none absolute -bottom-16 -right-16 h-1/2 w-1/2 rounded-full bg-gradient-to-tr from-lime-500/40 via-lime-900/30 to-transparent blur-2xl opacity-40 animate-float-reverse z-0" />

            <div className="relative z-10 grid items-center gap-8 md:grid-cols-2 px-8 py-10">
              <div>
                <h3 className="text-xl font-extrabold bg-gradient-to-r from-white via-lime-200 to-lime-300 bg-clip-text text-transparent drop-shadow-lg">
                  Latest Graphic Cards
                </h3>
                <p className="mt-2 text-md font-medium text-lime-100/90 drop-shadow">
                  Top graphic cards at BM Computers.
                </p>
                <Button className="mt-8 rounded-2xl bg-gradient-to-r from-lime-500 via-lime-400 to-lime-300 text-black shadow-lg hover:from-lime-400 hover:to-lime-200 transition-all duration-200">
                  Contact Now
                </Button>
              </div>

            </div>
          </div>

        </section>
      </main>
    </>
  );
}