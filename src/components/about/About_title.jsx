import React from "react";



export default function About_us_components(){
    return(
        <div className=" flex justify-center">
            <div className="w-3/5 h-96 rounded-24 flex flex-col items-center justify-center gap-12 text-xl bg-blue-50">
            <h1 className="w-2/6 font-bold text-3xl ">About Cotras LTD- Tarp Expert Rwanda</h1>
            <p className="w-3/4  font-normal text-lg">Cotras Ltd - Tarp Expert Rwanda is the only national taro making company that looks after all you
                tarp specifications. Our retail shops are located in each major city in Rwanda and our highky qualified personal
                expertise in providing our clients customized solution for their varying needs.

            </p>
            <button className="w-56 h-12 bg-blue-500 border-white shadow-inner text-white text-sm">Explore more </button>

        </div>

        </div>
        
    );
}