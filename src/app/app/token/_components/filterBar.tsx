"use client";

import { FC, useState, useEffect, useRef } from "react";
import { CoinsIcon, CaretDownIcon } from "@/components/icons";

interface FilterOption {
  label: string;
  value: string;
  icon?: React.ReactNode;
}

interface FilterButtonProps {
  label: string;
  options?: FilterOption[];
  icon?: React.ReactNode;
  isCheckbox?: boolean;
  isActive?: boolean;
  onToggle?: () => void;
  onSelect?: (value: string) => void;
  selectedValue?: string;
  className?: string;
}

const FilterButton: FC<FilterButtonProps> = ({
  label,
  options = [],
  icon,
  isCheckbox = false,
  isActive = false,
  onToggle,
  onSelect,
  selectedValue = "all",
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className={`flex items-center gap-1 px-3 py-1.5 ${
          isActive ? "bg-blue-50 border-blue-300" : "bg-white border-gray-200"
        } rounded-full border text-sm font-medium hover:shadow-sm transition-all ${className}`}
        onClick={() => {
          if (isCheckbox && onToggle) {
            onToggle();
          } else if (options.length > 0) {
            setIsOpen(!isOpen);
          }
        }}
      >
        {icon && <span className="mr-1">{icon}</span>}
        {isCheckbox ? (
          <div className="flex items-center">
            <div
              className={`w-4 h-4 border ${
                isActive ? "bg-blue-500 border-blue-500" : "border-gray-300"
              } rounded mr-2 flex items-center justify-center`}
            >
              {isActive && (
                <svg
                  width="10"
                  height="8"
                  viewBox="0 0 10 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 1L3.5 6.5L1 4"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
            <span>{label}</span>
          </div>
        ) : (
          <span>{label}</span>
        )}
        {!isCheckbox && options.length > 0 && (
          <CaretDownIcon className="ml-1 h-4 w-4 text-gray-500" />
        )}
      </button>

      {isOpen && options.length > 0 && (
        <div className="absolute top-full left-0 mt-1 z-10 bg-white rounded-md shadow-lg py-1 min-w-[120px]">
          {options.map((option) => (
            <div
              key={option.value}
              className={`px-3 py-2 text-sm cursor-pointer hover:bg-gray-50 ${
                selectedValue === option.value ? "bg-blue-50 text-blue-600" : ""
              }`}
              onClick={() => {
                if (onSelect) {
                  onSelect(option.value);
                }
                setIsOpen(false);
              }}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const FilterBar: FC = () => {
  const [showDeadTokens, setShowDeadTokens] = useState(false);
  const [lifeIndex, setLifeIndex] = useState("all");
  const [predictions, setPredictions] = useState("all");
  const [volume, setVolume] = useState("above_5k");
  const [age, setAge] = useState("below_24h");
  const [positions, setPositions] = useState("all");

  return (
    <div className="flex flex-col space-y-4 my-6 font-bold">
      <div className="flex items-center">
        <div className="flex items-center gap-2 mr-3">
          <CoinsIcon className="h-5 w-5 text-blue-500" />
          <span className="font-medium">Top tokens</span>
        </div>
      </div>

      <div className="flex gap-3 justify-between">
        <div>
          <FilterButton
            label="Show dead tokens"
            isCheckbox={true}
            isActive={showDeadTokens}
            className="border-none"
            onToggle={() => setShowDeadTokens(!showDeadTokens)}
          />
        </div>

        <div className="flex gap-3">
          <FilterButton
            label="Life Index"
            options={[
              { label: "All", value: "all" },
              { label: ">80", value: "above_80" },
              { label: ">50", value: "above_50" },
            ]}
            selectedValue={lifeIndex}
            onSelect={setLifeIndex}
          />

          <FilterButton
            label="Open Predictions"
            options={[
              { label: "All", value: "all" },
              { label: "Yes", value: "yes" },
              { label: "No", value: "no" },
            ]}
            selectedValue={predictions}
            onSelect={setPredictions}
          />

          <FilterButton
            label="Volume: >$5k"
            options={[
              { label: "All", value: "all" },
              { label: ">$1k", value: "above_1k" },
              { label: ">$5k", value: "above_5k" },
              { label: ">$10k", value: "above_10k" },
            ]}
            selectedValue={volume}
            onSelect={setVolume}
            isActive={volume !== "all"}
          />

          <FilterButton
            label="Age: <24h"
            options={[
              { label: "All", value: "all" },
              { label: "<12h", value: "below_12h" },
              { label: "<24h", value: "below_24h" },
              { label: "<48h", value: "below_48h" },
            ]}
            selectedValue={age}
            onSelect={setAge}
            isActive={age !== "all"}
          />

          <FilterButton
            label="All Positions"
            options={[
              { label: "All", value: "all" },
              { label: "Long", value: "long" },
              { label: "Short", value: "short" },
            ]}
            selectedValue={positions}
            onSelect={setPositions}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
