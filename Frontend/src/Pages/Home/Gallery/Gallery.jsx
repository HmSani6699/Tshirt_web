import React, { useState } from "react";
import GalleryCart from "../../../component/GalleryCart/GalleryCart";

const Gallery = () => {
  const [isOpenTab, setIsOpenTab] = useState("Product");
  return (
    <div>
      <div className="max-w-[1200px] mx-auto mt-[50px]">
        {/* Gallery Tab Container */}
        <div className="flex gap-[40px] justify-center">
          <h2
            className={`group  cursor-pointer ${
              isOpenTab === "Product"
                ? "text-red-400 "
                : "text-black hover:text-red-500 "
            }`}
            onClick={() => setIsOpenTab("Product")}
          >
            Products
            <div
              className={`h-[3px] bg-red-400  ${
                isOpenTab === "Product"
                  ? "w-full "
                  : "w-0  group-hover:w-full transition-all duration-300 "
              }  `}
            ></div>
          </h2>

          <h2
            className={`group  cursor-pointer ${
              isOpenTab === "Recent"
                ? "text-red-400 "
                : "text-black hover:text-red-500 "
            }`}
            onClick={() => setIsOpenTab("Recent")}
          >
            Recent view
            <div
              className={`h-[3px] bg-red-400  ${
                isOpenTab === "Recent"
                  ? "w-full "
                  : "w-0  group-hover:w-full transition-all duration-300 "
              }  `}
            ></div>
          </h2>
          <h2
            className={`group  cursor-pointer ${
              isOpenTab === "Watch"
                ? "text-red-400 "
                : "text-black hover:text-red-500 "
            }`}
            onClick={() => setIsOpenTab("Watch")}
          >
            Watch List
            <div
              className={`h-[3px] bg-red-400  ${
                isOpenTab === "Watch"
                  ? "w-full "
                  : "w-0  group-hover:w-full transition-all duration-300 "
              }  `}
            ></div>
          </h2>
        </div>

        {/* Product container */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-[25px] mt-[40px]">
          {Array.from({ length: 12 }).map((item) => (
            <GalleryCart />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
