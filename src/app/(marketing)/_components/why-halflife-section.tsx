import Image from "next/image";

const rows = [
  [
    "Trading Focus",
    "Trade the probability of survival",
    "Trade only price direction",
  ],
  [
    "Oracle Technology",
    "Sub-second oracle built on Timescale & mini-blocks",
    "30 s TWAP oracles",
  ],
  [
    "Key Management",
    'Non-custodial "Key-Guard" backup',
    "Complex private-key UX",
  ],
];

const WhyHalfLifeSection = () => {
  return (
    <section className="py-28 px-6 bg-background" id="why-halflife">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Why Halflife?
          </h2>
          <p className="text-muted-foreground max-w-lg sm:text-right">
            Halflife reinvents how traders approach project longevity with
            unique features.
          </p>
        </div>

        {/* gradient card */}
        <div className="relative rounded-[40px] overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.45)] bg-gradient-to-br from-[#1b1d30] via-[#1c2038] to-[#181a29] w-full before:absolute before:inset-0 before:rounded-[40px] before:ring-1 before:ring-white/10 before:pointer-events-none before:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(91,123,255,0.25),transparent_60%)]" />

          <table className="w-full text-left relative z-10 divide-y divide-white/10">
            <thead>
              <tr className="text-lg">
                <th className="py-6 px-8 font-medium text-muted-foreground">
                  &nbsp;
                </th>
                <th className="py-6 px-8 font-bold text-white flex items-center gap-2">
                  <Image
                    src="/assets/img/logo-mini.png"
                    alt="Halflife"
                    width={24}
                    height={24}
                  />
                  halflife
                </th>
                <th className="py-6 px-8 font-bold text-white">
                  Typical Perp DEX
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([feature, half, typical], i) => (
                <tr key={feature} className="">
                  <td
                    className={`py-10 px-10 font-semibold text-white/80 w-1/3 border-white/10 ${
                      i !== rows.length - 1 ? "border-b" : ""
                    } border-r`}
                  >
                    {feature}
                  </td>
                  <td
                    className={`py-10 px-10 text-white/90 w-1/3 border-white/10 ${
                      i !== rows.length - 1 ? "border-b" : ""
                    } border-r`}
                  >
                    {half}
                  </td>
                  <td
                    className={`py-10 px-10 text-white/60 w-1/3 border-white/10 ${
                      i !== rows.length - 1 ? "border-b" : ""
                    }`}
                  >
                    {typical}
                  </td>
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
