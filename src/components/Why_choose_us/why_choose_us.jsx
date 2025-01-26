import React from 'react'
import CardInformation from '../assets/cardInformation'
import Card from '../Card/card'

function why_choose_us() {
  return (
    <div className='w-full font-serif flex flex-col items-center gap-8'>
        <div className='w-full h-16 bg-white flex justify-center items-center text-3xl text-slate-700'>
             <h1>Why choose us</h1>
        </div>
        <div className='w-3/4 bg-blue-100 flex flex-col items-center p-4  text-xl text-slate-700 font-bold mb-10 rounded-xl gap-8'>
            <h1 className='w-3/4 text-2xl sm:w-2/4 '>we priortize Customers satisfaction</h1>
            <div className='bg-blue-100 flex flex-col gap-5 justify-center items-center sm:flex-row sm:flex-wrap'>
        {CardInformation.map((inf,i)=>{
            return <Card className='' key={i} number={inf.number}  title={inf.title} par={inf.par} buttom={inf.buttom} /> 
        })
        }
        
        </div>
        </div>
       
          
        
        
        
       
    </div>
  )
}

export default why_choose_us
