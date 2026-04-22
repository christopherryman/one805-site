export default function Ticker() {
  const items = [
    "$8 Million Raised to Date",
    "8 Billion Global Media Impressions",
    "30% of Tickets Donated to First Responders",
    "Supporting Santa Barbara County Since 2018",
    "100% of Donor Funds Support First Responders",
    "Sold-Out Events Year After Year",
  ];

  // Duplicate for seamless loop
  const doubled = [...items, ...items];

  return (
    <div className="ticker-wrapper relative overflow-hidden bg-navy-800 border-y border-white/5 py-3">
      {/* Left / right fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-navy-800 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-navy-800 to-transparent z-10 pointer-events-none" />

      <div className="ticker-inner flex animate-ticker whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-4 px-6 text-sm font-mono text-white/50 uppercase tracking-wider shrink-0"
          >
            <span className="text-gold-400 text-lg">★</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
