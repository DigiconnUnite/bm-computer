"use client";
import { cn } from "@/lib/utils";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import React from "react";

const dotPatterns = {
  light: {
    default: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%23d4d4d4' id='pattern-circle' cx='10' cy='10' r='2.5'%3E%3C/circle%3E%3C/svg%3E")`,
    hover: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%236366f1' id='pattern-circle' cx='10' cy='10' r='2.5'%3E%3C/circle%3E%3C/svg%3E")`,
  },
  dark: {
    default: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%23404040' id='pattern-circle' cx='10' cy='10' r='2.5'%3E%3C/circle%3E%3C/svg%3E")`,
    hover: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%238183f4' id='pattern-circle' cx='10' cy='10' r='2.5'%3E%3C/circle%3E%3C/svg%3E")`,
  },
};

const Background: React.FC<{
  className?: string;
  containerClassName?: string;
  children?: React.ReactNode;
}> = ({ className, containerClassName, children }) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    if (!currentTarget) return;
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      aria-hidden="true"
      className={cn(
        "fixed inset-0 z-0 pointer-events-none group  flex w-full h-full items-center justify-center  bg-emerald-50  dark:bg-black",
        containerClassName
      )}
      onMouseMove={handleMouseMove}
    >
      {/* Dot pattern background */}
      <div
        className="pointer-events-none absolute inset-0 dark:hidden"
        style={{
          backgroundImage: dotPatterns.light.default,
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 hidden dark:block"
        style={{
          backgroundImage: dotPatterns.dark.default,
        }}
      />
      {/* Hover dot pattern */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 dark:hidden"
        style={{
          backgroundImage: dotPatterns.light.hover,
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
          maskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
        }}
      />
      <motion.div
        className="pointer-events-none absolute inset-0 hidden opacity-0 transition duration-300 group-hover:opacity-100 dark:block"
        style={{
          backgroundImage: dotPatterns.dark.hover,
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
          maskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
        }}
      />

      {/* Modern grid overlay */}
      <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 opacity-10">
        {Array.from({ length: 12 * 6 }).map((_, i) => (
          <div
            key={i}
            className="border border-white/30 border-dashed"
            style={{ borderWidth: "0 1px 1px 0" }}
          />
        ))}
      </div>

      {/* Vignette shadow effect */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div
          className="w-full h-full"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(0,0,0,0) 60%, rgba(0,0,0,0.10) 100%)",
          }}
        />
      </div>

      {/* Modern gradient blobs */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-gradient-to-br from-emerald-200 via-cyan-100 to-white rounded-full opacity-40 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-gradient-to-tr from-emerald-100 via-white to-cyan-200 rounded-full opacity-30 blur-3xl" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gradient-to-br from-white via-emerald-50 to-cyan-100 rounded-full opacity-20 blur-2xl" />

      <div className={cn("relative z-20", className)}>{children}</div>
    </div>
  );
};

export default Background;
