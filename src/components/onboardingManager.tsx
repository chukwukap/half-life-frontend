"use client";
import { useEffect, useState } from "react";
import { usePrivyAuth } from "@/hooks/usePrivyAuth";
import OnboardingModal from "./onboarding-modal";

const ONBOARDING_KEY = "hl_onboarding_complete";

export default function OnboardingManager({
  children,
}: {
  children: React.ReactNode;
}) {
  const { ready, authenticated, handleLogin } = usePrivyAuth();
  const [showOnboarding, setShowOnboarding] = useState(false);

  useEffect(() => {
    if (ready && !authenticated) {
      handleLogin();
    }
    if (ready && authenticated) {
      // Only show onboarding if not completed
      if (
        typeof window !== "undefined" &&
        !localStorage.getItem(ONBOARDING_KEY)
      ) {
        setShowOnboarding(true);
      }
    }
  }, [ready, authenticated, handleLogin]);

  const handleOnboardingComplete = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem(ONBOARDING_KEY, "1");
    }
    setShowOnboarding(false);
  };

  // Show a centered spinner while authentication is not ready
  if (!ready)
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white/80 z-50">
        <div
          className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-[#335CFF]"
          aria-label="Loading"
        />
      </div>
    );

  return (
    <>
      {showOnboarding && (
        <OnboardingModal onComplete={handleOnboardingComplete} />
      )}
      {!showOnboarding && authenticated && children}
    </>
  );
}
