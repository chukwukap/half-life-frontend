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
import { TokenData } from "@/lib/types";
import * as tokenMocks from "@/lib/mockData/tokens";

interface TokenRowProps {
  token: TokenData;
}

const TokenRow: FC<TokenRowProps> = ({ token }) => {
  return (
    <tr className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors cursor-pointer">
      <td className="py-4 px-3">
        <Link href={`/token/${token.id}`} className="flex items-center gap-3">
          <div className="relative w-8 h-8 rounded-full overflow-hidden bg-gray-100">
            <Image
              src={token.iconSrc || ""}
              alt={token.fullName}
              width={32}
              height={32}
              className="object-cover"
              unoptimized
            />
          </div>
          <div>
            <div className="font-semibold text-sm">{token.fullName}</div>
            <div className="text-xs text-gray-500">{token.symbol}</div>
          </div>
        </Link>
      </td>
      <td className="py-4 px-3">
        <div className="font-medium text-sm">${token.price}</div>
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
        <div className="font-medium text-sm">{token.volume24h}</div>
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
  // sortDirection = "asc",
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

  const sortedTokens = [...tokenMocks.mockTokens].sort((a, b) => {
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
