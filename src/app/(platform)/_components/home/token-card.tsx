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
 * Single token card component exactly matching the UI design
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

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 h-full">
      {/* Top section with icon and name */}
      <div className="flex mb-3">
        <div
          className={cn(
            "w-12 h-12 rounded-full overflow-hidden flex items-center justify-center mr-3",
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
            <span className="text-lg font-semibold">
              {token.name.substring(0, 1)}
            </span>
          )}
        </div>
        <div>
          <h3 className="font-bold text-lg">{token.name}</h3>
          <p className="text-sm text-gray-500">{token.fullName}</p>
        </div>
      </div>

      {/* Price row */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start">
          <span className="text-3xl font-bold">{token.price}</span>
          <span className="text-xs text-blue-600 font-bold mt-1 ml-0.5">
            ᴸᴵ
          </span>
        </div>
        <div
          className={cn(
            "px-3 py-1 rounded-full text-sm",
            token.change.startsWith("+")
              ? "bg-green-50 text-green-500"
              : "bg-red-50 text-red-500"
          )}
        >
          {token.change}
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
