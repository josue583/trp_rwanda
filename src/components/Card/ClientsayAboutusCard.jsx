import React from "react";



export default function ClientsayAboutusCard(props){
    return(
        
            <div className="w-68 h-64 text-sm bg-white rounded-2xl flex flex-col justify-center items-center p-2 gap-4">
                <p className="w-64">{props.discription}</p>
                <img className="w-16 h-16 rounded-full" src={props.image} alt="" />
                <p>{props.name}</p>
            </div>
            
        
    );
}
