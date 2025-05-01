"use client";

import { TokenData } from "@/lib/types";
import { cn } from "@/lib/utils";
import Image from "next/image";

/**
 * Single token card component exactly matching the UI design
 */
export const TokenCard = ({ token }: { token: TokenData }) => {
  // Different colors based on life index percentage
  const getTokenColor = (lifeIndexPercent: number) => {
    if (lifeIndexPercent >= 80) {
      return "bg-red-500"; // High life index
    } else if (lifeIndexPercent >= 50) {
      return "bg-amber-500"; // Medium life index
    } else {
      return "bg-green-500"; // Low life index
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 h-full">
      {/* Top section with icon and name */}
      <div className="flex mb-3">
        <div
          className={cn(
            "w-8 h-8 rounded-full overflow-hidden flex items-center justify-center mr-3",
            token.iconColor || "bg-blue-100"
          )}
        >
          {token.iconSrc ? (
            <Image
              src={token.iconSrc}
              width={24}
              height={24}
              alt={token.fullName}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-sm font-semibold">
              {token.fullName.substring(0, 1)}
            </span>
          )}
        </div>
        <div>
          <h3 className="font-bold text-sm">{token.symbol}</h3>
          <p className="text-xs text-gray-500">{token.fullName}</p>
        </div>
      </div>

      {/* Price row */}
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-start">
          <span className="text-xl font-bold">{token.price}</span>
          <span className="text-xs text-blue-600 font-bold mt-1 ml-0.5">
            LI
          </span>
        </div>
        <div
          className={cn(
            "px-3 py-1 rounded-full text-sm",
            token.change24h > 0
              ? "bg-green-50 text-green-500"
              : "bg-red-50 text-red-500"
          )}
        >
          {token.change24h > 0 ? "+" : ""}
          {token.change24h}%
        </div>
      </div>

      {/* Life index section */}
      <div>
        <div className="flex justify-between mb-1.5">
          <span className="text-sm text-gray-500">Life Index</span>
          <span className="text-sm text-gray-500">
            {token.lifeIndexPercent}%
          </span>
        </div>

        {/* Life index dots */}
        <div className="flex gap-[2px]">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={cn(
                "h-2 w-full rounded-full",
                i < (token.lifeIndexPercent * 20) / 100
                  ? getTokenColor(token.lifeIndexPercent)
                  : "bg-gray-200"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
