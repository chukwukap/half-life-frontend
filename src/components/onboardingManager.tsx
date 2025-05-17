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

  if (!ready) return null; // Or a spinner

  return (
    <>
      {showOnboarding && (
        <OnboardingModal onComplete={handleOnboardingComplete} />
      )}
      {!showOnboarding && authenticated && children}
    </>
  );
}
