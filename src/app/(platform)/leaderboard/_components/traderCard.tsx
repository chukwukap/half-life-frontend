"use client";

import { FC } from "react";
import Image from "next/image";

interface TraderCardProps {
  rank: string;
  trader: {
    id: string;
    name: string;
    avatar: string;
    totalProfit: string;
    winRate: string;
    totalTrades: number;
    bestToken: string;
  };
}

const TraderCard: FC<TraderCardProps> = ({ rank, trader }) => {
  // Format profit as currency
  const formattedProfit = trader.totalProfit;

  return (
    <div className="flex flex-col items-center">
      <div className="text-xs font-medium text-gray-500 mb-2">{rank}</div>
      <div className="relative w-16 h-16 mb-3">
        <Image
          src={trader.avatar}
          alt={trader.name}
          width={64}
          height={64}
          className="rounded-full"
        />
      </div>
      <div className="font-medium text-sm mb-1">{trader.name}</div>
      <div className="text-xs text-gray-500 mb-4">
        {trader.totalTrades} trades · {trader.winRate} win rate
      </div>

      <div className="w-full">
        <div className="text-xs text-gray-500 mb-1">Total Profit</div>
        <div className="text-green-500 font-semibold">{formattedProfit}</div>
      </div>

      <div className="w-full mt-3">
        <div className="text-xs text-gray-500 mb-1">Top Token</div>
        <div className="font-semibold">{trader.bestToken}</div>
      </div>
    </div>
  );
};

export default TraderCard;
