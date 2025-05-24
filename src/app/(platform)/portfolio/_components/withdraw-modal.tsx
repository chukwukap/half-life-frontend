"use client";

import { FC, useEffect, useRef, useState } from "react";
import { CloseIcon } from "@/components/icons";

interface WithdrawModalProps {
  open: boolean;
  onClose: () => void;
  balance: number;
  onWithdraw: (amount: number) => void;
}

const quickAmounts = [0.001, 0.01, 0.1];

const WithdrawModal: FC<WithdrawModalProps> = ({
  open,
  onClose,
  balance,
  onWithdraw,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Focus trap and ESC close
  useEffect(() => {
    if (!open) return;
    setError(null);
    setLoading(false);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      // Trap focus
      if (e.key === "Tab" && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          last.focus();
          e.preventDefault();
        } else if (!e.shiftKey && document.activeElement === last) {
          first.focus();
          e.preventDefault();
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  // Handle withdraw click
  const handleWithdrawClick = async () => {
    setLoading(true);
    setError(null);
    try {
      await onWithdraw(amount);
    } catch (e) {
      setError("Withdraw failed");
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      aria-modal="true"
      role="dialog"
      tabIndex={-1}
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-[24px] shadow-2xl p-8 w-full max-w-md mx-4"
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-[#181A20]">Withdraw</h2>
          <button
            onClick={onClose}
            aria-label="Close withdraw modal"
            className="text-[#7D8FB3] hover:text-[#335CFF] rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-[#335CFF]/20"
          >
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>
        {/* Amount input */}
        <div className="mb-4">
          <label
            className="block text-[#181A20] font-semibold mb-2"
            htmlFor="withdraw-amount"
          >
            Amount
          </label>
          <input
            id="withdraw-amount"
            type="number"
            min={0}
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full rounded-[16px] border border-[#E9EAEC] px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-[#335CFF]/20 mb-2"
            placeholder="0"
            disabled={loading}
          />
          <div className="flex justify-between text-[#7D8FB3] text-sm mb-2">
            <span>Balance</span>
            <span className="font-bold text-[#181A20]">{balance} USDT</span>
          </div>
        </div>
        {/* Quick select buttons */}
        <div className="flex gap-3 mb-6">
          {quickAmounts.map((amt) => (
            <button
              key={amt}
              type="button"
              className="flex-1 rounded-full bg-[#F5F8FF] text-[#335CFF] font-semibold py-2 transition-colors hover:bg-[#E5EDFF] focus:outline-none focus:ring-2 focus:ring-[#335CFF]/20"
              onClick={() => setAmount(amt)}
              disabled={loading}
            >
              {amt} USDT
            </button>
          ))}
          <button
            type="button"
            className="flex-1 rounded-full bg-[#F5F8FF] text-[#335CFF] font-semibold py-2 transition-colors hover:bg-[#E5EDFF] focus:outline-none focus:ring-2 focus:ring-[#335CFF]/20"
            onClick={() => setAmount(balance)}
            disabled={loading}
          >
            Max
          </button>
        </div>
        {/* Withdraw button */}
        <button
          className="w-full rounded-full bg-[#335CFF] text-white text-lg font-bold py-4 transition-colors hover:bg-[#2347E2] focus:outline-none focus:ring-2 focus:ring-[#335CFF]/20"
          type="button"
          aria-label="Withdraw"
          onClick={handleWithdrawClick}
          disabled={amount <= 0 || loading}
        >
          {loading ? "Withdrawing..." : "Withdraw"}
        </button>
        {error && <div className="text-red-500 mt-2">{error}</div>}
      </div>
    </div>
  );
};

export default WithdrawModal;
