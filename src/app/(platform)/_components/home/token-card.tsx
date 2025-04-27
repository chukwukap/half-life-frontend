"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

/**
 * Token information interface
 */
export interface TokenData {
  id: string;
  name: string;
  fullName: string;
  price: string;
  change: string;
  lifeIndex: number;
  lifeIndexPercent: number;
  iconSrc?: string;
  iconColor?: string;
}

/**
 * Single token card component exactly matching the Figma design
 */
export const TokenCard = ({ token }: { token: TokenData }) => {
  // Different colors based on token type for the life index dots
  const getTokenColor = (tokenName: string) => {
    switch (tokenName) {
      case "DOGE":
      case "BONK":
        return "bg-green-500";
      case "WIF":
      case "CAT":
        return "bg-amber-500";
      case "FLOKI":
      case "PEPE":
        return "bg-red-500";
      default:
        return "bg-blue-500";
    }
  };

  // Get text color for change percentage
  const getChangeColor = (change: string) => {
    return change.startsWith("+") ? "text-green-600" : "text-red-500";
  };

  // Get background color for change percentage
  const getChangeBgColor = (change: string) => {
    return change.startsWith("+") ? "bg-green-50" : "bg-red-50";
  };

  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      {/* Token header with icon and name */}
      <div className="flex items-center gap-3 mb-3">
        <div
          className={cn(
            "w-12 h-12 rounded-full overflow-hidden flex items-center justify-center",
            token.iconColor || "bg-blue-100"
          )}
        >
          {token.iconSrc ? (
            <Image
              src={token.iconSrc}
              width={48}
              height={48}
              alt={token.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-sm font-semibold">
              {token.name.substring(0, 1)}
            </span>
          )}
        </div>
        <div>
          <h4 className="font-bold text-lg">{token.name}</h4>
          <p className="text-sm text-gray-500">{token.fullName}</p>
        </div>
      </div>

      {/* Price with superscript and change percentage */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-baseline">
          <span className="text-3xl font-bold">{token.price}</span>
          <span className="text-xs text-blue-600 font-bold ml-0.5 mb-1">
            ᴸᴵ
          </span>
        </div>
        <div
          className={cn(
            "px-2.5 py-1 rounded-full text-sm font-medium",
            getChangeBgColor(token.change),
            getChangeColor(token.change)
          )}
        >
          {token.change}
        </div>
      </div>

      {/* Life index label and percentage */}
      <div className="mb-2">
        <div className="flex justify-between text-sm text-gray-500 mb-1.5">
          <span>Life Index</span>
          <span>{token.lifeIndexPercent}%</span>
        </div>

        {/* Life index dots */}
        <div className="flex gap-[2px]">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={cn(
                "h-2 w-full rounded-full",
                i < (token.lifeIndexPercent * 20) / 100
                  ? getTokenColor(token.name)
                  : "bg-gray-200"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
