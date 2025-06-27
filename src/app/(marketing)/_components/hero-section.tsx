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

      {/* Heading */}
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight max-w-4xl mx-auto text-[#d6e0ff]">
        Trade Time,
        <br className="hidden md:block" />
        Not&nbsp;Hype
      </h1>
      {/* Sub-headline */}
      <p className="mt-8 max-w-2xl mx-auto text-base sm:text-lg lg:text-xl text-muted-foreground/80">
        The first exchange where you hedge freedom—long a project&apos;s easing
        power shortage or short its impending rug.
      </p>

      {/* CTA */}
      <Link
        href="#join-alpha"
        className="mt-10 inline-flex items-center justify-center bg-primary hover:bg-primary/90 transition-colors text-primary-foreground font-semibold rounded-full px-12 py-4 shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      >
        Get Early Access
      </Link>

      {/* Supported chains/wallets (placeholder icons) */}
      <div
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
