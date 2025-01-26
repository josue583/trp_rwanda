import React from "react";
// import Navbar from "../Navbar/Navbar";
import HomeCollection from "../home_collection/home_collection";
import BenefitTitle from "../Benefit_title/benefit_title";
import Rates from "../Rates/rates";
import WhyChooseUs from "../Why_choose_us/why_choose_us";
import AboutCotras from "../about/About_Cotras";
import Footer from "../footer/footer";
function home() {
  return (
    <div className="flex flex-col items-center">
      <HomeCollection/>
      <BenefitTitle/>
      <Rates/>
      <WhyChooseUs/>
      <AboutCotras/>
      <Footer/>
    </div>
  )
}

export default home

