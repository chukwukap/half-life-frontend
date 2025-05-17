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
  const [loginRequested, setLoginRequested] = useState(false);

  useEffect(() => {
    if (ready && !authenticated && !loginRequested) {
      setLoginRequested(true);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready, authenticated, loginRequested]);

  const handleOnboardingComplete = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem(ONBOARDING_KEY, "1");
    }
    setShowOnboarding(false);
  };

  // Show a centered spinner while authentication is not ready
  if (!ready || (!authenticated && !loginRequested))
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white/80 z-50">
        <div
          className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-[#335CFF]"
          aria-label="Loading"
        />
      </div>
    );

  // If login was requested but user is not authenticated (e.g., cancelled), show a message or fallback
  if (ready && !authenticated && loginRequested) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-white/80 z-50">
        <p className="mb-4 text-[#181A20] font-semibold">
          Login required to use Half-Life.
        </p>
        <button
          className="rounded-full bg-[#335CFF] text-white font-bold px-6 py-2"
          onClick={handleLogin}
        >
          Try Login Again
        </button>
      </div>
    );
  }

  return (
    <>
      {showOnboarding && (
        <OnboardingModal onComplete={handleOnboardingComplete} />
      )}
      {!showOnboarding && authenticated && children}
    </>
  );
}
