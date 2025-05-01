import { HeroSection, TrendingToken } from "./_components/home/hero-section";
import { PositionsCard } from "./_components/home/positions-card";
import { TokenGrid } from "./_components/home/token-grid";
import { FeatureCarousel } from "./_components/home/feature-carousel";
import { FireIcon } from "@/components/icons";

/**
 * Main home page of the platform
 * Layout follows the updated design with:
 * 1. Split hero section (Trading interface + Feature card)
 * 2. Token tabs and grid
 * 3. My Positions section with empty state
 */
export default function Home() {
  // Example trending token data - in a real app this would come from an API
  const trendingToken: TrendingToken = {
    id: "zora",
    name: "ZORA",
    symbol: "ZORA",
    icon: <FireIcon className="w-7 h-7" />,
    progress: 80,
    maxProgress: 100,
  };

  return (
    <main className="max-w-[1400px] mx-auto px-4 py-5">
      {/* Hero section split into two cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-8">
        {/* Left: Trading interface card */}
        <div className="lg:col-span-8">
          <div className="bg-[#4A1FB8] rounded-[20px] overflow-hidden h-full">
            <HeroSection trendingToken={trendingToken} />
          </div>
        </div>

        {/* Right: Feature card */}
        <div className="lg:col-span-4">
          <FeatureCarousel />
        </div>
      </div>

      {/* Tokens and Positions section */}
      <div className="space-y-6">
        {/* Tabs */}
        <div className="flex items-center gap-8 border-b border-gray-100">
          <button className="flex items-center gap-2 pb-4 text-blue-600 border-b-2 border-blue-600 font-medium">
            <span className="text-xl">⟶</span>
            Top gainers
          </button>
          <button className="flex items-center gap-2 pb-4 text-gray-500 font-medium">
            <span className="text-xl">◇</span>
            Favourites
          </button>
        </div>

        {/* Token grid and Positions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Token grid */}
          <div className="lg:col-span-8">
            <TokenGrid />
          </div>

          {/* My Positions */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                <h2 className="font-medium">My Positions</h2>
              </div>
              <button className="text-blue-600 text-sm font-medium">
                See all
              </button>
            </div>
            <PositionsCard />
          </div>
        </div>
      </div>
    </main>
  );
}
