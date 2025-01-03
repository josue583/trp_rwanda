import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
// import About from '../about/About'
function Navbar() {
  return (
    <div className='w-2/4 h-12 bg-white flex pl-8 pr-8 justify-between rounded-3xl items-center'>
        <div className="log w-16">
        <img src={logo} alt="" />
        </div>
        <div className="pages">
            <ul className='text-slate-500 flex flex-row gap-6 font-serif'>
            <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About Us</Link></li>
                <li><Link to='/ourServices'>Our Servcices</Link></li>
                <li>Contact us</li>
            </ul>
        </div>
      
    </div>
  )
}

export default Navbar
