"use client";

import { FC } from "react";

interface FeatureSlideProps {
  title: string;
  description: string;
  buttonText: string;
  buttonIcon: React.ReactNode;
  variant: "deposit" | "docs" | "community" | "invite";
  onClick?: () => void;
  currentSlide: number;
  totalSlides: number;
}

/**
 * FeatureSlide component that displays a feature or action with a title, description, and button
 * Used in the feature carousel on the home page to showcase different features of Half-Life
 * Variants:
 * - deposit: Purple background for deposit actions
 * - docs: Dark red background for documentation
 * - community: Orange background for community links
 * - invite: Blue background for referral/invite actions
 */
export const FeatureSlide: FC<FeatureSlideProps> = ({
  title,
  description,
  buttonText,
  buttonIcon,
  variant,
  onClick,
  currentSlide,
  totalSlides,
}) => {
  const bgColors = {
    deposit: "bg-[#4A1FB8]", // Deep purple from the image
    docs: "bg-[#8B1D1D]",
    community: "bg-[#B84A1F]",
    invite: "bg-[#1F4AB8]",
  };

  const buttonStyles = {
    deposit: "bg-[#E8E5FF] text-[#4A1FB8] hover:bg-[#D1CCFF]",
    docs: "bg-[#FFE5E5] text-[#8B1D1D] hover:bg-[#FFD1D1]",
    community: "bg-[#FFE5E5] text-[#B84A1F] hover:bg-[#FFD1D1]",
    invite: "bg-[#E5F0FF] text-[#1F4AB8] hover:bg-[#D1E5FF]",
  };

  return (
    <div
      className={`${bgColors[variant]} rounded-3xl text-white p-8 h-80 flex flex-col relative overflow-hidden`}
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20" />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        <h2 className="text-2xl font-bold leading-tight mb-4">{title}</h2>
        <p className="text-white/80 text-base leading-relaxed">{description}</p>

        <div className="flex-grow" />

        <div className="flex flex-col items-start gap-6">
          <button
            onClick={onClick}
            className={`${buttonStyles[variant]} rounded-full py-3 px-8 font-medium flex items-center gap-3 text-sm transition-colors`}
          >
            {buttonIcon}
            {buttonText}
          </button>

          {/* Carousel dots */}
          <div className="flex gap-2">
            {[...Array(totalSlides)].map((_, index) => (
              <span
                key={index}
                className={`w-2 h-2 rounded-full transition-opacity ${
                  index === currentSlide ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
