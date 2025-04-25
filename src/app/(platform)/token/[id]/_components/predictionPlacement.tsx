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
    // In a real app, you would calculate the max amount based on available balance
    setAmount(available.replace(",", ""));
  };

  // Increase/decrease leverage
  const adjustLeverage = (inc: boolean) => {
    const newLeverage = inc
      ? Math.min(leverage + 1, 10)
      : Math.max(leverage - 1, 1);
    setLeverage(newLeverage);
  };

  return (
    <div className="border border-gray-200 rounded-lg p-4">
      {/* Direction toggle */}
      <div className="flex mb-6 bg-gray-100 p-1 rounded-full max-w-xs">
        <button
          className={`flex-1 py-2 px-4 rounded-full text-center transition-colors ${
            direction === "long" ? "bg-green-500 text-white" : "text-gray-500"
          }`}
          onClick={() => setDirection("long")}
        >
          Long
        </button>
        <button
          className={`flex-1 py-2 px-4 rounded-full text-center transition-colors ${
            direction === "short"
              ? "bg-gray-300 text-gray-800"
              : "text-gray-500"
          }`}
          onClick={() => setDirection("short")}
        >
          Short
        </button>
      </div>

      {/* Amount input */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Amount (USD)
        </label>
        <div className="relative">
          <input
            type="text"
            value={amount}
            onChange={handleAmountChange}
            className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter amount"
          />
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 text-blue-600 text-sm font-medium"
            onClick={handleMaxAmount}
          >
            Max
          </button>
        </div>
        <p className="mt-1 text-sm text-gray-500">Available: ${available}</p>
      </div>

      {/* Leverage slider */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <label className="block text-sm font-medium text-gray-700">
            Leverage
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg">
            <button
              className="p-1 hover:bg-gray-100"
              onClick={() => adjustLeverage(false)}
            >
              <Minus size={16} />
            </button>
            <span className="px-3 font-bold">{leverage}×</span>
            <button
              className="p-1 hover:bg-gray-100"
              onClick={() => adjustLeverage(true)}
            >
              <Plus size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Price details */}
      <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
        <div>
          <p className="text-gray-500 mb-1">Entry price</p>
          <p className="font-medium">${entryPrice}</p>
        </div>
        <div>
          <p className="text-gray-500 mb-1">Liquidation price</p>
          <p className="font-medium">${liquidationPrice}</p>
        </div>
      </div>

      {/* Submit button */}
      <button className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
        Open Position
      </button>
    </div>
  );
};

export default PredictionPlacement;
