import React from "react";
import firstBigImg from "../../assets/Chosen/fist/big.png";
import firstImg from "../../assets/Chosen/fist/img1.png";
import secondImg from "../../assets/Chosen/fist/img2.png";
import thirdImg from "../../assets/Chosen/fist/img3.png";
// second
import SecondBigImg from "../../assets/Chosen/second/big.png";
import firstImg2 from "../../assets/Chosen/second/img1.png";
import secondImg2 from "../../assets/Chosen/second/img2.png";
import thirdImg2 from "../../assets/Chosen/second/img3.png";
// third
import ThirdBigImg from "../../assets/Chosen/third/big.png";
import firstImg3 from "../../assets/Chosen/third/img1.png";
import secondImg3 from "../../assets/Chosen/third/img2.png";
import thirdImg3 from "../../assets/Chosen/third/img3.png";

const ChosenSection = () => {
  return (
    <div className="container mt-16 md:mt-24 lg:mt-32">
      <div className="mb-8 lg:mb-16 hidden lg:block">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">Chosen by our experts</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className=" flex flex-col justify-center space-y-4 cursor-pointer">
          <div className="bg-[#F3F4F6] text-center rounded-2xl">
            <img src={firstBigImg} className="w-5/6 mx-auto inline-block" alt="" />
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div>
              <img src={firstImg} alt="" />
            </div>
            <div>
              <img src={secondImg} alt="" />
            </div>
            <div>
              <img src={thirdImg} alt="" />
            </div>
          </div>
          <div className="relative mt-5 flex justify-between">
            <div className="flex-1">
              <h2 className="font-semibold text-lg sm:text-xl ">Suede Bomber Jacket</h2>
              <div className="mt-3 flex items-center text-slate-500 dark:text-slate-400">
                <span className="text-sm ">
                  <span className="line-clamp-1">Orange</span>
                </span>
                <span className="h-5 mx-1 sm:mx-2 border-l border-slate-200 dark:border-slate-700"></span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-4 h-4 text-orange-400"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="text-sm ml-1 ">
                  <span className="line-clamp-1">4.9 (269 reviews)</span>
                </span>
              </div>
            </div>
            <div className="mt-0.5 sm:mt-1 ml-4">
              <div className="flex items-center border-2 border-green-500 rounded-lg py-1 px-2 md:py-1.5 md:px-2.5 text-sm font-medium">
                <span className="text-green-500 !leading-none">$52.00</span>
              </div>
            </div>
          </div>
        </div>
        {/* start */}
        <div className=" flex flex-col justify-center space-y-4 cursor-pointer">
          <div className="bg-[#F3F4F6] text-center rounded-2xl">
            <img src={SecondBigImg} className="w-5/6 mx-auto inline-block" alt="" />
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div>
              <img src={firstImg2} alt="" />
            </div>
            <div>
              <img src={secondImg2} alt="" />
            </div>
            <div>
              <img src={thirdImg2} alt="" />
            </div>
          </div>
          <div className="relative mt-5 flex justify-between">
            <div className="flex-1">
              <h2 className="font-semibold text-lg sm:text-xl ">Downtown Pet Tote</h2>
              <div className="mt-3 flex items-center text-slate-500 dark:text-slate-400">
                <span className="text-sm ">
                  <span className="line-clamp-1">Black and Orange</span>
                </span>
                <span className="h-5 mx-1 sm:mx-2 border-l border-slate-200 dark:border-slate-700"></span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-4 h-4 text-orange-400"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="text-sm ml-1 ">
                  <span className="line-clamp-1">4.9 (269 reviews)</span>
                </span>
              </div>
            </div>
            <div className="mt-0.5 sm:mt-1 ml-4">
              <div className="flex items-center border-2 border-green-500 rounded-lg py-1 px-2 md:py-1.5 md:px-2.5 text-sm font-medium">
                <span className="text-green-500 !leading-none">$88.00</span>
              </div>
            </div>
          </div>
        </div>
        {/* start */}
        <div className=" flex flex-col justify-center space-y-4 cursor-pointer">
          <div className="bg-[#F3F4F6] text-center rounded-2xl">
            <img src={ThirdBigImg} className="w-5/6 mx-auto inline-block" alt="" />
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div>
              <img src={firstImg3} alt="" />
            </div>
            <div>
              <img src={secondImg3} alt="" />
            </div>
            <div>
              <img src={thirdImg3} alt="" />
            </div>
          </div>
          <div className="relative mt-5 flex justify-between">
            <div className="flex-1">
              <h2 className="font-semibold text-lg sm:text-xl ">Cader Leather Sneakers</h2>
              <div className="mt-3 flex items-center text-slate-500 dark:text-slate-400">
                <span className="text-sm ">
                  <span className="line-clamp-1">3 Sizes Available</span>
                </span>
                <span className="h-5 mx-1 sm:mx-2 border-l border-slate-200 dark:border-slate-700"></span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-4 h-4 text-orange-400"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="text-sm ml-1 ">
                  <span className="line-clamp-1">4.9 (269 reviews)</span>
                </span>
              </div>
            </div>
            <div className="mt-0.5 sm:mt-1 ml-4">
              <div className="flex items-center border-2 border-green-500 rounded-lg py-1 px-2 md:py-1.5 md:px-2.5 text-sm font-medium">
                <span className="text-green-500 !leading-none">$60.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChosenSection;
