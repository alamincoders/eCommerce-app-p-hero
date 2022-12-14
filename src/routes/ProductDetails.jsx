import React from "react";
import { useParams } from "react-router-dom";
import BannerOffer from "../components/screens/BannerOffer";
import BestSelling from "../components/screens/BestSelling";
import DetailsOfProduct from "../components/screens/DetailsOfProduct";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";

const ProductDetails = () => {
  const { id } = useParams();
  return (
    <>
      <header className="relative mt-[65px]">
        <Navbar />
      </header>

      <main className="container pt-10 ">
        <h2 className="text-sm text-slate-800 font-medium">Product ID : {id}sf#dghsdfgsja</h2>
        <DetailsOfProduct />
      </main>

      <footer>
        <BestSelling />
        <BannerOffer />
        <div className="mb-16"></div>
        <Footer />
      </footer>
    </>
  );
};

export default ProductDetails;
