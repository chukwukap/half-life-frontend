"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

/**
 * Hero section displaying the featured token with a gradient background
 * and decorative elements for visual appeal
 */
export const HeroSection = () => {
  return (
    <div className="relative w-full rounded-xl overflow-hidden bg-gradient-to-br from-indigo-500 via-indigo-600 to-purple-700 h-72">
      {/* Background pattern overlay */}
      <div className="absolute inset-0">
        <Image
          src="/assets/img/sample-bg.png"
          alt="Hero background"
          fill
          priority
          className="object-cover opacity-30"
        />
      </div>

      {/* Content container */}
      <div className="absolute inset-0 flex flex-col justify-center items-start p-8">
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
          className="bg-blue-500 hover:bg-blue-600 text-white px-8 rounded-md"
        >
          Trade
        </Button>
      </div>
    </div>
  );
};
