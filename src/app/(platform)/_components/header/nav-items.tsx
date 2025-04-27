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
    href: "/token",
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
    <nav
      className={cn(
        "flex items-center",
        isMobile ? "flex-col w-full space-y-2" : "space-x-1",
        className
      )}
    >
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "px-3 py-2 text-sm transition-colors hover:text-primary relative",
            pathname === route.href
              ? "text-primary font-medium after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-primary"
              : "text-muted-foreground",
            isMobile &&
              "text-base w-full p-3 hover:bg-accent rounded-md flex items-center justify-center"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
};
