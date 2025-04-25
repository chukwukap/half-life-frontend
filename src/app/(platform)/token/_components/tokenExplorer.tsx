"use client";

import { FC, useState } from "react";
import { SearchIcon } from "lucide-react";

const TokenExplorer: FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  // Handle search functionality
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log(`Searching for: ${searchQuery}`);
      // In a real app, you would trigger a search here
    }
  };

  return (
    <div className="bg-blue-600 text-white rounded-xl p-10 w-full">
      <h1 className="text-3xl font-bold mb-1">Token Explorer</h1>
      <p className="mb-2 text-blue-100">
        Track every token&apos;s lifespan in real time.
      </p>
      <p className="mb-6 text-blue-100">
        Compare momentum, spot decay early, and place your bets where it counts.
      </p>
      <form onSubmit={handleSearch} className="relative w-full max-w-lg">
        <input
          type="text"
          placeholder="Enter token name or ticker"
          className={`w-full rounded-full py-3 px-4 pl-11 text-black focus:outline-none ${
            isFocused ? "ring-2 ring-blue-400" : ""
          } shadow-sm`}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <SearchIcon className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
      </form>
    </div>
  );
};

export default TokenExplorer;
