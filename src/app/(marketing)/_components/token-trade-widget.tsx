import Image from "next/image";

interface TokenTradeWidgetProps {
  token: {
    name: string;
    logo: string; // asset path relative to public/assets/img/tokens
    score: number;
    scoreColor?: string; // tailwind color for pill bg
  };
}

/**
 * TokenTradeWidget – marketing-only mock trade banner.
 */
const TokenTradeWidget: React.FC<TokenTradeWidgetProps> = ({ token }) => {
  const { name, logo, score, scoreColor = "bg-[#E6ECFF]" } = token;
  return (
    <div className="w-[380px] rounded-[28px] bg-background/95 border border-border/40 px-6 py-4 flex items-center justify-between shadow-lg">
      <div className="flex items-center gap-3">
        <Image
          src={`/assets/img/tokens/${logo}`}
          alt={name}
          width={40}
          height={40}
          className="rounded-full"
        />
        <span className="font-extrabold text-base text-foreground">{name}</span>
      </div>
      {/* lifespan score pill */}
      <div
        className={`flex items-center gap-1 ${scoreColor} px-4 py-1 rounded-full text-primary font-medium text-sm`}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
        {score}
        <sup className="text-primary ml-0.5">A</sup>
      </div>
      <button className="ml-6 bg-primary text-white rounded-full px-8 py-2 font-semibold text-sm hover:bg-primary/90 transition-colors">
        Trade
      </button>
    </div>
  );
};

export default TokenTradeWidget;
