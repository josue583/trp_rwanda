import React from "react";




export default function teamCard(props){
    return(
        <div>
              <div className="flex flex-col gap-4">
        <img className="w-48 h-48 rounded-2xl " style={{ boxShadow: "-16px -16px 10px rgb(57, 57, 255)" }} src={props.image} alt="" />
        <div className="flex flex-col gap-2">
        <h1 className="font-bold text-sm">{props.name}</h1>
        <h2 className="text-blue-500 text-sm font-bold">{props.role}</h2>
        </div>
       
        </div>

        </div>
      
    );
}