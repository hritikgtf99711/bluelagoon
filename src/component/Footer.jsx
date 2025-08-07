import React from "react";

export default function Footer() {
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
          <ul className="flex justify-center my-[20px]">
            <li>
              <a href="" className="text-white uppercase font-[500] me-[65px]">
                Home
              </a>
            </li>
            <li>
              <a href="" className="text-white uppercase font-[500] me-[65px]">
                projects
              </a>
            </li>
            <li>
              <a href="" className="text-white uppercase font-[500] me-[65px]">
                about us
              </a>
            </li>
            <li>
              <a href="" className="text-white uppercase font-[500]">
                contact us
              </a>
            </li>
          </ul>
          <div className="h-[1px] w-[100%] line-gradient"></div>
        </div>
        <ul className="my-[45px]">
            <li className="text-[16px] mb-[16px] tracking-[1px]">
                <span>Head Office:</span> <span className="font-manrope text-[14px]">Plot no. 65, Sector-18 Gurugram, Haryana - 122001, India</span>
            </li>
             <li className="text-[16px] mb-[16px] tracking-[1px]">
                <span>Sales Office:</span> <span className="font-manrope text-[14px]">1st Floor, Rainbow Central, Ocean Front, Hulhumale Phase I, Republic of Maldives</span>
            </li>
            <li className="text-[16px]  tracking-[1px]">
                <span>Site Address:</span> <span className="font-manrope text-[14px]">Plot no 20094, Fithuroanu Magu, Hulhumalé Phase II, Republic of Maldives</span>
            </li>
        </ul>
       
      </div> 
       <ul className="flex justify-between m-0 py-[20px] border-t-[1px] border-[#ede7d34d]">
            <li className="font-manrope text-[14px]">Disclaimer & Privacy Policy |  Copyright ©Blue lagoon 2025</li>
            <li className="font-manrope text-[14px]">All Rights Reserved | Crafted by GTF Technologies</li>
        </ul>   
      </div>
    </footer>
  );
}
