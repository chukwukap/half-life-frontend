"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FireIcon } from "@/components/icons";
import Link from "next/link";

/**
 * Interface for trending token data
 */
export interface TrendingToken {
  id: string;
  name: string;
  symbol: string;
  icon?: React.ReactNode;
  progress: number; // 0-100 percentage
  maxProgress?: number;
}

interface HeroSectionProps {
  trendingToken?: TrendingToken;
}

/**
 * Hero section component displaying featured token information
 * Based on Figma design with purple gradient background
 * Shows trending token with dynamic data at bottom left
 */
export const HeroSection = ({
  trendingToken = {
    id: "leveth",
    name: "levETH",
    symbol: "LEVETH",
    icon: <FireIcon className="w-7 h-7" />,
    progress: 80, // 16/20 = 80%
    maxProgress: 100,
  },
}: HeroSectionProps) => {
  // Calculate the number of filled progress dots
  const totalDots = 20;
  const filledDots = Math.floor(
    (trendingToken.progress / (trendingToken.maxProgress || 100)) * totalDots
  );

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
            {trendingToken.icon || <FireIcon className="w-7 h-7" />}
            <span className="text-black font-bold text-xl">
              {trendingToken.name}
            </span>
          </div>

          {/* Progress dots */}
          <div className="flex items-center gap-[2px] mx-2">
            {Array.from({ length: totalDots }).map((_, i) => (
              <div
                key={i}
                className={`h-1.5 w-1.5 rounded-full ${
                  i < filledDots ? "bg-green-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          {/* Trade button with link to token page */}
          <Link href={`/token/${trendingToken.id}`}>
            <Button
              variant="default"
              className="bg-blue-600 hover:bg-blue-700 
                       text-white font-medium 
                       px-6 min-w-[90px] h-10 rounded-full
                       shadow-sm"
            >
              Trade
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
