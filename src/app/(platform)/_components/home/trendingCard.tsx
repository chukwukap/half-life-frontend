"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

/**
 * Interface for token data displayed in the trading card
 */
export interface TokenData {
  id: string;
  name: string;
  symbol: string;
  iconSrc: string;
  price: number;
  progress: number;
}

interface TrendingCardProps {
  token: TokenData;
}

/**
 * TrendingCard component displays token information with a progress bar
 * and trade action button in a clean, modern design
 */
const TrendingCard = ({ token }: TrendingCardProps) => {
  // Calculate progress for the progress bar (25 segments to match design)
  const totalDots = 15;
  const filledDots = Math.floor((token.progress / 100) * totalDots);

  return (
    <div className="bg-white rounded-[20px] py-6 px-7 gap-4 w-full max-w-[640px] flex items-center justify-between shadow-sm">
      <div className="flex flex-col gap-4 justify-between w-full">
        {/* Token logo and name */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-[#F5F6FF] flex items-center justify-center">
            <Image
              src={token.iconSrc}
              alt={token.name}
              width={48}
              height={48}
              className="w-9 h-9 object-contain"
            />
          </div>
          <span className="text-black font-semibold text-2xl">
            {token.name}
          </span>
          {/* Life Index value */}
          <div className="font-medium text-xl flex items-center gap-1 ml-auto">
            {token.price.toFixed(2)}
            <sup className="text-sm font-normal text-[#335CFF]">LI</sup>
          </div>
        </div>

        {/* Progress dots */}
        <div className="flex items-center gap-[3px]">
          {Array.from({ length: totalDots }).map((_, i) => (
            <div
              key={i}
              className={`h-2 w-2 rounded-full ${
                i < filledDots ? "bg-[#05CD99]" : "bg-[#E9EAEC]"
              }`}
            />
          ))}
        </div>
      </div>
      {/* Trade button */}
      <Link href={`/trade/${token.id}`}>
        <Button
          variant="default"
          className="bg-[#335CFF] hover:bg-[#2347E2] 
                   text-white font-semibold 
                   px-10 py-3 h-[52px] rounded-full
                   shadow-sm text-base min-w-[140px]"
        >
          Trade
        </Button>
      </Link>
    </div>
  );
};

export default TrendingCard;
