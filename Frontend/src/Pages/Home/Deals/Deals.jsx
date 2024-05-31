import React from "react";
import "./Deals.css";

const Deals = () => {
  return (
    <div
      className={`deals-container  h-[500px] flex justify-center items-center my-[100px] `}
    >
      <div>
        <h2 className="text-[#333333] text-[50px] font-bold text-center">
          Deals of the day
        </h2>
        <div className="flex gap-[40px] my-[50px]">
          <div>
            <div className="h-[70px] w-[80px] bg-black flex items-center justify-center text-white rounded-[5px] ">
              <p className="text-white text-[25px] font-bold">00</p>
            </div>
            <h2 className="text-center text-[#333] text-[16px] font-semibold mt-[10px]">
              DAYS
            </h2>
          </div>
          <div>
            <div className="h-[70px] w-[80px] bg-black flex items-center justify-center text-white rounded-[5px] ">
              <p className="text-white text-[25px] font-bold">00</p>
            </div>
            <h2 className="text-center text-[#333] text-[16px] font-semibold mt-[10px]">
              HOURS
            </h2>
          </div>
          <div>
            <div className="h-[70px] w-[80px] bg-black flex items-center justify-center text-white rounded-[5px] ">
              <p className="text-white text-[25px] font-bold">00</p>
            </div>
            <h2 className="text-center text-[#333] text-[16px] font-semibold mt-[10px]">
              MINS
            </h2>
          </div>
          <div>
            <div className="h-[70px] w-[80px] bg-black flex items-center justify-center text-white rounded-[5px] ">
              <p className="text-white text-[25px] font-bold">00</p>
            </div>
            <h2 className="text-center text-[#333] text-[16px] font-semibold mt-[10px]">
              SECS
            </h2>
          </div>
        </div>
        <div className="flex justify-center ">
          <button className="bg-red-400 py-[8px] px-[20px] rounded-sm text-white font-semibold ">
            Shop new
          </button>
        </div>
      </div>
    </div>
  );
};

export default Deals;
