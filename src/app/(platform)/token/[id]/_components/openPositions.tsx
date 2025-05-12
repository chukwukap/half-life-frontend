"use client";

import { FC } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface OpenPositionsProps {
  positionValue: string;
}

const OpenPositions: FC<OpenPositionsProps> = ({ positionValue }) => {
  // Mock data for position
  const position = {
    token: {
      name: "WIF",
      fullName: "dogwifhat",
      logoUrl: "/tokens/wif.svg",
    },
    type: "Long 5x",
    entryPrice: "$0.00008",
    currentPrice: "$0.00009",
    liquidationPrice: "$0.00007",
    fundingRate: "+0.0125%",
    pnl: positionValue,
  };

  return (
    <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
      {/* Component header */}
      <div className="flex items-center p-4 pb-3">
        <div className="flex items-center text-blue-600">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2"
          >
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              fill="#EEF2FF"
              stroke="#3B82F6"
              strokeWidth="2"
            />
            <path
              d="M8 12H16"
              stroke="#3B82F6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 16V8"
              stroke="#3B82F6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="font-medium">Open Positions</span>
        </div>
      </div>

      {/* Position card */}
      <div className="bg-white rounded-2xl overflow-hidden mx-4 mb-4 border border-gray-100">
        {/* Position header */}
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="relative w-10 h-10 mr-3">
                <Image
                  src={position.token.logoUrl}
                  alt={position.token.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
              <div>
                <div className="font-semibold">{position.token.name}</div>
                <div className="text-gray-500 text-xs">
                  {position.token.fullName}
                </div>
              </div>
              <div className="ml-4 px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">
                {position.type}
              </div>
            </div>
            <div className="text-green-500 font-semibold text-xl">
              {position.pnl}
            </div>
          </div>
        </div>

        {/* Position details */}
        <div className="p-4">
          <div className="grid grid-cols-2 gap-x-4 gap-y-5">
            <div>
              <p className="text-gray-500 text-xs mb-1">Entry price</p>
              <p className="text-base font-semibold">{position.entryPrice}</p>
            </div>
            <div>
              <p className="text-gray-500 text-xs mb-1">Current price</p>
              <p className="text-base font-semibold">{position.currentPrice}</p>
            </div>
            <div>
              <p className="text-gray-500 text-xs mb-1">Liquidation price</p>
              <p className="text-base font-semibold">
                {position.liquidationPrice}
              </p>
            </div>
            <div>
              <p className="text-gray-500 text-xs mb-1">Funding rate</p>
              <p className="text-base font-semibold text-green-500">
                {position.fundingRate}
              </p>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="p-4 space-y-3">
          <button className="w-full py-3 bg-blue-50 text-blue-600 rounded-xl text-sm font-medium hover:bg-blue-100 transition-colors">
            Modify
          </button>
          <button className="w-full py-3 bg-red-50 text-red-500 rounded-xl text-sm font-medium hover:bg-red-100 transition-colors">
            Close Position
          </button>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center items-center py-4 space-x-2">
          <button className="p-2 rounded-full hover:bg-gray-100 text-gray-400">
            <ChevronLeft size={18} />
          </button>

          <div className="flex space-x-1">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className={`w-1.5 h-1.5 rounded-full ${
                  i === 0 ? "bg-blue-600" : "bg-gray-200"
                }`}
              />
            ))}
          </div>

          <button className="p-2 rounded-full hover:bg-gray-100 text-gray-400">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OpenPositions;
