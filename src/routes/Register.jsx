import React from "react";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";
import SignUp from "../components/shared/SignUp";

const Register = () => {
  return (
    <>
      <header className="relative mt-[65px]">
        <Navbar />
      </header>

      <main>
        <SignUp />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Register;
