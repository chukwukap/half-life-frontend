"use client";

import { Button } from "@/components/ui/button";

/**
 * Hero section displaying the featured token with a gradient background
 */
export const HeroSection = () => {
  return (
    <div className="relative w-full rounded-xl overflow-hidden bg-gradient-to-br from-[#4F46E5] via-[#5D5FEF] to-[#7B61FF] h-72 md:h-80">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 800 400"
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-20"
        >
          <path
            d="M-100,250 C50,100 250,0 350,150 C450,300 550,250 650,200 C750,150 850,100 950,150"
            fill="none"
            stroke="white"
            strokeWidth="1"
          />
          <path
            d="M-100,300 C50,150 250,50 350,200 C450,350 550,300 650,250 C750,200 850,150 950,200"
            fill="none"
            stroke="white"
            strokeWidth="1"
          />
          <circle cx="200" cy="150" r="90" fill="rgba(255,255,255,0.1)" />
          <circle cx="500" cy="250" r="150" fill="rgba(255,255,255,0.05)" />
          <path
            d="M200,100 L300,200 L100,300"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="1"
            fill="none"
          />
          <polygon
            points="650,50 700,120 600,120"
            fill="rgba(255,255,255,0.1)"
          />
        </svg>
      </div>

      <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-10">
        {/* Token info */}
        <div className="flex items-center gap-2 mb-6">
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
            <div className="w-6 h-6 rounded-full bg-blue-400 flex items-center justify-center">
              <span className="text-white text-xs">Ξ</span>
            </div>
          </div>
          <span className="text-white font-medium">levETH</span>
        </div>

        {/* Progress indicator */}
        <div className="flex items-center gap-1.5 mb-6">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className={`h-1.5 w-1.5 rounded-full ${
                i < 10 ? "bg-green-400" : "bg-white/40"
              }`}
            />
          ))}
        </div>

        {/* Action button */}
        <Button
          variant="default"
          className="bg-blue-500 hover:bg-blue-600 text-white px-8"
        >
          Trade
        </Button>
      </div>
    </div>
  );
};
