"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Token } from "./tokenList";
import { cn } from "@/lib/utils";

interface TokenCardProps {
  token: Token;
  onSelect: (token: Token) => void;
  isSelected?: boolean;
}

export function TokenCard({
  token,
  onSelect,
  isSelected = false,
}: TokenCardProps) {
  return (
    <Card
      className={cn(
        "cursor-pointer transition-all duration-200 hover:shadow-md",
        isSelected ? "ring-2 ring-primary" : ""
      )}
      onClick={() => onSelect(token)}
    >
      <CardContent className="p-4">
        <div className="flex items-center gap-3">
          {token.imageUrl && (
            <div className="relative h-10 w-10 rounded-full overflow-hidden">
              <Image
                src={token.imageUrl}
                alt={token.name}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div className="flex-1">
            <h3 className="font-semibold">{token.name}</h3>
            <p className="text-sm text-muted-foreground">{token.symbol}</p>
          </div>
        </div>

        <div className="mt-3 pt-3 border-t grid grid-cols-2 gap-2">
          <div>
            <p className="text-xs text-muted-foreground">Price</p>
            <p className="font-medium">${token.price.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">24h</p>
            <p
              className={`font-medium ${
                token.change24h >= 0 ? "text-green-500" : "text-red-500"
              }`}
            >
              {token.change24h >= 0 ? "+" : ""}
              {token.change24h.toFixed(2)}%
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
