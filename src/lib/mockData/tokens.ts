// Mock token data for Half-Life platform
// This file provides realistic token data for the application

import { TokenData } from "@/lib/types";
/**
 * Comprehensive mock token data including popular cryptocurrencies
 * Images sourced from public crypto logo repositories
 */

/**
 * Mock token data for Base L2 ecosystem (as of 2025)
 * All tokens listed are native or prominent on Base L2.
 * Data is based on public sources and may be slightly adjusted for mock/demo purposes.
 * Security Note: No sensitive or private data is included.
 */

export const mockTokens: TokenData[] = [
  {
    id: "coinbase-btc",
    symbol: "CBTC",
    fullName: "Coinbase Wrapped Staked BTC",
    price: 102_000,
    change24h: 1.45,
    marketCap: "$8,000,000",
    volume24h: "$600,000",
    lifeIndex: 60,
    lifeIndexPercent: 60,
    iconColor: "bg-pink-100",
    iconSrc: "/assets/img/tokens/cbBTC.png",
    openTraders: 2000,
    funding: "0.011%",
    countdown: "01:30:00",
    leverage: 7,
    available: "$40,000",
    positionValue: "$38,000",
    socialScore: "62",
    communityScore: "65",
    vitalityScore: 61,
  },
  {
    id: "zora",
    symbol: "ZORA",
    fullName: "Zora",
    price: 0.0128,
    change24h: 1.45,
    marketCap: "$35,000,000",
    volume24h: "$1,000,000",
    lifeIndex: 60,
    lifeIndexPercent: 60,
    iconColor: "bg-pink-100",
    iconSrc: "/assets/img/tokens/zora.png",
    openTraders: 2000,
    funding: "0.011%",
    countdown: "01:30:00",
    leverage: 7,
    available: "$40,000",
    positionValue: "$38,000",
    socialScore: "62",
    communityScore: "65",
    vitalityScore: 61,
  },
  {
    id: "eth-base",
    symbol: "ETH",
    fullName: "Ethereum (Base)",
    price: 3120.45,
    change24h: 1.12,
    marketCap: "$12,500,000,000",
    volume24h: "$1,200,000,000",
    lifeIndex: 92,
    lifeIndexPercent: 92,
    iconColor: "bg-blue-100",
    iconSrc: "/assets/img/tokens/eth.png",
    openTraders: 10200,
    funding: "0.018%",
    countdown: "12:00:00",
    leverage: 20,
    available: "$1,000,000",
    positionValue: "$950,000",
    socialScore: "91",
    communityScore: "89",
    vitalityScore: 95,
  },

  {
    id: "aero",
    symbol: "AERO",
    fullName: "Aerodrome Finance",
    price: 0.225,
    change24h: 2.14,
    marketCap: "$120,000,000",
    volume24h: "$7,500,000",
    lifeIndex: 78,
    lifeIndexPercent: 78,
    iconColor: "bg-cyan-100",
    iconSrc: "/assets/img/tokens/aero.png",
    openTraders: 3200,
    funding: "0.021%",
    countdown: "09:00:00",
    leverage: 15,
    available: "$250,000",
    positionValue: "$230,000",
    socialScore: "75",
    communityScore: "77",
    vitalityScore: 80,
  },
  {
    id: "degen",
    symbol: "DEGEN",
    fullName: "Degen",
    price: 0.0123,
    change24h: 4.32,
    marketCap: "$180,000,000",
    volume24h: "$12,000,000",
    lifeIndex: 83,
    lifeIndexPercent: 83,
    iconColor: "bg-blue-200",
    iconSrc: "/assets/img/tokens/degen.png",
    openTraders: 5100,
    funding: "0.025%",
    countdown: "08:15:00",
    leverage: 18,
    available: "$350,000",
    positionValue: "$320,000",
    socialScore: "88",
    communityScore: "90",
    vitalityScore: 85,
  },
  {
    id: "alien-base",
    symbol: "ALB",
    fullName: "ALIEN",
    price: 0.1359,
    change24h: -1.25,
    marketCap: "$190,000,000",
    volume24h: "$9,800,000",
    lifeIndex: 80,
    lifeIndexPercent: 80,
    iconColor: "bg-yellow-100",
    iconSrc: "/assets/img/tokens/alien.png",
    openTraders: 4700,
    funding: "0.017%",
    countdown: "07:30:00",
    leverage: 12,
    available: "$300,000",
    positionValue: "$270,000",
    socialScore: "93",
    communityScore: "95",
    vitalityScore: 82,
  },
  {
    id: "toshitoken",
    symbol: "TOSHI",
    fullName: "Toshi",
    price: 0.00045,
    change24h: 3.21,
    marketCap: "$180,000,000",
    volume24h: "$15,000,000",
    lifeIndex: 77,
    lifeIndexPercent: 77,
    iconColor: "bg-yellow-200",
    iconSrc: "/assets/img/tokens/toshi.png",
    openTraders: 6200,
    funding: "0.022%",
    countdown: "06:45:00",
    leverage: 25,
    available: "$220,000",
    positionValue: "$200,000",
    socialScore: "95",
    communityScore: "97",
    vitalityScore: 79,
  },
  {
    id: "bald",
    symbol: "BALD",
    fullName: "BALD",
    price: 0.000012,
    change24h: 5.12,
    marketCap: "$60,000,000",
    volume24h: "$2,100,000",
    lifeIndex: 70,
    lifeIndexPercent: 70,
    iconColor: "bg-orange-100",
    iconSrc: "/assets/img/tokens/bald.png",
    openTraders: 2100,
    funding: "0.028%",
    countdown: "05:15:00",
    leverage: 30,
    available: "$120,000",
    positionValue: "$110,000",
    socialScore: "78",
    communityScore: "80",
    vitalityScore: 72,
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
      const aChangeValue = a.change24h;
      const bChangeValue = b.change24h;
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
