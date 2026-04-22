import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Ticker from "../components/Ticker";
import About from "../components/About";
import Tickets from "../components/Tickets";
import Gallery from "../components/Gallery";
import PastPerformers from "../components/PastPerformers";
import Support from "../components/Support";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <Ticker />
      <About />
      <Tickets />
      <Gallery />
      <PastPerformers />
      <Support />
      <Newsletter />
      <Footer />
    </main>
  );
}
