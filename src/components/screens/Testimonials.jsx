import React from "react";
import firstImg from "../../assets/testimonials/download (2).png";
import secondImg from "../../assets/testimonials/clientSayMain.668e4587f020b4c73348.png";
import thirdImg from "../../assets/testimonials/download (3).png";
import fourthImg from "../../assets/testimonials/download (4).png";
import fifthImg from "../../assets/testimonials/download (5).png";
import sixImg from "../../assets/testimonials/download (6).png";
import sevenImg from "../../assets/testimonials/download (7).png";

import quotes1 from "../../assets/testimonials/download (1).png";
import quotes2 from "../../assets/testimonials/download.png";

import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { testimonialSlides } from "../../constant/testimonialsSlides";

const Testimonials = () => {
  return (
    <section className="my-16 md:my-24 lg:my-32 container">
      <div className="content text-center mb-0 lg:mb-16">
        {/* heading text */}
        <h2 className=" text-2xl  md:text-3xl lg:text-4xl font-semibold">Good news from far away 🥇</h2>
        <p className="text-[#B1B5BD] mt-3 text-xl">Let's see what people think of Ciseco</p>
      </div>
      {/* testimonials */}
      <div className="testimonials w-full lg:w-[80%] mx-auto">
        <div className="hidden  lg:flex justify-around items-center ">
          <div>
            <img src={firstImg} alt="1st" />
          </div>{" "}
          <div>
            <img src={secondImg} alt="2nd" />
          </div>{" "}
          <div>
            <img src={thirdImg} alt="3rd" />
          </div>
        </div>
        <div className=" my-3 lg:my-10 w-full lg:w-[70%] mx-auto">
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
            {testimonialSlides.map((product, i) => (
              <SwiperSlide key={i}>
                <div className="flex py-10 justify-between">
                  <div>
                    <img src={quotes1} alt="" />
                  </div>
                  <div className="text-center">
                    <h2 className="text-2xl">{product.quote}</h2>
                    <p className="text-xl font-bold my-5 ">{product.name}</p>
                    <div className="flex space-x-1 justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#e8bf09"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-[#e8bf09] "
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#e8bf09"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-[#e8bf09] "
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#e8bf09"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-[#e8bf09] "
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#e8bf09"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-[#e8bf09] "
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#e8bf09"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-[#e8bf09] "
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <img src={quotes2} alt="" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="hidden  lg:flex justify-between items-center relative -top-36 w-[95%] mx-auto">
          <div>
            <img src={fourthImg} alt="1st" />
          </div>{" "}
          <div>
            <img src={fifthImg} alt="3rd" />
          </div>
        </div>
        <div className="hidden  lg:flex justify-center gap-[300px] items-center ">
          <div>
            <img src={sixImg} alt="1st" />
          </div>{" "}
          <div>
            <img src={sevenImg} alt="3rd" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
