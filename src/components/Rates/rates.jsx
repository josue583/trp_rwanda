import React from 'react'
import Image_1 from '../assets/undraw_Information_tab_re_f0w3 (1).png'
import check_icon from '../assets/icons8-checkmark-40.png'
import lowest_Image from '../assets/Rate_down.jpg'
import speed_image from '../assets/speed.jpg'
import confirm_image from '../assets/confirmation.jpg'
function rates() {
  return (
    <div className='h-fit bg-slate-100 flex flex-col pt-10 gap-6'>
        <div className='flex flex-col jusify-center items-center gap-16 p-10 sm:flex-row sm:justify-center '>
          <div className='h-2/4 flex justify-center gap-6 md:w-2/5 md:flex-row md:justify-center '>
            <img className='w-12 h-12 ' src={check_icon} alt="" />
          <div className=' flex text-slate-700 flex-col text-justify gap-3 font-serif text-xl text-slate-950 md:text-2xl'>
            <h1 className='text-blue-600 text-justify text-2xl'>Rates</h1>
            <p className='w-3/4'>Should you encounter other problems, please first search the bug tracker (also look at the closed issues) and the mailing list, chances are that the problem was reported already. </p>
            </div>
          </div>
            <img className='w-full rounded-lg sm:w-2/5' src={Image_1} alt=""/>
        </div>
        <div className='bg-white flex flex-col items-center gap-16 p-10 sm:flex-row sm:justify-center'>
            <img className='w-full rounded-lg sm:w-2/5' src={lowest_Image} alt=""/>
            <div className='flex justify-center gap-6 p-10 md:w-2/5 md:flex-row md:justify-center'>
            <img className='w-12 h-12 ' src={check_icon} alt="" />
                 <div className='flex text-slate-700 flex-col text-justify gap-3 font-serif text-xl text-slate-950 md:text-2xl'>
                 <h1 className='text-blue-600 text-justify text-2xl'>Guaranteed Lowest Rates</h1>
                 <p className='w-3/4'>We offer a price guarantee, we believe our prices are the lowest but if you see a cheaper price we will beat it by 10% guaranteed</p>
                 </div>
              
            </div>
        </div>
        <div className='flex flex-col justify-center items-center gap-16 sm:flex-row'>
          <div className='w-full h-60 flex  justify-center items-center gap-6 p-10 sm:w-2/5'>
            <img className='w-12 h-12 ' src={check_icon} alt=""/>
          <div className='flex text-slate-700 flex-col  text-justify gap-3 font-serif text-xl text-slate-950'>
            <h1 className='text-blue-600 text-justify text-2xl'>Some-Day Dispatch</h1>
            <p className='w-3/4 text-xl'>We are able to provide rapid delively and do some day orders for those last minutes jobs. </p>
            </div>
          </div>
            
            <img className='w-full rounded-lg sm:w-2/5' src={speed_image} alt="" />
        </div>
        <div className='bg-white flex flex-col items-center gap-16 p-10 sm:flex-row sm:justify-center'>
            <img className='w-full rouded-lg sm:w-2/5' src={confirm_image} alt="" />
            <div className='w-full flex p-10 sm:w-2/5'>
            <img className='w-12 h-12 ' src={check_icon} alt="" />
                 <div className=' flex flex-col items-center gap-3 text-justify justify-center '>
                 <h1 className='text-blue-600 text-2xl'>Immediate Confirmation Order</h1>
                 <p className='w-3/4 text-xl'>Once you place an online order you will get immediate confirmation that order has been received</p>
                 </div>
              
            </div>
            
        </div>
        <div className='flex flex-col justify-center items-center gap-16 p-10 sm:flex-row sm:justify-center '>
          <div className='  w-full flex justify-center gap-6 p-10 sm:w-2/5'>
            <img className='w-12 h-12 ' src={check_icon} alt="" />
          <div className='flex text-slate-700 flex-col text-justify gap-3 font-serif text-xl text-slate-950'>
            <h1 className='text-blue-600 text-justify text-2xl'>Some-Day Dispatch</h1>
            <p className='w-3/4 text-xl'>We are able to provide rapid delively and do some day orders for those last minutes jobs. </p>
            </div>
          </div>
            
            <img className='w-full rounded-lg sm:w-2/5' src={speed_image} alt="" />
        </div>
   
    </div>
  )
}

export default rates
