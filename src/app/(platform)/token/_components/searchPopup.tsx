"use client";

import { FC, useState, useEffect } from "react";
import Image from "next/image";
import { TrendingUp, X, AlertTriangle, DollarSign, Skull } from "lucide-react";
import Link from "next/link";

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

const SearchPopup: FC<SearchPopupProps> = ({
  isOpen,
  onClose,
  searchQuery,
  onUpdateQuery,
}) => {
  const [activeTab, setActiveTab] = useState("trending");
  const [showAll, setShowAll] = useState(false);
  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery);

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
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

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
                onClick={onClose}
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
      </div>
    </div>
  );
};

export default SearchPopup;
