"use client";

import { useState } from "react";

const JoinAlphaSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setErrorMsg(null);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const data = await res.json();
        setErrorMsg(data.error ?? "Something went wrong.");
        return;
      }

      setSubmitted(true);
      setEmail("");
    } catch (err) {
      console.error("Subscribe error", err);
      setErrorMsg("Network error. Please try again later.");
    }
  };

  const isDisabled = email.trim().length === 0;

  return (
    <section
      className="pt-0 px-6 bg-background/95 border-t border-border"
      id="join-alpha"
    >
      {/* 
        Gradient background for the top section (text area).
        This absolutely positioned div ensures the gradient spans the full width of the page and hits the top.
        The content is relatively positioned to stay above the gradient.
      */}
      <div className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[340px] w-full z-0"
          style={{
            background:
              "radial-gradient(50% 100% at 50% 0%, rgba(0, 92, 244, 0.06) 0%, rgba(0, 92, 244, 0) 100%)",
          }}
        />
        <div className="relative max-w-xl mx-auto text-center z-10 pt-24 pb-12">
          <span className="inline-block capitalize text-sm font-medium  text-[#8EC1FF] mb-4 bg-white/10 rounded-full px-4 py-2 border border-white/10">
            Get started
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
            Join the Alpha
          </h2>
          <p className="text-muted-foreground mb-8">
            Be among the first to access Halflife and start trading project
            lifespans before everyone else.
          </p>

          {submitted ? (
            <p className="text-success font-semibold">
              Thanks! We&apos;ll keep you posted.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 border border-width-1 py-12 px-6 rounded-2xl shadow-[0px_0px_167px_0px_#335CFF1F]"
            >
              <div className="relative flex-1">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  className="w-full rounded-full border border-border bg-background/80 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <svg
                    width="16"
                    height="12"
                    viewBox="0 0 16 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.75 0.375H1.25C1.10082 0.375 0.957742 0.434263 0.852252 0.539753C0.746763 0.645242 0.6875 0.788316 0.6875 0.9375V10.5C0.6875 10.7984 0.806026 11.0845 1.017 11.2955C1.22798 11.5065 1.51413 11.625 1.8125 11.625H14.1875C14.4859 11.625 14.772 11.5065 14.983 11.2955C15.194 11.0845 15.3125 10.7984 15.3125 10.5V0.9375C15.3125 0.788316 15.2532 0.645242 15.1477 0.539753C15.0423 0.434263 14.8992 0.375 14.75 0.375ZM8 6.36211L2.69633 1.5H13.3037L8 6.36211ZM5.94055 6L1.8125 9.78352V2.21648L5.94055 6ZM6.77305 6.76289L7.6168 7.53984C7.72057 7.63511 7.85632 7.68797 7.99719 7.68797C8.13806 7.68797 8.2738 7.63511 8.37758 7.53984L9.22133 6.76289L13.2995 10.5H2.69633L6.77305 6.76289ZM10.0595 6L14.1875 2.21578V9.78422L10.0595 6Z"
                      fill="#343330"
                    />
                  </svg>
                </div>
              </div>
              {errorMsg && (
                <p className="text-destructive text-sm font-medium text-center">
                  {errorMsg}
                </p>
              )}

              <button
                type="submit"
                className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors disabled:opacity-60"
                disabled={isDisabled}
              >
                Get Early Access
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default JoinAlphaSection;
