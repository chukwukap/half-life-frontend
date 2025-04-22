import { Metadata } from "next";
import { Header } from "./_components/header";
/**
 * Metadata for the platform section of the application
 */
export const metadata: Metadata = {
  title: {
    default: "Platform | Half Life",
    template: "%s | Half Life",
  },
  description: "Manage your crypto portfolio and track market trends",
};

/**
 * Root layout for the platform section of the application
 * This wraps all platform pages with necessary layout elements
 */
export default function PlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 w-full py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
      </main>
    </div>
  );
}
