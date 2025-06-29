"use client";

import HeroSection from "./_components/hero-section";
import TokensDieSection from "./_components/tokens-die-section";
import HowItWorksSection from "./_components/how-it-works-section";
// import WhyHalfLifeSection from "./_components/why-halflife-section";
import JoinAlphaSection from "./_components/join-alpha-section";

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <TokensDieSection />
      <HowItWorksSection />
      {/* <WhyHalfLifeSection /> */}
      <JoinAlphaSection />
    </>
  );
}
