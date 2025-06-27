import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    default: "Half Life - Trade Options Better",
    template: "%s | Half Life",
  },
  description:
    "High-performance DeFi options trading powered by UmbraSwap liquidity.",
};

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="h-16 flex items-center justify-between px-6 border-b bg-background/95 font-primary sticky top-0 z-50">
        <Link href="/" className="text-xl font-bold">
          Half&nbsp;Life
        </Link>
        <nav className="hidden sm:flex items-center gap-8 text-sm">
          <Link
            href="#tokens-die"
            className="hover:text-primary transition-colors"
          >
            Problem
          </Link>
          <Link
            href="#how-it-works"
            className="hover:text-primary transition-colors"
          >
            How it works
          </Link>
          <Link
            href="#why-halflife"
            className="hover:text-primary transition-colors"
          >
            Why Halflife?
          </Link>
          <Link
            href="#join-alpha"
            className="hover:text-primary transition-colors"
          >
            Join Alpha
          </Link>
          <Link
            href="/app"
            className="ml-4 bg-primary text-white px-5 py-2 rounded-full hover:bg-primary/90 transition-colors"
          >
            Launch App
          </Link>
        </nav>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t p-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Half Life. All rights reserved.
      </footer>
    </div>
  );
}
