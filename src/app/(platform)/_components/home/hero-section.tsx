"use client";

import Image from "next/image";
import TrendingCard, { TokenData } from "./trendingCard";

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
    id: "avax",
    name: "AVAX",
    symbol: "AVAX",
    iconSrc: "https://cryptologos.cc/logos/avalanche-avax-logo.png",
    price: 39.75,
    progress: 65,
  },
}: HeroSectionProps) => {
  return (
    <section className="relative w-full rounded-xl overflow-hidden h-full">
      {/* Background pattern overlay */}
      <div className="absolute inset-0">
        <Image
          src="/assets/img/hero-pattern.png"
          alt="Abstract background pattern"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Content container with trading card */}
      <div className="absolute bottom-8 left-8">
        <TrendingCard token={token} />
      </div>
    </section>
  );
};
