"use client";
import { useRef, useEffect } from "react";

const images = [
  
    "/cpu-fan1.png",
    "/cpu-fan2.png",
    "/cpu-fan3.png",
    "/cpu-fan4.png",
    "/graphic-card1.png",
    "/graphic-card2.png",
    "/graphic-card3.png",
    "/graphic-card6.png",
    "/graphic-card5.png",
    "/tft-1.png",
    "/tft-2.png",
    "/tft-3.png",
    "/tft-4.png",
   
    
  
];

export default function MarqueeSlider() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  // Optional: Pause on hover
  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;
    const handleMouseEnter = () => {
      marquee.style.animationPlayState = "paused";
    };
    const handleMouseLeave = () => {
      marquee.style.animationPlayState = "running";
    };
    marquee.addEventListener("mouseenter", handleMouseEnter);
    marquee.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      marquee.removeEventListener("mouseenter", handleMouseEnter);
      marquee.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
      <section className="w-full overflow-hidden py-8 bg-emerald-50">
      <div className="relative w-full">
        <div
          ref={marqueeRef}
          className="flex gap-12 animate-marquee will-change-transform"
          style={{
            animation: "marquee 18s linear infinite",
          }}
        >
          {/* Repeat images twice for seamless loop */}
          {[...images, ...images].map((src, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 flex items-center justify-center"
              style={{ width: 100, height: 100 }}
            >
              <img
                src={src}
                alt=""
                className="w-full  h-full object-cover"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
      {/* Marquee keyframes */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          min-width: 200%;
        }
      `}</style>
    </section>
  );
}
