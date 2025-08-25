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
    <section className="py-16 bg-emerald-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-600 mb-10">
          Trusted by Leading Brands
        </h2>
      </div>
      <div className="w-full mx-auto">
        <MarqueeSlider
          images={brands.map((b) => ({ src: b.image, name: b.name }))}
          direction="left"
          speed={50}
          className=""
          imageSize={100}
        />
        <MarqueeSlider
          images={brands.map((b) => ({ src: b.image, name: b.name }))}
          direction="right"
          speed={50}
          className=""
          imageSize={100}
        />
      </div>
    </section>
  );
}
