import Aos from "aos";
import React from "react";
import dis1 from "../assets/discover/discover (1).png";
import dis3 from "../assets/discover/discover (3).png";
import dis2 from "../assets/discover/discover (4).png";

Aos.init({ duration: "2000" });
const Discover = () => {
  return (
    <div className="bg-white my-16 md:my-24 lg:my-32 relative container">
      <div>
        <div className="content text-2xl md:text-3xl lg:text-4xl font-semibold">
          <h2 className="text-center lg:text-left">
            Discover more. <span className="text-gray-600">Good things are waiting for you</span>
          </h2>
        </div>
      </div>
      {/* main section start */}
      <div className="discoverItem my-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div data-aos="fade-up" className="relative cursor-pointer w-full rounded-2xl overflow-hidden group bg-yellow-50 p-8">
            <div className="text">
              <span className="block mb-2 text-sm text-slate-700">Explore new arrivals</span>
              <h2 className="text-xl md:text-2xl text-slate-900 font-semibold">
                Shop the latest <br /> from top brands
              </h2>
              <button className="discover_btn">Show me all</button>
            </div>
            <div className="absolute inset-5 sm:inset-8">
              <img className="absolute right-0 w-1/2 max-w-[260px] h-full object-contain drop-shadow-xl" src={dis1} alt="" />
            </div>
            <span className="opacity-0 group-hover:opacity-40 absolute inset-0 bg-black/10 transition-opacity"></span>
          </div>
          {/* section start */}
          <div data-aos="fade-up" className="relative cursor-pointer w-full rounded-2xl overflow-hidden group bg-red-50 p-8">
            <div className="text">
              <span className="block mb-2 text-sm text-slate-700">Digital gift cards</span>
              <h2 className="text-xl md:text-2xl text-slate-900 font-semibold">
                Give the gift <br /> of choice
              </h2>
              <button className="discover_btn">Show me all</button>
            </div>
            <div className="absolute inset-5 sm:inset-8">
              <img className="absolute right-0 w-1/2 max-w-[260px] h-full object-contain drop-shadow-xl" src={dis2} alt="" />
            </div>
            <span className="opacity-0 group-hover:opacity-40 absolute inset-0 bg-black/10 transition-opacity"></span>
          </div>
          {/* section start */}
          <div data-aos="fade-up" className="relative cursor-pointer w-full rounded-2xl overflow-hidden group bg-blue-50 p-8">
            <div className="text">
              <span className="block mb-2 text-sm text-slate-700">Sale collection</span>
              <h2 className="text-xl md:text-2xl text-slate-900 font-semibold">
                Up to <br /> 80% off retail
              </h2>
              <button className="discover_btn">Show me all</button>
            </div>
            <div className="absolute inset-5 sm:inset-8">
              <img className="absolute right-0 w-1/2 max-w-[260px] h-full object-contain drop-shadow-xl" src={dis3} alt="" />
            </div>
            <span className="opacity-0 group-hover:opacity-40 absolute inset-0 bg-black/10 transition-opacity"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
