import React from "react";
import { TokenData } from "@/lib/types";
import Image from "next/image";

import { Medics } from "@/components/icons"; // Import Medics icon

/**
 * TokenCard - Displays a summary card for a cryptocurrency token.
 * Security: Stateless, no user input, safe for all environments.
 * Accessibility: Uses alt text for images and semantic HTML.
 */
export const TokenCard: React.FC<{ token: TokenData }> = ({ token }) => {
  /**
   * Returns the correct color classes for the life index badge.
   * - Green: value > 0 (matches the image, all positive values are green)
   * - Red: value < 0 (matches the image, all negative values are red)
   * - Gray: value === 0 (matches the image, zero is gray)
   */
  const getLifeIndexColor = (value: number) => {
    if (value > 0) return "bg-[#E9FAF1] text-[#19C37D]"; // Green badge
    if (value < 0) return "bg-[#FFF0F0] text-[#FF4747]"; // Red badge
    return "bg-[#F4F4F6] text-[#A1A1AA]"; // Gray badge
  };

  /**
   * Returns the correct color classes for the 24h change badge.
   * - Green: value > 0 (matches the image, all positive values are green)
   * - Red: value < 0 (matches the image, all negative values are red)
   * - Gray: value === 0 (matches the image, zero is gray)
   */
  const getChangeColor = (value: number) => {
    if (value > 0) return "bg-[#E9FAF1] text-[#19C37D]"; // Green badge
    if (value < 0) return "bg-[#FFF0F0] text-[#FF4747]"; // Red badge
    return "bg-[#F4F4F6] text-[#A1A1AA]"; // Gray badge
  };

  return (
    <div
      className="rounded-2xl border border-[#E9EAEC] bg-white p-4 flex flex-col gap-4  transition  min-h-[120px]"
      tabIndex={0}
      aria-label={`${token.fullName} (${token.symbol}) card`}
    >
      {/* Header: Icon, Name, Symbol */}
      <div className="flex items-center gap-3">
        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center border border-[#F2F3F5] ${
            token.iconColor || "bg-gray-100"
          }`}
        >
          {/* Token icon: alt text for accessibility, never user-supplied */}
          {token.iconSrc ? (
            <Image
              width={48}
              height={48}
              src={token.iconSrc}
              alt={`${token.fullName} logo`}
              className="w-10 h-10 rounded-full object-contain"
              loading="lazy"
              draggable="false"
            />
          ) : (
            <span className="text-xl font-bold text-gray-400">
              {token.symbol[0]}
            </span>
          )}
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-lg text-[#181A20] leading-tight">
            {token.symbol}
          </span>
          <span className="text-gray-400 text-sm leading-tight">
            {token.fullName}
          </span>
        </div>
      </div>
      {/* Life Index and Change */}
      <div className="flex items-center justify-between mt-2">
        <div
          className={`flex items-center px-4 py-1 rounded-2xl font-semibold text-sm ${getLifeIndexColor(
            token.lifeIndex
          )}`}
          aria-label="Life Index"
        >
          {/* Use Medics icon instead of SVG for life index */}
          <Medics className="mr-1" />
          {token.lifeIndex}{" "}
          <sup className="text-[10px] ml-1 align-baseline text-gray-900">A</sup>
        </div>
        <div
          className={`px-3.5 py-1 rounded-2xl font-semibold text-xs ${getChangeColor(
            token.change24h
          )}`}
          aria-label="24 hour change"
        >
          {token.change24h > 0 ? "+" : ""}
          {token.change24h.toFixed(1)}%
        </div>
      </div>
    </div>
  );
};
