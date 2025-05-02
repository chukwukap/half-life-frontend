"use client";

import Image from "next/image";
import TradingCard, { TokenData } from "./tradingCard";

interface HeroSectionProps {
  token?: TokenData;
}

/**
 * Hero section component displaying featured token information
 * Shows a gradient background with abstract pattern and trading card
 * positioned at the bottom left
 */
export const HeroSection = ({
  token = {
    id: "zora",
    name: "ZORA",
    symbol: "ZORA",
    iconSrc: "/assets/img/tokens/zora.png",
    price: 3.21,
    progress: 65,
  },
}: HeroSectionProps) => {
  return (
    <section className="relative w-full rounded-[20px] overflow-hidden bg-gradient-to-br from-[#4A1FB8] to-[#7517F8] h-[320px]">
      {/* Background pattern overlay */}
      <div className="absolute inset-0">
        <Image
          src="/assets/img/hero-pattern.png"
          alt="Abstract background pattern"
          fill
          priority
          className="object-cover opacity-20"
        />
      </div>

      {/* Content container with trading card */}
      <div className="absolute bottom-8 left-8">
        <TradingCard token={token} />
      </div>
    </section>
  );
};
