"use client";

import { FC } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useParams } from "next/navigation";
import { getTokenById } from "@/lib/mockData/tokens";
import { TokenData } from "@/lib/types";

// Components for the token detail page
import TokenHeader from "./_components/tokenHeader";
import TokenChart from "./_components/tokenChart";
import PredictionPlacement from "./_components/predictionPlacement";

// Import new right-column components
import Leaderboard from "./_components/leaderboard";
import TrendingTokens from "./_components/trendingTokens";
import OverviewTab from "./_components/overviewTab";
import PositionsCard from "./_components/positionsCard";

const TokenDetailPage: FC = () => {
  // Get the token id from the URL params
  const params = useParams();
  const tokenId =
    typeof params.id === "string"
      ? params.id
      : Array.isArray(params.id)
      ? params.id[0]
      : undefined;

  // Fetch the token data by id
  const tokenData: TokenData | undefined = tokenId
    ? getTokenById(tokenId)
    : undefined;

  // If token not found, show a not found message
  if (!tokenData) {
    return (
      <div className="container mx-auto py-6 max-w-screen-xl">
        <div className="text-center text-red-600 font-bold text-lg mt-20">
          Token not found.
        </div>
        <div className="text-center mt-4">
          <Link href="/token" className="text-blue-600 hover:underline">
            Back to tokens
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-6 max-w-screen-xl">
      {/* Back navigation */}
      <div className="mb-4 text-sm font-extrabold">
        <Link
          href="/token"
          className="flex items-center text-blue-600 hover:underline text-sm"
        >
          <ArrowLeft className=" mr-2 bg-[#EBF1FF] rounded-full p-1" />
          back to tokens
        </Link>
      </div>

      {/* Pixel-perfect token header component */}
      <TokenHeader
        logoUrl={tokenData.iconSrc || ""}
        name={tokenData.symbol}
        subtitle={tokenData.fullName}
        openTraders={tokenData.openTraders}
        volume={tokenData.volume24h}
        funding={tokenData.funding}
        cooldown={tokenData.countdown}
        lifeIndex={tokenData.vitalityScore}
      />

      <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
        {/* Left column - Chart, Stats, and Tabs */}
        <div className="lg:col-span-5 border border-[#EBF1FF] rounded-lg p-4">
          {/* Price chart section */}
          <div className="mb-16">
            <TokenChart />
          </div>

          {/* Tab section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Leaderboard
              data={[
                {
                  rank: 1,
                  username: "Druids_01",
                  pnl: "$3,288.94",
                  image: "/assets/img/defiCTO.png",
                },
                {
                  rank: 2,
                  username: "Bastille_btc",
                  pnl: "$2,265.91",
                  image: "/assets/img/defiCTO.png",
                },
                {
                  rank: 3,
                  username: "Te_the_gamer",
                  pnl: "$1,753.59",
                  image: "/assets/img/defiCTO.png",
                },
                {
                  rank: 4,
                  username: "Galactic_Hero",
                  pnl: "$1,500.00",
                  image: "/assets/img/defiCTO.png",
                },
                {
                  rank: 5,
                  username: "Quantum_Coder",
                  pnl: "$1,400.75",
                  image: "/assets/img/defiCTO.png",
                },
              ]}
            />
            <TrendingTokens />
          </div>
        </div>

        {/* Right column - Trading and Positions */}
        <div className="lg:col-span-2">
          {/* Prediction placement section */}
          <div className="mb-6">
            <PredictionPlacement
              entryPrice={tokenData.price.toString()}
              liquidationPrice={tokenData.positionValue}
              available={tokenData.available}
            />
          </div>
          {/* Positions card - new, matches Figma */}
          <PositionsCard />
          <OverviewTab />
        </div>
      </div>
    </div>
  );
};

export default TokenDetailPage;
