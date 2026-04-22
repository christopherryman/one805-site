export default function Footer() {
  const navLinks = [
    { label: "News & Latest", href: "https://#/news" },
    { label: "Frontline Stories", href: "https://#/frontline-stories" },
    { label: "Our Story", href: "https://#/our-story" },
    { label: "Who We Are", href: "https://#/who-we-are" },
    { label: "Our Impact", href: "https://#/impact" },
  ];

  const supportLinks = [
    { label: "Events", href: "https://#/events" },
    { label: "Make a Donation", href: "https://#/donate" },
    { label: "Honorary Board", href: "https://#/honorary-board" },
    { label: "Transparency", href: "https://#/transparency" },
    { label: "Contact Us", href: "https://#/contact" },
  ];

  return (
    <footer className="bg-navy-950 border-t border-white/5">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="md:col-span-2">
            <a href="https://#" target="_blank" rel="noreferrer">
              <img
                src="https://cdn.prod.website-files.com/6971129e5006a691e2ea93c8/6971549fded5bf0d04108b39_logo-white.png"
                alt="One805"
                className="h-9 w-auto mb-5"
              />
            </a>
            <p className="font-display text-2xl font-bold text-white/80 mb-3 leading-snug">
              Prepare. Equip. Support.
            </p>
            <p className="text-white/45 text-sm leading-relaxed max-w-xs mb-6">
              One805 Inc. is a 501(c)(3) Public Charity. Your contribution is
              tax deductible under Internal Revenue Code (IRC) Section 170.
            </p>

            {/* Contact details */}
            <div className="space-y-2 text-sm text-white/40">
              <p>
                <span className="font-mono text-xs uppercase tracking-wider text-white/25 mr-2">EIN</span>
                83-2571437
              </p>
              <p>
                <span className="font-mono text-xs uppercase tracking-wider text-white/25 mr-2">Addr</span>
                2000 State Street, Santa Barbara, CA 93105
              </p>
              <p>
                <span className="font-mono text-xs uppercase tracking-wider text-white/25 mr-2">Email</span>
                <a
                  href="mailto:info@#"
                  className="hover:text-gold-400 transition-colors"
                >
                  info@#
                </a>
              </p>
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-white/30 mb-5">
              About
            </h4>
            <ul className="space-y-3">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white/55 text-sm hover:text-gold-400 transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-white/30 mb-5">
              Support
            </h4>
            <ul className="space-y-3">
              {supportLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white/55 text-sm hover:text-gold-400 transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA buttons */}
            <div className="mt-8 space-y-2">
              <a
                href="https://#/donate"
                target="_blank"
                rel="noreferrer"
                className="block w-full text-center px-5 py-2.5 rounded-full bg-gold-400 text-navy-950 text-sm font-semibold hover:bg-gold-500 transition-colors"
              >
                Donate
              </a>
              <a
                href="#tickets"
                className="block w-full text-center px-5 py-2.5 rounded-full border border-white/20 text-white text-sm font-medium hover:bg-white/10 transition-colors"
              >
                Tickets
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/30">
          <p>© 2025 One805. All rights reserved.</p>
          <div className="flex gap-5">
            {[
              ["Cookies", "https://#/cookie-policy"],
              ["Privacy", "https://#/privacy-policy"],
              ["Website Terms", "https://#/terms-and-conditions"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white/60 transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
