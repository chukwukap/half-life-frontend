import { createConfig, http } from "wagmi";
import {
  mainnet,
  sepolia,
  optimism,
  arbitrum,
  avalanche,
  polygon,
  base,
} from "wagmi/chains";
import { createWeb3Modal } from "@web3modal/wagmi";
import { QueryClient } from "@tanstack/react-query";

// Define ThemeVariables type to match web3modal expectations
interface ThemeVariables {
  "--w3m-accent"?: string;
  "--w3m-background"?: string;
  "--w3m-text-medium"?: string;
  "--w3m-border-radius-master"?: string;
  // Add other theme variables as needed
  [key: string]: string | undefined;
}

// Supported chains for the application
export const supportedChains = [
  mainnet,
  sepolia,
  optimism,
  arbitrum,
  avalanche,
  polygon,
  base,
] as const;

// Chain names mapping for UI display
export const chainNames: Record<number, string> = {
  [mainnet.id]: "Ethereum",
  [sepolia.id]: "Sepolia",
  [optimism.id]: "Optimism",
  [arbitrum.id]: "Arbitrum",
  [avalanche.id]: "Avalanche",
  [polygon.id]: "Polygon",
  [base.id]: "Base",
};

// Define RPC URLs (could be moved to environment variables for production)
export const rpcUrls = {
  [mainnet.id]:
    process.env.NEXT_PUBLIC_ETHEREUM_RPC_URL || "https://eth.llamarpc.com",
  [sepolia.id]:
    process.env.NEXT_PUBLIC_SEPOLIA_RPC_URL ||
    "https://ethereum-sepolia.publicnode.com",
  [optimism.id]:
    process.env.NEXT_PUBLIC_OPTIMISM_RPC_URL || "https://optimism.llamarpc.com",
  [arbitrum.id]:
    process.env.NEXT_PUBLIC_ARBITRUM_RPC_URL || "https://arbitrum.llamarpc.com",
  [avalanche.id]:
    process.env.NEXT_PUBLIC_AVALANCHE_RPC_URL ||
    "https://avalanche-c-chain.publicnode.com",
  [polygon.id]:
    process.env.NEXT_PUBLIC_POLYGON_RPC_URL || "https://polygon.llamarpc.com",
  [base.id]:
    process.env.NEXT_PUBLIC_BASE_RPC_URL || "https://base.llamarpc.com",
};

// Create transport objects for each chain
export const transports = {
  [mainnet.id]: http(rpcUrls[mainnet.id]),
  [sepolia.id]: http(rpcUrls[sepolia.id]),
  [optimism.id]: http(rpcUrls[optimism.id]),
  [arbitrum.id]: http(rpcUrls[arbitrum.id]),
  [avalanche.id]: http(rpcUrls[avalanche.id]),
  [polygon.id]: http(rpcUrls[polygon.id]),
  [base.id]: http(rpcUrls[base.id]),
};

// WalletConnect project ID (should be stored in environment variables)
export const walletConnectProjectId =
  process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || "";

// Default chain for initial connection
export const defaultChain = mainnet;

// Create the wagmi config
export const config = createConfig({
  chains: supportedChains,
  transports,
});

// Create the react-query client
export const queryClient = new QueryClient();

// Store the Web3Modal instance
let web3ModalInstance: ReturnType<typeof createWeb3Modal> | null = null;

// Initialize Web3Modal
export const initWeb3Modal = () => {
  if (typeof window !== "undefined" && !web3ModalInstance) {
    web3ModalInstance = createWeb3Modal({
      wagmiConfig: config,
      projectId: walletConnectProjectId,
      defaultChain: mainnet,
      themeMode: "light",
      themeVariables: {
        "--w3m-accent": "#3B82F6", // Blue
        "--w3m-background": "#3B82F6",
        "--w3m-text-medium": "#6B7280",
        "--w3m-border-radius-master": "0.5rem",
      } as ThemeVariables,
    });

    // Make web3Modal accessible globally for debugging and direct access if needed
    if (typeof window !== "undefined") {
      // Extend the Window interface to include our custom property
      if (!("w3mModal" in window)) {
        Object.defineProperty(window, "w3mModal", {
          value: web3ModalInstance,
          writable: true,
        });
      }
    }

    return web3ModalInstance;
  }

  return web3ModalInstance;
};

/**
 * Sets the theme for Web3Modal
 * @param themeMode 'light' or 'dark'
 */
export const setWeb3ModalTheme = (themeMode: "light" | "dark") => {
  if (typeof window !== "undefined") {
    if (!web3ModalInstance) {
      // Initialize if not already done
      web3ModalInstance = initWeb3Modal();
    }

    if (web3ModalInstance) {
      web3ModalInstance.setThemeMode(themeMode);

      // Set additional theme variables if needed
      const themeVariables: ThemeVariables = {
        "--w3m-accent-color": themeMode === "dark" ? "#3694FF" : "#0047AB",
        "--w3m-background-color": themeMode === "dark" ? "#1a1b1f" : "#ffffff",
        "--w3m-text-color": themeMode === "dark" ? "#ffffff" : "#424242",
      };

      try {
        web3ModalInstance.setThemeVariables(themeVariables);
      } catch (error) {
        console.error("Failed to set Web3Modal theme variables:", error);
      }
    }
  }
};

/**
 * Gets the Web3Modal instance if initialized
 */
export const getWeb3ModalInstance = () => {
  return web3ModalInstance;
};

// Export current RPC endpoints for direct usage
export const rpcEndpoints = {
  [mainnet.id]: rpcUrls[mainnet.id],
  [sepolia.id]: rpcUrls[sepolia.id],
  [optimism.id]: rpcUrls[optimism.id],
  [arbitrum.id]: rpcUrls[arbitrum.id],
  [avalanche.id]: rpcUrls[avalanche.id],
  [polygon.id]: rpcUrls[polygon.id],
  [base.id]: rpcUrls[base.id],
};

export default web3ModalInstance;
