"use client";

import Link from "next/link";

export default function LandingPage() {
  return (
    <section className="relative flex flex-col items-center justify-center py-20 px-6 text-center bg-[url('/public/assets/img/hero-pattern.png')] bg-cover">
      <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight max-w-3xl mb-6">
        Trade Options Faster on{" "}
        <span className="text-primary">Half&nbsp;Life</span>
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10">
        Execute complex option strategies with lightning speed and
        institutional-grade security—powered by the UmbraSwap liquidity network.
      </p>
      <Link
        href="/app"
        className="inline-block bg-primary text-white rounded-lg px-8 py-4 font-medium hover:bg-primary/90 transition-colors"
      >
        Launch App
      </Link>
    </section>
  );
}
