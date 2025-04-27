"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TokenCard, TokenData } from "./token-card";
import { TrendingUpIcon, FavoriteIcon } from "@/components/icons";
import Link from "next/link";

/**
 * Token grid component that exactly matches the UI design
 */
export const TokenGrid = () => {
  // Token data with exact values from the UI design
  const tokens: TokenData[] = [
    {
      id: "doge",
      name: "DOGE",
      fullName: "Dogecoin",
      price: "3.21",
      change: "+8.1%",
      lifeIndex: 80,
      lifeIndexPercent: 80,
      iconColor: "bg-yellow-100",
    },
    {
      id: "wif",
      name: "WIF",
      fullName: "dogwifhat",
      price: "3.21",
      change: "+8.1%",
      lifeIndex: 43,
      lifeIndexPercent: 43,
      iconColor: "bg-amber-100",
    },
    {
      id: "floki",
      name: "FLOKI",
      fullName: "Floki",
      price: "3.21",
      change: "+8.1%",
      lifeIndex: 24,
      lifeIndexPercent: 24,
      iconColor: "bg-purple-100",
    },
    {
      id: "bonk",
      name: "BONK",
      fullName: "Bonk",
      price: "3.21",
      change: "+8.1%",
      lifeIndex: 80,
      lifeIndexPercent: 80,
      iconColor: "bg-yellow-100",
    },
    {
      id: "wif2",
      name: "WIF",
      fullName: "dogwifhat",
      price: "3.21",
      change: "+8.1%",
      lifeIndex: 43,
      lifeIndexPercent: 43,
      iconColor: "bg-amber-100",
    },
    {
      id: "cat",
      name: "CAT",
      fullName: "Cat Token",
      price: "2.50",
      change: "+7.0%",
      lifeIndex: 33,
      lifeIndexPercent: 33,
      iconColor: "bg-amber-100",
    },
    {
      id: "pepe",
      name: "PEPE",
      fullName: "Pepe Coin",
      price: "1.75",
      change: "+10.3%",
      lifeIndex: 60,
      lifeIndexPercent: 60,
      iconColor: "bg-red-100",
    },
    {
      id: "pepe2",
      name: "PEPE",
      fullName: "Pepe Coin",
      price: "1.75",
      change: "+10.3%",
      lifeIndex: 60,
      lifeIndexPercent: 60,
      iconColor: "bg-red-100",
    },
    {
      id: "pepe3",
      name: "PEPE",
      fullName: "Pepe Coin",
      price: "1.75",
      change: "+10.3%",
      lifeIndex: 60,
      lifeIndexPercent: 60,
      iconColor: "bg-red-100",
    },
  ];

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
              <TrendingUpIcon className="text-blue-600" />
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

        {/* Token cards grid - 3 columns for desktop, 2 for tablet, 1 for mobile */}
        <TabsContent value="gainers" className="mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr">
            {tokens.slice(0, 9).map((token) => (
              <Link
                href={`/token/${token.id}`}
                key={token.id}
                className="h-full"
              >
                <TokenCard token={token} />
              </Link>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="favourites" className="mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr">
            {tokens.slice(0, 3).map((token) => (
              <Link
                href={`/token/${token.id}`}
                key={token.id}
                className="h-full"
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
