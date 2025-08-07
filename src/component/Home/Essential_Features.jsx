import React from 'react'
import Headings from '../../utils/Headings'
export default function Essential_Features() {
  return (
    <section className='py-[80px] bg-[var(--primary-color)] overflow-hidden relative'>
        <img src='/assets/icons/layered_blob.svg' className='absolute bottom-[-80px] left-0 w-[100%]' alt='layered blob'/>
         <div className="heading_container text-center mb-[20px]">
            <img src="/assets/icons/icon_design_secondary.svg" className="m-auto" alt="icon design" />
            <span className="uppercase text-[var(--secondary-color)] mb-[15px] mt-[30px] font-[500] block">ESSENTIAL FEATURES</span>
            <Headings classNames=' text-[var(--secondary-color)] ' headings={<span>Designed with Purpose<span className="lg:block"></span>and Precision</span>} />
        </div>
        <div className='container'>
            <div className='grid grid-cols-12 gap-[80px] mt-[150px]'>
                <div className='col-span-4'>
                    <div className='cars_item'>
                        <img src='/assets/images/home/essential/essential_1.jpg' className='w-[100%]' alt='essential 1'/>
                        <h3 className='text-[var(--secondary-color)] text-[24px] text-center mt-[25px]'>Elevators</h3>
                    </div>
                </div>
                 <div className='col-span-4 mt-[-85px]'>
                    <div className='cars_item'>
                        <img src='/assets/images/home/essential/essential_2.jpg' className='w-[100%]' alt='essential 1'/>
                        <h3 className='text-[var(--secondary-color)] text-[24px] text-center mt-[25px]'>Smart Home <span className='lg:block'></span> Technology</h3>
                    </div>
                </div>
                 <div className='col-span-4'>
                    <div className='cars_item'>
                        <img src='/assets/images/home/essential/essential_3.jpg' className='w-[100%]' alt='essential 1'/>
                        <h3 className='text-[var(--secondary-color)] text-[24px] text-center mt-[25px]'>Elevators</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
