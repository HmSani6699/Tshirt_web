import React from "react";
import cart_img from "../../assets/images/cart/cart1.webp";
import {
  MdOutlineStar,
  MdOutlineStarBorder,
  MdOutlineStarHalf,
} from "react-icons/md";
import { HiOutlineLink } from "react-icons/hi2";

const FeaturedCart = () => {
  return (
    <div className="flex gap-[20px] ">
      {/* cart img */}
      <div className="h-[115px] w-[90px] bg-[#eeeeee] relative group cursor-pointer">
        <img className="h-full " src={cart_img} alt="cart img" />
        <div className="absolute inset-0 bg-[#cbc9c9a2] transition-opacity duration-500 opacity-0 group-hover:opacity-100 z-10 ">
          <div className="flex items-center justify-center border h-full">
            <div className="h-[35px] w-[35px] cursor-pointer shadow-md hover:bg-red-400 bg-white flex items-center justify-center rounded-full has-tooltip">
              <HiOutlineLink className="hover:text-white" />
              <span className="tooltip relative shadow-lg p-[4px] bg-[#383838] text-white -mt-[85px] w-full whitespace-nowrap text-[13px] ">
                <p className="relative z-[2] text-center">Add to Cart</p>
                <div className="bg-[#383838] p-[7px]  rotate-[135deg] absolute top-[18px] left-[41%]"></div>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* cart text */}
      <div>
        <h2>Gray T-shirt</h2>
        <div className="flex gap-[8px]">
          <MdOutlineStar className="text-red-400" />
          <MdOutlineStar className="text-red-400" />
          <MdOutlineStar className="text-red-400" />
          <MdOutlineStarHalf className="text-red-400" />
          <MdOutlineStarBorder className="text-red-400" />
        </div>
        <div className="flex gap-[10px] text-center justify-center">
          <h2 className="font-semibold mt-[6px] text-gray-500 ">
            <del>$20.00</del>
          </h2>
          <h2 className="font-semibold mt-[6px]">$20.00</h2>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCart;
