import React from "react";
import Image from "next/image";
import { FavoriteIcon, TrendingUpIcon } from "@/components/icons";

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
 * TokenHeader - Updated for 2025 UI, pixel-perfect and accessible.
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
      className="flex justify-between items-center w-full bg-white rounded-full px-8 py-4 mb-8 border border-[#E9EAEC] shadow-none"
      role="region"
      aria-label="Token header"
    >
      {/* Left: Avatar, name, subtitle, and favorite icon */}
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <div className="relative w-14 h-14">
          <Image
            src={logoUrl}
            alt={name}
            width={56}
            height={56}
            className="rounded-full border border-[#E9EAEC]"
            priority
          />
        </div>
        {/* Name, subtitle, and life index */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-2">
            <span className="text-[22px] font-extrabold text-[#181A20] leading-[1.1]">
              {name}
            </span>
            {/* Life index with yellow icon and superscript */}
            <span className="flex items-center text-[#FFD600] font-bold text-[18px] ml-1">
              <TrendingUpIcon className="w-5 h-5 mr-1 text-[#FFD600]" />
              {lifeIndex}
              <sup className="text-xs ml-0.5 align-super">A</sup>
            </span>
          </div>
          <span className="text-[#7D8FB3] text-[15px] leading-[1.1] font-medium">
            {subtitle}
          </span>
        </div>
        {/* Favorite/star icon with blue border and subtle shadow */}
        <div className="ml-4 flex items-center justify-center w-10 h-10 rounded-full bg-white border-2 border-[#335CFF] shadow-[0_0_0_4px_#E5EDFF]">
          <FavoriteIcon className="w-6 h-6 text-[#335CFF]" />
        </div>
      </div>
      {/* Right: Stats row */}
      <div className="flex items-center gap-8">
        <div className="flex flex-col items-center min-w-[110px]">
          <span className="text-[#7D8FB3] text-sm font-medium">
            Open trades
          </span>
          <span className="text-lg font-extrabold text-[#181A20]">
            ${openTraders.toLocaleString()}
          </span>
        </div>
        <div className="flex flex-col items-center min-w-[110px]">
          <span className="text-[#7D8FB3] text-sm font-medium">Volume</span>
          <span className="text-lg font-extrabold text-[#181A20]">
            {volume}
          </span>
        </div>
        <div className="flex flex-col items-center min-w-[110px]">
          <span className="text-[#7D8FB3] text-sm font-medium">Funding</span>
          <span className="text-lg font-extrabold text-[#05CD99]">
            {funding}
          </span>
        </div>
        <div className="flex flex-col items-center min-w-[110px]">
          <span className="text-[#7D8FB3] text-sm font-medium">Cooldown</span>
          <span className="text-lg font-extrabold text-[#181A20]">
            {cooldown}
          </span>
        </div>
      </div>
    </section>
  );
};

export default TokenHeader;
