"use client";
import { useRef, useEffect } from "react";

type MarqueeImage = {
  src: string;
  name: string;
  color?: string;
};

type MarqueeSliderProps = {
  images: MarqueeImage[];
  direction?: "left" | "right";
  speed?: number;
  className?: string;
  imageSize?: number;
  svgColor?: string;
};

function isSvg(src: string) {
  return src.toLowerCase().endsWith(".svg");
}

export default function MarqueeSlider({
  images,
  direction = "left",
  speed = 18,
  className = "",
  imageSize = 100,
  svgColor,
}: MarqueeSliderProps) {
  const marqueeRef = useRef<HTMLDivElement>(null);

  // // Pause on hover
  // useEffect(() => {
  //   const marquee = marqueeRef.current;
  //   if (!marquee) return;
  //   const handleMouseEnter = () => {
  //     marquee.style.animationPlayState = "paused";
  //   };
  //   const handleMouseLeave = () => {
  //     marquee.style.animationPlayState = "running";
  //   };
  //   marquee.addEventListener("mouseenter", handleMouseEnter);
  //   marquee.addEventListener("mouseleave", handleMouseLeave);
  //   return () => {
  //     marquee.removeEventListener("mouseenter", handleMouseEnter);
  //     marquee.removeEventListener("mouseleave", handleMouseLeave);
  //   };
  // }, []);

  // Animation direction
  const animationName = direction === "left" ? "marquee-left" : "marquee-right";

  // Repeat images twice for seamless loop
  const repeatedImages = [...images, ...images];

  return (
    <section className={`w-full overflow-hidden py-8  ${className}`}>
      <div className="relative w-full">
        <div
          ref={marqueeRef}
          className="flex gap-12 animate-marquee will-change-transform"
          style={{
            animation: `${animationName} ${speed}s linear infinite`,
            minWidth: "200%",
          }}
        >
          {repeatedImages.map((img, idx) => {

            const isSvgImg = isSvg(img.src);

            const color = img.color || svgColor || "#059669";

            const emerald600Filter =
              "invert(41%) sepia(91%) saturate(484%) hue-rotate(120deg) brightness(92%) contrast(91%)";

            const filterStyle =
              isSvgImg && color
                ? emerald600Filter
                : undefined;

            return (
              <div
                key={`${img.src}-${idx}`}
                className="flex-shrink-0 flex flex-col items-center bg-white px-5 rounded-xl justify-center"

                style={{ width: imageSize, height: imageSize + 32 }}
              >
                <img
                  src={img.src}
                  alt={img.name}
                  className={`w-full h-[70px] object-contain ${isSvgImg ? "svg-colorize" : ""}`}
                  draggable={false}
                  style={{
                    maxHeight: imageSize,
                    maxWidth: imageSize,
                    filter: isSvgImg ? filterStyle : undefined,
                  }}
                />
                <span className="mt-2 text-sm text-gray-700 text-center w-full truncate" title={img.name}>
                  {img.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      {/* Marquee keyframes and SVG colorize helper */}
      <style jsx>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes marquee-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        /* Optional: If you want to allow easy color override via CSS variable */
        .svg-colorize {
          /* fallback filter for emerald-600, override with style if needed */
          filter: invert(41%) sepia(91%) saturate(484%) hue-rotate(120deg) brightness(92%) contrast(91%);
        }
      `}</style>
    </section>
  );
}
