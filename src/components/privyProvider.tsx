"use client";

import { PrivyProvider } from "@privy-io/react-auth";
import { privyConfig } from "@/config/privy";

interface PrivyProviderWrapperProps {
  children: React.ReactNode;
}

export function PrivyProviderWrapper({ children }: PrivyProviderWrapperProps) {
  return (
    <PrivyProvider
      appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID || ""}
      config={privyConfig}
    >
      {children}
    </PrivyProvider>
  );
}
