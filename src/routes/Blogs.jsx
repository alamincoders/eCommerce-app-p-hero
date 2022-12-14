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
        <div className=" mt-16 lg:mt-32 space-y-4 container">
          <h2 className="text-4xl font-semibold">Our Blogs</h2>
          <p className="text-[#6B7294]">
            We not only help you design exceptional products, but also make it easy for you <br /> to share your designs with more like-minded people.
          </p>
          <hr />
        </div>
        <Blog />
        <Pagination startPage="1" endPage="4" totalPage="58" />
      </main>

      <footer>
        <Footer />{" "}
      </footer>
    </>
  );
};

export default Blogs;
