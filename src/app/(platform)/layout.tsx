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
  description: "Manage your resources and settings",
};

/**
 * Root layout for the platform section of the application
 * This wraps all platform pages with necessary providers and layout elements
 */
export default function PlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen ">
      <Header />
      {children}
    </div>
  );
}
