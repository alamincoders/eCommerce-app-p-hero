import React from "react";
import BannerOffer from "../components/screens/BannerOffer";
import EarnMoneyBanner from "../components/screens/EarnMoneyBanner";
import MarketingBanner from "../components/screens/MarketingBanner";
import Testimonials from "../components/screens/Testimonials";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";

const About = () => {
  return (
    <>
      <header className="relative mt-[65px]">
        <Navbar />
      </header>

      <main className="container bg-gray-50/50 pb-5 rounded-3xl mx-auto">
        <EarnMoneyBanner />
        <BannerOffer />
        <MarketingBanner />
        <Testimonials />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default About;
