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
    <div className="border border-gray-200 rounded-lg">
      {/* Direction toggle */}
      <div className="p-4 pb-0">
        <div className="bg-gray-100 rounded-full p-1 flex">
          <button
            className={`flex-1 py-2 px-4 rounded-full transition-colors text-sm font-medium ${
              direction === "long" ? "bg-green-500 text-white" : "text-gray-500"
            }`}
            onClick={() => setDirection("long")}
          >
            Long
          </button>
          <button
            className={`flex-1 py-2 px-4 rounded-full transition-colors text-sm font-medium ${
              direction === "short"
                ? "bg-gray-300 text-gray-800"
                : "text-gray-500"
            }`}
            onClick={() => setDirection("short")}
          >
            Short
          </button>
        </div>
      </div>

      {/* Amount input */}
      <div className="p-4">
        <label className="block text-xs text-gray-500 mb-2">Amount (USD)</label>
        <div className="relative">
          <input
            type="text"
            value={amount}
            onChange={handleAmountChange}
            className="w-full py-3 px-3 border border-gray-200 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm"
            placeholder="Enter amount"
          />
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 text-blue-600 text-sm font-medium"
            onClick={handleMaxAmount}
          >
            Max
          </button>
        </div>
        <div className="flex bg-blue-50 rounded-md p-2 mt-2">
          <p className="text-xs text-blue-700">Available: ${available}</p>
          <button
            className="ml-auto text-xs text-blue-600 font-medium"
            onClick={handleMaxAmount}
          >
            Max
          </button>
        </div>
      </div>

      {/* Leverage control */}
      <div className="px-4 py-3 border-t border-b border-gray-100">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs text-gray-500">Leverage</span>
          <div className="flex items-center">
            <button
              onClick={() => adjustLeverage(false)}
              className="w-7 h-7 bg-white border border-gray-200 text-gray-500 rounded-full flex items-center justify-center hover:bg-gray-50"
              disabled={leverage <= 1}
            >
              <Minus size={14} />
            </button>
            <span className="mx-3 font-bold text-blue-600">{leverage}×</span>
            <button
              onClick={() => adjustLeverage(true)}
              className="w-7 h-7 bg-white border border-gray-200 text-gray-500 rounded-full flex items-center justify-center hover:bg-gray-50"
              disabled={leverage >= 10}
            >
              <Plus size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Price details */}
      <div className="p-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-gray-500 mb-1">Entry price</p>
            <p className="text-sm font-medium">${entryPrice}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-1">Liquidation price</p>
            <p className="text-sm font-medium">${liquidationPrice}</p>
          </div>
        </div>

        {/* Submit button */}
        <button className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm mt-4">
          Open Position
        </button>
      </div>
    </div>
  );
};

export default PredictionPlacement;
