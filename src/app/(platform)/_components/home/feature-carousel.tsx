"use client";

import { DepositIcon, CommunityIcon } from "@/components/icons";
import { FeatureSlide } from "./feature-slide";
import { useState, useEffect } from "react";

const SLIDES = [
  {
    variant: "deposit" as const,
    title: "Deposit on Half-Life",
    description:
      "Deposit assets into Half-Life to activate your account, earn trading power, gain exposure to token lifespan dynamics",
    buttonText: "Deposit",
    buttonIcon: <DepositIcon className="w-5 h-5" />,
    onClick: () => {
      // Handle deposit action
    },
  },
  {
    variant: "docs" as const,
    title: "How does Half-Life work?",
    description:
      "For a deeper look at Half-Life and its features, explore our documentation",
    buttonText: "Read the docs",
    buttonIcon: (
      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
      </svg>
    ),
  },
  {
    variant: "community" as const,
    title: "Join the community",
    description:
      "Join the Discord group and Telegram chat, and follow Half-Life on Twitter to earn points multipliers",
    buttonText: "Learn more",
    buttonIcon: <CommunityIcon className="w-5 h-5" />,
  },
  {
    variant: "invite" as const,
    title: "Invite your friends",
    description:
      "Share your unique link with your friends to join Half-Life and trade",
    buttonText: "Share Link",
    buttonIcon: (
      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
      </svg>
    ),
  },
];

/**
 * Feature carousel component that showcases different features and actions in Half-Life
 * Auto-advances through slides every 5 seconds
 */
export const FeatureCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {SLIDES.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <FeatureSlide
                {...slide}
                currentSlide={currentSlide}
                totalSlides={SLIDES.length}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
