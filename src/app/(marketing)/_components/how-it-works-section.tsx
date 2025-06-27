import Image from "next/image";

const steps = [
  {
    title: "Listen",
    description:
      "Index all lifespan on-chain events; Half Life crunches it every 5s",
    icon: "how-it-works-listen.png",
  },
  {
    title: "Publish",
    description:
      "Scores are Chainlink-compatible oracles and your orders in 100ms",
    icon: "how-it-works-publish.png",
  },
  {
    title: "Trade",
    description: "Create delta-neutral through options market liquidity",
    icon: "how-it-works-trade.png",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 px-6 bg-background" id="how-it-works">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-12">
          How It Works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
          {steps.map(({ title, description, icon }, idx) => (
            <div
              key={title}
              className="relative flex flex-col items-center text-center px-4"
            >
              {/* vertical divider on desktop except last */}
              {idx < steps.length - 1 && (
                <div className="hidden sm:block absolute right-0 top-2 h-[calc(100%-1rem)] w-px bg-border/40" />
              )}

              <Image
                src={`/assets/img/icons/${icon}`}
                alt={title}
                width={120}
                height={120}
                className="mb-6 select-none"
              />

              <h3 className="text-xl font-extrabold mt-6 mb-3 text-white">
                {title}
              </h3>
              <p className="text-muted-foreground text-base max-w-[260px]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
