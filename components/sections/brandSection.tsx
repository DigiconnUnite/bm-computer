"use client";
import MarqueeSlider from "./marqueeSlider";

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

export default function BrandSection() {
  return (
    <section className="py-16 relative z-10">
      <div className="max-w-4xl mx-auto px-4 text-center relative z-20">
        <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-white via-lime-300 to-lime-400 bg-clip-text text-transparent drop-shadow-lg inline-block px-6 py-2 rounded-2xl">
          Trusted by Leading Brands
        </h2>
      </div>
      <div className="w-full mx-auto relative z-10">
        <MarqueeSlider
          images={brands.map((b) => ({ src: b.image, name: b.name }))}
          direction="left"
          speed={50}
          className=" border border-lime-500/50 text-white bg-gradient-to-br from-zinc-950 via-zinc-700 to-zinc-950"
          imageSize={100}
        />
        <MarqueeSlider
          images={brands.map((b) => ({ src: b.image, name: b.name }))}
          direction="right"
          speed={50}
          className=" border border-lime-500/50 text-white bg-gradient-to-br from-zinc-950 via-zinc-700 to-zinc-950"
          imageSize={100}
        />
      </div>
    </section>
  );
}