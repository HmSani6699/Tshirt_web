import React from "react";
import Navber from "../../../Navber/Navber";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import Footer from "../../Footer/Footer";
import Deals from "../Deals/Deals";
import Featured from "../Featured/Featured";
import Man from "../Man/Man";
import Woman from "../Woman/Woman";
import ProductOffers from "../ProductOffers/ProductOffers";
import TopProduct from "../TopProduct/TopProduct";
import BrandLogo from "../BrandLogo/BrandLogo";

const Home = () => {
  return (
    <div>
      <Navber />
      <Banner />
      <Gallery />
      <Deals />
      <Man />
      <ProductOffers />
      <Woman />
      <TopProduct />
      <Featured />
      <BrandLogo />
      <Footer />
    </div>
  );
};

export default Home;
