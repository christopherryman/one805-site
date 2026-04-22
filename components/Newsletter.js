"use client";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (!email || !email.includes("@")) {
      setError(true);
      return;
    }
    setError(false);
    setSubmitted(true);
  };

  return (
    <section className="relative py-24 md:py-32 bg-navy-900 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full border border-gold-400" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full border border-gold-400" />
      </div>

      <div className="max-w-2xl mx-auto px-6 text-center relative">
        <p className="text-xs font-mono uppercase tracking-widest text-gold-400/70 mb-4">
          Stay in the Loop
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          Subscribe for Updates
        </h2>
        <p className="text-white/55 text-base mb-10 leading-relaxed">
          Event news, early access and exclusive updates from One805.
          Be first to know about artist announcements and early bird pricing.
        </p>

        {submitted ? (
          <div className="bg-gold-400/10 border border-gold-400/30 rounded-2xl px-8 py-10">
            <div className="text-4xl mb-3">🎉</div>
            <p className="font-display text-2xl font-bold text-white mb-2">
              Thank you!
            </p>
            <p className="text-white/60">
              Your submission has been received! You'll be among the first to
              hear about One805LIVE! 2026 updates.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError(false);
                }}
                onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                placeholder="Enter your email address"
                className={`flex-1 bg-navy-800 border rounded-full px-6 py-4 text-white placeholder-white/30 text-sm focus:outline-none transition-colors ${
                  error
                    ? "border-ember-500/60 focus:border-ember-500"
                    : "border-white/10 focus:border-gold-400/50"
                }`}
              />
              <button
                onClick={handleSubmit}
                className="px-8 py-4 rounded-full bg-gold-400 text-navy-950 font-semibold text-sm hover:bg-gold-500 transition-all hover:scale-105 whitespace-nowrap"
              >
                Sign Up
              </button>
            </div>
            {error && (
              <p className="text-ember-500 text-xs text-left pl-2">
                Please enter a valid email address.
              </p>
            )}
            <p className="text-white/30 text-xs">
              By clicking Sign Up you're confirming that you agree with our{" "}
              <a
                href="https://#/terms-and-conditions"
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-white/50 transition-colors"
              >
                Terms and Conditions
              </a>
              .
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
