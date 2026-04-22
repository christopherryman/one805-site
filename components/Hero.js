"use client";
import { useEffect, useState } from "react";

// Countdown to Sept 25, 2026
function useCountdown(target) {
  const [time, setTime] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = new Date(target) - new Date();
      if (diff <= 0) return;
      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        mins: Math.floor((diff % 3600000) / 60000),
        secs: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  return time;
}

function CountBox({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl px-5 py-4 min-w-[72px] text-center">
        <span className="font-display text-4xl md:text-5xl font-bold text-white tabular-nums">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="mt-2 text-xs uppercase tracking-widest text-white/50 font-mono">
        {label}
      </span>
    </div>
  );
}

export default function Hero() {
  const countdown = useCountdown("2026-09-25T18:00:00");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-16 md:pb-24 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://cdn.prod.website-files.com/6971129e5006a691e2ea93c8/699816e9cce046b0ee322614_one805live-2026-talent-thumb.avif"
          alt="One805LIVE! 2026 performers"
          className="w-full h-full object-cover object-center"
        />
        {/* Multi-layer gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-navy-900/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/70 via-transparent to-transparent" />
      </div>

      {/* Decorative top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        {/* Event badge */}
        <div
          className={`transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ transitionDelay: "100ms" }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ember-500/20 border border-ember-500/40 text-ember-500 text-xs font-mono font-medium uppercase tracking-wider mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-ember-500 animate-pulse" />
            Two-Day Benefit Concert · Sept 25–26, 2026
          </span>
        </div>

        {/* Title */}
        <div
          className={`transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ transitionDelay: "200ms" }}
        >
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tight mb-3">
            One805<span className="text-gold-400">LIVE!</span>
          </h1>
          <h2 className="font-display text-2xl md:text-4xl font-bold text-white/80 italic mb-2">
            Rock for First Responders
          </h2>
          <p className="text-white/60 text-base md:text-lg font-body mb-1">
            Kevin Costner's Oceanside Field of Dreams Estate · Montecito, CA
          </p>
        </div>

        {/* Headliners */}
        <div
          className={`mt-6 mb-10 transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ transitionDelay: "300ms" }}
        >
          <p className="text-xs font-mono uppercase tracking-widest text-gold-400/70 mb-3">
            Featuring Headliners
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              "Pat Benatar & Neil Giraldo",
              "George Thorogood",
              "Kevin Costner & Modern West",
            ].map((artist) => (
              <span
                key={artist}
                className="px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur text-white text-sm font-medium"
              >
                {artist}
              </span>
            ))}
          </div>
        </div>

        {/* Countdown */}
        <div
          className={`mb-10 transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ transitionDelay: "400ms" }}
        >
          <div className="flex gap-4 flex-wrap">
            <CountBox value={countdown.days} label="Days" />
            <CountBox value={countdown.hours} label="Hours" />
            <CountBox value={countdown.mins} label="Mins" />
            <CountBox value={countdown.secs} label="Secs" />
          </div>
        </div>

        {/* CTAs */}
        <div
          className={`flex flex-wrap gap-4 transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ transitionDelay: "500ms" }}
        >
          <a
            href="#tickets"
            className="group px-8 py-4 rounded-full bg-gold-400 text-navy-950 font-semibold text-base hover:bg-gold-500 transition-all hover:scale-105 shadow-lg shadow-gold-400/20"
          >
            Purchase Tickets
            <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">→</span>
          </a>
          <a
            href="#about"
            className="px-8 py-4 rounded-full border border-white/30 text-white font-medium text-base hover:bg-white/10 transition-all backdrop-blur"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-2 text-white/30">
        <span className="text-xs font-mono uppercase tracking-widest rotate-90 mb-2">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
