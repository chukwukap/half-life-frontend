"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FireIcon } from "@/components/icons";

/**
 * Hero section component displaying featured token information
 * Based on Figma design with purple gradient background
 * Shows token branding (levETH), progress dots, and Trade CTA
 */
export const HeroSection = () => {
  return (
    <div className="relative w-full rounded-2xl overflow-hidden bg-gradient-to-r from-indigo-800 to-indigo-600 h-full min-h-[300px] shadow-lg">
      {/* Background pattern overlay - abstract shapes */}
      <div className="absolute inset-0">
        <Image
          src="/assets/img/hero-bg.png"
          alt="Hero background"
          fill
          priority
          className="object-cover opacity-90"
        />
      </div>

      {/* Content container with proper spacing */}
      <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-10">
        {/* Token card - mimicking the design in the image */}
        <div className="bg-white rounded-2xl p-4 w-full max-w-[400px] mb-6 flex items-center justify-between shadow-lg">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center">
              <FireIcon className="w-6 h-6" />
            </div>
            <span className="text-black font-bold text-2xl">levETH</span>
          </div>

          {/* Progress dots */}
          <div className="flex items-center gap-1">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                  i < 16 ? "bg-green-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          {/* Trade button */}
          <Button
            variant="default"
            className="bg-blue-600 hover:bg-blue-700 
                     text-white font-medium text-base 
                     px-6 py-2 h-10 rounded-full
                     shadow-md transition-all"
          >
            Trade
          </Button>
        </div>
      </div>
    </div>
  );
};
