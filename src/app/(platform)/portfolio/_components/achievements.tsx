"use client";

import { FC } from "react";

// Hand wave and win streak icons for achievements
const HandWaveIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="16" cy="16" r="16" fill="#F1F5FF" />
    <path
      d="M21.5 13.5C21.5 13.5 21.5 11.5 20.5 11.5C19.5 11.5 19.5 13.5 19.5 13.5"
      stroke="#335CFF"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M14.5 10.5V15.5"
      stroke="#335CFF"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M17.5 12.5V17.5"
      stroke="#335CFF"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M12.5 13.5V18.5"
      stroke="#335CFF"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M15.5 17.5V21.5"
      stroke="#335CFF"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);
const WinStreakIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="16" cy="16" r="16" fill="#F1F5FF" />
    <circle cx="16" cy="16" r="6" stroke="#335CFF" strokeWidth="1.5" />
    <circle cx="16" cy="16" r="1.5" fill="#335CFF" />
    <circle cx="16" cy="10" r="1.5" fill="#335CFF" />
    <circle cx="21" cy="19" r="1.5" fill="#335CFF" />
    <circle cx="11" cy="19" r="1.5" fill="#335CFF" />
  </svg>
);

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
    <div className="bg-white rounded-[24px] p-8 border border-[#E9EAEC] w-full max-w-full">
      {/* Achievements header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <HandWaveIcon />
          <h2 className="text-[#181A20] font-bold text-xl leading-tight">
            Achievements
          </h2>
        </div>
        <a
          href="#"
          className="rounded-full bg-[#F5F8FF] text-[#335CFF] text-base font-medium px-6 py-2 transition-colors hover:bg-[#E5EDFF] focus:outline-none focus:ring-2 focus:ring-[#335CFF]/20"
        >
          See all
        </a>
      </div>
      {/* Achievements grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <AchievementCard
          title="First trade"
          description="Completed your first trade"
          icon={<HandWaveIcon />}
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
