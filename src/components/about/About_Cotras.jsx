import React from 'react'
import tarp from '../assets/tarp.png'
import check_icon from '../assets/check-icon.png'


export default function about_cotras(){
    return(
        <div className='flex flex-col gap-12 p-10'>
        <div className='flex  flex-col justify-center md:flex-row'>
             <div className='w-full  flex flex-col gap-6 p-8  items-center justify-center font-serif md:w-1/2'>
             <h2 className='text-3xl'>About Cotras Ltd- Tarp Expert Rwanda</h2>
             <p className='w-5/6 text-justify text-xl text-gray-700 '>Priding ourselves with quality tarps and excellent customer servoce, Cotras Ltd- Tarp Expert Rwanda is the largest company of its kind offering varioys types of tarps for post-harvest handling, transport, construction sites, builers and other industries in nedd of Tarps for various applications.</p>
             <ul className='flex flex-col items-start gap-6 text-gray-600 text-lg'>
              <li className='flex items-center gap-5 '><img className='w-4 h-4 rounded-2xl' src={check_icon} alt=''/>Wholesale Rates</li>
              <li className='flex items-center gap-5'><img className='w-4 h-4 rounded-2xl' src={check_icon} alt=''/>Guaranted Lowesr Rates</li>
              <li className='flex items-center gap-5'><img className='w-4 h-4 rounded-2xl' src={check_icon} alt=''/>some-Day dispatch</li>
              <li className='flex items-center gap-5'><img className='w-4 h-4 rounded-2xl' src={check_icon} alt=''/>immediate Order Confirmation</li>
             </ul>
             <button className='w-52 h-12 text-sky-400 border-2 border-sky-300 rounded-lg font-bold'>Contact Support</button>
             </div>
             <div className=' flex justify-center md:w-2/5'>
             <img className='w-2/3 h-full rounded-2xl md:w-full '  src={tarp} alt="" />
             </div>
             
            </div>
          
        </div>

        
    );
}
