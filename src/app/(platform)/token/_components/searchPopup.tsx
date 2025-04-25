"use client";

import { FC, useState, useEffect } from "react";
import Image from "next/image";
import {
  TrendingUp,
  X,
  AlertTriangle,
  DollarSign,
  Skull,
  Loader2,
} from "lucide-react";
import Link from "next/link";

// Define search states
type SearchState = "initial" | "loading" | "results" | "no-results" | "error";

interface TokenSuggestion {
  id: string;
  name: string;
  symbol: string;
  lifeIndex: number;
  lifeIndexPercent: number;
  logoUrl: string;
}

interface SearchPopupProps {
  isOpen: boolean;
  onClose: () => void;
  searchQuery: string;
  onUpdateQuery?: (query: string) => void;
}

// A component to display individual token with life index bar
const TokenSuggestionCard: FC<{ token: TokenSuggestion }> = ({ token }) => {
  // Get the appropriate color based on life index value
  const getLifeIndexColor = () => {
    if (token.lifeIndexPercent >= 70) return "bg-green-500";
    if (token.lifeIndexPercent >= 40) return "bg-yellow-500";
    return "bg-red-500";
  };

  // Generate life index display bars
  const renderLifeIndexBars = () => {
    const totalBars = 20;
    const activeBars = Math.round((token.lifeIndexPercent / 100) * totalBars);

    return (
      <div className="flex gap-[2px]">
        {Array.from({ length: totalBars }).map((_, index) => (
          <div
            key={index}
            className={`h-2 w-full rounded-sm ${
              index < activeBars ? getLifeIndexColor() : "bg-gray-200"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="p-4 bg-white rounded-xl hover:bg-gray-50 transition-colors cursor-pointer">
      <div className="flex flex-col items-center">
        <div className="relative w-16 h-16 mb-2">
          <Image
            src={token.logoUrl}
            alt={token.name}
            width={64}
            height={64}
            className="rounded-full"
            unoptimized
          />
        </div>
        <h3 className="font-bold text-lg">{token.name}</h3>
        <p className="text-gray-400 text-sm mb-4">{token.symbol}</p>

        <div className="w-full">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-500">Life Index</span>
            <span>{token.lifeIndexPercent}%</span>
          </div>
          {renderLifeIndexBars()}
        </div>
      </div>
    </div>
  );
};

// Tab interface
interface TabProps {
  isActive: boolean;
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}

const Tab: FC<TabProps> = ({ isActive, icon, label, onClick }) => {
  return (
    <button
      className={`flex items-center gap-2 px-4 py-2 rounded-full ${
        isActive
          ? "bg-blue-100 text-blue-600 font-medium"
          : "text-gray-500 hover:bg-gray-100"
      } transition-colors`}
      onClick={onClick}
    >
      <span className={`${isActive ? "text-blue-600" : "text-gray-400"}`}>
        {icon}
      </span>
      <span>{label}</span>
    </button>
  );
};

// Sample data for suggested tokens
const suggestedTokens: TokenSuggestion[] = [
  {
    id: "doge",
    name: "DOGE",
    symbol: "Dogecoin",
    lifeIndex: 80,
    lifeIndexPercent: 80,
    logoUrl: "/tokens/doge.svg",
  },
  {
    id: "wif",
    name: "WIF",
    symbol: "dogwifhat",
    lifeIndex: 43,
    lifeIndexPercent: 43,
    logoUrl: "/tokens/wif.svg",
  },
  {
    id: "floki",
    name: "FLOKI",
    symbol: "Floki",
    lifeIndex: 24,
    lifeIndexPercent: 24,
    logoUrl: "/tokens/floki.svg",
  },
  {
    id: "bonk",
    name: "BONK",
    symbol: "Bonk",
    lifeIndex: 80,
    lifeIndexPercent: 80,
    logoUrl: "/tokens/bonk.svg",
  },
];

// Cat tokens for search results
const catTokens: TokenSuggestion[] = [
  {
    id: "cati",
    name: "CATI",
    symbol: "Catizen",
    lifeIndex: 80,
    lifeIndexPercent: 80,
    logoUrl: "/tokens/cat.svg",
  },
  {
    id: "cats",
    name: "CATS",
    symbol: "CATS",
    lifeIndex: 43,
    lifeIndexPercent: 43,
    logoUrl: "/tokens/cat.svg",
  },
  {
    id: "cats-golden",
    name: "CATS",
    symbol: "Golden Cat",
    lifeIndex: 24,
    lifeIndexPercent: 24,
    logoUrl: "/tokens/cat.svg",
  },
];

// Additional sample data for other categories
const bonkClones: TokenSuggestion[] = Array(4)
  .fill(null)
  .map((_, i) => ({
    id: `bonk-${i}`,
    name: "BONK",
    symbol: "Bonk",
    lifeIndex: 80,
    lifeIndexPercent: 80,
    logoUrl: "/tokens/bonk.svg",
  }));

// Loading state component
const LoadingState: FC = () => (
  <div className="flex flex-col items-center justify-center py-20">
    <div className="rounded-full bg-gray-100 w-16 h-16 flex items-center justify-center mb-4">
      <Loader2 className="h-10 w-10 animate-spin text-gray-400" />
    </div>
    <h3 className="text-xl font-semibold mb-1">Searching</h3>
    <p className="text-gray-500 text-sm">Please wait while we fetch results</p>
  </div>
);

// No results state component
const NoResultsState: FC = () => (
  <div className="flex flex-col items-center justify-center py-20">
    <div className="mb-4">
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22 38C30.8366 38 38 30.8366 38 22C38 13.1634 30.8366 6 22 6C13.1634 6 6 13.1634 6 22C6 30.8366 13.1634 38 22 38Z"
          stroke="#D1D5DB"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M42 42L33 33"
          stroke="#D1D5DB"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
    <h3 className="text-xl font-semibold mb-1">No results found</h3>
    <p className="text-gray-500 text-sm">Try another search term</p>
  </div>
);

// Error state component
const ErrorState: FC = () => (
  <div className="flex flex-col items-center justify-center py-20">
    <div className="mb-4">
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.5 36C18.3022 36 15 32.6978 15 28.5C15 23.5 22.5 12 22.5 12C22.5 12 30 23.5 30 28.5C30 32.6978 26.6978 36 22.5 36Z"
          stroke="#D1D5DB"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M33.8741 14.3021C35.8339 15.8667 37.411 17.8509 38.4959 20.1018C39.5807 22.3526 40.1453 24.8142 40.1453 27.3069C40.1453 29.7996 39.5807 32.2612 38.4959 34.512C37.411 36.7629 35.8339 38.7471 33.8741 40.3117"
          stroke="#D1D5DB"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
    <h3 className="text-xl font-semibold mb-1">Failed connecting to server</h3>
    <p className="text-gray-500 text-sm">
      Please wait a few seconds or refresh this page to try again.
    </p>
  </div>
);

const SearchPopup: FC<SearchPopupProps> = ({
  isOpen,
  onClose,
  searchQuery,
  onUpdateQuery,
}) => {
  const [activeTab, setActiveTab] = useState("trending");
  const [showAll, setShowAll] = useState(false);
  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery);
  const [searchState, setSearchState] = useState<SearchState>("initial");
  const [searchResults, setSearchResults] = useState<TokenSuggestion[]>([]);

  // Simulate search based on query
  useEffect(() => {
    if (localSearchQuery.trim() === "") {
      setSearchState("initial");
      return;
    }

    // Simulate search process
    const performSearch = async () => {
      setSearchState("loading");

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Determine search outcome based on query
      if (localSearchQuery.toLowerCase().includes("cat")) {
        setSearchResults(catTokens);
        setSearchState("results");
      } else if (localSearchQuery.toLowerCase().includes("error")) {
        setSearchState("error");
      } else if (localSearchQuery.length > 0) {
        setSearchState("no-results");
      }
    };

    const debounceTimer = setTimeout(() => {
      performSearch();
    }, 500);

    return () => clearTimeout(debounceTimer);
  }, [localSearchQuery]);

  // Update local search query and propagate changes to parent component
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setLocalSearchQuery(newValue);
    if (onUpdateQuery) {
      onUpdateQuery(newValue);
    }
  };

  // Update local state when prop changes
  useEffect(() => {
    setLocalSearchQuery(searchQuery);
  }, [searchQuery]);

  // Clear search on close
  const handleClose = () => {
    onClose();
    // Optional: Reset state after closing
    // setLocalSearchQuery('');
    // setSearchState('initial');
  };

  if (!isOpen) return null;

  const tabContent = () => {
    switch (activeTab) {
      case "trending":
        return [...suggestedTokens];
      case "new":
        return [...suggestedTokens.slice(0, 2)];
      case "volume":
        return [...suggestedTokens.slice(1, 3)];
      case "finalized":
        return [...bonkClones];
      default:
        return [...suggestedTokens];
    }
  };

  const displayTokens = showAll ? tabContent() : tabContent().slice(0, 4);

  // Render content based on search state
  const renderContent = () => {
    // When searching with query
    if (localSearchQuery.trim() !== "") {
      switch (searchState) {
        case "loading":
          return <LoadingState />;
        case "no-results":
          return <NoResultsState />;
        case "error":
          return <ErrorState />;
        case "results":
          return (
            <div className="p-4">
              <div className="grid grid-cols-3 gap-4">
                {searchResults.map((token) => (
                  <Link
                    href={`/token/${token.id}`}
                    key={token.id}
                    onClick={handleClose}
                  >
                    <TokenSuggestionCard token={token} />
                  </Link>
                ))}
              </div>
            </div>
          );
        default:
          return null;
      }
    }

    // Default view with tabs and suggestions
    return (
      <>
        <div className="border-b">
          <div className="px-4 py-2 flex space-x-2 overflow-x-auto">
            <Tab
              isActive={activeTab === "trending"}
              icon={<TrendingUp size={16} />}
              label="Trending"
              onClick={() => setActiveTab("trending")}
            />
            <Tab
              isActive={activeTab === "new"}
              icon={<AlertTriangle size={16} />}
              label="New & Risky"
              onClick={() => setActiveTab("new")}
            />
            <Tab
              isActive={activeTab === "volume"}
              icon={<DollarSign size={16} />}
              label="Most Volume"
              onClick={() => setActiveTab("volume")}
            />
            <Tab
              isActive={activeTab === "finalized"}
              icon={<Skull size={16} />}
              label="Finalized"
              onClick={() => setActiveTab("finalized")}
            />
          </div>
        </div>

        <div className="p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {displayTokens.map((token) => (
              <Link
                href={`/token/${token.id}`}
                key={token.id}
                onClick={handleClose}
              >
                <TokenSuggestionCard token={token} />
              </Link>
            ))}
          </div>

          {tabContent().length > 4 && (
            <div className="mt-6 flex justify-center">
              <button
                className="text-blue-600 font-medium flex items-center"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? "Show less" : "Show more"}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`ml-1 transform ${showAll ? "rotate-180" : ""}`}
                >
                  <path
                    d="M19 9L12 16L5 9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      </>
    );
  };

  return (
    <div className="fixed inset-0 bg-black/30 z-50 flex items-start justify-center pt-16">
      <div
        id="search-popup"
        className="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[80vh] overflow-auto"
      >
        <div className="p-4 flex items-center border-b">
          <div className="bg-blue-100 p-2 rounded-full mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-blue-600"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
          </div>
          <input
            type="text"
            value={localSearchQuery}
            onChange={handleSearchChange}
            className="flex-1 text-lg border-0 focus:ring-0 outline-none"
            placeholder="Search token name, ticker or contract address"
            autoFocus
          />
          <button
            onClick={handleClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        {renderContent()}
      </div>
    </div>
  );
};

export default SearchPopup;
