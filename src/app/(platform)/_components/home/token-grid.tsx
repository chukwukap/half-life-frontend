"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TokenCard, TokenData } from "./token-card";
import { TrendingUpIcon, FavoriteIcon } from "@/components/icons";
import Link from "next/link";

/**
 * Token grid component that exactly matches the Figma design
 */
export const TokenGrid = () => {
  // Token data with exact values from the Figma design
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
        <TabsList className="bg-transparent w-auto p-0 h-auto gap-4">
          <TabsTrigger
            value="gainers"
            className="bg-white text-blue-600 data-[state=active]:shadow-sm px-5 py-2.5 rounded-full flex gap-2 items-center border border-gray-100"
          >
            <TrendingUpIcon className="text-blue-600" />
            <span className="font-medium">Top gainers</span>
          </TabsTrigger>
          <TabsTrigger
            value="favourites"
            className="bg-transparent hover:bg-gray-50 data-[state=active]:bg-white data-[state=active]:shadow-sm px-5 py-2.5 rounded-full flex gap-2 items-center data-[state=active]:border border-gray-100"
          >
            <FavoriteIcon className="text-gray-500" />
            <span className="text-gray-600 font-medium">Favourites</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="gainers" className="mt-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {tokens.slice(0, 9).map((token) => (
              <Link
                href={`/token/${token.id}`}
                key={token.id}
                className="block"
              >
                <TokenCard token={token} />
              </Link>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="favourites" className="mt-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {tokens.slice(0, 3).map((token) => (
              <Link
                href={`/token/${token.id}`}
                key={token.id}
                className="block"
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
