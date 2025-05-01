/**
 * Token information interface representing token data in the platform
 */
export interface TokenData {
  id: string;
  fullName: string;
  symbol: string;
  price: number;
  change24h: number;
  marketCap: string;
  lifeIndex: number;
  lifeIndexPercent: number;
  iconSrc?: string;
  iconColor?: string;

  // Additional fields from token detail
  openTraders: number;
  funding: string;
  countdown: string;
  leverage: number;
  available: string;
  positionValue: string;
  volume24h: string;
  socialScore: string;
  communityScore: string;
  vitalityScore: number;
}
