import Image from "next/image";
import LongShortWidget from "./long-short-widget";
import TokenTradeWidget from "./token-trade-widget";

const TokensDieSection = () => {
  return (
    <section
      className="bg-background/95 border-t border-border py-20 px-6"
      id="tokens-die"
    >
      <div className="max-w-5xl mx-auto text-center">
        <span className="inline-block uppercase text-sm font-semibold tracking-widest text-[#8EC1FF] mb-4 bg-white/10 rounded-full p-2 border border-white/10">
          The Problem
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">
          Tokens die young
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We index on-chain mortality so you can short the hype or jump on the
          next survivor.
        </p>
      </div>

      {/* Feature cards grid */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* One index card */}
        <div className="relative rounded-3xl p-10 bg-card/90 border border-border/60 backdrop-blur-xl overflow-hidden group before:absolute before:-inset-2 before:-z-10 before:rounded-[inherit] before:bg-gradient-to-br before:from-[#5b7bff]/40 before:via-[#a873ff]/30 before:to-[#ca5dff]/40 before:blur-2xl">
          {/* subtle glow */}
          <div className="absolute inset-0 rounded-3xl pointer-events-none ring-1 ring-white/5" />
          {/* floating token widget mock */}
          <Image
            src="/assets/img/trade-widget-1.png"
            alt="ZORA widget"
            width={500}
            height={140}
            className="absolute -top-6 -left-8 w-[340px] group-hover:-translate-y-1 transition-transform"
          />
          <h3 className="mt-40 md:mt-56 text-2xl font-extrabold mb-4 text-foreground">
            One Index, One Click
          </h3>
          <p className="text-muted-foreground mb-8 max-w-md">
            We stream every on-chain heartbeat—holders, depth, dormancy—into a
            single 0-100 Lifespan Score.
          </p>
          <Image
            src="/assets/img/trade-widget-2.png"
            alt="One index mock"
            width={640}
            height={360}
            className="rounded-lg border border-border shadow-lg"
          />
          {/* floating token trade widgets */}
          <div className="absolute -top-10 -left-8 flex flex-col gap-4">
            <TokenTradeWidget
              token={{ name: "ZORA", logo: "zora.png", score: 20 }}
            />
            <TokenTradeWidget
              token={{
                name: "MONAD",
                logo: "monad.png",
                score: 198,
                scoreColor: "bg-[#CFF9E0]",
              }}
            />
          </div>
        </div>

        {/* Lifespan Futures card */}
        <div className="relative rounded-3xl p-10 bg-card/90 border border-border/60 backdrop-blur-xl overflow-hidden group before:absolute before:-inset-2 before:-z-10 before:rounded-[inherit] before:bg-gradient-to-br before:from-[#5b7bff]/40 before:via-[#a873ff]/30 before:to-[#ca5dff]/40 before:blur-2xl">
          <div className="absolute inset-0 rounded-3xl pointer-events-none ring-1 ring-white/5" />
          {/* floating trade widgets */}
          <div className="absolute -top-10 right-4 flex flex-col gap-4">
            <LongShortWidget direction="long" entry={98} liquidation={66} />
            <LongShortWidget direction="short" entry={45} liquidation={19} />
          </div>
          <h3 className="mt-40 md:mt-56 text-2xl font-extrabold mb-4 text-foreground">
            Perpetual Lifespan Futures
          </h3>
          <p className="text-muted-foreground mb-8 max-w-md">
            Go long on a project&apos;s future or short its demise – with
            familiar funding-rate mechanics and gas-less order routing you
            already love.
          </p>
          <Image
            src="/assets/img/lifespan-futures-mock-2.png"
            alt="Lifespan futures mock"
            width={640}
            height={360}
            className="rounded-lg border border-border shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default TokensDieSection;
