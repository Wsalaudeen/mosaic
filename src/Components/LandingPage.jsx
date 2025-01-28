import Explore from "./Explore";
import Footer from "./generalComponent/Footer/Footer";
import Navbar from "./generalComponent/Navbar/Navbar";
import Hero from "./Hero/Hero";
import HeroSection from "./HeroSection/HeroSection";
import Testimonial from "./Testimonial";
export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <HeroSection />
      <Explore />
      <Testimonial />
      <Footer />
    </>
  );
}
