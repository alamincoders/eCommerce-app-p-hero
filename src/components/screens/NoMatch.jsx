import React from "react";
import error from "../../assets/404.gif";

const NoMatch = () => {
  return (
    <div className="container bg-slate-100 p-5 rounded-2xl my-8">
      <img className="w-full h-full" src={error} alt="" />
    </div>
  );
};

export default NoMatch;
