import React from "react";
import cart_img from "../../assets/images/cart/cart1.webp";
import {
  MdOutlineStar,
  MdOutlineStarBorder,
  MdOutlineStarHalf,
} from "react-icons/md";

const FeaturedCart = () => {
  return (
    <div className="flex gap-[20px] ">
      {/* cart img */}
      <div className="h-[115px] w-[90px] bg-[#eeeeee]">
        <img className="h-full " src={cart_img} alt="cart img" />
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
