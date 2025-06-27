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
      <header className="py-6 bg-background/95 font-primary sticky top-0 z-50 border-b border-border/20">
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
          <nav className="hidden lg:block absolute left-1/2 -translate-x-1/2">
            <ul className="flex space-x-10 text-sm font-medium text-muted-foreground/80">
              {[
                { id: "about", label: "About" },
                { id: "features", label: "Features" },
                { id: "how-it-works", label: "How it works" },
              ].map((item) => (
                <li
                  key={item.id}
                  className="relative first:pl-0 pl-6 before:absolute before:left-2 before:top-1/2 before:-translate-y-1/2 before:w-[3px] before:h-[3px] before:rounded-full before:bg-muted-foreground/40 first:before:hidden"
                >
                  <Link
                    href={`#${item.id}`}
                    className="hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
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
