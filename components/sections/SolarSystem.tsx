import { motion, useAnimationFrame } from "motion/react";
import {
  FaMicrochip,
  FaHdd,
  FaDesktop,
  FaMouse,
  FaKeyboard,
  FaBolt,
  FaWifi,
  FaLaptop,
  FaGamepad,
} from "react-icons/fa";
import { useState } from "react";

const innerOrbitIcons = [
  { icon: FaMicrochip, label: "CPU" },
  { icon: FaHdd, label: "Hard Drive" },
  { icon: FaDesktop, label: "Monitor" },
  { icon: FaMouse, label: "Mouse" },
  { icon: FaKeyboard, label: "Keyboard" },
];

const middleOrbitIcons = [
  { icon: FaBolt, label: "Zap" },
  { icon: FaWifi, label: "WiFi" },
  { icon: FaMicrochip, label: "CPU" },
  { icon: FaHdd, label: "Hard Drive" },
  { icon: FaDesktop, label: "Monitor" },
];

const outerOrbitIcons = [
  { icon: FaLaptop, label: "PC Normal" },
  { icon: FaKeyboard, label: "Keyboard" },
  { icon: FaGamepad, label: "PC Gaming" },
  { icon: FaWifi, label: "WiFi" },
  { icon: FaMicrochip, label: "CPU" },
  { icon: FaHdd, label: "Hard Drive" },
];


type OrbitingIconProps = {
  Icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  label: string;
  radius: number;
  speed: number;
  offset?: number;
  size: number;
};

function OrbitingIcon({
  Icon,
  label,
  radius,
  speed,
  offset = 0,
  size,
}: OrbitingIconProps) {
  const [angle, setAngle] = useState(offset);

  // Update angle every frame
  useAnimationFrame((t) => {
    const a = ((t / 1000) * speed + offset) % 360;
    setAngle(a);
  });

  // Convert polar → cartesian
  const x = Math.cos((angle * Math.PI) / 180) * radius;
  const y = Math.sin((angle * Math.PI) / 180) * radius;

  return (
    <div
      className="absolute flex items-center justify-center bg-white border border-gray-200 rounded-full"
      style={{
        width: size,
        height: size,
        top: "50%",
        left: "50%",
        transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`, // ✅ stays upright
      }}
      title={label}
    >
      <Icon className="text-emerald-600" style={{ fontSize: size * 0.7 }} />
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

      {/* Inner Orbit Icons */}
      {innerOrbitIcons.map(({ icon: Icon, label }, i) => (
        <OrbitingIcon
          key={i}
          Icon={Icon}
          label={label}
          radius={128}
          speed={30} // degrees per second
          offset={(360 / innerOrbitIcons.length) * i}
          size={32}
        />
      ))}

      {/* Middle Orbit Icons */}
      {middleOrbitIcons.map(({ icon: Icon, label }, i) => (
        <OrbitingIcon
          key={i}
          Icon={Icon}
          label={label}
          radius={192}
          speed={20}
          offset={(360 / middleOrbitIcons.length) * i}
          size={40}
        />
      ))}

      {/* Outer Orbit Icons */}
      {outerOrbitIcons.map(({ icon: Icon, label }, i) => (
        <OrbitingIcon
          key={i}
          Icon={Icon}
          label={label}
          radius={300}
          speed={10}
          offset={(360 / outerOrbitIcons.length) * i}
          size={48}
        />
      ))}

     
    </div>
  );
}
