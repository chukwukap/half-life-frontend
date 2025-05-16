"use client";

import { FC } from "react";
// Import icons from the shared icons file
import { ArrowDownIcon, ArrowUpIcon } from "@/components/icons";

/**
 * PortfolioValue component displays the user's portfolio value
 * and provides Deposit and Withdraw actions, styled to match
 * the provided Figma UI/UX.
 *
 * Security: All actions are handled client-side and do not expose sensitive data.
 */
const PortfolioValue: FC = () => {
  // Mock portfolio value
  const portfolioValue = "$5,321.78";

  return (
    <div className="relative bg-[#0D1C59] rounded-[24px] p-8 h-full flex flex-col justify-between min-h-[180px] overflow-hidden shadow-none">
      {/* Abstract pattern overlay (SVG or image, left side, low opacity) */}
      <div
        className="absolute inset-0 left-0 w-1/2 h-full z-0 pointer-events-none select-none"
        aria-hidden="true"
      >
        {/* Example SVG pattern, replace with Figma asset if available */}
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full opacity-20"
        >
          <circle cx="60" cy="60" r="60" fill="#23307A" />
          <circle cx="160" cy="120" r="40" fill="#23307A" />
          <circle cx="120" cy="40" r="20" fill="#23307A" />
        </svg>
      </div>

      {/* Portfolio label and value */}
      <div className="relative z-10">
        <h2 className="text-[#B6C2E2] text-[16px] font-normal mb-1 tracking-tight leading-[22px]">
          Portfolio value
        </h2>
        <div className="text-white text-[38px] leading-[44px] font-extrabold tracking-tight font-[Sora,sans-serif]">
          {portfolioValue}
        </div>
      </div>

      {/* Action buttons */}
      <div className="relative z-10 flex justify-center items-center gap-6 mt-8 w-full flex-wrap sm:flex-nowrap">
        {/* Deposit Button */}
        <button
          className="flex items-center justify-center bg-[#335CFF] hover:bg-[#2347E2] text-white rounded-full px-10 h-[56px] font-semibold text-[20px] min-w-[200px] transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-[#335CFF]/40 mb-4 sm:mb-0"
          onClick={() => console.log("Deposit clicked")}
          aria-label="Deposit"
        >
          <span className="flex items-center">
            {/* Down arrow icon */}
            <span className="flex items-center justify-center w-7 h-7 bg-white/20 rounded-full mr-3">
              <ArrowDownIcon className="w-5 h-5 text-white" />
            </span>
            Deposit
          </span>
        </button>
        {/* Withdraw Button */}
        <button
          className="flex items-center justify-center bg-white hover:bg-[#F5F8FF] text-[#335CFF] rounded-full px-10 h-[56px] font-semibold text-[20px] min-w-[200px] transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-[#335CFF]/20"
          onClick={() => console.log("Withdraw clicked")}
          aria-label="Withdraw"
        >
          <span className="flex items-center">
            {/* Up arrow icon */}
            <span className="flex items-center justify-center w-7 h-7 bg-[#E9F0FF] rounded-full mr-3">
              <ArrowUpIcon className="w-5 h-5 text-[#335CFF]" />
            </span>
            Withdraw
          </span>
        </button>
      </div>
    </div>
  );
};

export default PortfolioValue;
