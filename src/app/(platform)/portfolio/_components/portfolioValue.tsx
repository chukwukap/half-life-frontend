"use client";

import { FC } from "react";

const PortfolioValue: FC = () => {
  // Mock portfolio value
  const portfolioValue = "$5,321.78";

  return (
    <div className="bg-[#0D1C59] text-white rounded-3xl p-6 h-full flex flex-col justify-between">
      <div>
        <h2 className="text-gray-300 text-sm mb-1">Portfolio value</h2>
        <div className="text-4xl font-bold">{portfolioValue}</div>
      </div>

      <div className="flex space-x-4 mt-8">
        <button
          className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white rounded-full px-4 py-3 flex-1 transition-colors"
          onClick={() => console.log("Deposit clicked")}
        >
          <svg
            className="mr-2 h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 5V19"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19 12H5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Deposit
        </button>
        <button
          className="flex items-center justify-center bg-white hover:bg-gray-100 text-blue-600 rounded-full px-4 py-3 flex-1 transition-colors"
          onClick={() => console.log("Withdraw clicked")}
        >
          <svg
            className="mr-2 h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 12H5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Withdraw
        </button>
      </div>
    </div>
  );
};

export default PortfolioValue;
