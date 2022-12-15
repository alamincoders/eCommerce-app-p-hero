import React from "react";
import { productsData } from "../../constant/productData";
import UiProduct from "./UiProduct";

const NewArrivals = () => {
  return (
    <div className="bg-white  my-16 md:my-24 lg:my-32 relative container">
      <div className="content text-2xl md:text-3xl lg:text-4xl font-semibold mb-16">
        {/* heading text */}
        <h2 className="text-center lg:text-left">
          New Arrivals. <span className="text-gray-600">REY backpacks & bags</span>
        </h2>
      </div>
      {/* main */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {productsData.slice(3, 7).map((data, i) => (
          <UiProduct  data={data} key={i} />
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
