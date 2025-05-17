import React from "react";
import { CommunityIcon } from "@/components/icons"; // Use the correct icon as per design
import Image from "next/image";

// Type for leaderboard entry
export interface LeaderboardEntry {
  rank: number;
  username: string;
  pnl: string;
  image: string; // URL for the pixel art image
}

interface LeaderboardProps {
  data: LeaderboardEntry[];
}

/**
 * Leaderboard component displays top traders for a token.
 * - Pixel-perfect, accessible, and modular.
 * - Ready for real data integration.
 * - Security: Stateless, no user input, safe for all environments.
 * - Matches Figma design exactly.
 */
const Leaderboard: React.FC<LeaderboardProps> = ({ data }) => {
  return (
    <section
      className="bg-white rounded-[24px] p-6 shadow-none border border-[#E9EAEC] mb-4"
      aria-label="Leaderboard"
    >
      {/* Header with icon and title */}
      <div className="flex items-center mb-5">
        {/* Use CommunityIcon as per design */}
        <CommunityIcon
          className="w-5 h-5 mr-2 text-[#335CFF]"
          aria-hidden="true"
        />
        <span className="font-semibold text-2xl leading-[24px] text-[#181A20]">
          Leaderboard
        </span>
      </div>
      {/* Table header */}
      <div
        className="bg-[#F5F8FF] rounded-[12px] px-2 py-2 flex text-[#7D8FB3] text-base font-medium mb-2 items-center"
        style={{
          fontSize: "16px",
          fontWeight: 500,
          lineHeight: "20px",
        }}
      >
        <div className="w-12">Rank</div>
        <div className="flex-1">Username</div>
        <div className="w-32 text-right">PnL</div>
      </div>
      {/* Leaderboard list */}
      <ol className="divide-y divide-[#F1F5F9]">
        {data.map((entry) => (
          <li
            key={entry.rank}
            className="flex items-center py-[10px] text-sm font-normal text-[#181A20]"
          >
            <span className="w-12">{entry.rank}</span>
            <Image
              width={32}
              height={32}
              src={entry.image}
              alt={`${entry.username} avatar`}
              className="w-8 h-8 rounded-full mr-2"
            />
            <span className="flex-1 truncate">{entry.username}</span>
            <span
              className="w-32 text-right font-semibold text-[#22B15D]"
              style={{ fontWeight: 600 }}
            >
              {entry.pnl}
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Leaderboard;
