import "../styles/global.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Discover from "../components/Discover";
import NewArrivals from "../components/NewArrivals";
import StepsLine from "../components/StepsLine";
import EarnMoneyBanner from "../components/EarnMoneyBanner";
import CategoryProduct from "../components/CategoryProduct";
import BestSelling from "../components/BestSelling";
import BannerOffer from "../components/BannerOffer";
import ChosenSection from "../components/ChosenSection";
import MarketingBanner from "../components/MarketingBanner";
import BannerOffer2 from "../components/BannerOffer2";
import Products from "../components/Products";

const Root = () => {
  return (
    <>
      <header>
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
      </main>

      {/* footer */}

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Root;
