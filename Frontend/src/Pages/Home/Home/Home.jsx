import React from "react";
import Navber from "../../../Navber/Navber";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import Footer from "../../Footer/Footer";
import Deals from "../Deals/Deals";

const Home = () => {
  return (
    <div>
      <Navber />
      <Banner />
      <Gallery />
      <Deals />
      <Footer />
    </div>
  );
};

export default Home;
