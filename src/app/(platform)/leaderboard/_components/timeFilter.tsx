"use client";

import { FC, useState } from "react";

type FilterPeriod = "all" | "monthly" | "weekly";

const TimeFilter: FC = () => {
  const [activePeriod, setActivePeriod] = useState<FilterPeriod>("all");

  return (
    <div className="mb-6">
      <div className="inline-flex rounded-lg overflow-hidden">
        <button
          className={`px-6 py-2 text-sm font-medium ${
            activePeriod === "all"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
          onClick={() => setActivePeriod("all")}
        >
          All Time
        </button>
        <button
          className={`px-6 py-2 text-sm font-medium ${
            activePeriod === "monthly"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
          onClick={() => setActivePeriod("monthly")}
        >
          Monthly
        </button>
        <button
          className={`px-6 py-2 text-sm font-medium ${
            activePeriod === "weekly"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
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
