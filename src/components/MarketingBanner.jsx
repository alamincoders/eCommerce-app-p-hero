import React from "react";
import market1 from "../assets/marketing/1.png";
import market2 from "../assets/marketing/2.png";
import market3 from "../assets/marketing/3.png";
import market4 from "../assets/marketing/4.png";

const MarketingBanner = () => {
  return (
    <div className="container mt-32">
      <div className="">
        <h2 className="text-2xl md:text-3xl lg:text-4xl mb-16 font-semibold">Shop by department</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-6 ">
        <div>
          <div className="bg-[#E0E7FF] rounded-2xl">
            <img src={market1} className="w-4/6 mx-auto" alt="" />
          </div>
          <div class="mt-5 flex-1 text-center">
            <h2 class="text-base sm:text-lg text-neutral-900 dark:text-neutral-100 font-semibold">Travel Kits</h2>
            <span class="block mt-0.5 sm:mt-1.5 text-sm text-neutral-500 dark:text-neutral-400">20+ categories</span>
          </div>
        </div>
        {/* start */}
        <div>
          <div className="bg-[#F1F5F9] rounded-2xl">
            <img src={market2} className="w-4/6 mx-auto" alt="" />
          </div>
          <div class="mt-5 flex-1 text-center">
            <h2 class="text-base sm:text-lg text-neutral-900 dark:text-neutral-100 font-semibold">Beauty Products</h2>
            <span class="block mt-0.5 sm:mt-1.5 text-sm text-neutral-500 dark:text-neutral-400">10+ categories</span>
          </div>
        </div>
        {/* start */}
        <div>
          <div className="bg-[#E0F2FE] rounded-2xl">
            <img src={market3} className="w-4/6 mx-auto" alt="" />
          </div>
          <div class="mt-5 flex-1 text-center">
            <h2 class="text-base sm:text-lg text-neutral-900 dark:text-neutral-100 font-semibold">Sport Kits</h2>
            <span class="block mt-0.5 sm:mt-1.5 text-sm text-neutral-500 dark:text-neutral-400">34+ categories</span>
          </div>
        </div>
        {/* start */}
        <div>
          <div className="bg-[#FFEDD5] rounded-2xl">
            <img src={market4} className="w-4/6 mx-auto" alt="" />
          </div>
          <div class="mt-5 flex-1 text-center">
            <h2 class="text-base sm:text-lg text-neutral-900 dark:text-neutral-100 font-semibold">Pets Food</h2>
            <span class="block mt-0.5 sm:mt-1.5 text-sm text-neutral-500 dark:text-neutral-400">12+ categories</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingBanner;
