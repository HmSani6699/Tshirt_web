import React from "react";
import man_img from "../../../assets/images/cart/man.webp";
import GalleryCart from "../../../component/GalleryCart/GalleryCart";
import ManWomanCart from "../../../component/ManWomanCart/ManWomanCart";

const Man = () => {
  return (
    <div className="flex  w-full h-[750px] my-[50px]  overflow-hidden">
      {/* left content */}
      <div className=" w-[40%] h-full  ">
        <img className="w-full h-full" src={man_img} alt="" />
      </div>
      {/* Right content */}
      <div className=" w-[60%] pl-[30px] pr-[100px]">
        <div className="border-b border-gray-300">
          <h2 className="text-[25px] font-semibold pb-[6px]">Man Product</h2>
        </div>

        {/* Product container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mt-[40px]">
          {Array.from({ length: 6 }).map((item) => (
            <ManWomanCart img={man_img} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Man;
