"use client";

import { FC } from "react";

interface VitalityScoreProps {
  score: number;
}

const VitalityScore: FC<VitalityScoreProps> = ({ score }) => {
  // Generate the vitality score indicators based on the score
  const renderScoreIndicators = () => {
    const totalIndicators = 20;
    // Calculate how many indicators should be filled
    const filledIndicators = Math.floor((score / 100) * totalIndicators);

    return (
      <div className="flex gap-[2px]">
        {Array.from({ length: totalIndicators }).map((_, index) => {
          let color = "bg-gray-100";

          if (index < filledIndicators) {
            // Determine color based on position
            if (index < totalIndicators * 0.3) {
              // First 30%
              color = "bg-red-500";
            } else if (index < totalIndicators * 0.7) {
              // Middle 40%
              color = "bg-yellow-500";
            } else {
              // Last 30%
              color = "bg-green-500";
            }
          }

          return (
            <div key={index} className={`h-2 flex-1 rounded-sm ${color}`} />
          );
        })}
      </div>
    );
  };

  return (
    <div className="border border-gray-200 rounded-lg p-4">
      <div className="mb-4">
        <p className="text-xs text-gray-500 mb-1">Life Index</p>
        <div className="flex justify-between items-center mb-2">
          <div className="font-medium">{score}%</div>
          <div className="text-gray-500 text-xs">80%</div>
        </div>
        {renderScoreIndicators()}
      </div>

      <p className="text-xs text-gray-500 leading-relaxed">
        The vitality score indicates the token&apos;s overall health based on
        market metrics, social activity, and community engagement.
      </p>
    </div>
  );
};

export default VitalityScore;
