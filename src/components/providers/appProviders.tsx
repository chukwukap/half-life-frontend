"use client";

import { ReactNode } from "react";

interface AppProvidersProps {
  children: ReactNode;
}

/**
 * AppProviders component
 * Provides all application-wide context providers in the correct order
 */
export default function AppProviders({ children }: AppProvidersProps) {
  return <>{children}</>;
}
