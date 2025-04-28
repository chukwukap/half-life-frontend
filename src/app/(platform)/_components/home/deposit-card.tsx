"use client";

import { DepositIcon } from "@/components/icons";

/**
 * Deposit card component to encourage users to deposit assets
 * Matches the design in the full page UI image
 * Uses fixed height to prevent flowing to the bottom of the page
 */
export const DepositCard = () => {
  return (
    <div className="bg-indigo-900 rounded-2xl text-white p-6 h-[350px] flex flex-col">
      <h2 className="text-2xl font-bold mb-3">Deposit on Half-Life</h2>
      <p className="text-white/80">
        Deposit assets into Half-Life to activate your account, earn trading
        power, gain exposure to token lifespan dynamics
      </p>

      {/* Spacer div to push content upward instead of to bottom */}
      <div className="flex-grow"></div>

      <div className="flex flex-col items-start mt-4">
        <button className="bg-white text-indigo-900 rounded-full py-2 px-6 font-medium flex items-center gap-2 mb-4">
          <DepositIcon />
          Deposit
        </button>
        <div className="flex gap-1">
          <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
          <span className="w-1.5 h-1.5 bg-white/40 rounded-full"></span>
          <span className="w-1.5 h-1.5 bg-white/40 rounded-full"></span>
        </div>
      </div>
    </div>
  );
};
