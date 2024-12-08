"use client";
import React from "react";
import HomeNavbar from "./components/HomeNavbar";
import { Header1 } from "./components/Header";
import Main from "./Home/MainRecipe";
import AboutUs from "./Home/About";
import FoodCategory from "./Home/FoodCategory";
import WhyChooseUs from "./Home/WhyChooseUs";
import ChooseAndPick from "./Home/ChooseAndPick";
import MetOurChefs from "./Home/MetOurChefs";

const HomePage = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <Header1 />
      <HomeNavbar />
      <Main />
      <AboutUs />
      <FoodCategory />
      <WhyChooseUs />
      <ChooseAndPick />
      <MetOurChefs />
    </div>
  );
};

export default HomePage;
