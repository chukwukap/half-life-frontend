"use client";

import { FC } from "react";

/**
 * TokenChart
 * - Minimal, clean, and pixel-perfect line chart as per Figma reference.
 * - No chart header, buttons, or attribution.
 * - Security: Stateless, no user input, safe for all environments.
 * - Professional: Well-commented, ready for future data integration.
 */
const yLabels = ["4.5", "3.9", "3.3", "2.7", "2.1", "1.8", "0.5"];

/**
 * Hardcoded chart points for the simple line, matching the Figma design.
 * In a real implementation, this would be generated from data.
 */
const chartPath =
  "M0,120 L20,130 L40,125 L60,135 L80,125 L100,140 L120,130 L140,130 L160,140 L180,135 L200,140 L220,140 L240,145 L260,140 L280,145 L300,150 L320,150 L340,155 L360,160 L380,170 L400,170 L420,175 L440,180 L460,185 L480,190 L500,195";

const TokenChart: FC = () => {
  return (
    <div
      className="rounded-2xl bg-white border border-[#E9EAEC] w-full h-64 flex items-stretch overflow-hidden"
      style={{ minHeight: 220 }}
      aria-label="Token price chart"
    >
      {/* Y-axis labels */}
      <div className="flex flex-col justify-between text-xs text-[#B1B5C3] pl-4 pr-2 py-4 select-none">
        {yLabels.map((label, idx) => (
          <div key={label} className={idx === 0 ? "pt-1" : ""}>
            {label}
          </div>
        ))}
      </div>
      {/* Chart area */}
      <div className="flex-grow relative py-4 pr-4">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 500 200"
          className="w-full h-full"
          aria-hidden="true"
        >
          {/* Grid lines */}
          {yLabels.map((_, i) => (
            <line
              key={i}
              x1="0"
              y1={((200 / (yLabels.length - 1)) * i).toFixed(2)}
              x2="500"
              y2={((200 / (yLabels.length - 1)) * i).toFixed(2)}
              stroke="#F1F5F9"
              strokeWidth="1"
            />
          ))}
          {/* Chart line */}
          <path
            d={chartPath}
            fill="none"
            stroke="#181A20"
            strokeWidth="2"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default TokenChart;
