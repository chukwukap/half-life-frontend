"use client";

import { Button } from "@/components/ui/button";

/**
 * Interface for trending token data
 */
interface TrendingToken {
  id: string;
  name: string;
  bgColor: string;
  iconUrl?: string;
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

      {/* Background patterns */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 300 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-50,100 C50,50 100,0 150,50 C200,100 250,80 300,60"
            fill="none"
            stroke="white"
            strokeWidth="1"
          />
          <circle cx="60" cy="60" r="30" fill="rgba(255,255,255,0.1)" />
        </svg>
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
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 3L14 8L19 9L15.5 13L16.5 18L12 15.5L7.5 18L8.5 13L5 9L10 8L12 3Z"
              fill="white"
            />
          </svg>
        </div>
        <h3 className="font-medium">Trending</h3>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
        {trendingTokens.map((token) => (
          <TrendingTokenCard key={token.id} token={token} />
        ))}
      </div>
    </div>
  );
};
