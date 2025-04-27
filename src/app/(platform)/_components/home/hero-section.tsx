"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FireIcon } from "@/components/icons";

/**
 * Hero section component displaying featured token information
 * Based on Figma design with purple gradient background
 * Shows token branding (levETH), progress dots, and Trade CTA at bottom left
 */
export const HeroSection = () => {
  return (
    <div className="relative w-full rounded-2xl overflow-hidden bg-gradient-to-r from-indigo-800 to-indigo-600 h-full min-h-[300px] shadow-lg">
      {/* Background pattern overlay - abstract shapes */}
      <div className="absolute inset-0">
        <Image
          src="/assets/img/sample-bg.png"
          alt="Hero background"
          fill
          priority
          className="object-cover opacity-90"
        />
      </div>

      {/* Content container with white card positioned at bottom left */}
      <div className="absolute inset-0 flex items-end justify-start p-8 md:p-10">
        <div className="bg-white rounded-2xl py-3 px-4 w-full max-w-[410px] flex items-center justify-between shadow-lg">
          {/* Token logo and name */}
          <div className="flex items-center gap-2">
            <FireIcon className="w-7 h-7" />
            <span className="text-black font-bold text-xl">levETH</span>
          </div>

          {/* Progress dots */}
          <div className="flex items-center gap-[2px] mx-2">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className={`h-1.5 w-1.5 rounded-full ${
                  i < 16 ? "bg-green-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          {/* Trade button */}
          <Button
            variant="default"
            className="bg-blue-600 hover:bg-blue-700 
                     text-white font-medium 
                     px-6 min-w-[90px] h-10 rounded-full
                     shadow-sm"
          >
            Trade
          </Button>
        </div>
      </div>
    </div>
  );
};
