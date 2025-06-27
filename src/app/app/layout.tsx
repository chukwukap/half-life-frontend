import { Metadata } from "next";
import { Header } from "./_components/header";
import { Toaster } from "sonner";
import AppProviders from "@/components/providers/appProviders";
import { PrivyProviderWrapper } from "@/components/privyProvider";
import OnboardingManager from "@/components/onboardingManager";

/**
 * Metadata for the platform section of the application
 */
export const metadata: Metadata = {
  title: {
    default: "Half Life - Platform",
    template: "%s | Half Life",
  },
  description: "The next generation blockchain platform.",
};

/**
 * Layout for the platform section of the application
 */
export default function PlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PrivyProviderWrapper>
      <AppProviders>
        <OnboardingManager>
          <div className="flex min-h-screen flex-col">
            <div className="flex-1 flex flex-col">
              <Header />
              <main className="flex-1 w-full py-6">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                  <Toaster position="top-center" richColors />
                  {children}
                </div>
              </main>
            </div>
          </div>
        </OnboardingManager>
      </AppProviders>
    </PrivyProviderWrapper>
  );
}
