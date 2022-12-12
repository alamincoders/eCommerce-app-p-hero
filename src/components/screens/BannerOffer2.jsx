import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import offerImg from "../../assets/offer2.png";

const BannerOffer2 = () => {
  return (
    <div className="container mt-16 md:mt-24 lg:mt-32">
      <div className="relative  bg-[#F8FAFC]  rounded-[40px] px-5 pt-10 lg:px-24">
        <div className="absolute inset-0">
          <img
            className="absolute w-full h-full object-contain dark:opacity-5"
            src="https://chisnghiax.com/ciseco/static/media/Moon.bf27dc577d1acccaba48430d353dbbe0.svg"
            alt="backgroundLineSvg"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
          <div className="flex flex-col h-full justify-center">
            <div className="w-16">
              <Link to="/">
                <img className="w-full  h-full" src={logo} alt="" />
              </Link>
            </div>
            <h2 className="font-semibold text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl mt-6 sm:mt-10 !leading-[1.13] tracking-tight">
              Don't miss out on
              <br />
              special offers
            </h2>{" "}
            <span className="block mt-6 text-slate-500 dark:text-slate-400">
              Register to receive news about the latest, savings combos, discount codes...
            </span>
            <ul className="space-y-4 mt-10">
              <li className="flex items-center space-x-4">
                <span className="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs  text-purple-800 bg-purple-100  relative">01</span>
                <span className="font-medium text-neutral-700 dark:text-neutral-300">Savings combos</span>
              </li>
              <li className="flex items-center space-x-4">
                <span className="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs  text-blue-800 bg-blue-100  relative">02</span>
                <span className="font-medium text-neutral-700 dark:text-neutral-300">Freeship</span>
              </li>
              <li className="flex items-center space-x-4">
                <span className="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-red-800 bg-red-100 ">03</span>
                <span className="font-medium text-neutral-700 dark:text-neutral-300">Premium magazines</span>
              </li>
            </ul>
            <form className="mt-10 relative max-w-sm">
              <input
                type="email"
                className="block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 disabled:bg-neutral-200 dark:disabled:bg-neutral-800 rounded-full text-sm font-normal h-11 px-4 py-3 "
                required=""
                aria-required="true"
                placeholder="Enter your email"
              />
              <button
                className="ttnc-ButtonCircle flex items-center justify-center rounded-full !leading-none disabled:bg-opacity-70 bg-slate-900 hover:bg-slate-800 text-slate-50 absolute transform top-1/2 -translate-y-1/2 right-1  w-9 h-9  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0"
                type="submit"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-6 h-6">
                  <path
                    fill-rule="evenodd"
                    d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </form>
          </div>
          <div className=" mt-10 lg:mt-0">
            <img className="w-full h-full]" src={offerImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerOffer2;
