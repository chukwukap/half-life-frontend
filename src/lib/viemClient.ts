import { useWallets } from "@privy-io/react-auth";
import {
  createPublicClient,
  createWalletClient,
  http,
  custom,
  PublicClient,
  WalletClient,
} from "viem";
import { privyConfig } from "@/config/privy";
import { useMemo, useState, useEffect } from "react";

// Utility hook to get viem clients (public and wallet) using Privy v2
export function useViemClients() {
  const { wallets, ready } = useWallets(); // Modern Privy API
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

  // Find the first EVM wallet (embedded or external)
  const evmWallet = useMemo(
    () =>
      wallets.find(
        (w) =>
          w.type === "ethereum" && typeof w.getEthereumProvider === "function"
      ),
    [wallets]
  );

  // Wallet client for write operations (async provider)
  const [walletClient, setWalletClient] = useState<WalletClient | null>(null);

  useEffect(() => {
    let isMounted = true;
    async function setupWalletClient() {
      if (evmWallet && defaultChain) {
        try {
          const provider = await evmWallet.getEthereumProvider();
          if (provider && isMounted) {
            setWalletClient(
              createWalletClient({
                chain: defaultChain,
                transport: custom(provider),
              })
            );
          }
        } catch (e) {
          setWalletClient(null);
        }
      } else {
        setWalletClient(null);
      }
    }
    setupWalletClient();
    return () => {
      isMounted = false;
    };
  }, [evmWallet, defaultChain]);

  // Optionally, expose the wallet address
  const address = evmWallet?.address as `0x${string}` | undefined;

  return { publicClient, walletClient, address, ready };
}
