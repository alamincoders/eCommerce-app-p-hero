import Aos from "aos";
import { useEffect, useState } from "react";
import BannerOffer from "../components/screens/BannerOffer";
import BannerOffer2 from "../components/screens/BannerOffer2";
import BestSelling from "../components/screens/BestSelling";
import CategoryProduct from "../components/screens/CategoryProduct";
import ChosenSection from "../components/screens/ChosenSection";
import Discover from "../components/screens/Discover";
import EarnMoneyBanner from "../components/screens/EarnMoneyBanner";
import HeroSection from "../components/screens/HeroSection";
import MarketingBanner from "../components/screens/MarketingBanner";
import NewArrivals from "../components/screens/NewArrivals";
import Products from "../components/screens/Products";
import ScrollToTop from "../components/screens/ScrollToTop";
import StepsLine from "../components/screens/StepsLine";
import Testimonials from "../components/screens/Testimonials";
import UiBlogs from "../components/screens/UiBlogs";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";
import Spinner from "../components/shared/Spinner";
import "../styles/global.css";

const Root = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    Aos.init();
  }, []);

  if (loading) {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }

  return loading ? (
    <Spinner />
  ) : (
    <div>
      <header className="relative mt-[65px]">
        <Navbar />
      </header>

      {/* main */}

      <main>
        <HeroSection />
        <Discover />
        <NewArrivals />
        <StepsLine />
        <EarnMoneyBanner />
        <CategoryProduct />
        <BestSelling />
        <BannerOffer />
        <ChosenSection />
        <MarketingBanner />
        <BannerOffer2 />
        <Products />
        <UiBlogs />
        <Testimonials />
      </main>

      {/* footer */}

      <footer>
        <Footer />
      </footer>
      <ScrollToTop />
    </div>
  );
};

export default Root;
