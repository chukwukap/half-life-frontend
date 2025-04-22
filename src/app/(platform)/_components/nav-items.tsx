"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const routes = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Tokens",
    href: "/tokens",
  },
  {
    label: "Social",
    href: "/social",
  },
  {
    label: "Portfolio",
    href: "/portfolio",
  },
  {
    label: "Leaderboard",
    href: "/leaderboard",
  },
];

interface NavItemsProps {
  className?: string;
  isMobile?: boolean;
}

export const NavItems = ({ className, isMobile }: NavItemsProps) => {
  const pathname = usePathname();

  return (
    <nav className={cn("flex gap-6", className)}>
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm transition-colors hover:text-primary",
            pathname === route.href
              ? "text-primary font-medium"
              : "text-muted-foreground",
            isMobile && "text-base w-full p-3"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
};
