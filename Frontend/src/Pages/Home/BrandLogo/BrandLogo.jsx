import { Swiper, SwiperSlide } from "swiper/react";
import sideImage_1 from "../../../assets/images/brand/brand_1.webp";
import sideImage_2 from "../../../assets/images/brand/brand_2.avif";
import sideImage_3 from "../../../assets/images/brand/brand_3.webp";
import sideImage_4 from "../../../assets/images/brand/brand_4.webp";
import sideImage_5 from "../../../assets/images/brand/brand_5.avif";
import sideImage_6 from "../../../assets/images/brand/brand_6.webp";
import sideImage_7 from "../../../assets/images/brand/brand_7.avif";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
// import { Pagination } from "swiper/modules";

const BrandLogo = () => {
  return (
    <div className="mb-[30px]  max-w-[1200px] mx-auto">
      <Swiper
        slidesPerView={5}
        // spaceBetween={30}
        // pagination={{
        //   clickable: true,
        // }}
        // modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex justify-center">
            <img src={sideImage_1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center">
            <img src={sideImage_2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center">
            <img src={sideImage_3} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center">
            <img src={sideImage_4} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center">
            <img src={sideImage_5} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center">
            <img src={sideImage_6} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center">
            <img src={sideImage_7} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BrandLogo;
