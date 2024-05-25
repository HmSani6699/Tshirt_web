import React from "react";
import cart_image from "../../../src/assets/images/cart/cart.webp";
import {
  MdOutlineStar,
  MdOutlineStarHalf,
  MdOutlineStarBorder,
} from "react-icons/md";
import { GoHeart, GoLock } from "react-icons/go";
import { SlEye } from "react-icons/sl";

const GalleryCart = () => {
  return (
    <div className="border rounded-md">
      {/* Cart image */}
      <div className="h-[300px] bg-[#eeeeee] relative group">
        <img
          className="h-full w-full rounded-md"
          src={cart_image}
          alt="Cart item"
        />
        {/* Hover content */}
        <div className="absolute inset-0 bg-[#cbc9c9a2] transition-opacity duration-500 opacity-0 group-hover:opacity-100 z-10 flex flex-col items-end gap-[15px] pt-[10px] pr-[10px]">
          <div className="h-[35px] w-[35px] cursor-pointer shadow-md hover:bg-red-400 bg-white flex items-center justify-center rounded-full">
            <GoHeart className="hover:text-white" />
          </div>
          <div className="h-[35px] w-[35px] cursor-pointer shadow-md hover:bg-red-400 bg-white flex items-center justify-center rounded-full">
            <SlEye className="hover:text-white" />
          </div>
          <div className="h-[35px] w-[35px] cursor-pointer shadow-md hover:bg-red-400 bg-white flex items-center justify-center rounded-full">
            <GoLock className="hover:text-white" />
          </div>
        </div>
        {/* Discount div */}
        <div className="absolute top-[20px] left-0 w-[60px] pl-[10px] rounded-r-full bg-red-400 text-white">
          <small>-70%</small>
        </div>
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
        <h2 className="font-semibold mt-[6px]">$20.00</h2>
      </div>
    </div>
  );
};

export default GalleryCart;
