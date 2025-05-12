import React from "react";
import Image from "next/image";

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
 */
const TrendingTokens: React.FC<TrendingTokensProps> = ({ tokens }) => {
  // Helper to determine bar color based on lifeIndex
  const getBarColor = (value: number) => {
    if (value >= 60) return "bg-[#05CD99]"; // green
    if (value >= 30) return "bg-[#FFB800]"; // yellow
    return "bg-[#FF5A5A]"; // red
  };

  return (
    <section
      className="bg-white rounded-[20px] p-4 shadow-sm border border-[#E9EAEC]"
      aria-label="Trending tokens"
    >
      <div className="flex items-center mb-4">
        {/* Icon for trending tokens */}
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2"
          aria-hidden="true"
        >
          <path
            d="M10 18.3333C14.6024 18.3333 18.3334 14.6024 18.3334 10C18.3334 5.39763 14.6024 1.66667 10 1.66667C5.39765 1.66667 1.66669 5.39763 1.66669 10C1.66669 14.6024 5.39765 18.3333 10 18.3333Z"
            stroke="#335CFF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 6.66667V10L12.5 12.5"
            stroke="#335CFF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="font-semibold text-lg text-[#181A20]">
          Trending tokens
        </span>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {tokens.map((token, idx) => (
          <div
            key={token.name + idx}
            className="bg-white border border-[#E9EAEC] rounded-[16px] p-3 flex flex-col items-start"
          >
            <div className="flex items-center mb-2">
              <Image
                src={token.logoUrl}
                alt={token.name}
                width={40}
                height={40}
                className="rounded-full mr-2"
              />
              <div>
                <div className="font-bold text-base text-[#181A20] leading-tight">
                  {token.name}
                </div>
                <div className="text-[#7D8FB3] text-sm leading-tight">
                  {token.subtitle}
                </div>
              </div>
            </div>
            <div className="flex items-center w-full mt-auto">
              <span className="text-[#7D8FB3] text-xs mr-1">Life Index</span>
              <span className="text-[#181A20] text-xs font-semibold mr-2">
                {token.lifeIndex}%
              </span>
            </div>
            {/* Life Index bar: 10 segments, colored by value */}
            <div className="flex gap-1 mt-1">
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={i}
                  className={`h-2 w-4 rounded-full ${
                    i < Math.round(token.lifeIndex / 10)
                      ? getBarColor(token.lifeIndex)
                      : "bg-[#E9EAEC]"
                  }`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingTokens;
