import "./globals.css";

export const metadata = {
  title: "One805LIVE! 2026 | Rock for First Responders",
  description:
    "One805LIVE! 2026 — Two-day benefit concert featuring Pat Benatar & Neil Giraldo and George Thorogood. September 25–26, 2026 at Kevin Costner's oceanside estate in Montecito, CA.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
