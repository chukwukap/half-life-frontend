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
 * Styled to match the design in the provided image with cleaner UI
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
    <div className="bg-white dark:bg-card rounded-xl p-4 mb-2 shadow-sm">
      {/* Position header with token info and profit/strategy */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
            <span className="text-amber-800 text-xs font-semibold">
              {token.substring(0, 2)}
            </span>
          </div>
          <div>
            <h4 className="font-medium text-sm">{token}</h4>
            <p className="text-xs text-gray-500">{tokenInfo}</p>
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
          <div className="mt-1 px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full inline-block">
            {strategy}
          </div>
        </div>
      </div>

      {/* Position details in a cleaner 2x2 grid */}
      <div className="grid grid-cols-2 gap-4 mb-3 text-sm">
        <div>
          <p className="text-xs text-gray-500">Entry price</p>
          <p className="font-medium">${entryPrice}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Current price</p>
          <p className="font-medium">${currentPrice}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Liquidation price</p>
          <p className="font-medium">${liquidationPrice}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Funding rate</p>
          <p
            className={`font-medium ${
              isProfit ? "text-green-500" : "text-red-500"
            }`}
          >
            {isProfit ? "+" : ""}
            {pnl}
          </p>
        </div>
      </div>

      {/* Position actions - styled buttons matching the design */}
      <div className="flex gap-2">
        <Button
          className="flex-1 py-1.5 text-xs bg-blue-50 text-blue-600 hover:bg-blue-100 dark:bg-blue-900/20 dark:text-blue-400 dark:hover:bg-blue-900/30 rounded-lg font-medium"
          title="Modify position"
          onClick={() => console.log(`Modifying position for ${token}`)}
        >
          Modify
        </Button>
        <Button
          variant="destructive"
          className="flex-1 py-1.5 text-xs bg-red-50 text-red-600 hover:bg-red-100 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/30 rounded-lg font-medium"
          title="Close position"
          onClick={() => console.log(`Closing position for ${token}`)}
        >
          Close Position
        </Button>
      </div>
    </div>
  );
};

/**
 * Positions pagination component
 * Styled to match the design with dot indicators and navigation arrows
 */
const PositionsPagination = () => {
  // State to track current page
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 6;

  // Handle pagination navigation
  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="flex items-center justify-between pt-4">
      <button
        className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
        onClick={goToPrevPage}
        disabled={currentPage === 1}
      >
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
        {Array.from({ length: totalPages }).map((_, i) => (
          <div
            key={i}
            className={`h-1.5 w-1.5 rounded-full cursor-pointer ${
              i + 1 === currentPage
                ? "bg-blue-500"
                : "bg-gray-200 dark:bg-gray-700"
            }`}
            onClick={() => setCurrentPage(i + 1)}
          />
        ))}
      </div>
      <button
        className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
        onClick={goToNextPage}
        disabled={currentPage === totalPages}
      >
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
 * Enhanced with state management for positions and pagination
 */
export const PositionsCard = () => {
  // State for toggling between having positions and not
  const [hasPositions, setHasPositions] = useState(true);

  // Sample position data
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
    <div className="bg-background dark:bg-background/5 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-800 h-full flex flex-col">
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
          <h3 className="font-medium text-sm">My Positions</h3>
        </div>
        <Link
          href="#"
          className="text-xs font-medium text-blue-500 hover:text-blue-600"
        >
          See all
        </Link>
      </div>

      {hasPositions ? (
        <div className="flex-1 flex flex-col">
          {positions.map((position) => (
            <Position key={position.token} {...position} />
          ))}
          <div className="mt-auto">
            <PositionsPagination />
          </div>
        </div>
      ) : (
        <EmptyPositions onAddPosition={() => setHasPositions(true)} />
      )}
    </div>
  );
};
