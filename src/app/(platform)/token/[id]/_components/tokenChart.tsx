"use client";

import { FC } from "react";

const TokenChart: FC = () => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      {/* Chart header */}
      <div className="p-4 flex justify-end border-b">
        <div className="flex space-x-1">
          <button className="px-3 py-1 rounded-md text-xs text-gray-500 hover:bg-gray-100">
            1h
          </button>
          <button className="px-3 py-1 rounded-md text-xs text-gray-500 hover:bg-gray-100">
            24h
          </button>
          <button className="px-3 py-1 rounded-md text-xs text-gray-500 hover:bg-gray-100">
            7d
          </button>
          <button className="px-3 py-1 bg-blue-100 text-blue-600 rounded-md text-xs font-medium">
            30d
          </button>
          <button className="px-3 py-1 rounded-md text-xs text-gray-500 hover:bg-gray-100">
            All
          </button>
        </div>
      </div>

      {/* Chart content */}
      <div className="p-4">
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
            <svg className="w-full h-56" viewBox="0 0 500 200">
              {/* Grid lines */}
              <line
                x1="0"
                y1="0"
                x2="500"
                y2="0"
                stroke="#f1f5f9"
                strokeWidth="1"
              />
              <line
                x1="0"
                y1="40"
                x2="500"
                y2="40"
                stroke="#f1f5f9"
                strokeWidth="1"
              />
              <line
                x1="0"
                y1="80"
                x2="500"
                y2="80"
                stroke="#f1f5f9"
                strokeWidth="1"
              />
              <line
                x1="0"
                y1="120"
                x2="500"
                y2="120"
                stroke="#f1f5f9"
                strokeWidth="1"
              />
              <line
                x1="0"
                y1="160"
                x2="500"
                y2="160"
                stroke="#f1f5f9"
                strokeWidth="1"
              />
              <line
                x1="0"
                y1="200"
                x2="500"
                y2="200"
                stroke="#f1f5f9"
                strokeWidth="1"
              />

              {/* Chart line */}
              <path
                d="M0,150 C50,140 100,120 125,110 S150,105 175,100 S225,90 250,85 S300,75 350,60 S400,45 450,30 C475,20 490,10 500,0"
                fill="none"
                stroke="#2563EB"
                strokeWidth="2"
              />

              {/* Area under the curve with gradient */}
              <path
                d="M0,150 C50,140 100,120 125,110 S150,105 175,100 S225,90 250,85 S300,75 350,60 S400,45 450,30 C475,20 490,10 500,0 V200 H0 Z"
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
        <div className="flex items-center mt-2 text-xs text-gray-400">
          <span className="mr-2">Powered by</span>
          <svg
            width="60"
            height="16"
            viewBox="0 0 60 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8.8 2.4H6.4V4.8H4V7.2H6.4V4.8H8.8V2.4Z" fill="#4D7BF3" />
            <path d="M6.4 7.2H4V9.6H6.4V7.2Z" fill="#4D7BF3" />
            <path
              d="M14.4 7.2H17.6V9.6H20V2.4H17.6V4.8H14.4V7.2Z"
              fill="#4D7BF3"
            />
            <path
              d="M11.2 2.4H8.8V11.2H11.2V13.6H13.6V11.2H16V8.8H13.6V4.8H11.2V2.4Z"
              fill="#4D7BF3"
            />
            <path
              d="M25.6 7.2H23.2V4.8H28V2.4H20.8V9.6H25.6V7.2Z"
              fill="#4D7BF3"
            />
            <path
              d="M32.8 2.4H30.4V4.8H28V7.2H30.4V4.8H32.8V2.4Z"
              fill="#4D7BF3"
            />
            <path
              d="M39.2 7.2H36.8V4.8H41.6V2.4H34.4V9.6H39.2V7.2Z"
              fill="#4D7BF3"
            />
            <path d="M44.8 2.4H42.4V9.6H44.8V2.4Z" fill="#4D7BF3" />
            <path
              d="M48 4.8H50.4V7.2H48V9.6H50.4V7.2H52.8V4.8H50.4V2.4H48V4.8Z"
              fill="#4D7BF3"
            />
            <path d="M56 4.8H58.4V7.2H56V4.8Z" fill="#4D7BF3" />
            <path d="M58.4 7.2H56V9.6H58.4V7.2Z" fill="#4D7BF3" />
            <path d="M56 2.4H53.6V4.8H56V2.4Z" fill="#4D7BF3" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TokenChart;
