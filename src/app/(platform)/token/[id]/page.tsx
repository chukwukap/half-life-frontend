"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Token } from "../_components/tokenList";

// Mock data for demonstration
const mockTokens: Record<string, Token> = {
  bitcoin: {
    id: "bitcoin",
    name: "Bitcoin",
    symbol: "BTC",
    price: 47832.65,
    change24h: 2.34,
    imageUrl: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
  },
  ethereum: {
    id: "ethereum",
    name: "Ethereum",
    symbol: "ETH",
    price: 3235.18,
    change24h: -1.27,
    imageUrl: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
  },
  cardano: {
    id: "cardano",
    name: "Cardano",
    symbol: "ADA",
    price: 0.45,
    change24h: 3.16,
    imageUrl: "https://cryptologos.cc/logos/cardano-ada-logo.png",
  },
  solana: {
    id: "solana",
    name: "Solana",
    symbol: "SOL",
    price: 138.72,
    change24h: 5.89,
    imageUrl: "https://cryptologos.cc/logos/solana-sol-logo.png",
  },
};

export default function TokenDetailPage() {
  const params = useParams();
  const tokenId = params.id as string;
  const [token, setToken] = useState<Token | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would be an API call
    const fetchToken = () => {
      setLoading(true);
      try {
        // Simulate API delay
        setTimeout(() => {
          const fetchedToken = mockTokens[tokenId];
          setToken(fetchedToken || null);
          setLoading(false);
        }, 500);
      } catch (error) {
        console.error("Failed to fetch token details:", error);
        setLoading(false);
      }
    };

    fetchToken();
  }, [tokenId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        Loading...
      </div>
    );
  }

  if (!token) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-2xl font-bold text-red-500">Token not found</h1>
        <p className="mt-2">The token you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <div className="flex items-center mb-6">
            <div className="relative w-16 h-16 mr-4">
              <Image
                src={token.imageUrl}
                alt={token.name}
                fill
                className="rounded-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold">{token.name}</h1>
              <p className="text-gray-500 dark:text-gray-400">{token.symbol}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h2 className="text-lg font-semibold mb-2">Price</h2>
              <p className="text-2xl font-bold">
                ${token.price.toLocaleString()}
              </p>
              <p
                className={`text-sm font-medium ${
                  token.change24h >= 0 ? "text-green-500" : "text-red-500"
                }`}
              >
                {token.change24h >= 0 ? "+" : ""}
                {token.change24h}% (24h)
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h2 className="text-lg font-semibold mb-2">Market Data</h2>
              <p className="text-sm">Market data will be displayed here</p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h2 className="text-lg font-semibold mb-2">About {token.name}</h2>
              <p className="text-sm">Description will be displayed here</p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h2 className="text-lg font-semibold mb-2">Links & Resources</h2>
              <ul className="space-y-1 text-sm">
                <li>
                  Website:{" "}
                  <a href="#" className="text-blue-500 hover:underline">
                    example.com
                  </a>
                </li>
                <li>
                  Explorer:{" "}
                  <a href="#" className="text-blue-500 hover:underline">
                    explorer.example.com
                  </a>
                </li>
                <li>
                  Forum:{" "}
                  <a href="#" className="text-blue-500 hover:underline">
                    forum.example.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
