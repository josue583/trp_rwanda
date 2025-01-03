import React from "react";
import arrow from '../assets/arrow.png'

export default function Servicescard(props){
   return( <div className="w-60 h-68 text-base flex flex-col gap-6 bg-white items-center rounded-2xl shadow-xl font-normal overflow-hidden ">
         <img className="w-12 h-12" src={props.image} alt="" />
         <p className="w-56">{props.description}</p>
         <button className="flex gap-2">{props.button} <img src={arrow} alt="" /></button>
         <div className=" relative  w-full h-8 relative ">
         <div className="absolute -top-2 -right-0 w-12 h-12 bg-blue-500 rounded-3xl"  >
               
         </div>
         </div>
        
    </div>);

}