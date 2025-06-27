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
      <header className="h-20 bg-background/95 font-primary sticky top-0 z-50 border-b border-border/20">
        <div className="container mx-auto px-6 flex items-center justify-between relative">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-bold whitespace-nowrap"
          >
            <span className="text-primary">λ</span>
            <span className="text-foreground">halflife</span>
          </Link>

          {/* Centered nav */}
          <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center text-sm font-medium text-muted-foreground/90 whitespace-nowrap">
            <Link
              href="#about"
              className="px-4 hover:text-primary transition-colors"
            >
              About
            </Link>
            <span className="opacity-40 select-none">·</span>
            <Link
              href="#features"
              className="px-4 hover:text-primary transition-colors"
            >
              Features
            </Link>
            <span className="opacity-40 select-none">·</span>
            <Link
              href="#how-it-works"
              className="px-4 hover:text-primary transition-colors"
            >
              How it works
            </Link>
          </nav>

          {/* CTA */}
          <Link
            href="#join-alpha"
            className="hidden lg:inline-flex bg-primary text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Get Early Access
          </Link>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t p-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Half Life. All rights reserved.
      </footer>
    </div>
  );
}
