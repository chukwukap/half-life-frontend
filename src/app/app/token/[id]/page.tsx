"use client";

import { FC, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useParams } from "next/navigation";
import { getTokenById } from "@/lib/mockData/tokens";
import { TokenData } from "@/lib/types";
import { toast } from "sonner";
import mockTokens from "@/lib/mockData/tokens";
import { useViemClients } from "@/lib/viemClient";
import { useUniswapV4Hook } from "@/hooks/useContracts";

// Components for the token detail page
import TokenHeader from "./_components/tokenHeader";
import TokenChart from "./_components/tokenChart";
import PredictionPlacement from "./_components/predictionPlacement";

// Import new right-column components
import Leaderboard from "./_components/leaderboard";
import TrendingTokens from "./_components/trendingTokens";
import OverviewTab from "./_components/overviewTab";
import PositionsCard from "./_components/positionsCard";

// Type for a position (should match PositionsCard)
type Position = {
  logo: string;
  name: string;
  subtitle: string;
  leverage: string;
  leverageColor: string;
  entry: number | null;
  liquidation: number | null;
  size: string | null;
  pnl: number;
  pnlPercent: number;
};

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

  // Positions state for simulation, initialized from mockTokens
  const [positions, setPositions] = useState<Position[]>([
    ...mockTokens.slice(0, 2).map((token, i) => ({
      logo: token.iconSrc || "",
      name: token.symbol,
      subtitle: token.fullName,
      leverage: i === 0 ? "Long 5x" : "Short 3x",
      leverageColor:
        i === 0 ? "bg-green-100 text-green-600" : "bg-red-100 text-red-500",
      entry: i === 0 ? 3.05 : null,
      liquidation: i === 0 ? 1.95 : null,
      size: i === 0 ? "$113,950.01" : null,
      pnl: i === 0 ? -2.61 : 1210.35,
      pnlPercent: i === 0 ? -0.3 : 12.1,
    })),
  ]);

  // Contract hook for UniswapV4Hook
  const { placeOrder } = useUniswapV4Hook();
  const { address } = useViemClients();
  const [openLoading, setOpenLoading] = useState(false);
  const [openError, setOpenError] = useState<string | null>(null);

  // Simulate opening a new position with haptic feedback
  const handleOpenPosition = async ({
    amount,
    leverage,
    direction,
  }: {
    amount: number;
    leverage: number;
    direction: "long" | "short";
  }) => {
    setOpenLoading(true);
    setOpenError(null);
    try {
      if (!address) throw new Error("Wallet not connected");
      // Call the real contract method to open a position
      // TODO: Replace with actual PoolManager/Router call if needed
      // Placeholder: placeOrder currently takes no arguments until contract call is implemented
      await placeOrder();
      // Haptic feedback for supported devices (security: safe, non-blocking)
      if (typeof window !== "undefined" && navigator.vibrate) {
        navigator.vibrate(50); // 50ms vibration
      }
      toast.success("Position opened successfully!");
      setPositions((prev) => [
        {
          logo: "/assets/img/tokens/zora.png",
          name: "ZORA",
          subtitle: "Zora",
          leverage: `${direction === "long" ? "Long" : "Short"} ${leverage}x`,
          leverageColor:
            direction === "long"
              ? "bg-green-100 text-green-600"
              : "bg-red-100 text-red-500",
          entry: 2.99,
          liquidation: 1.5,
          size: `$${amount.toLocaleString()}`,
          pnl: 0.0,
          pnlPercent: 0.0,
        },
        ...prev,
      ]);
    } catch (e: unknown) {
      const errMsg = e instanceof Error ? e.message : "Failed to open position";
      setOpenError(errMsg);
    } finally {
      setOpenLoading(false);
    }
  };

  // If token not found, show a not found message
  if (!tokenData) {
    return (
      <div className="container mx-auto py-6 max-w-screen-xl">
        <div className="text-center text-red-600 font-bold text-lg mt-20">
          Token not found.
        </div>
        <div className="text-center mt-4">
          <Link href="/app/token" className="text-blue-600 hover:underline">
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
          href="/app/token"
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

      <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
        {/* Left column - Chart, Stats, and Tabs */}
        <div className="lg:col-span-4 border border-[#EBF1FF] rounded-lg p-4">
          {/* Price chart section */}
          <div className="mb-16">
            <TokenChart tokenId={tokenData.id} />
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
              onOpenPosition={handleOpenPosition}
              loading={openLoading}
              error={openError}
            />
          </div>
          {/* Positions card - new, matches Figma */}
          <PositionsCard positions={positions} setPositions={setPositions} />
          <OverviewTab />
        </div>
      </div>
    </div>
  );
};

export default TokenDetailPage;
