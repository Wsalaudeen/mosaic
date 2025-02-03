import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Explore from "./Explore";
import Footer from "./generalComponent/Footer/Footer";
import Navbar from "./generalComponent/Navbar/Navbar";
import Hero from "./Hero/Hero";
import HeroSection from "./HeroSection/HeroSection";
import MakeUnique from "./MakeUnique";
import Testimonial from "./Testimonial";
import TopRated from "./TopRated";
export default function LandingPage() {
  return (
    <>
      <main className="bg-slate-100">
        <Navbar />
        <Hero />
        <HeroSection />
        <MakeUnique />
        <TopRated />
        <Explore />
        <Testimonial />
        <Footer />
      </main>
    </>
  );
}
