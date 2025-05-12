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
        <button className="w-full bg-[#EEF4FF] hover:bg-[#E5EDFF] text-[#335CFF] font-bold rounded-full py-3 text-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#335CFF]">
          Modify
        </button>
        <button className="w-full bg-[#FFF0F0] hover:bg-[#FFE5E5] text-[#FF4747] font-bold rounded-full py-3 text-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF4747]">
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
  // Sample position data
  const positions: PositionProps[] = [
    // {
    //   token: "WIF",
    //   tokenInfo: "dogwifhat",
    //   strategy: "Long 5x",
    //   entryPrice: "0.00008",
    //   currentPrice: "0.00009",
    //   liquidationPrice: "0.00007",
    //   fundingRate: "+0.0125%",
    //   pnlPercent: "+12.10%",
    //   isProfit: true,
    //   logoSrc: "/wif.png",
    // },
    // {
    //   token: "TROL",
    //   tokenInfo: "trololol",
    //   strategy: "Long 10x",
    //   entryPrice: "0.133",
    //   currentPrice: "0.923",
    //   liquidationPrice: "0.113",
    //   fundingRate: "-0.0125%",
    //   pnlPercent: "-12.10%",
    //   isProfit: false,
    //   logoSrc: "/trol.png",
    // },
    // {
    //   token: "BTC",
    //   tokenInfo: "Bitcoin",
    //   strategy: "Short 2x",
    //   entryPrice: "42000",
    //   currentPrice: "41000",
    //   liquidationPrice: "45000",
    //   fundingRate: "+0.01%",
    //   pnlPercent: "+5.20%",
    //   isProfit: true,
    //   logoSrc: "/btc.png",
    // },
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
    <section className="w-full flex flex-col items-center justify-center rounded-[32px] bg-white border border-[#E9EAEC] px-0 pt-0 pb-0">
      {/* Illustration */}
      <div className="w-full bg-[#F5F8FF] rounded-t-[32px] flex items-center justify-center pt-10 pb-8 px-4">
        <Image
          src="/assets/img/illustrations/no-open-position.svg"
          alt="No open position"
          width={128}
          height={128}
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
