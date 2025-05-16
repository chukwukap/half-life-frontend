"use client";

import Link from "next/link";
import { FireIcon } from "@/components/icons";
import Image from "next/image";

/**
 * Position information interface
 */
interface PositionProps {
  token: string;
  tokenInfo: string; // e.g., username or subtext
  strategy: string; // e.g., "Long 5x"
  entryPrice: string;
  currentPrice: string;
  liquidationPrice: string;
  fundingRate: string;
  pnlUsd: string; // e.g., "+1210.35 USD"
  pnlPercent: string; // e.g., "+12.10%"
  size: string; // e.g., "$1,200"
  logoSrc?: string;
}

/**
 * Pixel-perfect, accessible, and modular position card for a single open position.
 */
const Position = ({
  token,
  tokenInfo,
  strategy,
  entryPrice,
  currentPrice,
  liquidationPrice,
  fundingRate,
  pnlUsd,
  pnlPercent,
  size,
  logoSrc,
}: PositionProps) => {
  // Placeholder handlers for future integration
  const handleModify = () => {
    alert(`Modify position for ${token}`);
  };
  const handleClose = () => {
    alert(`Close position for ${token}`);
  };
  return (
    <section className="bg-white rounded-2xl border border-[#E9EAEC] px-6 pt-6 pb-0 w-full flex flex-col shadow-none mb-4">
      {/* Header: Token info, strategy, PnL */}
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
          <div className="flex flex-col justify-center">
            <span className="font-extrabold text-lg text-[#181A20] leading-tight">
              {token}
            </span>
            <span className="text-[#7D8FB3] text-sm leading-tight">
              {tokenInfo}
            </span>
          </div>
          <span className="ml-3 px-3 py-1 bg-[#EFFFF6] text-[#05CD99] rounded-full text-sm font-semibold">
            {strategy}
          </span>
        </div>
        <div className="flex flex-col items-end gap-0.5">
          <span className="text-[#05CD99] font-extrabold text-base">
            {pnlUsd} <span className="font-bold">({pnlPercent})</span>
          </span>
          <span className="text-[#B1B5C3] text-sm font-medium">
            Size: {size}
          </span>
        </div>
      </div>
      {/* Price details grid */}
      <div className="grid grid-cols-2 gap-x-8 gap-y-2 mb-4">
        <div>
          <p className="text-[#7D8FB3] text-xs mb-1">Entry price</p>
          <p className="font-extrabold text-base text-[#181A20]">
            {entryPrice}
          </p>
        </div>
        <div>
          <p className="text-[#7D8FB3] text-xs mb-1">Current price</p>
          <p className="font-extrabold text-base text-[#181A20]">
            {currentPrice}
          </p>
        </div>
        <div>
          <p className="text-[#7D8FB3] text-xs mb-1">Liquidation price</p>
          <p className="font-extrabold text-base text-[#181A20]">
            {liquidationPrice}
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
      <div className="flex gap-4 mb-6">
        <button
          className="w-1/2 bg-[#EEF4FF] hover:bg-[#E5EDFF] text-[#335CFF] font-bold rounded-full py-3 text-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#335CFF]"
          onClick={handleModify}
        >
          Modify
        </button>
        <button
          className="w-1/2 bg-[#FFF0F0] hover:bg-[#FFE5E5] text-[#FF4747] font-bold rounded-full py-3 text-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF4747]"
          onClick={handleClose}
        >
          Close Position
        </button>
      </div>
    </section>
  );
};

/**
 * Positions card component showing a list of user's positions or empty state.
 * Pixel-perfect, accessible, and modular.
 */
export const PositionsCard = () => {
  // Sample data for demonstration; replace with real data as needed.
  const samplePositions: PositionProps[] = [
    {
      token: "WIF",
      tokenInfo: "dogwifhat",
      strategy: "Long 5x",
      entryPrice: "$0.00008",
      currentPrice: "$0.00009",
      liquidationPrice: "$0.00007",
      fundingRate: "+0.0125%",
      pnlUsd: "+1210.35 USD",
      pnlPercent: "+12.10%",
      size: "$1,200",
      logoSrc: "/assets/img/tokens/wif.png",
    },
    {
      token: "WIF",
      tokenInfo: "dogwifhat",
      strategy: "Long 5x",
      entryPrice: "$0.00008",
      currentPrice: "$0.00009",
      liquidationPrice: "$0.00007",
      fundingRate: "+0.0125%",
      pnlUsd: "+1210.35 USD",
      pnlPercent: "+12.10%",
      size: "$1,200",
      logoSrc: "/assets/img/tokens/wif.png",
    },
  ];

  // Use samplePositions for now; swap with real data when available
  const positions: PositionProps[] = samplePositions;

  // Shared header for both states
  const Header = (
    <div className="w-full flex items-center justify-between mb-0 px-2 pt-2">
      <div className="flex items-center gap-2">
        <FireIcon className="text-primary" />
        <h3 className="font-semibold text-lg">My Positions</h3>
      </div>
      <Link
        href="/portfolio"
        className="text-base font-medium text-[#335CFF] hover:text-[#274FCC] bg-[#F5F8FF] px-6 py-2 rounded-full transition-colors"
      >
        See all
      </Link>
    </div>
  );

  if (positions.length === 0) {
    return (
      <section className="w-full flex flex-col items-center justify-center rounded-2xl p-4 border border-[#E9EAEC] bg-white">
        {Header}
        {/* Illustration */}
        <div className="w-full bg-[#EEF4FF] rounded-3xl flex items-center justify-center pt-10 pb-8 px-4 mt-4">
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
            Pick a hype token and bet on its rise or collapse. Don&apos;t miss
            the action
          </p>
        </div>
        {/* CTA Button */}
        <div className="w-full bg-[#EEF4FF] rounded-b-[32px] flex items-center justify-center py-5 px-4">
          <Link href="/token" className="w-full">
            <button
              className="w-full rounded-full bg-transparent text-[#335CFF] text-lg font-bold py-3 transition-colors hover:underline focus:underline focus:outline-none"
              type="button"
            >
              Browse tokens
            </button>
          </Link>
        </div>
      </section>
    );
  }

  return (
    <div className="w-full flex flex-col rounded-2xl p-4 border border-[#E9EAEC] bg-white">
      {Header}
      <div className="flex-1 w-full">
        {positions.map((position, index) => (
          <Position key={`${position.token}-${index}`} {...position} />
        ))}
      </div>
    </div>
  );
};
