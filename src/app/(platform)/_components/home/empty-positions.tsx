"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

/**
 * Empty state component when there are no positions
 * Shows a message and a call to action to browse tokens
 */
export const EmptyPositions = ({
  onAddPosition,
}: {
  onAddPosition?: () => void;
}) => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-10 px-4">
      <div className="w-full h-64 bg-blue-50 dark:bg-blue-900/5 rounded-2xl mb-6 flex items-center justify-center">
        {/* This is a placeholder for an empty state illustration */}
      </div>

      <h3 className="font-bold text-xl mb-2">You have no active positions</h3>
      <p className="text-center text-muted-foreground mb-6 max-w-xs">
        Pick a hype token and bet on its rise or collapse. Don&apos;t miss the
        action
      </p>

      <Link href="/token">
        <Button
          className="bg-primary hover:bg-primary/90 text-white font-medium text-base px-8 py-3 rounded-xl"
          onClick={onAddPosition}
        >
          Browse tokens
        </Button>
      </Link>
    </div>
  );
};
