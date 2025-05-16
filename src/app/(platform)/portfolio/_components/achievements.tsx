"use client";

import { WinRateIcon, WinStreakIcon } from "@/components/icons";
import { FC } from "react";

// Achievement card component
const AchievementCard: FC<{
  title: string;
  description: string;
  icon: React.ReactNode;
}> = ({ title, description, icon }) => (
  <div className="flex flex-col items-center justify-between border border-[#E9EAEC] rounded-[18px] px-6 pt-6 pb-4 bg-white h-full">
    <div className="mb-4">{icon}</div>
    <div className="text-center mb-6">
      <div className="font-extrabold text-[#181A20] text-xl mb-1 leading-tight">
        {title}
      </div>
      <div className="text-[#7D8FB3] text-base leading-tight">
        {description}
      </div>
    </div>
    <button
      className="w-full rounded-full bg-[#EEF4FF] text-[#335CFF] text-lg font-bold py-3 transition-colors hover:bg-[#E5EDFF] focus:outline-none focus:ring-2 focus:ring-[#335CFF]/20"
      type="button"
      aria-label={`Flex your achievement: ${title}`}
    >
      Flex
    </button>
  </div>
);

const Achievements: FC = () => {
  return (
    <div className="bg-white rounded-[24px] p-4 border border-[#E9EAEC] w-full max-w-full">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <WinRateIcon />
          <h2 className="text-[#181A20] font-bold text-xl leading-tight">
            Achievements
          </h2>
        </div>
        <a
          href="#"
          className="rounded-full bg-[#F5F8FF] text-[#335CFF] text-base font-medium px-5 py-2 transition-colors hover:bg-[#E5EDFF] focus:outline-none focus:ring-2 focus:ring-[#335CFF]/20"
        >
          See all
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <AchievementCard
          title="First trade"
          description="Completed your first trade"
          icon={<WinRateIcon />}
        />
        <AchievementCard
          title="Win Streak"
          description="Won 3 trades in a row"
          icon={<WinStreakIcon />}
        />
      </div>
    </div>
  );
};

export default Achievements;
