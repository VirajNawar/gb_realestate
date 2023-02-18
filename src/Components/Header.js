import React, { useEffect, useState } from 'react'
import Icon from '../assests/img/logo.svg'
import { useLocation, Link } from 'react-router-dom'


function Header() {


  const location = useLocation()

  // To select the active link
  function activePage(route) {
    if (route === location.pathname) {
      return true
    }
  }

  return (
    <div className='bg-[#060822] 
                     mb-12
                    shadow-sm 
                    sticky top-0 
                    z-50'>

      <nav className='container max-w-6xl mx-auto  
                      flex justify-between items-center 
                      pt-4 '>
          <div className="left-items ">
            <a href="/" className='flex gap-x-2'>
              <img src={Icon} alt='logo' className='cursor-pointer h-7' />
              <span className='text-xl
                              text-blue-700
                              font-bold
                              cursor-pointer'
              >
              Rent It
            </span>
          </a>
        </div>
        <div className="right-items">
          <ul className='flex gap-x-4'>
            <li className={`
                            py-3 font-semibold 
                            transition
                            border-b-2 
                            border-b-transparent
                            ${activePage("/") && 'text-blue-500 border-b-blue-500'}
                          `}>
              <Link to="/">Home</Link>
            </li>
            <li className={`
                            py-3 font-semibold 
                            transition
                            border-b-2 
                            border-b-transparent
                            ${activePage("/contact") && 'text-blue-500 border-b-blue-500'}
                           `}>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className={`
                            py-3 font-semibold 
                            transition
                            border-b-2 
                            border-b-transparent
                            ${activePage("/signin") && 'text-blue-500 border-b-blue-500'}
                          `}>
              <Link to="/signin">Sign in</Link>
            </li>

          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header