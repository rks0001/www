import React from "react";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Section1 from "./Section1";

const Home = () => {
  return (
    <div>
      <Carousel />
      {/* <Section1 /> */}
      <Categories />
    </div>
  );
};

export default Home;
