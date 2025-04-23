"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

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
 */
const TokenCard = ({ token }: { token: TokenData }) => {
  const isPositive = !token.change.includes("-");

  // Different colors based on token type
  const getTokenColor = (tokenName: string) => {
    switch (tokenName) {
      case "DOGE":
      case "BONK":
        return "bg-green-500";
      case "WIF":
        return "bg-amber-500";
      case "FLOKI":
        return "bg-red-500";
      case "PEPE":
        return "bg-green-500";
      case "CAT":
        return "bg-amber-500";
      default:
        return "bg-blue-500";
    }
  };

  return (
    <div className="bg-white dark:bg-card rounded-xl p-4 overflow-hidden">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="relative w-8 h-8 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
            {token.iconSrc ? (
              <img
                src={token.iconSrc}
                alt={token.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-xs font-semibold">
                {token.name.substring(0, 2)}
              </span>
            )}
          </div>
          <div>
            <h4 className="font-medium text-sm">{token.name}</h4>
            <p className="text-xs text-muted-foreground">{token.fullName}</p>
          </div>
        </div>
        <div className="text-right">
          <span
            className={`text-sm font-semibold ${
              isPositive ? "text-green-500" : "text-red-500"
            }`}
          >
            {token.change}
          </span>
          <div className="flex items-center justify-end">
            <p className="text-xs font-medium mr-1">{token.price}</p>
            <span className="text-xs text-blue-500 font-bold">ᴸᴵ</span>
          </div>
        </div>
      </div>

      <div className="flex gap-1 mb-1">
        {[...Array(16)].map((_, i) => (
          <div
            key={i}
            className={cn(
              "h-1.5 w-full rounded-full",
              i < (token.lifeIndexPercent * 16) / 100
                ? getTokenColor(token.name)
                : "bg-gray-200 dark:bg-gray-700"
            )}
          />
        ))}
      </div>
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>Life Index</span>
        <span>{token.lifeIndexPercent}%</span>
      </div>
    </div>
  );
};

/**
 * Tab button component for switching views
 */
interface TabButtonProps {
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
  icon: React.ReactNode;
}

const TabButton = ({ isActive, onClick, children, icon }: TabButtonProps) => (
  <button
    onClick={onClick}
    className={cn(
      "flex items-center gap-2 px-4 py-2 text-sm rounded-full transition-colors",
      isActive
        ? "bg-gray-100 dark:bg-gray-800 text-foreground"
        : "text-muted-foreground hover:bg-gray-50 dark:hover:bg-gray-800/50"
    )}
  >
    <span className="text-blue-500">{icon}</span>
    {children}
  </button>
);

/**
 * Token grid component with filtering tabs
 */
export const TokenGrid = () => {
  const [activeTab, setActiveTab] = useState<"gainers" | "favorites">(
    "gainers"
  );

  const tokens: TokenData[] = [
    {
      id: "doge",
      name: "DOGE",
      fullName: "Dogecoin",
      price: "3.21",
      change: "+8.1%",
      lifeIndex: 80,
      lifeIndexPercent: 80,
      iconSrc: "/assets/img/tokens/doge.png",
    },
    {
      id: "wif",
      name: "WIF",
      fullName: "dogwifhat",
      price: "3.21",
      change: "+8.1%",
      lifeIndex: 43,
      lifeIndexPercent: 43,
      iconSrc: "/assets/img/tokens/wif.png",
    },
    {
      id: "floki",
      name: "FLOKI",
      fullName: "Floki",
      price: "3.21",
      change: "+8.1%",
      lifeIndex: 24,
      lifeIndexPercent: 24,
      iconSrc: "/assets/img/tokens/floki.png",
    },
    {
      id: "bonk",
      name: "BONK",
      fullName: "Bonk",
      price: "3.21",
      change: "+8.1%",
      lifeIndex: 80,
      lifeIndexPercent: 80,
      iconSrc: "/assets/img/tokens/bonk.png",
    },
    {
      id: "pepe",
      name: "PEPE",
      fullName: "Pepe Coin",
      price: "1.75",
      change: "+10.3%",
      lifeIndex: 60,
      lifeIndexPercent: 60,
      iconSrc: "/assets/img/tokens/pepe.png",
    },
    {
      id: "cat",
      name: "CAT",
      fullName: "Cat Token",
      price: "2.50",
      change: "+7.0%",
      lifeIndex: 33,
      lifeIndexPercent: 33,
      iconSrc: "/assets/img/tokens/cat.png",
    },
  ];

  return (
    <div className="mb-6">
      <div className="flex gap-2 mb-4">
        <TabButton
          isActive={activeTab === "gainers"}
          onClick={() => setActiveTab("gainers")}
          icon={
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 17L9 11L13 15L21 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14 7H21V14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
        >
          Top gainers
        </TabButton>
        <TabButton
          isActive={activeTab === "favorites"}
          onClick={() => setActiveTab("favorites")}
          icon={
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
        >
          Favourites
        </TabButton>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tokens.map((token) => (
          <TokenCard key={token.id} token={token} />
        ))}
      </div>
    </div>
  );
};
