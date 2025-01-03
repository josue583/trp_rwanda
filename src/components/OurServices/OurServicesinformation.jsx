
import React from "react";
import OurServicesinfo from "../assets/ourServicesInfo";
import Servicescard from "../Card/ServicesCard";


 


function Ourserviceinformation(){
    return(
        <div className="w-3/5 h-auto flex flex-wrap gap-4  justify-center items-center">
            {OurServicesinfo.map((inf,i)=>{
                return(
                    <Servicescard key={i} image={inf.image} description={inf.description} button={inf.button} />
                );

            })}
        </div>
    );
}
export default Ourserviceinformation