import React from "react";
import { Link } from "react-router-dom";

const UiBlog = (props) => {
  const { title, desc, author, thumbnail } = props.data;
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-4 cursor-pointer ">
      <div className="">
        <div className="desc space-y-3">
          <Link to="/blogs/1">
            <h2 className="text-base font-medium hover:text-blue-900 hover:underline cursor-pointer duration-200 transition">{title}</h2>
          </Link>
          <p className="text-[#B1B5BD]">{desc.slice(0, 100)}...</p>
          <div className="flex gap-2 items-center">
            <img className="w-6 h-6 rounded-[50%]" src={author} alt="author" />
            <h3>Belinda Rer ·</h3>
            <p className="text-[#B1B5BD]">May 20, 2022</p>
          </div>
        </div>
      </div>
      <div className="h-[205px] w-full">
        <img className="w-full h-full object-cover rounded-[30px]" src={thumbnail} alt="" />
      </div>
    </div>
  );
};

export default UiBlog;
