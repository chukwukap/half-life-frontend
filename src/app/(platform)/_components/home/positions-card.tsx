"use client";

import Link from "next/link";
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
 * Pixel-perfect, Figma-accurate, accessible, and modular.
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
  // Placeholder handlers for future integration
  const handleModify = () => {
    // TODO: Replace with modal or navigation to modify position
    alert(`Modify position for ${token}`);
  };
  const handleClose = () => {
    // TODO: Replace with modal or API call to close position
    alert(`Close position for ${token}`);
  };
  return (
    <section className="bg-white rounded-[32px] px-6 pt-6 pb-0 w-full flex flex-col shadow-none border border-[#E9EAEC]">
      {/* Token info and strategy header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          {logoSrc ? (
            <Image
              src={logoSrc}
              alt={token}
              width={40}
              height={40}
              className="w-10 h-10 rounded-full"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
              <span className="text-gray-500 text-lg font-medium">
                {token.substring(0, 2)}
              </span>
            </div>
          )}
          <div>
            <h3 className="font-extrabold text-lg text-[#181A20] leading-tight">
              {token}
            </h3>
            <p className="text-[#7D8FB3] text-base leading-tight">
              {tokenInfo}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-end gap-1">
          <span className="inline-block px-3 py-1 bg-[#EFFFF6] text-[#05CD99] rounded-full text-base font-semibold mb-1">
            {strategy}
          </span>
          <span
            className={`text-lg font-extrabold ${
              isProfit ? "text-[#05CD99]" : "text-[#FF4747]"
            }`}
          >
            {pnlPercent}
          </span>
        </div>
      </div>
      {/* Price details grid */}
      <div className="grid grid-cols-2 gap-x-8 gap-y-2 mb-4">
        <div>
          <p className="text-[#7D8FB3] text-xs mb-1">Entry price</p>
          <p className="font-extrabold text-base text-[#181A20]">
            ${entryPrice}
          </p>
        </div>
        <div>
          <p className="text-[#7D8FB3] text-xs mb-1">Current price</p>
          <p className="font-extrabold text-base text-[#181A20]">
            ${currentPrice}
          </p>
        </div>
        <div>
          <p className="text-[#7D8FB3] text-xs mb-1">Liquidation price</p>
          <p className="font-extrabold text-base text-[#181A20]">
            ${liquidationPrice}
          </p>
        </div>
        <div>
          <p className="text-[#7D8FB3] text-xs mb-1">Funding rate</p>
          <p className="font-extrabold text-base text-[#181A20]">
            {fundingRate}
          </p>
        </div>
      </div>
      {/* Action buttons */}
      <div className="flex flex-col gap-3 mb-2">
        <button
          className="w-full bg-[#EEF4FF] hover:bg-[#E5EDFF] text-[#335CFF] font-bold rounded-full py-3 text-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#335CFF]"
          onClick={handleModify}
        >
          Modify
        </button>
        <button
          className="w-full bg-[#FFF0F0] hover:bg-[#FFE5E5] text-[#FF4747] font-bold rounded-full py-3 text-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF4747]"
          onClick={handleClose}
        >
          Close Position
        </button>
      </div>
      {/* Carousel dots and nav would be outside this card, as in the Figma */}
    </section>
  );
};

/**
 * Positions card component showing a list of user's positions
 * Enhanced with state management for positions and carousel functionality
 */
export const PositionsCard = () => {
  // To switch to real data, replace the samplePositions array with your API or state data.
  // Positions data copied from @tokens.ts mockTokens for demo purposes.
  // In a real app, this would be dynamic and user-specific.
  const samplePositions: PositionProps[] = [
    // {
    //   token: "CBTC",
    //   tokenInfo: "Coinbase Wrapped Staked BTC",
    //   strategy: "Long 7x",
    //   entryPrice: "99960.000000", // 2% below current price (102000)
    //   currentPrice: "102000",
    //   liquidationPrice: "86700.000000", // 15% below current price
    //   fundingRate: "0.011%",
    //   pnlPercent: "+5.20%", // Placeholder
    //   isProfit: true, // Placeholder
    //   logoSrc: "/assets/img/tokens/cbBTC.png",
    // },
    // {
    //   token: "ZORA",
    //   tokenInfo: "Zora",
    //   strategy: "Long 7x",
    //   entryPrice: "0.012544", // 2% below current price (0.0128)
    //   currentPrice: "0.0128",
    //   liquidationPrice: "0.010880", // 15% below current price
    //   fundingRate: "0.011%",
    //   pnlPercent: "+5.20%", // Placeholder
    //   isProfit: true, // Placeholder
    //   logoSrc: "/assets/img/tokens/zora.png",
    // },
    // {
    //   token: "ETH",
    //   tokenInfo: "Ethereum (Base)",
    //   strategy: "Long 20x",
    //   entryPrice: "3058.041000", // 2% below current price (3120.45)
    //   currentPrice: "3120.45",
    //   liquidationPrice: "2652.382500", // 15% below current price
    //   fundingRate: "0.018%",
    //   pnlPercent: "+5.20%", // Placeholder
    //   isProfit: true, // Placeholder
    //   logoSrc: "/assets/img/tokens/eth.png",
    // },
  ];

  // Use samplePositions for now; swap with real data when available
  const positions: PositionProps[] = samplePositions;

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
    <section className="w-full flex flex-col items-center justify-center rounded-[32px] p-4 border border-[#E9EAEC] bg-white">
      {/* Header with title and See all button */}
      <div className="w-full flex items-center justify-between mb-0">
        <div className="flex items-center gap-2">
          <FireIcon className="text-primary" />
          <h3 className="font-semibold text-lg">My Positions</h3>
        </div>
        <Link
          href="/portfolio"
          className="text-sm font-medium text-[#335CFF] hover:text-[#274FCC] bg-[#F5F8FF] px-4 py-2 rounded-full transition-colors"
        >
          See all
        </Link>
      </div>
      {/* Illustration */}
      <div className="w-full bg-[#F5F8FF] rounded-3xl flex items-center justify-center pt-10 pb-8 px-4 mt-4">
        <Image
          src="/assets/img/illustrations/no-open-position.svg"
          alt="No open position"
          width={220}
          height={180}
        />
      </div>
      {/* Message */}
      <div className="w-full flex flex-col items-center justify-center px-6 pt-6 pb-0">
        <h3 className="font-extrabold text-xl text-[#181A20] text-center mb-2">
          You have no active positions
        </h3>
        <p className="text-center text-[#7D8FB3] text-base mb-6 max-w-xs">
          Pick a hype token and bet on its rise or collapse. Don&apos;t miss the
          action
        </p>
      </div>
      {/* CTA Button */}
      <div className="w-full bg-[#F5F8FF] rounded-b-[32px] flex items-center justify-center py-5 px-4">
        <Link href="/token" className="w-full">
          <button
            className="w-full rounded-full bg-transparent text-[#335CFF] text-lg font-bold py-3 transition-colors hover:underline focus:underline focus:outline-none"
            onClick={onAddPosition}
            type="button"
          >
            Browse tokens
          </button>
        </Link>
      </div>
    </section>
  );
};
