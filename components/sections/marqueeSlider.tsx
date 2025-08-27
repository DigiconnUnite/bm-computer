"use client";
import { useRef } from "react";

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

  // Animation direction
  const animationName = direction === "left" ? "marquee-left" : "marquee-right";

  // Repeat images twice for seamless loop
  const repeatedImages = [...images, ...images];

  // CSS filter for lime-400 (#a3e635) for black SVGs
  // This filter is tuned to make black SVGs appear lime-400
  const lime400Filter =
    "invert(81%) sepia(97%) saturate(749%) hue-rotate(24deg) brightness(97%) contrast(92%)";

  return (
    <section className={`w-full overflow-hidden py-8  `}>
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

            // Always use lime-400 filter for SVGs to ensure black SVGs become lime
            const filterStyle = isSvgImg
              ? lime400Filter
              : undefined;

            return (
              <div
                key={`${img.src}-${idx}`}
                className={`flex-shrink-0 flex flex-col items-center px-5 rounded-xl  justify-center ${className || ""}`}
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
                    filter: filterStyle,
                  }}
                />
                <span className="mt-2 text-sm  text-center w-full truncate" title={img.name}>
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
        /* Lime-400 colorize for SVGs (for black SVGs) */
        .svg-colorize {
          /* lime-400: #a3e635 */
          filter: invert(81%) sepia(97%) saturate(749%) hue-rotate(24deg) brightness(97%) contrast(92%);
        }
      `}</style>
    </section>
  );
}
