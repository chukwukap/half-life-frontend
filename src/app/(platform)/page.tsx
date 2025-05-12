import { HeroSection } from "./_components/home/hero-section";
import { PositionsCard } from "./_components/home/positions-card";
import { TokenGrid } from "./_components/home/token-grid";
import { FeatureCarousel } from "./_components/home/feature-carousel";
// import { FireIcon } from "@/components/icons";

/**
 * Main home page of the platform
 * Arranges components in a responsive grid layout following the UI design
 * with optimizations for mobile, tablet, and desktop viewports
 */
export default function Home() {
  return (
    <main className="max-w-[1400px] mx-auto px-4 sm:px-0 py-5">
      {/* Top row with Hero and Positions side by side */}
      <div className="grid grid-cols-1 md:grid-cols-14 gap-5 mb-5">
        <div className="md:col-span-10">
          <HeroSection />
        </div>

        <div className="md:col-span-4">
          <FeatureCarousel />
        </div>
      </div>

      {/* Bottom row with Token Grid and Deposit Card */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
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
