import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import offerImg from "../assets/offer.png";

const BannerOffer = () => {
  return (
    <div className=" container">
      <div className="relative  bg-yellow-50  rounded-[40px] p-24">
        <div class="absolute inset-0">
          <img
            class="absolute w-full h-full object-contain dark:opacity-5"
            src="https://chisnghiax.com/ciseco/static/media/Moon.bf27dc577d1acccaba48430d353dbbe0.svg"
            alt="backgroundLineSvg"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
          <div className=" mt-10 lg:mt-0 w-5/6">
            <img className="w-full h-full scale-0 lg:scale-[1.4]" src={offerImg} alt="" />
          </div>
          <div className="flex flex-col h-full justify-center">
            <div className="w-16">
              <Link to="/">
                <img className="w-full  h-full" src={logo} alt="" />
              </Link>
            </div>
            <h2 class="font-semibold text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl mt-6 sm:mt-10 !leading-[1.13] tracking-tight">
              Special offer <br />
              in kids products
            </h2>
            <span class="block mt-6 text-slate-500 dark:text-slate-400">
              Fashion is a form of self-expression and autonomy at a particular period and place.
            </span>
            <div class="flex space-x-2 sm:space-x-5 mt-6 sm:mt-12">
              <Link class="offerBnt" rel="noopener noreferrer">
                Discover more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerOffer;
