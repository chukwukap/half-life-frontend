import Image from "next/image";

const TokensDieSection = () => {
  return (
    <section
      className="bg-background/95 border-t border-border py-20 px-6"
      id="tokens-die"
    >
      <div className="max-w-5xl mx-auto text-center">
        <span className="inline-block uppercase text-sm font-semibold tracking-widest text-primary mb-4">
          The Reality
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">
          Tokens die young
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          97% of meme coins crash within a week. We index on-chain mortality so
          you can short the hype – or jump on the next survivor.
        </p>
      </div>

      {/* Feature cards grid */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        {/* One index card */}
        <div className="bg-card/80 border border-border rounded-2xl p-8 text-left backdrop-blur-sm">
          <h3 className="text-xl font-bold mb-4">One index, One Click</h3>
          <p className="text-muted-foreground mb-6">
            We crunch every on-chain contract – holding depths, dormancy,
            time-to-liquidity – and build a single G100 Lifespan Score.
          </p>
          <Image
            src="/assets/img/one-index-mock.png"
            alt="One index feature"
            width={640}
            height={360}
            className="rounded-lg border border-border"
          />
        </div>

        {/* Lifespan Futures card */}
        <div className="bg-card/80 border border-border rounded-2xl p-8 text-left backdrop-blur-sm">
          <h3 className="text-xl font-bold mb-4">Perpetual Lifespan Futures</h3>
          <p className="text-muted-foreground mb-6">
            Going long against funeral or short on euphoria? Leverage up to 10×
            with our unique time-indexed contracts.
          </p>
          <Image
            src="/assets/img/lifespan-futures-mock.png"
            alt="Lifespan futures feature"
            width={640}
            height={360}
            className="rounded-lg border border-border"
          />
        </div>
      </div>
    </section>
  );
};

export default TokensDieSection;
