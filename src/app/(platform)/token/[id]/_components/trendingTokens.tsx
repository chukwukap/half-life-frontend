"use client";

import React from "react";
import { getTrendingTokens } from "@/lib/mockData/tokens";
// Import the TokenCard component for consistent UI/UX
import { TokenCard } from "../../_components/tokenCard";

/**
 * TrendingTokens component displays a grid of trending tokens.
 * - Uses the TokenCard component for each token (ensures pixel-perfect, accessible, and modular UI).
 * - Security: Stateless, no user input, safe for all environments.
 * - Data is sourced from mockData/tokens.ts.
 * - No props: trending tokens are fetched internally.
 */
const TrendingTokens: React.FC = () => {
  // Fetch trending tokens from the mock data source
  const tokens = getTrendingTokens();

  // Map TokenData to Token type for TokenCard compatibility
  const tokensForCard = tokens.map((token) => ({
    id: token.id,
    name: token.fullName,
    symbol: token.symbol,
    price: token.price,
    change24h: token.change24h,
    imageUrl: token.iconSrc || "",
  }));

  // No-op handler for onSelect, as trending tokens are not selectable in this context
  const handleSelect = () => {};

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
        {tokensForCard.map((token) => (
          // <div
          //   key={token.id}
          //   tabIndex={0}
          //   aria-label={`${token.name} (${token.symbol}) card`}
          //   className="transition"
          // >
          // {/* Use TokenCard for each trending token */}
          <TokenCard key={token.id} token={token} onSelect={handleSelect} />
          // </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingTokens;
