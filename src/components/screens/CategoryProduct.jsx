import React from "react";
import { Link } from "react-router-dom";
import cat1 from "../../assets/category/cat1.png";
import cat2 from "../../assets/category/cat2.png";
import cat3 from "../../assets/category/cat3.png";
import cat4 from "../../assets/category/cat4.png";
import cat5 from "../../assets/category/cat5.png";
import cat6 from "../../assets/category/cat6.png";

const CategoryProduct = () => {
  return (
    <div className="bg-neutral-100/70 dark:bg-black/20 container py-16 rounded-[30px]">
      <div>
        <div className="flex flex-col items-center text-center w-full mx-auto mb-12 lg:mb-14">
          <h2 className="justify-center text-3xl md:text-4xl 2xl:text-5xl font-semibold">Start exploring.</h2>
        </div>
        {/* grid */}
        <div className="grid gap-4 md:gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <Link to={`/category`}>
            {" "}
            <div className="cardCategory">
              <div className="absolute bottom-0 right-0 max-w-[280px] opacity-80">
                <img src="https://chisnghiax.com/ciseco/static/media/explore5.31cdd38104cf6ff9b87f13d23831c063.svg" alt="" />
              </div>
              <div className="flex flex-col justify-between">
                <div className="flex justify-between items-center">
                  <div className=" w-20 h-20 rounded-full overflow-hidden z-0 bg-indigo-50">
                    <img src={cat1} className="object-cover w-full h-full" alt="nc-img" />
                  </div>
                  <span className="text-xs text-slate-700 dark:text-neutral-300 font-medium">242 products</span>
                </div>
                <div className="mt-16">
                  <span className="block mb-2 text-sm text-slate-500 dark:text-slate-400">Manufacturer</span>
                  <h2 className="text-2xl sm:text-3xl font-semibold">Cycling Jersey</h2>
                </div>
                <Link to="/category" className=" mt-16 flex items-center text-sm font-medium group-hover:text-primary-500 transition-colors">
                  <span>See Collection</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="w-4 h-4 ml-2.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                  </svg>
                </Link>
              </div>
            </div>{" "}
          </Link>
          {/* card start */}
          <Link to={`/category`}>
            <div className="cardCategory">
              <div className="absolute bottom-0 right-0 max-w-[280px] opacity-80">
                <img src="https://chisnghiax.com/ciseco/static/media/explore1.775937cb2511726e48c3fc70025fab60.svg" alt="" />
              </div>
              <div className="flex flex-col justify-between">
                <div className="flex justify-between items-center">
                  <div className=" w-20 h-20 rounded-full overflow-hidden z-0 bg-indigo-50">
                    <img src={cat2} className="object-cover w-full h-full" alt="nc-img" />
                  </div>
                  <span className="text-xs text-slate-700 dark:text-neutral-300 font-medium">242 products</span>
                </div>
                <div className="mt-16">
                  <span className="block mb-2 text-sm text-slate-500 dark:text-slate-400">Manufacturer</span>
                  <h2 className="text-2xl sm:text-3xl font-semibold">Backpack</h2>
                </div>
                <Link to="/category" className=" mt-16 flex items-center text-sm font-medium group-hover:text-primary-500 transition-colors">
                  <span>See Collection</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="w-4 h-4 ml-2.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </Link>
          {/* card start */}
          <Link to={`/category`}>
            <div className="cardCategory">
              <div className="absolute bottom-0 right-0 max-w-[280px] opacity-80">
                <img src="https://chisnghiax.com/ciseco/static/media/explore2.1ceb7512bd65219296c27bc4ecc85ff6.svg" alt="" />
              </div>
              <div className="flex flex-col justify-between">
                <div className="flex justify-between items-center">
                  <div className=" w-20 h-20 rounded-full overflow-hidden z-0 bg-indigo-50">
                    <img src={cat3} className="object-cover w-full h-full" alt="nc-img" />
                  </div>
                  <span className="text-xs text-slate-700 dark:text-neutral-300 font-medium">242 products</span>
                </div>
                <div className="mt-16">
                  <span className="block mb-2 text-sm text-slate-500 dark:text-slate-400">Manufacturer</span>
                  <h2 className="text-2xl sm:text-3xl font-semibold">Shoes</h2>
                </div>
                <Link to="/category" className=" mt-16 flex items-center text-sm font-medium group-hover:text-primary-500 transition-colors">
                  <span>See Collection</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="w-4 h-4 ml-2.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </Link>
          {/* card start */}
          <Link to={`/category`}>
            <div className="cardCategory">
              <div className="absolute bottom-0 right-0 max-w-[280px] opacity-80">
                <img src="https://chisnghiax.com/ciseco/static/media/explore3.94b86e236316334ee0f6d22e7c41e3bc.svg" alt="" />
              </div>
              <div className="flex flex-col justify-between">
                <div className="flex justify-between items-center">
                  <div className=" w-20 h-20 rounded-full overflow-hidden z-0 bg-indigo-50">
                    <img src={cat4} className="object-cover w-full h-full" alt="nc-img" />
                  </div>
                  <span className="text-xs text-slate-700 dark:text-neutral-300 font-medium">242 products</span>
                </div>
                <div className="mt-16">
                  <span className="block mb-2 text-sm text-slate-500 dark:text-slate-400">Manufacturer</span>
                  <h2 className="text-2xl sm:text-3xl font-semibold">Recycled Blanket</h2>
                </div>
                <Link to="/category" className=" mt-16 flex items-center text-sm font-medium group-hover:text-primary-500 transition-colors">
                  <span>See Collection</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="w-4 h-4 ml-2.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                  </svg>
                </Link>
              </div>
            </div>{" "}
          </Link>
          {/* card start */}
          <Link to={`/category`}>
            {" "}
            <div className="cardCategory">
              <div className="absolute bottom-0 right-0 max-w-[280px] opacity-80">
                <img src="https://chisnghiax.com/ciseco/static/media/explore6.d820796c6233d6fd068004c49905dda6.svg" alt="" />
              </div>
              <div className="flex flex-col justify-between">
                <div className="flex justify-between items-center">
                  <div className=" w-20 h-20 rounded-full overflow-hidden z-0 bg-indigo-50">
                    <img src={cat5} className="object-cover w-full h-full" alt="nc-img" />
                  </div>
                  <span className="text-xs text-slate-700 dark:text-neutral-300 font-medium">242 products</span>
                </div>
                <div className="mt-16">
                  <span className="block mb-2 text-sm text-slate-500 dark:text-slate-400">Manufacturer</span>
                  <h2 className="text-2xl sm:text-3xl font-semibold">Car Coat</h2>
                </div>
                <Link to="/category" className=" mt-16 flex items-center text-sm font-medium group-hover:text-primary-500 transition-colors">
                  <span>See Collection</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="w-4 h-4 ml-2.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                  </svg>
                </Link>
              </div>
            </div>{" "}
          </Link>
          {/* last card */}
          <Link to={`/category`}>
            <div className="cardCategory">
              <div className="absolute bottom-0 right-0 max-w-[280px] opacity-80">
                <img src="https://chisnghiax.com/ciseco/static/media/explore9.9cb58d1f5a9bf47be0be877012199caa.svg" alt="" />
              </div>
              <div className="flex flex-col justify-between">
                <div className="flex justify-between items-center">
                  <div className=" w-20 h-20 rounded-full overflow-hidden z-0 bg-indigo-50">
                    <img src={cat6} className="object-cover w-full h-full" alt="nc-img" />
                  </div>
                  <span className="text-xs text-slate-700 dark:text-neutral-300 font-medium">242 products</span>
                </div>
                <div className="mt-16">
                  <span className="block mb-2 text-sm text-slate-500 dark:text-slate-400">Manufacturer</span>
                  <h2 className="text-2xl sm:text-3xl font-semibold">Cycling Shorts</h2>
                </div>
                <Link to="/category" className=" mt-16 flex items-center text-sm font-medium group-hover:text-primary-500 transition-colors">
                  <span>See Collection</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="w-4 h-4 ml-2.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                  </svg>
                </Link>
              </div>
            </div>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryProduct;
