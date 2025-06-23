// Mock token data for Half-Life platform
// This file provides realistic token data for the application

import { TokenData } from "@/lib/types";
/**
 * Comprehensive mock token data including popular cryptocurrencies
 * Images sourced from public crypto logo repositories
 */

/**
 * Mock token data for Avalanche C-Chain ecosystem
 * All tokens listed are native or prominent on Avalanche.
 * Data is based on public sources and may be slightly adjusted for mock/demo purposes.
 * Security Note: No sensitive or private data is included.
 */

export const mockTokens: TokenData[] = [
  {
    id: "avax",
    symbol: "AVAX",
    fullName: "Avalanche",
    price: 39.75,
    change24h: 2.15,
    marketCap: "$14,000,000,000",
    volume24h: "$650,000,000",
    lifeIndex: 92,
    lifeIndexPercent: 92,
    iconColor: "bg-red-100",
    iconSrc: "/assets/img/tokens/avax.png",
    openTraders: 10200,
    funding: "0.018%",
    countdown: "12:00:00",
    leverage: 20,
    available: "$1,200,000",
    positionValue: "$1,050,000",
    socialScore: "91",
    communityScore: "89",
    vitalityScore: 95,
  },
  {
    id: "joe",
    symbol: "JOE",
    fullName: "Trader Joe",
    price: 0.45,
    change24h: 3.22,
    marketCap: "$150,000,000",
    volume24h: "$12,500,000",
    lifeIndex: 78,
    lifeIndexPercent: 78,
    iconColor: "bg-yellow-100",
    iconSrc: "/assets/img/tokens/joe.png",
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
    id: "png",
    symbol: "PNG",
    fullName: "Pangolin",
    price: 0.28,
    change24h: 1.64,
    marketCap: "$120,000,000",
    volume24h: "$7,100,000",
    lifeIndex: 72,
    lifeIndexPercent: 72,
    iconColor: "bg-green-100",
    iconSrc: "/assets/img/tokens/png.png",
    openTraders: 4100,
    funding: "0.020%",
    countdown: "08:30:00",
    leverage: 12,
    available: "$280,000",
    positionValue: "$260,000",
    socialScore: "79",
    communityScore: "81",
    vitalityScore: 78,
  },
  {
    id: "qi",
    symbol: "QI",
    fullName: "BENQI",
    price: 0.028,
    change24h: 4.12,
    marketCap: "$200,000,000",
    volume24h: "$15,000,000",
    lifeIndex: 68,
    lifeIndexPercent: 68,
    iconColor: "bg-blue-100",
    iconSrc: "/assets/img/tokens/qi.png",
    openTraders: 5100,
    funding: "0.025%",
    countdown: "07:50:00",
    leverage: 18,
    available: "$320,000",
    positionValue: "$300,000",
    socialScore: "88",
    communityScore: "90",
    vitalityScore: 83,
  },
  {
    id: "time",
    symbol: "TIME",
    fullName: "Wonderland Time",
    price: 102.4,
    change24h: -1.25,
    marketCap: "$190,000,000",
    volume24h: "$9,800,000",
    lifeIndex: 80,
    lifeIndexPercent: 80,
    iconColor: "bg-purple-100",
    iconSrc: "/assets/img/tokens/time.png",
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
    id: "snow",
    symbol: "SNOW",
    fullName: "Snowball",
    price: 0.0052,
    change24h: 2.78,
    marketCap: "$65,000,000",
    volume24h: "$3,200,000",
    lifeIndex: 64,
    lifeIndexPercent: 64,
    iconColor: "bg-cyan-100",
    iconSrc: "/assets/img/tokens/snow.png",
    openTraders: 2600,
    funding: "0.019%",
    countdown: "06:10:00",
    leverage: 25,
    available: "$180,000",
    positionValue: "$165,000",
    socialScore: "80",
    communityScore: "82",
    vitalityScore: 75,
  },
  {
    id: "lyd",
    symbol: "LYD",
    fullName: "Lydia Finance",
    price: 0.0045,
    change24h: 5.12,
    marketCap: "$58,000,000",
    volume24h: "$2,100,000",
    lifeIndex: 60,
    lifeIndexPercent: 60,
    iconColor: "bg-orange-100",
    iconSrc: "/assets/img/tokens/lyd.png",
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
