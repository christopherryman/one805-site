"use client";
import { useState } from "react";
import emailjs from "emailjs-com";
// ─── Ticket data ──────────────────────────────────────────────────────────────
const ticketTiers = [
  // General Admission
  {
    category: "General Admission",
    color: "from-slate-700/40 to-slate-800/40",
    accent: "#94a3b8",
    tickets: [
      {
        name: "General Admission",
        price: "$500",
        description:
          "Your standard entry ticket that gets you into the event. All ticket sales directly support mental health and wellbeing programs for local First Responders.",
        includes: [
          "Event entry both nights",
          "Access to GA viewing area",
          "Access to food & beverage vendors",
          "Direct support for First Responders",
        ],
        note: "Additional food & beverages purchased separately at the event.",
      },
    ],
  },
  // VIP Individual
  {
    category: "VIP Tickets",
    color: "from-blue-900/40 to-indigo-900/40",
    accent: "#6366f1",
    tickets: [
      {
        name: "Individual VIP",
        price: "$1000",
        description:
          "Elevated experience with premium viewing and added comfort. Each VIP ticket priced at $1000 includes a $950 tax-deductible amount.",
        includes: [
          "Premium VIP viewing area",
          "Dedicated VIP entrance",
          "$950 tax-deductible per ticket",
          "Enhanced event experience",
        ],
        note: "$950 of ticket price is tax-deductible.",
        badge: "Most Popular",
      },
    ],
  },
  // VIP Tables
  {
    category: "VIP Tables",
    color: "from-violet-900/40 to-purple-900/40",
    accent: "#a855f7",
    tickets: [
      {
        name: "Velvet Rope Table",
        price: "Contact Us",
        description:
          "Premium seating in the Velvet Rope section — an exclusive area right at the heart of the action for an unforgettable night.",
        includes: [
          "Velvet Rope section seating",
          "Dedicated table host",
          "Priority entry",
          "Premium sightlines to the stage",
        ],
      },
      {
        name: "Club VIP Table",
        price: "Contact Us",
        description:
          "Club-level VIP table seating for groups seeking premium viewing areas and an elevated social atmosphere.",
        includes: [
          "Club VIP section seating",
          "Group table for your party",
          "Dedicated entry lane",
          "Premium experience",
        ],
      },
      {
        name: "High Top Table",
        price: "Contact Us",
        description:
          "High Top tables for those seeking a premium standing/perching viewing experience in a dedicated VIP zone.",
        includes: [
          "High Top table reservation",
          "VIP zone access",
          "Great stage views",
          "Comfortable social setting",
        ],
      },
    ],
  },
  // Exclusive Cabanas
  {
    category: "Exclusive Cabanas",
    color: "from-amber-900/40 to-yellow-900/30",
    accent: "#f5c842",
    tickets: [
      {
        name: "Rockstar Cabana",
        price: "Contact Us",
        description:
          "Private cabana space with premium, elevated amenities for you and your party. The entry-level of our exclusive cabana offerings.",
        includes: [
          "Private cabana space",
          "Premium amenities",
          "Dedicated cabana service",
          "Exclusive Cabana area access",
        ],
      },
      {
        name: "Superstar Cabana",
        price: "Contact Us",
        description:
          "An elevated private cabana experience with enhanced amenities and premium positioning for you and your guests.",
        includes: [
          "Premium private cabana",
          "Enhanced amenities package",
          "Priority cabana service",
          "Exclusive event positioning",
        ],
        badge: "Premium",
      },
      {
        name: "Celebrity Cabana",
        price: "Contact Us",
        description:
          "The pinnacle of the One805LIVE! experience — a top-tier private cabana with the finest amenities and the most exclusive positioning.",
        includes: [
          "Top-tier private cabana",
          "Finest amenities package",
          "VIP concierge service",
          "Best-in-venue positioning",
        ],
        badge: "Exclusive",
      },
    ],
  },
  // Add-Ons
  {
    category: "Add-Ons",
    color: "from-teal-900/40 to-cyan-900/40",
    accent: "#2dd4bf",
    tickets: [
      {
        name: "Polo Field Parking Pass",
        price: "Contact Us",
        description:
          "Reserved parking in the Polo Field lot — convenient, on-site parking for a seamless arrival and departure.",
        includes: [
          "Reserved Polo Field parking",
          "On-site convenience",
          "Easy venue access",
        ],
      },
      {
        name: "Sponsor a First Responder",
        price: "Contact Us",
        description:
          "Cover a First Responder's attendance and ensure they fully enjoy the event. A meaningful way to give back to those who protect us.",
        includes: [
          "Cover a First Responder's ticket",
          "Direct community impact",
          "Recognition of your generosity",
          "Tax-deductible contribution",
        ],
        badge: "Give Back",
      },
    ],
  },
];

// ─── Modal ────────────────────────────────────────────────────────────────────
function ReserveModal({ ticket, onClose }) {
  const [form, setForm] = useState({
  name: "",
  email: "",
  phone: "",
  qty: 1,
});
  const handleSubmit = (e) => {
  e.preventDefault();

  if (!form.name || !form.email || !form.phone) {
    alert("Please fill all required fields");
    return;
  }

  const templateParams = {
    name: form.name,
    email: form.email,
    phone: form.phone,
    ticket: ticket.name,
    qty: form.qty,
  };

  emailjs
    .send(
      "service_kv98w6t",
      "template_trh27bq",
      templateParams,
      "LuxcVAh8BqJaTahBq"
    )
    .then(() => {
      window.location.href = "/thank-you";
    })
    .catch((error) => {
      console.error(error);
      alert("Failed to send reservation. Try again.");
    });
};

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-navy-900 border border-white/10 rounded-3xl p-8 w-full max-w-md shadow-2xl">
        
          <>
            <div className="flex justify-between items-start mb-6">
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-gold-400/70 mb-1">
                  Reserve Your Spot
                </p>
                <h3 className="font-display text-xl font-bold text-white">
                  {ticket.name}
                </h3>
                <p className="text-gold-400 font-semibold mt-1">{ticket.price}</p>
              </div>
              <button
                onClick={onClose}
                className="text-white/40 hover:text-white text-xl leading-none"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-white/50 mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-navy-800 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-gold-400/50 transition-colors"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-white/50 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-navy-800 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-gold-400/50 transition-colors"
                  placeholder="you@example.com"
                />
              </div><div>
  <label className="block text-xs font-mono uppercase tracking-wider text-white/50 mb-1.5">
    Phone Number
  </label>
  <input
    type="tel"
    required
    value={form.phone || ""}
    onChange={(e) => setForm({ ...form, phone: e.target.value })}
    className="w-full bg-navy-800 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-gold-400/50 transition-colors"
    placeholder="e.g. +12346789000"
  />
</div>
              {ticket.price !== "Contact Us" && (
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-white/50 mb-1.5">
                    Quantity
                  </label>
                  <select
                    value={form.qty}
                    onChange={(e) =>
                      setForm({ ...form, qty: Number(e.target.value) })
                    }
                    className="w-full bg-navy-800 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-gold-400/50 transition-colors"
                  >
                    {[1, 2, 3, 4, 5, 6].map((n) => (
                      <option key={n} value={n}>
                        {n} ticket{n > 1 ? "s" : ""}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 text-xs text-amber-200/70">
                <strong className="text-amber-300">Note:</strong> This is a
                reservation request. Our team will contact you to confirm and
                complete your order. All sales are final.
              </div>

              <div className="flex flex-col gap-2">
  <button className="bg-black text-white px-4 py-2 rounded">
    Reserve My Ticket
  </button>

  <button
  className="bg-green-500 text-white px-4 py-2 rounded"
  onClick={() => {
    const message = `Hi One805.. It's ${form.name}.

I want to purchase ${form.qty} ticket(s) of ${ticket.name} (${ticket.price}).
I'm ready to make the payment now. Thank you.`;

    window.open(
      `https://wa.me/12515142651?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  }}
>
  Purchase via WhatsApp
</button>
</div>
            </form>
          </>
        
      </div>
    </div>
  );
}

// ─── Ticket Card ──────────────────────────────────────────────────────────────
function TicketCard({ ticket, accent, onReserve }) {
  return (
    <div className="group relative bg-navy-900/60 border border-white/10 rounded-2xl p-6 flex flex-col hover:border-white/20 transition-all hover:-translate-y-1 duration-300">
      {/* Badge */}
      {ticket.badge && (
        <span
          className="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider"
          style={{
            background: `${accent}22`,
            color: accent,
            border: `1px solid ${accent}44`,
          }}
        >
          {ticket.badge}
        </span>
      )}

      {/* Price dot */}
      <div
        className="w-2 h-2 rounded-full mb-4"
        style={{ background: accent }}
      />

      <h3 className="font-display text-xl font-bold text-white mb-1">
        {ticket.name}
      </h3>
      <div
        className="text-2xl font-bold mb-3"
        style={{ color: accent }}
      >
        {ticket.price}
      </div>

      <p className="text-white/55 text-sm leading-relaxed mb-5 flex-1">
        {ticket.description}
      </p>

      {/* Includes */}
      <ul className="space-y-2 mb-6">
        {ticket.includes.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-white/70">
            <span style={{ color: accent }} className="mt-0.5 shrink-0">✓</span>
            {item}
          </li>
        ))}
      </ul>

      {ticket.note && (
        <p className="text-white/35 text-xs mb-5 italic">{ticket.note}</p>
      )}

      <button
        onClick={() => onReserve(ticket)}
        className="w-full py-3 rounded-xl text-sm font-semibold transition-all hover:scale-105"
        style={{
          background: `${accent}22`,
          color: accent,
          border: `1px solid ${accent}44`,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = accent;
          e.currentTarget.style.color = "#050a18";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = `${accent}22`;
          e.currentTarget.style.color = accent;
        }}
      >
        Reserve My Ticket
      </button>
    </div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────
export default function Tickets() {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <section id="tickets" className="py-24 md:py-32 bg-navy-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14">
          <p className="text-xs font-mono uppercase tracking-widest text-gold-400/70 mb-4">
            One805LIVE! 2026
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Tickets Available for{" "}
            <span className="text-gold-400 italic">One805Live! 2026</span>
          </h2>
          <div className="max-w-3xl space-y-3 text-white/60 text-base leading-relaxed">
            <p>
              The One805 Live! 2026 ticket offerings start with General
              Admission — your standard entry ticket that gets you into the
              event. All ticket sales directly support the mental health and
              wellbeing programs for local First Responders, making your
              admission both an entry and a community contribution.
            </p>
            <p>
              For an elevated experience, there are several VIP options designed
              to enhance your time at the event — Individual VIP Tickets as well
              as a variety of mix &amp; mingle options, from VIP Tables, such as
              Velvet Rope seating, Club VIP Tables, and High Top tables, ideal
              for guests seeking premium viewing areas and added comfort.
            </p>
          </div>
        </div>

        {/* Ticket categories */}
        <div className="space-y-14">
          {ticketTiers.map((tier) => (
            <div key={tier.category}>
              {/* Category header */}
              <div className="flex items-center gap-4 mb-6">
                <h3 className="text-lg font-semibold text-white font-display">
                  {tier.category}
                </h3>
                <div className="flex-1 h-px bg-white/10" />
              </div>

              {/* Cards */}
              <div
                className={`grid gap-5 ${
                  tier.tickets.length === 1
                    ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                    : tier.tickets.length === 2
                    ? "grid-cols-1 md:grid-cols-2"
                    : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                }`}
              >
                {tier.tickets.map((ticket) => (
                  <TicketCard
                    key={ticket.name}
                    ticket={ticket}
                    accent={tier.accent}
                    onReserve={setActiveModal}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Fine print */}
        <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/10">
          <p className="text-white/45 text-sm text-center leading-relaxed">
            <strong className="text-white/60">All sales are final.</strong>{" "}
            Additional food and beverages must be purchased separately at the
            event. No donor dollars fund One805 events — generous sponsors and
            ticket sales cover all event costs.
          </p>
        </div>
      </div>

      {/* Modal */}
      {activeModal && (
        <ReserveModal ticket={activeModal} onClose={() => setActiveModal(null)} />
      )}
    </section>
  );
}
