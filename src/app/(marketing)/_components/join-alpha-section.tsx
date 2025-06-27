import { useState } from "react";

const JoinAlphaSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integrate with backend/mail service. For now, simulate success.
    setSubmitted(true);
  };

  return (
    <section
      className="py-24 px-6 bg-background/95 border-t border-border"
      id="join-alpha"
    >
      <div className="max-w-xl mx-auto text-center">
        <span className="uppercase tracking-widest text-sm font-semibold text-primary mb-4 inline-block">
          Be early
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
          Join the Alpha
        </h2>
        <p className="text-muted-foreground mb-8">
          Be among the first to access Half Life and surf death-row token
          reports before everyone else.
        </p>

        {submitted ? (
          <p className="text-success font-semibold">
            Thanks! We&apos;ll keep you posted 👀
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 w-full"
          >
            <input
              type="email"
              required
              placeholder="Enter your email address"
              className="flex-1 rounded-full border border-border bg-background/80 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              Get Early Access
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default JoinAlphaSection;
