import Image from "next/image";
import React from "react";

/**
 * OpenPositionsTab - Pixel-perfect open positions content for the single token page
 * Security: Stateless, safe for all environments
 */
const positions = [
  {
    type: "Long",
    leverage: 5,
    pnlUsd: "+1210.35 USD",
    pnlPercent: "+12.10%",
    entry: "$0.00008",
    current: "$0.00009",
    liquidation: "$0.00007",
    funding: "+0.0125%",
    avatar: "/tokens/wif.png",
    name: "WIF",
    fullName: "dogwifhat",
    color: "#05CD99",
  },
  {
    type: "Short",
    leverage: 3,
    pnlUsd: "+750.24 USD",
    pnlPercent: "+15.00%",
    entry: "$0.00008",
    current: "$0.00009",
    liquidation: "$0.00007",
    funding: "+0.0125%",
    avatar: "/tokens/wif.png",
    name: "WIF",
    fullName: "dogwifhat",
    color: "#FF5A5A",
  },
];

const OpenPositionsTab: React.FC = () => {
  return (
    <div className="bg-white rounded-[24px] p-8">
      <div className="flex flex-wrap gap-8 mb-8">
        {positions.map((pos, i) => (
          <div
            key={i}
            className={`flex-1 min-w-[340px] max-w-[420px] bg-white rounded-[32px] p-8 border border-[#E9EAEC] relative ${
              pos.type === "Long"
                ? "border-t-4 border-t-[#05CD99]"
                : "border-t-4 border-t-[#FF5A5A]"
            }`}
          >
            {/* Header */}
            <div className="flex items-center mb-4">
              <Image
                width={48}
                height={48}
                src={pos.avatar}
                alt={pos.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <div className="font-bold text-lg text-[#181A20]">
                  {pos.name}
                </div>
                <div className="text-[#7D8FB3] text-sm">{pos.fullName}</div>
              </div>
              <div className="ml-auto">
                <span
                  className={`px-4 py-1 rounded-full text-sm font-semibold ${
                    pos.type === "Long"
                      ? "bg-[#E6FBF4] text-[#05CD99]"
                      : "bg-[#FEECEC] text-[#FF5A5A]"
                  }`}
                >
                  {pos.type} {pos.leverage}x
                </span>
              </div>
            </div>
            {/* PnL */}
            <div className="flex items-center mb-4">
              <div className="text-[#05CD99] text-2xl font-bold mr-2">
                {pos.pnlUsd}
              </div>
              <div className="text-[#05CD99] text-lg font-semibold">
                ({pos.pnlPercent})
              </div>
            </div>
            {/* Details grid */}
            <div className="grid grid-cols-2 gap-y-2 gap-x-8 mb-6">
              <div>
                <div className="text-[#7D8FB3] text-xs mb-1">Entry price</div>
                <div className="font-bold text-base text-[#181A20]">
                  {pos.entry}
                </div>
              </div>
              <div>
                <div className="text-[#7D8FB3] text-xs mb-1">Current price</div>
                <div className="font-bold text-base text-[#181A20]">
                  {pos.current}
                </div>
              </div>
              <div>
                <div className="text-[#7D8FB3] text-xs mb-1">
                  Liquidation price
                </div>
                <div className="font-bold text-base text-[#181A20]">
                  {pos.liquidation}
                </div>
              </div>
              <div>
                <div className="text-[#7D8FB3] text-xs mb-1">Funding rate</div>
                <div className="font-bold text-base text-[#181A20]">
                  {pos.funding}
                </div>
              </div>
            </div>
            {/* Action buttons */}
            <div className="flex gap-4">
              <button className="flex-1 py-4 rounded-full bg-[#EEF2FF] text-[#335CFF] text-lg font-semibold hover:bg-[#E6EDFF] transition-colors">
                Modify
              </button>
              <button className="flex-1 py-4 rounded-full bg-[#FEECEC] text-[#FF5A5A] text-lg font-semibold hover:bg-[#FFD6D6] transition-colors">
                Close Position
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination */}
      <div className="flex items-center justify-center gap-2">
        <button className="w-8 h-8 flex items-center justify-center rounded-full text-[#7D8FB3] hover:bg-[#F5F8FF] text-lg">
          &#60;
        </button>
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            className={`w-8 h-8 flex items-center justify-center rounded-full font-bold text-base transition-colors ${
              n === 1
                ? "bg-white text-[#181A20] ring-2 ring-[#335CFF]"
                : "text-[#181A20] hover:bg-[#F5F8FF]"
            }`}
          >
            {n}
          </button>
        ))}
        <button className="w-8 h-8 flex items-center justify-center rounded-full text-[#7D8FB3] hover:bg-[#F5F8FF] text-lg">
          &#62;
        </button>
      </div>
    </div>
  );
};

export default OpenPositionsTab;
