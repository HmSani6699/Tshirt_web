import React from "react";
import woman_img from "../../../assets/images/cart/weman.webp";
import GalleryCart from "../../../component/GalleryCart/GalleryCart";
import ManWomanCart from "../../../component/ManWomanCart/ManWomanCart";
const Woman = () => {
  return (
    <div className="flex  w-full h-[750px] my-[100px]  overflow-hidden">
      {/* left content */}
      <div className=" w-[60%] pr-[30px] pl-[100px]">
        <div className="border-b border-gray-300">
          <h2 className="text-[25px] font-semibold pb-[6px]">Woman Product</h2>
        </div>
        {/* Product container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mt-[40px]">
          {Array.from({ length: 6 }).map((item) => (
            <ManWomanCart img={woman_img} />
          ))}
        </div>
      </div>

      {/* Right content */}
      <div className=" w-[40%] h-full  ">
        <img className="w-full h-full" src={woman_img} alt="" />
      </div>
    </div>
  );
};

export default Woman;
