import { HeroSection } from "./_components/home/hero-section";
import DashboardGrid from "./_components/home/dashboard-grid";
import { FeatureCarousel } from "./_components/home/feature-carousel";
import OnboardingManager from "@/components/onboardingManager";
// import { FireIcon } from "@/components/icons";

/**
 * Main home page of the platform
 * Arranges components in a responsive grid layout following the UI design
 * with optimizations for mobile, tablet, and desktop viewports
 */
export default function Home() {
  return (
    <OnboardingManager>
      <main className="max-w-[1400px] mx-auto px-4 sm:px-0 py-5">
        {/* Top row with Hero and Positions side by side */}
        <div className="grid grid-cols-1 md:grid-cols-14 gap-5 mb-8">
          <div className="md:col-span-10">
            <HeroSection />
          </div>

          <div className="md:col-span-4">
            <FeatureCarousel />
          </div>
        </div>

        {/* Unified dashboard grid: TokenGrid (cards only) + PositionsCard */}
        <DashboardGrid />
      </main>
    </OnboardingManager>
  );
}
