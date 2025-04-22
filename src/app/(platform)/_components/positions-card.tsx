"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

/**
 * Position information interface
 */
interface PositionProps {
  token: string;
  tokenInfo: string;
  strategy: string;
  entryPrice: string;
  currentPrice: string;
  liquidationPrice: string;
  pnl: string;
  pnlPercent: string;
  isProfit: boolean;
}

/**
 * Component displaying a single position
 */
const Position = ({
  token,
  tokenInfo,
  strategy,
  entryPrice,
  currentPrice,
  liquidationPrice,
  pnl,
  pnlPercent,
  isProfit,
}: PositionProps) => {
  return (
    <div className="bg-white dark:bg-card rounded-xl p-4 mb-2">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-amber-100 flex items-center justify-center">
            <span className="text-amber-800 text-xs font-semibold">
              {token.substring(0, 2)}
            </span>
          </div>
          <div>
            <h4 className="font-medium text-sm">{token}</h4>
            <p className="text-xs text-muted-foreground">{tokenInfo}</p>
          </div>
        </div>
        <div className="text-right">
          <span
            className={`text-sm font-semibold ${
              isProfit ? "text-green-500" : "text-red-500"
            }`}
          >
            {pnlPercent}
          </span>
          <p className="text-xs font-medium">{strategy}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-3">
        <div>
          <p className="text-xs text-muted-foreground">Entry price</p>
          <p className="text-sm font-medium">${entryPrice}</p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground">Current price</p>
          <p className="text-sm font-medium">${currentPrice}</p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground">Liquidation price</p>
          <p className="text-sm font-medium">${liquidationPrice}</p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground">PnL/Rate</p>
          <p
            className={`text-sm font-medium ${
              isProfit ? "text-green-500" : "text-red-500"
            }`}
          >
            {isProfit ? "+" : ""}
            {pnl}
          </p>
        </div>
      </div>

      <div className="flex gap-2 mt-2">
        <Button className="w-full bg-blue-50 text-blue-600 hover:bg-blue-100 dark:bg-blue-900/20 dark:text-blue-400 dark:hover:bg-blue-900/30">
          Modify
        </Button>
        <Button
          variant="destructive"
          className="w-full bg-red-50 text-red-600 hover:bg-red-100 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/30"
        >
          Close Position
        </Button>
      </div>
    </div>
  );
};

/**
 * Positions card component showing a list of user's positions
 */
export const PositionsCard = () => {
  const positions = [
    {
      token: "WIF",
      tokenInfo: "dogwifhat",
      strategy: "Long 5x",
      entryPrice: "0.00008",
      currentPrice: "0.00009",
      liquidationPrice: "0.00007",
      pnl: "0.0125%",
      pnlPercent: "+12.10%",
      isProfit: true,
    },
    // Add more positions if needed
  ];

  return (
    <div className="bg-background dark:bg-background/5 rounded-xl p-4 mb-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
            <span className="text-white text-xs">📊</span>
          </div>
          <h3 className="font-medium">My Positions</h3>
        </div>
        <Link
          href="/portfolio"
          className="text-sm text-blue-500 hover:underline"
        >
          See all
        </Link>
      </div>

      {positions.map((position, index) => (
        <Position key={index} {...position} />
      ))}

      <div className="flex items-center justify-center mt-2">
        <div className="flex gap-1">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`h-1.5 w-1.5 rounded-full ${
                i === 0 ? "bg-blue-500" : "bg-gray-200 dark:bg-gray-700"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
