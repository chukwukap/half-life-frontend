"use client";

import { Logo } from "./logo";
import { MobileNav } from "./mobile-nav";
import { NavItems } from "./nav-items";
import { UserNav } from "./user-nav";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 flex h-14 items-center justify-between">
        <div className="flex items-center">
          <div className="lg:hidden">
            <MobileNav />
          </div>
          <Logo />
        </div>
        <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2">
          <NavItems />
        </div>
        <div className="flex items-center">
          <UserNav />
        </div>
      </div>
    </header>
  );
};
