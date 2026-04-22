# One805LIVE! 2026 — Ticket Website

A modern Next.js replica of the One805LIVE! 2026 ticketing page — Rock for First Responders.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed ([download here](https://nodejs.org))

### Installation

```bash
# 1. Navigate into the project folder
cd one805live-2026

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Then open **http://localhost:3000** in your browser.

---

## 🗂️ Project Structure

```
one805/
├── app/
│   ├── globals.css       # Global styles, fonts, animations
│   ├── layout.js         # Root HTML layout + metadata
│   └── page.js           # Main page — assembles all sections
│
├── components/
│   ├── Navbar.js         # Sticky nav with mobile hamburger menu
│   ├── Hero.js           # Full-screen hero + live countdown timer
│   ├── Ticker.js         # Scrolling marquee stats banner
│   ├── About.js          # Event description + stat cards
│   ├── Tickets.js        # All ticket tiers + Reserve My Ticket modal
│   ├── Gallery.js        # Photo grid from past events
│   ├── PastPerformers.js # Artist alumni + 2026 lineup
│   ├── Support.js        # Mission & donation CTA section
│   ├── Newsletter.js     # Email signup form
│   └── Footer.js         # Site footer with links
│
├── public/               # Static assets (add images here if needed)
├── next.config.js        # Next.js config (allows CDN images)
├── tailwind.config.js    # Custom colors, fonts, animations
└── package.json          # Dependencies
```

---

## 🎨 Design System

| Token | Value | Use |
|-------|-------|-----|
| `navy-950` | `#050a18` | Page background |
| `navy-900` | `#0a1128` | Card / section backgrounds |
| `gold-400` | `#f5c842` | Primary accent, CTAs |
| `ember-500` | `#e85d26` | Badges, highlights |
| `Playfair Display` | serif | Headings |
| `DM Sans` | sans-serif | Body text |
| `DM Mono` | monospace | Labels, captions |

---

## 🎟️ Ticket Tiers

| Category | Tickets |
|----------|---------|
| General Admission | GA ($500) |
| VIP | Individual VIP ($100) |
| VIP Tables | Velvet Rope, Club VIP, High Top |
| Exclusive Cabanas | Rockstar, Superstar, Celebrity |
| Add-Ons | Polo Field Parking, Sponsor a First Responder |

Each ticket card has a **"Reserve My Ticket"** button that opens a modal form — no payment system included.

---

## 📦 Build for Production

```bash
npm run build
npm start
```

---

## 🔧 Customization Tips

- **Change ticket prices**: Edit the `ticketTiers` array in `components/Tickets.js`
- **Update countdown date**: Change the date string in `components/Hero.js` → `useCountdown("2026-09-25T18:00:00")`
- **Add/remove artists**: Edit the `performers` array in `components/PastPerformers.js`
- **Update colors**: Modify `tailwind.config.js` under `theme.extend.colors`

---

Built with Next.js 14, Tailwind CSS, and ❤️ for First Responders.
