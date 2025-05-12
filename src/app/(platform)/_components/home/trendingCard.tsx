"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import IndexBar from "../indexBar";

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
  return (
    <div className="bg-white rounded-2xl py-4 px-5 gap-4 md:gap-10 xl:gap-12 flex items-center justify-between ">
      <div className="flex flex-col gap-2 justify-between w-full">
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

        {/* Progress dots replaced with reusable IndexBar */}
        {/* Security: Stateless, no user input, safe for all environments */}
        <IndexBar
          value={token.progress}
          totalBars={30}
          getColor={() => "bg-[#05CD99]"}
        />
      </div>
      {/* Trade button */}
      <Link href={`/trade/${token.id}`}>
        <Button
          variant="default"
          className="bg-[#335CFF] hover:bg-[#2347E2] 
                   text-white font-semibold 
                   px-4 py-3  rounded-full
                    text-sm "
        >
          Trade
        </Button>
      </Link>
    </div>
  );
};

export default TrendingCard;
