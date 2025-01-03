import React from "react";
import Teaminformation from "../assets/teamInformation"

import TeamCard from "../Card/TeamCard";
import leftarrow from "../assets/left arrow.png";
import rightarrow from "../assets/right arrow.png"

export default function Team(){
    return(
        <div className="flex flex-col">
            <div className="flex justify-around items-center">
        <img className="w-12 h-12" src={leftarrow} alt="" />
        <h1 className="text-2xl">Meet Our Team!</h1>
        <img className="w-12 h-12" src={rightarrow} alt="" />

    </div>
        <div className="h-96 flex gap-12 justify-center items-center">
            {Teaminformation.map((info,i)=>{
                return(
                    <TeamCard key={i} image={info.image} name={info.name} role={info.role}/>

                );
                    
                
            })}
        </div>

        </div>
        
    );
}