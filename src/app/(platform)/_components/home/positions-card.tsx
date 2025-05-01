"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { CaretLeftIcon, CaretRightIcon, FireIcon } from "@/components/icons";
import { cn } from "@/lib/utils";
import Image from "next/image";

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
 * Component displaying a single position with token info, prices, and actions
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
    <div className="bg-white rounded-3xl p-6">
      {/* Token info and strategy header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          {logoSrc ? (
            <Image
              src={logoSrc}
              alt={token}
              width={32}
              height={32}
              className="w-8 h-8 rounded-full"
            />
          ) : (
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
              <span className="text-gray-500 text-sm font-medium">
                {token.substring(0, 2)}
              </span>
            </div>
          )}
          <div>
            <h3 className="font-semibold text-base">{token}</h3>
            <p className="text-gray-500 text-sm">{tokenInfo}</p>
          </div>
        </div>

        <div className="text-right">
          <div className="inline-block px-3 py-1 bg-emerald-100/50 text-emerald-600 rounded-full text-sm">
            {strategy}
          </div>
          <p
            className={`text-lg font-bold mt-1 ${
              isProfit ? "text-emerald-500" : "text-red-500"
            }`}
          >
            {pnlPercent}
          </p>
        </div>
      </div>

      {/* Price details grid */}
      <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-6">
        <div>
          <p className="text-gray-500 text-xs mb-1">Entry price</p>
          <p className="font-medium text-sm">${entryPrice}</p>
        </div>
        <div>
          <p className="text-gray-500 text-xs mb-1">Current price</p>
          <p className="font-medium text-sm">${currentPrice}</p>
        </div>
        <div>
          <p className="text-gray-500 text-xs mb-1">Liquidation price</p>
          <p className="font-medium text-sm">${liquidationPrice}</p>
        </div>
        <div>
          <p className="text-gray-500 text-xs mb-1">Funding rate</p>
          <p className="font-medium text-sm">{fundingRate}</p>
        </div>
      </div>

      {/* Action buttons - Matching design with light blue and light red backgrounds */}
      <div className="flex flex-col gap-2">
        <Button className="w-full bg-[#EEF4FF] hover:bg-[#E5EDFF] text-[#2D63E2] font-medium rounded-xl py-3 text-base">
          Modify
        </Button>
        <Button className="w-full bg-[#FEE4E2] hover:bg-[#FED7D5] text-[#D92D20] font-medium rounded-xl py-3 text-base">
          Close Position
        </Button>
      </div>
    </div>
  );
};

/**
 * Positions card component showing a list of user's positions
 * Enhanced with state management for positions and carousel functionality
 */
export const PositionsCard = () => {
  // Sample position data
  const positions: PositionProps[] = [
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
      logoSrc: "/wif.png",
    },
    {
      token: "TROL",
      tokenInfo: "trololol",
      strategy: "Long 10x",
      entryPrice: "0.133",
      currentPrice: "0.923",
      liquidationPrice: "0.113",
      fundingRate: "-0.0125%",
      pnlPercent: "-12.10%",
      isProfit: false,
      logoSrc: "/trol.png",
    },
    {
      token: "BTC",
      tokenInfo: "Bitcoin",
      strategy: "Short 2x",
      entryPrice: "42000",
      currentPrice: "41000",
      liquidationPrice: "45000",
      fundingRate: "+0.01%",
      pnlPercent: "+5.20%",
      isProfit: true,
      logoSrc: "/btc.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visiblePositions, setVisiblePositions] = useState<PositionProps[]>([]);
  const positionsPerPage = 1;

  useEffect(() => {
    updateVisiblePositions();
  }, [currentIndex]);

  const updateVisiblePositions = () => {
    const start = currentIndex;
    const end = start + positionsPerPage;
    setVisiblePositions(positions.slice(start, end));
  };

  const nextSlide = () => {
    if (currentIndex + positionsPerPage < positions.length) {
      setCurrentIndex((prev) => prev + positionsPerPage);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - positionsPerPage);
    }
  };

  const goToSlide = (index: number) => {
    const slideIndex = index * positionsPerPage;
    if (slideIndex < positions.length) {
      setCurrentIndex(slideIndex);
    }
  };

  const totalSlides = Math.ceil(positions.length / positionsPerPage);

  if (positions.length === 0) {
    return (
      <div className="bg-background border-border rounded-2xl p-4 shadow-sm border ">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FireIcon className="text-primary" />
            <h3 className="font-semibold text-lg">My Positions</h3>
          </div>
        </div>
        <EmptyPositions onAddPosition={() => {}} />
      </div>
    );
  }

  return (
    <div className="bg-background border-border rounded-2xl p-4 shadow-sm border  flex flex-col">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FireIcon className="text-primary" />
          <h3 className="font-semibold text-lg">My Positions</h3>
        </div>
        <Link
          href="/portfolio"
          className="text-sm font-medium text-primary hover:text-primary/90 bg-primary/10 px-4 py-2 rounded-full"
        >
          See all
        </Link>
      </div>

      <div className="flex-1">
        <div className="space-y-4">
          {visiblePositions.map((position, index) => (
            <Position key={`${position.token}-${index}`} {...position} />
          ))}
        </div>

        {/* Carousel Navigation */}
        <div className="relative flex items-center justify-center mt-6 mb-2 px-12">
          <button
            className={cn(
              "w-8 h-8 flex items-center justify-center rounded-full transition-colors absolute left-0",
              currentIndex === 0
                ? "text-gray-300"
                : "text-gray-500 hover:bg-gray-100"
            )}
            onClick={prevSlide}
            disabled={currentIndex === 0}
          >
            <CaretLeftIcon className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <button
                key={idx}
                className={cn(
                  "h-2 w-2 rounded-full transition-colors",
                  currentIndex / positionsPerPage === idx
                    ? "bg-primary"
                    : "bg-gray-200 hover:bg-gray-300"
                )}
                onClick={() => goToSlide(idx)}
              />
            ))}
          </div>

          <button
            className={cn(
              "w-8 h-8 flex items-center justify-center rounded-full transition-colors absolute right-0",
              currentIndex + positionsPerPage >= positions.length
                ? "text-gray-300"
                : "text-gray-500 hover:bg-gray-100"
            )}
            onClick={nextSlide}
            disabled={currentIndex + positionsPerPage >= positions.length}
          >
            <CaretRightIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

/**
 * EmptyPositions component displays when user has no active trading positions
 * Shows illustration, message and CTA to browse tokens
 */
const EmptyPositions = ({ onAddPosition }: { onAddPosition?: () => void }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-10 px-4">
      <div className="w-full h-64 bg-blue-50 dark:bg-blue-900/5 rounded-2xl mb-6 flex items-center justify-center">
        <div className="w-48 h-48 bg-blue-100 dark:bg-blue-900/10 rounded-full flex items-center justify-center">
          <div className="w-32 h-32 bg-blue-200 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
            <div className="w-16 h-16 bg-blue-300 dark:bg-blue-900/30 rounded-full" />
          </div>
        </div>
      </div>

      <h3 className="font-bold text-xl text-center mb-2">
        You have no active positions
      </h3>

      <p className="text-center text-muted-foreground mb-6 max-w-xs">
        Pick a hype token and bet on its rise or collapse. Don&apos;t miss the
        action
      </p>

      <Link href="/token">
        <Button
          className="bg-primary hover:bg-primary/90 text-white font-medium text-base px-8 py-3 h-12 rounded-xl"
          onClick={onAddPosition}
        >
          Browse tokens
        </Button>
      </Link>
    </div>
  );
};
