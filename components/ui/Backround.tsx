"use client";
import { cn } from "@/lib/utils";
import React from "react";

const Background: React.FC<{
  className?: string;
  containerClassName?: string;
  children?: React.ReactNode;
}> = ({ className, containerClassName, children }) => {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "fixed inset-0 z-0 pointer-events-none flex w-full h-full items-center justify-center overflow-hidden",
        containerClassName
      )}
      style={{
        backgroundImage: `linear-gradient(120deg, rgba(16, 185, 129, 0.12) 0%, rgba(34, 211, 238, 0.10) 100%), url(card-bg.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundBlendMode: 'overlay',
      }}
    >
      {/* Futuristic animated neon grid */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/neon-grid.png"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-25 animate-pulse-slow"
          style={{
            mixBlendMode: "screen",
            filter: "blur(2.5px) brightness(1.25)"
          }}
        />
      </div>
      {/* Animated glowing orbs */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-emerald-400 via-cyan-300 to-transparent opacity-60 blur-3xl animate-float-slow shadow-[0_0_120px_60px_rgba(16,185,129,0.25)]" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-cyan-400 via-emerald-200 to-transparent opacity-50 blur-3xl animate-float-reverse shadow-[0_0_120px_60px_rgba(34,211,238,0.18)]" />
      {/* Extra glowing elements for more depth */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full bg-gradient-radial from-emerald-300/40 via-cyan-200/30 to-transparent opacity-40 blur-2xl animate-float-mid pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[180px] h-[180px] rounded-full bg-gradient-to-br from-cyan-300/40 via-emerald-200/30 to-transparent opacity-30 blur-2xl animate-float-slow pointer-events-none" />
      <div className="absolute top-10 right-1/4 w-[140px] h-[140px] rounded-full bg-gradient-to-tr from-emerald-400/40 via-cyan-200/30 to-transparent opacity-25 blur-2xl animate-float-reverse pointer-events-none" />


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
          0%, 100% { opacity: 0.18; }
          50% { opacity: 0.28; }
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
