"use client";

import { FC } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface TokenCardProps {
  name: string;
  symbol: string;
  price: number;
  change24h: number;
  imageUrl: string;
  onClick?: () => void;
}

export const TokenCard: FC<TokenCardProps> = ({
  name,
  symbol,
  price,
  change24h,
  imageUrl,
  onClick,
}) => {
  // Format price with commas and 2 decimal places
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);

  // Determine text color based on price change
  const changeColor = change24h >= 0 ? "text-green-500" : "text-red-500";
  const changePrefix = change24h >= 0 ? "+" : "";

  return (
    <div
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center mb-4">
        <div className="relative w-12 h-12 mr-4">
          <Image
            src={imageUrl}
            alt={`${name} logo`}
            fill
            className="rounded-full object-cover"
          />
        </div>
        <div>
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{symbol}</p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-lg font-bold">{formattedPrice}</p>
          <p className={`text-sm ${changeColor}`}>
            {changePrefix}
            {change24h.toFixed(2)}%
          </p>
        </div>
        <Button variant="outline" size="sm">
          View Details
        </Button>
      </div>
    </div>
  );
};
