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
        <Users className="h-4 w-4 text-gray-500" />
        <span className="text-sm font-medium">Community Stats</span>
      </div>

      <div className="p-4">
        <div className="flex justify-between mb-4">
          <span className="text-xs text-gray-500">Social Score</span>
          <span className="text-sm font-medium">{socialScore}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-xs text-gray-500">Community Score</span>
          <span className="text-sm font-medium">{communityScore}</span>
        </div>
      </div>
    </div>
  );
};

export default CommunityStats;
