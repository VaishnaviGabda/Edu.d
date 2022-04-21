import React, { useState } from 'react'
import {Link} from "react-router-dom"
import { FaWindowClose , FaBars , FaCrown } from "react-icons/fa";
import logo from './logo.PNG'; 

import "./Navbar.css"

const Navbar = () => {

    const [isMobile , setIsMobile] = useState(false);
  return (
   <nav className='navbar'>
       <h3 ><img src={logo} className={isMobile? "logo-mobile" :"logo"}  /></h3>
           <ul className={isMobile? "nav-links-mobile" :"nav-links"}
           onClick={()=> setIsMobile(false)}>
            <Link to="/home" className='home'><li>Home</li></Link>
             <Link to="/about" className='about'><li>About</li></Link>
              <Link to="/dashboard" className='dashboard'><li>Dashboard</li></Link>
                <Link to="/signup" className='signup'><li>Sign Up</li></Link>
                 <Link to="/premium" className='premium'><li>Upgrade To Premium<FaCrown className='crown'/></li></Link>
           </ul>

           <button className="mobile-menu-icon" onClick={()=> setIsMobile(!isMobile)}>
               {isMobile?(<FaWindowClose/>):
               (<FaBars/>
               )}
           </button>
       

   </nav>
  )
}

export default Navbar