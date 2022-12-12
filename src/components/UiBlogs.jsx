import React from "react";
import blogThumbnail from "../assets/blog/pexels-photo-6168061.jpeg";
import author1 from "../assets/author/Image-2.405c62ff9ad88c47e28c.png";
import UiBlog from "./UiBlog";
import Button from "./Button";
import { Link } from "react-router-dom";
import { uiBlogData } from "../constant/uiBlogData";

const UiBlogs = () => {
  return (
    <div className="my-16 md:my-24 lg:my-32 bg-[#F7F7F9] dark:bg-black/20 container py-16 rounded-[30px]">
      <div className="content text-2xl md:text-3xl lg:text-4xl font-semibold mb-16">
        {/* heading text */}
        <h2>
          The latest news. <span className="text-gray-600">From the Ciseco blog</span>
        </h2>
      </div>
      {/* blog */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <div className="cursor-pointer">
          <div className="w-full h-[470px]">
            <img className="w-full h-full object-cover rounded-[30px]" src={blogThumbnail} alt="blog thumbnail" />
          </div>
          <div className="desc mt-10 space-y-4">
            <h2 className="text-2xl font-medium hover:text-blue-900 cursor-pointer duration-200 transition">
              Turpis Cursus In Hac Habitasse Platea Dictumst Quisque Sagittis Purus
            </h2>
            <p className="text-[#B1B5BD]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid quam repellat alias maiores voluptates fugit repudiandae dignissimos
              nostrum harum nam!...
            </p>
            <div className="flex gap-2 items-center">
              <img className="w-6 h-6 rounded-[50%]" src={author1} alt="author" />
              <h3>Belinda Rer ·</h3>
              <p className="text-[#B1B5BD]">May 20, 2022</p>
            </div>
          </div>
        </div>
        <div className="space-y-12">
          {uiBlogData.map((data, i) => (
            <UiBlog data={data} key={i} />
          ))}
        </div>
      </div>

      <div className="text-center">
        <Link to="/blogs">
          <Button title="Show all blog articles" icon={false} bgColor={false} textColor={false} hoverBtn={false} />
        </Link>
      </div>
    </div>
  );
};

export default UiBlogs;
