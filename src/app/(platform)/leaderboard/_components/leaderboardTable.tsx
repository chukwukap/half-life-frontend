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
    name: "Bastille_btc",
    avatar: "/avatars/trader1.png",
    totalProfit: "$50,361",
    winRate: "90%",
    totalTrades: 150,
    bestToken: "TRUMP",
  },
  {
    id: "2",
    name: "Te_the_gamer",
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
    bestToken: "SUCHIR",
  },
  {
    id: "4",
    name: "Quantum_Coder",
    avatar: "/avatars/trader4.png",
    totalProfit: "$43,109",
    winRate: "86%",
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
    bestToken: "PWOPE",
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
    bestToken: "1SOL",
  },
];

const LeaderboardTable: FC = () => {
  return (
    <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-100">
            <th className="text-gray-500 text-sm font-medium text-left py-4 px-6">
              Rank
            </th>
            <th className="text-gray-500 text-sm font-medium text-left py-4 px-6">
              Trader
            </th>
            <th className="text-gray-500 text-sm font-medium text-left py-4 px-6">
              Total Profit
            </th>
            <th className="text-gray-500 text-sm font-medium text-left py-4 px-6">
              Win Rate
            </th>
            <th className="text-gray-500 text-sm font-medium text-left py-4 px-6">
              Total trades
            </th>
            <th className="text-gray-500 text-sm font-medium text-left py-4 px-6">
              Best Token
            </th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((trader, index) => (
            <tr
              key={trader.id}
              className="border-b border-gray-100 hover:bg-gray-50"
            >
              {/* Rank */}
              <td className="text-sm py-5 px-6">{index + 1}</td>

              {/* Trader */}
              <td className="py-5 px-6">
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
              </td>

              {/* Total Profit */}
              <td className="text-green-500 font-medium py-5 px-6">
                {trader.totalProfit}
              </td>

              {/* Win Rate */}
              <td className="font-medium py-5 px-6">{trader.winRate}</td>

              {/* Total trades */}
              <td className="font-medium py-5 px-6">{trader.totalTrades}</td>

              {/* Best Token */}
              <td className="font-medium py-5 px-6">{trader.bestToken}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaderboardTable;
