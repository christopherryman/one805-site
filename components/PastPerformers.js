const performers = [
  { name: "Maroon 5", year: "2024" },
  { name: "Good Charlotte", year: "2024" },
  { name: "The Fray", year: "2023" },
  { name: "John Fogerty", year: "2023" },
  { name: "Pink", year: "2022" },
  { name: "Katy Perry", year: "2022" },
  { name: "Michael McDonald", year: "2021" },
  { name: "Alan Parsons", year: "2021" },
  { name: "Danny Seraphine", year: "2021" },
  { name: "Robby Krieger", year: "2021" },
  { name: "Donavon Frankenreiter", year: "2025" },
  { name: "Trisha Yearwood", year: "2025" },
];

export default function PastPerformers() {
  return (
    <section className="py-24 md:py-32 bg-navy-900 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-gold-400" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-gold-400" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-gold-400" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-14">
          <p className="text-xs font-mono uppercase tracking-widest text-gold-400/70 mb-4">
            Alumni
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Past Performances
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-base">
            Each year, we bring together artists from different genres and
            generations — creating a lineup that feels both unexpected and
            special.
          </p>
        </div>

        {/* Grid of performers */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {performers.map(({ name, year }) => (
            <div
              key={name}
              className="group flex flex-col items-center justify-center text-center p-5 rounded-2xl border border-white/10 bg-navy-800/40 hover:border-gold-400/30 hover:bg-gold-400/5 transition-all duration-300"
            >
              <span className="font-display font-semibold text-white group-hover:text-gold-400 transition-colors text-lg leading-tight mb-1">
                {name}
              </span>
              <span className="text-xs font-mono text-white/30">{year}</span>
            </div>
          ))}
        </div>

        {/* 2026 preview */}
        <div className="mt-12 rounded-3xl border border-gold-400/20 bg-gold-400/5 p-8 md:p-12 text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-gold-400/70 mb-4">
            One805LIVE! 2026 Lineup
          </p>
          <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">
            Pat Benatar &amp; Neil Giraldo<br />
            <span className="text-white/60 font-normal text-2xl">+</span><br />
            George Thorogood<br />
            <span className="text-white/60 font-normal text-2xl">+</span><br />
            Kevin Costner &amp; Modern West
          </h3>
          <p className="text-white/50 text-sm mb-6 font-mono uppercase tracking-wider">
            More Artists Coming Soon
          </p>
          <a
            href="#tickets"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gold-400 text-navy-950 font-semibold hover:bg-gold-500 transition-all hover:scale-105"
          >
            Get Your Tickets <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
