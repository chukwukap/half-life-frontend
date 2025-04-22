"use client";

import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavItems } from "./nav-items";
import { Logo } from "./logo";

export const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden pr-4" aria-label="Open Menu">
        <Menu className="h-6 w-6" />
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] p-6">
        <div className="flex flex-col gap-8">
          <Logo />
          <NavItems isMobile />
        </div>
      </SheetContent>
    </Sheet>
  );
};
