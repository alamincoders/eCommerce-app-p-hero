import { RangeSlider, ReactiveBase, SelectedFilters } from "@appbaseio/reactivesearch";
import React from "react";
import Checkbox from "../shared/Checkbox";
import ToggleBtn from "../shared/ToggleBtn";

const CategoryFilter = () => {
  return (
    <aside>
      {/* price range */}
      <div className="w-5/6">
        <header className="font-bold text-base mb-3">Price range</header>
        <ReactiveBase app="good-books-ds" url="http://localhost:3000/" enableAppbase>
          <div className="">
            <div className="">
              <RangeSlider
                dataField="ratings_count"
                componentId="Price"
                range={{
                  start: 30.0,
                  end: 300.0,
                }}
                rangeLabels={{
                  start: "$30",
                  end: "$300",
                }}
              />
            </div>
          </div>
          <SelectedFilters />
        </ReactiveBase>
      </div>
      <hr className="my-10" />
      {/* sale */}
      <div className="flex  justify-between items-center w-5/6">
        <div>
          <h3 className="font-semibold text-base">On sale!</h3>{" "}
          <p className="text-[#6B7294]">
            <small>Products currently on sale</small>
          </p>
        </div>
        <div>
          <ToggleBtn />
        </div>
      </div>
      <hr className="my-6" />
      {/* category */}
      <div>
        <header className="font-bold text-base mb-3">Categories</header>
        <ul className="space-y-1">
          <div className="flex space-x-2">
            <Checkbox />
            <li className="list-none text-sm">Backpacks</li>
          </div>
          <div className="flex space-x-2">
            <Checkbox />
            <li className="list-none text-sm">Travel Bags</li>
          </div>{" "}
          <div className="flex space-x-2">
            <Checkbox />
            <li className="list-none text-sm">Accessories</li>
          </div>{" "}
          <div className="flex space-x-2">
            <Checkbox />
            <li className="list-none text-sm">Laptop Sleeves</li>
          </div>
          <div className="flex space-x-2">
            <Checkbox />
            <li className="list-none text-sm">Organization</li>
          </div>
        </ul>
        <hr className="my-6" />
      </div>{" "}
      {/* color */}
      <div>
        <header className="font-bold text-base mb-3">Colors</header>
        <ul className="space-y-1">
          <div className="flex space-x-2">
            <Checkbox />
            <li className="list-none text-sm">White</li>
          </div>
          <div className="flex space-x-2">
            <Checkbox />
            <li className="list-none text-sm">Brown</li>
          </div>{" "}
          <div className="flex space-x-2">
            <Checkbox />
            <li className="list-none text-sm">Yellow</li>
          </div>{" "}
          <div className="flex space-x-2">
            <Checkbox />
            <li className="list-none text-sm">Violet</li>
          </div>
          <div className="flex space-x-2">
            <Checkbox />
            <li className="list-none text-sm">Pink</li>
          </div>
          <div className="flex space-x-2">
            <Checkbox />
            <li className="list-none text-sm">Green</li>
          </div>
          <div className="flex space-x-2">
            <Checkbox />
            <li className="list-none text-sm">Blue</li>
          </div>{" "}
          <div className="flex space-x-2">
            <Checkbox />
            <li className="list-none text-sm">Navy</li>
          </div>
        </ul>
        <hr className="my-6" />
      </div>
      {/* size */}
      <div>
        <header className="font-bold text-base mb-3">Sizes</header>
        <ul className="space-y-1">
          <div className="flex space-x-2 relative">
            <Checkbox />
            <li className="list-none text-sm">XS</li>
            <div class="w-3.5 h-3.5 flex items-center justify-center bg-orange-500 absolute top-0 left-8 rounded-full text-[10px] leading-none text-white font-medium">
              <span class="mt-[1px]">4</span>
            </div>
          </div>
          <div className="flex space-x-2 relative">
            <Checkbox />
            <li className="list-none text-sm">S</li>
            <div class="w-3.5 h-3.5 flex items-center justify-center bg-orange-500 absolute top-0 left-8 rounded-full text-[10px] leading-none text-white font-medium">
              <span class="mt-[1px]">6</span>
            </div>
          </div>{" "}
          <div className="flex space-x-2 relative">
            <Checkbox />
            <li className="list-none text-sm">M</li>
            <div class="w-3.5 h-3.5 flex items-center justify-center bg-orange-500 absolute top-0 left-8 rounded-full text-[10px] leading-none text-white font-medium">
              <span class="mt-[1px]">8</span>
            </div>
          </div>
          <div className="flex space-x-2 relative">
            <Checkbox />
            <li className="list-none text-sm">L</li>
            <div class="w-3.5 h-3.5 flex items-center justify-center bg-orange-500 absolute top-0 left-8 rounded-full text-[10px] leading-none text-white font-medium">
              <span class="mt-[1px]">1</span>
            </div>
          </div>{" "}
          <div className="flex space-x-2 relative">
            <Checkbox />
            <li className="list-none text-sm">XL</li>
            <div class="w-3.5 h-3.5 flex items-center justify-center bg-orange-500 absolute top-0 left-8 rounded-full text-[10px] leading-none text-white font-medium">
              <span class="mt-[1px]">2</span>
            </div>
          </div>
          <div className="flex space-x-2 relative">
            <Checkbox />
            <li className="list-none text-sm">2XL</li>
            <div class="w-3.5 h-3.5 flex items-center justify-center bg-orange-500 absolute top-0 left-10  rounded-full text-[10px] leading-none text-white font-medium">
              <span class="mt-[1px]">0</span>
            </div>
          </div>
        </ul>
        <hr className="my-6" />
      </div>
      {/* sort order */}
      <div className="">
        <header className="font-bold text-base mb-3">Sort order</header>
        <ul className="space-y-1">
          <div className="flex space-x-2">
            <Checkbox />
            <li className="list-none text-sm">Most popular</li>
          </div>
          <div className="flex space-x-2">
            <Checkbox />
            <li className="list-none text-sm">Best selling</li>
          </div>{" "}
          <div className="flex space-x-2">
            <Checkbox />
            <li className="list-none text-sm">Newest</li>
          </div>{" "}
          <div className="flex space-x-2">
            <Checkbox />
            <li className="list-none text-sm">Price Low - Hight</li>
          </div>
          <div className="flex space-x-2">
            <Checkbox />
            <li className="list-none text-sm">Price Hight - Low</li>
          </div>
        </ul>
      </div>
    </aside>
  );
};

export default CategoryFilter;
