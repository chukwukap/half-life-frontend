"use client";

import { Button } from "@/components/ui/button";

/**
 * Deposit card component to encourage users to deposit assets
 */
export const DepositCard = () => {
  return (
    <div className="rounded-xl p-6 overflow-hidden relative bg-gradient-to-br from-purple-800 via-indigo-800 to-indigo-900 text-white h-full">
      <div className="relative z-10">
        <h2 className="text-xl font-semibold mb-2">Deposit on Half-Life</h2>

        <p className="text-sm opacity-90 mb-6">
          Deposit assets into Half-Life to activate your account, earn trading
          power, gain exposure to token lifespan dynamics
        </p>

        <Button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-lg w-full flex items-center justify-center gap-2">
          <span className="bg-white/20 rounded-full w-5 h-5 flex items-center justify-center">
            <span className="text-white text-xs">+</span>
          </span>
          Deposit
        </Button>

        <div className="flex items-center justify-center mt-6">
          <div className="flex gap-1">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-1 w-1 rounded-full bg-white/40" />
            ))}
          </div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-white/20" />
        <div className="absolute bottom-5 left-5 w-16 h-16 rounded-full bg-white/10" />
        <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full bg-white/15" />
      </div>
    </div>
  );
};
