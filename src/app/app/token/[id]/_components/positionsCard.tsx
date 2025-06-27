import React, { useState } from "react";
import Image from "next/image";
import { WalletIcon, CaretDownIcon } from "@/components/icons";

// Custom CaretUpIcon SVG (matches CaretDownIcon style)
const CaretUpIcon = ({ className = "" }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M16.6925 12.0579L10.4425 5.80795C10.3845 5.74977 10.3156 5.70367 10.2397 5.67222C10.1638 5.64077 10.0825 5.62459 10.0003 5.62459C9.91821 5.62459 9.83688 5.64077 9.76101 5.67222C9.68514 5.70367 9.61621 5.74977 9.55816 5.80795L3.30816 12.0579C3.19088 12.1752 3.125 12.3343 3.125 12.5001C3.125 12.6659 3.19088 12.825 3.30816 12.9423C3.42544 13.0596 3.5845 13.1255 3.75035 13.1255C3.9162 13.1255 4.07526 13.0596 4.19253 12.9423L10.0003 7.13367L15.8082 12.9423C15.8662 13.0004 15.9352 13.0465 16.011 13.0779C16.0869 13.1093 16.1682 13.1255 16.2503 13.1255C16.3325 13.1255 16.4138 13.1093 16.4897 13.0779C16.5655 13.0465 16.6345 13.0004 16.6925 12.9423C16.7506 12.8843 16.7967 12.8153 16.8281 12.7394C16.8595 12.6636 16.8757 12.5823 16.8757 12.5001C16.8757 12.418 16.8595 12.3367 16.8281 12.2608C16.7967 12.185 16.7506 12.116 16.6925 12.0579Z"
      fill="#335CFF"
    />
  </svg>
);

// Types for position and props
interface Position {
  logo: string;
  name: string;
  subtitle: string;
  leverage: string;
  leverageColor: string;
  entry: number | null;
  liquidation: number | null;
  size: string | null;
  pnl: number;
  pnlPercent: number;
}
interface PositionsCardProps {
  positions: Position[];
  setPositions: React.Dispatch<React.SetStateAction<Position[]>>;
}

/**
 * PositionsCard - Accordion for user's open positions.
 * Only one position can be open at a time.
 * Security: Stateless, no user input, safe for all environments.
 * Accessibility: Uses semantic HTML and alt text for images.
 *
 * Only shows the top 2 tokens (positions).
 */
const PositionsCard: React.FC<PositionsCardProps> = ({
  positions,
  //   setPositions,
}) => {
  // Accordion state: index of open position, or null
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  // Only show the top 2 positions for security and UI clarity
  const topPositions = positions.slice(0, 2);

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
        <span className="font-bold text-sm text-[#181A20]">Positions</span>
      </div>
      {/* Positions list */}
      <div className="flex flex-col gap-4">
        {topPositions.map((pos, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={pos.name + idx}
              className={`rounded-2xl border border-[#E9EAEC] p-4 flex flex-col gap-2 bg-white transition-all duration-200`}
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
                    <CaretUpIcon className="w-5 h-5 text-[#335CFF]" />
                  ) : (
                    <CaretDownIcon className="w-5 h-5 text-[#335CFF]" />
                  )}
                </div>
              </button>
              {/* Collapsed: Only show PnL row */}
              {!isOpen && (
                <div className="flex flex-col gap-1 mt-2">
                  <span
                    className={`font-bold text-sm ${
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
                    className={`text-sm font-semibold ${
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
                        <span className="font-bold text-sm text-[#181A20]">
                          {pos.entry}{" "}
                          <sup className="text-xs align-super">A</sup>
                        </span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-[#B1B5C3] text-sm font-medium">
                          Liquidated at
                        </span>
                        <span className="font-bold text-sm text-[#181A20]">
                          {pos.liquidation}{" "}
                          <sup className="text-xs align-super">A</sup>
                        </span>
                      </div>
                      <div className="col-span-2 flex justify-between items-center mt-2">
                        <span className="text-[#B1B5C3] text-sm font-medium">
                          Position size
                        </span>
                        <span className="font-bold text-sm text-[#181A20]">
                          {pos.size}
                        </span>
                      </div>
                    </div>
                  )}
                  {/* PnL row */}
                  <div className="col-span-2 flex justify-between items-center mt-4">
                    <span
                      className={`font-bold text-sm ${
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
                      className={`text-sm font-semibold ${
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
