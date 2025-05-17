"use client";

import { FC, useState } from "react";
import { ArrowDownIcon, ArrowUpIcon } from "@/components/icons";
import DepositModal from "./deposit-modal";
import WithdrawModal from "./withdraw-modal";
import InsufficientFundsModal from "./insufficient-funds-modal";

/**
 * PortfolioValue component displays the user's portfolio value
 * and provides Deposit and Withdraw actions.
 *
 * Security: All actions are handled client-side and do not expose sensitive data.
 */
const PortfolioValue: FC = () => {
  // Mock values for demonstration
  const portfolioValue = "$5,321.78";
  const balance = 0.00007784; // Mock balance in USDT
  const minAmount = 0.000111; // Minimum required for deposit/withdraw
  const address = "0x75ba...d06c";

  // Modal state
  const [depositOpen, setDepositOpen] = useState(false);
  const [withdrawOpen, setWithdrawOpen] = useState(false);
  const [insufficientOpen, setInsufficientOpen] = useState(false);

  // Handle deposit action
  const handleDeposit = () => {
    if (balance < minAmount) {
      setDepositOpen(false);
      setInsufficientOpen(true);
      return;
    }
    // TODO: Implement deposit logic
    setDepositOpen(false);
    // Optionally show success modal/notification
  };

  // Handle withdraw action
  const handleWithdraw = () => {
    if (balance < minAmount) {
      setWithdrawOpen(false);
      setInsufficientOpen(true);
      return;
    }
    // TODO: Implement withdraw logic
    setWithdrawOpen(false);
    // Optionally show success modal/notification
  };

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
    <>
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
            onClick={() => setDepositOpen(true)}
            ariaLabel="Deposit"
          />
          <SimpleActionButton
            icon={<ArrowUpIcon className="w-5 h-5" />}
            label="Withdraw"
            onClick={() => setWithdrawOpen(true)}
            ariaLabel="Withdraw"
          />
        </div>
      </div>
      {/* Deposit Modal */}
      <DepositModal
        open={depositOpen}
        onClose={() => setDepositOpen(false)}
        balance={balance}
        onDeposit={handleDeposit}
      />
      {/* Withdraw Modal */}
      <WithdrawModal
        open={withdrawOpen}
        onClose={() => setWithdrawOpen(false)}
        balance={balance}
        onWithdraw={handleWithdraw}
      />
      {/* Insufficient Funds Modal */}
      <InsufficientFundsModal
        open={insufficientOpen}
        onClose={() => setInsufficientOpen(false)}
        address={address}
        balance={balance}
        minAmount={minAmount}
      />
    </>
  );
};

export default PortfolioValue;
