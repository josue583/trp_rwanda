import React from 'react'

function item(props) {
  return (
    <div className='h-32 flex flex-col'>
        <div className=''>
         <img className='w-32 h-32  gap-6 rounded-xl' src={props.Image} alt="" />
        </div>
        <div>
            <h1>{props.name}</h1>
      
        </div>
        <div>
           <p>{props.description}</p>
        </div>
      
    </div>
  )
}

export default item
