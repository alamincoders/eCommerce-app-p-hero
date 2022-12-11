/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <>
      {" "}
      <nav>
        <div class="wrapper">
          <div class="logo">
            <a href="#">
              <img src={logo} alt="" />
            </a>
          </div>
          <input type="radio" name="slide" id="menu_btn" />
          <input type="radio" name="slide" id="cancel_btn" />

          <ul class="nav_links">
            <label for="cancel_btn" class="btn cancel_btn">
              <i class="fas fa-times"></i>
            </label>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#" class="desktop_item">
                Products
              </a>
              <input type="checkbox" id="showMega" />
              <label for="showMega" class="mobile_item">
                Products
              </label>
              <div class="mega_box">
                <div class="content">
                  {/* <!--  --> */}
                  <div class="row img_row">
                    <header>Category</header>
                    <div class="w-full rounded h-[200px]">
                      <img
                        src="https://cdn.searchenginejournal.com/wp-content/uploads/2021/01/category-pages-featured-image-5ffbf8cca689f.png"
                        alt=""
                        className="w-full h-full object-fill object-center rounded drop-shadow-lg"
                      />
                    </div>
                  </div>
                  {/* <!--  --> */}
                  <div class="row">
                    <header>Design Services</header>
                    <ul class="mega_links first_links">
                      <li>
                        <a href="#">Graphics</a>
                      </li>
                      <li>
                        <a href="#">Web Design</a>
                      </li>
                      <li>
                        <a href="#">Architecture</a>
                      </li>
                      <li>
                        <a href="#">Ui / Ux</a>
                      </li>
                    </ul>
                  </div>
                  {/* <!--  --> */}
                  {/* <!--  --> */}
                  <div class="row">
                    <header>Product Services</header>
                    <ul class="mega_links">
                      <li>
                        <a href="#">Graphics</a>
                      </li>
                      <li>
                        <a href="#">Web Design</a>
                      </li>
                      <li>
                        <a href="#">Architecture</a>
                      </li>
                      <li>
                        <a href="#">Ui / Ux</a>
                      </li>
                    </ul>
                  </div>
                  {/* <!--  --> */}
                  {/* {/* <!--  --> */}
                  <div class="row">
                    <header>SEO Services</header>
                    <ul class="mega_links">
                      <li>
                        <a href="#">Graphics</a>
                      </li>
                      <li>
                        <a href="#">Web Design</a>
                      </li>
                      <li>
                        <a href="#">Architecture</a>
                      </li>
                      <li>
                        <a href="#">Ui / Ux</a>
                      </li>
                    </ul>
                  </div>
                  {/* {/* <!--  --> */}
                </div>
              </div>
            </li>
            {/*  */}
            <li>
              <a href="#" class="desktop_item">
                Explore
              </a>
              <input type="checkbox" id="showDrop" />
              <label for="showDrop" class="mobile_item">
                Explore
              </label>
              <ul class="drop_menu">
                <li>
                  <a href="#">Drop Menu 1</a>
                </li>
                <li>
                  <a href="#">Drop Menu 2</a>
                </li>
                <li>
                  <a href="#">Drop Menu 3</a>
                </li>
                <li>
                  <a href="#">Drop Menu 4</a>
                </li>
                <li>
                  <a href="#">Drop Menu 5</a>
                </li>
                <li>
                  <a href="#">Drop Menu 6</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Customer Care</a>
            </li>
            <li title="cart" className="ml-5 relative">
              <a href="#" className="lg:absolute top-[11px] left-0 ">
                <div class="w-3.5 h-3.5 flex items-center justify-center bg-[rgb(14,165,233)] absolute top-1.5 right-1.5 rounded-full text-[10px] leading-none text-white font-medium">
                  <span class="mt-[1px]">3</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </a>
            </li>{" "}
            <li title="login/register" className="relative">
              <a href="#" className="lg:absolute top-[11px] left-10 ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </a>
            </li>
          </ul>

          <label for="menu_btn" class="btn menu_btn">
            <i class="fas fa-bars"></i>
          </label>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
