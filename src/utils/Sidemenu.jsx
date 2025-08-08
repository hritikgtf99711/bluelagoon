import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Sidemenu({onClick,openSideMenu,setopenSideMenu}) {
  return (
    <div className={`h-[100vh] transition-all duration-300 ease-in-out ${openSideMenu?'translate-x-[0%]':'translate-x-[100%]'}  w-[70%] py-[80px] bg-[var(--secondary-color)] fixed top-0 right-0`}>
         <button
         onClick={()=>setopenSideMenu(false)}
              className="absolute top-2 p-[20px] right-2 text-gray-500 hover:text-gray-700"
            >
                
              <svg className="w-6 h-6 cursor-pointer" fill="none" cla stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
        <ul>
             <li className='border-b-[1px] border-[var(--primary-color)] px-[20px] py-[20px] text-[16px]'><NavLink className='text-[var(--primary-color)]  text-[18px]'  to={'/about'}>About Us </NavLink></li>
              <li className='border-b-[1px] border-[var(--primary-color)] px-[20px] py-[20px] text-[16px]'><NavLink className='text-[var(--primary-color)]  text-[18px]'  onClick={onClick} to={'#'}> Contact us </NavLink></li>
        </ul>
        <div className='text-center mt-[30px    ]'>
      <button
            onClick={onClick}
              className='lg:text-[14px] text-[14px] bg-[var(--primary-color)] text-[14px]  book_btn cursor-pointer tracking-[2px] text-white uppercase mx-[20px] my-[30px] m-[auto]   lg:px-8 lg:py-3 px-[30px] py-[10px]'
            >Book a Meeting</button>
            
    </div>
    </div>
  )
}
