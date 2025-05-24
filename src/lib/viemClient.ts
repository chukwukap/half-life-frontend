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
  const { ready, wallets } = usePrivy();
  // Use the first supported chain as default (Base mainnet or Base Sepolia)
  const defaultChain = privyConfig.defaultChain;

  // Public client for read-only operations
  const publicClient: PublicClient = useMemo(
    () =>
      createPublicClient({
        chain: defaultChain,
        transport: http(defaultChain?.rpcUrls.default.http[0] ?? ""),
      }),
    [defaultChain]
  );

  // Wallet client for write operations (if Privy wallet is connected)
  const walletClient: WalletClient | null = useMemo(() => {
    const provider = wallets?.[0]?.getEthereumProvider?.();
    if (provider) {
      return createWalletClient({
        chain: defaultChain,
        transport: custom(provider),
      });
    }
    return null;
  }, [wallets, defaultChain]);

  return { publicClient, walletClient, ready };
}
