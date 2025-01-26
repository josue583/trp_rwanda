import React from 'react'
import Navbar from '../Navbar/Navbar'
import Item from '../item/item'
import Product_data from '../assets/productData'
function home_collection() {
  return (
    
         <div className='w-full h-1/2 bg-blue-700 flex flex-col items-center pt-12 gap-6 md:max-xl:bg-green-200 '>
            
            <Navbar/>
        <div className='flex flex-col gap-6 items-center font-serif text-3xl sm:text-sm text-slate-950'>
            <h1 className='w-80'>Tailored service to meet your talpoulin needs</h1>
            <p className='text-xl text-gray-500'>Buy tarps at affordable price!</p>
            <button className='w-32 text-xl h-8 rounded-xl bg-blue-500 font-serif'>enquire now</button>
        </div>
        <div className='flex flex-row gap-7'>
            {Product_data.map((item,i)=>{
                return <Item key={i} Image={item.Image}/>
            })}
        </div>
            
        
      
    </div>

    
  )
}

export default home_collection
