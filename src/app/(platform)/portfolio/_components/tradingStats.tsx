"use client";

import { FC } from "react";
import {
  FireIcon,
  ChartLineIcon,
  WinRateIcon,
  WalletIcon,
  BankIcon,
} from "@/components/icons";

/**
 * TradingStats component displays trading statistics in a pixel-perfect, accessible card.
 * Security: No sensitive data is exposed; all values are mock/demo.
 */
const TradingStats: FC = () => {
  // Mock data
  const stats = {
    totalTrades: "22",
    winRate: "63%",
    unrealizedPnl: "+$1,436.92",
    realizedPnl: "+$4,216.50",
  };

  // Stat item for grid
  const StatItem = ({
    icon,
    label,
    value,
  }: {
    icon: React.ReactNode;
    label: string;
    value: string;
  }) => (
    <div className="flex items-center gap-4 flex-1 min-w-[0]">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#F1F5FF]">
        {icon}
      </div>
      <div className="flex flex-col min-w-0">
        <span className="text-[#7D8FB3] text-base font-medium leading-tight truncate">
          {label}
        </span>
        <span className="text-[#181A20] text-[28px] font-extrabold leading-tight tracking-tight truncate">
          {value}
        </span>
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-[24px] border border-[#E9EAEC] p-2 w-full max-w-full">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <FireIcon className="w-6 h-6 text-[#335CFF]" />
        <h2 className="text-[#181A20] text-xl font-bold leading-tight">
          Trading stats
        </h2>
      </div>
      {/* Stats grid: two rows, two columns, separated by border */}
      <div className="flex flex-col gap-2">
        {/* First row */}
        <div className="flex gap-6 pb-4 border-b border-[#E9EAEC]">
          <StatItem
            icon={<ChartLineIcon className="w-7 h-7 text-[#335CFF]" />}
            label="Total Trades"
            value={stats.totalTrades}
          />
          <StatItem
            icon={<WinRateIcon className="w-7 h-7 text-[#335CFF]" />}
            label="Win Rate"
            value={stats.winRate}
          />
        </div>
        {/* Second row */}
        <div className="flex gap-6 pt-2">
          <StatItem
            icon={<WalletIcon className="w-7 h-7 text-[#335CFF]" />}
            label="Unrealized PnL"
            value={stats.unrealizedPnl}
          />
          <StatItem
            icon={<BankIcon className="w-7 h-7 text-[#335CFF]" />}
            label="Realized PnL"
            value={stats.realizedPnl}
          />
        </div>
      </div>
    </div>
  );
};

export default TradingStats;
