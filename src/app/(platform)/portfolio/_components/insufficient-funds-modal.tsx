"use client";

import { FC, useEffect, useRef } from "react";
import { CloseIcon, DepositIcon, CopyIcon } from "@/components/icons";

interface InsufficientFundsModalProps {
  open: boolean;
  onClose: () => void;
  address: string;
  balance: number;
  minAmount: number;
}

const InsufficientFundsModal: FC<InsufficientFundsModalProps> = ({
  open,
  onClose,
  address,
  balance,
  minAmount,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Copy address to clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(address);
  };

  // Focus trap and ESC close
  useEffect(() => {
    if (!open) return;
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
        className="relative bg-white rounded-[24px] shadow-2xl p-8 w-full max-w-xl mx-4"
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close insufficient funds modal"
          className="absolute top-6 right-6 text-[#7D8FB3] hover:text-[#335CFF] rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-[#335CFF]/20"
        >
          <CloseIcon className="w-6 h-6" />
        </button>
        {/* Icon */}
        <div className="flex flex-col items-center mb-6 mt-2">
          <DepositIcon className="w-16 h-16 text-[#335CFF] mb-2" />
        </div>
        {/* Title and message */}
        <div className="text-center mb-6">
          <div className="font-extrabold text-2xl sm:text-3xl text-[#181A20] mb-2 leading-tight">
            Insufficient Funds
          </div>
          <div className="text-[#7D8FB3] text-base sm:text-lg leading-tight">
            Top up with at least {minAmount} USDT from your external wallet
            <br />
            or send USDT to the address below.
          </div>
        </div>
        {/* Wallet address */}
        <div className="flex items-center justify-center gap-2 bg-white border border-[#E9EAEC] rounded-full px-6 py-3 mb-8 w-fit mx-auto">
          <DepositIcon className="w-5 h-5 text-[#335CFF]" />
          <span className="font-medium text-[#181A20] text-lg tracking-wide select-all">
            {address.slice(0, 6)}...{address.slice(-4)}
          </span>
          <button
            onClick={handleCopy}
            aria-label="Copy wallet address"
            className="ml-2 text-[#335CFF] hover:text-[#181A20] p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-[#335CFF]/20"
          >
            <CopyIcon className="w-5 h-5" />
          </button>
        </div>
        {/* Balance */}
        <div className="flex justify-end text-[#7D8FB3] text-base mb-2">
          Balance{" "}
          <span className="ml-2 font-bold text-[#181A20]">{balance} USDT</span>
        </div>
      </div>
    </div>
  );
};

export default InsufficientFundsModal;
