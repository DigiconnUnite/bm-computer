import { useAnimationFrame } from "motion/react";
import { useState } from "react";

// Replace icons with image paths
const innerOrbitImages = [
  { src: "/icons/keyboard.png", label: "Keyboard" },
  { src: "/icons/computer.png", label: "PC Gaming" },
  { src: "/icons/laptop.png", label: "PC Normal" },
  { src: "/icons/cpu.png", label: "WiFi" },
];

const middleOrbitImages = [
  { src: "/icons/mouse.png", label: "PC Normal" },
  { src: "/icons/monitor.png", label: "Keyboard" },
  { src: "/icons/earphone.png", label: "PC Gaming" },
  { src: "/icons/router-2.png", label: "WiFi" },
  { src: "/icons/headphone.png", label: "CPU" },
];

const outerOrbitImages = [
  { src: "/icons/laptop.png", label: "PC Normal" },
  { src: "/icons/keyboard.png", label: "Keyboard" },
  { src: "/icons/computer.png", label: "PC Gaming" },
  { src: "/icons/router-1.png", label: "WiFi" },
  { src: "/icons/cpu-fan.png", label: "CPU" },
  { src: "/icons/drive.png", label: "Hard Drive" },
];

type OrbitingImageProps = {
  src: string;
  label: string;
  radius: number;
  speed: number;
  offset?: number;
  size: number;
};

function OrbitingImage({
  src,
  label,
  radius,
  speed,
  offset = 0,
  size,
}: OrbitingImageProps) {
  const [angle, setAngle] = useState(offset);

  useAnimationFrame((t) => {
    const a = ((t / 1000) * speed + offset) % 360;
    setAngle(a);
  });

  const x = Math.cos((angle * Math.PI) / 180) * radius;
  const y = Math.sin((angle * Math.PI) / 180) * radius;

  // Hue-rotate for greenish tone: 90deg is green, 120deg is more vivid green
  // You can tweak the value as needed for your icons
  const greenHue = "hue-rotate(100deg)";

  return (
    <div
      className="absolute flex items-center justify-center bg-white border border-gray-200 rounded-full shadow"
      style={{
        width: size,
        height: size,
        top: "50%",
        left: "50%",
        transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
      }}
      title={label}
    >
      <img
        src={src}
        alt={label}
        style={{
          width: size * 0.5,
          height: size * 0.5,
          objectFit: "contain",
          filter: greenHue,
        }}
        draggable={false}
      />
    </div>
  );
}

export function SolarSystem() {
  return (
    <div className="relative w-[600px] h-[600px] mx-auto">
      {/* Orbit circles */}
      <div className="absolute top-1/2 left-1/2 w-64 h-64 border border-green-800/20 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-96 h-96 border border-blue-800/20 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] border border-purple-800/20 rounded-full -translate-x-1/2 -translate-y-1/2" />

      {/* Inner Orbit Images */}
      {innerOrbitImages.map(({ src, label }, i) => (
        <OrbitingImage
          key={i}
          src={src}
          label={label}
          radius={128}
          speed={30}
          offset={(360 / innerOrbitImages.length) * i}
          size={48}
        />
      ))}

      {/* Middle Orbit Images */}
      {middleOrbitImages.map(({ src, label }, i) => (
        <OrbitingImage
          key={i}
          src={src}
          label={label}
          radius={192}
          speed={20}
          offset={(360 / middleOrbitImages.length) * i}
          size={60}
        />
      ))}

      {/* Outer Orbit Images */}
      {outerOrbitImages.map(({ src, label }, i) => (
        <OrbitingImage
          key={i}
          src={src}
          label={label}
          radius={300}
          speed={10}
          offset={(360 / outerOrbitImages.length) * i}
          size={72}
        />
      ))}
    </div>
  );
}
