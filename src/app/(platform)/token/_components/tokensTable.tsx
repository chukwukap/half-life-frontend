"use client";

import { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  TrendingUpIcon,
  TrendingDownIcon,
  SortIcon,
  ArrowUpRightIcon,
  ArrowDownRightIcon,
} from "@/components/icons";

// Token data interface
export interface TokenData {
  id: string;
  name: string;
  symbol: string;
  price: number;
  change24h: number;
  marketCap: string;
  volume: string;
  lifeIndex: number;
  logoUrl: string;
}

// Sample token data (matching the Figma design exactly)
const tokens: TokenData[] = [
  {
    id: "pepe",
    name: "PEPE",
    symbol: "Pepe",
    price: 0.00000923,
    change24h: 12.54,
    marketCap: "$390.00M",
    volume: "$125.00M",
    lifeIndex: 85.4,
    logoUrl: "/tokens/pepe.svg",
  },
  {
    id: "wif",
    name: "WIF",
    symbol: "dogwifhat",
    price: 0.0000204,
    change24h: -5.32,
    marketCap: "$210.00M",
    volume: "$87.00M",
    lifeIndex: 72.1,
    logoUrl: "/tokens/placeholder.svg",
  },
  {
    id: "floki",
    name: "FLOKI",
    symbol: "Floki Inu",
    price: 0.00000285,
    change24h: 3.47,
    marketCap: "$1.68B",
    volume: "$320.00M",
    lifeIndex: 68.7,
    logoUrl: "/tokens/floki.svg",
  },
  {
    id: "doge",
    name: "DOGE",
    symbol: "Dogecoin",
    price: 0.16,
    change24h: 1.25,
    marketCap: "$217.0B",
    volume: "$980.00M",
    lifeIndex: 91.2,
    logoUrl: "/tokens/doge.svg",
  },
  {
    id: "mog",
    name: "MOG",
    symbol: "MogCoin",
    price: 0.00000842,
    change24h: -10.64,
    marketCap: "$105.00M",
    volume: "$42.00M",
    lifeIndex: 45.8,
    logoUrl: "/tokens/placeholder.svg",
  },
  {
    id: "tama",
    name: "TAMA",
    symbol: "Tamadoge",
    price: 0.05,
    change24h: 8.9,
    marketCap: "$450.00M",
    volume: "$90.00M",
    lifeIndex: 67.3,
    logoUrl: "/tokens/placeholder.svg",
  },
  {
    id: "kishu",
    name: "KISHU",
    symbol: "Kishu Inu",
    price: 0.00000349,
    change24h: -0.75,
    marketCap: "$320.50M",
    volume: "$150.00M",
    lifeIndex: 82.8,
    logoUrl: "/tokens/placeholder.svg",
  },
  {
    id: "akita",
    name: "AKITA",
    symbol: "Akita Inu",
    price: 0.00000275,
    change24h: 15.22,
    marketCap: "$210B",
    volume: "$75.00M",
    lifeIndex: 79.5,
    logoUrl: "/tokens/placeholder.svg",
  },
  {
    id: "husky",
    name: "HUSKY",
    symbol: "Husky",
    price: 0.00000012,
    change24h: 7.8,
    marketCap: "$30.25B",
    volume: "$300.00M",
    lifeIndex: 90.0,
    logoUrl: "/tokens/placeholder.svg",
  },
  {
    id: "shiba",
    name: "SHIBBY",
    symbol: "Shibby Coin",
    price: 0.32,
    change24h: -4.15,
    marketCap: "$175.00M",
    volume: "$500.00M",
    lifeIndex: 54.6,
    logoUrl: "/tokens/placeholder.svg",
  },
  {
    id: "pug",
    name: "PUG",
    symbol: "Pug Coin",
    price: 0.75,
    change24h: 2.58,
    marketCap: "$890.00M",
    volume: "$200.00M",
    lifeIndex: 62.4,
    logoUrl: "/tokens/placeholder.svg",
  },
];

interface TokenRowProps {
  token: TokenData;
}

const formatPrice = (price: number): string => {
  if (price < 0.0001) {
    return price.toFixed(8);
  } else if (price < 1) {
    return price.toFixed(8);
  } else {
    return price.toFixed(2);
  }
};

const TokenRow: FC<TokenRowProps> = ({ token }) => {
  return (
    <tr className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors cursor-pointer">
      <td className="py-4 px-3">
        <Link href={`/token/${token.id}`} className="flex items-center gap-3">
          <div className="relative w-8 h-8 rounded-full overflow-hidden bg-gray-100">
            <Image
              src={token.logoUrl}
              alt={token.name}
              width={32}
              height={32}
              className="object-cover"
              unoptimized
            />
          </div>
          <div>
            <div className="font-semibold text-sm">{token.name}</div>
            <div className="text-xs text-gray-500">{token.symbol}</div>
          </div>
        </Link>
      </td>
      <td className="py-4 px-3">
        <div className="font-medium text-sm">${formatPrice(token.price)}</div>
      </td>
      <td className="py-4 px-3">
        <div
          className={`inline-flex items-center justify-center py-1 px-2 rounded-full ${
            token.change24h >= 0 ? "bg-green-100" : "bg-red-100"
          }`}
        >
          <div
            className={`flex items-center ${
              token.change24h >= 0 ? "text-green-600" : "text-red-600"
            } text-sm font-medium`}
          >
            {token.change24h >= 0 ? (
              <TrendingUpIcon className="h-3.5 w-3.5 mr-1" />
            ) : (
              <TrendingDownIcon className="h-3.5 w-3.5 mr-1" />
            )}
            <span>{Math.abs(token.change24h).toFixed(2)}%</span>
          </div>
        </div>
      </td>
      <td className="py-4 px-3">
        <div className="font-medium text-sm">{token.marketCap}</div>
      </td>
      <td className="py-4 px-3">
        <div className="font-medium text-sm">{token.volume}</div>
      </td>
      <td className="py-4 px-3">
        <div
          className={`inline-flex items-center justify-center py-1 px-2 rounded-full ${
            token.lifeIndex >= 80
              ? "bg-green-100 text-green-600"
              : token.lifeIndex >= 60
              ? "bg-yellow-100 text-yellow-600"
              : "bg-red-100 text-red-600"
          } text-sm font-medium`}
        >
          {token.lifeIndex.toFixed(1)}
        </div>
      </td>
      <td className="py-4 px-3">
        <div className="flex gap-2">
          <button className="bg-green-100 hover:bg-green-200 text-green-600 px-4 py-1.5 rounded-full text-xs font-medium transition-colors flex items-center gap-1">
            <ArrowUpRightIcon className="w-3.5 h-3.5" />
            Long
          </button>
          <button className="bg-red-100 hover:bg-red-200 text-red-600 px-4 py-1.5 rounded-full text-xs font-medium transition-colors flex items-center gap-1">
            <ArrowDownRightIcon className="w-3.5 h-3.5" />
            Short
          </button>
        </div>
      </td>
    </tr>
  );
};

interface TableHeaderProps {
  label: string;
  sortable?: boolean;
  sortKey?: string;
  currentSort?: string;
  sortDirection?: "asc" | "desc";
  onSort?: (key: string) => void;
}

const TableHeader: FC<TableHeaderProps> = ({
  label,
  sortable = false,
  sortKey,
  currentSort,
  sortDirection = "asc",
  onSort,
}) => {
  const isSorted = sortKey && currentSort === sortKey;

  return (
    <th className="text-left font-medium text-gray-500 py-3 px-3 text-sm">
      <button
        className={`flex items-center ${
          sortable ? "cursor-pointer hover:text-gray-700" : ""
        }`}
        onClick={() => sortable && sortKey && onSort && onSort(sortKey)}
        disabled={!sortable}
      >
        {label}
        {sortable && (
          <SortIcon
            className={`ml-1 h-4 w-4 ${
              isSorted ? "text-gray-900" : "text-gray-400"
            }`}
          />
        )}
      </button>
    </th>
  );
};

export const TokensTable: FC = () => {
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: "asc" | "desc";
  }>({ key: "marketCap", direction: "desc" });

  const handleSort = (key: string) => {
    setSortConfig((current) => ({
      key,
      direction:
        current.key === key && current.direction === "asc" ? "desc" : "asc",
    }));
  };

  const sortedTokens = [...tokens].sort((a, b) => {
    const aValue = a[sortConfig.key as keyof TokenData];
    const bValue = b[sortConfig.key as keyof TokenData];

    if (typeof aValue === "number" && typeof bValue === "number") {
      return sortConfig.direction === "asc" ? aValue - bValue : bValue - aValue;
    }

    if (typeof aValue === "string" && typeof bValue === "string") {
      return sortConfig.direction === "asc"
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }

    return 0;
  });

  return (
    <div className="w-full overflow-x-auto rounded-xl border border-gray-200 bg-white">
      <table className="w-full min-w-[1000px] table-auto">
        <thead>
          <tr className="border-b border-gray-100">
            <TableHeader label="Token" sortable={false} />
            <TableHeader
              label="Price"
              sortable
              sortKey="price"
              currentSort={sortConfig.key}
              sortDirection={sortConfig.direction}
              onSort={handleSort}
            />
            <TableHeader
              label="24h%"
              sortable
              sortKey="change24h"
              currentSort={sortConfig.key}
              sortDirection={sortConfig.direction}
              onSort={handleSort}
            />
            <TableHeader
              label="Market Cap"
              sortable
              sortKey="marketCap"
              currentSort={sortConfig.key}
              sortDirection={sortConfig.direction}
              onSort={handleSort}
            />
            <TableHeader
              label="Volume (24h)"
              sortable
              sortKey="volume"
              currentSort={sortConfig.key}
              sortDirection={sortConfig.direction}
              onSort={handleSort}
            />
            <TableHeader
              label="Life Index"
              sortable
              sortKey="lifeIndex"
              currentSort={sortConfig.key}
              sortDirection={sortConfig.direction}
              onSort={handleSort}
            />
            <TableHeader label="Actions" sortable={false} />
          </tr>
        </thead>
        <tbody>
          {sortedTokens.map((token) => (
            <TokenRow key={token.id} token={token} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TokensTable;
