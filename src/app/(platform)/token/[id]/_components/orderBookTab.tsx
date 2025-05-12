import React from "react";

/**
 * OrderBookTab - Pixel-perfect order book table for the single token page
 * Security: Stateless, safe for all environments
 */
const asks = [
  { price: "0.0602", quantity: 47830, total: 28795.5142 },
  { price: "0.0601", quantity: 106190, total: 63824.9259 },
  { price: "0.0600", quantity: 103750, total: 62250.672 },
  { price: "0.0598", quantity: 75250, total: 47560.1183 },
  { price: "0.0597", quantity: 200500, total: 54900.3501 },
  { price: "0.0596", quantity: 89900, total: 22478.8402 },
  { price: "0.0594", quantity: 62150, total: 80120.45 },
  { price: "0.0593", quantity: 95800, total: 39750.3755 },
  { price: "0.0591", quantity: 110000, total: 28999.55 },
  { price: "0.0590", quantity: 87250, total: 28795.5142 },
];
const bids = [
  { price: "0.0602", quantity: 47830, total: 28795.5142 },
  { price: "0.0601", quantity: 106190, total: 63824.9259 },
  { price: "0.0600", quantity: 103750, total: 62250.672 },
  { price: "0.0598", quantity: 75250, total: 47560.1183 },
  { price: "0.0597", quantity: 200500, total: 54900.3501 },
  { price: "0.0596", quantity: 89900, total: 22478.8402 },
  { price: "0.0594", quantity: 62150, total: 80120.45 },
  { price: "0.0593", quantity: 95800, total: 39750.3755 },
  { price: "0.0591", quantity: 110000, total: 28999.55 },
  { price: "0.0590", quantity: 87250, total: 28795.5142 },
];

// Find max quantity for bar scaling
const maxQuantity = Math.max(
  ...asks.map((a) => a.quantity),
  ...bids.map((b) => b.quantity)
);

const OrderBookTab: React.FC = () => {
  return (
    <div className="bg-white rounded-[24px] p-0 shadow-sm overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="bg-[#F5F8FF] text-[#7D8FB3] text-base">
            <th className="py-4 px-8 font-semibold text-left">Price (USDT)</th>
            <th className="py-4 px-8 font-semibold text-left">
              Quantity (WIF)
            </th>
            <th className="py-4 px-8 font-semibold text-left">Total</th>
          </tr>
        </thead>
        <tbody>
          {/* Render asks (red) */}
          {asks.map((row, i) => (
            <tr key={"ask-" + i} className="border-t border-[#E9EAEC] relative">
              <td className="py-3 px-8 font-medium text-base text-[#FF5A5A]">
                {row.price}
              </td>
              <td className="py-3 px-8 font-medium text-base relative">
                <div className="relative z-10">
                  {row.quantity.toLocaleString(undefined, {
                    maximumFractionDigits: 2,
                  })}
                  K
                </div>
                <div
                  className="absolute left-0 top-1/2 -translate-y-1/2 h-7 rounded-md bg-[#FEECEC] z-0"
                  style={{ width: `${(row.quantity / maxQuantity) * 100}%` }}
                />
              </td>
              <td className="py-3 px-8 font-medium text-base text-[#181A20]">
                {row.total.toLocaleString(undefined, {
                  maximumFractionDigits: 4,
                })}
              </td>
            </tr>
          ))}
          {/* Render bids (green) */}
          {bids.map((row, i) => (
            <tr key={"bid-" + i} className="border-t border-[#E9EAEC] relative">
              <td className="py-3 px-8 font-medium text-base text-[#05CD99]">
                {row.price}
              </td>
              <td className="py-3 px-8 font-medium text-base relative">
                <div className="relative z-10">
                  {row.quantity.toLocaleString(undefined, {
                    maximumFractionDigits: 2,
                  })}
                  K
                </div>
                <div
                  className="absolute left-0 top-1/2 -translate-y-1/2 h-7 rounded-md bg-[#E6FBF4] z-0"
                  style={{ width: `${(row.quantity / maxQuantity) * 100}%` }}
                />
              </td>
              <td className="py-3 px-8 font-medium text-base text-[#181A20]">
                {row.total.toLocaleString(undefined, {
                  maximumFractionDigits: 4,
                })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderBookTab;
