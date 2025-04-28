// Mock token data for Half-Life platform
// This file provides realistic token data for the application

import { TokenData } from "@/app/(platform)/_components/home/token-card";

/**
 * Comprehensive mock token data including popular cryptocurrencies
 * Images sourced from public crypto logo repositories
 */
export const mockTokens: TokenData[] = [
  {
    id: "bitcoin",
    name: "BTC",
    fullName: "Bitcoin",
    price: "$93,670.03",
    change: "+0.66%",
    lifeIndex: 92,
    lifeIndexPercent: 92,
    iconSrc: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
    iconColor: "bg-orange-100",
  },
  {
    id: "ethereum",
    name: "ETH",
    fullName: "Ethereum",
    price: "$1,788.93",
    change: "+0.34%",
    lifeIndex: 87,
    lifeIndexPercent: 87,
    iconSrc: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
    iconColor: "bg-blue-100",
  },
  {
    id: "solana",
    name: "SOL",
    fullName: "Solana",
    price: "$147.69",
    change: "+0.64%",
    lifeIndex: 83,
    lifeIndexPercent: 83,
    iconSrc: "https://cryptologos.cc/logos/solana-sol-logo.png",
    iconColor: "bg-purple-100",
  },
  {
    id: "dogecoin",
    name: "DOGE",
    fullName: "Dogecoin",
    price: "$0.1808",
    change: "+0.88%",
    lifeIndex: 76,
    lifeIndexPercent: 76,
    iconSrc: "https://cryptologos.cc/logos/dogecoin-doge-logo.png",
    iconColor: "bg-yellow-100",
  },
  {
    id: "cardano",
    name: "ADA",
    fullName: "Cardano",
    price: "$0.6954",
    change: "+2.02%",
    lifeIndex: 79,
    lifeIndexPercent: 79,
    iconSrc: "https://cryptologos.cc/logos/cardano-ada-logo.png",
    iconColor: "bg-blue-100",
  },
  {
    id: "chainlink",
    name: "LINK",
    fullName: "Chainlink",
    price: "$14.45",
    change: "+1.38%",
    lifeIndex: 85,
    lifeIndexPercent: 85,
    iconSrc: "https://cryptologos.cc/logos/chainlink-link-logo.png",
    iconColor: "bg-blue-100",
  },
  {
    id: "tron",
    name: "TRX",
    fullName: "TRON",
    price: "$0.2487",
    change: "+1.42%",
    lifeIndex: 69,
    lifeIndexPercent: 69,
    iconSrc: "https://cryptologos.cc/logos/tron-trx-logo.png",
    iconColor: "bg-red-100",
  },
  {
    id: "shiba-inu",
    name: "SHIB",
    fullName: "Shiba Inu",
    price: "$0.000021",
    change: "-0.75%",
    lifeIndex: 62,
    lifeIndexPercent: 62,
    iconSrc: "https://cryptologos.cc/logos/shiba-inu-shib-logo.png",
    iconColor: "bg-orange-100",
  },
  {
    id: "pepe",
    name: "PEPE",
    fullName: "Pepe",
    price: "$0.00000882",
    change: "-4.14%",
    lifeIndex: 48,
    lifeIndexPercent: 48,
    iconSrc: "https://cryptologos.cc/logos/pepe-pepe-logo.png",
    iconColor: "bg-green-100",
  },
  {
    id: "uniswap",
    name: "UNI",
    fullName: "Uniswap",
    price: "$5.64",
    change: "+0.92%",
    lifeIndex: 73,
    lifeIndexPercent: 73,
    iconSrc: "https://cryptologos.cc/logos/uniswap-uni-logo.png",
    iconColor: "bg-pink-100",
  },
  {
    id: "polkadot",
    name: "DOT",
    fullName: "Polkadot",
    price: "$4.09",
    change: "-1.20%",
    lifeIndex: 67,
    lifeIndexPercent: 67,
    iconSrc: "https://cryptologos.cc/logos/polkadot-new-dot-logo.png",
    iconColor: "bg-pink-100",
  },
  {
    id: "polygon",
    name: "POL",
    fullName: "Polygon",
    price: "$0.24",
    change: "+0.58%",
    lifeIndex: 72,
    lifeIndexPercent: 72,
    iconSrc: "https://cryptologos.cc/logos/polygon-matic-logo.png",
    iconColor: "bg-purple-100",
  },
  {
    id: "dogwifhat",
    name: "WIF",
    fullName: "Dogwifhat",
    price: "$0.61",
    change: "-2.33%",
    lifeIndex: 42,
    lifeIndexPercent: 42,
    iconSrc: "https://cryptologos.cc/logos/dogwifhat-wif-logo.png",
    iconColor: "bg-purple-100",
  },
  {
    id: "floki",
    name: "FLOKI",
    fullName: "Floki Inu",
    price: "$0.0000723",
    change: "+3.47%",
    lifeIndex: 46,
    lifeIndexPercent: 46,
    iconSrc: "https://cryptologos.cc/logos/floki-floki-logo.png",
    iconColor: "bg-yellow-100",
  },
  {
    id: "bonk",
    name: "BONK",
    fullName: "Bonk",
    price: "$0.0000122",
    change: "+5.21%",
    lifeIndex: 38,
    lifeIndexPercent: 38,
    iconSrc: "https://cryptologos.cc/logos/bonk-bonk-logo.png",
    iconColor: "bg-yellow-100",
  },
  {
    id: "leveth",
    name: "LEVETH",
    fullName: "levETH",
    price: "$42.80",
    change: "+12.33%",
    lifeIndex: 80,
    lifeIndexPercent: 80,
    iconSrc: "/assets/img/tokens/leveth.png", // Custom token for Half-Life platform
    iconColor: "bg-indigo-100",
  },
];

/**
 * Get trending tokens (tokens with high lifeIndex but also volatility)
 * @returns Array of trending tokens
 */
export const getTrendingTokens = () => {
  // Sort by a combination of lifeIndex and recent price change
  return mockTokens
    .slice()
    .sort((a, b) => {
      const aChangeValue = parseFloat(a.change.replace("%", ""));
      const bChangeValue = parseFloat(b.change.replace("%", ""));
      const aTrendScore = a.lifeIndex * Math.abs(aChangeValue);
      const bTrendScore = b.lifeIndex * Math.abs(bChangeValue);
      return bTrendScore - aTrendScore;
    })
    .slice(0, 5);
};

/**
 * Get top-performing tokens by lifeIndex
 * @returns Array of top tokens
 */
export const getTopTokens = () => {
  return mockTokens
    .slice()
    .sort((a, b) => b.lifeIndex - a.lifeIndex)
    .slice(0, 5);
};

/**
 * Get a token by its ID
 * @param id The token ID to find
 * @returns The token object or undefined if not found
 */
export const getTokenById = (id: string) => {
  return mockTokens.find((token) => token.id === id);
};

export default mockTokens;
