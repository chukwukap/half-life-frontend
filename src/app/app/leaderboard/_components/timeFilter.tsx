"use client";

import { FC, useState } from "react";

type FilterPeriod = "all" | "monthly" | "weekly";

const TimeFilter: FC = () => {
  const [activePeriod, setActivePeriod] = useState<FilterPeriod>("all");

  return (
    <div className="mb-6">
      <div className="inline-flex bg-gray-100 rounded-full overflow-hidden p-1">
        <button
          className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
            activePeriod === "all"
              ? "bg-white text-gray-900 shadow-sm"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActivePeriod("all")}
        >
          All Time
        </button>
        <button
          className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
            activePeriod === "monthly"
              ? "bg-white text-gray-900 shadow-sm"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActivePeriod("monthly")}
        >
          Monthly
        </button>
        <button
          className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
            activePeriod === "weekly"
              ? "bg-white text-gray-900 shadow-sm"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActivePeriod("weekly")}
        >
          Weekly
        </button>
      </div>
    </div>
  );
};

export default TimeFilter;
