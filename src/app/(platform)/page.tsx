import { HeroSection, TrendingToken } from "./_components/home/hero-section";
import { PositionsCard } from "./_components/home/positions-card";
import { TokenGrid } from "./_components/home/token-grid";
import { FeatureCarousel } from "./_components/home/feature-carousel";
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
          <FeatureCarousel />
        </div>
      </div>

      {/* Bottom row with Token Grid and Deposit Card */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        {/* Token grid section - takes 8/12 columns on desktop */}
        <div className="md:col-span-7">
          <TokenGrid />
        </div>

        {/* Deposit card - takes 4/12 columns on desktop */}
        <div className="md:col-span-5">
          <PositionsCard />
        </div>
      </div>
    </main>
  );
}
