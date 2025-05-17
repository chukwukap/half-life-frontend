import React, { useState } from "react";
import Image from "next/image";
import { WalletIcon, CaretDownIcon, ArrowUpIcon } from "@/components/icons";

// Mock data for demonstration
const positions = [
  {
    logo: "/assets/img/tokens/wif.png",
    name: "WIF",
    subtitle: "dogwifhat",
    leverage: "Long 5x",
    leverageColor: "bg-green-100 text-green-600",
    entry: 3.05,
    liquidation: 1.95,
    size: "$113,950.01",
    pnl: -2.61,
    pnlPercent: -0.3,
  },
  {
    logo: "/assets/img/tokens/doge.png",
    name: "DOGE",
    subtitle: "Dogecoin",
    leverage: "Short 3x",
    leverageColor: "bg-red-100 text-red-500",
    entry: null,
    liquidation: null,
    size: null,
    pnl: 1210.35,
    pnlPercent: 12.1,
  },
];

/**
 * PositionsCard - Accordion for user's open positions.
 * Only one position can be open at a time.
 * Security: Stateless, no user input, safe for all environments.
 * Accessibility: Uses semantic HTML and alt text for images.
 */
const PositionsCard: React.FC = () => {
  // Accordion state: index of open position, or null
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      className="bg-white rounded-[28px] p-6 border border-[#E9EAEC] mb-6"
      aria-label="Positions"
    >
      {/* Header */}
      <div className="flex items-center mb-4">
        <WalletIcon
          className="w-6 h-6 text-[#335CFF] mr-2"
          aria-hidden="true"
        />
        <span className="font-bold text-xl text-[#181A20]">Positions</span>
      </div>
      {/* Positions list */}
      <div className="flex flex-col gap-4">
        {positions.map((pos, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={pos.name + idx}
              className={`rounded-2xl border border-[#E9EAEC] p-4 flex flex-col gap-2 bg-white transition-all duration-200 ${
                isOpen ? "shadow-md" : ""
              }`}
            >
              <button
                className="flex items-center justify-between w-full focus:outline-none"
                aria-expanded={isOpen}
                aria-controls={`position-details-${idx}`}
                onClick={() => handleToggle(idx)}
                tabIndex={0}
                style={{ WebkitTapHighlightColor: "transparent" }}
              >
                <div className="flex items-center gap-3">
                  <Image
                    src={pos.logo}
                    alt={pos.name}
                    width={40}
                    height={40}
                    className="rounded-full border border-[#E9EAEC]"
                  />
                  <div>
                    <span className="font-bold text-lg text-[#181A20] leading-tight">
                      {pos.name}
                    </span>
                    <div className="text-[#B1B5C3] text-sm leading-tight">
                      {pos.subtitle}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {/* Leverage badge */}
                  <span
                    className={`px-4 py-1 rounded-full font-semibold text-sm ${pos.leverageColor} flex items-center gap-1`}
                  >
                    {pos.leverage}
                  </span>
                  {/* Caret icon for accordion */}
                  {isOpen ? (
                    <ArrowUpIcon className="w-5 h-5 text-[#335CFF]" />
                  ) : (
                    <CaretDownIcon className="w-5 h-5 text-[#335CFF]" />
                  )}
                </div>
              </button>
              {/* Collapsed: Only show PnL row */}
              {!isOpen && (
                <div className="flex flex-col gap-1 mt-2">
                  <span
                    className={`font-bold text-lg ${
                      pos.pnl < 0 ? "text-red-500" : "text-green-500"
                    }`}
                  >
                    {pos.pnl < 0 ? "-" : "+"}$
                    {Math.abs(pos.pnl).toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </span>
                  <span
                    className={`text-base font-semibold ${
                      pos.pnlPercent < 0 ? "text-red-500" : "text-green-500"
                    }`}
                  >
                    ({pos.pnlPercent > 0 ? "+" : ""}
                    {pos.pnlPercent.toFixed(2)}%)
                  </span>
                </div>
              )}
              {/* Open: Show all details */}
              {isOpen && (
                <div id={`position-details-${idx}`} className="mt-4">
                  {pos.entry !== null && (
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex flex-col gap-1">
                        <span className="text-[#B1B5C3] text-sm font-medium">
                          Entry
                        </span>
                        <span className="font-bold text-lg text-[#181A20]">
                          {pos.entry}{" "}
                          <sup className="text-xs align-super">A</sup>
                        </span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-[#B1B5C3] text-sm font-medium">
                          Liquidated at
                        </span>
                        <span className="font-bold text-lg text-[#181A20]">
                          {pos.liquidation}{" "}
                          <sup className="text-xs align-super">A</sup>
                        </span>
                      </div>
                      <div className="col-span-2 flex justify-between items-center mt-2">
                        <span className="text-[#B1B5C3] text-sm font-medium">
                          Position size
                        </span>
                        <span className="font-bold text-lg text-[#181A20]">
                          {pos.size}
                        </span>
                      </div>
                    </div>
                  )}
                  {/* PnL row */}
                  <div className="col-span-2 flex justify-between items-center mt-4">
                    <span
                      className={`font-bold text-lg ${
                        pos.pnl < 0 ? "text-red-500" : "text-green-500"
                      }`}
                    >
                      {pos.pnl < 0 ? "-" : "+"}$
                      {Math.abs(pos.pnl).toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </span>
                    <span
                      className={`text-base font-semibold ${
                        pos.pnlPercent < 0 ? "text-red-500" : "text-green-500"
                      }`}
                    >
                      ({pos.pnlPercent > 0 ? "+" : ""}
                      {pos.pnlPercent.toFixed(2)}%)
                    </span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PositionsCard;
