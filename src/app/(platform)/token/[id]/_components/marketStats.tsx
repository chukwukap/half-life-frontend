"use client";

import { FC } from "react";
import { BarChart3 } from "lucide-react";

interface MarketStatsProps {
  marketCap: string;
  volume24h: string;
}

const MarketStats: FC<MarketStatsProps> = ({ marketCap, volume24h }) => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <div className="p-4 flex items-center gap-2 border-b">
        <BarChart3 className="h-5 w-5" />
        <span className="font-medium">Market Stats</span>
      </div>

      <div className="p-4">
        <div className="flex justify-between mb-4">
          <span className="text-gray-500">Market Cap</span>
          <span className="font-medium">{marketCap}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">24h Volume</span>
          <span className="font-medium">{volume24h}</span>
        </div>
      </div>
    </div>
  );
};

export default MarketStats;
