export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-navy-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <p className="text-xs font-mono uppercase tracking-widest text-gold-400/70 mb-4">
          About the Event
        </p>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Left: main copy */}
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Two Days. Two Nights.{" "}
              <span className="text-gold-400 italic">One Purpose.</span>
            </h2>

            <div className="space-y-5 text-white/70 text-base leading-relaxed">
              <p>
                One805LIVE! returns, this year for an expanded{" "}
                <strong className="text-white font-semibold">
                  TWO-DAY experience
                </strong>
                ! Featuring Headliners Pat Benatar &amp; Neil Giraldo and
                George Thorogood.
              </p>
              <p>
                Friday, September 25th &amp; Saturday, September 26th, 2026,
                our main One805LIVE! event will be held at{" "}
                <strong className="text-white font-semibold">
                  Kevin Costner's oceanside Field of Dreams estate in Montecito, CA
                </strong>
                .
              </p>
              <p>
                Your ticket is more than an entry to an unforgettable evening
                of music — it is a direct investment in the mental wellness and
                wellbeing of the First Responders who protect our communities,
                our families, and our way of life. Thank you for standing with
                those who stand for all of us.
              </p>
              <p>
                One805LIVE! is produced to the highest standard under the
                direction of Executive Producer &amp; One805 CEO{" "}
                <strong className="text-white font-semibold">
                  Kirsten Cavendish Weston-Smith
                </strong>
                . Supported by a team of industry leaders, including Music
                Supervisor{" "}
                <strong className="text-white font-semibold">
                  Alan Parsons, OBE
                </strong>{" "}
                and Mick Treadwell, lead staging producer for Live Nation Las
                Vegas.
              </p>
              <p className="text-white/50 text-sm">
                For questions, please contact{" "}
                <a
                  href="mailto:one805@post.com"
                  className="text-gold-400 hover:underline"
                >
                  one805@post.com
                </a>
              </p>
            </div>
          </div>

          {/* Right: stats + image */}
          <div className="space-y-6">
            {/* Stat cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "$8M+", label: "Raised to Date" },
                { value: "8B", label: "Global Media Impressions" },
                { value: "30%", label: "Tickets to First Responders" },
                { value: "2018", label: "Founded After Montecito Mudslides" },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="bg-navy-800/60 border border-white/10 rounded-2xl p-5"
                >
                  <div className="font-display text-3xl font-bold text-gold-400 mb-1">
                    {value}
                  </div>
                  <div className="text-white/50 text-xs leading-snug">{label}</div>
                </div>
              ))}
            </div>

            {/* Photo */}
            <div className="relative rounded-2xl overflow-hidden aspect-[16/9]">
              <img
                src="https://cdn.prod.website-files.com/6971129e5006a691e2ea93c8/699627d593bfdda90b88092e_Overhead%20Shot%20One805LIVE!%202025%20(2).avif"
                alt="Aerial view of One805LIVE! 2025 event"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-xs font-mono text-white/60 uppercase tracking-widest">
                One805LIVE! 2025 — Sold Out
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
