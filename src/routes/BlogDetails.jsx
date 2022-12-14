/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import ShareBtn from "../components/screens/ShareBtn";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";
import blogImg from "../assets/blog/p-2.jpg";
import authorImg from "../assets/author/Image-3.f257bc3c2ce5ae3a57db.png";

const BlogDetails = () => {
  return (
    <>
      <header className="relative mt-[65px]">
        <Navbar />
      </header>

      <main className="container mx-auto py-8 md:py-12 lg:py-16">
        <div>
          <h2 className="w-5/6 text-xl md:text-2xl lg:text-3xl xl:text-4xl text-[#3379B8]">Did Facebook Ads CPM Go Up This Holiday Season?</h2>
          <p className="mt-1">
            <span>December 11, 2022 by </span>
            <span className="text-orange-500">Jon Loomer </span>-<span className="text-orange-500"> 0 Comments</span>
          </p>
        </div>
        {/* blog description */}
        <div className="mt-10">
          <p className="text-base text-[#2A3342]">
            Historically, the average <span className="text-orange-500 font-semibold hover:underline cursor-pointer">CPM</span> measures the cost per
            1,000 impressions. It's a good metric to evaluate competition level and costs to reach your audience. More Click word to read full
            description (Cost Per 1,000 Impressions){" "}
            <span className="text-orange-500 font-semibold hover:underline cursor-pointer">
              has increased for Facebook advertisers during the holidays
            </span>{" "}
            as competition for eyeballs and ad spending increase. Did it happen this year?
          </p>{" "}
          <br />
          <br />
          <p className="text-base text-[#2A3342]">
            Prior to 2020, advertisers routinely saw CPM costs double, triple, or more during the most competitive times. I wrote a{" "}
            <span className="text-orange-500 font-semibold hover:underline cursor-pointer"> blog post about this phenomenon </span> as competition for
            eyeballs and ad spending increase. Did it happen this year?
          </p>
          <div className="w-full h-[400px] my-5 rounded-lg">
            <img className="w-full h-full object-cover object-center rounded-lg" src={blogImg} alt="" />
          </div>
          <p className="text-base text-[#2A3342]">
            Of course, things got a bit weird and difficult to predict since 2020. Let’s take a look at what has happened so far this holiday season.
          </p>
        </div>

        {/* footer blogs */}
        <div className="my-10 ml-0 lg:ml-20">
          <h3 className="text-3xl  text-blue-900">Your Turn</h3>
          <p className="text-base mt-3">
            I haven’t seen a dramatic increase in CPM related to my advertising, though that’s the definition of small sample sizes. What are you
            seeing?
          </p>
          <p className="font-bold mt-2">
            <i>Let me know in the comments below!</i>
          </p>
          {/* share */}
          <div className="mt-10">
            <h3 className="font-medium">Share via:</h3>
            <ShareBtn />
          </div>
          {/* tags */}
          <div>
            <div className="py-4 bg-white">
              <div>
                <h2 className="text-xl font-medium text-[#111]">Tags</h2>
                <div className="w-10 mt-[4px] h-[4px] bg-green-300 rounded-lg"></div>
                <div className="flex flex-wrap gap-3 mt-5">
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

        {/* comment box */}
        <div className=" ml-0 lg:ml-20">
          <div className="flex justify-between items-center">
            <div>
              <p>0 Comments</p>
            </div>
            <div className="sharing-buttons flex flex-wrap">
              <a
                className="border-2 duration-200 ease inline-flex items-center mb-1 mr-1 transition py-1 px-2 text-sm rounded text-white border-zinc-600 bg-zinc-600 hover:bg-zinc-700 hover:border-zinc-700"
                target="_blank"
                rel="noopener"
                href="mailto:?subject=&amp;body="
                aria-label="Share by Email"
                draggable="false"
              >
                <svg aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4">
                  <title>Email</title>
                  <path d="M464 64a48 48 0 0 1 29 86L275 314c-11 8-27 8-38 0L19 150a48 48 0 0 1 29-86h416zM218 339c22 17 54 17 76 0l218-163v208c0 35-29 64-64 64H64c-35 0-64-29-64-64V176l218 163z"></path>
                </svg>
                <span className="ml-1">Email</span>
              </a>
            </div>
          </div>
          <form action="#">
            <div className="flex flex-col space-y-3 lg:flex-row space-x-3">
              <div className="w-20 h-20 rounded-3xl">
                <img className="w-full h-full rounded-3xl object-fill object-center" src={authorImg} alt="" />
              </div>
              <textarea
                placeholder="Type your opinion..."
                name="comment"
                id="comment"
                className="w-full rounded-2xl border-2 border-gray-400 p-4 focus:outline-none"
                rows="4"
              ></textarea>
            </div>
            <div className="text-right mt-3">
              <input type="submit" value="Comment" className="rounded-2xl cursor-pointer bg-orange-400 text-white py-2 px-4" />
            </div>
          </form>
          <div className="text-center">
            <p className="text-[#B4BDC3] leading-[100px]">
              <small>Be the first to comment.</small>
            </p>
          </div>
        </div>
        <hr className="text-gray-500" />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default BlogDetails;
