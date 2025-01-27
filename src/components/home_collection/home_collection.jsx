import React from 'react'
import Navbar from '../Navbar/Navbar'
import Item from '../item/item'
import Product_data from '../assets/productData'
function home_collection() {
  return (
    
         <div className='w-full h-1/2 bg-slate-100 flex flex-col items-center pt-12 gap-6 sm:bg-slate-100 '>
            
            <Navbar/>
        <div className='flex flex-col gap-6 items-center font-serif text-xl sm:text-3xl text-slate-950'>
            <h1 className='w-80'>Tailored service to meet your talpoulin needs</h1>
            <p className='text-lg text-gray-500 sm:text-xl'>Buy tarps at affordable price!</p>
            <button className='w-52 h-10 text-xl rounded-xl bg-blue-500 font-serif'>enquire now</button>
        </div>
        <div className='flex flex-col gap-7 sm:flex-row '>
            {Product_data.map((item,i)=>{
                return <Item key={i} Image={item.Image}/>
            })}
        </div>
            
        
      
    </div>

    
  )
}

export default home_collection
