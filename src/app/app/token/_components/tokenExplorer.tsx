"use client";

import { FC, useState, useRef, useEffect } from "react";
import { SearchIcon } from "@/components/icons";
import SearchPopup from "./searchPopup";

const TokenExplorer: FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isSearchPopupOpen, setIsSearchPopupOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Example search terms that match our test states
  // const testSearchTerms = {
  //   // cat: "Shows cat tokens",
  //   // error: "Shows server error state",
  //   // other: "Shows no results state",
  // };

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

  // // Handle clicking on a search suggestion
  // const handleSuggestionClick = (term: string) => {
  //   setSearchQuery(term);
  //   setIsSearchPopupOpen(true);
  // };

  return (
    <>
      <div
        className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-xl p-10 w-full relative overflow-hidden"
        style={{
          backgroundImage: "url('/assets/img/sample-bg.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {/* Overlay: semi-transparent blue gradient for readability */}
        <div
          aria-hidden="true"
          className="absolute inset-0 w-full h-full rounded-xl pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, rgba(59,130,246,0.85) 0%, rgba(30,58,138,0.92) 100%)",
            zIndex: 1,
          }}
        />
        {/* Content wrapper with relative z-index to appear above overlay */}
        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-1">Token Explorer</h1>
          <p className="mb-2 text-blue-100">
            Track every token&apos;s lifespan in real time.
          </p>
          <p className="mb-6 text-blue-100">
            Compare momentum, spot decay early, and place your bets where it
            counts.
          </p>
          <form onSubmit={handleSearch} className="relative w-full max-w-lg">
            <div className="relative flex items-center">
              <div className="absolute left-4 top-1/2 -translate-y-1/2">
                <SearchIcon className="fill-white" />
              </div>
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Enter token name or ticker"
                className={`w-full h-12 rounded-full py-3 px-4 pl-11 text-white focus:outline-none focus:ring-2 focus:ring-white placeholder-white ${
                  isFocused ? "ring-2 ring-white" : ""
                } shadow-lg cursor-pointer border-white border`}
                // value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={handleSearchFocus}
                onClick={handleSearchFocus}
                onBlur={() => setIsFocused(false)}
              />
            </div>
          </form>

          {/* Quick search suggestions */}
          {/* <div className="mt-4 flex flex-wrap gap-2">
            <p className="text-blue-100 mr-2">Try:</p>
            {Object.entries(testSearchTerms).map(([term, description]) => (
              <button
                key={term}
                onClick={() => handleSuggestionClick(term)}
                className="px-3 py-1 bg-blue-500/30 hover:bg-blue-400/40 rounded-full text-sm transition-colors"
                title={description as string | undefined}
              >
                {term}
              </button>
            ))}
          </div> */}
        </div>
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
