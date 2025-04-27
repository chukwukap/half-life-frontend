import { ReactNode, useEffect } from "react";
import { WagmiProvider } from "wagmi";
import { QueryClientProvider } from "@tanstack/react-query";
import { config, queryClient, initWeb3Modal } from "./config";

interface BlockchainProviderProps {
  children: ReactNode;
}

export default function BlockchainProvider({
  children,
}: BlockchainProviderProps) {
  // Initialize Web3Modal on client side only
  useEffect(() => {
    initWeb3Modal();
  }, []);

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
