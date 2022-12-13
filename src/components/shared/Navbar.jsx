/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  const [searchClick, setSearchClick] = useState(false);

  const handleClick = () => {
    setSearchClick(false);
    Swal.fire("Thanks for searching!", "Unfortunately, the following items from your search are out of stock.", "success");
  };
  return (
    <>
      {" "}
      <nav>
        <div className="wrapper">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <input type="radio" name="slide" id="menu_btn" />
          <input type="radio" name="slide" id="cancel_btn" />

          <ul className="nav_links">
            <label htmlFor="cancel_btn" className="btn cancel_btn">
              <i className="fas fa-times"></i>
            </label>
            {searchClick && (
              <>
                <div className="flex absolute top-[65px] left-12 w-full h-[200px] justify-center items-center bg-white px-24 rounded-md shadow">
                  <input
                    type="text"
                    className="bg-gray-100 px-5 w-full focus:outline-none !block drop-shadow rounded-lg"
                    placeholder="Search item..."
                  />
                  <button type="submit" onClick={handleClick} className="relative top-0 -left-16 bg-slate-300 p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>
                  </button>
                  <div onClick={() => setSearchClick(false)} className="relative -top-16 cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                </div>
              </>
            )}
            {!searchClick && (
              <>
                {" "}
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <a href="#" className="desktop_item">
                    Products{" "}
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4 inline-block"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </span>{" "}
                  </a>
                  <input type="checkbox" id="showMega" />
                  <label htmlFor="showMega" className="mobile_item">
                    Products{" "}
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4 inline-block"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </span>{" "}
                  </label>
                  <div className="mega_box">
                    <div className="content">
                      {/* <!--  --> */}
                      <div className="row img_row">
                        <header>Category</header>
                        <div className="w-full rounded h-[200px]">
                          <img
                            src="https://cdn.searchenginejournal.com/wp-content/uploads/2021/01/category-pages-featured-image-5ffbf8cca689f.png"
                            alt=""
                            className="w-full h-full object-fill object-center rounded drop-shadow-lg"
                          />
                        </div>
                      </div>
                      {/* <!--  --> */}
                      <div className="row">
                        <header>Clothing</header>
                        <ul className="mega_links first_links">
                          <li>
                            <a href="#">Activewear</a>
                          </li>
                          <li>
                            <a href="#">Coats & Jackets</a>
                          </li>
                          <li>
                            <a href="#">Sleep & Lounge</a>
                          </li>
                          <li>
                            <a href="#">Sweatshirts</a>
                          </li>
                        </ul>
                      </div>
                      {/* <!--  --> */}
                      {/* <!--  --> */}
                      <div className="row">
                        <header>Accessories</header>
                        <ul className="mega_links">
                          <li>
                            <a href="#">Sunglasses</a>
                          </li>
                          <li>
                            <a href="#">Gloves</a>
                          </li>
                          <li>
                            <a href="#">Scarves</a>
                          </li>
                          <li>
                            <a href="#">Wallets</a>
                          </li>
                        </ul>
                      </div>
                      {/* <!--  --> */}
                      {/* {/* <!--  --> */}
                      <div className="row">
                        <header>Shoes</header>
                        <ul className="mega_links">
                          <li>
                            <a href="#">Boots</a>
                          </li>
                          <li>
                            <a href="#">Loafers</a>
                          </li>
                          <li>
                            <a href="#">Slip-Ons</a>
                          </li>
                          <li>
                            <a href="#">Slippers</a>
                          </li>{" "}
                          <li>
                            <a href="#">Sneakers</a>
                          </li>
                        </ul>
                      </div>
                      {/* {/* <!--  --> */}
                    </div>
                  </div>
                </li>
                {/*  */}
                <li>
                  <a href="#" className="desktop_item">
                    Explore{" "}
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4 inline-block"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </span>{" "}
                  </a>
                  <input type="checkbox" id="showDrop" />
                  <label htmlFor="showDrop" className="mobile_item">
                    Explore{" "}
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4 inline-block"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </span>{" "}
                  </label>
                  <ul className="drop_menu">
                    <li>
                      <a href="#">Category Page </a>
                    </li>
                    <li>
                      <a href="#">Product Details</a>
                    </li>
                    <li>
                      <a href="#">Cart Page</a>
                    </li>
                    <li>
                      <a href="#">Checkout Page</a>
                    </li>{" "}
                    <li>
                      <Link to="/payment">Payment Page</Link>
                    </li>
                    <li>
                      <a href="#">Account</a>
                    </li>
                    <li>
                      <Link to="/blogs">Blogs</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/contact">Contact us</Link>
                </li>{" "}
                <li className="block lg:hidden">
                  <Link to="/login">Login/Register</Link>
                </li>
                <li onClick={() => setSearchClick(true)} title="search" className="relative ml-20 hidden lg:block">
                  <a href="#" className="lg:absolute top-[12px] -left-5 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>
                  </a>
                </li>{" "}
                <li title="cart" className="ml-5 relative hidden lg:block">
                  <Link className="lg:absolute top-[11px] left-0 " to="/cart">
                    <div className="w-3.5 h-3.5 flex items-center justify-center bg-[rgb(14,165,233)] absolute top-1.5 right-1.5 rounded-full text-[10px] leading-none text-white font-medium">
                      <span className="mt-[1px]">3</span>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                  </Link>
                </li>{" "}
                <li title="login/register" className="relative hidden lg:block">
                  <Link className="lg:absolute top-[11px] left-10 " to="/login">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>
                  </Link>
                </li>
              </>
            )}
          </ul>

          <label htmlFor="menu_btn" className="btn menu_btn">
            <i className="fas fa-bars"></i>
          </label>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
