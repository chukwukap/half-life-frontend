import { HeroSection, TrendingToken } from "./_components/home/hero-section";
import { PositionsCard } from "./_components/home/positions-card";
import { TokenGrid } from "./_components/home/token-grid";
import { FireIcon } from "@/components/icons";

/**
 * Main home page of the platform
 * Arranges components in a responsive grid layout following the UI design
 * with optimizations for mobile, tablet, and desktop viewports
 */
export default function Home() {
  // Example trending token data - in a real app this would come from an API
  const trendingToken: TrendingToken = {
    id: "leveth",
    name: "levETH",
    symbol: "LEVETH",
    icon: <FireIcon className="w-7 h-7" />,
    progress: 80,
    maxProgress: 100,
  };

  return (
    <main className="max-w-[1400px] mx-auto px-4 sm:px-0 py-5">
      {/* Top row with Hero and Positions side by side */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mb-5">
        {/* Hero banner with trading interface */}
        <div className="md:col-span-8 h-full">
          <HeroSection trendingToken={trendingToken} />
        </div>

        {/* User positions section with active positions */}
        <div className="md:col-span-4 h-full">
          <PositionsCard />
        </div>
      </div>

      {/* Bottom row with Token Grid and Deposit Card */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        {/* Token grid section - takes 8/12 columns on desktop */}
        <div className="md:col-span-8">
          <TokenGrid />
        </div>

        {/* Deposit card - takes 4/12 columns and has a fixed height to match design */}
        <div className="md:col-span-4 h-full">
          <div className="bg-indigo-900 rounded-2xl text-white p-6 h-[360px] flex flex-col">
            <h2 className="text-2xl font-bold mb-3">Deposit on Half-Life</h2>
            <p className="text-white/80 mb-auto">
              Deposit assets into Half-Life to activate your account, earn
              trading power, gain exposure to token lifespan dynamics
            </p>

            <div className="flex flex-col items-start mt-6">
              <button className="bg-white text-indigo-900 rounded-full py-2 px-6 font-medium flex items-center gap-2 mb-4">
                <span className="text-indigo-600 text-lg">⊕</span>
                Deposit
              </button>
              <div className="flex gap-1 mt-1">
                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                <span className="w-1.5 h-1.5 bg-white/40 rounded-full"></span>
                <span className="w-1.5 h-1.5 bg-white/40 rounded-full"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
