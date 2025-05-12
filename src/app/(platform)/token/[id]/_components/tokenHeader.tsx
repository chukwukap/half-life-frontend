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
 * Uses only icons from icons.tsx and IndexBar for the Life Index.
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
    <div
      className="flex items-center w-full bg-white rounded-full px-8 py-4 mb-8"
      role="region"
      aria-label="Token header"
      style={{ boxShadow: "0 0 0 0 #fff" }}
    >
      {/* Left: Avatar, name, subtitle */}
      <div className="flex items-center min-w-[220px]">
        <div className="relative w-12 h-12 mr-4">
          <Image
            src={logoUrl}
            alt={name}
            width={48}
            height={48}
            className="rounded-full"
          />
        </div>
        <div>
          <h1 className="text-[24px] font-bold text-[#181A20] leading-tight">
            {name}
          </h1>
          <p className="text-[#7D8FB3] text-base leading-tight">{subtitle}</p>
        </div>
      </div>
      {/* Star/favorite icon with blue glow */}
      <div className="ml-4 mr-8 flex items-center">
        <span
          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#F5F8FF] border border-[#E9EAEC] shadow-[0_0_0_4px_#E5EDFF]"
          tabIndex={0}
          aria-label="Favorite token"
          role="button"
        >
          <FavoriteIcon className="w-6 h-6" />
        </span>
      </div>
      {/* Center: Stats */}
      <div className="flex flex-1 justify-center gap-12">
        {/* Open trades with green/red ring */}
        <div className="flex flex-col items-center min-w-[110px]">
          <div className="flex items-center mb-1">
            <span className="text-[#7D8FB3] text-sm mr-2">Open trades</span>
            <span className="inline-flex items-center justify-center">
              <OpenTrades className="w-6 h-6" />
            </span>
          </div>
          <span className="text-lg font-bold text-[#181A20]">
            ${openTraders.toLocaleString()}
          </span>
        </div>
        {/* Volume */}
        <div className="flex flex-col items-center min-w-[110px]">
          <span className="text-[#7D8FB3] text-sm mb-1">Volume</span>
          <span className="text-lg font-bold text-[#181A20]">{volume}</span>
        </div>
        {/* Funding */}
        <div className="flex flex-col items-center min-w-[110px]">
          <span className="text-[#7D8FB3] text-sm mb-1">Funding</span>
          <span className="text-lg font-bold text-[#05CD99]">{funding}</span>
        </div>
        {/* Cooldown */}
        <div className="flex flex-col items-center min-w-[110px]">
          <span className="text-[#7D8FB3] text-sm mb-1">Cooldown</span>
          <span className="text-lg font-bold text-[#181A20]">{cooldown}</span>
        </div>
      </div>
      {/* Right: Life Index */}
      <div className="flex items-center min-w-[200px] ml-8">
        <span className="text-[#7D8FB3] text-base mr-2">Life Index</span>
        <span className="text-[#181A20] text-base font-semibold mr-2">
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
    </div>
  );
};

export default TokenHeader;
