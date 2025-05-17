"use client";

import { WinRateIcon, WinStreakIcon } from "@/components/icons";
import { FC, useState } from "react";
import AchievementsModal from "./achievements-modal";
import ShareAchievementModal from "./share-achievement-modal";

// Achievement card component
const AchievementCard: FC<{
  title: string;
  description: string;
  icon: React.ReactNode;
  onFlex?: () => void;
}> = ({ title, description, icon, onFlex }) => (
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
      onClick={onFlex}
    >
      Flex
    </button>
  </div>
);

const achievementsList = [
  {
    title: "First trade",
    description: "Completed your first trade",
  },
  {
    title: "Win Streak",
    description: "Won 3 trades in a row",
  },
  {
    title: "Diamond Hands",
    description: "Held a position for over 14 days",
  },
  {
    title: "High Roller",
    description: "Made a trade with over $10,000",
  },
  {
    title: "Risk Taker",
    description: "Used 10x Leverage or higher",
  },
  {
    title: "Profit Hunter",
    description: "Achieve 10 profitable trades in a row without a single loss.",
    locked: true,
  },
];

const Achievements: FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const [selectedAchievement, setSelectedAchievement] = useState<{
    title: string;
    description: string;
  } | null>(null);

  return (
    <>
      <div className="bg-white rounded-[24px] p-4 border border-[#E9EAEC] w-full max-w-full">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <WinRateIcon />
            <h2 className="text-[#181A20] font-bold text-xl leading-tight">
              Achievements
            </h2>
          </div>
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="rounded-full bg-[#F5F8FF] text-[#335CFF] text-base font-medium px-5 py-2 transition-colors hover:bg-[#E5EDFF] focus:outline-none focus:ring-2 focus:ring-[#335CFF]/20"
            aria-label="See all achievements"
          >
            See all
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <AchievementCard
            title="First trade"
            description="Completed your first trade"
            icon={<WinRateIcon />}
            onFlex={() => {
              setSelectedAchievement({
                title: "First trade",
                description: "Completed your first trade",
              });
              setShareOpen(true);
            }}
          />
          <AchievementCard
            title="Win Streak"
            description="Won 3 trades in a row"
            icon={<WinStreakIcon />}
            onFlex={() => {
              setSelectedAchievement({
                title: "Win Streak",
                description: "Won 3 trades in a row",
              });
              setShareOpen(true);
            }}
          />
        </div>
      </div>
      <AchievementsModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        achievements={achievementsList}
      />
      <ShareAchievementModal
        open={shareOpen}
        onClose={() => setShareOpen(false)}
        achievement={selectedAchievement}
      />
    </>
  );
};

export default Achievements;
