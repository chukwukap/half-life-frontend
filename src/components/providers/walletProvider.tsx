"use client";

import { ReactNode, useEffect } from "react";
import { useAccount, useDisconnect } from "wagmi";
import { useWalletStore } from "@/lib/store/walletStore";

interface WalletProviderProps {
  children: ReactNode;
}

/**
 * WalletProvider component
 * Syncs Wagmi state with our Zustand wallet store
 */
export default function WalletProvider({ children }: WalletProviderProps) {
  const { address, isConnected, chainId } = useAccount();
  const { disconnect } = useDisconnect();
  const { setConnectionStatus, disconnectWallet } = useWalletStore();

  // Sync Wagmi state with our store
  useEffect(() => {
    setConnectionStatus({
      isConnected,
      address,
      chainId: chainId as number | undefined,
    });
  }, [isConnected, address, chainId, setConnectionStatus]);

  // Set up disconnect function to use Wagmi's disconnect
  useEffect(() => {
    const originalDisconnect = disconnectWallet;

    // Extend the store's disconnect function with Wagmi's disconnect
    useWalletStore.setState({
      disconnectWallet: () => {
        // Call the original disconnectWallet to reset state
        originalDisconnect();
        // Call Wagmi's disconnect
        disconnect();
      },
    });

    // Cleanup
    return () => {
      useWalletStore.setState({ disconnectWallet: originalDisconnect });
    };
  }, [disconnect, disconnectWallet]);

  return <>{children}</>;
}
