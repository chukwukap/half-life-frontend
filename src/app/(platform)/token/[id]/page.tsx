"use client";

import { FC, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useParams } from "next/navigation";
import { getTokenById } from "@/lib/mockData/tokens";
import { TokenData } from "@/lib/types";

// Components for the token detail page
import TokenHeader from "./_components/tokenHeader";
import TokenChart from "./_components/tokenChart";
import PredictionPlacement from "./_components/predictionPlacement";

// Import tab content components (to be created if not present)
import OverviewTab from "./_components/overviewTab";
import OpenPositionsTab from "./_components/openPositionsTab";
import TradesTab from "./_components/tradesTab";
import OrderBookTab from "./_components/orderBookTab";

// Import icons for tabs
import {
  InfoIcon,
  BookmarkIcon,
  TrendUpIcon,
  ArchiveIcon,
} from "@/components/icons";

// Import new right-column components
import Leaderboard from "./_components/leaderboard";
import TrendingTokens from "./_components/trendingTokens";

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

  // Tab state
  const [activeTab, setActiveTab] = useState("overview");
  const tabList = [
    { key: "overview", label: "Overview", icon: InfoIcon },
    { key: "openPositions", label: "Open Positions", icon: BookmarkIcon },
    { key: "trades", label: "Trades", icon: TrendUpIcon },
    { key: "orderBook", label: "Order Book", icon: ArchiveIcon },
  ];

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
          <div className="mb-8">
            {/*  tab header with icons (updated for blue outline) */}
            <div className="flex gap-2 mb-6 ">
              {tabList.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.key;
                return (
                  <button
                    key={tab.key}
                    className={`flex items-center gap-2 px-4 py-2 text-sm rounded-full transition-colors  focus:outline-none relative
                      ${
                        isActive
                          ? "bg-white text-[#335CFF] ring-1 ring-[#335CFF] ring-offset-0"
                          : "bg-transparent text-[#7D8FB3] hover:bg-[#F5F8FF]"
                      }
                    `}
                    onClick={() => setActiveTab(tab.key)}
                  >
                    <Icon
                      className={`w-5 h-5 ${
                        isActive ? "text-[#335CFF]" : "text-[#7D8FB3]"
                      }`}
                    />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
            {/* Tab content */}
            <div className="bg-white rounded-[16px] ">
              {activeTab === "overview" && <OverviewTab />}
              {activeTab === "openPositions" && <OpenPositionsTab />}
              {activeTab === "trades" && <TradesTab />}
              {activeTab === "orderBook" && <OrderBookTab />}
            </div>
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

          {/* Leaderboard section */}
          <Leaderboard
            data={[
              {
                rank: 1,
                username: "Druids_01",
                pnl: "$3,288.94",
                image: "/assets/img/pixel/druids.png",
              },
              {
                rank: 2,
                username: "Bastille_btc",
                pnl: "$2,265.91",
                image: "/assets/img/pixel/bastille.png",
              },
              {
                rank: 3,
                username: "Te_the_gamer",
                pnl: "$1,753.59",
                image: "/assets/img/pixel/te.png",
              },
              {
                rank: 4,
                username: "Galactic_Hero",
                pnl: "$1,500.00",
                image: "/assets/img/pixel/galactic.png",
              },
              {
                rank: 5,
                username: "Quantum_Coder",
                pnl: "$1,400.75",
                image: "/assets/img/pixel/quantum.png",
              },
            ]}
          />
          {/* Trending tokens section */}
          <TrendingTokens
            tokens={[
              {
                logoUrl: "/assets/img/tokens/doge.png",
                name: "DOGE",
                subtitle: "Dogecoin",
                lifeIndex: 80,
              },
              {
                logoUrl: "/assets/img/tokens/wif.png",
                name: "WIF",
                subtitle: "dogwifhat",
                lifeIndex: 43,
              },
              {
                logoUrl: "/assets/img/tokens/floki.png",
                name: "FLOKI",
                subtitle: "Floki",
                lifeIndex: 24,
              },
              {
                logoUrl: "/assets/img/tokens/pepe.png",
                name: "PEPE",
                subtitle: "Pepe",
                lifeIndex: 80,
              },
              {
                logoUrl: "/assets/img/tokens/bonk.png",
                name: "BONK",
                subtitle: "Bonk",
                lifeIndex: 80,
              },
              {
                logoUrl: "/assets/img/tokens/trol.png",
                name: "TROL",
                subtitle: "Trol",
                lifeIndex: 80,
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default TokenDetailPage;
