import React from "react";

export type PromoBannerProps = {
  image: string;
  title: string;
  description: string;
  buttonText?: string;
  onButtonClick?: () => void;
};

export function PromoBanner({
  image,
  title,
  description,
  buttonText = "Shop Now",
  onButtonClick,
}: PromoBannerProps) {
  return (
    <div
      className="relative overflow-hidden rounded-3xl border border-lime-400 filter backdrop-blur-md shadow-lg bg-gradient-to-tr from-lime-900 via-lime-800/80 to-lime-700/80 p-0"
      style={{
        backgroundImage: `url('${image}'), linear-gradient(to top right, #3f6212 0%, #65a30d 100%)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Decorative blurred gradient orb */}
      <div className="pointer-events-none absolute -top-20 -left-20 h-1/2  w-1/2 rounded-full bg-gradient-to-br from-lime-400/50 via-lime-600/50 to-transparent blur-3xl opacity-60 animate-float-slow z-0" />
      {/* Decorative bottom right orb */}
      <div className="pointer-events-none absolute -bottom-16 -right-16 h-1/2 w-1/2 rounded-full bg-gradient-to-tr from-lime-500/40 via-lime-900/30 to-transparent blur-2xl opacity-40 animate-float-reverse z-0" />

      <div className="relative z-10 grid items-center gap-8 md:grid-cols-2 px-8 py-10">
        <div>
          <h3 className="text-3xl font-extrabold bg-gradient-to-r from-white via-lime-200 to-lime-300 bg-clip-text text-transparent drop-shadow-lg">
            {title}
          </h3>
          <p className="mt-2 text-lg font-medium text-lime-100/90 drop-shadow">
            {description}
          </p>
          <button
            className="mt-8 px-6 py-3 rounded-full bg-gradient-to-r from-lime-400 via-lime-500 to-lime-600 text-white font-semibold shadow-lg hover:from-lime-500 hover:via-lime-600 hover:to-lime-600 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-lime-300"
            onClick={onButtonClick}
            type="button"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
