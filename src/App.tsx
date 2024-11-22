import "./App.css";
import Hero from "./pages/Hero";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Testimonials from "./pages/Testimonials";

import Footer from "./pages/Footer";

function App() {
  return (
    <div className="min-h-screen bg-wood-pattern text-wood-dark">
      <Hero />
      <Services />
      <Gallery />
      <Testimonials />

      <Footer />
    </div>
  );
}

export default App;
