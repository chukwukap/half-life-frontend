"use client";

import { FC } from "react";

// Achievement card component
const AchievementCard: FC<{
  title: string;
  description: string;
  status: string;
  icon: React.ReactNode;
}> = ({ title, description, status, icon }) => (
  <div className="flex flex-col items-center justify-center p-5 bg-[#F5F8FF] rounded-[14px] min-h-[140px]">
    <div className="p-2.5 bg-white rounded-lg mb-3 flex items-center justify-center">
      {icon}
    </div>
    <div className="text-center">
      <div className="font-semibold text-[#0D1C59] text-base mb-0.5">
        {title}
      </div>
      <div className="text-xs text-[#7D8FB3] mb-2">{description}</div>
      <div className="text-[#335CFF] text-xs font-semibold">{status}</div>
    </div>
  </div>
);

const Achievements: FC = () => {
  // Achievement icons
  const checkIcon = (
    <svg
      className="h-6 w-6 text-[#335CFF]"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 10L17.2 6L18.7 7.5L13 13L8 8.5L9.5 7L13 10Z"
        fill="#335CFF"
      />
      <path
        d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 20C7.6 20 4 16.4 4 12C4 7.6 7.6 4 12 4C16.4 4 20 7.6 20 12C20 16.4 16.4 20 12 20Z"
        fill="#335CFF"
      />
    </svg>
  );

  const starIcon = (
    <svg
      className="h-6 w-6 text-[#335CFF]"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 15.4L16.3 18L15.2 13L19 9.7L13.9 9.2L12 4.5L10.1 9.2L5 9.7L8.8 13L7.7 18L12 15.4Z"
        fill="#335CFF"
      />
    </svg>
  );

  return (
    <div className="bg-white rounded-[20px] p-8 h-full border border-gray-100 shadow-sm">
      {/* Achievements header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <svg
            className="h-5 w-5 text-[#335CFF] mr-2"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 15.4L16.3 18L15.2 13L19 9.7L13.9 9.2L12 4.5L10.1 9.2L5 9.7L8.8 13L7.7 18L12 15.4Z"
              fill="#335CFF"
            />
          </svg>
          <h2 className="text-[#335CFF] font-semibold text-base tracking-tight">
            Achievements
          </h2>
        </div>
        <a
          href="#"
          className="text-[#335CFF] text-sm font-medium hover:underline"
        >
          See all
        </a>
      </div>

      {/* Achievements grid */}
      <div className="grid grid-cols-2 gap-4">
        <AchievementCard
          title="First trade"
          description="Completed your first trade"
          status="Flex"
          icon={checkIcon}
        />

        <AchievementCard
          title="Win Streak"
          description="Won 3 trades in a row"
          status="Flex"
          icon={starIcon}
        />
      </div>
    </div>
  );
};

export default Achievements;
