"use client";

import { FC, useState } from "react";

type TimeRange = "all" | "1h" | "1d" | "1w" | "1m" | "1y";

const TimeFilter: FC = () => {
  const [activeRange, setActiveRange] = useState<TimeRange>("all");

  const timeRanges: { value: TimeRange; label: string }[] = [
    { value: "all", label: "All" },
    { value: "1h", label: "1H" },
    { value: "1d", label: "1D" },
    { value: "1w", label: "1W" },
    { value: "1m", label: "1M" },
    { value: "1y", label: "1Y" },
  ];

  return (
    <div className="mb-6 flex overflow-x-auto">
      <div className="flex space-x-1">
        {timeRanges.map((range) => (
          <button
            key={range.value}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
              activeRange === range.value
                ? "bg-white text-gray-900 shadow-sm border border-gray-200"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveRange(range.value)}
          >
            {range.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TimeFilter;
