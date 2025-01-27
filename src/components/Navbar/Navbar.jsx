import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
// import About from '../about/About'

function Navbar() {
  const [isclicked,setisClicked]=useState(false);

  function handlehumbergerClick(){
    setisClicked(!isclicked);

  }

    console.log(isclicked)
    
  return (
    <div className='w-3/4 flex pl-8 justify-around items-start pr-8  md:w-3/5 sm:h-12 md:flex md:items-center md:text-lg md:rounded-3xl md:bg-white md:justify-between'>
        <div className="log">
        <img className='w-full rounded-xl' src={logo} alt="" />
        </div>
        <div className=" ">
          <div className='md:hidden '>
          <button className="text-white bg-blue-500 p-2 rounded" onClick={handlehumbergerClick}>
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            className="w-6 h-6"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
          </button>

          </div>
            <ul className='hidden text-slate-500 text-sm flex flex flex-wrap justify-center gap-2 font-serif md:flex '>
            <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About Us</Link></li>
                <li><Link to='/ourServices'>Our Servcices</Link></li>
                <li><Link to='contact'>Contact us</Link></li>
            </ul>
            {isclicked?<ul className='text-slate-500 text-sm flex flex-col justify-start gap-6 font-serif md:hidden '>
            <li className='py-2'><Link to='/'>Home</Link></li>
                <li className='py-2'><a href="#"><Link to='/about'>About Us</Link></a></li>
                <li className='py-2'><Link to='/ourServices'>Our Servcices</Link></li>
                <li className='py-2'><Link to='contact'>Contact us</Link></li>
            </ul>:null}
          
        </div>
        
        
        
      
    </div>
  )
}

export default Navbar
