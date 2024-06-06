import React from "react";
import img_1 from "../../../assets/images/tshirt1.png";
import img_2 from "../../../assets/images/tshirt2.png";
import img_3 from "../../../assets/images/tshirt3.png";
const ProductOffers = () => {
  return (
    <div className="h-[200px] grid grid-cols-1 lg:grid-cols-3 gap-[20px] max-w-[1200px] mx-auto mt-[100px]">
      {/* offer 1 */}
      <div className="w-full h-[160px] cursor-pointer bg-[#eff5f5] flex items-center p-[20px] group hover:h-[170px] transition-all duration-500 relative">
        <div className="absolute top-[50px]">
          <h2 className="text-[22px] font-semibold">New Products</h2>
          <p className="text-[20px] text-gray-400">Lorem ipsum dolor</p>
        </div>
        <div className="mb-[-50px] ml-[175px]">
          <img
            className="drop-shadow-md w-[180px] transition-transform duration-500 transform group-hover:scale-110 "
            src={img_1}
            alt=""
          />
        </div>
      </div>
      {/* offer 2 */}
      <div className="w-full h-[160px] cursor-pointer bg-[#eff5f5] flex items-center p-[20px] group hover:h-[170px] transition-all duration-500 relative">
        <div className="absolute top-[50px]">
          <h2 className="text-[22px] font-semibold">New Products</h2>
          <p className="text-[20px] text-gray-400">Lorem ipsum dolor</p>
        </div>
        <div className="mb-[-50px] ml-[175px]">
          <img
            className="drop-shadow-md w-[180px] transition-transform duration-500 transform group-hover:scale-110"
            src={img_2}
            alt=""
          />
        </div>
      </div>
      {/* offer 3 */}
      <div className="w-full h-[160px] cursor-pointer bg-[#eff5f5] flex items-center p-[20px] group hover:h-[170px] transition-all duration-500 relative">
        <div className="absolute top-[50px]">
          <h2 className="text-[22px] font-semibold">New Products</h2>
          <p className="text-[20px] text-gray-400">Lorem ipsum dolor</p>
        </div>
        <div className="mb-[-50px] ml-[175px]">
          <img
            className="drop-shadow-md w-[180px] transition-transform duration-500 transform group-hover:scale-110"
            src={img_3}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ProductOffers;
