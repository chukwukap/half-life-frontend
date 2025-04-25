"use client";

import { FC } from "react";
import Image from "next/image";

interface TraderCardProps {
  rank: {
    label: string;
    color: string;
  };
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
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          {rank.label === "Top Trader" && (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2"
            >
              <path
                d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
                fill="#FFD700"
              />
            </svg>
          )}
          {rank.label === "Runner Up" && (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2"
            >
              <path
                d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
                fill="#4F46E5"
              />
            </svg>
          )}
          {rank.label === "Third Place" && (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2"
            >
              <path
                d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
                fill="#F97316"
              />
            </svg>
          )}
          <span className="font-medium">{rank.label}</span>
        </div>
        <div className={`text-xs font-medium ${rank.color}`}>
          {rank.label === "Top Trader"
            ? "#1 Rank"
            : rank.label === "Runner Up"
            ? "#2 Rank"
            : "#3 Rank"}
        </div>
      </div>

      <div className="flex items-center mb-4">
        <div className="relative w-12 h-12 mr-3">
          <Image
            src={trader.avatar}
            alt={trader.name}
            width={48}
            height={48}
            className="rounded-full"
          />
        </div>
        <div>
          <div className="font-medium">{trader.name}</div>
          <div className="text-xs text-gray-500">
            {trader.totalTrades} trades · {trader.winRate} win rate
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="bg-gray-50 p-4 rounded-xl">
          <div className="text-xs text-gray-500 mb-1">Total Profit</div>
          <div className="text-green-500 font-semibold text-xl">
            {trader.totalProfit}
          </div>
        </div>
        <div className="bg-gray-50 p-4 rounded-xl">
          <div className="text-xs text-gray-500 mb-1">Top Token</div>
          <div className="font-semibold text-xl">{trader.bestToken}</div>
        </div>
      </div>
    </div>
  );
};

export default TraderCard;
