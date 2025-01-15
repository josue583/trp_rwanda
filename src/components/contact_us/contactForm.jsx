// import { trigger } from "browser-router/html5-history/adapter";
import React, { useState } from "react";



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
        <div className="1/2 flex flex-col items-center justify-center bg-slate-100">
            <form action="" className="w-3/6 flex flex-col items-center gap-8" onSubmit={handleClick}>
            <h1>Send us a Message@{headingText}</h1>
            <div className="w-full flex justify-center gap-6">
            <div className=" flex flex-col gap-2 ">
                <div className="flex flex-col items-start border border-transparent hover:border-blue-700">
                <label htmlFor="">your name</label>
                <input className="h-8 border border-gray-300 rounded-lg" type="" placeholder="enter your full name"onChange={handleChange} value={name}/>
                </div>
                <div className="flex flex-col items-start">
                <label htmlFor="">Phone number</label>
                <input className="h-8 border border-gray-300 rounded-lg" type="" placeholder="enter your full name"onChange={handleChange} value={name}/>
                </div>
                <div className="flex flex-col items-start">
                <label htmlFor="">your company name</label>
                <input className="h-8 border border-gray-300 rounded-lg" type="" placeholder="your campany name"onChange={handleChange} value={name}/>
                </div>
                <div className="flex flex-col items-start ">
                <label htmlFor="">Tarpaulin size</label>
                <input className="h-8 border border-gray-300 rounded-lg" type="" placeholder="tarpaulin size" onChange={handleChange} value={name}/>
                </div>
                </div>
                
                <div className=" flex flex-col gap-2">
                <div className="flex flex-col items-start">
                <label htmlFor="">Email</label>
                <input className="h-8 border border-gray-300 rounded-lg" type="text" placeholder="enter your email"/>
                </div>
                <div className="flex flex-col  items-start">
                <label htmlFor="">phone</label>
                <input className="h-8 border border-gray-300 rounded-lg" type="text"  placeholder="your phone number" />
                </div>
                <div className="flex flex-col items-start">
                <label htmlFor="">phone</label>
                <input className="h-8 border border-gray-300 rounded-lg" type="text"  placeholder="your phone number" />
                </div>
                <div className="flex flex-col items-start">
                <label htmlFor="">phone</label>
                <input className="h-8 border border-transparent border-gray-300 rounded-lg" type="text"  placeholder="your phone number" />
                </div>
                </div>

            </div>
                
                <input className="w-1/2 h-28 rounded-lg" type="textarea" placeholder="comments"  />
                
                <button onClick={handleClick}>Submit</button>
            </form>
        </div>
    );
}