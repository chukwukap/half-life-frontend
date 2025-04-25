"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useWalletStore } from "@/lib/store/walletStore";
import { shortenAddress } from "@/lib/utils";

export const UserNav = () => {
  const {
    isConnected,
    address,
    chainName,
    disconnectWallet,
    openConnectModal,
  } = useWalletStore();

  // Not connected state - show connect button
  if (!isConnected) {
    return (
      <Button variant="outline" onClick={openConnectModal}>
        Connect Wallet
      </Button>
    );
  }

  // Connected state - show user menu
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none">
        <Avatar className="h-8 w-8 border border-border">
          <AvatarImage src="/avatars/01.png" alt="User avatar" />
          <AvatarFallback>
            {address ? address.substring(2, 4).toUpperCase() : "HF"}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium">
              {shortenAddress(address || "")}
            </p>
            <p className="text-xs text-muted-foreground">
              {chainName || "Unknown Network"}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="text-destructive"
          onClick={disconnectWallet}
        >
          Disconnect
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
