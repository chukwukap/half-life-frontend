"use client";

import { FC } from "react";
import {
  LeaderboardTopTraders,
  LeaderboardTable,
  TimeFilter,
} from "./_components";

const LeaderboardPage: FC = () => {
  return (
    <div className="container mx-auto px-4 py-6 max-w-screen-xl">
      {/* Leaderboard header */}
      <div className="bg-blue-600 text-white rounded-xl p-10 w-full mb-8">
        <h1 className="text-3xl font-bold mb-1">Leaderboard</h1>
        <p className="text-blue-100">
          Top traders ranked by profits and performance
        </p>
      </div>

      {/* Top traders section */}
      <LeaderboardTopTraders />

      {/* Time filter */}
      <TimeFilter />

      {/* Leaderboard table */}
      <LeaderboardTable />
    </div>
  );
};

export default LeaderboardPage;
