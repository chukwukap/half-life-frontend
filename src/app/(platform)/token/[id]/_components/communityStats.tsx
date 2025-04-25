"use client";

import { FC } from "react";
import { Users } from "lucide-react";

interface CommunityStatsProps {
  socialScore: string;
  communityScore: string;
}

const CommunityStats: FC<CommunityStatsProps> = ({
  socialScore,
  communityScore,
}) => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <div className="p-4 flex items-center gap-2 border-b">
        <Users className="h-5 w-5" />
        <span className="font-medium">Community Stats</span>
      </div>

      <div className="p-4">
        <div className="flex justify-between mb-4">
          <span className="text-gray-500">Social Score</span>
          <span className="font-medium">{socialScore}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Community Score</span>
          <span className="font-medium">{communityScore}</span>
        </div>
      </div>
    </div>
  );
};

export default CommunityStats;
