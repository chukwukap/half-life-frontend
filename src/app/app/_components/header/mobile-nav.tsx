"use client";

import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavItems } from "./nav-items";
import { Logo } from "../../../_components/logo";

export const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger
        className="lg:hidden mr-4 focus:outline-none"
        aria-label="Open Menu"
      >
        <Menu className="h-5 w-5" />
      </SheetTrigger>
      <SheetContent side="left" className="w-[80%] max-w-[300px] p-6">
        <div className="flex flex-col gap-8">
          <Logo />
          <NavItems isMobile />
        </div>
      </SheetContent>
    </Sheet>
  );
};
