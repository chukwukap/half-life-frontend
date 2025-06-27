"use client";

import { useState } from "react";
import { TokenCard } from "./tokenCard";
import { useRouter } from "next/navigation";

export interface Token {
  id: string;
  name: string;
  symbol: string;
  price: number;
  change24h: number;
  imageUrl: string;
}

// Mock data for demonstration
const mockTokens: Token[] = [
  {
    id: "bitcoin",
    name: "Bitcoin",
    symbol: "BTC",
    price: 47832.65,
    change24h: 2.34,
    imageUrl: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
  },
  {
    id: "ethereum",
    name: "Ethereum",
    symbol: "ETH",
    price: 3235.18,
    change24h: -1.27,
    imageUrl: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
  },
  {
    id: "cardano",
    name: "Cardano",
    symbol: "ADA",
    price: 0.45,
    change24h: 3.16,
    imageUrl: "https://cryptologos.cc/logos/cardano-ada-logo.png",
  },
  {
    id: "solana",
    name: "Solana",
    symbol: "SOL",
    price: 138.72,
    change24h: 5.89,
    imageUrl: "https://cryptologos.cc/logos/solana-sol-logo.png",
  },
];

export function TokenList() {
  const [tokens] = useState<Token[]>(mockTokens);
  const [selectedToken, setSelectedToken] = useState<Token | null>(null);
  const router = useRouter();

  const handleSelectToken = (token: Token) => {
    setSelectedToken(token);
    router.push(`/token/${token.id}`);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-6">Available Tokens</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tokens.map((token) => (
          <TokenCard
            key={token.id}
            token={token}
            onSelect={handleSelectToken}
            isSelected={selectedToken?.id === token.id}
          />
        ))}
      </div>
    </div>
  );
}
