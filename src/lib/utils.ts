import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines multiple class names using clsx and tailwind-merge
 * @param inputs - Class names to be combined
 * @returns Combined and normalized class names string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Shortens an Ethereum address for display
 * @param address - The full Ethereum address
 * @param startLength - Number of characters to keep at the start (default: 6)
 * @param endLength - Number of characters to keep at the end (default: 4)
 * @returns Shortened address with ellipsis in the middle
 */
export function shortenAddress(
  address: string,
  startLength = 6,
  endLength = 4
): string {
  if (!address) return "";

  // If address is too short, return it as is
  if (address.length <= startLength + endLength) {
    return address;
  }

  // Check if it's a valid Ethereum address format (0x...)
  if (address.startsWith("0x")) {
    return `${address.slice(0, startLength)}...${address.slice(-endLength)}`;
  }

  // For non-Ethereum address format
  return `${address.slice(0, startLength)}...${address.slice(-endLength)}`;
}
