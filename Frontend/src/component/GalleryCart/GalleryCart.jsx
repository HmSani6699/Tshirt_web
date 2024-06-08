import React from "react";
import cart_image from "../../../src/assets/images/cart/cart.webp";
import {
  MdOutlineStar,
  MdOutlineStarHalf,
  MdOutlineStarBorder,
} from "react-icons/md";
import { GoHeart, GoLock } from "react-icons/go";
import { SlEye } from "react-icons/sl";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";
import { Link } from "react-router-dom";

const GalleryCart = () => {
  return (
    <div className=" rounded-md">
      {/* Cart image */}
      <div className="h-[300px] bg-[#eeeeee] relative group">
        <img
          className="h-full w-full rounded-md"
          src={cart_image}
          alt="Cart item"
        />
        {/* Hover content */}
        <div className="absolute inset-0  transition-opacity duration-500 opacity-0 group-hover:opacity-100 z-10 ">
          <div className="flex flex-col items-end  gap-[15px] pt-[15px] pr-[10px]">
            <div className="h-[35px] w-[35px] cursor-pointer shadow-md hover:bg-red-400 bg-white flex items-center justify-center rounded-full has-tooltip">
              <GoHeart className="hover:text-white" />
              <span className="tooltip relative shadow-lg p-[5px] bg-[#383838] text-white -ml-[160px]  whitespace-nowrap text-[13px] ">
                <p className="relative z-[2]">Add to Whislist</p>
                <div className="bg-[#383838] p-[7px]  rotate-[135deg] absolute top-[8px] -right-[4px]"></div>
              </span>
            </div>
            <div className="h-[35px] w-[35px] cursor-pointer shadow-md hover:bg-red-400 bg-white flex items-center justify-center rounded-full has-tooltip">
              <SlEye className="hover:text-white" />
              <span className="tooltip relative shadow-lg p-[5px] bg-[#383838] text-white -ml-[135px]  whitespace-nowrap text-[13px] ">
                <p className="relative z-[2]"> Quick View</p>
                <div className="bg-[#383838] p-[7px]  rotate-[135deg] absolute top-[8px] -right-[4px]"></div>
              </span>
            </div>
            <div className="h-[35px] w-[35px] cursor-pointer shadow-md hover:bg-red-400 bg-white flex items-center justify-center rounded-full has-tooltip">
              <GoLock className="hover:text-white" />
              <span className="tooltip relative shadow-lg p-[5px] bg-[#383838] text-white -ml-[140px]  whitespace-nowrap text-[13px] ">
                <p className="relative z-[2]">Add to Cart</p>
                <div className="bg-[#383838] p-[7px]  rotate-[135deg] absolute top-[8px] -right-[4px]"></div>
              </span>
            </div>
          </div>
          <div className="absolute bottom-0 w-full flex items-center bg-red-400 justify-center">
            <Link to="/product-details">
              {" "}
              <button className=" w-full text-white py-[10px] ">
                QUICK VIEW
              </button>{" "}
            </Link>
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

export default GalleryCart;
