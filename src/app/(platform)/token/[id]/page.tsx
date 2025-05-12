"use client";

import { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// Components for the token detail page
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
  ActivityIcon,
} from "@/components/icons";

// Import new right-column components
import Leaderboard from "./_components/leaderboard";
import TrendingTokens from "./_components/trendingTokens";
import IndexBar from "../../_components/indexBar";

// Mock token data
const tokenData = {
  id: "wif",
  name: "WIF",
  fullName: "dogwifhat",
  logoUrl: "/tokens/wif.svg",
  openTraders: 547260,
  volume: "$3,807,383",
  funding: "0.0934%",
  countdown: "00:59:20",
  entryPrice: "0.000008",
  liquidationPrice: "0.000008",
  leverage: 1,
  available: "5,321.78",
  positionValue: "+12.10%",
  marketCap: "$390.00M",
  volume24h: "$125.00M",
  socialScore: "8.7/10",
  communityScore: "7.2/10",
  vitalityScore: 80,
};

const TokenDetailPage: FC = () => {
  // Tab state
  const [activeTab, setActiveTab] = useState("overview");
  const tabList = [
    { key: "overview", label: "Overview", icon: InfoIcon },
    { key: "openPositions", label: "Open Positions", icon: BookmarkIcon },
    { key: "trades", label: "Trades", icon: TrendUpIcon },
    { key: "orderBook", label: "Order Book", icon: ArchiveIcon },
  ];

  return (
    <div className="container mx-auto px-4 py-6 max-w-screen-xl">
      {/* Back navigation */}
      <div className="mb-6">
        <Link
          href="/token"
          className="flex items-center text-blue-600 hover:underline text-sm"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          back to tokens
        </Link>
      </div>

      {/* Token header - new pill/oval design */}
      <div
        className="flex items-center w-full bg-white rounded-full px-8 py-4 mb-8"
        role="region"
        aria-label="Token header"
        style={{ boxShadow: "0 0 0 0 #fff" }}
      >
        {/* Left: Avatar, name, subtitle */}
        <div className="flex items-center min-w-[220px]">
          <div className="relative w-12 h-12 mr-4">
            <Image
              src={tokenData.logoUrl}
              alt={tokenData.name}
              width={48}
              height={48}
              className="rounded-full"
            />
          </div>
          <div>
            <h1 className="text-[24px] font-bold text-[#181A20] leading-tight">
              {tokenData.name}
            </h1>
            <p className="text-[#7D8FB3] text-base leading-tight">
              {tokenData.fullName}
            </p>
          </div>
        </div>
        {/* Star/favorite icon with blue glow */}
        <div className="ml-4 mr-8 flex items-center">
          <span
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#F5F8FF] border border-[#E9EAEC] shadow-[0_0_0_4px_#E5EDFF]"
            tabIndex={0}
            aria-label="Favorite token"
            role="button"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
                stroke="#335CFF"
                strokeWidth="1.5"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </span>
        </div>
        {/* Center: Stats */}
        <div className="flex flex-1 justify-center gap-12">
          {/* Open trades with green/red ring */}
          <div className="flex flex-col items-center min-w-[110px]">
            <div className="flex items-center mb-1">
              <span className="text-[#7D8FB3] text-sm mr-2">Open trades</span>
              <span className="inline-flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="#05CD99"
                    strokeWidth="2.5"
                  />
                  <path
                    d="M2 12a10 10 0 0 1 3-7.07"
                    stroke="#FF5A5A"
                    strokeWidth="2.5"
                  />
                </svg>
              </span>
            </div>
            <span className="text-lg font-bold text-[#181A20]">
              ${tokenData.openTraders.toLocaleString()}
            </span>
          </div>
          {/* Volume */}
          <div className="flex flex-col items-center min-w-[110px]">
            <span className="text-[#7D8FB3] text-sm mb-1">Volume</span>
            <span className="text-lg font-bold text-[#181A20]">
              {tokenData.volume}
            </span>
          </div>
          {/* Funding */}
          <div className="flex flex-col items-center min-w-[110px]">
            <span className="text-[#7D8FB3] text-sm mb-1">Funding</span>
            <span className="text-lg font-bold text-[#05CD99]">
              {tokenData.funding}
            </span>
          </div>
          {/* Cooldown */}
          <div className="flex flex-col items-center min-w-[110px]">
            <span className="text-[#7D8FB3] text-sm mb-1">Cooldown</span>
            <span className="text-lg font-bold text-[#181A20]">
              {tokenData.countdown}
            </span>
          </div>
        </div>
        {/* Right: Life Index */}
        <div className="flex items-center min-w-[200px] ml-8">
          <span className="text-[#7D8FB3] text-base mr-2">Life Index</span>
          <span className="text-[#181A20] text-base font-semibold mr-2">
            80%
          </span>
          {/* Use IndexBar for the horizontal bar */}
          <div className="w-[120px]">
            <IndexBar
              value={80}
              totalBars={20}
              getColor={() => "bg-[#05CD99]"}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Left column - Chart, Stats, and Tabs */}
        <div className="lg:col-span-3">
          {/* Price chart section */}
          <div className="mb-6">
            <TokenChart />
          </div>

          {/* Tab section */}
          <div className="mb-8">
            {/* Pixel-perfect tab header with icons (updated for blue outline) */}
            <div className="flex gap-2 mb-6">
              {tabList.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.key;
                return (
                  <button
                    key={tab.key}
                    className={`flex items-center gap-2 px-6 py-2 text-base font-semibold rounded-full transition-colors min-w-[160px] focus:outline-none relative
                      ${
                        isActive
                          ? "bg-white text-[#335CFF] ring-2 ring-[#335CFF] ring-offset-0"
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
            <div className="bg-white rounded-[16px] shadow-sm p-6 border border-[#E9EAEC]">
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
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2"
                >
                  <path
                    d="M10 18.3333C14.6024 18.3333 18.3334 14.6024 18.3334 10C18.3334 5.39763 14.6024 1.66667 10 1.66667C5.39765 1.66667 1.66669 5.39763 1.66669 10C1.66669 14.6024 5.39765 18.3333 10 18.3333Z"
                    stroke="#374151"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 10H15"
                    stroke="#374151"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="font-medium text-sm">Place prediction</span>
              </div>
            </div>
            <PredictionPlacement
              entryPrice={tokenData.entryPrice}
              liquidationPrice={tokenData.liquidationPrice}
              available={tokenData.available}
            />
          </div>
          {/* Vitality score section */}
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                {/* Use ActivityIcon for vitality score, for visual consistency and clarity */}
                {/**
                  Security: This is a stateless icon component, safe for all environments.
                  Professional: Using shared icon assets for UI consistency.
                */}
                <ActivityIcon className="mr-2" />
                <span className="font-medium text-sm">Vitality Score</span>
              </div>
            </div>
          </div>
          {/* Leaderboard section */}
          <Leaderboard
            data={[
              { rank: 1, username: "Druids_01", pnl: "$3,288.94" },
              { rank: 2, username: "Bastille_btc", pnl: "$2,265.91" },
              { rank: 3, username: "Te_the_gamer", pnl: "$1,753.59" },
              { rank: 4, username: "Galactic_Hero", pnl: "$1,500.00" },
              { rank: 5, username: "Quantum_Coder", pnl: "$1,400.75" },
            ]}
          />
          {/* Trending tokens section */}
          <TrendingTokens
            tokens={[
              {
                logoUrl: "/tokens/doge.svg",
                name: "DOGE",
                subtitle: "Dogecoin",
                lifeIndex: 80,
              },
              {
                logoUrl: "/tokens/wif.svg",
                name: "WIF",
                subtitle: "dogwifhat",
                lifeIndex: 43,
              },
              {
                logoUrl: "/tokens/floki.svg",
                name: "FLOKI",
                subtitle: "Floki",
                lifeIndex: 24,
              },
              {
                logoUrl: "/tokens/bonk.svg",
                name: "BONK",
                subtitle: "Bonk",
                lifeIndex: 80,
              },
              {
                logoUrl: "/tokens/bonk.svg",
                name: "BONK",
                subtitle: "Bonk",
                lifeIndex: 80,
              },
              {
                logoUrl: "/tokens/bonk.svg",
                name: "BONK",
                subtitle: "Bonk",
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
