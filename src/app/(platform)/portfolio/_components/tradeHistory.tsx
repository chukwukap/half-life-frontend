"use client";

import { FC } from "react";

interface Trade {
  id: string;
  token: {
    name: string;
    ticker: string;
    logo: string;
  };
  openDate: string;
  openTime: string;
  type: "Long" | "Short";
  size: string;
  leverage: string;
  pnl: {
    value: string;
    percentage: string;
    isPositive: boolean;
  };
}

const TradeHistory: FC = () => {
  // Mock trade history data
  const trades: Trade[] = [
    {
      id: "1",
      token: {
        name: "Pepe",
        ticker: "PEPE",
        logo: "/tokens/pepe.png",
      },
      openDate: "2025-04-26",
      openTime: "15:22:40",
      type: "Long",
      size: "$102.98",
      leverage: "2x",
      pnl: {
        value: "+$245.35",
        percentage: "+24.53%",
        isPositive: true,
      },
    },
    {
      id: "2",
      token: {
        name: "dogwifhat",
        ticker: "WIF",
        logo: "/tokens/wif.png",
      },
      openDate: "2025-04-26",
      openTime: "15:22:40",
      type: "Long",
      size: "$2,101.00",
      leverage: "3x",
      pnl: {
        value: "+$178.62",
        percentage: "+11.91%",
        isPositive: true,
      },
    },
    {
      id: "3",
      token: {
        name: "Floki Inu",
        ticker: "FLOKI",
        logo: "/tokens/floki.png",
      },
      openDate: "2025-04-26",
      openTime: "15:22:40",
      type: "Long",
      size: "$90.00",
      leverage: "2x",
      pnl: {
        value: "-$38.70",
        percentage: "-4.84%",
        isPositive: false,
      },
    },
    {
      id: "4",
      token: {
        name: "Dogecoin",
        ticker: "DOGE",
        logo: "/tokens/doge.png",
      },
      openDate: "2025-04-26",
      openTime: "15:22:38",
      type: "Long",
      size: "$450.50",
      leverage: "5x",
      pnl: {
        value: "+$76.31",
        percentage: "+6.36%",
        isPositive: true,
      },
    },
    {
      id: "5",
      token: {
        name: "Mog Coin",
        ticker: "MOG",
        logo: "/tokens/mog.png",
      },
      openDate: "2025-04-26",
      openTime: "15:22:38",
      type: "Long",
      size: "$1,000.00",
      leverage: "2x",
      pnl: {
        value: "-$63.27",
        percentage: "-7.03%",
        isPositive: false,
      },
    },
    {
      id: "6",
      token: {
        name: "Tamadoge",
        ticker: "TAMA",
        logo: "/tokens/tama.png",
      },
      openDate: "2025-04-25",
      openTime: "19:50:59",
      type: "Long",
      size: "$375.75",
      leverage: "1x",
      pnl: {
        value: "+$312.45",
        percentage: "+20.78%",
        isPositive: true,
      },
    },
    {
      id: "7",
      token: {
        name: "Kishu Inu",
        ticker: "KISHU",
        logo: "/tokens/kishu.png",
      },
      openDate: "2025-04-25",
      openTime: "19:50:59",
      type: "Short",
      size: "$600.20",
      leverage: "3x",
      pnl: {
        value: "-$15.20",
        percentage: "-1.92%",
        isPositive: false,
      },
    },
    {
      id: "8",
      token: {
        name: "Akita Inu",
        ticker: "AKITA",
        logo: "/tokens/akita.png",
      },
      openDate: "2025-04-25",
      openTime: "19:50:59",
      type: "Short",
      size: "$1,250.00",
      leverage: "2x",
      pnl: {
        value: "+$203.89",
        percentage: "+15.12%",
        isPositive: true,
      },
    },
    {
      id: "9",
      token: {
        name: "Husky",
        ticker: "HUSKY",
        logo: "/tokens/husky.png",
      },
      openDate: "2025-04-25",
      openTime: "19:50:59",
      type: "Long",
      size: "$785.30",
      leverage: "5x",
      pnl: {
        value: "-$122.58",
        percentage: "-10.45%",
        isPositive: false,
      },
    },
    {
      id: "10",
      token: {
        name: "Shibby Coin",
        ticker: "SHIBBY",
        logo: "/tokens/shibby.png",
      },
      openDate: "2025-04-25",
      openTime: "19:50:59",
      type: "Short",
      size: "$3,200.00",
      leverage: "2x",
      pnl: {
        value: "+$54.10",
        percentage: "+5.21%",
        isPositive: true,
      },
    },
    {
      id: "11",
      token: {
        name: "Pug Coin",
        ticker: "PUG",
        logo: "/tokens/pug.png",
      },
      openDate: "2025-04-25",
      openTime: "19:50:59",
      type: "Long",
      size: "$150.00",
      leverage: "2x",
      pnl: {
        value: "-$90.15",
        percentage: "-8.36%",
        isPositive: false,
      },
    },
  ];

  return (
    <div className="bg-white rounded-[20px] overflow-hidden border border-[#E9EAEC]">
      {/* Trade History Table - Pixel-perfect, accessible, and modular */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px]">
          <thead>
            <tr className="text-left text-[#7D8FB3] text-sm bg-[#F5F8FF] font-semibold">
              <th className="py-4 px-8 font-semibold">Token</th>
              <th className="py-4 px-8 font-semibold">Open</th>
              <th className="py-4 px-8 font-semibold">Type</th>
              <th className="py-4 px-8 font-semibold">Size</th>
              <th className="py-4 px-8 font-semibold">Leverage</th>
              <th className="py-4 px-8 font-semibold">PnL</th>
              <th className="py-4 px-8 font-semibold"></th>
            </tr>
          </thead>
          <tbody>
            {trades.map((trade, idx) => (
              <tr
                key={trade.id}
                className={`transition-colors ${
                  idx !== 0 ? "border-t border-[#E9EAEC]" : ""
                } hover:bg-[#F5F8FF]`}
              >
                {/* Token cell: avatar, ticker, name */}
                <td className="py-4 px-8">
                  <div className="flex items-center">
                    <div className="w-8 h-8 mr-3 relative">
                      {trade.token.logo ? (
                        <img
                          src={trade.token.logo}
                          alt={trade.token.ticker}
                          className="w-8 h-8 rounded-full object-cover border border-[#E9EAEC]"
                        />
                      ) : (
                        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold text-[#0D1C59]">
                          {trade.token.ticker.substring(0, 1)}
                        </div>
                      )}
                    </div>
                    <div>
                      <div className="font-bold text-[#181A20] text-sm leading-tight">
                        {trade.token.ticker}
                      </div>
                      <div className="text-[#7D8FB3] text-xs leading-tight">
                        {trade.token.name}
                      </div>
                    </div>
                  </div>
                </td>
                {/* Open cell: date, time */}
                <td className="py-4 px-8">
                  <div className="font-bold text-[#181A20] text-sm leading-tight">
                    {trade.openDate}
                  </div>
                  <div className="text-[#7D8FB3] text-xs leading-tight">
                    {trade.openTime}
                  </div>
                </td>
                {/* Type cell: Long/Short pill */}
                <td className="py-4 px-8">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold select-none ${
                      trade.type === "Long"
                        ? "bg-[#E6FBF4] text-[#05CD99]"
                        : "bg-[#FEECEC] text-[#FF5A5A]"
                    }`}
                  >
                    {trade.type}
                  </span>
                </td>
                {/* Size cell */}
                <td className="py-4 px-8 text-[#181A20] text-sm font-bold">
                  {trade.size}
                </td>
                {/* Leverage cell */}
                <td className="py-4 px-8 text-[#181A20] text-sm font-bold">
                  {trade.leverage}
                </td>
                {/* PnL cell: value and percent, colored */}
                <td className="py-4 px-8">
                  <div
                    className={`text-sm font-bold leading-tight ${
                      trade.pnl.isPositive ? "text-[#05CD99]" : "text-[#FF5A5A]"
                    }`}
                  >
                    {trade.pnl.value}
                  </div>
                  <div
                    className={`text-xs font-medium leading-tight ${
                      trade.pnl.isPositive ? "text-[#05CD99]" : "text-[#FF5A5A]"
                    }`}
                  >
                    {trade.pnl.percentage}
                  </div>
                </td>
                {/* View button */}
                <td className="py-4 px-8">
                  <button
                    className="px-6 py-2 bg-[#F5F8FF] text-[#335CFF] text-sm font-bold rounded-full shadow-none hover:bg-[#E6EDFF] transition-colors focus:outline-none focus:ring-2 focus:ring-[#335CFF]"
                    aria-label={`View trade ${trade.token.ticker}`}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TradeHistory;
