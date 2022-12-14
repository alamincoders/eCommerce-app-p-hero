import React from "react";
import { Link } from "react-router-dom";
import earnImg from "../../assets/earn.png";
import logo from "../../assets/logo.svg";
import Button from "../shared/Button";

const EarnMoneyBanner = () => {
  return (
    <div className="container  py-16 md:py-24 lg:py-32">
      <div className="flex flex-col lg:flex-row items-center justify-center w-full">
        <div className="w-full space-y-6">
          <div className="w-20 lg:w-32">
            <Link to="/">
              <img className="w-full  h-full" src={logo} alt="" />
            </Link>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-7xl  font-semibold flex flex-col lg:leading-snug">
            <span>Earn free money</span>
            <span>with Aieeb</span>
          </h1>
          <p className="text-xl text-gray-800">With Ciseco you will get freeship & savings combo...</p>
          <div className=" space-x-0 lg:space-x-4 space-y-4">
            <Button title="Savings combo" icon={false} bgColor={true} textColor={true} hoverBtn={true} />{" "}
            <Button title="Discover more" icon={false} bgColor={false} textColor={false} hoverBtn={false} />
          </div>
        </div>
        <div className="w-full mt-10 md:mt-0 lg:mt-0">
          <img className="w-full h-full" src={earnImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default EarnMoneyBanner;
