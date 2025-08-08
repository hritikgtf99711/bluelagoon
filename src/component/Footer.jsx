import React from "react";
import { NavLink } from "react-router-dom";
export default function Footer({ openModal }) {
  return (
    <footer className="bg-[var(--primary-color)] text-white text-center pt-[80px]">
      <div className="container">
        <div className="inline-block ">
          <div className="relative">
            <div className="h-[1px] w-[120px] absolute  left-[180px] top-[30px]  bg-gradient-to-r to-gray-200 from-teal-70"></div>
            <img
              src="/assets/icons/logo-white.svg"
              className="m-[auto]"
              alt="icon"
            />
            <div className="h-[1px] w-[120px] absolute  bg-gradient-to-r right-[180px]  top-[30px]    from-gray-200 to-teal-70"></div>
          </div>
          <div className="inline-block mt-[45px]">
            <div className="h-[1px] w-[100%] line-gradient"></div>
            <ul className="flex justify-center my-[20px]" data-gsap="fade-up">
              <li>
                <NavLink
                  to="/"
                  className="text-white uppercase lg:text-[14px] text-[13px] font-[500] me-[65px]"
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about"
                  className="text-white uppercase lg:text-[14px] text-[13px] font-[500] me-[65px]"
                >
                  about us
                </NavLink>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  onClick={openModal}
                  className="text-white uppercase lg:text-[14px] text-[13px] font-[500]"
                >
                  contact us
                </a>
              </li>
            </ul>
            <div className="h-[1px] w-[100%] line-gradient"></div>
          </div>
          <ul className="my-[45px]">
            <li className="text-[16px] mb-[16px] tracking-[1px]">
              <span>Head Office:</span>
              <span className="font-manrope ml-[6px] text-[12px] lg:text-[14px]">
                Plot no. 65, Sector-18 Gurugram, Haryana - 122001, India
              </span>
            </li>
            <li className="text-[16px] mb-[16px] tracking-[1px]">
              <span>Sales Office:</span>
              <span className="font-manrope ml-[6px] text-[12px] lg:text-[14px]">
                1st Floor, Rainbow Central, Ocean Front, Hulhumale Phase I,
                Republic of Maldives
              </span>
            </li>
            <li className="text-[16px]  tracking-[1px]">
              <span>Site Address:</span>
              <span className="font-manrope ml-[6px] text-[12px] lg:text-[14px]">
                Plot no 20094, Fithuroanu Magu, Hulhumalé Phase II, Republic of
                Maldives
              </span>
            </li>
          </ul>
        </div>
        <ul className="lg:flex  justify-between m-0 py-[20px] border-t-[1px] border-[#ede7d34d]">
          <li className="font-manrope text-[12px] flex tracking-[0.5px] lg:mb-0 mb-[6px]  lg:text-[14px]">
            <NavLink to="/disclaimer" className="font-manrope">
              Disclaimer & Privacy Policy
            </NavLink>
           <span className="block mx-[5px]">|</span>  Copyright ©Blue lagoon 2025
          </li>
          <li className="font-manrope text-[12px] flex tracking-[0.5px] lg:text-[14px]">
            All Rights Reserved  <span className="block mx-[5px]">|</span>
             <a href="" className="font-manrope ml-[3px]" target="_blank">
              Crafted by GTF Technologies
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
