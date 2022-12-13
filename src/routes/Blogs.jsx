import React from "react";
import Blog from "../components/screens/Blog";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";
import Pagination from "../components/screens/Pagination";

const Blogs = () => {
  return (
    <>
      <header className="relative mt-[65px]">
        <Navbar />
      </header>
      <main>
        <Blog />
        <Pagination />
      </main>

      <footer>
        <Footer />{" "}
      </footer>
    </>
  );
};

export default Blogs;
