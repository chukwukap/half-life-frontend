"use client";

import { FC } from "react";

interface AchievementProps {
  title: string;
  description: string;
  status: string;
}

const Achievement: FC<AchievementProps> = ({ title, description, status }) => {
  return (
    <div className="bg-blue-50 rounded-xl p-4">
      <div className="flex items-center mb-2">
        <div className="bg-white p-2 rounded-lg mr-3">
          <svg
            className="h-5 w-5 text-blue-600"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 15L8.5 11.5L9.91 10.09L12 12.17L17.18 7L18.59 8.41L12 15Z"
              fill="currentColor"
            />
            <path
              d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <span className="font-medium">{title}</span>
      </div>
      <p className="text-sm text-gray-600 mb-2 ml-12">{description}</p>
      <div className="text-blue-600 text-sm font-medium ml-12">{status}</div>
    </div>
  );
};

const Achievements: FC = () => {
  // Mock achievements data
  const achievements = [
    {
      id: "1",
      title: "First trade",
      description: "Completed your first trade",
      status: "Flex",
    },
    {
      id: "2",
      title: "Win Streak",
      description: "Won 3 trades in a row",
      status: "Flex",
    },
  ];

  return (
    <div className="bg-white rounded-3xl p-6 h-full border border-gray-100 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <svg
            className="h-5 w-5 text-blue-600 mr-2"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 2L14.39 6.81L19.5 7.5L15.75 11.34L16.69 16.5L12 14.09L7.31 16.5L8.25 11.34L4.5 7.5L9.61 6.81L12 2Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h2 className="text-blue-600 font-medium">Achievements</h2>
        </div>
        <a href="#" className="text-blue-600 text-sm hover:underline">
          See all
        </a>
      </div>

      <div className="space-y-4">
        {achievements.map((achievement) => (
          <Achievement
            key={achievement.id}
            title={achievement.title}
            description={achievement.description}
            status={achievement.status}
          />
        ))}
      </div>
    </div>
  );
};

export default Achievements;
