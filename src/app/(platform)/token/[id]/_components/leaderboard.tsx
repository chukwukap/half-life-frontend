"use client";

import { FC } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Type for leaderboard entry
interface LeaderboardEntry {
  rank: number;
  username: string;
  pnl: string;
  pnlValue: number;
}

const Leaderboard: FC = () => {
  // Mock data for the leaderboard
  const leaderboardData: LeaderboardEntry[] = [
    { rank: 1, username: "Druids_01", pnl: "$3,285.94", pnlValue: 3285.94 },
    { rank: 2, username: "Bastille_btc", pnl: "$2,565.91", pnlValue: 2565.91 },
    { rank: 3, username: "To_the_gamer", pnl: "$1,753.59", pnlValue: 1753.59 },
    { rank: 4, username: "Galactic_Hero", pnl: "$1,600.00", pnlValue: 1600.0 },
    { rank: 5, username: "Quantum_Coder", pnl: "$1,400.75", pnlValue: 1400.75 },
    { rank: 6, username: "Nebula_Surfer", pnl: "$1,350.50", pnlValue: 1350.5 },
    { rank: 7, username: "Pixel_Wizard", pnl: "$1,200.00", pnlValue: 1200.0 },
    { rank: 8, username: "Techno_Giant", pnl: "$1,100.25", pnlValue: 1100.25 },
    { rank: 9, username: "Arcane_Scholar", pnl: "$950.00", pnlValue: 950.0 },
    { rank: 10, username: "Crypto_Explorer", pnl: "$850.75", pnlValue: 850.75 },
    {
      rank: 11,
      username: "Virtual_Scientist",
      pnl: "$800.40",
      pnlValue: 800.4,
    },
    { rank: 12, username: "Mystic_Artist", pnl: "$780.10", pnlValue: 780.1 },
    { rank: 13, username: "Binary_Futurist", pnl: "$765.00", pnlValue: 765.0 },
    { rank: 14, username: "Coded_Reality", pnl: "$720.55", pnlValue: 720.55 },
    { rank: 15, username: "Cyber_Smith", pnl: "$740.00", pnlValue: 740.0 },
    { rank: 16, username: "Data_Ninja", pnl: "$720.30", pnlValue: 720.3 },
  ];

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      {/* Table header */}
      <div className="grid grid-cols-3 p-3 bg-gray-50 border-b text-sm font-medium text-gray-500">
        <div>Rank</div>
        <div>Username</div>
        <div className="text-right">PnL</div>
      </div>

      {/* Table rows */}
      <div className="divide-y">
        {leaderboardData.slice(0, 10).map((entry) => (
          <div
            key={entry.rank}
            className="grid grid-cols-3 p-3 hover:bg-gray-50"
          >
            <div className="text-gray-500">{entry.rank}</div>
            <div className="font-medium">{entry.username}</div>
            <div className="text-right text-green-500 font-medium">
              {entry.pnl}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="p-3 border-t flex justify-center gap-2">
        <button className="p-1 rounded-full hover:bg-gray-100">
          <ChevronLeft size={18} />
        </button>
        <button className="p-1 rounded-full hover:bg-gray-100">
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default Leaderboard;
