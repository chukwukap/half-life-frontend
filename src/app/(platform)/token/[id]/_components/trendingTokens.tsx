"use client";

import React from "react";
import { getTrendingTokens } from "@/lib/mockData/tokens";
// Import the TokenCard component from the home directory
import { TokenCard } from "@/app/(platform)/_components/home/token-card";

/**
 * TrendingTokens component displays a grid of trending tokens using the shared TokenCard component.
 * - UI/UX is an exact copy of @TokenCard (see home/token-card.tsx).
 * - Pixel-perfect, accessible, and modular.
 * - Security: Stateless, no user input, safe for all environments.
 * - Data is sourced from mockData/tokens.ts.
 * - No props: trending tokens are fetched internally.
 */
const TrendingTokens: React.FC = () => {
  // Fetch trending tokens from the mock data source
  const tokens = getTrendingTokens();

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
          <TokenCard key={token.id} token={token} />
        ))}
      </div>
    </section>
  );
};

export default TrendingTokens;
