import { Clock, Cast, DollarSign } from "lucide-react";

const steps = [
  {
    title: "Listen",
    description:
      "Index all lifespan on-chain events; Half Life crunches it every 5s",
    icon: Clock,
  },
  {
    title: "Publish",
    description:
      "Scores are Chainlink-compatible oracles and your orders in 100ms",
    icon: Cast,
  },
  {
    title: "Trade",
    description: "Create delta-neutral through options market liquidity",
    icon: DollarSign,
  },
];

const HowItWorksSection = () => {
  return (
    <section
      className="py-20 px-6 border-t border-border bg-background/90"
      id="how-it-works"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-12">
          How It Works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {steps.map(({ title, description, icon: Icon }) => (
            <div key={title} className="flex flex-col items-center text-center">
              <span className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                <Icon className="text-primary w-6 h-6" />
              </span>
              <h3 className="text-lg font-bold mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm max-w-[220px]">
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
