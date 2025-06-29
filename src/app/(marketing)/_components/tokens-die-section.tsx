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
        <div
          className="
            relative 
            flex flex-col
            justify-between
            w-4/5 
            h-[30rem]
            rounded-3xl         
            gap-10              
            p-8                 
            bg-blue-100/5
            overflow-visible
            shadow-[0px_-16px_64px_0px_#74B0FD14_inset,0px_3px_12px_0px_#D4E8FF14_inset,0px_0.5px_0.5px_0px_#D4E8FF1F_inset]
          "
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

          <div
            className="flex flex-col gap-4 rounded-xl"
            style={{
              backgroundImage: "url('/assets/img/net.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: 220,
              overflow: "hidden",
            }}
            aria-label="Token widget mockups with network background"
          >
            <Image
              src="/assets/img/trade-widget-1.png"
              alt="ZORA widget"
              width={320}
              height={90}
              className="drop-shadow-xl  rounded-xl absolute top-20 z-10"
              style={{
                transform: "translateX(-30%)",
              }}
              priority
            />
            <Image
              src="/assets/img/trade-widget-2.png"
              alt="MONAD widget"
              width={320}
              height={90}
              className="drop-shadow-xl  rounded-xl absolute top-40  z-10"
              style={{
                transform: "translateX(50%)",
              }}
              priority
            />
          </div>
          {/* Card content */}
          <div className="flex flex-col justify-end border border-blue-500">
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
          className="
            relative
            flex flex-col
            justify-between
            w-4/5
            h-[30rem]
            rounded-3xl
            gap-10
            p-8
            bg-blue-100/5
            overflow-visible
            shadow-[0px_-16px_64px_0px_#74B0FD14_inset,0px_3px_12px_0px_#D4E8FF14_inset,0px_0.5px_0.5px_0px_#D4E8FF1F_inset]
          "
        >
          {/* Subtle glassy overlay for visual depth */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              borderRadius: 32,
              boxShadow: "0 0 0 1px rgba(255,255,255,0.05) inset",
            }}
          />
          {/* Floating lifespan futures widget mockups with network background */}
          <div
            className="flex flex-col gap-4 rounded-xl"
            style={{
              backgroundImage: "url('/assets/img/net.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: 220,
              overflow: "hidden",
            }}
            aria-label="Lifespan futures widget mockups with network background"
          >
            <Image
              src="/assets/img/lifespan-futures-mock-1.png"
              alt="Lifespan futures widget 1"
              width={320}
              height={90}
              className="drop-shadow-xl rounded-xl absolute top-10 z-10"
              style={{
                transform: "translateX(-8%)",
              }}
              priority
            />
            <Image
              src="/assets/img/lifespan-futures-mock-2.png"
              alt="Lifespan futures widget 2"
              width={320}
              height={90}
              className="drop-shadow-xl rounded-xl absolute top-30 "
              style={{
                transform: "translateX(25%)",
              }}
              priority
            />
          </div>
          {/* Card content */}
          <div className="flex flex-col justify-end border border-blue-500">
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
