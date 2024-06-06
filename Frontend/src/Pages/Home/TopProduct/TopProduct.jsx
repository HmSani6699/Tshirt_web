import React from "react";
import image1 from "../../../assets/images/top1.png";
import image2 from "../../../assets/images/top2.png";

const TopProduct = () => {
  return (
    <div className="bg-[#eeeeee] ">
      <div className=" flex items-center justify-between max-w-[900px] mx-auto my-[100px] py-[40px]">
        {/* left side  */}
        <div>
          <h2 className="text-[35px] font-semibold whitespace-nowrap">
            Looking for the best price
          </h2>
          <p className="text-gray-400 pb-[30px]">Lorem tShirt website</p>
          <button className="font-semibold bg-red-400 text-white py-[6px] px-[15px]">
            Shop Now
          </button>
        </div>
        {/* Right side */}
        <div className="relative border">
          <div>
            <img src={image2} alt="" />
          </div>
          <div className="absolute bottom-0 -right-[50px]">
            <img className="h-[300px]" src={image1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopProduct;
