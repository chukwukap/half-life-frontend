import "./globals.css";
import { fontClasses } from "@/lib/fonts";
import type { Metadata } from "next";
import AppProviders from "@/components/providers/appProviders";
import { PrivyProviderWrapper } from "@/components/privyProvider";
import OnboardingManager from "@/components/onboardingManager";

export const metadata: Metadata = {
  title: {
    default: "Half Life",
    template: "%s | Half Life",
  },
  description: "Next-generation blockchain platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontClasses.primary} ${fontClasses.secondary} ${fontClasses.heading} ${fontClasses.body} antialiased min-h-screen flex flex-col font-primary`}
      >
        <PrivyProviderWrapper>
          <AppProviders>
            <OnboardingManager>{children}</OnboardingManager>
          </AppProviders>
        </PrivyProviderWrapper>
      </body>
    </html>
  );
}
