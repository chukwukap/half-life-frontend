import React from "react";

/**
 * OverviewTab - Pixel-perfect overview content for the single token page
 * Security: Stateless, safe for all environments
 */
const OverviewTab: React.FC = () => {
  return (
    <div className="bg-white rounded-[24px] p-8 shadow-sm">
      <div className="space-y-7">
        <div>
          <div className="font-bold text-lg text-[#181A20] mb-1">
            What is Dogwifhat?
          </div>
          <div className="text-[#525866] text-base">
            Dogwifhat is a meme token of a dog with a hat, operating on the
            Solana blockchain.
          </div>
        </div>
        <div>
          <div className="font-bold text-lg text-[#181A20] mb-1">
            What is the daily trading volume of dogwifhat (WIF)?
          </div>
          <div className="text-[#7D8FB3] text-base">
            The trading volume of dogwifhat (WIF) is $138,132,609 in the last 24
            hours, representing a -33.80% decrease from one day ago and
            signalling a recent fall in market activity.
          </div>
        </div>
        <div>
          <div className="font-bold text-lg text-[#181A20] mb-1">
            What is the highest and lowest price for dogwifhat (WIF)?
          </div>
          <div className="text-[#7D8FB3] text-base">
            dogwifhat (WIF) reached an all-time high of $4.83 and an all-time
            low of $0.001555. It&apos;s now trading 88.25% below that peak and
            36,359.27% above its lowest price.
          </div>
        </div>
        <div>
          <div className="font-bold text-lg text-[#181A20] mb-1">
            What is the market cap of dogwifhat (WIF)?
          </div>
          <div className="text-[#7D8FB3] text-base">
            Market capitalization of dogwifhat (WIF) is $570,423,412 and is
            ranked #137 on CoinGecko today. Market cap is measured by
            multiplying token price with the circulating supply of WIF tokens (1
            Billion tokens are tradable on the market today).
          </div>
        </div>
        <div>
          <div className="font-bold text-lg text-[#181A20] mb-1">
            What is the fully diluted valuation of dogwifhat (WIF)?
          </div>
          <div className="text-[#7D8FB3] text-base">
            The fully diluted valuation (FDV) of dogwifhat (WIF) is
            $570,423,412. This is a statistical representation of the maximum
            market cap, assuming the maximum number of 1 Billion WIF tokens are
            in circulation today. Depending on how the emission schedule of WIF
            tokens are designed, it might take multiple years before FDV is
            realized.
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewTab;
