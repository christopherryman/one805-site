export default function Support() {
  return (
    <section className="py-24 md:py-32 bg-navy-950 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-ember-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left: copy */}
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-gold-400/70 mb-4">
              Support Our Mission
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Support Our{" "}
              <span className="text-ember-500 italic">First Responders</span>
            </h2>

            <p className="text-white/60 text-base leading-relaxed mb-5">
              No donor dollars fund One805 events. Generous Sponsors and ticket
              sales cover all event costs, while donors fund mental wellness
              support, essential equipment, and resources for Santa Barbara
              County's First Responders.
            </p>

            <p className="text-white/60 text-base leading-relaxed mb-8">
              Your generosity helps take care of those who take care of us every
              day, providing essential mental wellness support and equipment for
              our First Responders, their families, and our community. Your gift
              truly makes a meaningful difference.
            </p>

            {/* Mission points */}
            <ul className="space-y-4 mb-10">
              {[
                {
                  icon: "🧠",
                  title: "Mental Wellness Programs",
                  desc: "Confidential counseling and trauma recovery for those who face unimaginable challenges daily.",
                },
                {
                  icon: "🛡️",
                  title: "Essential Equipment",
                  desc: "From Jaws of Life to defibrillators — ensuring First Responders have what they need.",
                },
                {
                  icon: "🏛️",
                  title: "Endowment Fund",
                  desc: "A permanent fund to guarantee sustained mental wellness support for generations to come.",
                },
              ].map(({ icon, title, desc }) => (
                <li key={title} className="flex gap-4">
                  <span className="text-2xl shrink-0 mt-0.5">{icon}</span>
                  <div>
                    <p className="text-white font-semibold text-sm">{title}</p>
                    <p className="text-white/50 text-sm mt-0.5">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <a
                href="#tickets"
                className="px-8 py-4 rounded-full bg-gold-400 text-navy-950 font-semibold hover:bg-gold-500 transition-all hover:scale-105 shadow-lg shadow-gold-400/20"
              >
                Purchase Tickets
              </a>
              <a
                href="https://#/transparency"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 rounded-full border border-white/20 text-white font-medium hover:bg-white/10 transition-all"
              >
                Financials &amp; Transparency
              </a>
            </div>
          </div>

          {/* Right: images stacked */}
          <div className="relative space-y-3">
            <div className="rounded-2xl overflow-hidden aspect-[16/10]">
              <img
                src="https://cdn.prod.website-files.com/6971129e5006a691e2ea93c8/69a0e4de0612ce62d34f467d_579474271_1188565150130814_8277013685849350132_n%20copy.jpg"
                alt="One805 community event"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[16/10]">
              <img
                src="https://cdn.prod.website-files.com/6971129e5006a691e2ea93c8/6985a06dd031459649164f54_wildfire.jpg"
                alt="First Responders in action"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 to-transparent rounded-2xl" />
            </div>

            {/* Floating stat badge */}
            <div className="absolute -bottom-4 -left-4 bg-navy-800 border border-gold-400/30 rounded-2xl px-5 py-4 shadow-xl">
              <div className="font-display text-3xl font-bold text-gold-400">
                $8M+
              </div>
              <div className="text-white/50 text-xs mt-0.5">Raised to Date</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
