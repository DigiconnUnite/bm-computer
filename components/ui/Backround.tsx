"use client";
import { cn } from "@/lib/utils";
import React from "react";

const Background: React.FC<{
  className?: string;
  containerclassName?: string;
  children?: React.ReactNode;
}> = ({ className, containerclassName, children }) => {
  return (



    <div
      aria-hidden="true"
      className={cn(
        // Use a beautiful dark gradient as the base, with subtle overlays
        "fixed inset-0 z-0 pointer-events-none flex w-full h-full items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-800 via-zinc-800 to-zinc-900",
        containerclassName
      )}
      style={{
        // Overlay a subtle emerald/cyan gradient and a soft texture

        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundBlendMode: 'overlay',
      }}
    >




      {/* Futuristic animated neon grid */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0">
          {/* Lime radial gradient with visible dotted overlay using Tailwind */}
          <div
            className={cn(
              "absolute inset-0 -z-10 h-full w-full items-center px-5 py-24",
              // Dotted background using Tailwind's [background-image] and [background-size]
              "bg-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#a3e635_100%)]", // lime-400
              "before:content-[''] before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(#ffffff33_1px,transparent_1px)] before:bg-[size:20px_20px] before:bg-repeat"
            )}
          ></div>
        </div>
        <img
          src="/neon-grid.png"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-20 animate-pulse-slow"
          style={{
            mixBlendMode: "screen",
            filter: "blur(2.5px) brightness(1.18)"
          }}
        />
      </div>

      {/* Children content */}
      <div className={cn("relative z-20", className)}>{children}</div>
      {/* Custom keyframes for floating, pulsing, and sparkles */}
      <style jsx global>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(30px) scale(1.05); }
        }
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-30px) scale(1.07); }
        }
        @keyframes float-mid {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(15px) scale(1.03); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.22; }
        }
        @keyframes sparkle {
          0% { opacity: 0.1; transform: scale(0.8);}
          50% { opacity: 0.5; transform: scale(1.2);}
          100% { opacity: 0.1; transform: scale(0.8);}
        }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-float-reverse { animation: float-reverse 10s ease-in-out infinite; }
        .animate-float-mid { animation: float-mid 7s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 6s ease-in-out infinite; }
        .animate-sparkle { animation: sparkle 5s ease-in-out infinite; }
        .bg-gradient-radial {
          background-image: radial-gradient(circle at 50% 50%, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
};

export default Background;
