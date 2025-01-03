import React from 'react'
import CardInformation from '../assets/cardInformation'
import Card from '../Card/card'

function why_choose_us() {
  return (
    <div className=' font-serif flex flex-col gap-8'>
        <div className='w-full h-16 bg-white flex justify-center items-center text-3xl text-slate-700'>
             <h1>Why choose us</h1>
        </div>
        <div className='bg-blue-100 flex flex-col items-center justify-center  text-xl text-slate-700 font-bold'>
            <h1 className='w-1/4 text-2xl pt-16'>we priortize Customers satisfaction</h1>
            <div className='h-96 bg-blue-100 flex gap-5 justify-center items-center'>
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
