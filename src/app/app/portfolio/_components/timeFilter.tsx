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
    <div className="mb-8 flex overflow-x-auto">
      <div className="flex gap-2">
        {timeRanges.map((range) => (
          <button
            key={range.value}
            className={`px-5 py-2 text-sm font-semibold rounded-full transition-colors min-w-[48px] h-[38px]
              ${
                activeRange === range.value
                  ? "bg-white text-[#335CFF] shadow-sm border border-[#E9EAEC]"
                  : "bg-transparent text-[#7D8FB3] hover:bg-[#F5F8FF]"
              }
            `}
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
