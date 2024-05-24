import React from "react";
import { RiSearchLine } from "react-icons/ri";
import { GoLock } from "react-icons/go";
import { FaUserAlt } from "react-icons/fa";
import { GoGitCompare } from "react-icons/go";
import { GoHeart } from "react-icons/go";

const Navber = () => {
  return (
    <div className="bg-[#eeeeee] ">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between py-[20px]">
        {/* Menu Frist Container */}
        <h2 className="font-nunito text-[25px] font-bold ">Tshirt</h2>

        {/* Menu box middle container */}
        <div>
          <ul className="flex items-center gap-[20px]">
            <li className="text-red-400">Home</li>
            <li>Categories</li>
            <li>Products</li>
            <li>Pages</li>
            <li>Blog</li>
          </ul>
        </div>

        {/*Menu Last Container  */}
        <div className="flex items-center gap-[20px]">
          <div className="h-[35px] w-[35px] bg-white flex items-center justify-center rounded-full">
            <RiSearchLine />
          </div>
          <div className="h-[35px] w-[35px] bg-white flex items-center justify-center rounded-full">
            <GoGitCompare />
          </div>
          <div className="h-[35px] w-[35px] bg-white flex items-center justify-center rounded-full relative">
            <div className="h-[15px] w-[15px] flex items-center justify-center rounded-full bg-red-400 text-white absolute top-0 right-0">
              <small className="text-[10px]"> 3</small>
            </div>
            <GoHeart />
          </div>
          <div className="h-[35px] w-[35px] bg-white flex items-center justify-center rounded-full relative">
            <div className="h-[15px] w-[15px] flex items-center justify-center rounded-full bg-red-400 text-white absolute top-0 right-0">
              <small className="text-[10px]"> 1</small>
            </div>
            <GoLock />
          </div>

          <FaUserAlt />
        </div>
      </div>
    </div>
  );
};

export default Navber;
