import { HeroSection, TrendingToken } from "./_components/home/hero-section";
import { PositionsCard } from "./_components/home/positions-card";
import { TokenGrid } from "./_components/home/token-grid";
import { DepositCard } from "./_components/home/deposit-card";
import { FireIcon } from "@/components/icons";

/**
 * Main home page of the platform
 * Arranges components in a responsive grid layout following Figma design
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
    <main className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-5">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        {/* Top row with Hero and Positions side by side */}
        <div className="grid grid-cols-1 md:grid-cols-12 md:col-span-12 gap-5">
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
        <div className="md:col-span-7">
          <TokenGrid />
        </div>

        <div className="md:col-span-5">
          <DepositCard />
        </div>
      </div>
    </main>
  );
}
