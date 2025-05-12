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
    <div className="bg-white rounded-[20px] overflow-hidden shadow-sm border border-gray-100">
      {/* Trade History header */}
      <div className="p-8 border-b border-gray-100">
        <div className="flex items-center">
          <svg
            className="h-5 w-5 text-[#335CFF] mr-2"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 3V21H21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7 14L11 10L15 14L21 8"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h2 className="text-[#335CFF] font-semibold text-base tracking-tight">
            Trade History
          </h2>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-[#7D8FB3] text-xs bg-[#F5F8FF]">
              <th className="py-3 px-8 font-semibold">Token</th>
              <th className="py-3 px-8 font-semibold">Open</th>
              <th className="py-3 px-8 font-semibold">Type</th>
              <th className="py-3 px-8 font-semibold">Size</th>
              <th className="py-3 px-8 font-semibold">Leverage</th>
              <th className="py-3 px-8 font-semibold">PnL</th>
              <th className="py-3 px-8 font-semibold"></th>
            </tr>
          </thead>
          <tbody>
            {trades.map((trade) => (
              <tr
                key={trade.id}
                className="border-t border-gray-100 hover:bg-[#F5F8FF] transition-colors"
              >
                <td className="py-4 px-8">
                  <div className="flex items-center">
                    <div className="w-8 h-8 mr-3 relative">
                      {/* Token logo or fallback */}
                      {trade.token.logo ? (
                        <img
                          src={trade.token.logo}
                          alt={trade.token.ticker}
                          className="w-8 h-8 rounded-full object-cover border border-gray-200"
                        />
                      ) : (
                        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold text-[#0D1C59]">
                          {trade.token.ticker.substring(0, 1)}
                        </div>
                      )}
                    </div>
                    <div>
                      <div className="font-semibold text-[#0D1C59] text-sm">
                        {trade.token.ticker}
                      </div>
                      <div className="text-[#7D8FB3] text-xs">
                        {trade.token.name}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-8">
                  <div className="font-semibold text-[#0D1C59] text-sm">
                    {trade.openDate}
                  </div>
                  <div className="text-[#7D8FB3] text-xs">{trade.openTime}</div>
                </td>
                <td className="py-4 px-8">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      trade.type === "Long"
                        ? "bg-[#E6FBF4] text-[#05CD99]"
                        : "bg-[#FEECEC] text-[#FF5A5A]"
                    }`}
                  >
                    {trade.type}
                  </span>
                </td>
                <td className="py-4 px-8 text-[#0D1C59] text-sm font-semibold">
                  {trade.size}
                </td>
                <td className="py-4 px-8 text-[#0D1C59] text-sm font-semibold">
                  {trade.leverage}
                </td>
                <td className="py-4 px-8">
                  <div
                    className={`text-sm font-semibold ${
                      trade.pnl.isPositive ? "text-[#05CD99]" : "text-[#FF5A5A]"
                    }`}
                  >
                    {trade.pnl.value}
                  </div>
                  <div
                    className={`text-xs font-medium ${
                      trade.pnl.isPositive ? "text-[#05CD99]" : "text-[#FF5A5A]"
                    }`}
                  >
                    {trade.pnl.percentage}
                  </div>
                </td>
                <td className="py-4 px-8">
                  <button className="px-4 py-1.5 bg-[#F5F8FF] text-[#335CFF] text-xs font-semibold rounded-full shadow-sm hover:bg-[#E6EDFF] transition-colors">
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
