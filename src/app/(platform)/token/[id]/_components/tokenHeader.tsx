import React from "react";
import Image from "next/image";
import IndexBar from "../../../_components/indexBar";
import { FavoriteIcon, OpenTrades } from "@/components/icons";

/**
 * Props for the TokenHeader component
 */
interface TokenHeaderProps {
  logoUrl: string;
  name: string;
  subtitle: string;
  openTraders: number;
  volume: string;
  funding: string;
  cooldown: string;
  lifeIndex: number;
}

/**
 * TokenHeader - Pixel-perfect, modular, and accessible token header for the single token page.
 * Security: Stateless, no user input, safe for all environments.
 */
const TokenHeader: React.FC<TokenHeaderProps> = ({
  logoUrl,
  name,
  subtitle,
  openTraders,
  volume,
  funding,
  cooldown,
  lifeIndex,
}) => {
  return (
    <section
      className="flex items-center w-full bg-white rounded-full px-6 py-3 mb-8 shadow-none"
      role="region"
      aria-label="Token header"
      style={{ minHeight: 80 }}
    >
      {/* Left: Avatar, name, subtitle, and star icon */}
      <div className="flex items-center min-w-[260px] gap-4">
        {/* Avatar */}
        <div className="relative w-12 h-12">
          <Image
            src={logoUrl}
            alt={name}
            width={48}
            height={48}
            className="rounded-full border border-[#E9EAEC]"
            priority
          />
        </div>
        {/* Name and subtitle */}
        <div className="flex flex-col justify-center">
          <span className="text-[22px] font-extrabold text-[#181A20] leading-[1.1]">
            {name}
          </span>
          <span className="text-[#7D8FB3] text-[16px] leading-[1.1] font-medium">
            {subtitle}
          </span>
        </div>
        {/* Star/favorite icon with blue glow */}
        <button
          className="ml-3 flex items-center justify-center w-10 h-10 rounded-full bg-[#F5F8FF] border border-[#E9EAEC] shadow-[0_0_0_4px_#E5EDFF] focus:outline-none focus:ring-2 focus:ring-blue-300"
          tabIndex={0}
          aria-label="Favorite token"
          type="button"
        >
          <FavoriteIcon className="w-6 h-6 text-[#3772FF]" />
        </button>
      </div>
      {/* Center: Stats */}
      <div className="flex flex-1 justify-center gap-16">
        {/* Open trades with green/red ring */}
        <div className="flex flex-col items-center min-w-[110px]">
          <div className="flex items-center mb-1">
            <span className="text-[#7D8FB3] text-[15px] font-medium mr-2">
              Open trades
            </span>
            <span className="inline-flex items-center justify-center">
              <OpenTrades className="w-6 h-6" />
            </span>
          </div>
          <span className="text-[20px] font-bold text-[#181A20]">
            ${openTraders.toLocaleString()}
          </span>
        </div>
        {/* Volume */}
        <div className="flex flex-col items-center min-w-[110px]">
          <span className="text-[#7D8FB3] text-[15px] font-medium mb-1">
            Volume
          </span>
          <span className="text-[20px] font-bold text-[#181A20]">{volume}</span>
        </div>
        {/* Funding */}
        <div className="flex flex-col items-center min-w-[110px]">
          <span className="text-[#7D8FB3] text-[15px] font-medium mb-1">
            Funding
          </span>
          <span className="text-[20px] font-bold text-[#05CD99]">
            {funding}
          </span>
        </div>
        {/* Cooldown */}
        <div className="flex flex-col items-center min-w-[110px]">
          <span className="text-[#7D8FB3] text-[15px] font-medium mb-1">
            Cooldown
          </span>
          <span className="text-[20px] font-bold text-[#181A20]">
            {cooldown}
          </span>
        </div>
      </div>
      {/* Right: Life Index */}
      <div className="flex items-center min-w-[210px] ml-8 justify-end">
        <span className="text-[#7D8FB3] text-[16px] font-medium mr-2">
          Life Index
        </span>
        <span className="text-[#181A20] text-[16px] font-semibold mr-2">
          {lifeIndex}%
        </span>
        {/* Use IndexBar for the horizontal bar */}
        <div className="w-[120px]">
          <IndexBar
            value={lifeIndex}
            totalBars={20}
            getColor={() => "bg-[#05CD99]"}
          />
        </div>
      </div>
    </section>
  );
};

export default TokenHeader;
