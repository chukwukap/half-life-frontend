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
import { usePrivyAuth } from "@/hooks/usePrivyAuth";
import type { LinkedAccountWithMetadata } from "@privy-io/react-auth";

/**
 * UserNav component displays the connected wallet address and actions using Privy authentication.
 * - Security: Copy and disconnect actions are safe and do not expose sensitive data.
 * - Accessibility: Keyboard and screen reader friendly, with ARIA attributes and focus management.
 * - UI/UX: Pixel-perfect, tooltip for copy, and ready for real data integration.
 * - Privy: Fetches wallet address and avatar from Privy user object, uses Privy logout for disconnect.
 */
export const UserNav = () => {
  const { user, handleLogout } = usePrivyAuth();
  const [copied, setCopied] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  // Get wallet address from Privy user object
  // Prefer user.wallet.address, fallback to first wallet in linkedAccounts
  const walletAddress =
    user?.wallet?.address ||
    (user?.linkedAccounts?.find(
      (acc: LinkedAccountWithMetadata) =>
        acc.type === "wallet" && "address" in acc
    )?.address ??
      "");

  // Get avatar from social accounts, fallback to default
  const avatarUrl =
    user?.twitter?.profilePictureUrl ||
    user?.farcaster?.pfp ||
    user?.telegram?.photoUrl ||
    "/assets/img/defiCTO.png";

  // Mask wallet address for UI display (e.g., 0x1234...abcd)
  const maskAddress = (address: string) =>
    address && address.length > 10
      ? `${address.slice(0, 6)}...${address.slice(-4)}`
      : address;

  // Copy wallet address to clipboard securely
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(walletAddress);
      setCopied(true);
      setShowTooltip(true);
      setTimeout(() => {
        setCopied(false);
        setShowTooltip(false);
      }, 1200);
    } catch (err) {
      // Optionally handle error
    }
  };

  // Keyboard accessibility: handle Enter/Space for copy
  const handleCopyKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleCopy();
    }
  };

  // Keyboard accessibility: handle Enter/Space for disconnect
  const handleDisconnectKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleLogout();
    }
  };

  // If no wallet address, do not render the menu
  if (!walletAddress) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="focus:outline-none"
        aria-label="Open user menu"
        tabIndex={0}
      >
        {/* Avatar or wallet icon can be placed here */}
        <div className="h-8 w-8 rounded-full border border-[#E9EAEC] bg-white flex items-center justify-center shadow-sm">
          <Image
            src={avatarUrl}
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
        aria-label="User menu"
        role="menu"
      >
        {/* Wallet address display (masked in UI, full in clipboard) */}
        <div className="flex items-center justify-between border border-[#E9EAEC] rounded-3xl px-4 py-2 mb-4">
          <div className="flex items-center gap-2">
            <WalletIcon className="w-5 h-5 text-[#181A20]" aria-hidden="true" />
            <span
              className="font-semibold text-[17px] text-[#181A20] select-all"
              aria-label="Wallet address"
            >
              {maskAddress(walletAddress)}
            </span>
          </div>
        </div>
        {/* Copy Address */}
        <DropdownMenuItem
          onClick={handleCopy}
          onKeyDown={handleCopyKeyDown}
          className="flex items-center gap-3 px-0 py-2 rounded-[12px] hover:bg-[#F5F8FF] transition-colors cursor-pointer focus:ring-2 focus:ring-[#335CFF] focus:outline-none"
          tabIndex={0}
          aria-label="Copy wallet address"
          role="menuitem"
          data-testid="copy-address"
        >
          <span className="relative flex items-center justify-center w-7 h-7 rounded-full bg-[#181A20]">
            <CopyIcon className="w-4 h-4 text-white" aria-hidden="true" />
            {/* Tooltip for copy action */}
            {showTooltip && (
              <span className="absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-[#181A20] text-white text-xs rounded px-2 py-1 shadow z-10 whitespace-nowrap">
                {copied ? "Copied!" : "Copy Address"}
              </span>
            )}
          </span>
          <span className="text-[17px] text-[#181A20] font-medium">
            {copied ? "Copied!" : "Copy Address"}
          </span>
        </DropdownMenuItem>
        {/* Disconnect Wallet */}
        <DropdownMenuItem
          onClick={handleLogout}
          onKeyDown={handleDisconnectKeyDown}
          className="flex items-center gap-3 px-0 py-2 rounded-[12px] mt-1 hover:bg-[#FFF0F0] transition-colors cursor-pointer focus:ring-2 focus:ring-[#FF3B3B] focus:outline-none"
          tabIndex={0}
          aria-label="Disconnect wallet"
          role="menuitem"
          data-testid="disconnect-wallet"
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
