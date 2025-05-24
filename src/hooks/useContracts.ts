import { Abi, getContract, readContract, writeContract } from "viem";
import { useViemClients } from "@/lib/viemClient";
import { CONTRACTS } from "@/lib/contracts";

// Example: useMarginVault hook for interacting with the margin vault contract
export function useMarginVault() {
  const { publicClient, walletClient } = useViemClients();
  const contract = getContract({
    address: CONTRACTS.marginVault.address,
    abi: CONTRACTS.marginVault.abi as Abi,
    client: publicClient,
  });

  // Read margin for a user
  const readMargin = async (user: string) => {
    return await readContract(publicClient, {
      address: CONTRACTS.marginVault.address,
      abi: CONTRACTS.marginVault.abi as Abi,
      functionName: "margin",
      args: [user],
    });
  };

  // Deposit collateral (requires wallet)
  const deposit = async (token: string, amount: bigint) => {
    if (!walletClient) throw new Error("Wallet not connected");
    return await writeContract(walletClient, {
      address: CONTRACTS.marginVault.address,
      abi: CONTRACTS.marginVault.abi as Abi,
      functionName: "deposit",
      args: [token, amount],
      account: walletClient.account,
    });
  };

  return { contract, readMargin, deposit };
}

// Add similar hooks for OracleAdapter, UniswapV4Hook, MockUSDC as needed
