"use client";

import { FC } from "react";
import { TraderCard } from "./";

// Mock data for top traders
const topTraders = [
  {
    id: "1",
    name: "Bastille_btc",
    avatar: "/assets/img/defiCTO.png",
    totalProfit: "$50,361",
    winRate: "90%",
    totalTrades: 150,
    bestToken: "SHIB",
  },
  {
    id: "2",
    name: "Te_the_gamer",
    avatar: "/assets/img/defiCTO.png",
    totalProfit: "$47,548",
    winRate: "89%",
    totalTrades: 147,
    bestToken: "SHIB",
  },
  {
    id: "3",
    name: "Galactic_Hero",
    avatar: "/assets/img/defiCTO.png",
    totalProfit: "$45,934",
    winRate: "87%",
    totalTrades: 144,
    bestToken: "SHIB",
  },
];

const LeaderboardTopTraders: FC = () => {
  const rankInfo = [
    {
      label: "Top Trader",
      color: "text-amber-500",
    },
    {
      label: "Runner Up",
      color: "text-indigo-600",
    },
    {
      label: "Third Place",
      color: "text-orange-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      {topTraders.map((trader, index) => (
        <div
          key={trader.id}
          className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100"
        >
          <TraderCard rank={rankInfo[index]} trader={trader} />
        </div>
      ))}
    </div>
  );
};

export default LeaderboardTopTraders;
