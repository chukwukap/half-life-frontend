"use client";

import { usePrivyAuth } from "@/hooks/usePrivyAuth";
import { useMarginVault } from "@/hooks/useContracts";
import { useState } from "react";

export default function Dashboard({ usdcAddress }: { usdcAddress: string }) {
  const { authenticated, user, handleLogin, handleLogout } = usePrivyAuth();
  const { readMargin, deposit } = useMarginVault();
  const [margin, setMargin] = useState<bigint | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch margin when authenticated
  const fetchMargin = async () => {
    if (!user?.wallet?.address) return;
    setLoading(true);
    setError(null);
    try {
      const m = await readMargin(user.wallet.address);
      // Ensure m is string or number before converting to BigInt
      const mValue = typeof m === "bigint" ? m : BigInt(m?.toString?.() ?? "0");
      setMargin(mValue);
    } catch (e) {
      setError("Failed to fetch margin");
    } finally {
      setLoading(false);
    }
  };

  // Example: deposit 1000 USDC (6 decimals)
  const handleDeposit = async () => {
    if (!usdcAddress) {
      setError("USDC address not set. Please provide the deployed address.");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      await deposit(usdcAddress, 1_000_000n); // 1000 USDC (6 decimals)
      await fetchMargin();
    } catch (e) {
      setError("Deposit failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      {!authenticated ? (
        <button onClick={handleLogin} className="btn btn-primary">
          Connect Wallet
        </button>
      ) : (
        <>
          <div>Welcome, {user?.wallet?.address}</div>
          <button onClick={handleLogout} className="btn btn-secondary">
            Logout
          </button>
          <div className="mt-4">
            <button onClick={fetchMargin} className="btn btn-info">
              Fetch Margin
            </button>
            {margin !== null && <div>Margin: {margin.toString()}</div>}
          </div>
          <div className="mt-4">
            <button
              onClick={handleDeposit}
              className="btn btn-success"
              disabled={loading}
            >
              Deposit 1000 USDC
            </button>
            {error && <div className="text-red-500">{error}</div>}
          </div>
        </>
      )}
    </div>
  );
}
