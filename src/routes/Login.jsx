import React from "react";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";
import SignIn from "../components/shared/SignIn";

const Login = () => {
  return (
    <>
      <header className="relative mt-[65px]">
        <Navbar />
      </header>

      <main>
        <SignIn />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Login;
