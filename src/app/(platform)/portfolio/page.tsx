"use client";

import { FC } from "react";
import {
  TimeFilter,
  PortfolioValue,
  TradingStats,
  Achievements,
  TradeHistory,
} from "./_components";
import {
  FireIcon,
  ChartLineIcon,
  CoinsIcon,
  WinRateIcon,
} from "@/components/icons";

const PortfolioPage: FC = () => {
  return (
    <div className="container mx-auto px-4 py-6 max-w-screen-xl">
      {/* Time filter */}
      <TimeFilter />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Portfolio value */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-2">
            <CoinsIcon className="w-5 h-5 text-[#335CFF]" />
            <span className="font-semibold text-base text-[#181A20]">
              Portfolio value
            </span>
          </div>
          <PortfolioValue />
        </div>

        {/* Trading stats */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-2">
            <ChartLineIcon className="w-5 h-5 text-[#335CFF]" />
            <span className="font-semibold text-base text-[#181A20]">
              Trading stats
            </span>
          </div>
          <TradingStats />
        </div>

        {/* Achievements */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-2">
            <WinRateIcon className="w-5 h-5 text-[#335CFF]" />
            <span className="font-semibold text-base text-[#181A20]">
              Achievements
            </span>
          </div>
          <Achievements />
        </div>
      </div>

      {/* Trade history */}
      <div className="flex items-center gap-2 mb-4">
        <FireIcon className="w-5 h-5 text-[#335CFF]" />
        <span className="font-semibold text-base text-[#181A20]">
          Trade History
        </span>
      </div>
      <TradeHistory />
    </div>
  );
};

export default PortfolioPage;
