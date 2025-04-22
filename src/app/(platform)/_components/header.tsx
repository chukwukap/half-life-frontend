"use client";

import { Logo } from "./logo";
import { MobileNav } from "./mobile-nav";
import { NavItems } from "./nav-items";
import { UserNav } from "./user-nav";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <MobileNav />
        <div className="flex items-center gap-6 md:gap-10">
          <Logo />
          <NavItems className="hidden lg:flex" />
        </div>
        <div className="ml-auto flex items-center">
          <UserNav />
        </div>
      </div>
    </header>
  );
};
