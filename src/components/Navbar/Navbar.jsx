import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
// import About from '../about/About'
function Navbar() {
  return (
    <div className='w-3/4 h-12 bg-white flex pl-8  justify-between gap-2 rounded-3xl pr-4 items-center  sm:max-sm:w-3/4 sm:flex'>
        <div className="log w-8">
        <img src={logo} alt="" />
        </div>
        <div className="bg-green-500 sm:bg-yellow-300 ">
            <ul className=' text-slate-500 text-sm flex flex flex-wrap justify-center gap-2 font-serif sm:bg-yellow-400 '>
            <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About Us</Link></li>
                <li><Link to='/ourServices'>Our Servcices</Link></li>
                <li><Link to='contact'>Contact us</Link></li>
            </ul>
        </div>
      
    </div>
  )
}

export default Navbar
