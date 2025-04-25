"use client";

import { FC } from "react";
import {
  TimeFilter,
  PortfolioValue,
  TradingStats,
  Achievements,
  TradeHistory,
} from "./_components";

const PortfolioPage: FC = () => {
  return (
    <div className="container mx-auto px-4 py-6 max-w-screen-xl">
      {/* Time filter */}
      <TimeFilter />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Portfolio value */}
        <div className="md:col-span-1">
          <PortfolioValue />
        </div>

        {/* Trading stats */}
        <div className="md:col-span-1">
          <TradingStats />
        </div>

        {/* Achievements */}
        <div className="md:col-span-1">
          <Achievements />
        </div>
      </div>

      {/* Trade history */}
      <TradeHistory />
    </div>
  );
};

export default PortfolioPage;
