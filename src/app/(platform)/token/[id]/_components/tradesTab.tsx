import React from "react";

/**
 * TradesTab - Pixel-perfect trades table for the single token page
 * Security: Stateless, safe for all environments
 */
const trades = [
  {
    time: "15:09:58",
    direction: "Sell",
    price: "0.0602",
    quantity: "28,795.5142",
  },
  {
    time: "15:10:00",
    direction: "Buy",
    price: "0.0603",
    quantity: "63,824.9259",
  },
  {
    time: "15:10:05",
    direction: "Buy",
    price: "0.0604",
    quantity: "62,250.6720",
  },
  {
    time: "15:10:10",
    direction: "Sell",
    price: "0.0605",
    quantity: "47,560.1183",
  },
  {
    time: "15:10:15",
    direction: "Sell",
    price: "0.0606",
    quantity: "54,900.3501",
  },
  {
    time: "15:10:20",
    direction: "Buy",
    price: "0.0607",
    quantity: "22,478.8402",
  },
  {
    time: "15:10:25",
    direction: "Buy",
    price: "0.0608",
    quantity: "80,120.4500",
  },
  {
    time: "15:10:30",
    direction: "Buy",
    price: "0.0609",
    quantity: "39,750.3755",
  },
  {
    time: "15:10:35",
    direction: "Sell",
    price: "0.0610",
    quantity: "28,999.5500",
  },
  {
    time: "15:10:40",
    direction: "Buy",
    price: "0.0611",
    quantity: "31,200.7500",
  },
  {
    time: "15:10:50",
    direction: "Buy",
    price: "0.0613",
    quantity: "38,520.6409",
  },
  {
    time: "15:10:55",
    direction: "Buy",
    price: "0.0614",
    quantity: "50,102.3204",
  },
  {
    time: "15:11:00",
    direction: "Buy",
    price: "0.0615",
    quantity: "70,500.0001",
  },
  {
    time: "15:11:05",
    direction: "Buy",
    price: "0.0616",
    quantity: "29,999.9900",
  },
  {
    time: "15:11:10",
    direction: "Buy",
    price: "0.0617",
    quantity: "55,345.6789",
  },
  {
    time: "15:11:15",
    direction: "Sell",
    price: "0.0618",
    quantity: "85,200.9999",
  },
  {
    time: "15:11:20",
    direction: "Buy",
    price: "0.0619",
    quantity: "48,120.4502",
  },
  {
    time: "15:11:25",
    direction: "Buy",
    price: "0.0620",
    quantity: "32,100.5000",
  },
  {
    time: "15:11:30",
    direction: "Buy",
    price: "0.0620",
    quantity: "74,890.2100",
  },
];

const TradesTab: React.FC = () => {
  return (
    <div className="bg-white rounded-[24px] p-0 shadow-sm overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="bg-[#F5F8FF] text-[#7D8FB3] text-base">
            <th className="py-4 px-8 font-semibold text-left">Time</th>
            <th className="py-4 px-8 font-semibold text-left">Direction</th>
            <th className="py-4 px-8 font-semibold text-left">Price</th>
            <th className="py-4 px-8 font-semibold text-left">Quantity</th>
          </tr>
        </thead>
        <tbody>
          {trades.map((trade, i) => (
            <tr key={i} className="border-t border-[#E9EAEC]">
              <td className="py-3 px-8 text-[#181A20] font-medium text-base">
                {trade.time}
              </td>
              <td className="py-3 px-8 font-medium text-base">
                <span
                  className={
                    trade.direction === "Buy"
                      ? "text-[#05CD99]"
                      : "text-[#FF5A5A]"
                  }
                >
                  {trade.direction}
                </span>
              </td>
              <td className="py-3 px-8 text-[#181A20] font-medium text-base">
                {trade.price}
              </td>
              <td className="py-3 px-8 text-[#181A20] font-medium text-base">
                {trade.quantity}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TradesTab;
