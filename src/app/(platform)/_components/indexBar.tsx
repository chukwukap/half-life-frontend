import React from "react";
import { cn } from "@/lib/utils";

/**
 * Props for the IndexBar component
 * @param value - The percentage value (0-100) to fill the bars
 * @param totalBars - Total number of bars to display (default: 20)
 * @param className - Optional additional class names for the container
 * @param barClassName - Optional additional class names for each bar
 * @param getColor - Optional custom color function, defaults to life index color logic
 */
interface IndexBarProps {
  value: number; // Percentage (0-100)
  totalBars?: number;
  className?: string;
  barClassName?: string;
  getColor?: (value: number) => string;
}

/**
 * Returns a Tailwind color class based on the value (life index percent)
 * - >= 80: red
 * - >= 50: amber
 * - < 50: green
 * This logic matches the token-card.tsx getTokenColor function.
 */
function defaultGetColor(value: number): string {
  if (value >= 80) return "bg-red-500";
  if (value >= 50) return "bg-amber-500";
  return "bg-green-500";
}

/**
 * IndexBar - A reusable, adaptive bar indicator for percentage values
 * Security: Stateless, no user input, safe for use in all environments
 *
 * @example
 *   <IndexBar value={60} />
 */
const IndexBar: React.FC<IndexBarProps> = ({
  value,
  totalBars = 20,
  className = "",
  barClassName = "",
  getColor = defaultGetColor,
}) => {
  // Calculate how many bars should be filled
  const filledBars = Math.round((value / 100) * totalBars);

  return (
    <div className={cn("flex gap-[2px] w-full", className)}>
      {Array.from({ length: totalBars }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "h-2 flex-1 rounded-full transition-colors duration-200",
            i < filledBars ? getColor(value) : "bg-gray-200",
            barClassName
          )}
        />
      ))}
    </div>
  );
};

export default IndexBar;
