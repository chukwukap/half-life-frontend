"use client";

import { FC, useState } from "react";
import { SearchIcon } from "lucide-react";

const TokenExplorer: FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="bg-blue-600 text-white rounded-xl p-10 w-full">
      <h1 className="text-3xl font-bold mb-1">Token Explorer</h1>
      <p className="mb-2 text-blue-100">
        Track every token&apos;s lifespan in real time.
      </p>
      <p className="mb-6 text-blue-100">
        Compare momentum, spot decay early, and place your bets where it counts.
      </p>
      <div className="relative w-full max-w-lg">
        <input
          type="text"
          placeholder="Enter token name or ticker"
          className="w-full rounded-full py-3 px-4 pl-10 text-black focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <SearchIcon className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
      </div>
    </div>
  );
};

export default TokenExplorer;
