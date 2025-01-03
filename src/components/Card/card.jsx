import React from 'react'
import Arrow from '../assets/arrow.png'

function card(props) {
  return (
    
    <div className='w-64 h-64 shadow-lg bg-slate-50 flex flex-col gap-5 rounded-3xl justify-center text-justify p-8 bg-white border-slate-50'>
        <h1 className='text-slate-600 font-bold text-3xl'>{props.number}</h1>
        <h2 className='text-slate-700 font-bold text-lg'>{props.title}</h2>
        <p className='w-3/4 text-sm font-thin'>{props.par}</p>
        <div className='flex'>
        <a href='htm.html' className='text-slate-700 text-sm font-bold hover:text-blue-500'>{props.buttom}</a>
        <img src={Arrow} alt="" />
        </div>
    </div>
  )
}

export default card
