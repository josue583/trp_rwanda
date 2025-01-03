import React from "react";
// import Navbar from "../Navbar/Navbar";
import HomeCollection from "../home_collection/home_collection";
import BenefitTitle from "../Benefit_title/benefit_title";
import Rates from "../Rates/rates";
import WhyChooseUs from "../Why_choose_us/why_choose_us";
import AboutCotras from "../about/About_Cotras";
function home() {
  return (
    <div className="flex flex-col ">
      <HomeCollection/>
      <BenefitTitle/>
      <Rates/>
      <WhyChooseUs/>
      <AboutCotras/>
    </div>
  )
}

export default home

