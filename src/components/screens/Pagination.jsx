import React from "react";

const Pagination = ({ startPage, endPage, totalPage }) => {
  return (
    <div className=" my-10 container">
      <div className="flex justify-between items-center flex-col lg:flex-row space-y-3 ">
        <div>
          <p className=" text-gray-500 font-medium hover:text-blue-400 duration-200 cursor-pointer">
            Showing {startPage} to {endPage} of {totalPage} results
          </p>
        </div>
        <div className="flex flex-wrap">
          <button className="tag_btn hover:text-blue-500 transition duration-200 ease-in">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
            </svg>
          </button>
          <button className="tag_btn focus:bg-pink-500 hover:text-blue-500 transition duration-200 ease-in">1</button>
          <button className="tag_btn focus:bg-pink-500 hover:text-blue-500 transition duration-200 ease-in">2</button>
          <button className="tag_btn focus:bg-pink-500 hover:text-blue-500 transition duration-200 ease-in">3</button>
          <button className="tag_btn focus:bg-pink-500 hover:text-blue-500 transition duration-200 ease-in">4</button>
          <button disabled className="p-2 bg-gray-100 hover:text-blue-500 transition duration-200 ease-in">
            .
          </button>
          <button disabled className="p-2 bg-gray-100 hover:text-blue-500 transition duration-200 ease-in">
            .
          </button>
          <button disabled className="p-2 bg-gray-100 hover:text-blue-500 transition duration-200 ease-in">
            .
          </button>
          <button className="tag_btn focus:bg-pink-500 hover:text-blue-500 transition duration-200 ease-in">8</button>
          <button className="tag_btn focus:bg-pink-500 hover:text-blue-500 transition duration-200 ease-in">9</button>
          <button className="tag_btn focus:bg-pink-500 hover:text-blue-500 transition duration-200 ease-in">10</button>
          <button className="tag_btn  hover:text-blue-500 transition duration-200 ease-in">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
