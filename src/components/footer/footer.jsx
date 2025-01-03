import React from "react";
import facebook from '../assets/facebook_icon.png'
import whatsap from '../assets/whatsapp_icon.png'
import linkedin from '../assets/Linked_in.png'


export default function footer(){
    return(
        <div>
              <div className='flex justify-center  h-full mb-32 '>
            <div className='w-5/6 text-slate-50 bg-slate-600 flex gap-32 justify-center text-xl pt-8 rounded-3xl'>
            <div className='w-2/4 flex flex-col gap-8 items-center gap-8 text-justify font-sarif'>
        <h1 className='text-slate-50 text-2xl'>Cotras Ltd-Tarp Expert Rwanda</h1>
        <p className='w-2/3 text-slate-300 '>Priding Ourselves with quality tarps and excellent customers service, Cotras Ltd-Tarp Expert Rwanda is the larges company of its kind offering various types pf tarps for construction sites, builders and insdustry in need of Tarps for various applications.</p>
        <div className='flex gap-12'>
          <img className='w-8 h-8' src={facebook} alt="" />
          <img className='w-8 h-8' src={whatsap} alt=''/>
          <img className='w-8 h-8' src={linkedin} alt="" />
          <img className='w-8 h-8' src={whatsap} alt=''/>
          <img className='w-8 h-8' src={linkedin} alt="" />
        </div>
        </div>
        <div className='w-1/3 flex flex-col gap-8 items-start text-justify font-sarif'>
        <h1 className='text-slate-50 text-2xl'>Reach out to us</h1>
        <p className='flex gap-8 text-slate-300'><img className='w-8 h-8' src={linkedin} alt="" />Rwanda, Rwamagana industry Park</p>
        <p className='flex gap-8 text-slate-300'> <img className='w-8 h-8' src={facebook} alt="" />+07845362767</p>
        <p className='flex gap-8 text-slate-300'><img className='w-8 h-8 rounded-12' src={linkedin} alt=""/>josue@gmail.com</p>
        </div>
            </div>
           
            </div>
        </div>
    );
}