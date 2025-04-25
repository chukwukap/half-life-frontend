"use client";

import { FC } from "react";
import { TraderCard } from "./";

// Mock data for top traders
const topTraders = [
  {
    id: "1",
    name: "Basaltic_kite",
    avatar: "/avatars/trader1.png",
    totalProfit: "$50,361",
    winRate: "90%",
    totalTrades: 150,
    bestToken: "SHIB",
  },
  {
    id: "2",
    name: "Tx_the_gamer",
    avatar: "/avatars/trader2.png",
    totalProfit: "$47,548",
    winRate: "89%",
    totalTrades: 147,
    bestToken: "SHIB",
  },
  {
    id: "3",
    name: "Galactic_Hero",
    avatar: "/avatars/trader3.png",
    totalProfit: "$45,934",
    winRate: "87%",
    totalTrades: 144,
    bestToken: "SHIB",
  },
];

const LeaderboardTopTraders: FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
      {topTraders.map((trader, index) => {
        const rankLabels = ["#1 Rank", "#2 Rank", "#3 Rank"];

        return (
          <div key={trader.id} className="bg-white p-6 rounded-3xl shadow-sm">
            <TraderCard rank={rankLabels[index]} trader={trader} />
          </div>
        );
      })}
    </div>
  );
};

export default LeaderboardTopTraders;
