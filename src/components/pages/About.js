import React from "react";
// import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import AboutTitle from "../about/About_title";
import WhyChooseUs from "../Why_choose_us/why_choose_us";
import CustomersayAboutus from "../CustomersayAboutus/CustomersayAboutus";
import Aboutcotras from "../about/About_Cotras";
import Team from "../Team/Team";
import Footer from "../footer/footer";
function About(){
    return(
        <div className="flex flex-col gap-6">
            <Navbar/>
            <AboutTitle/>
            <WhyChooseUs/>
            <Team/>
            <CustomersayAboutus/>
            <Aboutcotras/>
            <Footer/>
            {/* <h1>Hello there </h1> */}

            
        </div>
    );

}

export default About;