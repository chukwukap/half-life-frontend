import { Abi, getContract } from "viem";
import { useViemClients } from "@/lib/viemClient";
// import { CONTRACTS } from "@/lib/contracts"; // Uncomment when contracts.ts is available

// Placeholder CONTRACTS object for demonstration (replace with actual import)
const CONTRACTS = {
  marginVault: {
    address: "0xYourMarginVaultAddress" as `0x${string}`,
    abi: [] as Abi, // Replace with actual ABI
  },
  oracleAdapter: {
    address: "0xYourOracleAdapterAddress" as `0x${string}`,
    abi: [] as Abi,
  },
  uniswapV4Hook: {
    address: "0xYourUniswapV4HookAddress" as `0x${string}`,
    abi: [] as Abi,
  },
  mockUSDC: {
    address: "0xYourMockUSDCAddress" as `0x${string}`,
    abi: [] as Abi,
  },
};

// Margin Vault
export function useMarginVault() {
  const { publicClient, walletClient } = useViemClients();
  const contract = getContract({
    address: CONTRACTS.marginVault.address,
    abi: CONTRACTS.marginVault.abi as Abi,
    client: publicClient,
  });
  const readMargin = async (user: string) => {
    if (!publicClient) throw new Error("Public client not available");
    return await publicClient.readContract({
      address: CONTRACTS.marginVault.address,
      abi: CONTRACTS.marginVault.abi as Abi,
      functionName: "margin",
      args: [user],
    });
  };
  const deposit = async (token: string, amount: bigint) => {
    if (!walletClient) throw new Error("Wallet not connected");
    if (!walletClient.account) throw new Error("Wallet account not available");
    return await walletClient.writeContract({
      address: CONTRACTS.marginVault.address,
      abi: CONTRACTS.marginVault.abi as Abi,
      functionName: "deposit",
      args: [token, amount],
      account: walletClient.account,
      chain: undefined,
    });
  };
  return { contract, readMargin, deposit };
}

// Oracle Adapter
export function useOracleAdapter() {
  const { publicClient, walletClient } = useViemClients();
  const contract = getContract({
    address: CONTRACTS.oracleAdapter.address,
    abi: CONTRACTS.oracleAdapter.abi as Abi,
    client: publicClient,
  });
  const readLatestTLI = async () => {
    if (!publicClient) throw new Error("Public client not available");
    return await publicClient.readContract({
      address: CONTRACTS.oracleAdapter.address,
      abi: CONTRACTS.oracleAdapter.abi as Abi,
      functionName: "latestTLI",
      args: [],
    });
  };
  // Example write: updateTLI (admin only)
  const updateTLI = async (tli: bigint) => {
    if (!walletClient) throw new Error("Wallet not connected");
    if (!walletClient.account) throw new Error("Wallet account not available");
    return await walletClient.writeContract({
      address: CONTRACTS.oracleAdapter.address,
      abi: CONTRACTS.oracleAdapter.abi as Abi,
      functionName: "updateTLI",
      args: [tli],
      account: walletClient.account,
      chain: undefined,
    });
  };
  return { contract, readLatestTLI, updateTLI };
}

// Uniswap V4 Hook
export function useUniswapV4Hook() {
  const { publicClient } = useViemClients();
  const contract = getContract({
    address: CONTRACTS.uniswapV4Hook.address,
    abi: CONTRACTS.uniswapV4Hook.abi as Abi,
    client: publicClient,
  });
  // Example: read globalFundingRate
  const readGlobalFundingRate = async () => {
    if (!publicClient) throw new Error("Public client not available");
    return await publicClient.readContract({
      address: CONTRACTS.uniswapV4Hook.address,
      abi: CONTRACTS.uniswapV4Hook.abi as Abi,
      functionName: "globalFundingRate",
      args: [],
    });
  };
  return { contract, readGlobalFundingRate };
}

// Mock USDC
export function useMockUSDC() {
  const { publicClient, walletClient } = useViemClients();
  const contract = getContract({
    address: CONTRACTS.mockUSDC.address,
    abi: CONTRACTS.mockUSDC.abi as Abi,
    client: publicClient,
  });
  // Example: read balanceOf
  const readBalanceOf = async (user: string) => {
    if (!publicClient) throw new Error("Public client not available");
    return await publicClient.readContract({
      address: CONTRACTS.mockUSDC.address,
      abi: CONTRACTS.mockUSDC.abi as Abi,
      functionName: "balanceOf",
      args: [user],
    });
  };
  // Example: mint (if allowed)
  const mint = async (to: string, amount: bigint) => {
    if (!walletClient) throw new Error("Wallet not connected");
    if (!walletClient.account) throw new Error("Wallet account not available");
    return await walletClient.writeContract({
      address: CONTRACTS.mockUSDC.address,
      abi: CONTRACTS.mockUSDC.abi as Abi,
      functionName: "mint",
      args: [to, amount],
      account: walletClient.account,
      chain: undefined,
    });
  };
  return { contract, readBalanceOf, mint };
}
