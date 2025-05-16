"use client";

import { FC } from "react";
import { ArrowDownIcon, ArrowUpIcon } from "@/components/icons";

/**
 * PortfolioValue component displays the user's portfolio value
 * and provides Deposit and Withdraw actions.
 *
 * Security: All actions are handled client-side and do not expose sensitive data.
 */
const PortfolioValue: FC = () => {
  // Mock portfolio value
  const portfolioValue = "$5,321.78";

  /**
   * Simple, responsive action button for portfolio actions.
   * Uses minimal props and concise styling.
   */
  const SimpleActionButton: FC<{
    icon: React.ReactNode;
    label: string;
    primary?: boolean;
    onClick: () => void;
    ariaLabel: string;
  }> = ({ icon, label, primary = false, onClick, ariaLabel }) => (
    <button
      type="button"
      className={
        "flex items-center justify-center gap-2 rounded-full w-full " +
        (primary
          ? "bg-[#335CFF] text-white hover:bg-[#2347E2] "
          : "bg-white text-[#335CFF] hover:bg-[#F5F8FF] ") +
        "px-4 py-3 sm:px-8 sm:py-4 font-semibold text-base sm:text-lg transition-colors focus:outline-none focus:ring-2 " +
        (primary ? "focus:ring-[#335CFF]/40" : "focus:ring-[#335CFF]/20")
      }
      onClick={onClick}
      aria-label={ariaLabel}
    >
      <span className="flex items-center justify-center">{icon}</span>
      <span className="truncate">{label}</span>
    </button>
  );

  return (
    <div className="bg-[#101E6C] rounded-[32px] px-6 pt-8 pb-10 flex flex-col gap-10 w-full h-full sm:px-10 sm:pt-10 sm:pb-12 sm:gap-12">
      {/* Portfolio label and value */}
      <div>
        <h2 className="text-[#B6C2E2] text-base font-normal mb-3 tracking-tight leading-5 sm:text-[18px] sm:leading-[22px]">
          Portfolio value
        </h2>
        <div
          className="text-white text-3xl leading-9 font-extrabold tracking-tight font-[Sora,sans-serif] select-text sm:text-[48px] sm:leading-[54px]"
          style={{ letterSpacing: "-0.04em" }}
        >
          {portfolioValue}
        </div>
      </div>

      {/* Action buttons: responsive, stacked on mobile, row on desktop */}
      <div className="flex flex-col gap-4 w-full sm:flex-row sm:gap-8">
        <SimpleActionButton
          icon={<ArrowDownIcon className="w-5 h-5" />}
          label="Deposit"
          primary
          onClick={() => console.log("Deposit clicked")}
          ariaLabel="Deposit"
        />
        <SimpleActionButton
          icon={<ArrowUpIcon className="w-5 h-5" />}
          label="Withdraw"
          onClick={() => console.log("Withdraw clicked")}
          ariaLabel="Withdraw"
        />
      </div>
    </div>
  );
};

export default PortfolioValue;
