import "./globals.css";
import { fontClasses } from "@/lib/fonts";
import type { Metadata } from "next";
import AppProviders from "@/components/providers/appProviders";

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
        className={`${fontClasses.inter} ${fontClasses.roboto} antialiased min-h-screen flex flex-col`}
      >
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
