import React from 'react'
import { useOutletContext } from 'react-router-dom'
import Headings from './Headings';
export default function Tabs() {
       const { openModal} = useOutletContext();
    
  return (
    <div className='pt-[80px]'>
        <div className='container'>
        <Headings
                headings={
                 <span>Explore Every Detail</span>
                }
              />
     <div className="grid grid-cols-2 lg:grid-cols-3 gap-[5px] lg:gap-[30px] mt-[50px] relative lg:w-[70%] m-auto">
                {[
                  { key: "brochure", label: "Brochure" },
                  { key: "floorplans", label: "Floor plans" },
                  { key: "costsheet", label: "Cost sheet" },
                  { key: "paymentschedule", label: "Payment Schedule" },
                  { key: "finishingschedule", label: "Finishing Schedule" },
                  { key: "applicationform", label: "Application form" },
                ].map(({ key, label }) => (
                  <div
                    key={key}
                    data-gsap="fade-up"
                    data-gsap-duration="1"
                    data-gsap-delay="0.6"
                    className="col-span text-center"
                  >
                    <button
                      onClick={() => openModal(key)}
                      className="lg:text-[14px] text-[10px] lg:w-[auto] w-[100%] mx-auto bg-[var(--primary-color)] book_btn cursor-pointer tracking-[2px] text-white uppercase lg:px-8 lg:py-3 lg:px-[35px] py-[15px]"
                    >
                      {label}
                    </button>
                  </div>
                ))}
              </div>
              </div>
              </div>
  )
}
