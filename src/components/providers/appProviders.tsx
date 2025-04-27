"use client";

import { ReactNode } from "react";
import BlockchainProvider from "@/lib/blockchain/provider";
import ThemeProvider from "./themeProvider";
// import WalletProvider from "./walletProvider";

interface AppProvidersProps {
  children: ReactNode;
}

/**
 * AppProviders component
 * Provides all application-wide context providers in the correct order
 */
export default function AppProviders({ children }: AppProvidersProps) {
  return (
    <ThemeProvider>
      <BlockchainProvider>
        {/* <WalletProvider> */}
        {children}
        {/* </WalletProvider> */}
      </BlockchainProvider>
    </ThemeProvider>
  );
}
