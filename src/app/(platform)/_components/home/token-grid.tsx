"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

/**
 * Token information interface
 */
interface TokenData {
  id: string;
  name: string;
  fullName: string;
  price: string;
  change: string;
  lifeIndex: number;
  lifeIndexPercent: number;
  iconSrc?: string;
}

/**
 * Single token card component
 * Displays token information, price, and life index matching the design
 */
const TokenCard = ({ token }: { token: TokenData }) => {
  // Different colors based on token type
  const getTokenColor = (tokenName: string) => {
    switch (tokenName) {
      case "DOGE":
      case "BONK":
        return "bg-green-500";
      case "WIF":
      case "CAT":
        return "bg-amber-500";
      case "FLOKI":
      case "PEPE":
        return "bg-red-500";
      default:
        return "bg-blue-500";
    }
  };

  return (
    <div className="bg-white dark:bg-card rounded-xl p-5 overflow-hidden border border-gray-100 dark:border-gray-800">
      {/* Token header with icon, name and price */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
            {token.iconSrc ? (
              <Image
                src={token.iconSrc}
                width={48}
                height={48}
                alt={token.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-sm font-semibold">
                {token.name.substring(0, 2)}
              </span>
            )}
          </div>
          <div>
            <h4 className="font-bold text-lg">{token.name}</h4>
            <p className="text-sm text-gray-500">{token.fullName}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-sm font-medium inline-block">
            {token.change}
          </div>
        </div>
      </div>

      {/* Price with LI superscript */}
      <div className="flex items-end gap-1 mb-6">
        <span className="text-3xl font-bold">{token.price}</span>
        <span className="text-xs text-blue-600 font-bold mb-1.5">ᴸᴵ</span>
      </div>

      {/* Life index progress bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm text-gray-500">
          <span>Life Index</span>
          <span>{token.lifeIndexPercent}%</span>
        </div>
        <div className="flex gap-[2px]">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={cn(
                "h-2 w-full rounded-full",
                i < (token.lifeIndexPercent * 20) / 100
                  ? getTokenColor(token.name)
                  : "bg-gray-200 dark:bg-gray-700"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

/**
 * Token grid component with shadcn Tabs for filtering
 */
export const TokenGrid = () => {
  const tokens: TokenData[] = [
    {
      id: "doge",
      name: "DOGE",
      fullName: "Dogecoin",
      price: "3.21",
      change: "+8.1%",
      lifeIndex: 80,
      lifeIndexPercent: 80,
      iconSrc: "/assets/img/sample-user.png",
    },
    {
      id: "wif",
      name: "WIF",
      fullName: "dogwifhat",
      price: "3.21",
      change: "+8.1%",
      lifeIndex: 43,
      lifeIndexPercent: 43,
      iconSrc: "/assets/img/sample-user.png",
    },
    {
      id: "floki",
      name: "FLOKI",
      fullName: "Floki",
      price: "3.21",
      change: "+8.1%",
      lifeIndex: 24,
      lifeIndexPercent: 24,
      iconSrc: "/assets/img/sample-user.png",
    },
    {
      id: "bonk",
      name: "BONK",
      fullName: "Bonk",
      price: "3.21",
      change: "+8.1%",
      lifeIndex: 80,
      lifeIndexPercent: 80,
      iconSrc: "/assets/img/sample-user.png",
    },
    {
      id: "wif2",
      name: "WIF",
      fullName: "dogwifhat",
      price: "3.21",
      change: "+8.1%",
      lifeIndex: 43,
      lifeIndexPercent: 43,
      iconSrc: "/assets/img/sample-user.png",
    },
    {
      id: "cat",
      name: "CAT",
      fullName: "Cat Token",
      price: "2.50",
      change: "+7.0%",
      lifeIndex: 33,
      lifeIndexPercent: 33,
      iconSrc: "/assets/img/sample-user.png",
    },
    {
      id: "pepe",
      name: "PEPE",
      fullName: "Pepe Coin",
      price: "1.75",
      change: "+10.3%",
      lifeIndex: 60,
      lifeIndexPercent: 60,
      iconSrc: "/assets/img/sample-user.png",
    },
    {
      id: "pepe2",
      name: "PEPE",
      fullName: "Pepe Coin",
      price: "1.75",
      change: "+10.3%",
      lifeIndex: 60,
      lifeIndexPercent: 60,
      iconSrc: "/assets/img/sample-user.png",
    },
    {
      id: "pepe3",
      name: "PEPE",
      fullName: "Pepe Coin",
      price: "1.75",
      change: "+10.3%",
      lifeIndex: 60,
      lifeIndexPercent: 60,
      iconSrc: "/assets/img/sample-user.png",
    },
  ];

  return (
    <div>
      <Tabs defaultValue="gainers">
        <TabsList className="bg-transparent w-auto p-0 h-auto gap-4">
          <TabsTrigger
            value="gainers"
            className="rounded-full data-[state=active]:bg-gray-100 data-[state=active]:shadow-none px-4 py-2 flex gap-2 items-center border border-transparent data-[state=active]:border-gray-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-blue-500"
            >
              <path d="m22 7-8.5 8.5-5-5L2 17" />
              <path d="M16 7h6v6" />
            </svg>
            <span>Top gainers</span>
          </TabsTrigger>
          <TabsTrigger
            value="favourites"
            className="rounded-full data-[state=active]:bg-gray-100 data-[state=active]:shadow-none px-4 py-2 flex gap-2 items-center border border-transparent data-[state=active]:border-gray-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-400"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
            <span>Favourites</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="gainers" className="mt-6 pt-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {tokens.slice(0, 9).map((token) => (
              <TokenCard key={token.id} token={token} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="favourites" className="mt-6 pt-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {tokens.slice(0, 3).map((token) => (
              <TokenCard key={token.id} token={token} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
