import type { Metadata } from "next";
import "./globals.css";
import { fontClasses } from "@/lib/fonts";

export const metadata: Metadata = {
  title: {
    default: "Half Life",
    template: "%s | Half Life",
  },
  description: "Your crypto portfolio and social platform",
  icons: {
    icon: "/favicon.ico",
  },
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
        {children}
      </body>
    </html>
  );
}
