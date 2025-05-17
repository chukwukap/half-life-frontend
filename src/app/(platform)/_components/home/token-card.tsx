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
  // Determine color for lifeIndex and change
  const getLifeIndexColor = (value: number) => {
    if (value >= 100) return "bg-green-100 text-green-600";
    if (value >= 50) return "bg-green-100 text-green-600";
    if (value > 0) return "bg-yellow-100 text-yellow-600";
    return "bg-red-100 text-red-600";
  };
  const getChangeColor = (value: number) => {
    if (value > 0) return "bg-green-100 text-green-600";
    if (value < 0) return "bg-red-100 text-red-600";
    return "bg-gray-100 text-gray-600";
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
          className={`flex items-center px-3 py-2 rounded-3xl font-semibold text-sm ${getLifeIndexColor(
            token.lifeIndex
          )}`}
          aria-label="Life Index"
        >
          {/* Use Medics icon instead of SVG for life index */}
          <Medics className="mr-1" />
          {token.lifeIndex} <sup className="text-xs ml-1 align-baseline">A</sup>
        </div>
        <div
          className={`px-3 py-2 rounded-3xl font-semibold text-sm ${getChangeColor(
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
