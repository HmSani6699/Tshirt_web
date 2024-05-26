import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#eeeeee] h-[300px]">
      <div className="max-w-[1200px] mx-auto py-[20px] grid grid-cols-1 lg:grid-cols-4">
        {/* Footer frist content */}
        <div>
          <h2>T-Shirt</h2>
          <p>
            Property Related Classified Website in Bangladesh. The Best Platform
            to Rent, Buy & Sell Property.
          </p>
        </div>
        {/* Footer Second content */}
        <div>
          <h2>Tips & help</h2>
          <p> About T-Shirt</p>
          <p> Help</p>
          <p> Contact Us</p>
          <p>Adevinta Brands</p>
          <p> Register</p>
        </div>
        {/* Footer third content */}
        <div>
          <h2>Legal</h2>
          <p> Terms of Use</p>
          <p> privacy Policy</p>
          <p> Posting Policy</p>
          <p>Cookie Policy</p>
        </div>
        {/* Footer forth content */}
        <div>
          <h2>Get in Touch</h2>
        </div>
      </div>
      <div className="border border-[#c8c8c8]"></div>
      <p className="text-center py-[10px]">
        © all Rights Reserved. Designed By H.M Sadiqur Rahaman
      </p>
    </div>
  );
};

export default Footer;
