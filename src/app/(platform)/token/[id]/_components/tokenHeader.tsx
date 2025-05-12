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
      className="flex justify-between items-center w-full h-20 bg-white rounded-full px-6  mb-8 shadow-none border border-[#E9EAEC] py-3"
      role="region"
      aria-label="Token header"
    >
      {/* Left: Avatar, name, subtitle, and star icon */}
      <div className="flex items-center gap-2">
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
        <div className="ml-3 flex items-center justify-center w-10 h-10 rounded-full bg-[#F5F8FF] border border-[#E9EAEC] shadow-[0_0_0_4px_#E5EDFF]">
          <FavoriteIcon className="w-6 h-6 text-[#3772FF]" />
        </div>
      </div>
      {/* Right: Life Index and stats */}
      <div className="flex items-center">
        <div className="flex flex-1 gap-16">
          {/* Open trades with green/red ring */}
          <div className="flex gap-2 min-w-[110px]">
            <div className="inline-flex items-center justify-center">
              <OpenTrades className="w-6 h-6" />
            </div>
            <div className="flex flex-col gap-1 justify-center">
              <span className="text-[#7D8FB3] text-sm font-medium">
                Open trades
              </span>
              <span className="text-lg font-extrabold text-[#181A20]">
                ${openTraders.toLocaleString()}
              </span>
            </div>
          </div>
          {/* Volume */}
          <div className="flex flex-col  min-w-[110px]">
            <span className="text-[#7D8FB3] text-sm font-medium mb-1">
              Volume
            </span>
            <span className="text-lg font-extrabold text-[#181A20]">
              {volume}
            </span>
          </div>
          {/* Funding */}
          <div className="flex flex-col  min-w-[110px]">
            <span className="text-[#7D8FB3] text-sm font-medium mb-1">
              Funding
            </span>
            <span className="text-lg font-extrabold text-[#05CD99]">
              {funding}
            </span>
          </div>
          {/* Cooldown */}
          <div className="flex flex-col min-w-[110px]">
            <span className="text-[#7D8FB3] text-sm font-medium mb-1">
              Cooldown
            </span>
            <span className="text-lg font-extrabold text-[#181A20]">
              {cooldown}
            </span>
          </div>
        </div>
        {/* Life Index */}
        <div className="flex flex-col gap-2 text-[#7D8FB3]">
          <div className="flex justify-between items-center">
            <span className=" text-sm font-medium">Life Index</span>
            <span className=" text-lg ">{lifeIndex}%</span>
          </div>

          {/* Use IndexBar for the horizontal bar */}
          <div className="">
            <IndexBar
              value={lifeIndex}
              totalBars={20}
              getColor={() => "bg-[#05CD99]"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenHeader;
