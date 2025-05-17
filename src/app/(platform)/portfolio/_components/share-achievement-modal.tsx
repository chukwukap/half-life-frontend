"use client";

import { FC, useEffect, useRef } from "react";
import { CloseIcon } from "@/components/icons";

interface ShareAchievementModalProps {
  open: boolean;
  onClose: () => void;
  achievement: {
    title: string;
    description: string;
  } | null;
}

const ShareAchievementModal: FC<ShareAchievementModalProps> = ({
  open,
  onClose,
  achievement,
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

  if (!open || !achievement) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      aria-modal="true"
      role="dialog"
      tabIndex={-1}
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-[24px] shadow-2xl p-8 w-full max-w-xl mx-4"
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-[#181A20]">
            Share achievement
          </h2>
          <button
            onClick={onClose}
            aria-label="Close share achievement modal"
            className="text-[#7D8FB3] hover:text-[#335CFF] rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-[#335CFF]/20"
          >
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>
        {/* Preview area */}
        <div className="w-full h-40 sm:h-48 bg-[#F1EDFF] rounded-[24px] mb-8" />
        {/* Achievement name and description */}
        <div className="text-center mb-8">
          <div className="font-extrabold text-2xl sm:text-3xl text-[#181A20] mb-1 leading-tight">
            {achievement.title}
          </div>
          <div className="text-[#7D8FB3] text-base sm:text-lg leading-tight">
            {achievement.description}
          </div>
        </div>
        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            className="flex-1 rounded-full bg-[#F1EDFF] text-[#A689FF] text-lg font-bold py-4 transition-colors hover:bg-[#EDE6FF] focus:outline-none focus:ring-2 focus:ring-[#B18CFF]/20"
            type="button"
            aria-label="Share achievement to X"
          >
            Share to X
          </button>
          <button
            className="flex-1 rounded-full bg-[#F1EDFF] text-[#A689FF] text-lg font-bold py-4 transition-colors hover:bg-[#EDE6FF] focus:outline-none focus:ring-2 focus:ring-[#B18CFF]/20"
            type="button"
            aria-label="Download achievement image"
          >
            Download Image
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShareAchievementModal;
