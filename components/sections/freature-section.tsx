import { FaDesktop, FaMicrochip, FaHeadphones } from "react-icons/fa";
import Image from "next/image";

export default function FeatureSection() {
  const features = [
    {
      tag: "NEW ARRIVAL",
      title: "UltraSharp TFT Monitor",
      link: "#",
      image: "/tft-1.png",
      bg: "bg-black",
    },
    {
      tag: "GET UP TO 35% OFF",
      title: "High-Performance Desktop PC",
      link: "#",
      image: "/pc-1.png",
      bg: "bg-gradient-to-b from-purple-900 to-black",
    },
    {
      tag: "HURRY UP!",
      title: "RGB CPU Cooling Fan",
      link: "#",
      image: "/cpu-fan3.png",
      bg: "bg-black",
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 text-black">
      {features.map((item, idx) => (
        <div
          key={idx}
          className={`relative overflow-hidden bg-gradient-to-r from-teal-950 via-emerald-900 to-teal-950 p-6 flex flex-col justify-between text-white`}
        >
          {/* Gradient Glowing Element */}
          <div
            className="pointer-events-none absolute -top-16 -right-16 w-56 h-56 rounded-full bg-gradient-to-br from-emerald-400 via-green-300 to-transparent opacity-30 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-gradient-to-tr from-green-400 via-emerald-500 to-transparent opacity-20 blur-2xl"
            aria-hidden="true"
          />


          <div>
            <p className="text-yellow-400 text-sm font-medium mb-2">
              {item.tag}
            </p>
            <h2 className="text-2xl font-bold leading-snug mb-4">
              {item.title}
            </h2>
            <a
              href={item.link}
              className=" text-emerald-500 font-semibold underline hover:text-yellow-300 transition"
            >
              Buy Now
            </a>
          </div>
          <div className="mt-6 flex justify-center relative z-10 min-h-[200px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src={item.image}
                alt={item.title}
                width={900}
                height={900}
                className="object-contain  "
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
