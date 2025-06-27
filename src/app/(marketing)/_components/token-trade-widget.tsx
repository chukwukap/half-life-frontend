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
    <div className="w-[480px] h-[110px] px-8 flex items-center justify-between rounded-[32px] bg-[#0b0e13] shadow-[0_4px_24px_rgba(0,0,0,0.25),0_1px_0_rgba(255,255,255,0.04)_inset] relative overflow-visible">
      {/* stacked shadow mimic */}
      <div className="absolute left-0 right-0 -bottom-4 h-3 bg-black/10 rounded-[32px] blur-md" />
      <div className="absolute left-0 right-0 -bottom-7 h-2 bg-black/20 rounded-[32px] blur-lg" />
      <div className="flex items-center gap-4">
        <Image
          src={`/assets/img/tokens/${logo}`}
          alt={name}
          width={40}
          height={40}
          className="rounded-full"
        />
        <span className="font-extrabold text-xl text-white tracking-wide uppercase">
          {name}
        </span>
      </div>
      {/* lifespan score pill */}
      <div
        className={`flex items-center gap-2 ${scoreColor} px-6 py-2 rounded-full text-primary font-semibold text-base`}
      >
        <svg
          width="18"
          height="18"
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
      <button className="ml-8 bg-primary text-white rounded-full px-12 py-4 font-semibold text-lg hover:bg-primary/90 transition-colors">
        Trade
      </button>
    </div>
  );
};

export default TokenTradeWidget;
