import React from "react";
import { FaInstagramSquare, FaLinkedin, FaFacebookSquare, FaTwitterSquare, FaGooglePlusSquare } from "react-icons/fa";
import { BsArrowRightShort } from "react-icons/bs";
import blogImg from "../../assets/blog/p-1.jpg";
import recentBlog1 from "../../assets/blog/p-3.jpg";
import { Link } from "react-router-dom";
const Blog = () => {
  const today = new Date().toLocaleDateString();
  return (
    <>
      {" "}
      <section className="bg-gray-50 py-8 md:py-12 lg:py-16">
        {/* main blog section */}
        <div className="container mx-auto  grid grid-cols-1 lg:grid-cols-[2fr,1fr] grid-rows-1 gap-x-10">
          <div className="">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5">
              {/* every blog start */}
              {Array.from({ length: 4 }).map((_, idx) => (
                <Link to="/blogs/1" key={idx}>
                  <div className="p-5 lg:p-10 bg-white group  cursor-pointer relative shadow rounded">
                    <div className="overflow-hidden cursor-pointer w-full h-[300px]">
                      <img
                        src={blogImg}
                        alt=""
                        className=" w-full h-full object-cover object-center rounded-[15px] hover:scale-110 transition duration-300 ease-in-out"
                      />
                    </div>
                    {/* author */}
                    <div className="author my-8">
                      <ul className="flex flex-wrap lg:flex-nowrap  space-x-8 ">
                        <li className=" text-gray-500 text-sm">Business, News </li>
                        <li className="list-disc text-gray-500 text-sm"> by admin </li>
                        <li className="list-disc text-gray-500 text-sm">March 12, 2017</li>
                      </ul>
                    </div>
                    {/* title */}
                    <div className="title text-gray-700 group-hover:text-blue-800 group-hover:underline duration-200 font-semibold text-xl lg:text-2xl mb-5 ">
                      <h>It’s your world Take control</h>
                      <div className="h-[2px] w-20 bg-gray-300 mt-5"></div>
                    </div>
                    {/* desc */}
                    <div className="text text-gray-600">
                      <p>
                        <small>
                          {" "}
                          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore dignissimos, sapiente blanditiis adipisci possimus
                          aliquid odio cumque iure. Facilis, nisi libero. Totam dolorem aperiam deleniti voluptatem laudantium aut, id eius...
                        </small>
                      </p>
                    </div>

                    {/* social and read more button */}

                    <div className="block lg:flex space-y-4 lg:space-y-0 flex-wrap justify-between items-center mt-10">
                      <div className="button mb-4">
                        <Link to="/blogs/1">
                          <button className="uppercase py-2.5 px-8 rounded-full border-2 border-gray-300 hover:bg-black transition duration-300 ease-in-out hover:text-white">
                            Read more
                          </button>
                        </Link>
                      </div>
                      <div className="social flex items-center  space-x-2 py-2.5 px-8 rounded-full  bg-gray-200">
                        <h3>SHARE: </h3>
                        <span>
                          <FaFacebookSquare className="cursor-pointer rounded-[50%] " />
                        </span>
                        <span>
                          <FaTwitterSquare className="cursor-pointer rounded-[50%] " />
                        </span>
                        <span>
                          <FaInstagramSquare className="cursor-pointer rounded-[50%] " />
                        </span>
                        <span>
                          <FaLinkedin className="cursor-pointer rounded-[50%] " />
                        </span>
                        <span>
                          <FaGooglePlusSquare className="cursor-pointer rounded-[50%] " />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
              {/* every blog end */}
            </div>
          </div>

          <div className="">
            <div className="p-4 bg-white mt-5">
              <input type="text" className="w-full p-3 focus:outline-green-500 bg-transparent border rounded" placeholder="Search..." />
            </div>

            {/* categories */}
            <div className="p-4 bg-white mt-16">
              <div>
                <h2 className="text-xl font-medium text-[#111]">Categories</h2>
                <div className="w-20 mt-[4px] h-[4px] bg-green-300 rounded-lg"></div>
                {Array.from({ length: 4 }).map((_, idx) => (
                  <div className="mt-10 transition duration-300 hover:text-blue-600 cursor-pointer">
                    <div className="flex items-center justify-between my-3">
                      <div>
                        <h3>Event</h3>
                      </div>
                      <div>
                        <BsArrowRightShort />
                      </div>
                    </div>
                    <div className="w-full h-[2px] bg-slate-400/10 "></div>
                  </div>
                ))}
              </div>
            </div>

            {/* recent post */}
            <div className="p-4 bg-white mt-16">
              <div>
                <h2 className="text-xl font-medium text-[#111]">Recent Posts</h2>
                <div className="w-20 mt-[4px] h-[4px] bg-green-300 rounded-lg"></div>
                {Array.from({ length: 4 }).map((_, i) => (
                  <div className="flex items-start justify-center space-x-4 mt-10 mb-5 cursor-pointer">
                    <div className="w-full h-[100px]">
                      <img className="w-full h-full rounded-md" src={recentBlog1} alt="" />
                    </div>
                    <div>
                      <p className="text-sm mb-4 font-medium hover:text-blue-600 hover:underline transition duration-300">
                        20 Questions You Should Always Ask About Security Software Before Buying It.
                      </p>
                      <p className="text-slate-500 ">
                        {" "}
                        <small>{today}</small>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* tag */}
            <div className="p-4 bg-white mt-16">
              <div>
                <h2 className="text-xl font-medium text-[#111]">Tags</h2>
                <div className="w-10 mt-[4px] h-[4px] bg-green-300 rounded-lg"></div>
                <div className="flex flex-wrap gap-3 mt-10">
                  <button className="tag_btn">Cloth</button>
                  <button className="tag_btn">Shoes</button>
                  <button className="tag_btn">Wallets</button>
                  <button className="tag_btn">Gloves</button>
                  <button className="tag_btn">Sneakers</button>
                  <button className="tag_btn">Boots</button>
                  <button className="tag_btn">Payment</button>
                  <button className="tag_btn">Slip-Ons</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
    </>
  );
};

export default Blog;
