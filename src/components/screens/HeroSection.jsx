import React from "react";
import { slides } from "../../constant/slidesData";
import Button from "../shared/Button";
import { Swiper, SwiperSlide } from "swiper/react";
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
        {slides.map((data, i) => (
          <SwiperSlide key={i}>
            <div className="flex items-center justify-between lg:justify-center flex-col lg:flex-row w-full h-full md:h-[700px] lg:h-[700px]">
              <div className="w-full space-y-6 px-4 py-5 md:py-2 lg:py-0">
                <p className=" text-base lg:text-xl mt-8 md:mt-3 lg:mt-0 font-normal lg:font-semibold ml-0 lg:ml-2">{data?.first_text}</p>
                <h1 className="text-3xl md:text-4xl lg:text-7xl  font-semibold flex flex-col lg:leading-snug">
                  <span>{data?.title[0]}</span>
                  <span>{data?.title[1]}</span>
                </h1>
                <Button title="Explore now" icon={true} bgColor={true} textColor={true} hoverBtn={true} />
              </div>
              <div className="w-full h-full">
                <img className="w-full h-full -z-10" src={data.banner} alt="" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;
