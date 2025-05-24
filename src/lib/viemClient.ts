import { usePrivy } from "@privy-io/react-auth";
import {
  createPublicClient,
  createWalletClient,
  http,
  custom,
  PublicClient,
  WalletClient,
} from "viem";
import { privyConfig } from "@/config/privy";
import { useMemo } from "react";

// Utility hook to get viem clients (public and wallet) using Privy
export function useViemClients() {
  const { ready, wallet } = usePrivy();
  // Use the first supported chain as default (Base mainnet or Base Sepolia)
  const defaultChain = privyConfig.defaultChain;

  // Public client for read-only operations
  const publicClient: PublicClient = useMemo(
    () =>
      createPublicClient({
        chain: defaultChain,
        transport: http(defaultChain.rpcUrls.default.http[0]),
      }),
    [defaultChain]
  );

  // Wallet client for write operations (if Privy wallet is connected)
  const walletClient: WalletClient | null = useMemo(() => {
    if (wallet?.ethereum) {
      return createWalletClient({
        chain: defaultChain,
        transport: custom(wallet.ethereum),
      });
    }
    return null;
  }, [wallet, defaultChain]);

  return { publicClient, walletClient, ready };
}
