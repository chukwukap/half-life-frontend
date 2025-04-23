import { HeroSection } from "./_components/home/hero-section";
import { PositionsCard } from "./_components/home/positions-card";
import { TokenGrid } from "./_components/home/token-grid";
import { DepositCard } from "./_components/home/deposit-card";

/**
 * Main home page of the platform
 * Arranges components in a responsive grid layout following Figma design
 * with optimizations for mobile, tablet, and desktop viewports
 */
export default function Home() {
  return (
    <main className="max-w-[1400px] mx-auto ">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        {/* Main content area - full width on mobile, 8/12 on tablet and desktop */}
        {/* Hero banner with trading interface */}
        <div className="md:col-span-8">
          <HeroSection />
        </div>

        {/* User positions section with active positions */}
        <div className="md:col-span-4">
          <PositionsCard />
        </div>

        {/* Token grid with tabs for filtering */}
        <div className="md:col-span-7">
          <TokenGrid />
        </div>

        {/* Sidebar - full width on mobile, 4/12 on tablet and desktop */}
        <div className="md:col-span-5">
          <DepositCard />
        </div>
      </div>
    </main>
  );
}
