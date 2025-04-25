"use client";

import { FC } from "react";
import Image from "next/image";

const TokenChart: FC = () => {
  return (
    <div className="border border-gray-200 rounded-lg p-4">
      {/* Chart header with time scales */}
      <div className="flex justify-end mb-6">
        <div className="flex space-x-2">
          <button className="px-3 py-1 rounded-md text-sm hover:bg-gray-100">
            1h
          </button>
          <button className="px-3 py-1 rounded-md text-sm hover:bg-gray-100">
            24h
          </button>
          <button className="px-3 py-1 rounded-md text-sm hover:bg-gray-100">
            7d
          </button>
          <button className="px-3 py-1 bg-blue-100 text-blue-600 rounded-md text-sm font-medium">
            30d
          </button>
          <button className="px-3 py-1 rounded-md text-sm hover:bg-gray-100">
            All
          </button>
        </div>
      </div>

      {/* Y-axis labels */}
      <div className="flex items-stretch">
        <div className="flex flex-col justify-between text-xs text-gray-500 pr-2 pb-4">
          <div>4.5</div>
          <div>3.9</div>
          <div>3.3</div>
          <div>2.7</div>
          <div>2.1</div>
        </div>

        {/* Chart area */}
        <div className="flex-grow relative">
          {/* Simple SVG line chart - in a real app, you'd use a proper charting library */}
          <svg className="w-full h-64" viewBox="0 0 500 200">
            <path
              d="M0,150 C50,140 100,130 150,120 C200,110 250,100 300,80 C350,60 400,50 450,30 C470,20 490,10 500,0"
              fill="none"
              stroke="#2563EB"
              strokeWidth="2"
            />
            {/* Area under the curve with gradient */}
            <path
              d="M0,150 C50,140 100,130 150,120 C200,110 250,100 300,80 C350,60 400,50 450,30 C470,20 490,10 500,0 V200 H0 Z"
              fill="url(#blueGradient)"
              opacity="0.1"
            />
            <defs>
              <linearGradient
                id="blueGradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#2563EB" />
                <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Powered by attribution */}
      <div className="flex items-center mt-2 text-sm text-gray-500">
        <span className="mr-2">Powered by</span>
        <Image
          src="/logos/kaito.svg"
          alt="Kaito"
          width={60}
          height={20}
          unoptimized
        />
      </div>
    </div>
  );
};

export default TokenChart;
