"use client";

import { Button } from "@/components/ui/button";

/**
 * Portfolio value card showing total value and controls for mobile view
 */
export const PortfolioValueCard = () => {
  return (
    <div className="bg-card dark:bg-card rounded-xl p-4 mb-6 lg:hidden">
      <div className="mb-4">
        <h3 className="text-sm text-muted-foreground mb-1">Portfolio value</h3>
        <div className="flex items-baseline">
          <span className="text-2xl font-bold">$5,321.78</span>
          <span className="ml-2 text-sm font-medium text-green-500">
            +371.78 USD (+7.38%)
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Button className="flex items-center justify-center gap-2 bg-sidebar-primary text-white hover:bg-sidebar-primary/90">
          <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 5V19M5 12H19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          Deposit
        </Button>

        <Button className="flex items-center justify-center gap-2 bg-blue-600 text-white hover:bg-blue-700">
          <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 10L12 15L17 10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          Withdraw
        </Button>
      </div>
    </div>
  );
};
