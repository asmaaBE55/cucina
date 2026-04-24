import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import useReveal from "./hooks/useReveal";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import MenuSection from "./sections/MenuSection";
import Reservation from "./sections/Reservation";
import Reviews from "./sections/Reviews";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import FloatingActions from "./sections/FloatingActions";

const Home = () => {
  useReveal();
  return (
    <main data-testid="home-page" className="bg-[#FDFBF7]">
      <Navbar />
      <Hero />
      <About />
      <MenuSection />
      <Reservation />
      <Reviews />
      <Contact />
      <Footer />
      <FloatingActions />
    </main>
  );
};

function App() {
  return (
    <div className="App">
      <Toaster position="top-center" richColors />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
