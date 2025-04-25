"use client";

import { FC, useState, useRef, useEffect } from "react";
import { SearchIcon } from "lucide-react";
import SearchPopup from "./searchPopup";

const TokenExplorer: FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isSearchPopupOpen, setIsSearchPopupOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Close the popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isSearchPopupOpen &&
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target as Node)
      ) {
        // Don't close if clicking inside the popup
        const popupElement = document.getElementById("search-popup");
        if (popupElement && popupElement.contains(event.target as Node)) {
          return;
        }
        setIsSearchPopupOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSearchPopupOpen]);

  // Handle search functionality
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log(`Searching for: ${searchQuery}`);
      // In a real app, you would trigger a search here
    }
  };

  // Open search popup when focusing on the search input
  const handleSearchFocus = () => {
    setIsFocused(true);
    setIsSearchPopupOpen(true);
  };

  // Update search query from popup
  const updateSearchQuery = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <>
      <div className="bg-blue-600 text-white rounded-xl p-10 w-full">
        <h1 className="text-3xl font-bold mb-1">Token Explorer</h1>
        <p className="mb-2 text-blue-100">
          Track every token&apos;s lifespan in real time.
        </p>
        <p className="mb-6 text-blue-100">
          Compare momentum, spot decay early, and place your bets where it
          counts.
        </p>
        <form onSubmit={handleSearch} className="relative w-full max-w-lg">
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Enter token name or ticker"
            className={`w-full rounded-full py-3 px-4 pl-11 text-black focus:outline-none ${
              isFocused ? "ring-2 ring-blue-400" : ""
            } shadow-sm cursor-pointer`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={handleSearchFocus}
            onClick={handleSearchFocus}
            onBlur={() => setIsFocused(false)}
          />
          <SearchIcon className="absolute left-4 top-3.5 h-5 w-5 text-gray-400 pointer-events-none" />
        </form>
      </div>

      <SearchPopup
        isOpen={isSearchPopupOpen}
        onClose={() => setIsSearchPopupOpen(false)}
        searchQuery={searchQuery}
        onUpdateQuery={updateSearchQuery}
      />
    </>
  );
};

export default TokenExplorer;
