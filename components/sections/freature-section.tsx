import Image from "next/image";

export default function FeatureSection() {
  const features = [
    {
      tag: "NEW ARRIVAL",
      title: "UltraSharp TFT Monitor",
      link: "#",
      image: "/tft-1.png",
    },
    {
      tag: "GET UP TO 35% OFF",
      title: "High-Performance Desktop PC",
      link: "#",
      image: "/pc-1.png",
    },
    {
      tag: "HURRY UP!",
      title: "RGB CPU Cooling Fan",
      link: "#",
      image: "/cpu-fan3.png",
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 py-12 max-w-7xl mx-auto">
      {features.map((item, idx) => (
        <div
          key={idx}
          className={`
            relative overflow-hidden rounded-3xl border bg-gradient-to-br from-zinc-950 via-zinc-800 to-zinc-950 border-lime-400
            shadow-lg
            backdrop-blur-sm
            p-8 flex flex-col justify-between min-h-[380px]
            transition-all duration-300
            group
          `}
          style={{
            background:
              "linear-gradient(135deg, rgba(15,20,8,0.70) 0%, rgba(40,60,15,0.65) 60%, rgba(15,15,15,0.70) 100%)",
            boxShadow:
              "0 8px 32px 0 rgba(50, 255, 100, 0.10), 0 1.5px 8px 0 rgba(163, 230, 53, 0.10)",
            border: "1.5px solid #a3e635",
          }}
        >
          {/* Decorative blurred lime orbs */}
          <div
            className="pointer-events-none absolute -top-20 -left-20 w-60 h-60 rounded-full bg-gradient-to-br from-lime-400/40 via-lime-500/30 to-transparent opacity-40 blur-3xl animate-float-slow z-0"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-gradient-to-tr from-lime-500/30 via-lime-400/20 to-transparent opacity-30 blur-2xl animate-float-reverse z-0"
            aria-hidden="true"
          />

          <div className="relative z-10">
            <p className="text-lime-300 text-xs font-semibold mb-2 tracking-wider uppercase drop-shadow">
              {item.tag}
            </p>
            <h2 className="text-2xl font-extrabold leading-snug mb-4 bg-gradient-to-r from-white via-lime-200 to-lime-400 bg-clip-text text-transparent drop-shadow-lg">
              {item.title}
            </h2>
          </div>
          <div className="mt-8 flex justify-center relative z-10 min-h-[220px]">
            <div className="absolute inset-0 flex items-center justify-center overflow-visible">
              <Image
                src={item.image}
                alt={item.title}
                width={800}
                height={800}
                className="object-contain drop-shadow-2xl transition-transform duration-300 group-hover:scale-110"
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  width: "140%",
                  height: "140%",
                  transform: "translate(-50%, -55%) scale(1.1)",
                  filter: "brightness(1.05) drop-shadow(0 4px 32px #bef26488)",
                  objectFit: "contain",
                  pointerEvents: "none",
                }}
                draggable={false}
                priority={idx === 0}
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
