"use client";

import React from "react";
import { TokenCard } from "./token-card";
import { TrendingUpIcon, FavoriteIcon } from "@/components/icons";
import { PositionsCard } from "./positions-card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import mockTokens from "@/lib/mockData/tokens";
import Link from "next/link";

/**
 * DashboardGrid - Merges the token grid (without tablist) and positions card into a single flex/grid container.
 * The tablist sits above both columns. The left column is the token cards grid (TabsContent only), the right is the positions card.
 * Both columns are h-full and perfectly aligned. Uses mockTokens and TokenCard. Imports FireIcon for header.
 * Security: Stateless, no user input, safe for all environments.
 */
const DashboardGrid: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState("gainers");
  const tokens = mockTokens;

  return (
    <section className="w-full">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        {/* Tablist header above both columns */}
        <div className="flex items-center gap-6 mb-4">
          <TabsList className="bg-transparent w-auto p-0 h-auto gap-4">
            <TabsTrigger
              value="gainers"
              className={`text-[#525866] data-[state=active]:bg-white data-[state=active]:text-primary px-4 py-2 rounded-full flex gap-2 items-center data-[state=active]:border data-[state=active]:border-border ${
                activeTab === "gainers"
                  ? "bg-white text-[#335CFF] border border-[#E9EAEC]"
                  : ""
              }`}
            >
              <TrendingUpIcon className="text-primary" />
              <span className="font-medium">Top gainers</span>
            </TabsTrigger>
            <TabsTrigger
              value="favourites"
              className={`bg-transparent hover:bg-gray-50 data-[state=active]:bg-white px-4 py-2 rounded-full flex gap-2 items-center data-[state=active]:border data-[state=active]:border-border ${
                activeTab === "favourites"
                  ? "bg-white text-[#335CFF] border border-[#E9EAEC]"
                  : ""
              }`}
            >
              <FavoriteIcon className="text-gray-500" />
              <span className="font-medium">Favorites</span>
            </TabsTrigger>
          </TabsList>
        </div>
        {/* Main grid: token cards (left) and positions card (right) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 min-h-[600px]">
          {/* Token cards grid - left */}
          <div className="md:col-span-7 h-full flex flex-col">
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {(activeTab === "gainers"
                ? tokens.slice(0, 9)
                : tokens.slice(0, 3)
              ).map((token) => (
                <Link
                  href={`/token/${token.id}`}
                  key={token.id}
                  className="block h-full"
                >
                  <TokenCard token={token} />
                </Link>
              ))}
            </div>
          </div>
          {/* Positions card - right */}
          <div className="md:col-span-5 h-full flex flex-col">
            <PositionsCard />
          </div>
        </div>
      </Tabs>
    </section>
  );
};

export default DashboardGrid;
