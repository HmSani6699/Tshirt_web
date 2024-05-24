import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper/modules";
import banner_image_1 from "./../../../../src/assets/images/1.jpg";
import banner_image_2 from "./../../../../src/assets/images/2.jpg";
import banner_image_3 from "./../../../../src/assets/images/3.jpg";

const Banner = () => {
  return (
    <div className="bg-[#eeeeee]  w-full">
      <div>
        <Swiper
          // spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          // pagination={{
          //   clickable: true,
          // }}
          // navigation={true}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={banner_image_1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner_image_2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner_image_3} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
