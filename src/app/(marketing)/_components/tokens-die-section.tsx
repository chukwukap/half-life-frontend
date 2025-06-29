import Image from "next/image";

const TokensDieSection = () => {
  return (
    <section
      className="bg-background/95 border-t border-border py-20 px-6 overflow-x-hidden overflow-y-visible"
      id="tokens-die"
    >
      {/* Section header */}
      <div className="max-w-5xl mx-auto text-center">
        <span className="inline-block capitalize text-sm font-medium text-[#8EC1FF] mb-4 bg-white/10 rounded-full px-4 py-2 border border-white/10">
          The Problem
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-white">
          Most Crypto Startups Die
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          90% of crypto startups flatline within&nbsp;6&nbsp;months, yet the
          only way to speculate is dumping on spot or hoping a perp exists.
          We&apos;re changing that.
        </p>
      </div>

      {/* 
        Feature cards grid centered horizontally and vertically (on desktop).
        We use flexbox to center the two cards in the available space.
      */}
      <div className="mt-16 flex justify-center items-center w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl w-full justify-center items-center">
          {/* Card 1: One Metric, One Click */}
          <div
            className="
              relative 
              flex 
              flex-col
              max-w-md
              justify-between
              w-full 
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
                backgroundColor: "rgba(192, 213, 255, 0.10)",
              }}
              aria-label="Token widget mockups with network background"
            >
              <Image
                src="/assets/img/trade-widget-1.png"
                alt="ZORA widget"
                width={320}
                height={90}
                className="drop-shadow-xl rounded-xl absolute top-[10%] z-10"
                style={{
                  transform: "translateX(-20%)",
                }}
                priority
              />
              <Image
                src="/assets/img/trade-widget-2.png"
                alt="MONAD widget"
                width={320}
                height={90}
                className="drop-shadow-xl rounded-xl absolute top-[30%] z-10"
                style={{
                  transform: "translateX(30%)",
                }}
                priority
              />
            </div>
            {/* Card content */}
            <div className="flex flex-col justify-end">
              <h3 className="pt-4 text-2xl font-extrabold mb-4 text-foreground">
                Discover Startup Life&nbsp;Indexes
              </h3>
              <p className="text-muted-foreground mb-8 max-w-md text-left">
                You trade Life Indexes&nbsp;&mdash; synthetic assets that track
                a project&apos;s chance of survival in&nbsp;real&nbsp;time.
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

          {/* Card 2: Perpetual Lifespan Futures */}
          <div
            className="
              relative
              flex 
              flex-col
              max-w-md
              justify-between
              w-full
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
                backgroundColor: "rgba(192, 213, 255, 0.10)",
              }}
              aria-label="Lifespan futures widget mockups with network background"
            >
              <Image
                src="/assets/img/lifespan-futures-mock-1.png"
                alt="Lifespan futures widget 1"
                width={250}
                height={70}
                className="drop-shadow-xl rounded-xl absolute top-[12%] z-10"
                style={{
                  transform: "translateX(-8%)",
                }}
                priority
              />
              <Image
                src="/assets/img/lifespan-futures-mock-2.png"
                alt="Lifespan futures widget 2"
                width={250}
                height={70}
                className="drop-shadow-xl rounded-xl absolute top-[23%]"
                style={{
                  transform: "translateX(50%)",
                }}
                priority
              />
            </div>
            {/* Card content */}
            <div className="flex flex-col justify-end">
              <h3 className="pt-4 text-2xl font-extrabold mb-4 text-foreground">
                Perps on Crypto Startups
              </h3>
              <p className="text-muted-foreground mb-8 max-w-md text-left">
                Go long if you believe a project is gaining traction, or short
                if you believe it&apos;s dying—using familiar perpetual
                mechanics without waiting for spot liquidity.
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
      </div>
    </section>
  );
};

export default TokensDieSection;
