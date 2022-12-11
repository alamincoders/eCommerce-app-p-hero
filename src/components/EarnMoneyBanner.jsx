import React from "react";
import { Link } from "react-router-dom";
import earnImg from "../assets/earn.png";
import logo from "../assets/logo.svg";

const EarnMoneyBanner = () => {
  return (
    <div className="container py-32">
      <div className="flex items-center justify-center w-full">
        <div className="w-full space-y-6">
          <div className="w-16">
            <Link to="/">
              <img className="w-full  h-full" src={logo} alt="" />
            </Link>
          </div>
          <h1 className="text-[60px] text-gray-700 font-bold flex flex-col leading-snug">
            <span>Earn free money</span>
            <span>with Aieeb</span>
          </h1>
          <p className="text-xl text-gray-800">With Ciseco you will get freeship & savings combo...</p>
          <div className="space-x-4">
            <button className="mt-8 bg-black text-white py-5 px-7 rounded-full hover:bg-gray-800/90 transition-colors duration-200 shadow-2xl shadow-red-700/50">
              Savings combo{" "}
            </button>
            <button className="mt-8 bg-white text-black py-5 px-7 rounded-full hover:bg-gray-200/90 transition-colors duration-200 shadow-2xl shadow-gray-700/50">
              Savings combo{" "}
            </button>
          </div>
        </div>
        <div className="w-full">
          <img className="w-full h-full" src={earnImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default EarnMoneyBanner;
