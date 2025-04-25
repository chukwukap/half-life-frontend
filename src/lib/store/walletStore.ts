import { create } from "zustand";
import { chainNames } from "@/lib/blockchain/config";

interface WalletState {
  // Connection state
  isConnected: boolean;
  address: string | undefined;
  chainId: number | undefined;

  // Derived data
  chainName: string | undefined;

  // Actions
  setConnectionStatus: (params: {
    isConnected: boolean;
    address?: string;
    chainId?: number;
  }) => void;

  disconnectWallet: () => void;
  openConnectModal: () => void;
}

/**
 * Wallet store using Zustand for state management
 */
export const useWalletStore = create<WalletState>((set, get) => ({
  // Initial state
  isConnected: false,
  address: undefined,
  chainId: undefined,
  chainName: undefined,

  // Set connection details
  setConnectionStatus: ({ isConnected, address, chainId }) => {
    set({
      isConnected,
      address,
      chainId,
      chainName: chainId ? chainNames[chainId] : undefined,
    });
  },

  // Disconnect wallet
  disconnectWallet: () => {
    // Reset connection state
    set({
      isConnected: false,
      address: undefined,
      chainId: undefined,
      chainName: undefined,
    });

    // TODO: Implement actual disconnection logic if needed
    // This will depend on how you're handling wallet connection
  },

  // Open connect modal
  openConnectModal: () => {
    if (typeof window !== "undefined") {
      // Access Web3Modal global object
      const w3mModal = (
        window as unknown as { w3mModal?: { open: () => void } }
      ).w3mModal;
      if (w3mModal) {
        w3mModal.open();
      }
    }
  },
}));
