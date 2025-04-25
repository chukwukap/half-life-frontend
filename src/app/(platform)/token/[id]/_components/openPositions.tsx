"use client";

import { FC } from "react";
import Image from "next/image";

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
    fundingRate: "+0.0125%",
    pnl: positionValue,
  };

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      {/* Position summary */}
      <div className="p-4 border-b">
        <div className="flex items-center">
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8">
              <Image
                src={position.token.logoUrl}
                alt={position.token.name}
                width={32}
                height={32}
                className="rounded-full"
              />
            </div>
            <div>
              <div className="font-medium">{position.token.name}</div>
              <div className="text-gray-500 text-xs">
                {position.token.fullName}
              </div>
            </div>
          </div>
          <div className="ml-4 px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
            {position.type}
          </div>
          <div className="ml-auto text-green-500 font-medium">
            {position.pnl}
          </div>
        </div>
      </div>

      {/* Position details */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-2 p-4">
        <div>
          <p className="text-xs text-gray-500 mb-1">Entry price</p>
          <p className="text-sm font-medium">{position.entryPrice}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 mb-1">Current price</p>
          <p className="text-sm font-medium">{position.currentPrice}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 mb-1">Liquidation price</p>
          <p className="text-sm font-medium">{position.entryPrice}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 mb-1">Funding rate</p>
          <p className="text-sm font-medium text-green-500">
            {position.fundingRate}
          </p>
        </div>
      </div>

      {/* Action buttons */}
      <div className="p-4 flex flex-col gap-2">
        <button className="w-full py-2 px-4 bg-blue-100 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-200 transition-colors">
          Modify
        </button>
        <button className="w-full py-2 px-4 bg-red-100 text-red-600 rounded-lg text-sm font-medium hover:bg-red-200 transition-colors">
          Close Position
        </button>
      </div>
    </div>
  );
};

export default OpenPositions;
