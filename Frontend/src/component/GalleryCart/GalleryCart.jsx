import React from "react";
import cart_image from "../../../src/assets/images/cart/cart.webp";
import { MdOutlineStar } from "react-icons/md";
import { MdOutlineStarHalf } from "react-icons/md";
import { MdOutlineStarBorder } from "react-icons/md";

const GalleryCart = () => {
  return (
    <div className="border rounded-md">
      {/* Cart image */}
      <div className="h-[300px]">
        <img className="h-full w-full rounded-md" src={cart_image} alt="" />
      </div>
      {/* Cart text content */}
      <div className="text-center">
        <h2 className="text-[14px] text-gray-500 mt-[10px]">Category</h2>
        <h2 className="text-[20px] text-black font-semibold">Yellow T-Shirt</h2>
        <div className="flex justify-center">
          <div className="flex gap-[8px]">
            <MdOutlineStar className="text-red-400" />
            <MdOutlineStar className="text-red-400" />
            <MdOutlineStar className="text-red-400" />
            <MdOutlineStarHalf className="text-red-400" />
            <MdOutlineStarBorder className="text-red-400" />
          </div>
        </div>
        <h2 className="font-semibold mt-[6px]"> $20.00</h2>
      </div>
    </div>
  );
};

export default GalleryCart;
