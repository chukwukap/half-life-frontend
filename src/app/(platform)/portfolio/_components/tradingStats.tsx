"use client";

import { FC } from "react";

// Trading stat item component
interface StatItemProps {
  label: string;
  value: string;
  icon?: React.ReactNode;
}

const StatItem: FC<StatItemProps> = ({ label, value, icon }) => {
  return (
    <div className="flex items-start">
      <div className="bg-blue-50 p-2 rounded-lg mr-3">
        {icon || (
          <svg
            className="h-5 w-5 text-blue-600"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
      <div>
        <div className="text-gray-500 text-xs mb-1">{label}</div>
        <div className="text-xl font-bold">{value}</div>
      </div>
    </div>
  );
};

const TradingStats: FC = () => {
  // Mock data
  const stats = {
    totalTrades: "22",
    winRate: "63%",
    unrealizedPnl: "+$1,436.92",
    realizedPnl: "+$4,216.50",
  };

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
            d="M16 6L12 2L8 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 2V16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 14L21 19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21L5 21C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19L3 14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h2 className="text-blue-600 font-medium">Trading stats</h2>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <StatItem label="Total Trades" value={stats.totalTrades} />
        <StatItem label="Win Rate" value={stats.winRate} />
        <StatItem label="Unrealized PnL" value={stats.unrealizedPnl} />
        <StatItem label="Realized PnL" value={stats.realizedPnl} />
      </div>
    </div>
  );
};

export default TradingStats;
