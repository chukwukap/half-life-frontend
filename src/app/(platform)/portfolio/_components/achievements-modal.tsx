"use client";

import { FC, useEffect, useRef } from "react";
import { AchievementIcon, CloseIcon } from "@/components/icons";

interface Achievement {
  title: string;
  description: string;
  locked?: boolean;
}

interface AchievementsModalProps {
  open: boolean;
  onClose: () => void;
  achievements: Achievement[];
}

const AchievementsModal: FC<AchievementsModalProps> = ({
  open,
  onClose,
  achievements,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Focus trap and ESC close
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      // Trap focus
      if (e.key === "Tab" && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          last.focus();
          e.preventDefault();
        } else if (!e.shiftKey && document.activeElement === last) {
          first.focus();
          e.preventDefault();
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      aria-modal="true"
      role="dialog"
      tabIndex={-1}
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-[24px] shadow-2xl p-8 w-full max-w-2xl mx-4"
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-[#181A20]">Achievements</h2>
          <button
            onClick={onClose}
            aria-label="Close achievements modal"
            className="text-[#7D8FB3] hover:text-[#335CFF] rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-[#335CFF]/20"
          >
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>
        {/* Achievements grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {achievements.map((ach) => (
            <div
              key={ach.title}
              className={`flex flex-col items-center justify-between border rounded-[18px] px-6 pt-6 pb-4 h-full transition-all ${
                ach.locked
                  ? "border-[#F0EFFF] bg-[#FAF8FF] opacity-60 cursor-not-allowed"
                  : "border-[#E9EAEC] bg-white"
              }`}
            >
              <div className="mb-4">
                <AchievementIcon />
              </div>
              <div className="text-center mb-6">
                <div
                  className={`font-extrabold text-xl mb-1 leading-tight ${
                    ach.locked ? "text-[#B8B8C7]" : "text-[#181A20]"
                  }`}
                >
                  {ach.title}
                </div>
                <div
                  className={`text-base leading-tight ${
                    ach.locked ? "text-[#B8B8C7]" : "text-[#7D8FB3]"
                  }`}
                >
                  {ach.description}
                </div>
              </div>
              <button
                className={`w-full rounded-full text-lg font-bold py-3 transition-colors focus:outline-none focus:ring-2 ${
                  ach.locked
                    ? "bg-[#F5F0FF] text-[#B8B8C7] cursor-not-allowed"
                    : "bg-[#F5F0FF] text-[#B18CFF] hover:bg-[#EDE6FF] focus:ring-[#B18CFF]/20"
                }`}
                type="button"
                aria-label={
                  ach.locked
                    ? `Locked: ${ach.title}`
                    : `Flex your achievement: ${ach.title}`
                }
                disabled={ach.locked}
              >
                Flex
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchievementsModal;
