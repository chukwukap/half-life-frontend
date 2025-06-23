This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Uniswap v4 Pool Integration

After running the backend pool creation script, update the following in `src/lib/addresses.ts`:

```
export const uniswapV4PoolAddress = "<PASTE_POOL_ADDRESS_HERE>" as `0x${string}`;
export const uniswapV4PoolKey = {
  token0: mockUSDCAddress, // or actual token0 address
  token1: "<PASTE_TOKEN1_ADDRESS_HERE>", // e.g., ZORALI
  fee: 500, // example: 0.05%
  tickSpacing: 60, // example value
  hook: uniswapV4HookAddress,
  poolManager: UNISWAP_V4_ADDRESSES.avalancheFuji.poolManager, // or .avalanche for mainnet
};
```

**Security Note:** Never commit private keys or sensitive data. Only use public addresses and config.

This enables the frontend to interact with the correct Uniswap v4 pool for trading and position display.
