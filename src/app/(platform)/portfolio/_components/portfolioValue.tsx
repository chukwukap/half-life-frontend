"use client";

import { FC, useState, useEffect, useCallback } from "react";
import { ArrowDownIcon, ArrowUpIcon } from "@/components/icons";
import DepositModal from "./deposit-modal";
import WithdrawModal from "./withdraw-modal";
import InsufficientFundsModal from "./insufficient-funds-modal";
import { useMarginVault, useMockUSDC } from "@/hooks/useContracts";
import { useViemClients } from "@/lib/viemClient";

/**
 * PortfolioValue component displays the user's portfolio value
 * and provides Deposit and Withdraw actions.
 * Now fully integrated with on-chain margin and USDC balance.
 */
const PortfolioValue: FC = () => {
  // Contract hooks
  const { readMargin, deposit, withdraw } = useMarginVault();
  const { readBalanceOf } = useMockUSDC();
  const { address } = useViemClients();

  // State for on-chain values
  const [margin, setMargin] = useState<bigint | null>(null);
  const [usdcBalance, setUsdcBalance] = useState<bigint | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Modal state
  const [depositOpen, setDepositOpen] = useState(false);
  const [withdrawOpen, setWithdrawOpen] = useState(false);
  const [insufficientOpen, setInsufficientOpen] = useState(false);

  // Minimum required for deposit/withdraw (example: 0.000111 USDC)
  const minAmount = 0.000111;

  // Fetch margin and USDC balance
  const fetchPortfolio = useCallback(async () => {
    if (!address) return;
    setLoading(true);
    setError(null);
    try {
      const m = await readMargin(address);
      const b = await readBalanceOf(address);
      setMargin(typeof m === "bigint" ? m : BigInt(m?.toString?.() ?? "0"));
      setUsdcBalance(
        typeof b === "bigint" ? b : BigInt(b?.toString?.() ?? "0")
      );
    } catch (e) {
      setError("Failed to fetch portfolio data");
    } finally {
      setLoading(false);
    }
  }, [address, readMargin, readBalanceOf]);

  useEffect(() => {
    fetchPortfolio();
  }, [fetchPortfolio]);

  // Convert USDC balance to display (assume 6 decimals)
  const displayBalance =
    usdcBalance !== null ? Number(usdcBalance) / 1_000_000 : 0;
  // Portfolio value: for demo, use margin as value (could be more complex)
  const portfolioValue =
    margin !== null
      ? `$${(Number(margin) / 1_000_000).toLocaleString()}`
      : "$0.00";

  // Handle deposit action
  const handleDeposit = async (amount: number) => {
    if (!address) return;
    if (displayBalance < minAmount) {
      setDepositOpen(false);
      setInsufficientOpen(true);
      return;
    }
    setLoading(true);
    setError(null);
    try {
      // Call deposit (convert amount to 6 decimals)
      await deposit(
        // USDC address (mockUSDCAddress is imported in the hook)
        address,
        BigInt(Math.floor(amount * 1_000_000))
      );
      await fetchPortfolio();
      setDepositOpen(false);
    } catch (e) {
      setError("Deposit failed");
    } finally {
      setLoading(false);
    }
  };

  // Handle withdraw action
  const handleWithdraw = async (amount: number) => {
    if (!address) return;
    if (displayBalance < minAmount) {
      setWithdrawOpen(false);
      setInsufficientOpen(true);
      return;
    }
    setLoading(true);
    setError(null);
    try {
      // Call withdraw (convert amount to 6 decimals)
      await withdraw(address, BigInt(Math.floor(amount * 1_000_000)));
      await fetchPortfolio();
      setWithdrawOpen(false);
    } catch (e) {
      setError("Withdraw failed");
    } finally {
      setLoading(false);
    }
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
          ? "bg-[#335CFF] text-white hover:bg-[#2347E2]"
          : "bg-white text-[#335CFF] hover:bg-[#F5F8FF] ") +
        "px-2 py-1 sm:px-6 sm:py-4 font-semibold text-sm sm:text-base transition-colors focus:outline-none focus:ring-2 " +
        (primary ? "focus:ring-[#335CFF]/40" : "focus:ring-[#335CFF]/20")
      }
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={loading}
    >
      <span className="flex items-center justify-center">{icon}</span>
      <span className="truncate">{label}</span>
    </button>
  );

  return (
    <>
      <div className="bg-[#101E6C] rounded-lg px-6 py-8 flex flex-col gap-10 w-full h-full relative overflow-hidden">
        {/* Decorative background image covering 5% from the left */}
        <div
          aria-hidden="true"
          className="absolute top-0 left-0 h-full"
          style={{
            width: "5%",
            backgroundImage: "url('/assets/img/sample-bg.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left center",
            backgroundSize: "cover",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
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
        <div className="flex gap-3 w-full justify-between items-center">
          <SimpleActionButton
            icon={<ArrowDownIcon className="w-5 h-5 text-white" />}
            label="Deposit"
            primary
            onClick={() => setDepositOpen(true)}
            ariaLabel="Deposit"
          />
          <SimpleActionButton
            icon={<ArrowUpIcon className="w-5 h-5 text-[#335CFF]" />}
            label="Withdraw"
            onClick={() => setWithdrawOpen(true)}
            ariaLabel="Withdraw"
          />
        </div>
        {error && <div className="text-red-500 mt-2">{error}</div>}
        {loading && <div className="text-blue-500 mt-2">Loading...</div>}
      </div>
      {/* Deposit Modal */}
      <DepositModal
        open={depositOpen}
        onClose={() => setDepositOpen(false)}
        balance={displayBalance}
        onDeposit={handleDeposit}
      />
      {/* Withdraw Modal */}
      <WithdrawModal
        open={withdrawOpen}
        onClose={() => setWithdrawOpen(false)}
        balance={displayBalance}
        onWithdraw={handleWithdraw}
      />
      {/* Insufficient Funds Modal */}
      <InsufficientFundsModal
        open={insufficientOpen}
        onClose={() => setInsufficientOpen(false)}
        address={address ?? ""}
        balance={displayBalance}
        minAmount={minAmount}
      />
    </>
  );
};

export default PortfolioValue;
