import { Abi, getContract } from "viem";
import { useViemClients } from "@/lib/viemClient";
import marginVaultAbi from "@/lib/abis/MarginVault.json";
import oracleAdapterAbi from "@/lib/abis/OracleAdapter.json";
import uniswapV4HookAbi from "@/lib/abis/UniswapV4Hook.json";
import mockUSDCAbi from "@/lib/abis/MockUSDC.json";
import {
  marginVaultAddress,
  oracleAdapterAddress,
  uniswapV4HookAddress,
  mockUSDCAddress,
} from "@/lib/addresses";

// Margin Vault contract hook
export function useMarginVault() {
  const { publicClient, walletClient, address } = useViemClients();
  const contract = getContract({
    address: marginVaultAddress,
    abi: marginVaultAbi as Abi,
    client: publicClient,
  });
  // Read margin for a user
  const readMargin = async (user?: string) => {
    if (!publicClient) throw new Error("Public client not available");
    return await publicClient.readContract({
      address: marginVaultAddress,
      abi: marginVaultAbi as Abi,
      functionName: "margin",
      args: [user ?? address],
    });
  };
  // Deposit collateral (requires wallet)
  const deposit = async (token: string, amount: bigint) => {
    if (!walletClient) throw new Error("Wallet not connected");
    if (!walletClient.account) throw new Error("Wallet account not available");
    return await walletClient.writeContract({
      address: marginVaultAddress,
      abi: marginVaultAbi as Abi,
      functionName: "deposit",
      args: [token, amount],
      account: walletClient.account,
      chain: undefined,
    });
  };
  // Withdraw collateral (requires wallet)
  const withdraw = async (token: string, amount: bigint) => {
    if (!walletClient) throw new Error("Wallet not connected");
    if (!walletClient.account) throw new Error("Wallet account not available");
    return await walletClient.writeContract({
      address: marginVaultAddress,
      abi: marginVaultAbi as Abi,
      functionName: "withdraw",
      args: [token, amount],
      account: walletClient.account,
      chain: undefined,
    });
  };
  return { contract, readMargin, deposit, withdraw };
}

// Oracle Adapter contract hook
export function useOracleAdapter() {
  const { publicClient, walletClient } = useViemClients();
  const contract = getContract({
    address: oracleAdapterAddress,
    abi: oracleAdapterAbi as Abi,
    client: publicClient,
  });
  // Read latest TLI
  const readLatestTLI = async () => {
    if (!publicClient) throw new Error("Public client not available");
    return await publicClient.readContract({
      address: oracleAdapterAddress,
      abi: oracleAdapterAbi as Abi,
      functionName: "latestTLI",
      args: [],
    });
  };
  // Admin: update TLI (requires wallet)
  const updateTLI = async (tli: bigint) => {
    if (!walletClient) throw new Error("Wallet not connected");
    if (!walletClient.account) throw new Error("Wallet account not available");
    return await walletClient.writeContract({
      address: oracleAdapterAddress,
      abi: oracleAdapterAbi as Abi,
      functionName: "updateTLI",
      args: [tli],
      account: walletClient.account,
      chain: undefined,
    });
  };
  return { contract, readLatestTLI, updateTLI };
}

// Uniswap V4 Hook contract hook
export function useUniswapV4Hook() {
  const { publicClient, walletClient, address } = useViemClients();
  const contract = getContract({
    address: uniswapV4HookAddress,
    abi: uniswapV4HookAbi as Abi,
    client: publicClient,
  });
  // Read global funding rate
  const readGlobalFundingRate = async () => {
    if (!publicClient) throw new Error("Public client not available");
    return await publicClient.readContract({
      address: uniswapV4HookAddress,
      abi: uniswapV4HookAbi as Abi,
      functionName: "globalFundingRate",
      args: [],
    });
  };
  // Read user position
  const readUserPosition = async (user?: string) => {
    if (!publicClient) throw new Error("Public client not available");
    return await publicClient.readContract({
      address: uniswapV4HookAddress,
      abi: uniswapV4HookAbi as Abi,
      functionName: "userPosition",
      args: [user ?? address],
    });
  };
  // Read if user is liquidated
  const isUserLiquidated = async (user?: string) => {
    if (!publicClient) throw new Error("Public client not available");
    return await publicClient.readContract({
      address: uniswapV4HookAddress,
      abi: uniswapV4HookAbi as Abi,
      functionName: "isLiquidated",
      args: [user ?? address],
    });
  };
  // Place order (open position)
  const placeOrder = async ({
    amount,
    leverage,
    direction,
  }: {
    amount: bigint;
    leverage: number;
    direction: "long" | "short";
  }) => {
    if (!walletClient) throw new Error("Wallet not connected");
    if (!walletClient.account) throw new Error("Wallet account not available");
    // For demo, call a swap or beforeSwap (replace with actual method if needed)
    // This is a placeholder: you may need to call a router or pool manager contract in production
    // Here, we just call a dummy function for illustration
    // TODO: Replace with actual contract call logic
    throw new Error("placeOrder not implemented: wire to actual contract call");
  };
  return {
    contract,
    readGlobalFundingRate,
    readUserPosition,
    isUserLiquidated,
    placeOrder,
  };
}

// Mock USDC contract hook (if needed)
export function useMockUSDC() {
  const { publicClient, walletClient, address } = useViemClients();
  const contract = getContract({
    address: mockUSDCAddress,
    abi: mockUSDCAbi as Abi,
    client: publicClient,
  });
  // Read balance
  const readBalanceOf = async (user?: string) => {
    if (!publicClient) throw new Error("Public client not available");
    return await publicClient.readContract({
      address: mockUSDCAddress,
      abi: contract.abi,
      functionName: "balanceOf",
      args: [user ?? address],
    });
  };
  // Mint (if allowed)
  const mint = async (to: string, amount: bigint) => {
    if (!walletClient) throw new Error("Wallet not connected");
    if (!walletClient.account) throw new Error("Wallet account not available");
    return await walletClient.writeContract({
      address: mockUSDCAddress,
      abi: contract.abi,
      functionName: "mint",
      args: [to, amount],
      account: walletClient.account,
      chain: undefined,
    });
  };
  // Approve
  const approve = async (spender: string, amount: bigint) => {
    if (!walletClient) throw new Error("Wallet not connected");
    if (!walletClient.account) throw new Error("Wallet account not available");
    return await walletClient.writeContract({
      address: mockUSDCAddress,
      abi: contract.abi,
      functionName: "approve",
      args: [spender, amount],
      account: walletClient.account,
      chain: undefined,
    });
  };
  // Transfer
  const transfer = async (to: string, amount: bigint) => {
    if (!walletClient) throw new Error("Wallet not connected");
    if (!walletClient.account) throw new Error("Wallet account not available");
    return await walletClient.writeContract({
      address: mockUSDCAddress,
      abi: contract.abi,
      functionName: "transfer",
      args: [to, amount],
      account: walletClient.account,
      chain: undefined,
    });
  };
  return { contract, readBalanceOf, mint, approve, transfer };
}
