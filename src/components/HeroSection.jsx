import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import hero1 from "../assets/hero/hero1.png";
import hero2 from "../assets/hero/hero2.png";
import hero3 from "../assets/hero/hero3.png";
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroSection = () => {
  return (
    <div className="bg-[#E3FFE6]">
      <Swiper
        mousewheel={true}
        loop={true}
        cssMode={true}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper container"
      >
        <SwiperSlide>
          <div className="flex items-center justify-center w-full h-auto md:h-[700px] lg:h-[700px] ">
            <div className="w-full space-y-6">
              <p className="text-xl font-semibold">In this season, find the best 🔥</p>
              <h1 className="text-4xl md:text-4xl lg:text-7xl  font-bold flex flex-col leading-snug">
                <span>Exclusive collection</span>
                <span>for everyone</span>
              </h1>
              <button className="mt-8 bg-black text-white py-5 px-7 rounded-full hover:bg-gray-800/90 transition-colors duration-200 shadow-2xl shadow-red-700">
                Explore now{" "}
                <div className="search cursor-pointer inline-block align-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </div>
              </button>
            </div>
            <div className="">
              <img className="w-full h-full scale-[1.50] -z-10" src={hero1} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center h-[700px] w-full">
            <div className="w-full space-y-6">
              <p className="text-xl font-semibold">In this season, find the best 🔥</p>
              <h1 className="text-4xl md:text-4xl lg:text-7xl  font-bold flex flex-col leading-snug">
                <span>Exclusive collection</span>
                <span>for everyone</span>
              </h1>
              <button className="mt-8 bg-black text-white py-5 px-7 rounded-full hover:bg-gray-800/90 transition-colors duration-200 shadow-2xl shadow-red-700">
                Explore now{" "}
                <div className="search cursor-pointer inline-block align-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </div>
              </button>
            </div>
            <div className="">
              <img className="w-full h-full scale-[1.25] -z-10 " src={hero2} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center h-[700px] w-full">
            <div className="w-full space-y-6">
              <p className="text-xl font-semibold">In this season, find the best 🔥</p>
              <h1 className="text-4xl md:text-4xl lg:text-7xl  font-bold flex flex-col leading-snug">
                <span>Exclusive collection</span>
                <span>for everyone</span>
              </h1>
              <button className="mt-8 bg-black text-white py-5 px-7 rounded-full hover:bg-gray-800/90 transition-colors duration-200 shadow-2xl shadow-red-700">
                Explore now{" "}
                <div className="search cursor-pointer inline-block align-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </div>
              </button>
            </div>
            <div className="">
              <img className="w-full h-full scale-[1.25]" src={hero3} alt="" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSection;
