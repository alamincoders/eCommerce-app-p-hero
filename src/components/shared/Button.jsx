import React from "react";
import { Link } from "react-router-dom";

const Button = ({ title, icon, bgColor, textColor, hoverBtn }) => {
  return (
    <Link to="/category">
      <button
        className={`mt-8 ${bgColor ? "bg-black" : "bg-white"} ${textColor ? "text-white" : "text-black"} py-3 md:py-4 lg:py-5 px-7 rounded-full ${
          hoverBtn ? "hover:bg-gray-800/90" : ""
        } transition-colors duration-200 shadow-2xl shadow-red-200 cursor-pointer z-50`}
      >
        {title}
        <div className="search cursor-pointer inline-block align-middle">
          {icon && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 ml-2 text-white"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          )}
        </div>
      </button>
    </Link>
  );
};

export default Button;
