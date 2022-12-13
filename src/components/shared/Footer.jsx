import React, { useState } from "react";
import Swal from "sweetalert2";
import logo from "../../assets/logo.svg";
import payment1 from "../../assets/payment/download.png";
import payment2 from "../../assets/payment/download (1).png";
import payment3 from "../../assets/payment/download (2).png";
import payment4 from "../../assets/payment/download (3).png";
import payment5 from "../../assets/payment/download (8).png";

import facebook from "../../assets/social/download.png";
import twitter from "../../assets/social/Twitter-logo.svg.webp";
import instagram from "../../assets/social/Instagram_logo_2022.svg.webp";
import youtube from "../../assets/social/unnamed.png";

const Footer = () => {
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (input !== "") {
      Swal.fire({
        title: "Thanks for subscribing!",
        text: "You will be the first to know about our newsletter.",
        imageUrl: "https://i.pinimg.com/originals/35/45/f4/3545f49ee7278db6a6d44e62e4e9bfeb.jpg",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "welcome image",
      });
      setInput("");
    }
  };
  return (
    <>
      {" "}
      <div className="bg-[#F9F9F9] py-8">
        <div className="container">
          <div className="upper grid grid-cols-1  lg:grid-cols-2 gap-4 items-center pb-10 border-b">
            <div className="">
              <h2 className="font-semibold text-xl">KNOW IT ALL FIRST!</h2>
              <p className="text-[#323232a1]">
                <small>Never Miss Anything From Multikart By Signing Up To Our Newsletter.</small>
              </p>
            </div>
            <div className=" border-none lg:border-l-2 border-gray-200 pl-0 lg:pl-52 ">
              <form onSubmit={handleSubmit} className="space-x-4" action="#">
                <input
                  required
                  onChange={(e) => setInput(e.target.value)}
                  value={input}
                  type="email"
                  className="bg-white focus:outline-none focus:ring-2 px-5 w-72 py-3  shadow-red-100 shadow-2xl rounded"
                  placeholder="Enter your email"
                />
                <button type="submit" className="relative inline-block text-lg group mt-5 lg:mt-0">
                  <span className="relative z-10 block px-5 py-2.5 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                    <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                    <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                    <span className="relative">Subscribe</span>
                  </span>
                  <span
                    className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                    data-rounded="rounded-lg"
                  ></span>
                </button>
              </form>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4 pt-10">
            <div className="space-y-5">
              <div>
                <img src={logo} alt="" />
              </div>
              <p className="text-gray-500 text-sm">
                <small>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                  ad minim veniam,
                </small>
              </p>

              <div className="flex space-x-8">
                <img className="w-6 h-6 object-fill object-center cursor-pointer" src={facebook} alt="" />
                <img className="w-6 h-6 object-fill object-center cursor-pointer" src={youtube} alt="" />
                <img className="w-6 h-6 object-fill object-center cursor-pointer" src={instagram} alt="" />
                <img className="w-6 h-6 object-fill object-center cursor-pointer" src={twitter} alt="" />
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-5">CATEGORY</h2>
              <ul>
                <li className="footer_links ">Womans</li>
                <li className="footer_links">Clothing</li>
                <li className="footer_links">Accessories</li>
                <li className="footer_links">Featured</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-5">WHY WE CHOOSE</h2>
              <ul>
                <li className="footer_links">Shipping & Return</li>
                <li className="footer_links">Secure Shopping</li>
                <li className="footer_links">Gallery</li>
                <li className="footer_links">Affiliates</li>
                <li className="footer_links">Contacts</li>
                <li className="footer_links">Terms and condition</li>
                <li className="footer_links">Privacy Policy</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-5">STORE INFORMATION</h2>
              <ul>
                <li className="footer_links">Ceseco Demo Store, Khulna-7340</li>
                <li className="footer_links">Call us: +880-132-248-312*</li>
                <li className="footer_links">Email us: contact@demo.com</li>
                <li className="footer_links">Fax: +123456</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-5 container flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
        <div>
          <p className="text-[#777777]"> 2022-23 alamincoders powered by Ciseco</p>
        </div>
        <div className="flex space-x-3">
          <img className="cursor-pointer" src={payment1} alt="" />
          <img className="cursor-pointer" src={payment2} alt="" />
          <img className="cursor-pointer" src={payment3} alt="" />
          <img className="cursor-pointer" src={payment4} alt="" />
          <img className="cursor-pointer" src={payment5} alt="" />
        </div>
      </div>
    </>
  );
};

export default Footer;
