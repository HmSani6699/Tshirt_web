import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import payment_logo from "../../../src/assets/images/payment-icon.avif";

const Footer = () => {
  return (
    <div className="bg-[#eeeeee] ">
      <div className="max-w-[1200px] mx-auto w-full flex gap-[20px]  py-[50px] ">
        <div className="flex gap-[20px] w-[42%] ">
          {/* Footer frist content */}
          <div className="w-[300px]">
            <h2 className="text-[25px]  font-bold">T-Shirt</h2>
            <p className="mt-[15px] text-[#555555]">
              Property Related Classified Website in Bangladesh.
            </p>
            <p className="text-[#555555] my-[20px]">01996359111</p>
            <p className="text-[#555555]">sadiq@gmail.com</p>
            <div className="flex gap-[20px] mt-[30px]">
              <FaFacebookF className="text-[25px]" />
              <FaInstagram className="text-[25px]" />
              <FaTwitter className="text-[25px]" />
              <FaLinkedinIn className="text-[25px]" />
              <FaTiktok className="text-[25px]" />
            </div>
          </div>
          {/* Footer Second content */}
          <div className="full">
            <h2 className="font-semibold text-[20px] mb-[25px] text-[#333333]">
              Useful links
            </h2>
            <p className="text-[#555555] mb-[10px]"> About T-Shirt</p>
            <p className="text-[#555555] mb-[10px]"> Help</p>
            <p className="text-[#555555] mb-[10px]"> Contact Us</p>
            <p className="text-[#555555] mb-[10px]">Adevinta Brands</p>
            <p className="text-[#555555] mb-[10px]">Customer Service</p>
            <p className="text-[#555555] mb-[10px]">Delivery Information</p>
          </div>
        </div>
        <div className="flex gap-[50px] w-[58%]">
          {/* Footer third content */}
          <div className="w-[50%]">
            <h2 className="font-semibold text-[20px] mb-[25px] text-[#333333]">
              Get in touch
            </h2>
            <div className="flex items-center justify-between border-b border-[#d4d3d3e8] pb-[6px]">
              <p className="text-[#555555]">Whatsapp </p>
              <p className="text-[#555555]">+01996359111</p>
            </div>
            <div className="flex items-center justify-between border-b border-[#d4d3d3e8] pb-[6px] my-[10px]">
              <p className="text-[#555555]">Real Live Support</p>
              <p className="text-[#555555]"> Md. Sadiq </p>
            </div>
            <div className="flex items-center justify-between border-b border-[#d4d3d3e8] pb-[6px]">
              <p className="text-[#555555]">Monday - Friday </p>
              <p className="text-[#555555]">08:00 - 20:00</p>
            </div>
            <div className="flex items-center justify-between border-b border-[#d4d3d3e8] pb-[6px] my-[10px]">
              <p className="text-[#555555]">Saturday </p>
              <p className="text-[#555555]">08:00 - 20:00</p>
            </div>
            <div className="flex items-center justify-between border-b border-[#d4d3d3e8] pb-[6px]">
              <p className="text-[#555555]">Sunday</p>
              <p className="text-[#555555]">08:00 - 20:00</p>
            </div>
          </div>
          {/* Footer forth content */}
          <div className="w-[50%]">
            <h2 className="font-semibold text-[20px] mb-[25px] text-[#333333]">
              Newsletter signup
            </h2>
            <p className="text-[#555555]">
              Subscribe to our newsletters now and stay up-to-date with new
              collections.
            </p>
            <div className="h-[50px] border-2 border-[#d4d3d3e8] pl-[10px] flex justify-between mt-[25px]">
              <input
                className="bg-[#eeeeee] h-full outline-none"
                type="email"
                name=""
                placeholder="Your email addresss"
                id=""
              />
              <button className="bg-red-400 px-[15px] text-white font-semibold ">
                Subcribe
              </button>
            </div>
            <div className="mt-[30px]">
              {" "}
              <img src={payment_logo} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="border border-[#c8c8c8]"></div>
      <p className="text-center text-[#555555] text-[14px] py-[10px]">
        © all Rights Reserved. Designed By H.M Sadiqur Rahaman
      </p>
    </div>
  );
};

export default Footer;
