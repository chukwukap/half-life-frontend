"use client";

import { Button } from "@/components/ui/button";

/**
 * Interface for trending token data
 */
interface TrendingToken {
  id: string;
  name: string;
  bgColor: string;
}

/**
 * Component for a single trending token card
 */
const TrendingTokenCard = ({ token }: { token: TrendingToken }) => {
  return (
    <div
      className={`rounded-xl p-4 relative overflow-hidden ${token.bgColor} min-w-[200px]`}
    >
      <div className="flex flex-col h-full justify-between">
        <div className="mb-16">
          <h3 className="text-white text-lg font-semibold">{token.name}</h3>
        </div>
        <div className="flex justify-between items-center">
          <Button className="bg-black/20 hover:bg-black/30 text-white text-xs px-4 py-1 h-auto rounded-md">
            Trade
          </Button>
        </div>
      </div>
    </div>
  );
};

/**
 * Trending section component showing scrollable trending tokens
 */
export const TrendingSection = () => {
  const trendingTokens: TrendingToken[] = [
    {
      id: "leveth1",
      name: "LevETH",
      bgColor: "bg-indigo-600",
    },
    {
      id: "leveth2",
      name: "LevETH",
      bgColor: "bg-red-600",
    },
  ];

  return (
    <div className="mb-6 lg:hidden">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-5 h-5 rounded-full bg-purple-500 flex items-center justify-center">
          <span className="text-white text-xs">🔥</span>
        </div>
        <h3 className="font-medium">Trending</h3>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-2 -mx-4 px-4">
        {trendingTokens.map((token) => (
          <TrendingTokenCard key={token.id} token={token} />
        ))}
      </div>
    </div>
  );
};
