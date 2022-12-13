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
                            <Link to="/category">Activewear</Link>
                          </li>
                          <li>
                            <Link to="/category">Coats & Jackets</Link>
                          </li>
                          <li>
                            <Link to="/category">Sleep & Lounge</Link>
                          </li>
                          <li>
                            <Link to="/category">Sweatshirts</Link>
                          </li>
                        </ul>
                      </div>
                      {/* <!--  --> */}
                      {/* <!--  --> */}
                      <div className="row">
                        <header>Accessories</header>
                        <ul className="mega_links">
                          <li>
                            <Link to="/category">Sunglasses</Link>
                          </li>
                          <li>
                            <Link to="/category">Gloves</Link>
                          </li>
                          <li>
                            <Link to="/category">Scarves</Link>
                          </li>
                          <li>
                            <Link to="/category">Wallets</Link>
                          </li>
                        </ul>
                      </div>
                      {/* <!--  --> */}
                      {/* {/* <!--  --> */}
                      <div className="row">
                        <header>Shoes</header>
                        <ul className="mega_links">
                          <li>
                            <Link to="/category">Boots</Link>
                          </li>
                          <li>
                            <Link to="/category">Loafers</Link>
                          </li>
                          <li>
                            <Link to="/category">Slip-Ons</Link>
                          </li>
                          <li>
                            <Link to="/category">Slippers</Link>
                          </li>{" "}
                          <li>
                            <Link to="/category">Sneakers</Link>
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
                      <Link to="/category">Category Page </Link>
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
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path d="M22 22L20 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </a>
                </li>{" "}
                <li title="cart" className="ml-5 relative hidden lg:block">
                  <Link className="lg:absolute top-[11px] left-0 " to="/cart">
                    <div className="w-3.5 h-3.5 flex items-center justify-center bg-[rgb(14,165,233)] absolute top-1.5 right-1.5 rounded-full text-[10px] leading-none text-white font-medium">
                      <span className="mt-[1px]">3</span>
                    </div>
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2 2H3.74001C4.82001 2 5.67 2.93 5.58 4L4.75 13.96C4.61 15.59 5.89999 16.99 7.53999 16.99H18.19C19.63 16.99 20.89 15.81 21 14.38L21.54 6.88C21.66 5.22 20.4 3.87 18.73 3.87H5.82001"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M16.25 22C16.9404 22 17.5 21.4404 17.5 20.75C17.5 20.0596 16.9404 19.5 16.25 19.5C15.5596 19.5 15 20.0596 15 20.75C15 21.4404 15.5596 22 16.25 22Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M8.25 22C8.94036 22 9.5 21.4404 9.5 20.75C9.5 20.0596 8.94036 19.5 8.25 19.5C7.55964 19.5 7 20.0596 7 20.75C7 21.4404 7.55964 22 8.25 22Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M9 8H21"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </Link>
                </li>{" "}
                <li title="login/register" className="relative hidden lg:block">
                  <Link className="lg:absolute top-[11px] left-10 " to="/login">
                    {" "}
                    <svg className=" w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
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
