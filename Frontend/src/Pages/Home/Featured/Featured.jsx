import React from "react";
import FeaturedCart from "../../../component/FeaturedCart/FeaturedCart";

const Featured = () => {
  return (
    <div className="max-w-[1200px] mx-auto ">
      <h2 className="text-[25px] text-[#333333] text-center">
        Featured Product
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[25px] my-[50px]">
        {Array.from({ length: 12 }).map((item) => (
          <FeaturedCart />
        ))}
      </div>
    </div>
  );
};

export default Featured;
