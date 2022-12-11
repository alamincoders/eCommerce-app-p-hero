import React from "react";
import step1 from "../assets/serviceStep/step1.png";
import step2 from "../assets/serviceStep/step2.png";
import step3 from "../assets/serviceStep/step3.png";
import step4 from "../assets/serviceStep/step4.png";

const StepsLine = () => {
  return (
    <div className="container border-t-2 border-b-2 border-gray-100/70 py-16">
      <div
        style={{ backgroundImage: "url('https://chisnghiax.com/ciseco/static/media/VectorHIW.1a377ddaa77cc48b5b38a6739a397aff.svg')" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-no-repeat bg-contain bg-top"
      >
        {/* card start */}
        <div className="px-[30px] py-[30px] lg:py-0 bg-gray-50 lg:bg-transparent rounded-md lg:rounded-none drop-shadow-sm lg:drop-shadow-none">
          <div className="mb-4 sm:mb-10 max-w-[140px] mx-auto">
            <img src={step1} className="rounded-3xl" alt="nc-imgs" />
          </div>

          <div>
            <div className="text-center mt-auto space-y-5">
              <span className="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-red-800 bg-red-100 ">Step 1</span>
              <h3 className="text-base font-semibold">Filter &amp; Discover</h3>
              <span className="block text-slate-600 dark:text-slate-400 text-sm leading-6">Smart filtering and suggestions make it easy to find</span>
            </div>
          </div>
        </div>
        {/* card start */}
        <div className="px-[30px] py-[30px] lg:py-0  bg-gray-50 lg:bg-transparent rounded-md lg:rounded-none drop-shadow-sm lg:drop-shadow-none">
          <div className="mb-4 sm:mb-10 max-w-[140px] mx-auto">
            <img src={step2} className="rounded-3xl" alt="nc-imgs" />
          </div>

          <div>
            <div className="text-center mt-auto space-y-5">
              <span className="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs text-indigo-800 bg-indigo-100  relative">
                Step 2
              </span>
              <h3 className="text-base font-semibold">Add to bag</h3>
              <span className="block text-slate-600 dark:text-slate-400 text-sm leading-6">
                Easily select the correct items and add them to the cart
              </span>
            </div>
          </div>
        </div>
        {/* card start */}
        <div className="px-[30px] py-[30px] lg:py-0  bg-gray-50 lg:bg-transparent rounded-md lg:rounded-none drop-shadow-sm lg:drop-shadow-none">
          <div className="mb-4 sm:mb-10 max-w-[140px] mx-auto">
            <img src={step3} className="rounded-3xl" alt="nc-imgs" />
          </div>

          <div>
            <div className="text-center mt-auto space-y-5">
              <span className="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-yellow-800 bg-yellow-100">Step 3</span>
              <h3 className="text-base font-semibold">Fast shipping</h3>
              <span className="block text-slate-600 dark:text-slate-400 text-sm leading-6">The carrier will confirm and ship quickly to you</span>
            </div>
          </div>
        </div>
        {/* last card */}
        <div className="px-[30px] py-[30px] lg:py-0  bg-gray-50 lg:bg-transparent rounded-md lg:rounded-none drop-shadow-sm lg:drop-shadow-none">
          <div className="mb-4 sm:mb-10 max-w-[140px] mx-auto">
            <img src={step4} className="rounded-3xl" alt="nc-imgs" />
          </div>

          <div>
            <div className="text-center mt-auto space-y-5">
              <span className="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs text-purple-800 bg-purple-100  relative">
                Step 4
              </span>
              <h3 className="text-base font-semibold">Enjoy the product</h3>
              <span className="block text-slate-600 dark:text-slate-400 text-sm leading-6">Have fun and enjoy your 5-star quality products</span>
            </div>
          </div>
        </div>
        {/* card end */}
      </div>
    </div>
  );
};

export default StepsLine;
