"use client";
import { FC, useState } from "react";
import Image from "next/image";

const slides = [
  {
    illustration: "/assets/img/illustrations/welcome-modal.svg",
    title: "Welcome to Half-Life",
    description:
      "Predict token longevity, not just price movement. Half-Life empowers you to trade on a token's survival potential, rate of decay, and everything in between.",
    cta: "Let's go",
  },
  {
    illustration: "/assets/img/illustrations/explore-lifespan.svg",
    title: "Explore Lifespan Metrics",
    description:
      "Lifespan Index tracks each token through trading patterns, social engagement, developer activity, and market trajectories.",
    cta: "Next",
  },
  {
    illustration: "/assets/img/illustrations/action.svg",
    title: "Predict, Trade, Profit",
    description:
      "Take positions based on token vitality and profit from your insights before the market catches up. Your foresight is now your advantage.",
    cta: "Get started",
  },
];

const OnboardingModal: FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [step, setStep] = useState(0);

  const handleNext = () => {
    if (step < slides.length - 1) setStep(step + 1);
    else onComplete();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-[24px] p-8 max-w-md w-full shadow-2xl flex flex-col items-center">
        <div className="mb-6 w-full flex justify-center">
          <Image
            src={slides[step].illustration}
            alt={slides[step].title}
            width={240}
            height={160}
            className="object-contain rounded-2xl"
            priority
          />
        </div>
        <h2 className="text-xl font-bold mb-2 text-center">
          {slides[step].title}
        </h2>
        <p className="text-[#7D8FB3] text-center mb-6">
          {slides[step].description}
        </p>
        <div className="flex w-full justify-between items-center">
          <button
            className="text-[#7D8FB3] font-medium"
            onClick={onComplete}
            aria-label="Close onboarding"
          >
            Close
          </button>
          <div className="flex gap-1 items-center">
            {slides.map((_, i) => (
              <span
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i === step ? "bg-[#335CFF]" : "bg-[#E9EAEC]"
                }`}
              />
            ))}
          </div>
          <button
            className="rounded-full bg-[#EEF4FF] text-[#335CFF] font-bold px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#335CFF]/20"
            onClick={handleNext}
            aria-label={slides[step].cta}
          >
            {slides[step].cta}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingModal;
