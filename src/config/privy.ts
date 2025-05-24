import { PrivyClientConfig } from "@privy-io/react-auth";
import { base, baseSepolia } from "viem/chains";

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
  defaultChain: base, // Use viem/chains for defaultChain
  supportedChains: [base, baseSepolia], // Use viem/chains for supportedChains
};
