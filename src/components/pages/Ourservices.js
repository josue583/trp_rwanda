import React from "react";
import Navbar from "../Navbar/Navbar";
import OurServices from "../OurServices/OurServices";

import Ourserviceinformation from "../OurServices/OurServicesinformation";
import Footer from "../footer/footer";
export default function Ourservice(){
    return(
        <div className="flex flex-col items-center gap-4">
          <Navbar/>
          <div className="flex flex-col items-center gap-16">
          <OurServices/> 
          <Ourserviceinformation/>
          <Footer/>
          </div>
          
          
          
        </div>
    );
}