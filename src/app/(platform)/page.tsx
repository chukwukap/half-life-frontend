import { HeroSection } from "./_components/hero-section";
import { PositionsCard } from "./_components/positions-card";
import { TokenGrid } from "./_components/token-grid";
import { DepositCard } from "./_components/deposit-card";
import { PortfolioValueCard } from "./_components/portfolio-value-card";
import { TrendingSection } from "./_components/trending-section";

/**
 * Main home page of the platform
 * Arranges components in a responsive grid layout with mobile-specific components
 */
export default function Home() {
  return (
    <div className="py-6">
      {/* Mobile-specific components */}
      <PortfolioValueCard />
      <TrendingSection />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main content area - 2/3 width on desktop */}
        <div className="lg:col-span-2 space-y-6">
          <HeroSection />
          <PositionsCard />
          <TokenGrid />
        </div>

        {/* Sidebar - 1/3 width on desktop */}
        <div className="lg:col-span-1">
          <DepositCard />
        </div>
      </div>
    </div>
  );
}
