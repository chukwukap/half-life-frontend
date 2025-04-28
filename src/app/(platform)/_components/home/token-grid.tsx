"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TokenCard, TokenData } from "./token-card";
import { TrendingUpIcon, FavoriteIcon } from "@/components/icons";
import Link from "next/link";
import mockTokens from "@/lib/mockData/tokens";

/**
 * Token grid component that exactly matches the UI design
 */
export const TokenGrid = () => {
  // Token data with exact values from the UI design
  const tokens: TokenData[] = mockTokens;

  return (
    <div>
      <Tabs defaultValue="gainers">
        {/* Tab navigation */}
        <div className="mb-4">
          <TabsList className="bg-transparent w-auto p-0 h-auto gap-4">
            <TabsTrigger
              value="gainers"
              className="data-[state=active]:bg-white data-[state=active]:text-blue-600 px-4 py-2 rounded-full flex gap-2 items-center data-[state=active]:shadow-sm data-[state=active]:border data-[state=active]:border-gray-100"
            >
              <TrendingUpIcon className="text-primary" />
              <span className="font-medium">Top gainers</span>
            </TabsTrigger>
            <TabsTrigger
              value="favourites"
              className="text-gray-600 bg-transparent hover:bg-gray-50 data-[state=active]:bg-white px-4 py-2 rounded-full flex gap-2 items-center data-[state=active]:shadow-sm data-[state=active]:border data-[state=active]:border-gray-100"
            >
              <FavoriteIcon className="text-gray-500" />
              <span className="font-medium">Favourites</span>
            </TabsTrigger>
          </TabsList>
        </div>

        {/* Token cards grid - with consistent aspect ratio */}
        <TabsContent value="gainers" className="mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tokens.slice(0, 9).map((token) => (
              <Link
                href={`/token/${token.id}`}
                key={token.id}
                className="block h-full"
              >
                <TokenCard token={token} />
              </Link>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="favourites" className="mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tokens.slice(0, 3).map((token) => (
              <Link
                href={`/token/${token.id}`}
                key={token.id}
                className="block h-full"
              >
                <TokenCard token={token} />
              </Link>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
