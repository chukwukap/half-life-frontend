import React from "react";

// Type for leaderboard entry
export interface LeaderboardEntry {
  rank: number;
  username: string;
  pnl: string;
}

interface LeaderboardProps {
  data: LeaderboardEntry[];
}

/**
 * Leaderboard component displays top traders for a token.
 * - Pixel-perfect, accessible, and modular.
 * - Ready for real data integration.
 * - Security: Stateless, no user input, safe for all environments.
 */
const Leaderboard: React.FC<LeaderboardProps> = ({ data }) => {
  return (
    <section
      className="bg-white rounded-[20px] p-4 shadow-sm border border-[#E9EAEC] mb-6"
      aria-label="Leaderboard"
    >
      <div className="flex items-center mb-4">
        {/* Icon for leaderboard */}
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2"
          aria-hidden="true"
        >
          <path
            d="M10 18.3333C14.6024 18.3333 18.3334 14.6024 18.3334 10C18.3334 5.39763 14.6024 1.66667 10 1.66667C5.39765 1.66667 1.66669 5.39763 1.66669 10C1.66669 14.6024 5.39765 18.3333 10 18.3333Z"
            stroke="#335CFF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.5 8.33333C7.5 9.25381 8.24619 10 9.16667 10C10.0871 10 10.8333 9.25381 10.8333 8.33333C10.8333 7.41286 10.0871 6.66667 9.16667 6.66667C8.24619 6.66667 7.5 7.41286 7.5 8.33333Z"
            stroke="#335CFF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.5 8.33333C12.5 9.25381 13.2462 10 14.1667 10C15.0871 10 15.8333 9.25381 15.8333 8.33333C15.8333 7.41286 15.0871 6.66667 14.1667 6.66667C13.2462 6.66667 12.5 7.41286 12.5 8.33333Z"
            stroke="#335CFF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="font-semibold text-lg text-[#181A20]">
          Leaderboard
        </span>
      </div>
      <div className="bg-[#F5F8FF] rounded-[12px] px-4 py-2 flex text-[#7D8FB3] text-sm font-medium mb-2">
        <div className="w-10">Rank</div>
        <div className="flex-1">Username</div>
        <div className="w-24 text-right">PnL</div>
      </div>
      <ol className="divide-y divide-[#E9EAEC]">
        {data.map((entry) => (
          <li
            key={entry.rank}
            className="flex items-center py-2 text-base font-medium text-[#181A20]"
          >
            <span className="w-10">{entry.rank}</span>
            <span className="flex-1 truncate">{entry.username}</span>
            <span className="w-24 text-right text-[#05CD99]">{entry.pnl}</span>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Leaderboard;
