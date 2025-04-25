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
      <div className="p-4 border-b">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10">
              <Image
                src={position.token.logoUrl}
                alt={position.token.name}
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
            <div>
              <div className="font-medium">{position.token.name}</div>
              <div className="text-gray-500 text-sm">
                {position.token.fullName}
              </div>
            </div>
            <div className="ml-4 px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
              {position.type}
            </div>
          </div>
          <div className="text-green-500 font-medium text-lg">
            {position.pnl}
          </div>
        </div>
      </div>

      {/* Position details */}
      <div className="p-4 grid grid-cols-2 gap-4">
        <div>
          <p className="text-gray-500 text-sm mb-1">Entry price</p>
          <p className="font-medium">{position.entryPrice}</p>
        </div>
        <div>
          <p className="text-gray-500 text-sm mb-1">Current price</p>
          <p className="font-medium">{position.currentPrice}</p>
        </div>
        <div>
          <p className="text-gray-500 text-sm mb-1">Funding rate</p>
          <p className="font-medium text-green-500">{position.fundingRate}</p>
        </div>
      </div>

      {/* Action buttons */}
      <div className="p-4 grid grid-cols-2 gap-4">
        <button className="py-2 px-4 bg-blue-100 text-blue-600 rounded-lg font-medium hover:bg-blue-200 transition-colors">
          Modify
        </button>
        <button className="py-2 px-4 bg-red-100 text-red-600 rounded-lg font-medium hover:bg-red-200 transition-colors">
          Close Position
        </button>
      </div>
    </div>
  );
};

export default OpenPositions;
