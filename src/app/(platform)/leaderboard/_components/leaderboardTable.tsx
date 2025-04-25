"use client";

import { FC } from "react";
import Image from "next/image";

// Interface for trader data
interface Trader {
  id: string;
  name: string;
  avatar: string;
  totalProfit: string;
  winRate: string;
  totalTrades: number;
  bestToken: string;
}

// Mock data for the leaderboard
const leaderboardData: Trader[] = [
  {
    id: "1",
    name: "Basaltic_kite",
    avatar: "/avatars/trader1.png",
    totalProfit: "$50,361",
    winRate: "90%",
    totalTrades: 150,
    bestToken: "TRUMP",
  },
  {
    id: "2",
    name: "Tx_the_gamer",
    avatar: "/avatars/trader2.png",
    totalProfit: "$47,548",
    winRate: "89%",
    totalTrades: 147,
    bestToken: "DOGE",
  },
  {
    id: "3",
    name: "Galactic_Hero",
    avatar: "/avatars/trader3.png",
    totalProfit: "$45,934",
    winRate: "87%",
    totalTrades: 144,
    bestToken: "SUSHI",
  },
  {
    id: "4",
    name: "Quantum_Coder",
    avatar: "/avatars/trader4.png",
    totalProfit: "$43,109",
    winRate: "85%",
    totalTrades: 141,
    bestToken: "MELANIA",
  },
  {
    id: "5",
    name: "Nebula_Surfer",
    avatar: "/avatars/trader5.png",
    totalProfit: "$40,409",
    winRate: "84%",
    totalTrades: 138,
    bestToken: "POPE",
  },
  {
    id: "6",
    name: "Pixel_Wizard",
    avatar: "/avatars/trader6.png",
    totalProfit: "$37,923",
    winRate: "83%",
    totalTrades: 135,
    bestToken: "PMT",
  },
  {
    id: "7",
    name: "Techno_Giant",
    avatar: "/avatars/trader7.png",
    totalProfit: "$35,536",
    winRate: "81%",
    totalTrades: 132,
    bestToken: "TRUMP",
  },
  {
    id: "8",
    name: "Arcane_Scholar",
    avatar: "/avatars/trader8.png",
    totalProfit: "$33,492",
    winRate: "80%",
    totalTrades: 129,
    bestToken: "FWR",
  },
  {
    id: "9",
    name: "Crypto_Explorer",
    avatar: "/avatars/trader9.png",
    totalProfit: "$30,037",
    winRate: "78%",
    totalTrades: 126,
    bestToken: "PXOPE",
  },
  {
    id: "10",
    name: "Data_Ninja",
    avatar: "/avatars/trader10.png",
    totalProfit: "$27,705",
    winRate: "77%",
    totalTrades: 123,
    bestToken: "ZARYA",
  },
  {
    id: "11",
    name: "rektober",
    avatar: "/avatars/trader11.png",
    totalProfit: "$25,365",
    winRate: "75%",
    totalTrades: 120,
    bestToken: "SOL",
  },
];

const LeaderboardTable: FC = () => {
  return (
    <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
      {/* Table header */}
      <div className="grid grid-cols-6 py-4 px-6 border-b border-gray-100">
        <div className="text-gray-500 text-sm font-medium">Rank</div>
        <div className="text-gray-500 text-sm font-medium">Trader</div>
        <div className="text-gray-500 text-sm font-medium">Total Profit</div>
        <div className="text-gray-500 text-sm font-medium">Win Rate</div>
        <div className="text-gray-500 text-sm font-medium">Total trades</div>
        <div className="text-gray-500 text-sm font-medium">Best Token</div>
      </div>

      {/* Table rows */}
      {leaderboardData.map((trader, index) => (
        <div
          key={trader.id}
          className="grid grid-cols-6 py-5 px-6 items-center border-b border-gray-100 hover:bg-gray-50"
        >
          {/* Rank */}
          <div className="text-sm">{index + 1}</div>

          {/* Trader */}
          <div className="flex items-center">
            <div className="relative w-8 h-8 mr-3">
              <Image
                src={trader.avatar}
                alt={trader.name}
                width={32}
                height={32}
                className="rounded-full"
              />
            </div>
            <span className="font-medium text-sm">{trader.name}</span>
          </div>

          {/* Total Profit */}
          <div className="text-green-500 font-medium">{trader.totalProfit}</div>

          {/* Win Rate */}
          <div className="font-medium">{trader.winRate}</div>

          {/* Total trades */}
          <div className="font-medium">{trader.totalTrades}</div>

          {/* Best Token */}
          <div className="font-medium">{trader.bestToken}</div>
        </div>
      ))}
    </div>
  );
};

export default LeaderboardTable;
