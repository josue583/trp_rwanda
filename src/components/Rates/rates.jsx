import React from 'react'
import Image_1 from '../assets/undraw_Information_tab_re_f0w3 (1).png'
import check_icon from '../assets/icons8-checkmark-40.png'
import lowest_Image from '../assets/Rate_down.jpg'
import speed_image from '../assets/speed.jpg'
import confirm_image from '../assets/confirmation.jpg'
function rates() {
  return (
    <div className='h-fit bg-slate-100 flex flex-col pt-10 gap-6'>
        <div className='flex justify-center items-center gap-16'>
          <div className=' w-1/4 h-60 flex justify-center gap-6'>
            <img className='w-12 h-12 ' src={check_icon} alt="" />
          <div className='flex text-slate-700 flex-col text-justify gap-3 font-serif text-xl text-slate-950'>
            <h1 className='text-blue-600 text-justify text-2xl'>Rates</h1>
            <p className=''>Should you encounter other problems, please first search the bug tracker (also look at the closed issues) and the mailing list, chances are that the problem was reported already. </p>
            </div>
          </div>
            <img className='w-1/4 rounded-5' src={Image_1} alt=""/>
        </div>
        <div className='h-fit bg-white flex justify-center items-center pt-10 font-serif text-xl gap-16'>
            <img className='w-1/4 h-1/5' src={lowest_Image} alt=""/>
            <div className='w-1/4 flex justify gap-6'>
            <img className='w-12 h-12 ' src={check_icon} alt="" />
                 <div className=' h-1/2   flex flex-col items-center justify-center gap-3 text-justify'>
                 <h1 className='text-blue-600 text-justify text-xl'>Guaranteed Lowest Rates</h1>
                 <p>We offer a price guarantee, we believe our prices are the lowest but if you see a cheaper price we will beat it by 10% guaranteed</p>
                 </div>
              
            </div>
        </div>
        <div className='flex justify-center items-center gap-16'>
          <div className=' w-1/4 h-60 flex  justify-center gap-6'>
            <img className='w-12 h-12 ' src={check_icon} alt=""/>
          <div className='flex text-slate-700 flex-col text-justify gap-3 font-serif text-xl text-slate-950'>
            <h1 className='text-blue-600 text-justify text-2xl'>Some-Day Dispatch</h1>
            <p className=''>We are able to provide rapid delively and do some day orders for those last minutes jobs. </p>
            </div>
          </div>
            
            <img className='w-96 rounded-5' src={speed_image} alt="" />
        </div>
        <div className='h-fit bg-white flex justify-center items-center pt-10 gap-16 font-serif text-xl'>
            <img className='w-1/5 h-1/5' src={confirm_image} alt="" />
            <div className='w-1/5 flex gap-6'>
            <img className='w-12 h-12 ' src={check_icon} alt="" />
                 <div className='flex flex-col items-center gap-3'>
                 <h1 className='text-blue-600 text-justify'>Immediate Confirmation Order</h1>
                 <p className='text-justify'>Once you place an online order you will get immediate confirmation that order has been received</p>
                 </div>
              
            </div>
            
        </div>
        <div className='h-96 flex justify-center items-center gap-16'>
          <div className=' w-1/4 h-60 flex justify-center gap-6'>
            <img className='w-32 h-12 ' src={check_icon} alt="" />
          <div className='flex text-slate-700 flex-col text-justify gap-3 font-serif text-xl text-slate-950'>
            <h1 className='text-blue-600 text-justify text-2xl'>Some-Day Dispatch</h1>
            <p className=''>We are able to provide rapid delively and do some day orders for those last minutes jobs. </p>
            </div>
          </div>
            
            <img className='w-96 h-72 rounded-5' src={speed_image} alt="" />
        </div>
   
    </div>
  )
}

export default rates
