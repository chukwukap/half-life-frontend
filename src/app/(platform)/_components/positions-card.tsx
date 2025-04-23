"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { EmptyPositions } from "./empty-positions";

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
    <div className="bg-white dark:bg-card rounded-xl p-4 mb-3">
      {/* Position header */}
      <div className="flex items-center justify-between mb-4">
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

      {/* Position details */}
      <div className="grid grid-cols-2 gap-4 mb-4">
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

      {/* Position actions */}
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
 * Positions pagination component
 */
const PositionsPagination = () => {
  return (
    <div className="flex items-center justify-between pt-2">
      <button className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 18L9 12L15 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className={`h-1.5 w-1.5 rounded-full ${
              i === 1 ? "bg-blue-500" : "bg-gray-200 dark:bg-gray-700"
            }`}
          />
        ))}
      </div>
      <button className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 6L15 12L9 18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

/**
 * Positions card component showing a list of user's positions
 */
export const PositionsCard = () => {
  // For demo purposes, we allow toggling between having positions and not
  const [hasPositions, setHasPositions] = useState(true);

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
  ];

  return (
    <div className="bg-background dark:bg-background/5 rounded-xl p-4 mb-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21 22H3V2h4v8l2-2 2 2V2h10v20z" fill="white" />
            </svg>
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

      {/* Toggle button for demo purposes only */}
      <button
        onClick={() => setHasPositions(!hasPositions)}
        className="text-xs bg-gray-100 px-2 py-1 rounded mb-3 hidden"
      >
        Toggle Demo State
      </button>

      {hasPositions ? (
        <>
          {positions.map((position, index) => (
            <Position key={index} {...position} />
          ))}
          <PositionsPagination />
        </>
      ) : (
        <EmptyPositions />
      )}
    </div>
  );
};
