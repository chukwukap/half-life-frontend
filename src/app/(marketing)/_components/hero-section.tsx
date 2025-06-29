import Link from "next/link";
import Image from "next/image";

/**
 * HeroSection
 * Mobile-first section showing headline, sub-text, CTA button
 * plus early-access tag and supported wallet/partner logos beneath.
 * Security: purely presentational. No user input except CTA nav, therefore safe.
 */
const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center pt-24 pb-20 sm:pt-24 sm:pb-28 px-6 text-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_center,rgba(80,0,255,0.12),transparent_75%)]" />
      {/* Subtle 3D grid overlay */}
      <div
        className="pointer-events-none absolute inset-x-0 top-1/4 h-[60%] -z-10 [mask-image:linear-gradient(transparent,white,transparent)]"
        aria-hidden="true"
      >
        <div className="w-full h-full bg-[length:40px_40px] bg-[repeating-linear-gradient(0deg,transparent_0,transparent_39px,rgba(255,255,255,0.04)_40px),repeating-linear-gradient(90deg,transparent_0,transparent_39px,rgba(255,255,255,0.04)_40px)]" />
      </div>

      {/* Heading */}
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight max-w-4xl mx-auto text-[#d6e0ff]">
        Discover and Trade
        <br className="hidden md:block" />
        Crypto&nbsp;Startups
      </h1>
      {/* Sub-headline */}
      <p className="mt-8 max-w-2xl mx-auto text-base sm:text-lg lg:text-xl text-muted-foreground/80">
        The first trading app where you can trade startups. Long and short the
        survival of startups <em>in&nbsp;real&nbsp;time</em>.
      </p>

      {/* CTA */}
      <Link
        href="#join-alpha"
        className="mt-10 inline-flex items-center justify-center bg-primary hover:bg-primary/90 transition-colors text-primary-foreground font-semibold rounded-full px-12 py-4 shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      >
        Get Early Access
      </Link>

      {/* Chain icons cluster */}
      <div className="mt-20 flex flex-col items-center">
        {/* <div className="flex items-center justify-center bg-white/10 rounded-full p-2">
          {[
            "solana-logo.png",
            "arbitrum-logo.png",
            "base-logo.png",
            "optimism-logo.png",
          ].map((logo, idx) => (
            <span
              key={logo}
              className={`w-14 h-14 rounded-full bg-background/70 border border-border flex items-center justify-center shadow-inner ${
                idx !== 0 ? "-ml-4" : ""
              }`}
            >
              <Image
                src={`/assets/img/logos/${logo}`}
                alt={logo.replace(/\-logo\.png$/, "")}
                width={32}
                height={32}
              />
            </span>
          ))}
        </div> */}
        <p className="mt-6 max-w-3xl text-sm sm:text-base text-muted-foreground/70 text-center">
          Loved by traders across Solana, Base and Ethereum.
        </p>
      </div>

      {/* Supported chains/wallets (placeholder icons) */}
      {/* <div
        className="mt-14 w-full max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-10 gap-y-8 place-items-center"
        aria-label="Supported partners"
      >
        {[
          "ethos-logo.png",
          "lens-logo.png",
          "phantom-logo.png",
          "nansen-logo.png",
          "infinex-logo.png",
        ].map((logo) => (
          <Image
            key={logo}
            src={`/assets/img/logos/${logo}`}
            alt={logo.replace(/\-logo\.png$/, "")}
            width={140}
            height={40}
            className="object-contain grayscale hover:grayscale-0 transition-all"
          />
        ))}
      </div> */}

      {/* Hero dashboard preview image */}
      {/* 
        Hero dashboard preview: Responsive, visually prominent, and accessible.
        Uses a smart layout with a subtle background, border, and shadow for depth.
        Now even larger for maximum visual impact on all screens.
      */}
      <div className="relative mt-16 w-full flex justify-center">
        <div
          className="
            relative
            w-full
            max-w-6xl
            rounded-3xl
            overflow-hidden
            shadow-2xl

            transition-transform
            hover:scale-[1.025]
            focus-within:ring-2 focus-within:ring-primary
          "
          tabIndex={0}
          aria-label="UmbraSwap dashboard preview"
        >
          {/* Decorative blurred glow behind the dashboard image */}
          {/* <div
            className="absolute -inset-6 z-0 pointer-events-none"
            aria-hidden="true"
            style={{
              filter: "blur(48px)",
              background:
                "radial-gradient(ellipse at 60% 40%, rgba(80,0,255,0.13) 0%, transparent 80%)",
            }}
          /> */}
          <Image
            src="/assets/img/dash.png"
            alt="UmbraSwap dashboard preview"
            width={2200}
            height={1200}
            className="relative z-10 w-full h-auto object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
