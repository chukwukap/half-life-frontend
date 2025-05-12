"use client";

import { FC, useState } from "react";
import { Minus, Plus } from "lucide-react";

interface PredictionPlacementProps {
  entryPrice: string;
  liquidationPrice: string;
  available: string;
}

const PredictionPlacement: FC<PredictionPlacementProps> = ({
  entryPrice,
  liquidationPrice,
  available,
}) => {
  const [amount, setAmount] = useState<string>("100");
  const [leverage, setLeverage] = useState<number>(1);
  const [direction, setDirection] = useState<"long" | "short">("long");

  // Handle amount change
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  // Set max amount
  const handleMaxAmount = () => {
    setAmount(available.replace(/,/g, ""));
  };

  // Increase/decrease leverage
  const adjustLeverage = (inc: boolean) => {
    const newLeverage = inc
      ? Math.min(leverage + 1, 10)
      : Math.max(leverage - 1, 1);
    setLeverage(newLeverage);
  };

  return (
    <section
      className="rounded-[28px] bg-white shadow-lg border border-[#E9EAEC] p-0 w-full max-w-[370px] mx-auto flex flex-col"
      aria-label="Place prediction"
    >
      {/* Header */}
      <div className="flex items-center gap-2 px-6 pt-6 pb-3">
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-lg bg-[#F5F8FF] border border-[#E9EAEC]">
          {/* Use a simple icon for now, replace with your own if needed */}
          <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
            <rect
              x="3"
              y="3"
              width="10"
              height="10"
              rx="2"
              stroke="#335CFF"
              strokeWidth="1.5"
            />
            <rect x="7" y="7" width="2" height="2" rx="1" fill="#335CFF" />
          </svg>
        </span>
        <span className="text-[#181A20] text-lg font-bold">
          Place prediction
        </span>
      </div>
      {/* Direction toggle */}
      <div className="flex gap-0 px-6 pt-2 pb-4">
        <button
          className={`flex-1 py-2 rounded-full border text-base font-semibold transition-colors ${
            direction === "long"
              ? "bg-[#EFFFF6] border-[#05CD99] text-[#181A20] shadow-[0_2px_8px_0_rgba(5,205,153,0.08)]"
              : "bg-transparent border-transparent text-[#7D8FB3]"
          }`}
          style={{ borderWidth: direction === "long" ? 1 : 0 }}
          onClick={() => setDirection("long")}
          aria-pressed={direction === "long"}
        >
          Long
        </button>
        <button
          className={`flex-1 py-2 rounded-full border text-base font-semibold transition-colors ${
            direction === "short"
              ? "bg-[#F8F8F8] border-[#E9EAEC] text-[#181A20]"
              : "bg-transparent border-transparent text-[#7D8FB3]"
          }`}
          style={{ borderWidth: direction === "short" ? 1 : 0 }}
          onClick={() => setDirection("short")}
          aria-pressed={direction === "short"}
        >
          Short
        </button>
      </div>
      {/* Amount input */}
      <div className="px-6 pb-0">
        <label className="block text-[15px] font-bold text-[#181A20] mb-2">
          Amount (USD)
        </label>
        <div className="relative mb-3">
          <input
            type="text"
            value={amount}
            onChange={handleAmountChange}
            className="w-full py-3 px-4 border border-[#E9EAEC] rounded-full focus:ring-2 focus:ring-[#335CFF] focus:border-[#335CFF] text-lg font-semibold text-[#181A20] placeholder:text-[#B1B5C3] outline-none transition-all"
            placeholder="0.00"
            inputMode="decimal"
            aria-label="Amount in USD"
          />
        </div>
        <div className="flex items-center bg-[#F5F8FF] rounded-full px-4 py-2 mb-4">
          <span className="text-sm text-[#7D8FB3]">
            Available:{" "}
            <span className="font-bold text-[#335CFF]">${available}</span>
          </span>
          <button
            className="ml-auto text-sm font-bold text-[#335CFF] hover:underline focus:underline focus:outline-none"
            onClick={handleMaxAmount}
            tabIndex={0}
            aria-label="Set max amount"
            type="button"
          >
            Max
          </button>
        </div>
      </div>
      {/* Leverage control */}
      <div className="px-6 pb-0">
        <label className="block text-[15px] font-bold text-[#181A20] mb-2">
          Leverage
        </label>
        <div className="flex items-center bg-[#F8F8F8] rounded-full px-4 py-2">
          <button
            onClick={() => adjustLeverage(false)}
            className="w-8 h-8 bg-white border border-[#E9EAEC] text-[#B1B5C3] rounded-full flex items-center justify-center hover:bg-[#F5F8FF] focus:outline-none focus:ring-2 focus:ring-[#335CFF]"
            disabled={leverage <= 1}
            aria-label="Decrease leverage"
            type="button"
          >
            <Minus size={18} />
          </button>
          <span className="mx-4 text-[22px] font-extrabold text-[#181A20]">
            {leverage}x
          </span>
          <button
            onClick={() => adjustLeverage(true)}
            className="w-8 h-8 bg-white border border-[#E9EAEC] text-[#B1B5C3] rounded-full flex items-center justify-center hover:bg-[#F5F8FF] focus:outline-none focus:ring-2 focus:ring-[#335CFF]"
            disabled={leverage >= 10}
            aria-label="Increase leverage"
            type="button"
          >
            <Plus size={18} />
          </button>
        </div>
      </div>
      {/* Price details */}
      <div className="flex justify-between px-6 pt-4 pb-0">
        <div>
          <p className="text-xs text-[#7D8FB3] mb-1">Entry price</p>
          <p className="text-base font-extrabold text-[#181A20]">
            ${entryPrice}
          </p>
        </div>
        <div>
          <p className="text-xs text-[#7D8FB3] mb-1">Liquidated at</p>
          <p className="text-base font-extrabold text-[#181A20]">
            ${liquidationPrice}
          </p>
        </div>
      </div>
      {/* Submit button */}
      <div className="px-6 pt-4 pb-6">
        <button
          className="w-full py-3 rounded-full bg-[#335CFF] text-white text-lg font-bold shadow-md hover:bg-[#274FCC] transition-colors focus:outline-none focus:ring-2 focus:ring-[#335CFF]"
          type="button"
        >
          Open Position
        </button>
      </div>
    </section>
  );
};

export default PredictionPlacement;
