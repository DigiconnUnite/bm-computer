"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Eye, ChevronRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";

// Hero images and their info
const heroImages = [
  {
    src: "/mouse-1.png",
    alt: "Futuristic Mouse",
  },
  {
    src: "/cabinat-1.png",
    alt: "Fractal Design Case",
  },
  {
    src: "/graphic-card1.png",
    alt: "NVIDIA RTX 4090 GPU",
  },
  {
    src: "/tft-1.png",
    alt: "144Hz Gaming Monitor",
  },
  {
    src: "/products/ram.webp",
    alt: "DDR5 RAM 32GB",
  },
];

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Background from "@/components/ui/Backround";

type Product = {
  id: string;
  name: string;
  price: string;
  image: string;
};

const topRated: Product[] = [
  { id: "mouse", name: "Wireless Gaming Mouse", price: "$290", image: "/mouse-1.png" },
  { id: "case", name: "Fractal Design Case", price: "$370", image: "/cabinat-1.png" },
  { id: "gpu", name: "NVIDIA RTX 4090 GPU", price: "$2,350", image: "/graphic-card1.png" },
  { id: "ram", name: "DDR5 RAM 32GB", price: "$280", image: "/products/ram.webp" },
  { id: "monitor", name: "144Hz Gaming Monitor", price: "$1,050", image: "/tft-1.png" },
];

const featured: Product[] = [
  { id: "rtx6000", name: "RTX 6000 GPU", price: "$990", image: "/graphic-card6.png" },
  { id: "tv4k", name: "LED 4K Smart TV", price: "$1,590", image: "/tft-4.png" },
  { id: "ddr5", name: "DDR5 32GB 6800MHz", price: "$1,280", image: "/products/ram.webp" },
  { id: "headphones", name: "Gaming Headphones", price: "$890", image: "/products/headphone.webp" },
  { id: "cpu", name: "AMD Ryzen 9 CPU", price: "$1,860", image: "/processor.webp" },
  { id: "psu", name: "High-end Power Supply", price: "$770", image: "/psu-2.png" },
];

const trending: Product[] = [
  { id: "rgbkb", name: "RGB Mechanical Keyboard", price: "$390", image: "/keyboard-2.png" },
  { id: "headset", name: "Gaming Headset", price: "$810", image: "/products/headphone.webp" },
  { id: "gpucooler", name: "GPU Air Cooler", price: "$155", image: "/cpu-fan1.png" },
  { id: "pccase", name: "Premium PC Case", price: "$3,850", image: "/cabinat-1.png" },
  { id: "ssd", name: "1TB SSD NVMe", price: "$450", image: "/products/nvme.webp" },
];

const recent: Product[] = [
  { id: "mouse-r", name: "Wireless Gaming Mouse", price: "$290", image: "/mouse-1.png" },
  { id: "cooler-r", name: "CPU Air Cooler", price: "$155", image: "/cpu-fan3.png" },
  { id: "closed-r", name: "Closed-Back Headphones", price: "$700", image: "/products/headphone.webp" },
  { id: "i7-r", name: "Intel i7 Processor", price: "$890", image: "/processor.webp" },
  { id: "webcam-r", name: "High Definition Webcam", price: "$140", image: "/products/webcam.webp" },
  { id: "ram-r", name: "DDR5 RAM 32GB", price: "$1,180", image: "/products/ram.webp" },
  { id: "hdd-r", name: "2TB External HDD", price: "$210", image: "/products/external-drive.webp" },
  { id: "rgb-r", name: "RGB Keyboard", price: "$390", image: "/keyboard-2.png" },
];

const categories = [
  "Computers & Laptops",
  "Smartphones & Tablets",
  "Cameras & Lenses",
  "Appliances",
  "TVs & Audio",
  "Headphones",
];


function HeroImageSlider() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-advance every 1s
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [index]);

  // For smooth fade transitions
  return (
    <div className="relative mx-auto aspect-[4/3] w-full overflow-hidden rounded-3xl border border-emerald-100 bg-emerald-900/20 ">
      {heroImages.map((img, i) => (
        <motion.div
          key={img.src}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{
            opacity: i === index ? 1 : 0,
            scale: i === index ? 1 : 0.98,
            zIndex: i === index ? 2 : 1,
          }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute inset-0"
          style={{ pointerEvents: i === index ? "auto" : "none" }}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            priority={i === 0}
            className="object-contain p-10"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </motion.div>
      ))}
      {/* Dots navigation */}
      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {heroImages.map((_, i) => (
          <button
            key={i}
            className={`h-2 w-2 rounded-full transition-colors duration-200 ${i === index ? "bg-emerald-600" : "bg-emerald-200"
              }`}
            aria-label={`Show slide ${i + 1}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <AnimatePresence>
      <motion.div 
        whileHover={{ y: -6 }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.4 }}
        className="group relative overflow-hidden rounded-2xl bg-emerald-700/10 border border-emerald-100 p-4 shadow-md transition hover:shadow-lg "
      >
        
        <div className="absolute right-3 top-3 z-10 flex gap-2">
          <button
            type="button"
            className="rounded-full border border-emerald-200 bg-white/80 p-2 text-emerald-600 transition hover:bg-emerald-50 hover:text-emerald-800"
            aria-label="Add to favorites"
          >
            <Heart size={16} />
          </button>
          <button
            type="button"
            className="rounded-full border border-emerald-200 bg-white/80 p-2 text-emerald-600 transition hover:bg-emerald-50 hover:text-emerald-800"
            aria-label="View details"
          >
            <Eye size={16} />
          </button>
        </div>
        <div className="relative mx-auto aspect-square w-full overflow-hidden rounded-xl">
          {/* Glassmorphism background */}
          <div
            className="absolute inset-0 z-0 rounded-xl"
            style={{
              background: "rgba(236, 253, 245, 0.6)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid rgba(16, 185, 129, 0.10)",
            }}
          />
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-6 transition-transform duration-300 group-hover:scale-105 relative z-10"
            sizes="(max-width: 768px) 100vw, 300px"
            priority={false}
          />
        </div>
        <div className="mt-4 space-y-1">
          <h4 className="text-sm font-medium text-gray-900">{product.name}</h4>
          <p className="text-emerald-600 font-semibold">{product.price}</p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function ProductsPage() {
  return (
    <main className="min-h-screen font-sans text-gray-900 bg-gray-50">
      <Background />


      <section className="relative mx-auto w-full max-w-7xl px-4 pb-10 pt-12 md:pt-16">
        <div className="relative grid items-center gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <AnimatePresence>
              <motion.span
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700"
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
                className="text-4xl font-extrabold leading-tight md:text-5xl text-gray-900"
              >
                Everything Your Computer Needs, Under One Roof
              </motion.h1>
            </AnimatePresence>
            <p className="max-w-lg text-gray-700">
              Explore premium peripherals, GPUs, and pro‑grade gear in a clean, modern light UI with emerald accents.
            </p>
            <p className="max-w-lg text-gray-700">
              Explore premium peripherals, GPUs, and pro‑grade gear in a clean, modern light UI with emerald accents.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {categories.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs text-emerald-700"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
          <HeroImageSlider />
        </div>
      </section>

      {/* Top Rated */}
      <section id="top-rated" className="mx-auto w-full max-w-7xl px-4 py-10">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">Top Rated Products</h2>
          <Link href="#" className="text-sm text-emerald-700 hover:underline flex items-center">
            View all
            <ChevronRight className="ml-1 inline h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {topRated.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Promo Banners */}
      <section className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 px-4 py-4 md:grid-cols-2">
        <div className="relative overflow-hidden rounded-3xl border border-emerald-100 bg-white p-6 shadow">
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
        <div className="relative overflow-hidden rounded-3xl border border-emerald-100 bg-white p-6 shadow">
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

      {/* Featured Products - Carousel */}
      <section className="mx-auto w-full max-w-7xl px-4 py-10">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">Featured Products</h2>
        </div>
        <Carousel opts={{ align: "start" }} className="relative">
          <CarouselContent>
            {featured.map((p) => (
              <CarouselItem key={p.id} className="basis-2/3 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <ProductCard product={p} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="border-emerald-100 bg-white text-emerald-700 hover:bg-emerald-50" />
          <CarouselNext className="border-emerald-100 bg-white text-emerald-700 hover:bg-emerald-50" />
        </Carousel>
      </section>

      {/* Gaming Console Highlight */}
      <section className="mx-auto w-full max-w-7xl px-4 py-10">
        <div className="relative overflow-hidden rounded-3xl border border-emerald-100 bg-white p-6 shadow">
          <div className="grid items-center gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">Latest Gaming Console</h3>
              <p className="mt-1 text-emerald-700">ASUS 620-QF / 825H 512FFL 1.2&quot;</p>
              <Button className="mt-6 rounded-2xl bg-emerald-600 text-white hover:bg-emerald-500">Shop Now</Button>
            </div>
            <div className="relative h-56 w-full">
              <Image
                src="/console-1.png"
                alt="Console"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 350px"
                priority={false}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="mx-auto w-full max-w-7xl px-4 py-10">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">Trending Products</h2>
          <Link href="#" className="text-sm text-emerald-700 hover:underline flex items-center">
            See all
            <ChevronRight className="ml-1 inline h-4 w-4" />
          </Link>
        </div>
        <Carousel opts={{ align: "start" }} className="relative">
          <CarouselContent>
            {trending.map((p) => (
              <CarouselItem key={p.id} className="basis-2/3 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <ProductCard product={p} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="border-emerald-100 bg-white text-emerald-700 hover:bg-emerald-50" />
          <CarouselNext className="border-emerald-100 bg-white text-emerald-700 hover:bg-emerald-50" />
        </Carousel>
      </section>

      {/* Brand logos */}
      <section className="mx-auto w-full max-w-7xl px-4 py-8">
        <div className="grid grid-cols-3 gap-6 sm:grid-cols-6">
          {["asus", "msi", "intel", "nvidia", "corsair", "kingstontechnology"].map((b) => (
            <div
              key={b}
              className="flex items-center justify-center rounded-xl border border-emerald-100 bg-white p-4 opacity-80 transition hover:opacity-100"
            >
              <Image
                src={`/brands/${b}.svg`}
                alt={b}
                width={110}
                height={40}
                priority={false}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Additional Promo Banners */}
      <section className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 px-4 py-10 md:grid-cols-3">
        <div className="relative overflow-hidden rounded-3xl border border-emerald-100 bg-white p-6 shadow">
          <h3 className="text-lg font-semibold text-gray-900">Limited Weekly Discount</h3>
          <p className="text-emerald-700">Gaming Controller</p>
          <Button className="mt-6 rounded-2xl bg-emerald-600 text-white hover:bg-emerald-500">Save now</Button>
          <Image
            src="/game-chair.png"
            alt="Controller"
            width={180}
            height={120}
            className="pointer-events-none absolute -right-6 bottom-0 opacity-80"
            priority={false}
          />
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-emerald-100 bg-white p-6 shadow">
          <h3 className="text-lg font-semibold text-gray-900">Photo Drones</h3>
          <p className="text-emerald-700">MT34 Ultra 13&quot;</p>
          <p className="mt-4 text-2xl font-bold text-emerald-600">$75</p>
          <Button className="mt-6 rounded-2xl bg-emerald-600 text-white hover:bg-emerald-500">Shop</Button>
          <Image
            src="/all.png"
            alt="Drone"
            width={220}
            height={140}
            className="pointer-events-none absolute -right-6 bottom-0 opacity-80"
            priority={false}
          />
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-emerald-100 bg-white p-6 shadow">
          <h3 className="text-lg font-semibold text-gray-900">PC Parts & Elements</h3>
          <Button className="mt-6 rounded-2xl bg-emerald-600 text-white hover:bg-emerald-500">Shop now</Button>
          <Image
            src="/all.png"
            alt="Parts"
            width={220}
            height={140}
            className="pointer-events-none absolute -right-6 bottom-0 opacity-80"
            priority={false}
          />
        </div>
      </section>

      {/* Recently Added */}
      <section className="mx-auto w-full max-w-7xl px-4 py-10">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">Recently Added</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {recent.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </main>
  );
}
