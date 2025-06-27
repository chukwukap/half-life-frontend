const rows = [
  ["Transaction Fees", "0.05%", "Up to 1%+"],
  ["Oracle Technology", "Multi-layer AI oracles", "Price feeds only"],
  ["Key Management", "Non-custodial MPC", "Single private key"],
  ["Listing Speed", "< 2 mins", "3–7 days"],
  ["Time Index Liquidity", "Yes", "No"],
];

const WhyHalfLifeSection = () => {
  return (
    <section
      className="py-20 px-6 border-t border-border bg-background"
      id="why-halflife"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-12">
          Why Halflife?
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-[600px] w-full text-left border border-border rounded-xl overflow-hidden">
            <thead className="bg-primary/10">
              <tr>
                <th className="px-6 py-4 font-semibold">Feature</th>
                <th className="px-6 py-4 font-semibold text-primary">
                  Halflife
                </th>
                <th className="px-6 py-4 font-semibold">Typical Exchange</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([feature, half, typical]) => (
                <tr
                  key={feature}
                  className="odd:bg-background even:bg-background/95"
                >
                  <td className="px-6 py-4 font-medium">{feature}</td>
                  <td className="px-6 py-4 text-primary font-semibold">
                    {half}
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">{typical}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default WhyHalfLifeSection;
