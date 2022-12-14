/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from "react";
import bigProductImg from "../../assets/NewArrivals/product9.jpg";
import { Link } from "react-router-dom";

const QuickView = ({ setShowModal }) => {
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  let [count, setCount] = useState(1);

  const Increment = () => {
    if (count > 0) {
      count++;
      setCount(count);
    } else {
      return;
    }
  };
  const Decrement = () => {
    if (count > 1) {
      count--;
      setCount(count);
    } else {
      return;
    }
  };
  return (
    <>
      <div>
        <button className="absolute top-8 right-10" onClick={() => setShowModal(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
      </div>
      <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mt-10 w-full lg:w-[95%] mx-auto">
        <div className="space-y-4">
          <div className="w-full h-[300px] lg:h-[450px] relative flex-shrink-0 bg-[#EFF1F2] dark:bg-slate-300 rounded-3xl overflow-hidden z-1 group ">
            <img className="w-full h-full object-fill object-center rounded-2xl cursor-pointer" src={bigProductImg} alt="" />
          </div>
        </div>
        <div className="content">
          <h2 className="text-xl md:text-3xl lg:text-3xl font-semibold">Heavy Weight Shoes</h2>
          <div className="flex items-center mt-5 space-x-4 sm:space-x-5">
            <div className="">
              <div className="flex items-center border-2 border-green-500 rounded-lg py-1 px-2 md:py-1.5 md:px-3 text-lg font-semibold">
                <span className="text-green-500 !leading-none">$112.00</span>
              </div>
            </div>
            <div className="h-7 border-l border-slate-300 dark:border-slate-700"></div>
            <div className="flex items-center">
              <a href="#reviews" className="flex items-center text-sm font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-5 h-5 pb-[1px] text-yellow-400"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <div className="ml-1.5 flex">
                  <span>4.9</span>
                  <span className="block mx-2">·</span>
                  <span className="text-slate-600 dark:text-slate-400 underline">142 reviews</span>
                </div>
              </a>
              <span className="hidden sm:block mx-2.5">·</span>
              <div className="hidden sm:flex items-center text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="w-3.5 h-3.5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                  ></path>
                </svg>
                <span className="ml-1 leading-none">New in</span>
              </div>
            </div>
          </div>

          {/* colors */}
          <div className="space-y-3 mt-8">
            <h3>
              Color : <b>{color}</b>{" "}
            </h3>
            <div className="flex flex-wrap space-x-4 space-y-2 lg:space-y-0 items-center">
              <button onClick={() => setColor("Black")} className="w-20 h-8 bg-black border rounded-full cursor-pointer focus:ring"></button>{" "}
              <button onClick={() => setColor("White")} className="w-20 h-8 bg-white border rounded-full cursor-pointer focus:ring"></button>{" "}
              <button onClick={() => setColor("Orange")} className="w-20 h-8 bg-orange-500 border rounded-full cursor-pointer focus:ring"></button>{" "}
              <button onClick={() => setColor("Sky Blue")} className="w-20 h-8 bg-sky-500 border rounded-full cursor-pointer focus:ring"></button>{" "}
            </div>
          </div>

          {/* sizes */}
          <div className="space-y-3 mt-8">
            <div className="flex justify-between items-center">
              <h3>
                Size : <b>{size}</b>{" "}
              </h3>
              <a className="text-blue-500 hover:underline" href="https://www.asos.com/discover/size-charts/" target="_blank">
                See sizing chart
              </a>
            </div>
            <div className="flex flex-wrap justify-between items-center">
              <button
                onClick={() => setSize("XS")}
                className=" border rounded-lg cursor-pointer text-semibold py-3 px-5 focus:text-white focus:bg-[#0284C7]"
              >
                XS
              </button>{" "}
              <button
                onClick={() => setSize("S")}
                className=" border rounded-lg cursor-pointer text-semibold py-3 px-5 focus:text-white focus:bg-[#0284C7]"
              >
                S
              </button>{" "}
              <button
                onClick={() => setSize("M")}
                className=" border rounded-lg cursor-pointer text-semibold py-3 px-5 focus:text-white focus:bg-[#0284C7]"
              >
                M
              </button>{" "}
              <button
                onClick={() => setSize("L")}
                className=" border rounded-lg cursor-pointer text-semibold py-3 px-5 focus:text-white focus:bg-[#0284C7]"
              >
                L
              </button>{" "}
              <button
                onClick={() => setSize("XL")}
                className=" border rounded-lg cursor-pointer text-semibold py-3 px-5 focus:text-white focus:bg-[#0284C7]"
              >
                XL
              </button>
            </div>
          </div>

          {/* cart button */}
          <div className="grid grid-cols-1  lg:grid-cols-[2fr,3fr]  gap-4 mt-8">
            <div className="flex justify-between items-center bg-slate-100/70 px-2 py-3 sm:p-3.5 rounded-full">
              <div>
                <button
                  onClick={Decrement}
                  className="w-8 h-8 rounded-full flex items-center justify-center border border-neutral-400 dark:border-neutral-500 bg-white dark:bg-neutral-900 focus:outline-none hover:border-neutral-700 dark:hover:border-neutral-400 disabled:hover:border-neutral-400 dark:disabled:hover:border-neutral-500 disabled:opacity-50 disabled:cursor-default"
                  type="button"
                  disabled=""
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-4 h-4">
                    <path fill-rule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z" clip-rule="evenodd"></path>
                  </svg>
                </button>
              </div>
              <div>
                <span className="select-none block flex-1 text-center leading-none">{count}</span>
              </div>
              <div>
                <button
                  onClick={Increment}
                  className="w-8 h-8 rounded-full flex items-center justify-center border border-neutral-400 dark:border-neutral-500 bg-white dark:bg-neutral-900 focus:outline-none hover:border-neutral-700 dark:hover:border-neutral-400 disabled:hover:border-neutral-400 dark:disabled:hover:border-neutral-500 disabled:opacity-50 disabled:cursor-default"
                  type="button"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-4 h-4">
                    <path
                      fill-rule="evenodd"
                      d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div>
              <Link to="/cart">
                {" "}
                <button className="cartBtn">
                  <svg className="hidden sm:inline-block w-5 h-5 mb-0.5" viewBox="0 0 9 9" fill="none">
                    <path
                      d="M2.99997 4.125C3.20708 4.125 3.37497 4.29289 3.37497 4.5C3.37497 5.12132 3.87865 5.625 4.49997 5.625C5.12129 5.625 5.62497 5.12132 5.62497 4.5C5.62497 4.29289 5.79286 4.125 5.99997 4.125C6.20708 4.125 6.37497 4.29289 6.37497 4.5C6.37497 5.53553 5.5355 6.375 4.49997 6.375C3.46444 6.375 2.62497 5.53553 2.62497 4.5C2.62497 4.29289 2.79286 4.125 2.99997 4.125Z"
                      fill="currentColor"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.37497 2.625H7.17663C7.76685 2.625 8.25672 3.08113 8.29877 3.66985L8.50924 6.61641C8.58677 7.70179 7.72715 8.625 6.63901 8.625H2.36094C1.2728 8.625 0.413174 7.70179 0.490701 6.61641L0.70117 3.66985C0.743222 3.08113 1.23309 2.625 1.82331 2.625H2.62497L2.62497 2.25C2.62497 1.21447 3.46444 0.375 4.49997 0.375C5.5355 0.375 6.37497 1.21447 6.37497 2.25V2.625ZM3.37497 2.625H5.62497V2.25C5.62497 1.62868 5.12129 1.125 4.49997 1.125C3.87865 1.125 3.37497 1.62868 3.37497 2.25L3.37497 2.625ZM1.82331 3.375C1.62657 3.375 1.46328 3.52704 1.44926 3.72328L1.2388 6.66985C1.19228 7.32107 1.70805 7.875 2.36094 7.875H6.63901C7.29189 7.875 7.80766 7.32107 7.76115 6.66985L7.55068 3.72328C7.53666 3.52704 7.37337 3.375 7.17663 3.375H1.82331Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <span className="ml-3">Add to cart</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuickView;
