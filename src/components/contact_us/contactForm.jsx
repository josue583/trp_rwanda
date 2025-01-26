// import { trigger } from "browser-router/html5-history/adapter";
import React, { useState } from "react";

import Googlemap from "./google_map";

export default function ContacyForm(){

    const [name,setName]=useState("")
    const[ headingText,setHeading]=useState("")
    
    function handleChange(event){
        
        setName(event.target.value);
        console.log(event.target.value)
    }
    function handleClick(event){
        event.preventDefault()
        setHeading(name)
        alert("the Form submitted successfully")
    }
    return(
        
        
        <div className="flex flex items-center justify-center bg-slate-100 bg-blue-500">
            <div>
             <Googlemap/>
            </div>
            <form action="" className="w-3/6 flex flex-col items-center gap-8" onSubmit={handleClick}>
            <h1 className="font-bold">Send us a Message@{headingText}</h1>
            <div className="w-full flex justify-center gap-6">
            <div className=" flex flex-col gap-2 ">
                <div className="flex flex-col items-start border border-transparent hover:border-blue-700">
                <label className="font-semibold text-sm" htmlFor="">your name</label>
                <input className="h-8 border border-gray-300 rounded-lg" type="" placeholder="enter your full name"onChange={handleChange} value={name}/>
                </div>
                <div className="flex flex-col items-start border border-transparent hover:border-blue-500">
                <label className="font-semibold text-sm" htmlFor="">Phone number</label>
                <input className="h-8 border border-gray-300 rounded-lg" type="" placeholder="enter your full name"onChange={handleChange} value={name}/>
                </div>
                <div className="flex flex-col items-start border border-transparent hover:border-blue-500">
                <label className="font-semibold text-sm" htmlFor="">your company name</label>
                <input className="h-8 border border-gray-300 rounded-lg" type="" placeholder="your campany name"onChange={handleChange} value={name}/>
                </div>
                <div className="flex flex-col items-start border border-transparent hover:border-blue-500 ">
                <label className="font-semibold text-sm" htmlFor="">Tarpaulin size</label>
                <input className="h-8 border border-gray-300 rounded-lg" type="" placeholder="tarpaulin size" onChange={handleChange} value={name}/>
                </div>
                </div>
                
                <div className=" flex flex-col gap-2 ">
                <div className="flex flex-col items-start border border-transparent hover:border-blue-500">
                <label className="font-semibold text-sm" htmlFor="">Email</label>
                <input className="h-8 border border-gray-300 rounded-lg" type="text" placeholder="enter your email"/>
                </div>
                <div className="flex flex-col  items-start border border-transparent hover:border-blue-500">
                <label className="font-semibold text-sm" htmlFor="">phone</label>
                <input className="h-8 border border-gray-300 rounded-lg" type="text"  placeholder="your phone number" />
                </div>
                <div className="flex flex-col items-start border border-transparent hover:border-blue-500">
                <label className="font-semibold text-sm" htmlFor="">phone</label>
                <input className="h-8 border border-gray-300 rounded-lg" type="text"  placeholder="your phone number" />
                </div>
                <div className="flex flex-col items-start border border-transparent hover:border-blue-500">
                <label className="font-semibold text-sm" htmlFor="">phone</label>
                <input className="h-8 border border-transparent border-gray-300 rounded-lg" type="text"  placeholder="your phone number" />
                </div>
                </div>

            </div>
                <div className="w-1/2 border border-transparent hover:border-blue-500 rounded-xld">
                <textarea className="w-full h-28 rounded-lg border-none focus:outline-none focus:border-transparent p-2" placeholder="comments"  />
                </div>
                
                
                <button className="w-1/2 bg-blue-500" onClick={handleClick}>send Message</button>
            </form>
        </div>
    );
}