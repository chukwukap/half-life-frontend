"use client";

import { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Star } from "lucide-react";

// Components for the token detail page
import TokenChart from "./_components/tokenChart";
import MarketStats from "./_components/marketStats";
import CommunityStats from "./_components/communityStats";
import PredictionPlacement from "./_components/predictionPlacement";
import VitalityScore from "./_components/vitalityScore";

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

      {/* Token header */}
      <div className="bg-white rounded-3xl p-6 mb-8 shadow-sm">
        <div className="flex items-center">
          <div className="flex items-center">
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
              <h1 className="text-2xl font-bold">{tokenData.name}</h1>
              <p className="text-gray-500 text-sm">{tokenData.fullName}</p>
            </div>
            <button className="ml-4 bg-blue-50 text-blue-600 p-2 rounded-full hover:bg-blue-100 transition-colors">
              <Star className="h-5 w-5" />
            </button>
          </div>

          <div className="flex ml-auto space-x-12">
            <div>
              <p className="text-gray-500 text-xs mb-1">Open trades</p>
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-green-100 border-2 border-green-500 mr-2"></div>
                <p className="text-base font-medium">
                  ${tokenData.openTraders.toLocaleString()}
                </p>
              </div>
            </div>
            <div>
              <p className="text-gray-500 text-xs mb-1">Volume</p>
              <p className="text-base font-medium">{tokenData.volume}</p>
            </div>
            <div>
              <p className="text-gray-500 text-xs mb-1">Funding</p>
              <p className="text-base font-medium text-green-500">
                {tokenData.funding}
              </p>
            </div>
            <div>
              <p className="text-gray-500 text-xs mb-1">Cooldown</p>
              <p className="text-base font-medium">{tokenData.countdown}</p>
            </div>
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

          {/* Stats section in two columns */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            <MarketStats
              marketCap={tokenData.marketCap}
              volume24h={tokenData.volume24h}
            />
            <CommunityStats
              socialScore={tokenData.socialScore}
              communityScore={tokenData.communityScore}
            />
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
                {/*
                  Security: This is a stateless icon component, safe for all environments.
                  Professional: Using shared icon assets for UI consistency.
                */}
                <ActivityIcon className="mr-2" />
                <span className="font-medium text-sm">Vitality Score</span>
              </div>
            </div>
            <VitalityScore score={tokenData.vitalityScore} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenDetailPage;
