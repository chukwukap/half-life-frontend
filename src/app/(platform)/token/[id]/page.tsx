"use client";

import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Star } from "lucide-react";

// Components for the token detail page
import TokenChart from "./_components/tokenChart";
import MarketStats from "./_components/marketStats";
import CommunityStats from "./_components/communityStats";
import PredictionPlacement from "./_components/predictionPlacement";
import OpenPositions from "./_components/openPositions";
import Leaderboard from "./_components/leaderboard";
import VitalityScore from "./_components/vitalityScore";

// Mock token data
const tokenData = {
  id: "wif",
  name: "WIF",
  fullName: "dogwifhat",
  logoUrl: "/tokens/wif.svg",
  openTraders: 547260,
  volume: "3,807,383",
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
  return (
    <div className="container mx-auto px-4 py-6 max-w-screen-xl">
      {/* Back navigation */}
      <div className="mb-4">
        <Link
          href="/token"
          className="flex items-center text-blue-600 hover:underline"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          back to tokens
        </Link>
      </div>

      {/* Token header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="relative w-16 h-16">
          <Image
            src={tokenData.logoUrl}
            alt={tokenData.name}
            width={64}
            height={64}
            className="rounded-full"
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold">{tokenData.name}</h1>
          <p className="text-gray-500">{tokenData.fullName}</p>
        </div>
        <button className="ml-auto bg-blue-50 text-blue-600 p-2 rounded-full hover:bg-blue-100 transition-colors">
          <Star className="h-5 w-5" />
        </button>
      </div>

      {/* Token stats */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div>
          <p className="text-gray-500 text-sm mb-1">Open traders</p>
          <p className="text-lg font-semibold">{tokenData.openTraders}</p>
        </div>
        <div>
          <p className="text-gray-500 text-sm mb-1">Volume</p>
          <p className="text-lg font-semibold">${tokenData.volume}</p>
        </div>
        <div>
          <p className="text-gray-500 text-sm mb-1">Funding</p>
          <p className="text-lg font-semibold text-green-500">
            {tokenData.funding}
          </p>
        </div>
        <div>
          <p className="text-gray-500 text-sm mb-1">Countdown</p>
          <p className="text-lg font-semibold">{tokenData.countdown}</p>
        </div>
      </div>

      {/* Price chart section */}
      <div className="mb-8">
        <TokenChart />
      </div>

      {/* Prediction placement section */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <div className="flex items-center">
            <Image
              src="/icons/prediction.svg"
              alt="Place prediction"
              width={24}
              height={24}
            />
            <span className="ml-2 font-medium">Place prediction</span>
          </div>
        </div>
        <PredictionPlacement
          entryPrice={tokenData.entryPrice}
          liquidationPrice={tokenData.liquidationPrice}
          available={tokenData.available}
        />
      </div>

      {/* Open positions section */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <div className="flex items-center">
            <Image
              src="/icons/positions.svg"
              alt="Open Positions"
              width={24}
              height={24}
            />
            <span className="ml-2 font-medium">Open Positions</span>
          </div>
        </div>
        <OpenPositions positionValue={tokenData.positionValue} />
      </div>

      {/* Stats section */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        <MarketStats
          marketCap={tokenData.marketCap}
          volume24h={tokenData.volume24h}
        />
        <CommunityStats
          socialScore={tokenData.socialScore}
          communityScore={tokenData.communityScore}
        />
      </div>

      {/* Leaderboard section */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <div className="flex items-center">
            <Image
              src="/icons/leaderboard.svg"
              alt="Leaderboard"
              width={24}
              height={24}
            />
            <span className="ml-2 font-medium">Leaderboard</span>
          </div>
        </div>
        <Leaderboard />
      </div>

      {/* Vitality score section */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <div className="flex items-center">
            <Image
              src="/icons/vitality.svg"
              alt="Vitality Score"
              width={24}
              height={24}
            />
            <span className="ml-2 font-medium">Vitality Score</span>
          </div>
        </div>
        <VitalityScore score={tokenData.vitalityScore} />
      </div>
    </div>
  );
};

export default TokenDetailPage;
