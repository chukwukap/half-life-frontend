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
    <div className="py-6 px-4 bg-blue-50/50 dark:bg-blue-900/5 rounded-xl text-center">
      <p className="font-medium mb-1">You have no active positions</p>
      <p className="text-sm text-muted-foreground mb-4">
        Pick a hype token and bet on its rise or collapse. Don&apos;t miss the
        action.
      </p>
      <Link href="/tokens">
        <Button
          className="bg-blue-500 hover:bg-blue-600 text-white"
          onClick={onAddPosition}
        >
          Browse tokens
        </Button>
      </Link>
    </div>
  );
};
