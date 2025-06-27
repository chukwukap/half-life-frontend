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
    <section className="relative flex flex-col items-center pt-24 pb-20 sm:pt-32 sm:pb-28 px-6 text-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_center,rgba(80,0,255,0.12),transparent_75%)]" />
      {/* Subtle 3D grid overlay */}
      <div
        className="pointer-events-none absolute inset-x-0 top-1/4 h-[60%] -z-10 [mask-image:linear-gradient(transparent,white,transparent)]"
        aria-hidden="true"
      >
        <div className="w-full h-full bg-[length:40px_40px] bg-[repeating-linear-gradient(0deg,transparent_0,transparent_39px,rgba(255,255,255,0.04)_40px),repeating-linear-gradient(90deg,transparent_0,transparent_39px,rgba(255,255,255,0.04)_40px)]" />
      </div>

      {/* Early-access badge top right on desktop */}
      <div className="absolute top-6 right-6 hidden sm:block">
        <Link
          href="#join-alpha"
          className="bg-primary/10 text-primary font-medium text-sm px-4 py-1.5 rounded-full hover:bg-primary/15 transition-colors"
        >
          Get Early Access
        </Link>
      </div>

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight max-w-3xl mx-auto text-foreground">
        Trade Time,
        <br className="hidden md:block" />
        Not&nbsp;Hype
      </h1>
      <p className="mt-6 max-w-xl mx-auto text-lg sm:text-xl text-muted-foreground">
        The first exchange where you hedge freedom—long a project&apos;s easing
        power shortage or short its impending rug.
      </p>

      <Link
        href="#join-alpha"
        className="mt-8 inline-block bg-primary text-primary-foreground font-semibold rounded-full px-8 py-3 shadow-lg hover:bg-primary/90 transition-colors"
      >
        Get Early Access
      </Link>

      {/* Supported chains/wallets (placeholder icons) */}
      <div
        className="mt-10 flex flex-wrap justify-center gap-4 w-full max-w-md"
        aria-label="Supported partners"
      >
        {[
          "ethos-logo.png",
          "lens-logo.png",
          "phantom-logo.png",
          "nansen-logo.png",
          "infiniX-logo.png",
        ].map((logo) => (
          <Image
            key={logo}
            src={`/assets/img/logos/${logo}`}
            alt={logo.replace(/\-logo\.png$/, "")}
            width={90}
            height={30}
            className="object-contain grayscale hover:grayscale-0 transition-all"
          />
        ))}
      </div>

      {/* Hero dashboard preview image */}
      <div className="mt-14 w-full max-w-4xl shadow-xl rounded-2xl overflow-hidden border border-border">
        <Image
          src="/assets/img/dashboard-image.png"
          alt="Half Life dashboard preview"
          width={1600}
          height={900}
          className="w-full h-auto"
          priority
        />
      </div>
    </section>
  );
};

export default HeroSection;
