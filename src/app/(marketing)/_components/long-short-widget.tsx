import React from "react";

interface LongShortWidgetProps {
  direction: "long" | "short";
  entry: number;
  liquidation: number;
}

/**
 * LongShortWidget
 * Purely presentational widget that mirrors the marketing mockups for showing
 * an example trade ticket. No interactivity or state.
 */
const LongShortWidget: React.FC<LongShortWidgetProps> = ({
  direction,
  entry,
  liquidation,
}) => {
  const isLong = direction === "long";
  const primaryColor = isLong ? "bg-[#11B364]" : "bg-[#E53F4F]"; // green / red
  return (
    <div className="w-[360px] md:w-[400px] rounded-[28px] border border-primary/5 bg-background/90 backdrop-blur-sm p-6 text-left shadow-sm">
      {/* top row labels */}
      <div className="flex items-start justify-between text-sm font-medium mb-4">
        <div className="text-muted-foreground">Entry</div>
        <div className="text-muted-foreground">Liquidated at</div>
      </div>
      {/* top row values */}
      <div className="flex items-start justify-between mb-6">
        <span className="text-2xl font-extrabold">
          {entry}
          <sup className="text-primary ml-1 text-base align-super">A</sup>
        </span>
        <span className="text-2xl font-extrabold">
          {liquidation}
          <sup className="text-primary ml-1 text-base align-super">A</sup>
        </span>
      </div>
      {/* CTA bar */}
      <button
        type="button"
        className={`w-full h-14 md:h-16 ${primaryColor} rounded-full text-white font-semibold text-lg focus:outline-none`}
      >
        {isLong ? "Long" : "Short"}
      </button>
    </div>
  );
};

export default LongShortWidget;
