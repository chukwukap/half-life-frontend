import Image from "next/image";

const TokensDieSection = () => {
  return (
    <section
      className="bg-background/95 border-t border-border py-20 px-6"
      id="tokens-die"
    >
      <div className="max-w-5xl mx-auto text-center">
        <span className="inline-block uppercase text-sm font-semibold tracking-widest text-primary mb-4">
          The Problem
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">
          Tokens die young
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We index on-chain mortality so you can short the hype – or jump on the
          next survivor.
        </p>
      </div>

      {/* Feature cards grid */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* One index card */}
        <div className="relative rounded-3xl p-10 bg-card/90 border border-border/60 backdrop-blur-xl overflow-hidden group">
          {/* subtle glow */}
          <div className="absolute inset-0 rounded-3xl pointer-events-none ring-1 ring-white/5" />
          {/* floating token widget mock */}
          <Image
            src="/assets/img/mock-zora-widget.png"
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
            src="/assets/img/one-index-mock.png"
            alt="One index mock"
            width={640}
            height={360}
            className="rounded-lg border border-border shadow-lg"
          />
        </div>

        {/* Lifespan Futures card */}
        <div className="relative rounded-3xl p-10 bg-card/90 border border-border/60 backdrop-blur-xl overflow-hidden group">
          <div className="absolute inset-0 rounded-3xl pointer-events-none ring-1 ring-white/5" />
          {/* floating long/short widget */}
          <Image
            src="/assets/img/mock-long-short-widget.png"
            alt="Long/short widget"
            width={500}
            height={160}
            className="absolute -top-10 right-4 w-[360px] group-hover:-translate-y-1 transition-transform"
          />
          <h3 className="mt-40 md:mt-56 text-2xl font-extrabold mb-4 text-foreground">
            Perpetual Lifespan Futures
          </h3>
          <p className="text-muted-foreground mb-8 max-w-md">
            Go long on a project&apos;s future or short its demise – with
            familiar funding-rate mechanics and gas-less order routing you
            already love.
          </p>
          <Image
            src="/assets/img/lifespan-futures-mock.png"
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
