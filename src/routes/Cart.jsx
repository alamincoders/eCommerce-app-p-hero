import React from "react";
import ProductCart from "../components/screens/ProductCart";
import Navbar from "../components/shared/Navbar";

const Cart = () => {
  return (
    <>
      <header className="relative mt-[65px]">
        <Navbar />
      </header>

      <main className="py-10 bg-[#f6f6f6]">
        <ProductCart />
      </main>
    </>
  );
};

export default Cart;
