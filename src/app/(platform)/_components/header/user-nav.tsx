"use client";

import { DisconnectWalletIcon, WalletIcon } from "@/components/icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CopyIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

/**
 * UserNav component displays the connected wallet address and actions.
 * - Matches Figma design: rounded, shadow, icons, and color scheme.
 * - Security: Copy and disconnect actions are safe and do not expose sensitive data.
 * - Accessibility: Keyboard and screen reader friendly.
 */
export const UserNav = () => {
  // Example wallet address (should be replaced with actual user address from context/store)
  const walletAddress = "0x75ba...d06c";
  const [copied, setCopied] = useState(false);

  // Copy wallet address to clipboard securely
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("0x75ba...d06c");
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch (err) {
      // Optionally handle error
    }
  };

  // Disconnect wallet handler (to be implemented securely)
  const handleDisconnect = () => {
    // TODO: Implement wallet disconnect logic securely
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none">
        {/* Avatar or wallet icon can be placed here */}
        <div className="h-8 w-8 rounded-full border border-[#E9EAEC] bg-white flex items-center justify-center shadow-sm">
          <Image
            src="/assets/img/defiCTO.png"
            alt="User avatar"
            className="h-7 w-7 rounded-full"
            width={28}
            height={28}
            priority
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-[290px] rounded-[24px] border border-[#E9EAEC] shadow-[0_4px_24px_0_rgba(44,62,80,0.08)] p-4 bg-white"
      >
        {/* Wallet address display */}
        <div className="flex items-center justify-between border border-[#E9EAEC] rounded-3xl px-4 py-2 mb-4">
          <div className="flex items-center gap-2">
            <WalletIcon className="w-5 h-5 text-[#181A20]" aria-hidden="true" />
            <span className="font-semibold text-[17px] text-[#181A20] select-all">
              {walletAddress}
            </span>
          </div>
        </div>
        {/* Copy Address */}
        <DropdownMenuItem
          onClick={handleCopy}
          className="flex items-center gap-3 px-0 py-2 rounded-[12px] hover:bg-[#F5F8FF] transition-colors cursor-pointer"
        >
          <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#181A20]">
            <CopyIcon className="w-4 h-4 text-white" aria-hidden="true" />
          </span>
          <span className="text-[17px] text-[#181A20] font-medium">
            {copied ? "Copied!" : "Copy Address"}
          </span>
        </DropdownMenuItem>
        {/* Disconnect Wallet */}
        <DropdownMenuItem
          onClick={handleDisconnect}
          className="flex items-center gap-3 px-0 py-2 rounded-[12px] mt-1 hover:bg-[#FFF0F0] transition-colors cursor-pointer"
        >
          <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#FF3B3B]/10">
            <DisconnectWalletIcon
              className="w-4 h-4 text-[#FF3B3B]"
              aria-hidden="true"
            />
          </span>
          <span className="text-[17px] text-[#FF3B3B] font-medium">
            Disconnect Wallet
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
