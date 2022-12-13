import React from "react";
import Pay from "../components/screens/Pay";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";

const Payment = () => {
  return (
    <>
      <header className="relative mt-[65px]">
        <Navbar />
      </header>

      <main>
        <Pay />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Payment;
