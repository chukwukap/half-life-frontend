import { PrivyClientConfig } from "@privy-io/react-auth";
import { Chain } from "viem";

/**
 * Ethereum Mainnet chain configuration.
 * Using the Chain object as required by PrivyClientConfig for type safety.
 */
const baseMainnet: Chain = {
  id: 8453,
  name: "Base",
  rpcUrls: {
    default: {
      http: ["https://base.drpc.org"],
      webSocket: ["wss://base.drpc.org"],
    },
    public: {
      http: ["https://base.drpc.org"],
      webSocket: ["wss://base.drpc.org"],
    },
  },
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
  },
  blockExplorers: {
    default: {
      name: "Base Explorer",
      url: "https://basescan.org",
    },
    public: {
      name: "Base Explorer",
      url: "https://basescan.org",
    },
  },
};

/**
 * Base Sepolia testnet chain configuration.
 * This object is ready for use in supportedChains or as defaultChain.
 * Security: All required fields are provided for type safety and correct chain interaction.
 */
const baseSepolia: Chain = {
  id: 84532,
  name: "Base Sepolia",
  rpcUrls: {
    default: {
      http: ["https://base-sepolia.drpc.org"],
      webSocket: ["wss://base-sepolia.drpc.org"],
    },
    public: {
      http: ["https://base-sepolia.drpc.org"],
      webSocket: ["wss://base-sepolia.drpc.org"],
    },
  },
  nativeCurrency: {
    name: "Sepolia Ether",
    symbol: "ETH",
    decimals: 18,
  },
  blockExplorers: {
    default: {
      name: "Base Sepolia Explorer",
      url: "https://sepolia.basescan.org",
    },
    public: {
      name: "Base Sepolia Explorer",
      url: "https://sepolia.basescan.org",
    },
  },
};

/**
 * Privy configuration object.
 * Ensures type safety and security by using Chain objects for chain configuration.
 */
export const privyConfig: PrivyClientConfig = {
  appearance: {
    theme: "light",
    accentColor: "#335CFF",
    showWalletLoginFirst: true,
  },
  loginMethods: ["email", "wallet"],
  embeddedWallets: {
    createOnLogin: "all-users",
    // Removed 'noPromptOnSignature' as it is not a valid property in the current PrivyClientConfig type.
  },
  defaultChain: baseMainnet, // Securely use Chain object for defaultChain
  supportedChains: [baseMainnet, baseSepolia], // Add more Chain objects as needed for multi-chain support
};
