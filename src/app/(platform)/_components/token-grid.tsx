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
  icon?: React.ReactNode;
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
          <div className="relative w-7 h-7 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
            {token.icon ? (
              token.icon
            ) : (
              <span className="text-xs font-medium">
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
          <div className="flex items-center">
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
      icon: <span>🐶</span>,
    },
    {
      id: "wif",
      name: "WIF",
      fullName: "dogwifhat",
      price: "3.21",
      change: "+8.1%",
      lifeIndex: 43,
      lifeIndexPercent: 43,
      icon: <span>🐕</span>,
    },
    {
      id: "floki",
      name: "FLOKI",
      fullName: "Floki",
      price: "3.21",
      change: "+8.1%",
      lifeIndex: 24,
      lifeIndexPercent: 24,
      icon: <span>🦊</span>,
    },
    {
      id: "bonk",
      name: "BONK",
      fullName: "Bonk",
      price: "3.21",
      change: "+8.1%",
      lifeIndex: 80,
      lifeIndexPercent: 80,
      icon: <span>🐕</span>,
    },
    {
      id: "pepe",
      name: "PEPE",
      fullName: "Pepe Coin",
      price: "1.75",
      change: "+10.3%",
      lifeIndex: 60,
      lifeIndexPercent: 60,
      icon: <span>🐸</span>,
    },
    {
      id: "cat",
      name: "CAT",
      fullName: "Cat Token",
      price: "2.50",
      change: "+7.0%",
      lifeIndex: 33,
      lifeIndexPercent: 33,
      icon: <span>🐱</span>,
    },
  ];

  return (
    <div className="mb-6">
      <div className="flex gap-2 mb-4">
        <TabButton
          isActive={activeTab === "gainers"}
          onClick={() => setActiveTab("gainers")}
          icon={<span>📈</span>}
        >
          Top gainers
        </TabButton>
        <TabButton
          isActive={activeTab === "favorites"}
          onClick={() => setActiveTab("favorites")}
          icon={<span>⭐</span>}
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
