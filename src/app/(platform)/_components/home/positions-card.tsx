"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { EmptyPositions } from "./empty-positions";
import { FireIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

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
  fundingRate: string;
  pnlPercent: string;
  isProfit: boolean;
  logoSrc?: string;
}

/**
 * Component displaying a single position
 * Styled to match the design in the provided image
 */
const Position = ({
  token,
  tokenInfo,
  strategy,
  entryPrice,
  currentPrice,
  liquidationPrice,
  fundingRate,
  pnlPercent,
  isProfit,
  logoSrc,
}: PositionProps) => {
  return (
    <div className="bg-white dark:bg-card rounded-2xl p-4 mb-4 shadow-sm">
      {/* Position header with token info and profit/strategy */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          {logoSrc ? (
            <img src={logoSrc} alt={token} className="w-10 h-10 rounded-full" />
          ) : (
            <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
              <span className="text-amber-800 text-xs font-semibold">
                {token.substring(0, 2)}
              </span>
            </div>
          )}
          <div>
            <h4 className="font-bold text-base">{token}</h4>
            <p className="text-sm text-muted-foreground">{tokenInfo}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full inline-block">
            {strategy}
          </div>
          <div
            className={cn(
              "text-base font-bold mt-1",
              isProfit ? "text-green-500" : "text-red-500"
            )}
          >
            {pnlPercent}
          </div>
        </div>
      </div>

      {/* Position details in a 2x2 grid */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <p className="text-muted-foreground text-sm mb-1">Entry price</p>
          <p className="font-bold text-xl">${entryPrice}</p>
        </div>
        <div>
          <p className="text-muted-foreground text-sm mb-1">Current price</p>
          <p className="font-bold text-xl">${currentPrice}</p>
        </div>
        <div>
          <p className="text-muted-foreground text-sm mb-1">
            Liquidation price
          </p>
          <p className="font-bold text-xl">${liquidationPrice}</p>
        </div>
        <div>
          <p className="text-muted-foreground text-sm mb-1">Funding rate</p>
          <p className="font-bold text-xl">{fundingRate}</p>
        </div>
      </div>

      {/* Position actions - styled buttons matching the design */}
      <div className="flex gap-2">
        <Button className="flex-1 py-2 px-4 bg-blue-50 hover:bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400 dark:hover:bg-blue-900/30 rounded-xl font-medium text-base">
          Modify
        </Button>
        <Button
          variant="destructive"
          className="flex-1 py-2 px-4 bg-red-50 hover:bg-red-100 text-red-600 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/30 rounded-xl font-medium text-base"
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
    <div className="flex items-center justify-center pt-6 pb-2">
      <button
        className="w-10 h-10 flex items-center justify-center text-muted-foreground rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
        onClick={goToPrevPage}
        disabled={currentPage === 1}
      >
        <svg
          width="24"
          height="24"
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
      <div className="flex items-center gap-1 mx-6">
        {Array.from({ length: totalPages }).map((_, i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full cursor-pointer ${
              i + 1 === currentPage
                ? "bg-blue-500"
                : "bg-gray-200 dark:bg-gray-700"
            }`}
            onClick={() => setCurrentPage(i + 1)}
          />
        ))}
      </div>
      <button
        className="w-10 h-10 flex items-center justify-center text-muted-foreground rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
        onClick={goToNextPage}
        disabled={currentPage === totalPages}
      >
        <svg
          width="24"
          height="24"
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
      fundingRate: "+0.0125%",
      pnlPercent: "+12.10%",
      isProfit: true,
      logoSrc: "https://via.placeholder.com/40", // Replace with actual logo
    },
  ];

  // Toggle between states for demo purposes
  const togglePositions = () => {
    setHasPositions(!hasPositions);
  };

  return (
    <div className="bg-background dark:bg-background/5 rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-gray-800 h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <FireIcon className="text-primary" />
          <h3 className="font-semibold text-lg">My Positions</h3>
        </div>
        <Link
          href="/portfolio"
          className="text-sm font-medium text-blue-600 hover:text-blue-700 bg-blue-50 px-4 py-2 rounded-full"
        >
          See all
        </Link>
      </div>

      {hasPositions ? (
        <div className="flex-1">
          <div className="space-y-4">
            {positions.map((position, index) => (
              <Position key={index} {...position} />
            ))}
          </div>
          <PositionsPagination />
        </div>
      ) : (
        <div className="flex-1 flex items-center justify-center">
          <EmptyPositions onAddPosition={togglePositions} />
        </div>
      )}
    </div>
  );
};
