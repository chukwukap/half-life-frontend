"use client";

import { FC } from "react";

/**
 * TokenChart
 * - Minimal, clean, and pixel-perfect line chart as per Figma reference.
 * - Chart size is larger for better visibility.
 * - Chart line changes for each token based on tokenId prop.
 * - Security: Stateless, no user input, safe for all environments.
 * - Professional: Well-commented, ready for future data integration.
 */
const yLabels = ["4.5", "3.9", "3.3", "2.7", "2.1", "1.8", "0.5"];

// Hardcoded chart paths for different tokens (for demo purposes)
const chartPaths: Record<string, string> = {
  default:
    "M0,180 L20,170 L40,175 L60,165 L80,175 L100,160 L120,170 L140,170 L160,160 L180,165 L200,160 L220,160 L240,155 L260,160 L280,155 L300,150 L320,150 L340,145 L360,140 L380,130 L400,130 L420,125 L440,120 L460,115 L480,110 L500,105",
  zora: "M0,180 L20,160 L40,170 L60,150 L80,140 L100,130 L120,120 L140,110 L160,120 L180,130 L200,140 L220,150 L240,160 L260,170 L280,180 L300,170 L320,160 L340,150 L360,140 L380,130 L400,120 L420,110 L440,100 L460,90 L480,80 L500,70",
  eth: "M0,180 L20,185 L40,180 L60,175 L80,170 L100,165 L120,160 L140,155 L160,150 L180,145 L200,140 L220,135 L240,130 L260,125 L280,120 L300,115 L320,110 L340,105 L360,100 L380,95 L400,90 L420,85 L440,80 L460,75 L480,70 L500,65",
  doge: "M0,180 L20,175 L40,170 L60,165 L80,160 L100,155 L120,150 L140,145 L160,140 L180,135 L200,130 L220,125 L240,120 L260,115 L280,110 L300,105 L320,100 L340,95 L360,90 L380,85 L400,80 L420,75 L440,70 L460,65 L480,60 L500,55",
};

interface TokenChartProps {
  tokenId?: string;
}

const TokenChart: FC<TokenChartProps> = ({ tokenId }) => {
  // Pick a chart path based on tokenId, fallback to default
  let chartPath = chartPaths.default;
  if (tokenId && chartPaths[tokenId]) {
    chartPath = chartPaths[tokenId];
  }

  return (
    <div
      className="rounded-2xl bg-white border border-[#E9EAEC] w-full h-96 flex items-stretch overflow-hidden"
      style={{ minHeight: 320 }}
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
          viewBox="0 0 500 300"
          className="w-full h-full"
          aria-hidden="true"
        >
          {/* Grid lines */}
          {yLabels.map((_, i) => (
            <line
              key={i}
              x1="0"
              y1={((300 / (yLabels.length - 1)) * i).toFixed(2)}
              x2="500"
              y2={((300 / (yLabels.length - 1)) * i).toFixed(2)}
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
