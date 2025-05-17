"use client";

import React from "react";
import { getTrendingTokens } from "@/lib/mockData/tokens";
import { Medics } from "@/components/icons";
import Image from "next/image";

/**
 * TrendingTokens component displays a grid of trending tokens.
 * - UI/UX is an exact copy of @TokenCard (see home/token-card.tsx).
 * - Pixel-perfect, accessible, and modular.
 * - Security: Stateless, no user input, safe for all environments.
 * - Data is sourced from mockData/tokens.ts.
 * - No props: trending tokens are fetched internally.
 */
const TrendingTokens: React.FC = () => {
  // Fetch trending tokens from the mock data source
  const tokens = getTrendingTokens();

  // Color logic copied from TokenCard
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
    <section
      className="bg-white rounded-[24px] p-4 border border-[#E9EAEC] shadow-none"
      aria-label="Trending tokens"
    >
      {/* Header */}
      <div className="flex items-center mb-4">
        <span className="font-semibold text-[17px] leading-[22px] text-[#181A20]">
          Trending tokens
        </span>
      </div>
      {/* 2-column grid, gap matches Figma */}
      <div className="grid grid-cols-2 gap-x-3 gap-y-3">
        {tokens.map((token) => (
          <div
            key={token.id}
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
                {/* Use Medics icon for life index */}
                <Medics className="mr-1" />
                {token.lifeIndex}{" "}
                <sup className="text-xs ml-1 align-baseline">A</sup>
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
        ))}
      </div>
    </section>
  );
};

export default TrendingTokens;
