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

interface TradingCardProps {
  token: TokenData;
}

/**
 * TradingCard component displays token information with a progress bar
 * and trade action button in a clean, modern design
 */
const TradingCard = ({ token }: TradingCardProps) => {
  // Calculate progress for the progress bar (25 segments to match design)
  const totalDots = 25;
  const filledDots = Math.floor((token.progress / 100) * totalDots);

  return (
    <div className="bg-white rounded-[20px] py-6 px-7 w-full max-w-[640px] flex items-center justify-between shadow-sm">
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
        <span className="text-black font-semibold text-2xl">{token.name}</span>
      </div>

      {/* Life Index value */}
      <div className="font-medium text-2xl whitespace-nowrap">
        {token.price.toFixed(2)}
        <sup className="text-sm font-normal text-[#335CFF] ml-0.5">LI</sup>
      </div>

      {/* Progress dots */}
      <div className="flex items-center gap-[3px] mx-8">
        {Array.from({ length: totalDots }).map((_, i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full ${
              i < filledDots ? "bg-[#05CD99]" : "bg-[#E9EAEC]"
            }`}
          />
        ))}
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

export default TradingCard;
