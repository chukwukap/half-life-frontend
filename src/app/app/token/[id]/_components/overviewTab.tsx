import { InfoIcon2 } from "@/components/icons";
import React, { useState } from "react";

/**
 * OverviewTab - Pixel-perfect overview content for the single token page
 * Security: Stateless, safe for all environments
 */
const sections = [
  {
    title: "What is Dogwifhat?",
    content:
      "Dogwifhat is a meme token of a dog with a hat, operating on the Solana blockchain.",
  },
  {
    title: "What is the daily trading volume of dogwifhat (WIF)?",
    content:
      "The trading volume of dogwifhat (WIF) is $138,132,609 in the last 24 hours, representing a -33.80% decrease from one day ago and signalling a recent fall in market activity.",
  },
  {
    title: "What is the highest and lowest price for dogwifhat (WIF)?",
    content:
      "dogwifhat (WIF) reached an all-time high of $4.83 and an all-time low of $0.001555. It's now trading 88.25% below that peak and 36,359.27% above its lowest price.",
  },
  {
    title: "What is the market cap of dogwifhat (WIF)?",
    content:
      "Market capitalization of dogwifhat (WIF) is $570,423,412 and is ranked #137 on CoinGecko today. Market cap is measured by multiplying token price with the circulating supply of WIF tokens (1 Billion tokens are tradable on the market today).",
  },
  {
    title: "What is the fully diluted valuation of dogwifhat (WIF)?",
    content:
      "The fully diluted valuation (FDV) of dogwifhat (WIF) is $570,423,412. This is a statistical representation of the maximum market cap, assuming the maximum number of 1 Billion WIF tokens are in circulation today. Depending on how the emission schedule of WIF tokens are designed, it might take multiple years before FDV is realized.",
  },
];

const OverviewTab: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const visibleSections = sections.slice(0, 2);

  return (
    <div className="bg-white border border-[#EBF1FF] p-6 rounded-lg relative">
      {/* Header */}
      <div className="font-bold text-lg text-[#181A20] mb-4 flex items-center gap-2">
        <InfoIcon2 className="text-[#335CFF] text-xl" /> About
      </div>
      <div className="space-y-7">
        {visibleSections.map((section, idx) => (
          <div key={idx}>
            <div className="font-bold text-lg text-[#181A20] mb-1">
              {section.title}
            </div>
            <div
              className={
                idx === 0
                  ? "text-[#525866] text-base"
                  : "text-[#7D8FB3] text-base"
              }
            >
              {section.content}
            </div>
          </div>
        ))}
        <button
          className="text-[#335CFF] font-medium text-base mt-2 focus:outline-none hover:underline"
          onClick={() => setModalOpen(true)}
          aria-expanded={modalOpen}
        >
          Read more
        </button>
      </div>
      {/* Modal for full overview */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          aria-modal="true"
          role="dialog"
        >
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 relative animate-fade-in">
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-[#335CFF] text-2xl font-bold focus:outline-none"
              onClick={() => setModalOpen(false)}
              aria-label="Close overview modal"
            >
              ×
            </button>
            <div className="font-bold text-lg text-[#181A20] mb-4 flex items-center gap-2">
              <InfoIcon2 className="text-[#335CFF] text-xl" /> About
            </div>
            <div className="space-y-6 max-h-[70vh] overflow-y-auto pr-2">
              {sections.map((section, idx) => (
                <div key={idx}>
                  <div className="font-bold text-base text-[#181A20] mb-1">
                    {section.title}
                  </div>
                  <div
                    className={
                      idx === 0
                        ? "text-[#525866] text-base"
                        : "text-[#7D8FB3] text-base"
                    }
                  >
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OverviewTab;
