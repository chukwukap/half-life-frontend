import React from "react";
import Image from "next/image";
import { FireIcon } from "@/components/icons";
import IndexBar from "@/app/(platform)/_components/indexBar";

// Type for trending token entry
export interface TrendingToken {
  logoUrl: string;
  name: string;
  subtitle: string;
  lifeIndex: number; // 0-100
}

interface TrendingTokensProps {
  tokens: TrendingToken[];
}

/**
 * TrendingTokens component displays a grid of trending tokens.
 * - Pixel-perfect, accessible, and modular.
 * - Ready for real data integration.
 * - Security: Stateless, no user input, safe for all environments.
 * - Matches Figma design exactly.
 */
const TrendingTokens: React.FC<TrendingTokensProps> = ({ tokens }) => {
  // Custom color logic for IndexBar to match the design
  const getLifeIndexColor = (value: number) => {
    if (value >= 80) return "bg-green-500";
    if (value >= 50) return "bg-amber-400";
    return "bg-red-500";
  };

  return (
    <section
      className="bg-white rounded-[24px] p-4 border border-[#E9EAEC] shadow-none"
      aria-label="Trending tokens"
    >
      {/* Header with FireIcon and title */}
      <div className="flex items-center mb-4">
        <FireIcon className="w-5 h-5 mr-2 text-[#335CFF]" aria-hidden="true" />
        <span className="font-semibold text-[17px] leading-[22px] text-[#181A20]">
          Trending tokens
        </span>
      </div>
      {/* 2-column grid, gap matches Figma */}
      <div className="grid grid-cols-2 gap-x-3 gap-y-3">
        {tokens.map((token, idx) => (
          <div
            key={token.name + idx}
            className="bg-white border border-[#E9EAEC] rounded-[16px] px-4 py-3 flex flex-col min-h-[120px] shadow-none"
            tabIndex={0}
            aria-label={`${token.name} trending token card`}
          >
            {/* Token logo and name */}
            <div className="flex items-center mb-2">
              <Image
                src={token.logoUrl}
                alt={token.name}
                width={40}
                height={40}
                className="rounded-full mr-3 border border-[#F1F5F9] bg-white"
                priority
              />
              <div>
                <div className="font-extrabold text-[16px] leading-[20px] text-[#181A20] mb-0.5">
                  {token.name}
                </div>
                <div className="text-[#7D8FB3] text-[13px] leading-[16px] font-normal">
                  {token.subtitle}
                </div>
              </div>
            </div>
            {/* Life Index label and value */}
            <div className="flex items-center mb-1.5">
              <span className="text-[#7D8FB3] text-xs font-medium mr-1">
                Life Index
              </span>
              <span className="text-[#181A20] text-xs font-semibold">
                {token.lifeIndex}%
              </span>
            </div>
            {/* Life Index bar: 10 segments, colored by value */}
            <IndexBar
              value={token.lifeIndex}
              totalBars={20}
              className="w-full"
              barClassName="h-[8px] w-[12px] rounded-full"
              getColor={getLifeIndexColor}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingTokens;
