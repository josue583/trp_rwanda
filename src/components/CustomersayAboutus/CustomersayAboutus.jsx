import React from "react";
import ClientsayAboutus from "../assets/Client_say_abou_us";
import ClientsayAboutusCard from "../Card/ClientsayAboutusCard";




function CustomersayAboutus(){
    return(
         <div className="bg-blue-100 flex flex-col justify-center items-center">
           <h1 className=" text-2xl pt-12 gomy-bold">What Clients Say About Us</h1>
         <div className="h-96 flex justify-center items-center gap-6 bg-blue-100">
         
            {ClientsayAboutus.map((Data,i)=>{
                return <ClientsayAboutusCard key={i} name={Data.name} discription={Data.discription} image={Data.image}/>
            })}
        </div>
         </div>
        
    );

}
export default CustomersayAboutus;



