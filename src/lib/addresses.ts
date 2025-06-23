export const marginVaultAddress =
  "0x09635F643e140090A9A8Dcd712eD6285858ceBef" as `0x${string}`;
export const oracleAdapterAddress =
  "0x7a2088a1bFc9d81c55368AE168C2C02570cB814F" as `0x${string}`;
export const uniswapV4HookAddress =
  "0xc5a5C42992dECbae36851359345FE25997F5C42d" as `0x${string}`;
export const mockUSDCAddress = "0xYourMockUSDCAddress" as `0x${string}`;

// Official Uniswap v4 deployments
export const UNISWAP_V4_ADDRESSES = {
  // NOTE: Uniswap v4 is not yet deployed on Avalanche at the time of writing.
  // These placeholders allow the dApp to compile; replace with real addresses
  // once official deployments (or equivalent routers) are live on Avalanche.
  avalanche: {
    poolManager: "0x0000000000000000000000000000000000000000",
    universalRouter: "0x0000000000000000000000000000000000000000",
    positionManager: "0x0000000000000000000000000000000000000000",
    quoter: "0x0000000000000000000000000000000000000000",
    permit2: "0x000000000022D473030F116dDEE9F6B43aC78BA3", // still valid across chains
  },
  avalancheFuji: {
    poolManager: "0x0000000000000000000000000000000000000000",
    universalRouter: "0x0000000000000000000000000000000000000000",
    positionManager: "0x0000000000000000000000000000000000000000",
    quoter: "0x0000000000000000000000000000000000000000",
    permit2: "0x000000000022D473030F116dDEE9F6B43aC78BA3",
  },
};

/**
 * Uniswap v4 pool address and pool key for the Half-Life protocol.
 * Update these after running the automated pool creation script.
 * Never hardcode private keys or sensitive data in this file.
 */
export const uniswapV4PoolAddress =
  "<PASTE_POOL_ADDRESS_HERE>" as `0x${string}`;
export const uniswapV4PoolKey = {
  token0: mockUSDCAddress, // or actual token0 address
  token1: "<PASTE_TOKEN1_ADDRESS_HERE>", // e.g., ZORALI
  fee: 500, // example: 0.05%
  tickSpacing: 60, // example value
  hook: uniswapV4HookAddress,
  poolManager: UNISWAP_V4_ADDRESSES.avalancheFuji.poolManager, // update when deployments are available
};
