"use client";

import { FC } from "react";

const PortfolioValue: FC = () => {
  // Mock portfolio value
  const portfolioValue = "$5,321.78";

  return (
    <div className="bg-[#0D1C59] text-white rounded-[20px] p-8 h-full flex flex-col justify-between shadow-sm min-h-[180px]">
      {/* Portfolio label and value */}
      <div>
        <h2 className="text-[#B6C2E2] text-[15px] font-medium mb-1 tracking-tight">
          Portfolio value
        </h2>
        <div className="text-[32px] leading-[40px] font-bold tracking-tight">
          {portfolioValue}
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex gap-4 mt-8">
        <button
          className="flex items-center justify-center bg-[#335CFF] hover:bg-[#2347E2] text-white rounded-full px-6 h-[44px] font-semibold text-base min-w-[120px] transition-colors shadow-sm"
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
          className="flex items-center justify-center bg-white hover:bg-gray-100 text-[#335CFF] rounded-full px-6 h-[44px] font-semibold text-base min-w-[120px] transition-colors shadow-sm"
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
