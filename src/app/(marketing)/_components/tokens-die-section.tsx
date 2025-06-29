import Image from "next/image";

const TokensDieSection = () => {
  return (
    <section
      className="bg-background/95 border-t border-border py-20 px-6"
      id="tokens-die"
    >
      {/* Section header */}
      <div className="max-w-5xl mx-auto text-center">
        <span className="inline-block capitalize text-sm font-medium text-[#8EC1FF] mb-4 bg-white/10 rounded-full px-4 py-2 border border-white/10">
          The Problem
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-white">
          Tokens die young
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We index on-chain mortality so you can short the hype or jump on the
          next survivor.
        </p>
      </div>

      {/* Feature cards grid */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* 
          Card: One Index, One Click
          Custom styles applied as per design requirements:
          - width: 552px
          - height: 581px
          - border-radius: 32px
          - gap: 40px
          - padding: 32px
          - background: #A2C7FF03
          - Multiple inset box-shadows for depth and subtle highlight
        */}
        <div
          className="relative flex flex-col justify-end"
          style={{
            width: 552,
            height: 581,
            borderRadius: 32,
            gap: 40,
            padding: 32,
            background: "#A2C7FF03",
            boxShadow: `
              0px -16px 64px 0px #74B0FD14 inset,
              0px 3px 12px 0px #D4E8FF14 inset,
              0px 0.5px 0.5px 0px #D4E8FF1F inset
            `,
            overflow: "visible",
          }}
        >
          {/* Subtle glassy overlay for visual depth */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              borderRadius: 32,
              boxShadow: "0 0 0 1px rgba(255,255,255,0.05) inset",
            }}
          />
          {/* Floating token widget mockups */}
          <div className="absolute -top-8 -left-8 z-20">
            <Image
              src="/assets/img/trade-widget-1.png"
              alt="ZORA widget"
              width={320}
              height={90}
              className="drop-shadow-xl rounded-xl"
              priority
            />
            <div className="mt-4 ml-12">
              <Image
                src="/assets/img/trade-widget-2.png"
                alt="MONAD widget"
                width={220}
                height={60}
                className="drop-shadow-xl rounded-xl"
                priority
              />
            </div>
          </div>
          {/* Card content */}
          <div className="flex flex-col h-full justify-end pt-48">
            <h3 className="text-2xl font-extrabold mb-3 text-white text-left">
              One Index, One Click
            </h3>
            <p className="text-muted-foreground mb-8 max-w-md text-left">
              We stream every on-chain heartbeat—holders, depth, dormancy—into a
              single 0-100 Lifespan Score.
            </p>
            <div className="w-full flex justify-center">
              <Image
                src="/assets/img/trade-widget-2.png"
                alt="One index mock"
                width={420}
                height={120}
                className="rounded-lg border border-border shadow-lg"
                style={{ display: "none" }} // visually hidden, replaced by floating widgets above
              />
            </div>
          </div>
        </div>

        <div
          className="relative flex flex-col justify-end"
          style={{
            width: 552,
            height: 581,
            borderRadius: 32,
            gap: 40,
            padding: 32,
            background: "#A2C7FF03",
            boxShadow: `
              0px -16px 64px 0px #74B0FD14 inset,
              0px 3px 12px 0px #D4E8FF14 inset,
              0px 0.5px 0.5px 0px #D4E8FF1F inset
            `,
            overflow: "visible",
          }}
        >
          {/* Subtle glassy overlay for visual depth */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              borderRadius: 32,
              boxShadow: "0 0 0 1px rgba(255,255,255,0.05) inset",
            }}
          />
          {/* Floating lifespan futures widgets */}
          <div className="absolute -top-8 right-0 z-20 flex flex-col items-end gap-4">
            <Image
              src="/assets/img/lifespan-futures-mock-1.png"
              alt="Lifespan futures widget 1"
              width={320}
              height={90}
              className="drop-shadow-xl rounded-xl"
              priority
            />
            <div className="mt-4 mr-8">
              <Image
                src="/assets/img/lifespan-futures-mock-2.png"
                alt="Lifespan futures widget 2"
                width={220}
                height={60}
                className="drop-shadow-xl rounded-xl"
                priority
              />
            </div>
          </div>
          {/* Card content */}
          <div className="flex flex-col h-full justify-end pt-48">
            <h3 className="text-2xl font-extrabold mb-3 text-white text-left">
              Perpetual Lifespan Futures
            </h3>
            <p className="text-muted-foreground mb-8 max-w-md text-left">
              Go long on a project&apos;s future or short its demise – with
              familiar funding-rate mechanics and gas-less order routing you
              already love.
            </p>
            <div className="w-full flex justify-center">
              <Image
                src="/assets/img/lifespan-futures-mock-2.png"
                alt="Lifespan futures mock"
                width={420}
                height={120}
                className="rounded-lg border border-border shadow-lg"
                style={{ display: "none" }} // visually hidden, replaced by floating widgets above
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokensDieSection;
