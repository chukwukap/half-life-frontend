"use client";

import { FC } from "react";

const TradingStats: FC = () => {
  // Mock data
  const stats = {
    totalTrades: "22",
    winRate: "63%",
    unrealizedPnl: "+$1,436.92",
    realizedPnl: "+$4,216.50",
  };

  const StatItem: FC<{ label: string; value: string; isGreen?: boolean }> = ({
    label,
    value,
    isGreen,
  }) => (
    <div className="flex items-center">
      <div className="bg-blue-50 p-3 rounded-full flex items-center justify-center">
        <svg
          className="h-5 w-5 text-blue-600"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2L6 8L12 14L18 8L12 2Z"
            fill="#EBF2FF"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 8H22"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 8L12 21L18 8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="ml-3">
        <div className="text-gray-500 text-xs mb-1">{label}</div>
        <div
          className={`text-xl font-semibold ${isGreen ? "text-green-500" : ""}`}
        >
          {value}
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-3xl p-6 h-full border border-gray-100 shadow-sm">
      <div className="flex items-center mb-6">
        <svg
          className="h-5 w-5 text-blue-600 mr-2"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 6L12 1L7 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 1V16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 12V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h2 className="text-blue-600 font-medium">Trading stats</h2>
      </div>

      <div className="grid grid-cols-2 gap-y-8 gap-x-4">
        <StatItem label="Total Trades" value={stats.totalTrades} />
        <StatItem label="Win Rate" value={stats.winRate} />
        <StatItem
          label="Unrealized PnL"
          value={stats.unrealizedPnl}
          isGreen={true}
        />
        <StatItem
          label="Realized PnL"
          value={stats.realizedPnl}
          isGreen={true}
        />
      </div>
    </div>
  );
};

export default TradingStats;
