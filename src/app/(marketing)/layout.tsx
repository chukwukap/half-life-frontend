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
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <Link
            href="#features"
            className="hover:text-primary transition-colors"
          >
            Features
          </Link>
          <Link
            href="#security"
            className="hover:text-primary transition-colors"
          >
            Security
          </Link>
          <Link href="#faq" className="hover:text-primary transition-colors">
            FAQ
          </Link>
          <Link
            href="/app"
            className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
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
