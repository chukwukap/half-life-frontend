"use client";

import Link from "next/link";
import { FireIcon } from "@/components/icons";
import Image from "next/image";
import { useUniswapV4Hook } from "@/hooks/useContracts";
import { useViemClients } from "@/lib/viemClient";
import { useEffect, useState } from "react";

/**
 * Positions card component showing a list of user's positions or empty state.
 * Pixel-perfect, accessible, and modular.
 */
export const PositionsCard = () => {
  // Get connected wallet address
  const { address } = useViemClients();
  const { readUserPosition } = useUniswapV4Hook();
  const [position, setPosition] = useState<bigint | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch on-chain position for the user
  useEffect(() => {
    if (!address) return;
    setLoading(true);
    setError(null);
    readUserPosition(address)
      .then((pos) =>
        setPosition(
          typeof pos === "bigint" ? pos : BigInt(pos?.toString?.() ?? "0")
        )
      )
      .catch(() => setError("Failed to fetch position"))
      .finally(() => setLoading(false));
  }, [address, readUserPosition]);

  // Shared header for both states
  const Header = (
    <div className="w-full flex items-center justify-between mb-0 px-2 pt-2">
      <div className="flex items-center gap-2">
        <FireIcon className="text-primary" />
        <h3 className="font-semibold text-lg">My Positions</h3>
      </div>
      <Link
        href="/app/portfolio"
        className="text-base font-medium text-[#335CFF] hover:text-[#274FCC] bg-[#F5F8FF] px-6 py-2 rounded-full transition-colors"
      >
        See all
      </Link>
    </div>
  );

  if (loading) {
    return (
      <div className="w-full flex flex-col items-center justify-center rounded-2xl p-4 border border-[#E9EAEC] bg-white">
        {Header}
        <div className="text-blue-500 mt-4">Loading position...</div>
      </div>
    );
  }
  if (error) {
    return (
      <div className="w-full flex flex-col items-center justify-center rounded-2xl p-4 border border-[#E9EAEC] bg-white">
        {Header}
        <div className="text-red-500 mt-4">{error}</div>
      </div>
    );
  }
  if (!position || position === 0n) {
    // No open position
    return (
      <section className="w-full flex flex-col items-center justify-center rounded-2xl p-4 border border-[#E9EAEC] bg-white">
        {Header}
        {/* Illustration */}
        <div className="w-full bg-[#EEF4FF] rounded-3xl flex items-center justify-center pt-10 pb-8 px-4 mt-4">
          <Image
            src="/assets/img/illustrations/no-open-position.svg"
            alt="No open position"
            width={220}
            height={180}
          />
        </div>
        {/* Message */}
        <div className="w-full flex flex-col items-center justify-center px-6 pt-6 pb-0">
          <h3 className="font-extrabold text-xl text-[#181A20] text-center mb-2">
            You have no active positions
          </h3>
          <p className="text-center text-[#7D8FB3] text-base mb-6 max-w-xs">
            Pick a hype token and bet on its rise or collapse. Don&apos;t miss
            the action
          </p>
        </div>
        {/* CTA Button */}
        <div className="w-full bg-[#EEF4FF] rounded-b-[32px] flex items-center justify-center py-5 px-4">
          <Link href="/app/token" className="w-full">
            <button
              className="w-full rounded-full bg-transparent text-[#335CFF] text-lg font-bold py-3 transition-colors hover:underline focus:underline focus:outline-none"
              type="button"
            >
              Browse tokens
            </button>
          </Link>
        </div>
      </section>
    );
  }
  // If user has a position, display it (expand with more details as needed)
  return (
    <div className="w-full flex flex-col rounded-2xl p-4 border border-[#E9EAEC] bg-white">
      {Header}
      <div className="flex-1 w-full">
        <div className="text-[#181A20] font-bold text-lg mb-2">
          Position Size: {position.toString()}
        </div>
        {/* TODO: Add more details (entry price, PnL, etc.) by reading from contract or oracle */}
      </div>
    </div>
  );
};
